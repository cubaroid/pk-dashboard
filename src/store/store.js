import actions from './actions'
import mutations from './mutations'
import files from '@/data/config'
import { findDeep } from 'deepdash-es/standalone'

const state = {
	isNavigationShown: false,
	files,
	selectedNavItem: null
}

const findItem = (items, id) => {
	return _.find(items, item => {
		if ( item.id === id  ) {
			return true;
		} else if( item.isDir ) {
			return findItem(item.children, id);
		} else {
			return false;
		}
	})
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
		let temp = findDeep(state.files, item => {
			return item.id === state.selectedNavItem;
		}, {childrenPath: 'children', rootIsChildren: true})

		return temp ? temp.value : {};
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
