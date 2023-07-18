<script setup>
import AppCarousel from '@/components/AppCarousel.vue'
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
					<v-btn prepend-icon="fa-brands fa-telegram" color="blue" block active rounded>已关闭</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>

		<v-col cols="12" lg="4" md="4" xl="4">
			<v-card title="UTM Diploma 2022/2023 WhatsApp 群组">
				<v-card-actions>
					<v-btn prepend-icon="fa-brands fa-whatsapp" color="green" block active rounded>已关闭</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>

	<v-row class="mt-16">
		<v-col>
			<p class="text-center text-h5">合作伙伴 & 特别赞助</p>
			<v-row class="d-flex align-center justify-center">
				<v-col cols="4" md="1">
					<a href="https://www.facebook.com/utmcv2point0" target="_blank">
						<img src="@/assets/confession.jpg">
					</a>
				</v-col>

				<v-col cols="6" md="2">
					<a href="https://github.com/Luetify" target="_blank">
						<img src="@/assets/luetify.png">
					</a>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>