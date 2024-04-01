// https://dummyjson.com/products

function productTofrontend(result) {
    let productContainer = document.getElementById("productContainer");

    let template = `
        <div class="projectCard">
            <div class="tumbnail">
                <img class="tubmnailImage" id="imagethumbnail" src="" alt="">
            </div>

            <div class="projuctinfo">
                <div  class="infoItem">
                    <h3>title : </h3>
                    <span id="producttitle">
                        Projuct 1
                    </span>
                </div>

                <div  class="infoItem">
                    <h3>category : </h3>
                    <span id="productcategory">
                        Projuct 1
                    </span>
                </div>

                <div class="infoItem">
                    <h3>description : </h3>
                    <span id="productdescription">
                        Projuct 1
                    </span>
                </div>

                <div class="infoItem">
                    <h3>discount Percentage : </h3>
                    <span id="productdiscountPercentage">
                        Projuct 1
                    </span><span>%</span>
                </div>

                
                <div class="infoItem">
                    <h3>Rating : </h3>
                    <span id="productrating">
                        Projuct 1
                    </span>
                </div>

                <div class="infoItem">
                    <h3>Stock : </h3>
                    <span id="productstock">
                        Projuct 1
                    </span>
                </div>
            </div>
            <div class="btn">
                <button>View</button>
                <button>Add</button>
            </div>
        </div>
    `
    productContainer.insertAdjacentHTML('afterend',template);


    let imagethumbnail = document.getElementById("imagethumbnail");
    imagethumbnail.src = result.thumbnail;

    document.getElementById("producttitle").innerText = result.title;

    document.getElementById("productcategory").innerText = result.category;
    document.getElementById("productdescription").innerText = result.description
    document.getElementById("productdiscountPercentage").innerText = result.discountPercentage
    document.getElementById("productrating").innerText = result.rating
    document.getElementById("productstock").innerText = result.stock; 
}


fetch("https://dummyjson.com/products")
    .then((res) => {
        res.json()
            .then((result) => {
                console.log(result);
                
                result.products.forEach((element)=>{
                    productTofrontend(element);
                });
                
            }).catch((err) => {
                console.log(err);
            })
    }).catch((err) => {
        console.log(err);
    })