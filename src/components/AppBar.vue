<script setup>
import { useTheme } from 'vuetify'
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
const theme = useTheme()
</script>

<template>
	<v-app-bar title="工大Foundation & Diploma升学辅导站" scroll-behavior="hide">
		<v-tabs color="red" class="hidden-sm-and-down">
			<v-tab to="/">首页</v-tab>
			<v-tab to="/foundation">Foundation</v-tab>
			<v-tab to="/diploma">Diploma</v-tab>
			<v-tab to="/about">关于</v-tab>
		</v-tabs>
		<v-btn @click="toggleTheme"
			:icon="theme.global.current.value.dark ? 'fa-regular fa-moon' : 'fa-regular fa-sun'"></v-btn>
	</v-app-bar>
</template>