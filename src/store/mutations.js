const mutations = {
	'TOGGLE_NAVIGATION'(state) {
		state.isNavigationShown = !state.isNavigationShown;
	},
	'SET_SELECTED_NAV_ITEM'(state, payload) {
		state.selectedNavItem = payload;
	}
};

export default mutations;
