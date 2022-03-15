function readCart() {
    var x = localStorage.getItem('cartItems');
    var y = JSON.parse(x);
    //var del = "<i class='ti-close close' type='i'></i>"*/
    //var deleteit = "<button class='btn btn-default btn3d deleteclass' style='color:red' type='button' ok='delItem()'>Delete</button>";

    var total=0;
    if (!(localStorage.getItem('cartItems'))) 
    {
        alert("Your cart is empty, kindly go to add some products.");
    }
    for (var x = 0; x < y.length; x++) 
    {
        var subtotal = parseFloat(y[x].price * y[x].orderQty);
        total +=subtotal;
        document.getElementById("cartItems").innerHTML += '<tr><th scope="row" class="text-left"><img src="' + y[x].photo + '" class="img-fluid w-25 mr-3">' + y[x].name + '</th><td></td><td>' + y[x].price + '</td><td><input class="quantity" type="text" value="' + y[x].orderQty + '" name="quantity"></td><td>' + subtotal.toFixed(2) + '</td><td class="text-right"><button class="btn" button id ="' + x + '"><btn-default btn3d style="color:red" type="button" onclick="delItems(' + x + ')"> Delete </button>' + '</td></tr>';
        
        console.log(subtotal); //0
    }
    
    var div1 = document.getElementById('subtotal');
    div1.innerHTML +=total.toFixed(2);
    var div2 = document.getElementById('grandtotal');
    div2.innerHTML += (total+8).toFixed(2);
}

function delItems(val) 
{
    console.log(val);
    var x = [];
    x = localStorage.getItem('cartItems');
    x = JSON.parse(x);
    var tbd = JSON.parse(val);
   
    console.log(tbd);

    var s = tbd+"";
    var s = "0" + s;
    var i;
        // for (d in x) {
        //     var i = parseInt(d);
        //     if (x[i].pid === "02") {
        //         alert(x[i].orderQty);
        //     }
        // }
        for (i = 0; i < x.length; i++)
        {
            if(x[i].pid === s)
            {
                console.log(x[i].pid); //01
                console.log(s);        //01
                x.splice(i, 1);
                console.log(x.splice(i, 1));
                console.log(tbd); //1
                break;
            }
        }
}

/*function updateCart()
{
    alert("hahaha");
    //window.localStorage.clear();
    for (var x = 0; x < 8; x++)
    {
        //localStorage.removeEachItem('cartItem');


        var subtotal = y[x].price * y[x].orderQty;
        var photo = '<tr><th scope="row" class="text-left"><img src="' + y[x].photo + '" class="img-fluid w-25 mr-3">';
        var productName = y[x].name + '</th><td></td><td>';
        var productPrice = y[x].price;
        var productQuantity = '</td><td><input class="quantity" type="text" value="' + y[x].orderQty + '" name="quantity">';
        var leftover = '</td><td>' + subtotal.toFixed(2) + '</td><td class="text-right"><button class="btn" button id ="' + x + '"><btn-default btn3d style="color:red" type="button" onclick="delItems(' + x + ')"> Delete </button>' + '</td></tr>';

        $("body").append(photo, productName, productPrice, productQuantity, leftover);
    }
        /*
        var tempqty=$('.qtyedit').map(function()
        {
            return $(this).val();
        })
        var tempname=$('.editname').map(function()
        {
            return $(this).text();
        })
        var name = tempname[i];
        var qty = tempqty[i];
        for(var i in cart)
        {
            if(cart[i].Product == name)
            {
                cart[i].Quantity = qty;
            }
        }
    }
    //var x = localStorage.setItem('cartItems');
    //var y = JSON.parse(x);
    /*
    for (var x = 0; x < y.length; x++) 
    {
        var subtotal = y[x].price * y[x].orderQty;
        document.settElementById("cartItems").innerHTML += '<tr><th scope="row" class="text-left"><img src="' + y[x].photo + '" class="img-fluid w-25 mr-3">' + y[x].name + '</th><td></td><td>' + y[x].price + '</td><td><input class="quantity" type="text" value="' + y[x].orderQty + '" name="quantity"></td><td>' + subtotal.toFixed(2) + '</td><td class="text-right"><button class="btn" button id ="' + x + '"><btn-default btn3d style="color:red" type="button" onclick="delItems(' + x + ')"> Delete </button>' + '</td></tr>';
        console.log(x);
    }

    //var updatedCart = JSON.stringify(x); //???
    //localStorage.setItem('cartItems', updatedCart);
    if(window.localStorage)
    {
        localStorage.cart = JSON.stringify('cartItems');
    }
}*/

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latlongvalue = position.coords.latitude + ","
    + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlongvalue+"&amp;zoom=14&amp;size=400x300&amp;key=AIzaSyBJ7teo8j-E8ZpH_UwkTV5UIMQeiksiBBI";
    document.getElementById("mapholder").innerHTML =
    "<img src='"+img_url+"'>";
 }
 function errorHandler(err) {
    if(err.code == 1) {
       alert("Error: Access is denied!");
    } else if( err.code == 2) {
       alert("Error: Position is unavailable!");
    }
 }
 function getLocation(){
    if(navigator.geolocation){
       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition
       (showLocation, errorHandler, options);
    } else{
       alert("Sorry, browser does not support geolocation!");
    }
 }
