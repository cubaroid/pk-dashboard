import actions from './actions'
import mutations from './mutations'
import files from '@/data/config'
import _ from 'lodash'

const state = {
	isNavigationShown: false,
	files,
	selectedNavItem: null
}

const getters = {
	isNavigationShown() {
		return state.isNavigationShown;
	},
	getFiles() {
		return state.files;
	},
	selectedNavItem() {
		return state.selectedNavItem;
	},
	selectedFolderNodes() {
		let result = [];
		state.files.forEach( item => {
			if ( item.children ) {
				let temp =  _.find( item.children, child => child.key === state.selectedNavItem );
				if ( temp ) {
					result = temp;
				}
			}
		});

		return result;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
