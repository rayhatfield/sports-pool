'use strict';

const DEV = process.env.NODE_ENV !== 'production' || 'ATOM_HOME' in process.env;

function getReactVersion () {
	try {
		return require('react/package.json').version;
	} catch (e) {
		return '16.6.0';
	}
}

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = [
	'addEventListener',
	'blur',
	'close',
	'closed',
	'confirm',
	'defaultStatus',
	'defaultstatus',
	'event',
	'external',
	'find',
	'focus',
	'frameElement',
	'frames',
	'history',
	'innerHeight',
	'innerWidth',
	'length',
	'location',
	'locationbar',
	'menubar',
	'moveBy',
	'moveTo',
	'name',
	'onblur',
	'onerror',
	'onfocus',
	'onload',
	'onresize',
	'onunload',
	'open',
	'opener',
	'opera',
	'outerHeight',
	'outerWidth',
	'pageXOffset',
	'pageYOffset',
	'parent',
	'print',
	'removeEventListener',
	'resizeBy',
	'resizeTo',
	'screen',
	'screenLeft',
	'screenTop',
	'screenX',
	'screenY',
	'scroll',
	'scrollbars',
	'scrollBy',
	'scrollTo',
	'scrollX',
	'scrollY',
	'self',
	'status',
	'statusbar',
	'stop',
	'toolbar',
	'top',
];

module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': ['eslint:recommended', 'plugin:react/recommended'],
	'parser': 'babel-eslint',
	'settings': {
		'import/resolver': {
			'webpack': {}
		},
		'react': {
			'pragma': 'React',
			'version': getReactVersion()
		},
	},

	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'ecmaFeatures': {
			'legacyDecorators': true,
			'impliedStrict': true,
			'globalReturn': false
		}
	},

	'plugins': [
		'react', 'import'
	],
	'rules': {
		'camelcase': ['error', {'properties': 'always'}],
		'curly': ['error', 'all'],
		'eqeqeq': ['error', 'allow-null'],
		'guard-for-in': 'error',
		'import/no-duplicates': 'warn',
		'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/test/*.js', '**/*.spec.js']}],
		'import/no-unresolved': ['error', {'commonjs': true}],
		'import/order': ['warn', {'newlines-between': 'always', 'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']}],
		'import/no-amd': 'error',
		'import/no-commonjs': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-caller': 'error',
		'no-console': 'warn',
		'no-debugger': DEV ? 'warn' : 'error',
		'no-multiple-empty-lines': ['warn', {'max': 3, 'maxBOF': 3, 'maxEOF': 1}],
		'no-new': 'error',
		'no-restricted-globals': ['error'].concat(restrictedGlobals),
		'no-shadow': ['warn', {'builtinGlobals': false, 'hoist': 'never', 'allow': ['done']}],
		'no-throw-literal': 'error',
		'no-unused-vars': ['warn', {'args': 'none'}],
		'no-use-before-define': ['error', 'nofunc'],
		'no-var': 'error',
		'prefer-object-spread': 'warn',
		'quotes': ['warn', 'single'],
		'radix': 'error',
		'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],

		//We standarize on using double quotes on JSX props since they look like HTML attributes.
		//See: http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['warn', 'prefer-double'],

		'react/no-children-prop': ['off'],
		'react/no-deprecated': ['warn'],
		'react/no-typos': ['error'],
		'react/destructuring-assignment': ['off'],

		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': ['warn', { 'allowAllCaps': true }],

		//JSX should always be wrapped in parentheses... especically when multiline.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
		'react/jsx-wrap-multilines': ['warn', {
			'declaration': 'parens-new-line',
			'assignment': 'parens-new-line',
			'return': 'parens-new-line',
			'arrow': 'parens-new-line',
			'condition': 'parens-new-line',
			'logical': 'parens-new-line',
			'prop': 'parens-new-line'
		}],
		'semi': 'error',
		'space-before-blocks': ['warn', 'always'],
		'space-before-function-paren': ['warn', {'anonymous': 'always', 'named': 'always'}],
		'space-infix-ops': ['error', {'int32Hint': true}],
		'space-unary-ops': ['warn', { 'words': true, 'nonwords': false }],
		'strict': ['error', 'never'],
		'valid-jsdoc': 'warn',
		'wrap-iife': ['error', 'any'],
	}
}
