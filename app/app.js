import './fonts.scss';
import './global.scss';

import angular from 'angular';
import Components from './components';
import AppComponent from './app.component';
import Config from './app.config';
import Directives from './shared/directives';
import Services from './shared/services';
import Filters from './app.filters';
import satellizer from 'satellizer';
import lodash from 'lodash';

angular
	.module('app', [
		Components,
		Directives,
		Config,
		Filters,
		Services,
		satellizer
	])
	.run(() => {
		"ngInject";

		// stuff on startup

	})
	.config(($compileProvider, $httpProvider) => {
		"ngInject"

		$httpProvider.useApplyAsync(true);
	})
	.component('app', AppComponent)