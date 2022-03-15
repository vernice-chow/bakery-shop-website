$(function () {

    var products = [{
        "pid": "01",
        "name": "Sweet Red Bean Bun",
        "price": "3.50",
        "quantity": "20",
        "desc": "Uncle Ong homemade tradisional red bean bun.",
        "rating": "5",
        "photo": "images/menu/menu-1.jpg",
        "type": "bun"
    },
    {
        "pid": "02",
        "name": "Tradisional Sesame Polo Bun",
        "price": "5.00",
        "quantity": "20",
        "desc": "Uncle Ong homemade polo bun with fresh sweet & sour pineapple fillings!",
        "rating": "5",
        "photo": "images/menu/menu-2.jpg",
        "type": "bun"
    },
    {
        "pid": "03",
        "name": "Uncle Ong Signature Cake",
        "price": "10.00",
        "quantity": "15",
        "desc": "Uncle Ong Signature Cake baked with high quality ingredients like flour, fresh farm eggs, milk.",
        "rating": "5",
        "photo": "images/menu/menu-3.jpg",
        "type": "cake"
    },
    {
        "pid": "04",
        "name": "Classical Donut",
        "price": "5.00",
        "quantity": "15",
        "desc": "Uncle Ong Classical Ring Donut with chocolate.",
        "rating": "5",
        "photo": "images/menu/menu-4.jpg",
        "type": "bun"
    },


    {
        "pid": "05",
        "name": "Almond Chocolate Cookies",
        "price": "6.50",
        "quantity": "10",
        "desc": "Uncle Ong healthy chocolate almond cookies! 300g per pack",
        "rating": "5",
        "photo": "images/menu/menu-5.jpg",
        "type": "cookie"
    },
    {
        "pid": "06",
        "name": "Peanut Butter Blossom Cookies",
        "price": "7.50",
        "quantity": "7",
        "desc": "Wonderful peanut butter blossom cookies with chocolate icing! 300g per pack",
        "rating": "5",
        "photo": "images/menu/menu-6.jpg",
        "type": "cookie"
    },
    {
        "pid": "07",
        "name": "Blueberry Cream Cake",
        "price": "20.00",
        "quantity": "3",
        "desc": "Uncle Ong blueberry cake with creamy and fruity taste. Your best choice for Birthday cake!",
        "rating": "5",
        "photo": "images/menu/menu-7.jpg",
        "type": "cake"
    },
    {
        "pid": "08",
        "name": "Coffee Bun (Roti Kopi)",
        "price": "2.00",
        "quantity": "25",
        "desc": "Ultra pillowy soft Coffee Bun with heavenly buttery goodness!",
        "rating": "5",
        "photo": "images/menu/menu-8.jpg",
        "type": "bun"
    }
    ];

    if (typeof (Storage) !== "undefined") {
        //save products into local storage
        localStorage.setItem("products", JSON.stringify(products))

        //check wish item
        if (localStorage.hasOwnProperty('wish')) {
            var wishTemp = JSON.parse(localStorage.getItem('wish'));
            var likebutton = $(".like");
            for (var i = 0; i < likebutton.length; i++) {
                for (var j = 0; j < wishTemp.length; j++) {
                    if (wishTemp[j].pid === $(likebutton[i]).attr("value")) {
                        $(likebutton[i]).removeClass("far");
                        $(likebutton[i]).addClass("fas");
                        break;
                    }
                }
            }

        }
    }

});

function addCart(product) {
    var myCart = [];
    var qty = Number.parseInt(document.getElementById(product).value);
    var productdetail = JSON.parse(localStorage.getItem('products'));
    var myChoice =
    {
        "pid": product,
        "orderQty": qty,
        "name": "",
        "price": "",
        "photo": ""
    };

    for (var j = 0; j < productdetail.length; j++) {
        if (myChoice.pid === productdetail[j].pid) {
            myChoice.name = productdetail[j].name;
            myChoice.price = (productdetail[j].price);
            myChoice.photo = (productdetail[j].photo);
            break;
        }
    }
    if (typeof (Storage) !== "undefined") {
        if (localStorage.hasOwnProperty('cartItems')) {
            myCart = JSON.parse(localStorage.getItem('cartItems'));
            for (var i = 0; i < myCart.length; i++) {
                if (myChoice.pid === myCart[i].pid) {
                    myCart[i].orderQty = Number(myCart[i].orderQty) + qty;
                    break;
                }
                if (i + 1 === myCart.length) {
                    myCart.push(myChoice);
                    break;
                }
            }
        } else {
            myCart.unshift(myChoice);
        }

        localStorage.setItem('cartItems', JSON.stringify(myCart));
        alert("Item successfully added to your cart!");
    } else
        alert("Your Browser does not support local storage");
}



function addWish(item) {
    var myWish = [];
    var myclick = [];
    var j = JSON.parse(localStorage.getItem('products'));
    var a, b, c;
    var wishlist = {
        "pid": "",
        "pname": "",
        "pimage": "",
        "remark": ""
    };
    var y = 0;
    var clicking = {
        "pid": "",
        "clicked": 0
    }
    if (typeof (Storage) !== "undefined") {
        if (localStorage.hasOwnProperty('wish')) {
            myWish = JSON.parse(localStorage.getItem('wish'));
            for (var i = 0; i < myWish.length; i++) {
                if ($(item).attr("value") === myWish[i].pid) {
                    $(item).removeClass("fas");
                    $(item).addClass("far");
                    myWish.splice(i, 1);
                    break;
                }
                if (i + 1 === myWish.length) {
                    $(item).removeClass("far");
                    $(item).addClass("fas");
                    for (var o = 0; o < j.length; o++)
                        if ($(item).attr("value") === j[o].pid) {
                            wishlist.pid = (j[o].pid);
                            wishlist.pname = (j[o].name);
                            wishlist.pimage = (j[o].photo);
                            break;
                        }

                    myWish.push(wishlist);
                    break;
                }
            }
        } else {
            for (var o = 0; o < j.length; o++)
                if ($(item).attr("value") === j[o].pid) {
                    wishlist.pid = (j[o].pid);
                    wishlist.pname = (j[o].name);
                    wishlist.pimage = (j[o].photo);
                    break;
                }

            myWish.unshift(wishlist);
            $(item).removeClass("far");
            $(item).addClass("fas");
        }

        if (myWish.length === 0)
            localStorage.removeItem('wish');
        else
            localStorage.setItem('wish', JSON.stringify(myWish))

    } else
        alert("Your Browser does not support local storage");





    if (localStorage.hasOwnProperty('click')) {
        myclick = JSON.parse(localStorage.getItem('click'));
        for (var i = 0; i < myclick.length; i++) {
            if ($(item).attr("value") === myclick[i].pid) {
                myclick[i].clicked += 1;
                break;
            }
            if (i + 1 === myclick.length) {
                for (var o = 0; o < j.length; o++)
                    if ($(item).attr("value") === j[o].pid) {
                        clicking.pid = (j[o].pid);

                        myclick.push(clicking);
                        break;
                    }
            }
        }
    } else {
        for (var o = 0; o < j.length; o++)
            if ($(item).attr("value") === j[o].pid) {


                clicking.pid = (j[o].pid);
                clicking.clicked = 1;
                myclick.push(clicking);
                break;
            }
    }

    if (myclick.length !== 0)
        localStorage.setItem('click', JSON.stringify(myclick));

}