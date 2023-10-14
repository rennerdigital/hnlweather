<!-- src/components/ForecastComponent.vue -->

<template>
    <v-card>
      <v-card-title class="text-h5">5-Day Forecast</v-card-title>
      <v-card-text>
        <v-if="forecast.length">
          <div v-for="weather in forecast" :key="weather.date" class="weather-info">
            <img :src="getWeatherIconUrl(weather.icon)" :alt="weather.description" />
            <div class="temp">{{ weather.temp }}°C</div>
            <div class="description">{{ weather.description }}</div>
            <div class="date">{{ weather.date }}</div>
          </div>
        </v-if>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { useWeatherStore } from '@/store';
  import { ref, computed } from 'vue';
  
  const store = useWeatherStore();
  const forecast = computed(() => store.forecast);
  
  const getWeatherIconUrl = (icon: string) => {
    // Return the URL for the weather icon based on the icon code
    return `https://openweathermap.org/img/wn/${icon}.png`;
  };
  </script>
  