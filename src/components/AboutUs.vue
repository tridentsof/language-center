<script setup>
import { ref, onMounted } from 'vue';

// Animation state for scroll reveal
const isVisible = ref(false);
const valueCards = ref([]);

// Initialize animations
onMounted(() => {
  // Add scroll-trigger class to enable scroll animations
  const sectionEl = document.querySelector('#about-us');
  if (sectionEl) {
    sectionEl.classList.add('scroll-trigger');
  }
  
  // Get all value cards for staggered animation
  valueCards.value = document.querySelectorAll('.value-card');
  valueCards.value.forEach((card, index) => {
    card.classList.add('scroll-trigger');
    card.style.transitionDelay = `${index * 150 + 300}ms`;
  });
  
  // Trigger initial animation if section is already in viewport
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// Value propositions data
const values = [
  {
    title: 'Creativity',
    description: 'We foster creative thinking through interactive activities that encourage children to express themselves in new and innovative ways.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'Confidence',
    description: 'Our supportive environment helps children build self-confidence as they master new language skills and overcome challenges.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Communication',
    description: 'We develop effective communication skills through engaging activities that promote listening, speaking, reading, and writing.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  }
];
</script>

<template>
  <section id="about-us" class="relative bg-light py-20 md:py-28 overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary opacity-5 blur-3xl"></div>
      <div class="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-secondary opacity-5 blur-3xl"></div>
    </div>
    
    <div class="content-container relative z-10">
      <div 
        class="text-center mb-16 transform transition-all duration-1000 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <h2 class="heading-lg text-secondary-dark mb-6">
          <span class="relative inline-block">
            About
            <span class="text-primary"> Eduluxe</span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded"></span>
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing a nurturing environment where children can develop essential language skills 
          while building confidence and creativity through our innovative teaching methods.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <!-- Value Propositions (mapped from data) -->
        <div 
          v-for="(value, index) in values" 
          :key="index"
          class="value-card bg-white p-8 rounded-xl shadow-hover text-center transform transition-all duration-700 ease-out scroll-animate hover:translate-y-[-8px]"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <!-- Decorative background circle -->
            <div class="absolute inset-0 bg-primary-light rounded-full opacity-20 animate-pulse" 
                 :style="{ animationDuration: `${3 + index}s` }"></div>
            
            <!-- Icon -->
            <div class="relative z-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon" />
              </svg>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-secondary-dark mb-3">{{ value.title }}</h3>
          <p class="text-gray-600">
            {{ value.description }}
          </p>
        </div>
      </div>
      
      <!-- Additional content: Our approach -->
      <div 
        class="mt-20 bg-white p-8 md:p-10 rounded-xl shadow-hover transform transition-all duration-1000 delay-500 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 class="heading-md text-secondary-dark mb-4">Our Approach</h3>
            <p class="text-gray-600 mb-4">
              At our Language Center, we believe that every child has unique potential. Our teaching methodology 
              combines proven language acquisition techniques with playful, engaging activities that make learning fun.
            </p>
            <p class="text-gray-600">
              We focus on creating a positive, supportive environment where children feel comfortable taking risks and 
              making mistakes—essential steps in the language learning process.
            </p>
            
            <!-- Stats -->
            <div class="flex flex-wrap gap-8 mt-8">
              <div class="flex items-center">
                <div class="bg-primary-light rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-secondary-dark">10+</div>
                  <div class="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="bg-primary-light rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-secondary-dark">95%</div>
                  <div class="text-sm text-gray-500">Parent Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2">
            <div class="relative rounded-xl overflow-hidden shadow-lg">
              <!-- Image placeholder - in a real project, use an actual image -->
              <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-light to-secondary-light">
                <!-- SVG illustration of classroom -->
                <svg class="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Background -->
                  <rect width="800" height="450" fill="#F9FAFB" />
                  
                  <!-- Classroom elements -->
                  <rect x="100" y="100" width="600" height="300" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2" />
                  
                  <!-- Whiteboard -->
                  <rect x="150" y="130" width="300" height="180" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2" />
                  <line x1="150" y1="160" x2="450" y2="160" stroke="#D1D5DB" stroke-width="1" />
                  <line x1="150" y1="190" x2="450" y2="190" stroke="#D1D5DB" stroke-width="1" />
                  <line x1="150" y1="220" x2="450" y2="220" stroke="#D1D5DB" stroke-width="1" />
                  <line x1="150" y1="250" x2="450" y2="250" stroke="#D1D5DB" stroke-width="1" />
                  <line x1="150" y1="280" x2="450" y2="280" stroke="#D1D5DB" stroke-width="1" />
                  
                  <!-- Teacher -->
                  <circle cx="550" cy="200" r="30" fill="#FFC107" opacity="0.7" />
                  <circle cx="550" cy="200" r="25" fill="#FFFFFF" />
                  <circle cx="540" cy="195" r="5" fill="#795548" />
                  <circle cx="560" cy="195" r="5" fill="#795548" />
                  <path d="M540 210 Q550 220 560 210" stroke="#795548" stroke-width="2" />
                  
                  <!-- Students (simplified) -->
                  <circle cx="500" cy="300" r="20" fill="#FFC107" opacity="0.5" />
                  <circle cx="550" cy="300" r="20" fill="#FFC107" opacity="0.5" />
                  <circle cx="600" cy="300" r="20" fill="#FFC107" opacity="0.5" />
                  
                  <!-- Decorative elements -->
                  <circle cx="200" cy="350" r="15" fill="#FFC107" opacity="0.3" />
                  <circle cx="400" cy="120" r="15" fill="#FFC107" opacity="0.3" />
                  <circle cx="650" cy="150" r="15" fill="#FFC107" opacity="0.3" />
                </svg>
              </div>
              
              <!-- Overlay with play button (for video in a real implementation) -->
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">
                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>