<template>
  <section class="footer-app">
    <footer class="site-footer">
    <div class="footer-top">
      <section class="footer-newsletter" aria-labelledby="newsletter-title">
        <h2 id="newsletter-title">BE THE FIRST TO KNOW</h2>
        <p>Sign up for updates from mettā muse.</p>
        <form class="newsletter-form" @submit.prevent>
          <label class="sr-only" for="footer-email">Email address</label>
          <input id="footer-email" type="email" placeholder="Enter your e-mail..." autocomplete="email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>

      <section class="footer-contact" aria-labelledby="contact-title">
        <h2 id="contact-title">CONTACT US</h2>
        <a href="tel:+442211335360">+44 221 133 5360</a>
        <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
        <h2 class="currency-title">CURRENCY</h2>
        <button class="currency-button" type="button" aria-label="Selected currency: US dollar">
          <span class="us-flag" aria-hidden="true"></span>
          <span>USD</span>
          <ChevronDown :size="15" stroke-width="2" />
        </button>
        <p class="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
      </section>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <section class="footer-brand" aria-labelledby="brand-title">
        <h2 id="brand-title">mettā muse</h2>
        <nav aria-label="Company links">
          <NuxtLink v-for="link in companyLinks" :key="link.label" :to="link.to">{{ link.label }}</NuxtLink>
        </nav>
      </section>

      <section class="footer-links" aria-labelledby="quick-links-title">
        <h2 id="quick-links-title">QUICK LINKS</h2>
        <nav aria-label="Customer links">
          <NuxtLink v-for="link in quickLinks" :key="link.label" :to="link.to">{{ link.label }}</NuxtLink>
        </nav>
      </section>

      <section class="footer-social" aria-labelledby="follow-title">
        <h2 id="follow-title">FOLLOW US</h2>
        <div class="social-links">
          <a href="#" aria-label="Instagram"><Instagram :size="19" stroke-width="1.8" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin :size="19" stroke-width="1.8" /></a>
        </div>
        <h2 class="accepted-title">mettā muse ACCEPTS</h2>
        <div class="payment-methods" aria-label="Accepted payment methods">
          <span class="payment payment--gpay">G Pay</span>
          <span class="payment payment--mastercard"><i></i><i></i></span>
          <span class="payment payment--paypal">P</span>
          <span class="payment payment--amex">AMEX</span>
          <span class="payment payment--apple">Apple Pay</span>
          <span class="payment payment--opay">O Pay</span>
        </div>
      </section>
    </div>

    <p class="footer-copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
  </footer>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, Instagram, Linkedin } from 'lucide-vue-next'

const companyLinks = [
  { label: 'About Us', to: '/faq' },
  { label: 'Stories', to: '/agenda' },
  { label: 'Artisans', to: '/program' },
  { label: 'Boutiques', to: '/sponsors' },
  { label: 'Contact Us', to: '/help' },
  { label: 'EU Compliances Docs', to: '/visa-info' },
]

const quickLinks = [
  { label: 'Orders & Shipping', to: '/checkout' },
  { label: 'Join/Login as a Seller', to: '/registration' },
  { label: 'Payment & Pricing', to: '/checkout' },
  { label: 'Return & Refunds', to: '/faq' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Privacy Policy', to: '/faq' },
  { label: 'Terms & Conditions', to: '/faq' },
]
</script>
