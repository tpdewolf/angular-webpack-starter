const module = angular.module('app.filters', [])
.filter('ucfirst', () => {
	return (string) => {
		var cap = string.substring(0, 1).toUpperCase();
		return cap + string.substring(1);
	}
})
.name;

export default module;