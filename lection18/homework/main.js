let data = [{
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
let cartData = [];
console.log(cartData);
console.log(data);

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
        itemList.setAttribute(`data-item`, 'item' + item.id);
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
        // cartData[0] = data[value - 1];
        // console.log("data = ", data[value - 1]);

        // console.log("cart = ", cartData);
        if (cartData.length > 0) {
            cartData.forEach((item) => {
                if (item.id == value) {
                    item.amount++;
                } else {
                    cartData.push(data[value - 1]);
                }
            });

        } else {
            cartData.push(data[value - 1]);
            cartData[0].amount = 1;
        }

        console.log("cart = ", cartData);
        tempList.length = 0;

        cartData.forEach((item) => {
            let itemList = document.createElement("li"),
                button = document.createElement("button");
    
            button.classList.add("button");
            button.setAttribute(`data-btn`, item.id);
            itemList.classList.add("item");
            itemList.innerText = `id: ${item.id}, name: ${item.name}`;
            button.textContent = "Remove";
            itemList.appendChild(button);
            tempList.push(itemList);
        });
        cart.appendChild(...tempList);
        console.log(goodsList.getElementById('item1'));
        // cart.addEventListener("click", );
        // console.log(goodsList);
        // debugger;
        // let arrTmpObj = Array(goodsList.querySelectorAll(".item")[value - 1]);

        // cart.append(...arrTmpObj);

        // let tmpObj = Array(goodsList.querySelectorAll(".item")).find((item, idx) => (idx+1) === value);

        // tmpObj = arrTmpObj.find((item, idx) => (idx+1) == value);
        // console.log(arrTmpObj);
        // cart.appendChild(goodsList[value]);
        // console.log(event.target.getAttribute("data-btn"));

        // ---- PASHA -----
        //     let arrTmpObj = [].slice.call(goodsList.querySelectorAll(".item"));

        //     const listItem = arrTmpObj.find((item, idx) => (idx+1) === value );

        //     console.log(listItem);

        //     const cartList = document.createElement('li');
        //     cartList.classList.add('cartListItem');

        //     cartList.innerText = `${data[value-1]}`;
        //     cart.appendChild(cartList);
    };
}