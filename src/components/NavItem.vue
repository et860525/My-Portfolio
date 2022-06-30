<script setup lang="ts">
  import { reactive } from 'vue';

  
  const props = defineProps({ 
    to: { type: String, required: true },
    isActive: Boolean
  })

  const classActive = reactive({
    'text-orange-600': props.isActive,
    'hover:text-orange-400': props.isActive,
    'hover:text-slate-500': !props.isActive
  })
</script>

<template>
  <li>
		<router-link :to="to" class="text-lg font-bold ease-in-out" :class="classActive">
      <slot></slot>
    </router-link>
  </li>
</template>
