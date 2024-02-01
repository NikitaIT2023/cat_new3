const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})


// Реализация поиска
document.getElementById('search-button').addEventListener('click', search);
document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    search();
  }
});

function search() {
  var input = document.getElementById('search-input').value.toLowerCase();
  var products = document.getElementsByClassName('product');

  for (var i = 0; i < products.length; i++) {
    var productName = products[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
    if (productName.includes(input)) {
      products[i].style.display = 'block';
    } else {
      products[i].style.display = 'none';
    }
  }
}