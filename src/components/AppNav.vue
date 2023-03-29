<template>
	<v-bottom-navigation color="red" grow class="hidden-md-and-up">
		<v-btn to="/">
			<v-icon icon="fas fa-sharp fa-regular fa-house"></v-icon>

			Home
		</v-btn>

		<v-btn to="/foundation">
			<v-icon icon="fas fa-sharp fa-regular fa-f"></v-icon>

			Foundation
		</v-btn>

		<v-btn to="/diploma">
			<v-icon icon="fas fa-sharp fa-regular fa-d"></v-icon>

			Diploma
		</v-btn>

		<v-btn to="/about">
			<v-icon icon="fas fa-sharp fa-regular fa-info"></v-icon>

			About
		</v-btn>
	</v-bottom-navigation>
</template>