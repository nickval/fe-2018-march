let data = [
    {
        "id": 1,
        "name": "door",
        "price": 99
    },
    {
        "id": 2,
        "name": "window",
        "price": 199
    },
    {
        "id": 3,
        "name": "table",
        "price": 450
    },
    {
        "id": 4,
        "name": "chair",
        "price": 230
    },
    {
        "id": 5,
        "name": "sofa",
        "price": 999
    }
];

window.onload = function () {
    let goodsList = document.querySelector(".goodsList"),
        tempList = [],
        cart = document.querySelector(".cart");

    data.forEach((item) => {
        let itemList = document.createElement("li"),
            button = document.createElement("button");

        button.classList.add("button");
        button.setAttribute(`data-btn`, item.id);
        itemList.classList.add("item");
        itemList.innerText = `id: ${item.id}, name: ${item.name}`;
        button.textContent = "Buy";
        itemList.appendChild(button);
        tempList.push(itemList);
    });

    goodsList.append(...tempList);
    goodsList.addEventListener("click", addToCart);
    
    function addToCart(event) {
        let isBtn = event.target.hasAttribute("data-btn"),
            value = Number(event.target.getAttribute("data-btn"));
            console.log('value ', value);

        if (!isBtn) return;
        // console.log(goodsList);
        // debugger;
        // let arrTmpObj = Array(goodsList.querySelectorAll(".item")[value - 1]);

        // cart.append(...arrTmpObj);

        // let tmpObj = Array(goodsList.querySelectorAll(".item")).find((item, idx) => (idx+1) === value);
        
        // tmpObj = arrTmpObj.find((item, idx) => (idx+1) == value);
        // console.log(arrTmpObj);
        // cart.appendChild(goodsList[value]);
        // console.log(event.target.getAttribute("data-btn"));

        let arrTmpObj = [].slice.call(goodsList.querySelectorAll(".item"));

        const listItem = arrTmpObj.find((item, idx) => (idx+1) === value );

        console.log(listItem);

        const cartList = document.createElement('li');
        cartList.classList.add('cartListItem');
        cartList.innerText = `${data[value-1]}`;
        cart.appendChild(cartList);
    }; 
}