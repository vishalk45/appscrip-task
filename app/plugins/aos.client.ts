import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  AOS.init({
    duration: 1000,
    once: true,
  })
})