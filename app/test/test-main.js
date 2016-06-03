var allTestFiles = [];
var TEST_REGEXP = /(_spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/scripts',

  paths: {
    'angular' : '../test/libs/angular',
    'angularMocks': '../test/libs/angular-mocks'
  },
  
  shim: {
    ngResource: {
      deps: ['angular'],
      exports: 'angular'
    },
    angularMocks: { 
      deps: ['angular'] 
    },
    ngRoute: {
      deps: ['angular'],
      exports: 'angular'
    },
    ngCookies: {
      deps: ['angular'],
      exports: 'angular'
    },
    ngProgress: {
      deps: ['angular'],
      exports: 'angular'
    },
    angular: {
      exports : 'angular'
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
