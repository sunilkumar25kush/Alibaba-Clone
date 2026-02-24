const url = "https://fakestoreapi.com/products";
const data1 = document.getElementById("productContainer");

const product = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)


    data1.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        data1.innerHTML += `
         <div class="card">
                <img src="${data[i].image}" alt="">
                <h3>${data[i].title}</h3>
                <p> Price:- $${data[i].price}</p>
            </div>
            `;
    }
};

product();




