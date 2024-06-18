const root = document.getElementById('root');
let products = [];

const req = fetch('https://dummyjson.com/products');
req.then((res) => {
    return res.json();
}).then((data) => {
    products = data.products;
    renderUI(products);
}).catch((error) => {
    alert(error);
});

const renderUI = (products) => {
    root.innerHTML = ''; // Clear previous content
    for (let i = 0; i < products.length; i++) {
        const container = document.createElement('div');
        container.className = 'card';
        container.innerHTML = `
            <h2>${products[i].title}</h2>
            <p>$${products[i].price}</p>
            <img src="${products[i].thumbnail}" alt="${products[i].title}">
        `;
        root.appendChild(container);
    }
};

const searchProducts = () => {
    const input = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(input)
    
    );
    renderUI(filteredProducts);
};