let controller = function() {
	"ngInject"

	var vm = this; //define the viewmodel

	vm.list = [
		{
			name: 'Tim',
			job: 'Stagebegeleider'
		},
		{
			name: 'Jori',
			job: 'Developer'
		},
		{
			name: 'Fadhlur',
			job: 'Stagair'
		}
	];

	vm.doSomething = (person) => {
		alert(person.name);
	}

}

export default controller;
