import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './<%= name %>.html'
import controller from './<%= name %>.controller'
import service from './<%= name %>.service'
import './<%= name %>.scss'

let module = angular.module('<%= name %>', [
	uiRouter
])
.config(($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('app.<%= name %>', {
			url: '/<%= name %>',
			views: {
				'@': {
					template: template,
					controller: controller,
					controllerAs: '<%= name %>'
				}
			},
		})
})
.service('<% upCaseName %>', service)
.name;

export default module;