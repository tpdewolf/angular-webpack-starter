import angular from 'angular';
import component from './appFooter.component';

let module = angular.module('appFooter', [])
.component('appFooter', component)
.name;

export default module;
