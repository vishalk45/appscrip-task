<template>
  <section class="app-header">
      <div class="announcement-bar" aria-label="Announcements">
        <div class="announcement-item">
          <Grid2X2 :size="14" stroke-width="1.5" aria-hidden="true" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div class="announcement-item announcement-item--middle">
          <Grid2X2 :size="14" stroke-width="1.5" aria-hidden="true" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div class="announcement-item announcement-item--last">
          <Grid2X2 :size="14" stroke-width="1.5" aria-hidden="true" />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
    <header class="site-header">

      <div class="header-main">
        <NuxtLink to="/" class="brand-mark" aria-label="Homepage">
          <img src="/Logo.png.png" alt="Logo">
        </NuxtLink>

        <NuxtLink to="/" class="wordmark" aria-label="Homepage">LOGO</NuxtLink>

        <div class="header-actions">
          <button class="icon-button" type="button" aria-label="Search">
            <Search :size="25" stroke-width="1.5" />
          </button>
          <button class="icon-button desktop-action" type="button" aria-label="Wishlist">
            <Heart :size="25" stroke-width="1.5" />
          </button>
          <button class="icon-button desktop-action" type="button" aria-label="Shopping bag">
            <ShoppingBag :size="24" stroke-width="1.5" />
          </button>
          <button class="icon-button desktop-action" type="button" aria-label="Account">
            <UserRound :size="23" stroke-width="1.5" />
          </button>
          <button class="language-button desktop-action" type="button" aria-label="Select language">
            ENG
            <ChevronDown :size="15" stroke-width="1.5" />
          </button>
          <button class="icon-button menu-button" type="button" :aria-expanded="isMenuOpen"
            aria-controls="mobile-navigation" aria-label="Toggle navigation" @click="isMenuOpen = !isMenuOpen">
            <span class="menu-button__icon" :class="{ 'is-active': isMenuOpen }">
              <X v-if="isMenuOpen" :size="25" stroke-width="1.5" />
              <Menu v-else :size="25" stroke-width="1.5" />
            </span>
          </button>
        </div>
      </div>

      <nav class="desktop-navigation" aria-label="Main navigation">
        <NuxtLink v-for="link in navigation" :key="link.label" :to="link.to">{{ link.label }}</NuxtLink>
      </nav>

      <nav id="mobile-navigation" class="mobile-navigation" :class="{ 'is-open': isMenuOpen }" aria-label="Mobile navigation" aria-hidden="!isMenuOpen">
        <NuxtLink v-for="link in navigation" :key="link.label" :to="link.to" @click="isMenuOpen = false">
          {{ link.label }}
        </NuxtLink>
        <div class="mobile-secondary-actions">
          <button type="button">
            <Heart :size="18" /> Wishlist
          </button>
          <button type="button">
            <ShoppingBag :size="18" /> Bag
          </button>
          <button type="button">
            <UserRound :size="18" /> Account
          </button>
        </div>
      </nav>
    </header>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown, Grid2X2, Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'SHOP', to: '/' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'STORIES', to: '/stories' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT US', to: '/contact' },
]
</script>
