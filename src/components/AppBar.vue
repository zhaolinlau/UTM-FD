<script setup>
import { ref } from 'vue';

const drawer = ref(false)
</script>

<template>
	<v-navigation-drawer v-model="drawer" temporary>
		<v-list color="red">
			<v-list-item to="/">首页</v-list-item>
			<v-list-item to="/foundation">Foundation</v-list-item>
			<v-list-item to="/diploma">Diploma</v-list-item>
			<v-list-item to="/about">关于</v-list-item>
		</v-list>
	</v-navigation-drawer>

	<v-app-bar>
		<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
		<v-app-bar-title>工大Foundation & Diploma升学辅导站</v-app-bar-title>

		<v-tabs color="red" class="hidden-sm-and-down">
			<v-tab to="/">首页</v-tab>
			<v-tab to="/foundation">Foundation</v-tab>
			<v-tab to="/diploma">Diploma</v-tab>
			<v-tab to="/about">关于</v-tab>
		</v-tabs>
	</v-app-bar>
</template>