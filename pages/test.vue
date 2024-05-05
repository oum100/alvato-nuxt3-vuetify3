<template>
    <v-app>
      <v-container>
        <v-text-field
          variant="outlined"
          density="compact"
          :append-inner-icon="numberofClicks?'fluent:eye-16-regular':'fluent:eye-off-16-regular'"
          :type="numberofClicks?'text':'password'"
          @click:append-inner="numberofClicks=!numberofClicks"
        >

        </v-text-field>
        number of clicks: {{numberofClicks}}
      </v-container>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'

const numberofClicks = ref(false)
</script>

