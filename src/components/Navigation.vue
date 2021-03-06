<template>
	<v-navigation-drawer
		v-model="isNavigationShown"
		fixed
		app
	>

	<List
		:files="filteredFiles"
	/>


	</v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import List from './List'

export default {
	name: 'navigation',
	components: {
		List
	},
	computed: {
		...mapGetters({
			files: 'getFiles'
		}),
		filteredFiles() {
			return this.files.filter(( a => a.isDir ));
		},
		isNavigationShown: {
			set() {
				// not setting it from here
				// state is updated by a different component
			},
			get() {
				return this.$store.getters.isNavigationShown;
			}
		}
	},

};
</script>
