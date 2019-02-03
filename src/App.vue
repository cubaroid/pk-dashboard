<template>
	<v-app id="inspire">
		<Navigation></Navigation>
		<Toolbar></Toolbar>
		<v-content>
			<v-container 
				fluid 
				fillHeight
			>
				<v-layout>
					<Charts></Charts>
				</v-layout>
			</v-container>
		</v-content>
		<v-footer 
			color="indigo" 
			app
		>
			<span 
				class="white--text"
			>
				&copy;Пижжено 2019
			</span>
		</v-footer>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import Toolbar from '@/components/Toolbar.vue';
import Charts from '@/components/Charts.vue';
export default {
	data: () => ({
		drawer: null,
		publicPath: process.env.BASE_URL
	}),
	components: {
		Navigation,
		Toolbar,
		Charts
	},
	computed: {
		...mapGetters( ['getFiles'] )
	},
	methods: {
		test() {
			console.log('test');
		}
	}
}
</script>
