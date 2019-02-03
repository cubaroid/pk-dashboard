<template>
	<div class="d-tabs__wrapper">
		<v-tabs
			v-if="config"
			color="primary"
			dark
			v-model="active"
			sliderColor="yellow"
			showArrows
		>
			<v-tab
				v-for="( tab, index ) in config.nodes"
				:key="`tab_${index}`"
			>
				{{ tab.key.split('.')[0] }}
			</v-tab>
			<v-tab-item
				v-for="( tab, index ) in config.nodes"
				:key="`tab_content_${index}`"
			>
				<img 
					:src="`${publicPath}${tab.path}`" 
				>
			</v-tab-item>
		</v-tabs>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'charts',
	data() {
		return {
			active: null,
			publicPath: process.env.BASE_URL
		}
	},
	watch: {
		config() {
			this.active = null;
		}
	},
	computed: {
		...mapGetters({
			config: 'selectedFolderNodes'
		})
	}
}
</script>

<style>
.v-tabs__container--overflow {
	flex-wrap: wrap
}
</style>
