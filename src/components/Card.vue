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
	<div class="border border-dashed border-slate-700 rounded text-center">
		<div class="p-6">
			<h1 class="font-bold">{{cardProps.title}}</h1>
			<hr>
			<p class="pt-4 leading-loose">{{cardProps.text}}</p>
		</div>
	</div>
</template>