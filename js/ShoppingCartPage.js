
var products       = JSON.parse(localStorage.getItem('cart')) || [];
var badge          = document.getElementById('badge');
var shoppingbag    = document.getElementById('shoppingbag');
var subTotal       = document.getElementById('subtotal')
var estimatedTotal = document.getElementById('estimatedtotal')
var itemContainer  = document.getElementById('item-container')

var itemlist = "";

repopulateItem();

function repopulateBadge() {
    if(products.length > 0) {
        shoppingbag.innerHTML = "(" + sumAddToCart(products) + ")";
        badge.innerHTML = sumAddToCart(products);
        badge.classList.remove('d-none');
        badge.classList.add('add-to-cart-badge');
    }
    else {
        shoppingbag.innerHTML = "";
        badge.classList.add('d-none');
        badge.classList.remove('add-to-cart-badge');
    }  
}

function repopulateItem() {
    itemlist = "";

    products.forEach(item => {
        itemlist += itemTemplate(item);
    });

    let total = sumPrices();

    subTotal.innerHTML = '$' + total.toLocaleString();
    estimatedTotal.innerHTML = '$' + total.toLocaleString();
    itemContainer.innerHTML = itemlist;

    repopulateBadge();
    
}

function sumPrices() {
    let totalPrice = 0;
    products.forEach((product) => {
        if(product.discount_price != null) {
            totalPrice += (product.discount_price * product.quantity)
        }
        else {
            totalPrice += (product.price *  product.quantity)
        }
        
    });
    return totalPrice;
}

function addQuantityById(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        product.quantity += 1;
        alert({ message: "Successfully Added!", status: "success" });
        localStorage.setItem('cart', JSON.stringify(products));
        repopulateItem();
    } 
}

function removeQuantityById(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        product.quantity -= 1;
        alert({ message: "Successfully Remove!", status: "success" });
        localStorage.setItem('cart', JSON.stringify(products));
        if(product.quantity == 0) {
            removeProductById(id);
        }
        
        repopulateItem();
        
    } 
}

function removeAllQuantityById(id) {
    const product = products.find((product) => product.id === id);
    removeProductById(id);
    repopulateItem();    
    alert({ message: "Successfully Remove All!", status: "success" });
    localStorage.setItem('cart', JSON.stringify(products));
}

function removeProductById(id) {
    let indexToRemove = products.findIndex((product) => product.id === id);
    if (indexToRemove !== -1) {
        products.splice(indexToRemove, 1);
    }
}

function itemTemplate(item) {

    let price = "$" + (item.price * item.quantity);

    if (item.discount_price != null) {
        price = `
        <span class="discounted">$${item.price * item.quantity}</span> 
        <span class="color-discounted"> $${item.discount_price * item.quantity}</span>`;
    }

    let template = `
    <div class="per-item">
        <hr>
        <div class="d-flex">
            <div> 
                <img class="item-image" src="${item.img}"/>
            </div>
            <div class="title-brand-size">
                <div class="title"> ${item.title} </div>
                <div class="brand"> ${item.brand} </div>
                <div class="size"> Size: ${item.size} </div>  
                <div class="quantity"> quantity: ${item.quantity} </div> 
                <div style="margin-top: 20px;"> 
                    <span class="add-remove" onclick="addQuantityById(${item.id})">Add</span> 
                    <span class="add-remove" onclick="removeQuantityById(${item.id})">Remove</span>
                    <span class="add-remove" onclick="removeAllQuantityById(${item.id})">Remove All</span> 
                </div>
            </div>
            <div class="bolder" style="margin-left:auto; font-size: 25px;">
                ${price}
            </div>
        </div>  
    </div>
`;

    return template;
}

function checkout() {
  products = [];  
  alert({ message: "Thankyou for your purchase!", status: "success" });
  localStorage.removeItem('cart');
  repopulateItem();
}

