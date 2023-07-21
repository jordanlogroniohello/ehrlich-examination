var cart  = JSON.parse(localStorage.getItem('cart')) || [];
var badge = document.getElementById('badge');
var overviewContainer = document.getElementById('overviewContainer');
var cartOverviewShow = false;

var products = [
    {
        id: 1,
        title: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit',
        brand: 'brand name',
        size: 'Small',
        price: 30,
        discount_price: null,
        img: "img/products/p1.png",
        quantity: 1
    },
    {
        id: 2,
        title: 'Chevron Flap Crossbody Bag',
        brand: 'brand name',
        size: 'Medium',
        price: 30,
        discount_price: 20,
        img: "img/products/p2.png",
        quantity: 1
    },
    {
        id: 3,
        title: 'Manilla Tan Multi Plaid Oversized Fringe Scarf',
        size: 'Large',
        brand: 'brand name',
        price: 30,
        discount_price: null,
        img: "img/products/p3.png",
        quantity: 1
    },
    {
        id: 4,
        title: 'Diamante Puff Sleeve Dress - Black',
        size: 'Large',
        brand: 'brand name',
        price: 30,
        discount_price: null,
        img: "img/products/p4.png",
        quantity: 1
    },
    {
        id: 5,
        title: 'Banneth Open Front Formal Dress in Black',
        size: 'Large',
        brand: 'brand name',
        price: 30,
        discount_price: 20,
        img: "img/products/p5.png",
        quantity: 1
    }

];

repopulateItem();

function repopulateItem() {
    itemlist = "";

    products.forEach(item => {
        itemlist += itemTemplate(item);
    });

    document.getElementById('item-container').innerHTML = itemlist;
    repopulateBadge();

}

function repopulateBadge() {
    if(cart.length > 0) {
        badge.innerHTML = sumAddToCart(cart);
        badge.classList.remove('d-none');
        badge.classList.add('add-to-cart-badge');
    }
    else {
        badge.classList.add('d-none');
        badge.classList.remove('add-to-cart-badge');
    }
}

function itemTemplate(item) {

    let price = "$" + item.price;

    if (item.discount_price != null) {
        price = `
        <span class="color-discounted">$${item.discount_price}</span>   
        <span class="line-through">$${item.price}</span> 
        `;
    }

    let template = `
        <div class="section-item"> 
            <img src="${item.img}"/>
            <div class="section-desc">
                ${item.title}
            </div>
            <div class="section-price"> 
                ${price}
                <span class="add-to-cart-btn" onclick="addToCart(${item.id})"> Add </span> 
            </div>
        </div>
    `;

    return template;
}

function addToCart(id) {
    
  let product = products.find((product) => product.id === id);
    
  if(cart.length > 0) {
        let tempCart = cart.find((product) => product.id === id);
        if(tempCart) {
            tempCart.quantity += 1;
        }
        else {
            cart.push(product);
        }
    
  }
  else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  badge.innerHTML = sumAddToCart(cart);
  badge.classList.remove('d-none');
  badge.classList.add('add-to-cart-badge');

  alert({ message: "Successfully Added!", status: "success" });

}

function onclickCartOverview() {
    if(cartOverviewShow) {
        overviewContainer.innerHTML = "";
        overviewContainer.classList.add('d-none');
        cartOverviewShow = false;
        
    }
    else {
        overviewContainer.innerHTML = cartOverview();
        overviewContainer.classList.remove('d-none');
        cartOverviewShow = true;
    }
    
}

function cartOverview() {

    let template = ``;
    let totalPrice = 0;
    let totalquantity =  0;
    
    cart.forEach((product) => {

        let price = "$" + (product.price * product.quantity);
        totalPrice += (product.price *  product.quantity);
        totalquantity += product.quantity;

        if(product.discount_price != null) {
            price = `
            <span class="discounted">$`+(product.price * product.quantity)+`</span> 
            <span class="color-discounted"> $` +(product.discount_price * product.quantity) + `</span>`;
            totalPrice += (product.discount_price * product.quantity)
        }

        template += `
        <div class="per-item">
            <div class="d-flex">
                <div> 
                    <img class="item-image" style="width: 80px;" src = "`+product.img+`"/>
                </div>
                <div class="title-brand-size" style="margin-left:10px;text-align: left;">
                    <div class="title f-size-15"> `+product.title+` </div>
                    <div class="brand f-size-15"> `+product.brand+` </div>
                    <div class="size f-size-15"> Size: `+product.size+` </div>  
                    <div class="quantity f-size-15"> quantity: `+product.quantity+` </div> 
                    <div class="bolder f-size-15">`+price+`</div>
                </div>
                
            </div>  
            <hr>
        </div>
        `;
    });

    


    template += `
    <div class="bolder">My Bag (`+totalquantity+`) <span style="float:right">`+totalPrice.toLocaleString()+`</span></div>
    <div class="begin-checkout-btn"> <a href="shopping-cart.html" >BEGIN CHECKOUT</a> </div>`;

    return template;
}


var cartItem = document.getElementById('cart-item');
cartItem.addEventListener('click', () => {
  onclickCartOverview();
});