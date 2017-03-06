import angular from 'angular';
import component from './appFooter.component';

const module = angular.module('appFooter', [])
.component('appFooter', component)
.name;

export default module;
