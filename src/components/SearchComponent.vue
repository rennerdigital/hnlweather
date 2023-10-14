<!-- src/components/SearchComponent.vue -->

<template>
    <v-card>
      <v-card-title class="text-h5">Search Location</v-card-title>
      <v-card-text>
        <v-text-field v-model="searchTerm" label="Enter city name" @keyup.enter="searchWeather" />
        <v-btn @click="searchWeather">Search</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useWeatherStore } from '@/store';
  
  const searchTerm = ref('');
  
  const searchWeather = () => {
    // Call the API to fetch current weather and forecast
  };
  </script>
  