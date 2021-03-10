<template>
	<div 
		class="v-list-group__header v-list-item"
		:class="listItemClasses"
	>
		<div 
			class="v-list-item__content"
			:class="{'v-list-item__active' : isSelected, 'v-list-item__disabled' : !isExpandable && !isSelectable }"
			@click="expand"
		>
			<div 
				class="v-list-item__title"
				:style="listItemStyles"
			>
				{{ item.key }}
			</div>
			<v-icon 
				class="v-list-item__expand"
				v-if="isExpandable"
				:class="{'v-list-item__expand-active' : isExpanded }"
			>
				{{ $vuetify.icons.expand }}
			</v-icon>
		</div>
		<div 
			class="v-list-item__children"
			v-if="isExpanded"
		>
			<list-item 
				class="v-list-item__child"
				v-for="(child, index) in children"
				:key="index"
				:item="child"
				:level="level + 1"
			>
				{{ child.key }}
			</list-item>
		</div>
	</div>
</template>

<script >
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'list-item',
	props: {
		item: {
			type: Object,
			default: () => {}
		},
		level: {
			type: Number,
			default: 0
		}
	},
	methods: {
		...mapActions(['setSelectedNavItem']),
		expand() {
			if ( this.isExpandable ) {
				this.isExpanded = !this.isExpanded;
			}

			if ( this.isSelectable ) {
				this.setSelectedNavItem(this.item.id);
			}

		}
	},
	computed: {
		...mapGetters(['selectedNavItem']),
		children() {
			return this.item.children.filter(a => a.isDir);
		},
		listItemStyles() {
			console.log(this.level * 20);
			let obj =  { 
				transform: `translate(${this.level * 20}px)`,
				width: `calc(100% - ${(this.level + 1) * 20}px)`
			}

			return obj;
		},
		isSelected() {
			return this.selectedNavItem === this.item.id;
		},
		listItemClasses() {
			let classList = [];

			if ( this.isExpanded ) {
				classList.push('v-list-item__expanded');
			}

			if ( this.level != 0 ) {
				classList.push('v-list-item__nopadding');
			}

			return classList;
		},
		isSelectable() {
			// check if this folder is the last folder in the path and should be selectable
			return ( this.item.children.length > 0 && this.item.children.filter(a => a.isDir).length === 0 );
		},
	},
	mounted() {
		this.isExpandable = this.item.isDir && !this.isSelectable && this.item.children.length > 0;
	},
	data() {
		return {
			isExpanded: false,
			isExpandable: false,
			active: null,
			isLastDir: false,
			search: '',
			publicPath: process.env.BASE_URL
		}
	}
}
</script>

<style>
.v-list-item {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	letter-spacing: normal;
	min-height: 48px;
	outline: none;
	padding: 0;
	position: relative;
	text-decoration: none;
}
.v-list-item__active {
	color: #1867c0;
	background-color: #e3edf8;
}
.v-list-item__disabled {
	cursor: not-allowed;
	pointer-events: all !important;
	color: #898989de;
}
.v-list-item__nopadding {
	padding: 0;
}
.v-list-item:hover {
	cursor: pointer;
}
.v-list-item__expand {
	-webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
	transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
}
.v-list-item__expand-active {
	-webkit-transform: rotate(-180deg);
	transform: rotate(-180deg);
}
.v-list-item__expanded > .v-list-item__content .v-list-item__title,
.v-list-item__expanded > .v-list-item__content .v-list-item__expand {
	color: #1867c0;
}
.v-list-item__content {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	width: 100%;
	padding: 16px;
}
.v-list-item__content:hover {
	cursor: pointer;
	background-color: #e3edf8;
}
.v-list-item__title {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.v-list-item__childer {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
}
</style>

