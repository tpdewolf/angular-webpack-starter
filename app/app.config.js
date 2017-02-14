let module = angular.module('app.config', [])
	.constant('config', {
		api: 'https://api.count3r.nl',
		s3: 'https://s3-eu-west-1.amazonaws.com/media-count3r/'
	})
	.name;

export default module;