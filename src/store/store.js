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
		return _.find(state.files, item => item.folder === state.selectedNavItem);
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
