import angular from 'angular';
import component from './appHeader.component';

let module = angular.module('appHeader', [])
.component('appHeader', component)
.name;

export default module;
