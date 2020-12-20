<template>
	<v-toolbar 
		color="indigo" 
		dark 
		fixed 
		app
	>
		<v-toolbar-side-icon 
			@click.stop="toggleNavigation"
		>
		</v-toolbar-side-icon>
		<v-toolbar-title>PKH Dashboard {{ currentFolder.key ? ' - ' + currentFolder.key : '' }}</v-toolbar-title>
	</v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'toolbar',
	computed: {
		...mapGetters({
			currentFolder: 'selectedFolderNodes'
		})
	},
	methods: {
		...mapActions(['toggleNavigation'])
	}
};
</script>
