<script setup>
import { ref, onMounted, computed, watch } from 'vue';

// Animation state for scroll reveal
const isVisible = ref(false);
const programsRef = ref(null);
const activeTabIndicator = ref(null);

// Sample program data with enhanced content
const programs = [
  {
    id: 1,
    title: 'English for Kids',
    description: 'Our English program uses interactive methods to make language learning fun and effective. Children develop listening, speaking, reading, and writing skills through games, songs, and stories.',
    icon: 'language',
    color: 'primary',
    features: [
      'Age-appropriate curriculum tailored to each child',
      'Interactive learning through games and activities',
      'Development of all four language skills',
      'Regular progress assessments and feedback',
      'Cultural exposure and global awareness'
    ],
    ageRange: '4-12 years'
  },
  {
    id: 2,
    title: 'Life & Communication Skills',
    description: 'This program focuses on essential life skills such as problem-solving, teamwork, and public speaking. Children learn to express themselves confidently and work collaboratively with others.',
    icon: 'skills',
    color: 'secondary',
    features: [
      'Public speaking and presentation skills',
      'Collaborative problem-solving activities',
      'Leadership and teamwork development',
      'Critical thinking and decision making',
      'Effective communication strategies'
    ],
    ageRange: '6-15 years'
  },
  {
    id: 3,
    title: 'Emotional Intelligence & Self-Discovery',
    description: 'Children learn to identify and manage their emotions, develop empathy, and build healthy relationships. This program helps children understand themselves and others better.',
    icon: 'emotion',
    color: 'accent',
    features: [
      'Emotional awareness and regulation techniques',
      'Empathy and social skills development',
      'Conflict resolution and peer mediation',
      'Self-confidence and positive identity building',
      'Mindfulness and stress management practices'
    ],
    ageRange: '5-16 years'
  }
];

// Active tab state with animation
const activeTab = ref(1);

const setActiveTab = (id) => {
  activeTab.value = id;
  updateTabIndicator();
};

// Get the active program
const activeProgram = computed(() => {
  return programs.find(program => program.id === activeTab.value) || programs[0];
});

// Update the position of the active tab indicator
const updateTabIndicator = () => {
  if (!activeTabIndicator.value) return;
  
  const activeTabElement = document.querySelector(`.tab-button[data-id="${activeTab.value}"]`);
  if (activeTabElement) {
    const { offsetLeft, offsetWidth } = activeTabElement;
    activeTabIndicator.value.style.left = `${offsetLeft}px`;
    activeTabIndicator.value.style.width = `${offsetWidth}px`;
  }
};

// Initialize animations and tab indicator
onMounted(() => {
  // Add scroll-trigger class to enable scroll animations
  if (programsRef.value) {
    programsRef.value.classList.add('scroll-trigger');
  }
  
  // Initialize tab indicator
  activeTabIndicator.value = document.querySelector('.tab-indicator');
  updateTabIndicator();
  
  // Handle window resize for tab indicator
  window.addEventListener('resize', updateTabIndicator);
  
  // Trigger initial animation if section is already in viewport
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

// Watch for tab changes to animate content
watch(activeTab, () => {
  // Add a small delay to allow for tab indicator animation
  setTimeout(() => {
    const programContent = document.querySelector('.program-content');
    if (programContent) {
      programContent.classList.add('animate-fade-in');
      setTimeout(() => {
        programContent.classList.remove('animate-fade-in');
      }, 500);
    }
  }, 50);
});
</script>

<template>
  <section 
    id="programs" 
    ref="programsRef"
    class="relative section bg-accent overflow-hidden"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-40 -right-20 w-64 h-64 rounded-full bg-primary opacity-5 blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary opacity-5 blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent opacity-5 blur-3xl"></div>
    </div>
    
    <div class="container mx-auto relative z-10">
      <div 
        class="text-center mb-16 transform transition-all duration-1000 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <h2 class="heading-lg text-secondary mb-4">
          <span class="relative inline-block">
            Our
            <span class="text-primary"> Programs</span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded"></span>
          </span>
        </h2>
        <div class="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover our specialized programs designed to nurture your child's development in language, life skills, and emotional intelligence.
        </p>
      </div>
      
      <!-- Program Tabs with animated indicator -->
      <div 
        class="relative mb-12 transform transition-all duration-700 delay-300 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="relative flex flex-wrap justify-center bg-white rounded-full shadow-md p-2 overflow-hidden max-w-3xl mx-auto">
          <!-- Tab Indicator (animated) -->
          <div class="tab-indicator absolute h-full bg-secondary rounded-full transition-all duration-300 ease-out" style="top: 0;"></div>
          
          <!-- Tab Buttons -->
          <button 
            v-for="program in programs" 
            :key="program.id"
            class="tab-button relative z-10 px-6 py-3 mx-1 rounded-full cursor-pointer transition-all duration-300 text-sm md:text-base font-medium"
            :class="activeTab === program.id ? 'text-white' : 'text-gray-700 hover:text-gray-900'"
            :data-id="program.id"
            @click="setActiveTab(program.id)"
          >
            {{ program.title }}
          </button>
        </div>
      </div>
      
      <!-- Program Content with animation -->
      <div 
        class="program-content bg-white rounded-2xl shadow-hover overflow-hidden transform transition-all duration-700 delay-500 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <!-- Using computed activeProgram instead of v-for with v-show -->
        <div class="p-8">
          <div class="flex flex-col lg:flex-row items-center gap-8">
            <!-- Program Icon with animation -->
            <div class="lg:w-1/3 flex justify-center">
              <div class="relative p-6 rounded-full bg-gradient-to-br" :class="`from-${activeProgram.color}-light to-light`">
                <!-- English for Kids Icon -->
                <svg v-if="activeProgram.icon === 'language'" xmlns="http://www.w3.org/2000/svg" 
                  class="w-48 h-48 text-primary animate-float drop-shadow-lg" 
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                </svg>
                
                <!-- Life & Communication Skills Icon -->
                <svg v-if="activeProgram.icon === 'skills'" xmlns="http://www.w3.org/2000/svg" 
                  class="w-48 h-48 text-primary animate-float drop-shadow-lg" 
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
                </svg>
                
                <!-- Emotional Intelligence Icon -->
                <svg v-if="activeProgram.icon === 'emotion'" xmlns="http://www.w3.org/2000/svg" 
                  class="w-48 h-48 text-primary animate-float drop-shadow-lg" 
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                  <circle cx="9" cy="13" r="1.25"/>
                  <circle cx="15" cy="13" r="1.25"/>
                </svg>
                
                <!-- Decorative elements -->
                <div class="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full opacity-20 animate-float" style="animation-delay: 0.3s;"></div>
                <div class="absolute -bottom-3 -left-3 w-10 h-10 bg-secondary rounded-full opacity-20 animate-float" style="animation-delay: 0.7s;"></div>
              </div>
            </div>
            
            <!-- Program Description with enhanced content -->
            <div class="lg:w-2/3">
              <div class="flex flex-col md:flex-row md:items-center mb-6">
                <h3 class="text-2xl md:text-3xl font-bold text-secondary mb-2 md:mb-0">{{ activeProgram.title }}</h3>
                <span class="md:ml-4 px-4 py-1 bg-primary-light text-primary text-sm rounded-full inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  {{ activeProgram.ageRange }}
                </span>
              </div>
              
              <p class="text-lg text-gray-700 mb-8 leading-relaxed">{{ activeProgram.description }}</p>
              
              <!-- Program Features with animation -->
              <div class="bg-light rounded-lg p-6 mb-8">
                <h4 class="text-lg font-semibold text-secondary mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Program Features:
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="(feature, index) in activeProgram.features" 
                    :key="index"
                    class="flex items-start gap-3 animate-fadeIn"
                    :style="{ animationDelay: `${index * 100}ms` }"
                  >
                    <div class="text-primary mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700">{{ feature }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Call to action buttons -->
              <div class="flex flex-wrap gap-4">
                <a href="#contact" class="btn btn-primary inline-flex items-center group">
                  <span>Enroll Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
                <button class="btn btn-outline-primary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Program selection CTA -->
      <div 
        class="mt-16 text-center transform transition-all duration-1000 delay-700 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <p class="text-lg text-gray-700 mb-6">
          Not sure which program is right for your child? Schedule a free assessment with our language experts.
        </p>
        <a href="#register" class="btn btn-lg btn-primary-outline shadow-hover inline-flex items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          <span>Schedule Free Assessment</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>