<template>
	<v-app>
		<v-app-bar elevate-on-scroll app color="white" v-if="!$vuetify.theme.dark">
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
				class="hidden-md-and-up"
			></v-app-bar-nav-icon>
			<v-app-bar-title>工大Foundation & Diploma升学辅导站</v-app-bar-title>
			<v-tabs color="red" class="hidden-sm-and-down" right>
				<v-tab to="/" x-large class="px-10">
					<v-icon left>mdi-home-outline</v-icon>
					首页
				</v-tab>
				<v-tab to="/foundation" class="px-10">
					<v-icon left>mdi-alpha-f-box-outline</v-icon>
					Foundation
				</v-tab>
				<v-tab to="/diploma" class="px-10">
					<v-icon left>mdi-alpha-d-box-outline</v-icon>
					Diploma
				</v-tab>
				<v-tab to="/about" class="px-10">
					<v-icon left>mdi-information-outline</v-icon>
					关于
				</v-tab>
				<v-switch
					class="px-5 align-center hidden-sm-and-down"
					color="red"
					persistent-hint
					hint="暗夜模式"
					v-model="$vuetify.theme.dark"
					inset
					append-icon="mdi-moon-waning-crescent"
				></v-switch>
			</v-tabs>
		</v-app-bar>

		<v-app-bar elevate-on-scroll app v-else>
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
				class="hidden-md-and-up"
			></v-app-bar-nav-icon>
			<v-app-bar-title>工大Foundation & Diploma升学辅导站</v-app-bar-title>
			<v-tabs color="red" class="hidden-sm-and-down" right>
				<v-tab to="/" x-large class="px-10">
					<v-icon left>mdi-home-outline</v-icon>
					首页
				</v-tab>
				<v-tab to="/foundation" class="px-10">
					<v-icon left>mdi-alpha-f-box-outline</v-icon>
					Foundation
				</v-tab>
				<v-tab to="/diploma" class="px-10">
					<v-icon left>mdi-alpha-d-box-outline</v-icon>
					Diploma
				</v-tab>
				<v-tab to="/about" class="px-10">
					<v-icon left>mdi-information-outline</v-icon>
					关于
				</v-tab>
				<v-switch
					class="hidden-sm-and-down align-center px-5"
					color="red"
					persistent-hint
					hint="暗夜模式"
					v-model="$vuetify.theme.dark"
					inset
					append-icon="mdi-moon-waning-crescent"
				></v-switch>
			</v-tabs>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" app temporary>
			<v-list nav>
				<v-list-item to="/" color="red">
					<v-list-icon>
						<v-icon left>mdi-home-outline</v-icon>
					</v-list-icon>
					<v-list-item-title>首页</v-list-item-title>
				</v-list-item>

				<v-list-item to="/foundation" color="red">
					<v-list-icon>
						<v-icon left>mdi-alpha-f-box-outline</v-icon>
					</v-list-icon>
					<v-list-item-title>Foundation</v-list-item-title>
				</v-list-item>

				<v-list-item to="/diploma" color="red">
					<v-list-icon>
						<v-icon left>mdi-alpha-d-box-outline</v-icon>
					</v-list-icon>
					<v-list-item-title>Diploma</v-list-item-title>
				</v-list-item>

				<v-list-item to="/about" color="red">
					<v-list-icon>
						<v-icon left>mdi-information-outline</v-icon>
					</v-list-icon>
					<v-list-item-title>关于</v-list-item-title>
				</v-list-item>

				<v-list-item>
					<v-switch
						color="red"
						v-model="$vuetify.theme.dark"
						label="暗夜模式"
						persistent-hint
						inset
						append-icon="mdi-moon-waning-crescent"
					></v-switch>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-main>

		<AppFooter />
	</v-app>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";

export default {
	data: () => ({
		drawer: null,
	}),

	components: {
		AppFooter,
	},
};
</script>

<style>
#app {
	font-family: "Roboto", sans-serif;
}
</style>
