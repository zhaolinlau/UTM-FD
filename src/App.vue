<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
	<v-layout>
		<AppBar />

		<RouterView />

		<AppFooter />
	</v-layout>
</template>
