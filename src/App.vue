<script setup>
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
	<v-layout>
		<v-main>
			<AppBar />
			<v-container fluid>
				<RouterView />
			</v-container>
			<AppFooter />
		</v-main>
	</v-layout>
</template>
