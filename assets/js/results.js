var data = JSON.parse(localStorage.getItem('data')) || {};
var input = localStorage.getItem('input') || '';
console.log(data.featured_items);

document.querySelector('#term-input').textContent = input;


var cardsHTML = '';

for (let i = 0; i < data.featured_items.length; i++) {

	cardsHTML += `
<div class="col-4 mb-2">
	<div class="card">
		<img src=${data.featured_items[i].image ? `https://www.loc.gov/${data.featured_items[i].image}` : `https://via.placeholder.com/200`} class="card-img-top h-50" alt="${[i]}">
		<div class="card-body">
				<h5 class="card-title">${data.featured_items[i].title}</h5>
				<p class="card-text"
				FIX ME!
				</p>
				<a href="https://www.loc.gov/${data.featured_items[i].url}" class="btn btn-primary" target="_blank">More info &gt;</a>
		</div>
	</div>
</div>`;
}

document.querySelector('#results-container').setHTML(cardsHTML);
