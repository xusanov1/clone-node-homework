const table = document.querySelector('table');

fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => {
        data.data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img src="${user.avatar}" alt="${user.first_name} ${user.last_name}"></td>
      `;
            table.appendChild(row);
        });
    })
    .catch(error => console.error(error));

const productCards = document.querySelector('.product-cards');

fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
      `;
            productCards.appendChild(card);
        });
    })
    .catch(error => console.error(error));