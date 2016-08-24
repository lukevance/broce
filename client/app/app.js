angular.module('partsApp', ['ngRoute'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

// include styles from css folder
require('./css/styles.css');
require('./css/jquery-1.12.4.min');
// include angular modules
require('./factories');
require('./directives');
require('./services');
require('./controllers');
require('./routes');
