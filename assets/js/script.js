var searchInputEl = document.querySelector('#search-bar');
var formEl = document.querySelector('#library-search');
var selectEl = document.querySelector('#dropdown-menu')

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	var searchTerm = searchInputEl.value.trim();
	var format = selectEl.value.trim();

	var apiUrl = `https://www.loc.gov/${format}/?q=${searchTerm}&fo=json`;

	fetch(apiUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			localStorage.setItem('data', JSON.stringify(data));
			localStorage.setItem('input', searchTerm)
			document.location.assign(`/results.html`);
		})
		.catch(function (error) {
			console.error(error);
		});
};

