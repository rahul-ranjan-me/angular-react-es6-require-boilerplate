require.config({
	paths: {
		'angular' : '../../node_modules/angular/angular',
		'text' : '../../node_modules/text/text',
		'ngRoute' : '../../node_modules/angular-route/angular-route',
		'react' : '../../node_modules/react/dist/react-with-addons',
		'react-dom' : '../../node_modules/react-dom/dist/react-dom',
		'es6': "../../node_modules/requirejs-babel/es6",
  		'babel': "../../node_modules/requirejs-babel/babel-5.8.34.min",
  		'lodash' : '../../node_modules/lodash/lodash'
	},
	shim: {
		ngRoute: {
			deps: ['angular'],
			exports: 'angular'
		},
		angular: {
			exports : 'angular'
		},
		react : {
			exports : 'React'
		},
		'react-dom':{
			exports : 'ReactDom'
		},
		'lodash':{
			exports : '_'
		}
	},
	baseUrl: '/scripts'
});

require(['app'], function (app) {
	app.init();
});