<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// State for mobile menu
const isMobileMenuOpen = ref(false);

// State for navbar background (transparent at top, solid when scrolled)
const scrollY = ref(0);
const isScrolled = computed(() => scrollY.value > 50);

// State for active section
const activeSection = ref('home');

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  
  // Prevent body scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Handle scroll event to change navbar background and detect active section
const handleScroll = () => {
  scrollY.value = window.scrollY;
  
  // Determine active section based on scroll position
  const sections = ['home', 'about', 'programs', 'testimonials', 'register'];
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
        break;
      }
    }
  }
};

// Add scroll event listener and initialize
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on mount
  
  // Add click event listener to close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(event.target) && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  });
});

// Remove event listeners
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = ''; // Reset body overflow
});
</script>

<template>
  <header 
    class="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="{
      'bg-white shadow-soft py-2': isScrolled,
      'bg-transparent py-4': !isScrolled,
      'bg-white shadow-soft': isMobileMenuOpen
    }"
  >
    <div class="content-container flex justify-between items-center">
      <!-- Logo -->
      <a 
        href="#" 
        class="flex items-center group transition-all duration-300 transform hover:scale-105"
        aria-label="Language Center Home"
      >
        <!-- <svg 
          class="h-10 w-10 text-primary mr-3 transition-transform duration-500 group-hover:rotate-12" 
          viewBox="0 0 40 40" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 5L33.6603 28.75H6.33975L20 5Z" />
          <circle cx="20" cy="20" r="7.5" fill="white" />
        </svg>
        <span 
          class="text-2xl font-bold transition-colors duration-300"
          :class="isScrolled || isMobileMenuOpen ? 'text-secondary' : 'text-white'"
        >Eduluxe</span> -->
        <img id="logo-main" class="w-auto" src="https://satfstateeus.blob.core.windows.net/eduluxe/eduluxe_logo_secondary_tb.png?sp=r&st=2025-06-17T08:39:08Z&se=2025-06-17T16:39:08Z&sv=2024-11-04&sr=b&sig=oijLgSrAwkfF4cTdHv3K8NCOKuO8q3ICVA7SFYXKOC0%3D" alt="">
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <a 
          v-for="(item, index) in [
            { name: 'Home', href: '#hero' },
            { name: 'About', href: '#about-us' },
            { name: 'Programs', href: '#programs' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'Contact', href: '#contact' }
          ]" 
          :key="index"
          :href="item.href" 
          class="relative px-2 py-1 font-medium transition-all duration-300"
          :class="{
            'text-primary': activeSection === item.href.substring(1),
            [isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary']: 
              activeSection !== item.href.substring(1)
          }"
        >
          {{ item.name }}
          <span 
            class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300"
            :class="{ 'scale-x-100': activeSection === item.href.substring(1) }"
          ></span>
        </a>
        <a 
          href="#contact" 
          class="btn btn-primary shadow-soft hover:shadow-hover"
        >
          <span>Đăng kí ngay</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        :class="isScrolled || isMobileMenuOpen ? 'text-secondary' : 'text-white'"
        @click.stop="toggleMobileMenu"
        aria-label="Toggle mobile menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      class="md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out"
      :class="isMobileMenuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'"
    >
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col space-y-4">
          <a 
            v-for="(item, index) in [
              { name: 'Home', href: '#hero' },
              { name: 'About', href: '#about-us' },
              { name: 'Programs', href: '#programs' },
              { name: 'Testimonials', href: '#testimonials' },
              { name: 'Contact', href: '#contact' }
            ]" 
            :key="index"
            :href="item.href" 
            class="text-secondary hover:text-primary font-medium transition-colors duration-300 p-2 rounded-lg"
            :class="{ 'bg-primary-light text-secondary': activeSection === item.href.substring(1) }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
          <a 
            href="#register" 
            class="btn btn-primary w-full text-center mt-4 flex items-center justify-center"
            @click="closeMobileMenu"
          >
            <span>Đăng kí ngay</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
  #logo-main {
    width: 50%
  }
</style>