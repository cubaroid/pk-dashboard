<template>
	<v-navigation-drawer
		v-model="isNavigationShown"
		fixed
		app
	>
		<v-list dense>
			<v-list-group
				prependIcon="account_circle"
			>
				<v-list-tile slot="activator">
					<!-- hardcoded title for now -->
					<v-list-tile-title>Flatting and 3Betting</v-list-tile-title>
				</v-list-tile>
				<v-list-tile 
					v-for="item in files"
					:key="item.folder"
					@click="setSelectedNavItem(item.folder)"
				>
					<v-list-tile-action>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.folder.toUpperCase() }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list-group>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'navigation',
	computed: {
		...mapGetters({
			files: 'getFiles'
		}),
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
	methods: {
		...mapActions(['setSelectedNavItem'])
	}

};
</script>
