<template>
  <nav class="px-16 py-4 text-sm font-medium flex justify-between items-center flex-col sm:flex-row rounded-b-md border-b-2">
		<p class="text-2xl font-extrabold">
      <span class="text-red-orange text-3xl">.</span>Mango
    </p>
    <ul class="flex space-x-5 py-2 sm:py-0 justify-center">
      <slot></slot>
    </ul>
  </nav>
</template>
