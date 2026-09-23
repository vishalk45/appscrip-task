<template>
  <section class="main-sec">
    <main class="catalog-page">
      <section class="catalog-intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br class="desktop-break" /> scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>

      <div class="catalog-toolbar">
        <span class="item-count">3425 ITEMS</span>
        <button class="filter-toggle" type="button" @click="showFilters = !showFilters">
          <SlidersHorizontal :size="15" /> FILTERS
        </button>
        <div class="sort-control">
          <button type="button" :aria-expanded="showSort" @click="showSort = !showSort">
            <span class="desktop-sort-label">RECOMMENDED</span>
            <span class="mobile-sort-label">SORT</span>
            <ChevronDown :size="15" />
          </button>
          <div v-if="showSort" class="sort-menu">
            <button v-for="option in sortOptions" :key="option" type="button" @click="selectSort(option)">
              <Check v-if="selectedSort === option" :size="14" />
              <span>{{ option }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="catalog-layout">
        <aside class="filter-panel" :class="{ 'filter-panel--open': showFilters }">
          <div class="filter-mobile-heading">
            <strong>FILTERS</strong>
            <button type="button" aria-label="Close filters" @click="showFilters = false">
              <X :size="18" />
            </button>
          </div>
          <label class="customizable-filter"><input type="checkbox" /> <span>CUSTOMIZABLE</span></label>
          <div v-for="filter in filters" :key="filter.title" class="filter-group">
            <button type="button" @click="toggleFilter(filter.title)">
              <span>{{ filter.title }}</span>
              <ChevronDown :class="{ 'chevron-up': openFilters.includes(filter.title) }" :size="13" />
            </button>
            <div v-if="openFilters.includes(filter.title)" class="filter-options">
              <span>All</span>
              <label v-for="option in filter.options" :key="option"><input type="checkbox" /> {{ option }}</label>
            </div>
          </div>
        </aside>

        <section class="product-grid" aria-label="Product listing">
          <article v-for="product in products" :key="product.id" class="product-card">
            <div class="product-image-wrap">
              <img :src="product.image" :alt="product.name" loading="lazy" />
            </div>
            <div class="product-details">
              <h2>{{ product.name }}</h2>
              <div class="product-meta">
                <span>Sign in or Create an account to see pricing</span>
                <button type="button" :aria-label="`Add ${product.name} to wishlist`">
                  <Heart :size="16" />
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { Check, ChevronDown, Heart, SlidersHorizontal, X } from 'lucide-vue-next'

useHead({
  title: "Vishal | Appscrip Assignment",

  meta: [
    {
      name: "description",
      content: "Appscrip frontend assignment built with Nuxt 4."
    },
    {
      name: "keywords",
      content: "Nuxt, Vue, Appscrip, Frontend"
    }
  ]
})

const showFilters = ref(false)
const showSort = ref(false)
const selectedSort = ref('RECOMMENDED')
const openFilters = ref(['IDEAL FOR'])

const sortOptions = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH']

const filters = [
  { title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
  { title: 'OCCASION', options: [] },
  { title: 'WORK', options: [] },
  { title: 'FABRIC', options: [] },
  { title: 'SEGMENT', options: [] },
  { title: 'SUITABLE FOR', options: [] },
  { title: 'RAW MATERIALS', options: [] },
  { title: 'PATTERN', options: [] },
]

const products = [
  { id: 1, name: 'PPXOC MILKYWAY DRESS IN...', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'PPXOC MILKYWAY DRESS IN...', image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=85' },
  { id: 4, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85' },
  { id: 5, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=700&q=85' },
  { id: 6, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85' },
  { id: 7, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=85' },
  { id: 8, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=85' },
  { id: 9, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=85' },
  { id: 10, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85' },
  { id: 11, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=85' },
  { id: 12, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85' },
  { id: 13, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=700&q=85' },
  { id: 14, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=700&q=85' },
  { id: 15, name: 'PRODUCT NAME', image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=85' },
]

function toggleFilter(title: string) {
  openFilters.value = openFilters.value.includes(title)
    ? openFilters.value.filter((item) => item !== title)
    : [...openFilters.value, title]
}

function selectSort(option: string) {
  selectedSort.value = option
  showSort.value = false
}
</script>
