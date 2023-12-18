



// const fetchProducts = () => {fetch('https://dummyjson.com/products')  
//   .then(res => res.json())
//   .then();
// }








const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-bar")
const categoriesContainer = document.querySelector('.cats')

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts.map(
  (product) => `<div class="product">
  <img class="product-image" src=${product.image} alt="product">
  <h3 class="product-name">${product.name}</h3>
  <p class="product-cat">${product.category}</p>
  <p class="product-price"><span class="price-value">${product.price}</span><span class="unit"> FCFA</span></p>
  <button class="AddToCartbtn">Add to Cart</button>
  </div>`
  ).join("");
}

const setCategories = () => {
  const categoriesList = products.map(product => product.category);
  const cats = ["All", ...categoriesList.filter((cat, index) => categoriesList.indexOf(cat) === index)]

  console.log(cats)
  categoriesContainer.innerHTML = cats.map(cat => `<span class="cat">${cat}</span>`).join("")
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  setCategories()
  searchInput.onkeyup = (e) => {
    const searchTerm = e.target.value
    if(searchTerm.length > 0) {
      displayProducts(products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.price.toString().includes(searchTerm.toString())))
      if(products.filter(product => product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || product.price.toString().indexOf(searchTerm.toString()) !== -1).length === 0) {
        productsContainer.innerHTML = `<div class='error'> Product not found</div>`
      }
    }
     
    else {
      displayProducts(products)
    }
  }

  categoriesContainer.onclick = (e) => {
    const selectCat = e.target.textContent
    if (selectCat === "All") {
      displayProducts(products)
    }else if(products.filter(product => product.category == selectCat).length > 0) {
      displayProducts(products.filter((product) => product.category == selectCat))
    }else {
      return
    }
  }


  const filterToggle = document.querySelector(".filter");
  filterToggle.onclick = () => {
      categoriesContainer.style.display = categoriesContainer.style.display === "flex" ? "none" : "flex";
  };
});