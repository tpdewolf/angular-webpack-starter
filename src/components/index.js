import appHeader from './appHeader/appHeader'
import appFooter from './appFooter/appFooter'
import home from './home/home'
import other from './other/other'

const module = angular.module('app.components', [
	appHeader,
	appFooter,
	home,
	other
])
.name;

export default module;