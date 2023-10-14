<!-- src/components/CurrentWeatherComponent.vue -->

<template>
    <v-card>
      <v-card-title class="text-h5">Current Weather</v-card-title>
      <v-card-text>
        <v-if="currentWeather">
          <div class="weather-info">
            <img :src="getWeatherIconUrl(currentWeather.icon)" :alt="currentWeather.description" />
            <div class="temp">{{ currentWeather.temp }}°C</div>
            <div class="description">{{ currentWeather.description }}</div>
            <div class="date">{{ currentWeather.date }}</div>
          </div>
        </v-if>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { useWeatherStore } from '@/store';
  import { ref, computed } from 'vue';
  
  const store = useWeatherStore();
  const currentWeather = computed(() => store.currentWeather);
  
  const getWeatherIconUrl = (icon: string) => {
    // Return the URL for the weather icon based on the icon code
    return `https://openweathermap.org/img/wn/${icon}.png`;
  };
  </script>
  