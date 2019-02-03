const actions = {
	toggleNavigation( { commit } ) {
		commit('TOGGLE_NAVIGATION');
	},
	setSelectedNavItem( { commit }, payload ) {
		commit('SET_SELECTED_NAV_ITEM', payload );
	}
};

export default actions;
