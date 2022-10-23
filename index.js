const imgSrcArr = [
  "chandra-oh-y5hRv6UNKMg-unsplash.jpg",
  "devin-avery-bMH8ub9z1_U-unsplash.jpg",
  "devin-avery-BRVqq2uak4E-unsplash.jpg",
  "gabrielle-henderson-1DMNn6gBbwQ-unsplash.jpg",
  "nery-montenegro-SmEty_TVr80-unsplash.jpg",
  "olena-sergienko-GOVTETevRm8-unsplash.jpg",
  "phaedra-botanicals-uFAHrKYkTVI-unsplash.jpg",
  "pharma-hemp-complex-tAzdKblAinw-unsplash.jpg",
  "pharma-hemp-complex-yVAXSK6zFIM-unsplash.jpg",
];
const main = document.querySelector("main");

function createCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    const productCard = document.createElement("section");
    productCard.classList.add("product-card", "my-3");
    productCard.innerHTML = `<a href="#"><img src='./assets/${arr[i]}'/></a>
    <a href="#"><p class='fw500'>Lorem ipsum dolor sit</p></a>
    <p class='fw700'>R$ <span class='product-price'>50,00</span>
    </p>`;
    main.append(productCard);
  }
}
createCards(imgSrcArr);
