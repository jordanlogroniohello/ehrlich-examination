
function createNav(nav) {

  nav.innerHTML = `
    <div class="left-nav">
      <div class="nav-item"> WOMEN </div>
      <div class="nav-item"> PLUS </div>
      <div class="nav-item"> MEN </div>
      <div class="nav-item"> ACCESSORIES </div>	
    </div>
    <div class="logo"> 
      <a href="index.html"><img src = "img/nav/Logo.svg" alt="Logo"/> </a>  
    </div>
    <div class="right-nav">
      <div class="nav-item"> 
        <img src = "img/nav/bx_bx-user.svg" alt="User"/> 
      </div>
      <div class="nav-item"  id="cart-item"> 
        <img src = "img/nav/bx_bx-shopping-bag.svg" alt="Shopping bag"/> 
        <span id="badge" class="d-none"></span>
        <div id="overviewContainer" class="overview-container d-none"></div>
      </div>
      <div class="nav-item"> 
        <img src = "img/nav/bx_bx-heart.svg" alt="Heart"/> 
      </div>
      <div class="nav-item"> 
        <img src = "img/nav/bx_bx-support.svg" alt="Support"/> 
      </div>
      <div class="nav-item"> 
        <img src = "img/nav/bx_bx-search.svg" alt="Search"/> 
      </div>	
      <div class="nav-item currency">
        <button class="btn-currency"> 
          <img src = "img/nav/us-flag.svg" alt="us Flag"/> 
          <span> USD $ </span> 
          <img src = "img/nav/ant-design-down-outlined.svg" alt="ant design down"/> 
        </button>
      </div>
    </div>	
  `;
  
}

function createFooter(footer) {

  footer.innerHTML = `
    <div class="d-flex">
      <div class="m-r-20">
        <div class="title">COMPANY INFO</div>
        <div class="list">About THREADED</div>
        <div class="list">Affiliate</div>
        <div class="list">Blog</div>
        <div class="list">Careers</div>
      </div>
      <div class="m-r-20">
        <div class="title">help & support</div>
        <div class="list">faq</div>
        <div class="list">Shipping</div>
        <div class="list">Returns</div>
        <div class="list">How to Order</div>
        <div class="list">How to Track</div>
      </div>
      <div class="m-r-20">
        <div class="title">CUSTOMER CARE</div>
        <div class="list">Contact us</div>
        <div class="list">payment methods</div>
      </div>
      <div class="m-l-120">
        <div class="title">Follow us</div>
        <div class="d-flex">
          <div><img src="img/footer/bx-bxl-facebook.svg"></div>
          <div><img src="img/footer/bx-bxl-instagram.svg"></div>
          <div><img src="img/footer/bx-bxl-twitter.svg"></div>
          <div><img src="img/footer/bx-bxl-youtube.svg"></div>
          <div><img src="img/footer/bx-bxl-pinterest-alt.svg"></div>
          <div><img src="img/footer/bx-bxl-tiktok.svg"></div>
        </div>
        <div class="title">WE ACCEPT</div>
        <div class="d-flex">
          <div><img src="img/footer/image-1.png"></div>
          <div><img src="img/footer/image-2.png"></div>
          <div><img src="img/footer/image-3.png"></div>
          <div><img src="img/footer/image-4.png"></div>
          <div><img src="img/footer/image-5.png"></div>

        </div>

      </div>
    </div>
    <div class="copyright"> 
      ©2021 THREADED All Rights Reserved. 
      <span>
        <img src = "img/nav/Logo.svg" alt="Logo"/>
      </span> 
    </div> 
  `;
}

function sumAddToCart(cart) {
  let total = 0;
  cart.forEach((product) => {
      total += product.quantity;
  });
  return total;
}

createNav(document.getElementById('nav'));
createFooter(document.getElementById('footer'));


window.alert = function(data) {
  swal.fire({
    text: data.message,
    icon: data.status,
    allowOutsideClick: true
  });
}

