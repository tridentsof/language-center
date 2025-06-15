<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

// Animation state for scroll reveal
const isVisible = ref(false);
const testimonialsRef = ref(null);

// Enhanced testimonial data with ratings and dates
const testimonials = [
  {
    id: 1,
    name: 'Minh Anh',
    age: 8,
    parent: 'Mrs. Hương',
    rating: 5,
    text: 'My daughter used to be shy about speaking English, but after just 6 months in the program, she confidently speaks with her international friends. The teachers make learning fun and engaging!',
    image: 'girl1',
    program: 'English for Kids',
    date: 'March 15, 2023'
  },
  {
    id: 2,
    name: 'Quang Minh',
    age: 10,
    parent: 'Mr. Tuấn',
    rating: 5,
    text: "The emotional intelligence program has helped my son understand and manage his emotions better. He's more empathetic and communicates his feelings clearly now. Highly recommended!",
    image: 'boy1',
    program: 'Emotional Intelligence & Self-Discovery',
    date: 'January 8, 2023'
  },
  {
    id: 3,
    name: 'Hoàng Yến',
    age: 7,
    parent: 'Mrs. Linh',
    rating: 4,
    text: "The life skills program has been transformative for my daughter. She's more confident, organized, and takes initiative in her daily activities. The teachers are supportive and caring.",
    image: 'girl2',
    program: 'Life & Communication Skills',
    date: 'April 22, 2023'
  },
  {
    id: 4,
    name: 'Gia Huy',
    age: 9,
    parent: 'Mr. Đạt',
    rating: 5,
    text: "My son has improved tremendously in his English skills. The program's approach makes learning natural and enjoyable. He looks forward to his classes every week!",
    image: 'boy2',
    program: 'English for Kids',
    date: 'May 10, 2023'
  }
];

// Carousel state with enhanced controls
const currentIndex = ref(0);
const autoplayInterval = ref(null);
const isPaused = ref(false);
const isTransitioning = ref(false);

const nextSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const prevSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const goToSlide = (index) => {
  if (isTransitioning.value || currentIndex.value === index) return;
  isTransitioning.value = true;
  currentIndex.value = index;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

// Get current testimonial
const currentTestimonial = computed(() => {
  return testimonials[currentIndex.value];
});

// Generate star rating array
const generateRating = (rating) => {
  return Array.from({ length: 5 }, (_, i) => i < rating);
};

// Autoplay functionality with improved controls
const startAutoplay = () => {
  if (isPaused.value) return;
  stopAutoplay();
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 6000);
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const pauseAutoplay = () => {
  isPaused.value = true;
  stopAutoplay();
};

const resumeAutoplay = () => {
  isPaused.value = false;
  startAutoplay();
};

onMounted(() => {
  // Add scroll-trigger class to enable scroll animations
  if (testimonialsRef.value) {
    testimonialsRef.value.classList.add('scroll-trigger');
  }
  
  // Start autoplay
  startAutoplay();
  
  // Trigger initial animation if section is already in viewport
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<template>
  <section 
    id="testimonials" 
    ref="testimonialsRef"
    class="relative bg-gradient-to-b from-light to-primary-light py-20 md:py-28 overflow-hidden"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary opacity-5 blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary opacity-5 blur-3xl"></div>
      <svg class="absolute -left-24 top-1/3 text-primary opacity-10 w-48 h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <svg class="absolute -right-24 top-2/3 text-primary opacity-10 w-48 h-48 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div 
        class="text-center mb-16 transform transition-all duration-1000 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <h2 class="heading-lg text-secondary mb-6">
          <span class="relative inline-block">
            What
            <span class="text-primary"> Parents Say</span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded"></span>
          </span>
        </h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Hear from parents whose children have experienced the joy of learning at our Language Center.
          Our programs have helped hundreds of children develop language skills and confidence.
        </p>
      </div>
      
      <!-- Testimonial Carousel with enhanced design -->
      <div 
        class="relative max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <!-- Carousel Container -->
        <div class="overflow-hidden rounded-2xl shadow-lg">
          <div 
            class="flex transition-transform duration-500 ease-in-out" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <!-- Testimonial Cards -->
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="w-full flex-shrink-0 bg-accent p-8 md:p-10"
            >
              <div class="flex flex-col md:flex-row gap-8 items-center">
                <!-- Avatar -->
                <div class="md:w-1/3 flex flex-col items-center">
                  <!-- Child 1 Avatar -->
                  <svg v-if="testimonial.image === 'girl1'" class="w-32 h-32 rounded-full bg-primary p-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="#FFCC80" />
                    <circle cx="35" cy="40" r="5" fill="#5D4037" />
                    <circle cx="65" cy="40" r="5" fill="#5D4037" />
                    <path d="M40,55 Q50,65 60,55" stroke="#5D4037" stroke-width="2" fill="none" />
                    <path d="M25,30 Q40,20 50,30 Q60,20 75,30" stroke="#8D6E63" stroke-width="4" fill="none" />
                    <path d="M25,85 C25,70 75,70 75,85" fill="#F48FB1" />
                  </svg>
                  
                  <!-- Child 2 Avatar -->
                  <svg v-if="testimonial.image === 'boy1'" class="w-32 h-32 rounded-full bg-primary p-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="#FFCC80" />
                    <circle cx="35" cy="40" r="5" fill="#5D4037" />
                    <circle cx="65" cy="40" r="5" fill="#5D4037" />
                    <path d="M40,55 Q50,65 60,55" stroke="#5D4037" stroke-width="2" fill="none" />
                    <path d="M30,25 L70,25 L70,40 C70,55 30,55 30,40 Z" fill="#8D6E63" />
                    <path d="M25,85 C25,70 75,70 75,85" fill="#64B5F6" />
                  </svg>
                  
                  <!-- Child 3 Avatar -->
                  <svg v-if="testimonial.image === 'girl2'" class="w-32 h-32 rounded-full bg-primary p-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="#FFCC80" />
                    <circle cx="35" cy="40" r="5" fill="#5D4037" />
                    <circle cx="65" cy="40" r="5" fill="#5D4037" />
                    <path d="M40,55 Q50,65 60,55" stroke="#5D4037" stroke-width="2" fill="none" />
                    <path d="M20,35 Q30,15 50,25 Q70,15 80,35" stroke="#8D6E63" stroke-width="4" fill="none" />
                    <path d="M25,85 C25,70 75,70 75,85" fill="#AED581" />
                  </svg>
                  
                  <!-- Child 4 Avatar -->
                  <svg v-if="testimonial.image === 'boy2'" class="w-32 h-32 rounded-full bg-primary p-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="#FFCC80" />
                    <circle cx="35" cy="40" r="5" fill="#5D4037" />
                    <circle cx="65" cy="40" r="5" fill="#5D4037" />
                    <path d="M40,55 Q50,65 60,55" stroke="#5D4037" stroke-width="2" fill="none" />
                    <rect x="30" y="20" width="40" height="15" rx="7" fill="#8D6E63" />
                    <path d="M25,85 C25,70 75,70 75,85" fill="#FFB74D" />
                  </svg>
                  
                  <p class="mt-4 font-bold text-secondary">{{ testimonial.name }}, {{ testimonial.age }}</p>
                  
                  <!-- Star Rating -->
                  <div class="flex mt-2">
                    <svg 
                      v-for="star in 5" 
                      :key="star"
                      :class="[star <= testimonial.rating ? 'text-yellow-500' : 'text-gray-300']"
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                
                <!-- Testimonial Content -->
                <div class="md:w-2/3">
                  <svg class="h-10 w-10 text-primary mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v6a6 6 0 01-6 6H2v2c0 3.314 2.686 6 6 6h10c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6H8c-3.314 0-6 2.686-6 6v2h2c3.314 0 6-2.686 6-6z" />
                  </svg>
                  
                  <p class="text-lg text-gray-700 italic mb-6">{{ testimonial.text }}</p>
                  
                  <p class="font-medium text-secondary">- {{ testimonial.parent }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide" 
          @mouseenter="stopAutoplay" 
          @mouseleave="startAutoplay"
          class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-primary transition-colors duration-300 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide" 
          @mouseenter="stopAutoplay" 
          @mouseleave="startAutoplay"
          class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:bg-primary transition-colors duration-300 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <!-- Dots Indicator with enhanced styling -->
      <div class="flex justify-center items-center mt-8 space-x-3">
        <button 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          @click="goToSlide(index)"
          :class="[`h-3 rounded-full transition-all duration-300 focus:outline-none`, 
                  index === currentIndex ? 'bg-secondary w-10' : 'bg-gray-300 w-3 hover:bg-primary hover:w-6']"
          :aria-label="`Go to testimonial ${index + 1}`"
          :aria-current="index === currentIndex ? 'true' : 'false'"
        ></button>
      </div>
      
      <!-- Call to action -->
      <div 
        class="mt-16 text-center transform transition-all duration-1000 delay-500 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <p class="text-lg text-gray-700 mb-6">
          Join our community of satisfied parents and give your child the gift of language learning.
        </p>
        <a href="#contact" class="btn btn-primary shadow-hover inline-flex items-center group">
          <span>Start Your Child's Journey</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation styles for testimonial transitions */
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>