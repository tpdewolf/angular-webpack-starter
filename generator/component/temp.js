import angular from 'angular';
import component from './<%= name %>.component';

let module = angular.module('<%= name %>', [])
.component('<%= name %>', component)
.name;

export default module;
