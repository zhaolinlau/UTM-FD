<script setup>
import guide from '@/assets/guide.jpg'
import information from '@/assets/information.jpg'
import confuse from '@/assets/confuse.jpg'
const slides = [
	{
		src: guide,
		title: "我们提供指导"
	},
	{
		src: information,
		title: "我们提供资讯"
	},
	{
		src: confuse,
		title: "我们协助你解决困惑"
	}
]
</script>

<template>
	<v-carousel progress="red">
		<v-carousel-item cover v-for="(slide, i) in slides" :key="i" :src="slide.src">
			<div class="d-flex fill-height justify-center align-center">
				<div class="text-h2">
					{{ slide.title }}
				</div>
			</div>
		</v-carousel-item>
	</v-carousel>
</template>