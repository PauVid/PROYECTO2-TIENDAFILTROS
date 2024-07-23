import './style.css'

const products = [
  {  
    brand: "Nike Original",
    name: "Air Max 1",
    price: 120,
    image: "/assets/NIKEAIR1.png",
    class: "nike",
  },
  {  
    brand: "New Balance",
    name: "NB 9060",
    price: 80,
    image: "/assets/NB9060.png",
    class: "newbalance",
  },
  {  
    brand: "Nike Original",
    name: "Nike Revolution",
    price: 90,
    image: "/assets/NIKEREV.png",
    class: "nike",
  },
  {  
    brand: "Adidas Original",
    name: "Forum Buckle",
    price: 100,
    image: "/assets/ADIDASFORUMBUCK.png",
    class: "adidas",
  },
  {  
    brand: "Adidas Original",
    name: "Campus",
    price: 120,
    image: "/assets/ADIDASCAMPUS.png",
    class: "adidas",
  },
  {  
    brand: "New Balance",
    name: "NB327",
    price: 120,
    image: "/assets/NB327.png",
    class: "newbalance",
  },
  {  
    brand: "Nike Original",
    name: "Nike Dunk",
    price: 90,
    image: "/assets/NIKEDUNK.png",
    class: "nike",
  },
  {  
    brand: "Adidas Original",
    name: "Gazzelle",
    price: 120,
    image: "/assets/ADIDASGAZ.png",
    class: "adidas",
  },
  {  
    brand: "Nike Original",
    name: "Nike Air Max SC",
    price: 120,
    image: "/assets/NIKEAIRMXSC.png",
    class: "nike",
  },
  {  
    brand: "Adidas Original",
    name: "Adidas Hand Ball Spezial",
    price: 120,
    image: "/assets/ADIDASHBSPZ.png",
    class: "adidas",
  },
  {  
    brand: "Nike Original",
    name: "Nike Air Force",
    price: 120,
    image: "/assets/NIKEAIRFR.png",
    class: "nike",
  },
  {  
    brand: "New Balance",
    name: "NB9060",
    price: 120,
    image: "/assets/NB9060_2.png",
    class: "newbalance",
  },
  {  
    brand: "New Balance",
    name: "NB480",
    price: 120,
    image: "/assets/NB480.png",
    class: "newbalance",
  },
  {  
    brand: "Nike Original",
    name: "Nike Full Force Low",
    price: 120,
    image: "/assets/NIKEFFLOW.png",
    class: "nike",
  },
  {  
    brand: "Nike Original",
    name: "Nike Air Max SC",
    price: 120,
    image: "/assets/NIKEAIRMXSC_2.png",
    class: "nike",
  },
  {  
    brand: "Adidas Original",
    name: "Adidas Hand Ball Spezial",
    price: 120,
    image: "/assets/ADIDASHBSPZ_2.png",
    class: "adidas",
  },
]

function filters() {
  function updateProductVisibility() {

    const nikeVisible = document.querySelector("button[data-brand='nike-original']");
    const nbVisible = document.querySelector("button[data-brand='new-balance']");
    const adidasVisible = document.querySelector("button[data-brand='adidas-original']");
    
    if (nikeVisible.classList.contains("selected")) {
      document.querySelectorAll(".nike").forEach(product => product.classList.add("visible"));
      document.querySelectorAll(".adidas").forEach(product => product.classList.remove("visible"));
      document.querySelectorAll(".newbalance").forEach(product => product.classList.remove("visible"));
    } else {
      // document.querySelectorAll(".adidas").forEach(product => product.classList.remove("visible"));
      document.querySelectorAll(".newbalance").forEach(product => product.classList.add("visible"));
      document.querySelectorAll(".nike").forEach(product => product.classList.add("visible"));
    }
    
    if (nbVisible.classList.contains("selected")) {
      document.querySelectorAll(".newbalance").forEach(product => product.classList.add("visible"));
      document.querySelectorAll(".adidas").forEach(product => product.classList.remove("visible"));
      document.querySelectorAll(".nike").forEach(product => product.classList.remove("visible"));
    } else {
      // document.querySelectorAll(".newbalance").forEach(product => product.classList.remove("visible"));
      document.querySelectorAll(".adidas").forEach(product => product.classList.add("visible"));
      document.querySelectorAll(".nike").forEach(product => product.classList.add("visible"));
    }
    
    if (adidasVisible.classList.contains("selected")) {
      document.querySelectorAll(".adidas").forEach(product => product.classList.add("visible"));
      document.querySelectorAll(".nike").forEach(product => product.classList.remove("visible"));
      document.querySelectorAll(".newbalance").forEach(product => product.classList.remove("visible"));
    } else {
      // document.querySelectorAll(".adidas").forEach(product => product.classList.remove("visible"));
      document.querySelectorAll(".newbalance").forEach(product => product.classList.add("visible"));
      document.querySelectorAll(".nike").forEach(product => product.classList.add("visible"));
    }

  }

  const body = document.querySelector("#app");

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter-container");

  const uniqueBrands = [...new Set(products.map(product => product.brand))];

  uniqueBrands.forEach(brand => {
    const filterBtn = document.createElement("button");
    filterBtn.classList.add("filter-btn");
    filterBtn.innerText = brand;
    filterBtn.dataset.brand = brand.toLowerCase().replace(/\s+/g, '-');
    filterContainer.append(filterBtn);

    filterBtn.addEventListener("click", () => {
      filterBtn.classList.toggle("selected");
      updateProductVisibility();
    });
  });

  body.append(filterContainer);
}

function productsGrid() {
  const body = document.querySelector("#app");

  const productList = document.createElement("div");
  productList.classList.add("product-grid");

  products.forEach(product => {
    const p = document.createElement("div");
    p.classList.add("product-container");
    p.classList.add(product.class.toLowerCase().replace(/\s+/g, '-'));
    p.classList.add("visible");

    const imgProduct = document.createElement("img");
    imgProduct.src = product.image;

    const brandName = document.createElement("p");
    brandName.innerText = product.brand;

    const namePrice = document.createElement("div");
    namePrice.classList.add("name-price");
    const nName = document.createElement("h2");
    const nPrice = document.createElement("p");
    nName.innerText = product.name;
    nPrice.innerText = product.price + "€";

    namePrice.append(nName, nPrice);
    p.append(imgProduct, brandName, namePrice);

    const btnCta = document.createElement("button");
    btnCta.innerHTML = "Comprar";
    p.append(btnCta);

    productList.append(p);
  });

  body.append(productList);
}


function header() {
  const body = document.querySelector("#app");

  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header");

  const headerLogo = document.createElement("img");
  headerLogo.src = "/assets/logo.png";

  const options = [
    {
      name: "Hombre",
      href: "#",
    },
    {
      name: "Mujer",
      href: "#",
    },
    {
      name: "Niños",
      href: "#",
    },
    {
      name: "Ofertas",
      href: "#",
    },
  ]

  const headerOptions = document.createElement("div");
  headerOptions.classList.add("options-container");

  for (const option of options) {
    const headerOption = document.createElement("a");
    headerOption.innerText = option.name;
    headerOptions.append(headerOption);
  }

  const logosContainer = document.createElement("div");
  logosContainer.classList.add("logos-container")
  const logos = [
    {
      image: "/assets/logo_02.svg",
      name: "logo 2"
    },
    {
      image: "/assets/logo_03.svg",
      name: "logo 3"
    },
    {
      image: "/assets/logo_04.svg",
      name: "logo 4"
    }
  ]

  for (const logo of logos) {
    const logoImg = document.createElement("img");
    logoImg.src = logo.image;
    logosContainer.append(logoImg);
  }


  headerContainer.append(headerLogo, headerOptions, logosContainer);
  body.append(headerContainer);

}

function banner () {
  const body = document.querySelector("#app");

  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner-image");
  const banner = document.createElement("img");

  banner.src = "/assets/fondo.png"


  bannerContainer.append(banner);
  body.append(bannerContainer);
}

header()
banner()
filters()
productsGrid()