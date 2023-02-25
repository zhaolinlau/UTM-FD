<script setup>
import AppCarousel from '@/components/AppCarousel.vue'
import luetify from '@/assets/luetify.png'
import confession from '../assets/confession.jpg'
</script>

<template>
	<AppCarousel />

	<v-row class="mt-16">
		<v-col>
			<p class="text-h5 text-center">新生交流 & 咨询群</p>
		</v-col>
	</v-row>

	<v-row justify="center">
		<v-col cols="12" lg="4" md="4" xl="4">
			<v-card title="UTM Foundation 2022/2023 Telegram 群组">
				<v-card-actions>
					<v-btn prepend-icon="mdi-send-circle-outline" color="blue">已关闭</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>

		<v-col cols="12" lg="4" md="4" xl="4">
			<v-card title="UTM Diploma 2022/2023 Telegram 群组">
				<v-card-actions>
					<v-btn prepend-icon="mdi-whatsapp" color="green">已关闭</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>

	<v-row class="mt-16" justify="center">
		<v-col cols="12">
			<p class="text-center headline">合作伙伴 & 特别赞助</p>
		</v-col>

		<v-col lg="2" class="d-flex justify-center">
			<v-img :src="confession" max-width="125"></v-img>
		</v-col>

		<v-col lg="2" class="d-flex justify-center">
			<v-img :src="luetify"></v-img>
		</v-col>
	</v-row>
</template>