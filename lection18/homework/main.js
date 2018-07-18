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

// creating Goods List

    data.forEach((item) => {
        let itemLi = document.createElement("li"),
            button = document.createElement("button");

        button.classList.add("button");
        button.setAttribute(`data-btn`, item.id);
        itemLi.classList.add("item");
        itemLi.setAttribute(`data-item`, 'item' + item.id);
        itemLi.innerText = `id: ${item.id}, name: ${item.name}`;
        button.textContent = "Buy";
        itemLi.appendChild(button);
        tempList.push(itemLi);
    });

    goodsList.append(...tempList);
    goodsList.addEventListener("click", addToCart);
    cart.addEventListener("click", removeFromCart);

    function addToCart(event) {
        let isBtn = event.target.hasAttribute("data-btn"),
            btnItemID = Number(event.target.getAttribute("data-btn"));
        // console.log('value ', value);

        if (!isBtn) return;

        if (cartData.length > 0) {
            cartData.forEach((item) => {
                if (item.id == btnItemID) {
                    item.amount++;
                }
            });
        } else {
            cartData.push(data[btnItemID - 1]);
            cartData[0].amount = 1;
        }

        if(!cartData.find((item) => isNotExist = (item.id == data[btnItemID -1].id) ? true : false)) {
            cartData.push(data[btnItemID - 1]);
            cartData[cartData.length -1].amount = 1;
        };

        tempList.length = 0;

        cartData.forEach((item) => {
            let itemLi = document.createElement("li"),
                button = document.createElement("button");
    
            button.classList.add("button");
            button.setAttribute(`data-btn-remove`, item.id);
            itemLi.classList.add("item");
            itemLi.innerText = `id: ${item.id}, name: ${item.name}, amount: ${item.amount}`;
            button.textContent = "Remove";
            itemLi.appendChild(button);
            tempList.push(itemLi);
        });
        cart.innerHTML = "<h3>Cart:</h3>";
        cart.append(...tempList);

        // ---- PASHA -----
        //     let arrTmpObj = [].slice.call(goodsList.querySelectorAll(".item"));

        //     const listItem = arrTmpObj.find((item, idx) => (idx+1) === value );

        //     console.log(listItem);

        //     const cartList = document.createElement('li');
        //     cartList.classList.add('cartListItem');

        //     cartList.innerText = `${data[value-1]}`;
        //     cart.appendChild(cartList);
    };

    function removeFromCart(event) {
        let isBtn = event.target.hasAttribute("data-btn-remove"),
            btnItemID = Number(event.target.getAttribute("data-btn-remove"));
        // console.log('value ', value);

        if (!isBtn) return;

        if (cartData.find((item, idx) => {
            if (item.id == btnItemID && item.amount > 1) {
                item.amount--;
            } else if (item.id == btnItemID && item.amount == 1) {
                cartData.splice(idx, 1);
                console.log("removedEl: ", idx);
            }

        })){

        }

        tempList.length = 0;

        cartData.forEach((item) => {
            let itemLi = document.createElement("li"),
                button = document.createElement("button");
    
            button.classList.add("button");
            button.setAttribute(`data-btn-remove`, item.id);
            itemLi.classList.add("item");
            itemLi.innerText = `id: ${item.id}, name: ${item.name}, amount: ${item.amount}`;
            button.textContent = "Remove";
            itemLi.appendChild(button);
            tempList.push(itemLi);
        });
        cart.innerHTML = "<h3>Cart:</h3>";
        cart.append(...tempList);

    };
}