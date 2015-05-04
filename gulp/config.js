'use strict'

module.exports = {
	"cssDependencies":{
		"amazeui":
		[
			"../../../bower_components/amazeui/less/variables.less",
			"../../../bower_components/amazeui/less/mixins.less",
			"../../../bower_components/amazeui/less/base.less",
			// Elements
			"../../../bower_components/amazeui/less/code.less",
			"../../../bower_components/amazeui/less/button.less",
			"../../../bower_components/amazeui/less/table.less",
			"../../../bower_components/amazeui/less/form.less",
			"../../../bower_components/amazeui/less/image.less",

			// Nav
			"../../../bower_components/amazeui/less/nav.less",
			"../../../bower_components/amazeui/less/topbar.less",
			"../../../bower_components/amazeui/less/breadcrumb.less",
			"../../../bower_components/amazeui/less/pagination.less",
			// Layout
			"../../../bower_components/amazeui/less/grid.less",
			"../../../bower_components/amazeui/less/block-grid.less",

			"../../../bower_components/amazeui/less/thumbnail.less",

			"../../../bower_components/amazeui/less/badge.less",
			"../../../bower_components/amazeui/less/list.less"
		]
	},

	"styles": {
		"src":  "./app/less/*.less",
		'dest': './build/css'
	},

	"script": {
		"src": ["./app/js/main.js"],
		"dest": "./build/js"
	},

	"views":{
		"src": "./app/view/**/*.html",
		"dest": "./build/view"
	}
	
}