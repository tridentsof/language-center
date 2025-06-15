<script setup>
import { ref, onMounted } from 'vue';

// Animation state for scroll reveal
const isVisible = ref(false);
const ctaRef = ref(null);

// Countdown timer data (example: next enrollment deadline)
const countdown = ref({
  days: 7,
  hours: 23,
  minutes: 59,
  seconds: 59
});

// Enrollment benefits
const benefits = [
  { icon: 'academic-cap', text: 'Expert teachers with international experience' },
  { icon: 'users', text: 'Small class sizes for personalized attention' },
  { icon: 'star', text: 'Fun, interactive learning environment' },
  { icon: 'chart-bar', text: 'Regular progress reports and parent consultations' }
];

onMounted(() => {
  // Add scroll-trigger class to enable scroll animations
  if (ctaRef.value) {
    ctaRef.value.classList.add('scroll-trigger');
  }
  
  // Trigger initial animation if section is already in viewport
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section 
    id="cta" 
    ref="ctaRef"
    class="relative bg-gradient-to-br from-primary to-secondary py-20 md:py-24 overflow-hidden"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform -translate-x-1/4 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/4 translate-y-1/2"></div>
      
      <!-- Floating shapes -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-lg transform rotate-12 animate-float"></div>
      <div class="absolute bottom-20 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-float animation-delay-1000"></div>
      <div class="absolute top-1/2 right-1/4 w-12 h-12 bg-white opacity-10 rounded-lg transform -rotate-12 animate-float animation-delay-2000"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Main content with animation -->
        <div 
          class="text-center mb-12 transform transition-all duration-1000 ease-out scroll-animate"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Child's <span class="text-accent">Language Journey</span>?
          </h2>
          <p class="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Enroll today and give your child the gift of language and essential life skills that will last a lifetime.
          </p>
        </div>
        
        <!-- Benefits with icons -->
        <div 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transform transition-all duration-1000 delay-300 ease-out scroll-animate"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <div 
            v-for="(benefit, index) in benefits" 
            :key="index"
            class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary mb-4">
              <!-- Academic Cap Icon -->
              <svg v-if="benefit.icon === 'academic-cap'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              
              <!-- Users Icon -->
              <svg v-if="benefit.icon === 'users'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              
              <!-- Star Icon -->
              <svg v-if="benefit.icon === 'star'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              
              <!-- Chart Bar Icon -->
              <svg v-if="benefit.icon === 'chart-bar'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <p class="text-white text-lg">{{ benefit.text }}</p>
          </div>
        </div>
        
        <!-- Call to action buttons -->
        <div 
          class="flex flex-col sm:flex-row justify-center gap-6 transform transition-all duration-1000 delay-500 ease-out scroll-animate"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <a 
            href="#contact" 
            class="btn btn-accent text-primary hover:bg-accent-light font-bold py-4 px-8 rounded-xl shadow-lg transition duration-300 text-lg flex items-center justify-center group"
          >
            <span>Enroll Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a 
            href="#programs" 
            class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-xl transition duration-300 text-lg flex items-center justify-center"
          >
            Explore Programs
          </a>
        </div>
        
        <!-- Limited time offer -->
        <div 
          class="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto transform transition-all duration-1000 delay-700 ease-out scroll-animate"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-left">
              <h3 class="text-xl font-bold text-white mb-2">Limited Time Offer</h3>
              <p class="text-white opacity-90">Register before the deadline and receive a free assessment session and learning materials kit!</p>
            </div>
            <div class="flex gap-3">
              <div class="bg-white bg-opacity-20 rounded-lg p-3 w-16 text-center">
                <div class="text-2xl font-bold text-white">{{ countdown.days }}</div>
                <div class="text-xs text-white opacity-80">Days</div>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3 w-16 text-center">
                <div class="text-2xl font-bold text-white">{{ countdown.hours }}</div>
                <div class="text-xs text-white opacity-80">Hours</div>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3 w-16 text-center">
                <div class="text-2xl font-bold text-white">{{ countdown.minutes }}</div>
                <div class="text-xs text-white opacity-80">Mins</div>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-3 w-16 text-center">
                <div class="text-2xl font-bold text-white">{{ countdown.seconds }}</div>
                <div class="text-xs text-white opacity-80">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>