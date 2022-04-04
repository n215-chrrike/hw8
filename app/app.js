var homeContent = `<div class="hero"></div>

            <div class="content">
                <h1>HOME</h1>
                <div class="tag-line">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            <div class="img-and-text">
                <img src="images/home-1.jpg" alt="home img one">
                <div class= "text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus ipsum tenetur magni dolorem quod, voluptas libero officiis quas consequatur quis animi hic assumenda doloremque deserunt sequi perspiciatis eius veritatis nisi aliquid impedit. Suscipit iure eaque officia itaque laborum in a ut voluptatem expedita labore, consequuntur perspiciatis quas ipsum dignissimos.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta maiores quo eveniet id atque perspiciatis, deleniti mollitia? Nesciunt odit optio unde facere, aliquid aliquam laboriosam vitae dolorem sed, qui magnam delectus, excepturi ex veritatis quibusdam minus voluptates!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatem a minus vitae sit obcaecati, nam fuga rerum veritatis non consectetur ipsam eius et animi impedit incidunt eaque. Provident nam hic a officiis amet sunt fugiat? Exercitationem perferendis molestias, voluptatem possimus maxime sunt ratione.</p>
                </div>
            </div>`;

var aboutContent = `<div class="hero"></div>
            
            <div class="content">
                <h1>ABOUT</h1>
                <div class="tag-line">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            <div class="img-and-text">
                <img src="images/about-1.jpg" alt="about img one">
                <div class="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis autem temporibus quisquam vel provident explicabo beatae fugiat omnis sint, numquam nisi eaque pariatur vitae, voluptatibus, doloremque ea dolor! Vero non officiis unde animi soluta, asperiores dolore iure nisi perferendis laudantium laboriosam cupiditate distinctio! Eligendi ullam omnis, laboriosam porro asperiores officiis!</p>
                </div>
            </div>
            <div class="img-and-text">
                <img src="images/about-2.jpg" alt="about img two">
                <div class="text">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis autem temporibus quisquam vel provident
                        explicabo beatae fugiat omnis sint, numquam nisi eaque pariatur vitae, voluptatibus, doloremque ea dolor!
                        Vero non officiis unde animi soluta, asperiores dolore iure nisi perferendis laudantium laboriosam
                        cupiditate distinctio! Eligendi ullam omnis, laboriosam porro asperiores officiis!</p>
                </div>
            </div>
            </div>`;

var productsContent = `<div class="hero"></div>
            
            <div class="content">
                <h1>PRODUCTS</h1>
                <div class="tag-line">Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            
            <div class="product">
                <div class="product-img"><img src="images/product-1.jpg" alt="product one"></div>
                <div class="product-desc"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis minima sapiente cum. Reprehenderit, veritatis fugiat reiciendis nulla sed voluptates necessitatibus vel dolorum qui, nisi eum obcaecati quam assumenda consequuntur omnis, laboriosam aperiam! Asperiores tenetur quos labore porro, impedit dignissimos harum incidunt deleniti. Dolor inventore magnam vel neque, maiores veniam nemo illum similique quae ex nisi sint obcaecati provident architecto iusto nam velit voluptas corporis accusamus perferendis ad aut laboriosam. Et numquam veniam earum repellat nobis eaque quasi animi ipsa nostrum dolores, modi a eum placeat voluptates ab unde dolore esse velit illum tempora sit at temporibus rerum! Iusto, eius!</p></div>
            </div>
            <div class="product">
                <div class="product-img"><img src="images/product-2.jpg" alt="product two"></div>
                <div class="product-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas perspiciatis minima sapiente cum.
                        Reprehenderit, veritatis fugiat reiciendis nulla sed voluptates necessitatibus vel dolorum qui, nisi eum
                        obcaecati quam assumenda consequuntur omnis, laboriosam aperiam! Asperiores tenetur quos labore porro,
                        impedit dignissimos harum incidunt deleniti. Dolor inventore magnam vel neque, maiores veniam nemo illum
                        similique quae ex nisi sint obcaecati provident architecto iusto nam velit voluptas corporis accusamus
                        perferendis ad aut laboriosam. Et numquam veniam earum repellat nobis eaque quasi animi ipsa nostrum
                        dolores, modi a eum placeat voluptates ab unde dolore esse velit illum tempora sit at temporibus rerum!
                        Iusto, eius!</p>
                </div>
            </div>
            `;

var contactContent = `<div class="content">
                <h1>CONTACT</h1>
                <div class="tag-line">Lorem ipsum dolor sit amet consectetur.</div>
            </div>

            <div class="form">
                <form action="#">
                    <div class="input-box">
                        <input type="text" id="name" name="name" placeholder="Name...">
                    </div>
                    <div class="input-box">
                        <input type="text" id="email" name="email" placeholder="Email...">
                    </div>
                    <div class="input-box">
                        <input type="text" name="subject" id="subject" placeholder="Subject...">
                    </div>
                    <div class="message-box">
                        <textarea id="subject" name="message" placeholder="Message..." style="height:200px"></textarea>
                    </div>
                </form>
            </div>`;

function initListeners(){
    $("nav a").click(function(e){
        let btnId = e.currentTarget.id;
        loadPageContent(btnId);
        //console.log("click " + contentId);
    });
}

function loadPageContent(pageName){
    let contentId = pageName + "Content";
    $("#app").html(eval(contentId));
}

function initApp(){
    initListeners();
}

$(document).ready(function() {
    loadPageContent("home");
    initApp();
});