<template>
	<div class="v-list v-list--dense theme--light">
		<ListItem
			v-for="file in files"
			:key="file.id"
			:item="file"
			:level="0"
		>
		</ListItem>
	</div>
</template>

<script >
import ListItem from './ListItem.vue'
export default {
	name: 'list',
	components: {
		ListItem
	},
	props: {
		files: Array
	},
	data() {
		return {
			active: null,
			search: '',
			publicPath: process.env.BASE_URL
		}
	},
}
</script>

<style>
.v-list {
    display: flex;
	flex-direction: column;
    position: static;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
}
</style>
