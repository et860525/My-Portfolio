<script setup lang="ts">
	/*
		Card component is show a 'headline' and 'text'
	*/

	interface CardProps {
		title: string,
		img?: string,
		text: string
	}

	const cardProps = defineProps<CardProps>()
</script>

<template>
	<div class="border border-dashed text-center">
		<h1 class="py-3">{{title}}</h1>
		<p class="py-2 px-4">{{text}}</p>
	</div>
</template>