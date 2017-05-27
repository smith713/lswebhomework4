document.body.style.backgroundColor = "red";

document.getElementById("myH1").style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "Latoyya";

document.getElementById("favorites").innerHTML = "Technology, Family, Basketball";

document.getElementById("hometown").innerHTML = "Houston, TX";

 var items = document.getElementsByTagName('li');
   for (var i = 0; i < items.length; i++) {
      items[i].className = 'listitem';
      items[i].style.color = "red";
       
//    added because the text blended in with the background
      items[i].style.backgroundColor = "white";
   }


var pic = document.createElement('img');
    pic.src = 'http://latoyyasmith.com/wp-content/uploads/2016/10/latoyya-242x300-242x300.png';
    document.body.appendChild(pic);