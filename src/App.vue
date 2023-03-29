<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
	<v-layout>
		<v-main>
			<AppBar />
			<AppNav />
			<v-container fluid>
				<RouterView />
			</v-container>
			<AppFooter />
		</v-main>
	</v-layout>
</template>

<style>
img {
	max-width: 100%;
	height: auto;
}
</style>
