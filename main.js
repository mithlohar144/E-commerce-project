
fetch('products.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  export function showProductContainer(products) {

    console.log(products);
  }