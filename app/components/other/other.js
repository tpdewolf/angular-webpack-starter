import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './other.html'
import controller from './other.controller'
import service from './other.service'
import './other.scss'

let module = angular.module('other', [
	uiRouter
])
.config(($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('app.other', {
			url: '/other',
			views: {
				'@': {
					template: template,
					controller: controller,
					controllerAs: 'other'
				}
			},
		})
})
.service('', service)
.name;

export default module;