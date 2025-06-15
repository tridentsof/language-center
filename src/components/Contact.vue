<script setup>
import { ref, onMounted } from 'vue';

// Animation state for scroll reveal
const isVisible = ref(false);
const contactRef = ref(null);

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

// Form state
const isSubmitting = ref(false);
const formSubmitted = ref(false);
const errors = ref({});

// Contact information
const contactInfo = [
  {
    icon: 'location',
    title: 'Visit Us',
    details: ['123 Nguyen Hue Street', 'District 1, Ho Chi Minh City', 'Vietnam']
  },
  {
    icon: 'phone',
    title: 'Call Us',
    details: ['+84 28 1234 5678', '+84 90 1234 567']
  },
  {
    icon: 'mail',
    title: 'Email Us',
    details: ['info@languagecenter.edu.vn', 'support@languagecenter.edu.vn']
  },
  {
    icon: 'clock',
    title: 'Working Hours',
    details: ['Monday - Friday: 8:00 AM - 7:00 PM', 'Saturday: 8:00 AM - 5:00 PM', 'Sunday: Closed']
  }
];

// Form validation
const validateForm = () => {
  errors.value = {};
  let isValid = true;
  
  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required';
    isValid = false;
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required';
    isValid = false;
  }
  
  return isValid;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }, 1500);
};

onMounted(() => {
  // Add scroll-trigger class to enable scroll animations
  if (contactRef.value) {
    contactRef.value.classList.add('scroll-trigger');
  }
  
  // Trigger initial animation if section is already in viewport
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section 
    id="contact" 
    ref="contactRef"
    class="relative bg-light py-20 md:py-24 overflow-hidden"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      
      <!-- Floating shapes -->
      <div class="absolute top-40 right-20 w-24 h-24 bg-primary opacity-5 rounded-lg transform rotate-45 animate-float"></div>
      <div class="absolute bottom-40 left-20 w-16 h-16 bg-secondary opacity-5 rounded-full animate-float animation-delay-1000"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section heading -->
      <div 
        class="text-center mb-16 transform transition-all duration-1000 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
          Get in <span class="text-primary">Touch</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions about our programs or want to schedule a visit? We're here to help!
        </p>
      </div>
      
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact information -->
          <div 
            class="lg:w-1/3 transform transition-all duration-1000 delay-300 ease-out scroll-animate"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          >
            <div class="bg-white rounded-xl shadow-hover p-8">
              <h3 class="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div 
                  v-for="(item, index) in contactInfo" 
                  :key="index"
                  class="flex items-start"
                >
                  <!-- Location icon -->
                  <div v-if="item.icon === 'location'" class="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <!-- Phone icon -->
                  <div v-if="item.icon === 'phone'" class="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <!-- Mail icon -->
                  <div v-if="item.icon === 'mail'" class="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <!-- Clock icon -->
                  <div v-if="item.icon === 'clock'" class="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 class="font-bold text-secondary">{{ item.title }}</h4>
                    <p 
                      v-for="(detail, detailIndex) in item.details" 
                      :key="detailIndex"
                      class="text-gray-600"
                    >
                      {{ detail }}
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Social media links -->
              <div class="mt-8">
                <h4 class="font-bold text-secondary mb-4">Follow Us</h4>
                <div class="flex space-x-4">
                  <a href="#" class="bg-primary bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" class="bg-primary bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" class="bg-primary bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" class="bg-primary bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact form -->
          <div 
            class="lg:w-2/3 transform transition-all duration-1000 delay-500 ease-out scroll-animate"
            :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
          >
            <div class="bg-white rounded-xl shadow-hover p-8">
              <h3 class="text-2xl font-bold text-secondary mb-6">Send Us a Message</h3>
              
              <!-- Success message -->
              <div 
                v-if="formSubmitted" 
                class="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6 flex items-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="font-bold">Message sent successfully!</p>
                  <p>Thank you for contacting us. We will get back to you shortly.</p>
                </div>
              </div>
              
              <!-- Contact form -->
              <form v-else @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name field -->
                  <div>
                    <label for="name" class="block text-gray-700 font-medium mb-2">Full Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="formData.name" 
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300" 
                      :class="{'border-red-500': errors.name}"
                      placeholder="Your name"
                    >
                    <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                  </div>
                  
                  <!-- Email field -->
                  <div>
                    <label for="email" class="block text-gray-700 font-medium mb-2">Email <span class="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email" 
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300" 
                      :class="{'border-red-500': errors.email}"
                      placeholder="Your email address"
                    >
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Phone field -->
                  <div>
                    <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.phone" 
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300" 
                      placeholder="Your phone number (optional)"
                    >
                  </div>
                  
                  <!-- Subject field -->
                  <div>
                    <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      v-model="formData.subject" 
                      class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300" 
                      placeholder="Message subject (optional)"
                    >
                  </div>
                </div>
                
                <!-- Message field -->
                <div>
                  <label for="message" class="block text-gray-700 font-medium mb-2">Message <span class="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    rows="5" 
                    class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300" 
                    :class="{'border-red-500': errors.message}"
                    placeholder="Your message"
                  ></textarea>
                  <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                </div>
                
                <!-- Submit button -->
                <button 
                  type="submit" 
                  class="btn btn-primary w-full md:w-auto px-8 py-3 text-lg flex items-center justify-center" 
                  :disabled="isSubmitting"
                >
                  <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Map section -->
      <div 
        class="mt-16 transform transition-all duration-1000 delay-700 ease-out scroll-animate"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <div class="bg-white rounded-xl shadow-hover overflow-hidden">
          <!-- Map placeholder - Replace with actual map implementation -->
          <div class="h-96 bg-gray-200 flex items-center justify-center">
            <div class="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 class="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
              <p class="text-gray-600 max-w-md mx-auto">
                This is a placeholder for an interactive map. In a production environment, you would integrate with Google Maps, Mapbox, or another mapping service.
              </p>
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

.shadow-hover {
  transition: all 0.3s ease;
}

.shadow-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>