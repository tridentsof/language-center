import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Global directive for scroll animations
app.directive('scroll-animate', {
  mounted(el, binding) {
    // Add the scroll-trigger class to the element
    el.classList.add('scroll-trigger')
    
    // Add any additional animation classes from binding value
    if (binding.value) {
      const classes = binding.value.split(' ')
      classes.forEach(cls => el.classList.add(cls))
    }
  }
})

// Mount the app
app.mount('#app')

// Initialize scroll animations after app is mounted
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
  
  // Observe all elements with scroll-trigger class
  document.querySelectorAll('.scroll-trigger').forEach(element => {
    observer.observe(element)
  })
})
