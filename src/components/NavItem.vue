<template>
  <li>
		<router-link :to="to" class="text-lg"><slot></slot></router-link>
  </li>
</template>

<script lang="ts">
  export default {
    props: {
      to: {
        type: String,
        required: true,
      }
    },
  }
</script>