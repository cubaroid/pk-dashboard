<template>
	<div class="d-tabs__wrapper">
		<v-text-field
			ref="search"
			v-if="!isConfigEmpty"
			v-model="search"
			label="Search"
			clearable
			@click:clear="clearSearch"
			@keydown.esc="clearSearch"
			style="max-width: 200px;"
		>
		</v-text-field>
		<v-tabs
			v-if="children.length > 0"
			color="primary"
			dark
			v-model="active"
			sliderColor="yellow"
			showArrows
		>
			<v-tab
				v-for="( tab, index ) in children"
				:key="`tab_${index}_${tab.id}`"
			>
				{{ tab.key.split('.')[0] }} 
			</v-tab>
			<v-tab-item
				v-for="( tab, index ) in children"
				:key="`tab_content_${index}_${tab.id}`"
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
import { isEmpty } from 'lodash'
export default {
	name: 'charts',
	data() {
		return {
			active: null,
			search: '',
			publicPath: process.env.BASE_URL
		}
	},
	watch: {
		config() {
			this.active = null;
			this.search = '';
			this.$refs.search.$el.focus();
		}
	},
	methods: {
		clearSearch() {
			console.log('cleared');
			this.$nextTick( () => this.search = '' );
		}
	},
	computed: {
		...mapGetters({
			config: 'selectedFolderNodes'
		}),
		isConfigEmpty() {
			return isEmpty(this.config);
		},
		children() {
			let conf = this.config,
				search = new RegExp(`^${this.search}`, 'i');


			if ( conf && conf.children ) {
				let children = conf.children;
				if ( search !== '' ) {
					return  children.filter( item => search.test(item.key) )
				} else {
					return children;
				}
			} else {
				return [];
			}
		}
	}
}
</script>

<style>
.v-tabs__container--overflow {
	flex-wrap: wrap
}
</style>
