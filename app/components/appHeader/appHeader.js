import angular from 'angular';
import component from './appHeader.component';

const module = angular.module('appHeader', [])
.component('appHeader', component)
.name;

export default module;
