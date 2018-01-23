import angular from 'angular';
import template from './<%= name %>.html'
import controller from './<%= name %>.controller'
import './<%= name %>.scss'

const module = angular.module('<%= name %>', [])
.config(($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('app.<%= name %>', {
			url: '/<%= name %>',
			views: {
				'@': {
					template,
					controller,
					controllerAs: '$ctrl'
				}
			},
		})
})
.name;

export default module;