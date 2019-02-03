module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	globals: {
		"_": true,
		"$": true,
		"moment": true,
		"process": true,
		"Vue": true },
	env: {
		browser: true,
	},
	plugins: [
		//"html",
		"vue"
	],
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	rules: {
		"no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
		"indent": [2, "tab", { "SwitchCase": 2 }],
		"no-tabs": 0,
		"no-console": 0,
		"no-useless-escape": 0,
		"vue/html-indent": [2, "tab", {
			"attribute": 1,
			"alignAttributesVertically": true
			}
		],
		"vue/order-in-components" : 0,
		"vue/attributes-order" : 0,
		"vue/html-self-closing": 0,
		"vue/valid-v-for": 0,
		"vue/no-confusing-v-for-v-if": 0,
		"vue/name-property-casing": ["error", "kebab-case"],
		"vue/attribute-hyphenation": [2, "never"],
		"vue/no-side-effects-in-computed-properties": 0

	}
}
