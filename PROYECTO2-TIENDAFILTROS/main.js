import './style.css'



function productsGrid(){

  const products = [
    pOne = {
      brand: "Nike Original",
      name: "Air Max 1",
      price: 120,
    },
    pTwo = {
      brand: "New Balance",
      name: "NB 9060",
      price: 80,
    },
    pThree = {
      brand: "Nike Original",
      name: "Nike Revolution",
      price: 90,
    },
    pFour = {
      brand: "Adidas Original",
      name: "Forum Buckle",
      price: 100,
    },
    pFive = {
      brand: "Adidas Original",
      name: "Campus",
      price: 120,
    },
    pSix = {
      brand: "New Balance",
      name: "NB 327",
      price: 120,
    },
  ]

  for (const product of products) {
    const body = document.querySelector("#app");

    const p = document.createElement("div");
    const brandName = document.createElement("p");
    brandName.innerText = product.brand;
    p.append(brandName);

    const namePrice = document.createElement("div");
    const nName = document.createElement("h2");
    const nPrice = docuemnt.createElement("p");
    nName.innerText = product.name;
    nPrice.innerText = product.price;

    namePrice.append(nName, nPrice);

    body.append(namePrice, p)
  }
}


productsGrid()