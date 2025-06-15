<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Animation state
const isVisible = ref(false);
const animationComplete = ref(false);

// Parallax effect for decorative elements
const parallaxOffset = ref({ x: 0, y: 0 });

// Handle mouse move for parallax effect
const handleMouseMove = (e) => {
  if (window.innerWidth >= 768) { // Only on desktop
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate offset from center (normalized between -1 and 1)
    parallaxOffset.value = {
      x: (clientX - centerX) / centerX * 15, // Max 15px movement
      y: (clientY - centerY) / centerY * 10  // Max 10px movement
    };
  }
};

// Initialize animations
onMounted(() => {
  // Add event listener for parallax effect
  window.addEventListener('mousemove', handleMouseMove);
  
  // Trigger entrance animation
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
  
  // Mark animation as complete after delay
  setTimeout(() => {
    animationComplete.value = true;
  }, 2000);
});

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <section id="home" class="relative bg-gradient-to-b from-secondary to-secondary-light pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
    <!-- Decorative background elements with parallax effect -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        class="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary opacity-10 transform -translate-y-1/2 blur-3xl transition-transform duration-700 ease-out"
        :style="{
          transform: `translate(${parallaxOffset.x * -0.5}px, ${parallaxOffset.y * -0.5}px) scale(1.5) translate(-50%, -50%)`
        }"
      ></div>
      <div 
        class="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-primary opacity-10 blur-3xl transition-transform duration-700 ease-out"
        :style="{
          transform: `translate(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px) scale(1.2)`
        }"
      ></div>
      <div 
        class="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-accent opacity-30 blur-xl transition-transform duration-700 ease-out"
        :style="{
          transform: `translate(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px) translate(-50%, -50%)`
        }"
      ></div>
    </div>
    
    <div class="content-container relative z-10">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Column: Text Content -->
        <div 
          class="md:w-1/2 text-center md:text-left mb-12 md:mb-0 transform transition-all duration-1000 ease-out"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <h1 class="heading-xl text-white mb-6">
            <span class="block">Unlock Your Child's</span>
            <span class="text-primary">Full Potential</span>
          </h1>
          <p 
            class="text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 transition-all duration-1000 delay-300 ease-out"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          >
            We provide a nurturing environment where children develop language skills, confidence, and creativity through engaging programs.
          </p>
          <div 
            class="transition-all duration-1000 delay-500 ease-out"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          >
            <a 
              href="#register" 
              class="btn btn-primary btn-lg shadow-hover inline-flex items-center group"
            >
              <span>Start Your Child's Journey</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
          
          <!-- Social proof or quick stats -->
          <div 
            class="flex flex-wrap justify-center md:justify-start gap-6 mt-10 transition-all duration-1000 delay-700 ease-out"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          >
            <div class="flex items-center">
              <div class="bg-primary rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div class="text-white">
                <div class="font-bold">500+</div>
                <div class="text-xs text-gray-300">Students</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="bg-primary rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div class="text-white">
                <div class="font-bold">20+</div>
                <div class="text-xs text-gray-300">Expert Teachers</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="bg-primary rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div class="text-white">
                <div class="font-bold">5+</div>
                <div class="text-xs text-gray-300">Programs</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Column: Illustration -->
        <div 
          class="md:w-1/2 transition-all duration-1000 delay-300 ease-out"
          :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <div class="relative max-w-lg mx-auto">
            <!-- Main illustration -->
            <svg 
              class="w-full drop-shadow-xl transition-transform duration-700 ease-out"
              :style="{
                transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`
              }"
              viewBox="0 0 500 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Background Elements -->
              <circle cx="250" cy="200" r="150" fill="#FFC107" opacity="0.2" class="animate-pulse" style="animation-duration: 6s;" />
              <circle cx="250" cy="200" r="100" fill="#FFC107" opacity="0.3" class="animate-pulse" style="animation-duration: 4s;" />
              
              <!-- Children Learning Illustration -->
              <!-- Child 1 -->
              <g class="animate-float" style="animation-delay: 0.5s;">
                <circle cx="200" cy="180" r="30" fill="#FFC107" />
                <circle cx="200" cy="180" r="25" fill="#FFFFFF" />
                <circle cx="190" cy="175" r="5" fill="#795548" />
                <circle cx="210" cy="175" r="5" fill="#795548" />
                <path d="M190 190 Q200 200 210 190" stroke="#795548" stroke-width="2" />
              </g>
              
              <!-- Child 2 -->
              <g class="animate-float" style="animation-delay: 1s;">
                <circle cx="300" cy="180" r="30" fill="#FFC107" />
                <circle cx="300" cy="180" r="25" fill="#FFFFFF" />
                <circle cx="290" cy="175" r="5" fill="#795548" />
                <circle cx="310" cy="175" r="5" fill="#795548" />
                <path d="M290 190 Q300 200 310 190" stroke="#795548" stroke-width="2" />
              </g>
              
              <!-- Book -->
              <g class="animate-float" style="animation-delay: 0.2s;">
                <rect x="220" y="220" width="60" height="40" fill="#795548" />
                <rect x="220" y="220" width="30" height="40" fill="#8B4513" />
                <line x1="250" y1="220" x2="250" y2="260" stroke="#FFFFFF" stroke-width="1" />
              </g>
              
              <!-- Learning Elements -->
              <circle cx="180" cy="120" r="15" fill="#FFC107" opacity="0.6" class="animate-pulse" style="animation-duration: 3s;" />
              <circle cx="320" cy="120" r="15" fill="#FFC107" opacity="0.6" class="animate-pulse" style="animation-duration: 5s;" />
              <circle cx="150" cy="250" r="20" fill="#FFC107" opacity="0.6" class="animate-pulse" style="animation-duration: 4s;" />
              <circle cx="350" cy="250" r="20" fill="#FFC107" opacity="0.6" class="animate-pulse" style="animation-duration: 6s;" />
            </svg>
            
            <!-- Floating decorative elements -->
            <div 
              class="absolute -top-10 -right-10 w-20 h-20 bg-primary rounded-full opacity-20 animate-float"
              style="animation-delay: 0.3s;"
            ></div>
            <div 
              class="absolute -bottom-5 -left-5 w-16 h-16 bg-primary rounded-full opacity-20 animate-float"
              style="animation-delay: 0.7s;"
            ></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative Wave -->
    <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FFFFFF" preserveAspectRatio="none" class="w-full h-auto">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>