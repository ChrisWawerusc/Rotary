var s1 = {
    image: "/images/plain white cotton t-shirt short.jpg",
    image2:"/images/red shtsleeve.jpg",
    image3:"/images/black shtsleeve.jpeg"
};
var s2 = {
    image: "/images/long sleeve white T-shirt.jpg",
    image2:"/images/red lngsleeve.webp",
    image3:"/images/black lngsleeve.jpeg"
};
var s3 = {
    image: "/images/breathee.jpeg",
    image2:"/images/red breathable.jpeg",
    image3:"/images/black breathable.jpg"
}

var selectId = decodeURIComponent(window.location.search);
var selectedItem = selectId.substring(1);

switch(selectedItem){
    case "s001":
     document.getElementById("shtclk").style.backgroundImage=`url("${s1.image}")`;
     document.getElementById("shtclk").style.backgroundSize="cover";
     document.getElementById("shtclr").style.backgroundImage=`url("${s1.image2}")`;
     document.getElementById("shtclr").style.backgroundSize="cover";
     document.getElementById("desc").innerText="Short Sleeved T-shirt";
     document.getElementById("price").innerText=500;
     document.getElementById("red").onclick=function(){
        document.getElementById("shtclr").style.backgroundImage=`url("${s1.image2}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
    }
     document.getElementById("white").onclick=function(){
        document.getElementById("shtclr").style.backgroundImage=`url("${s1.image}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
    }
     document.getElementById("black").onclick=function(){
        document.getElementById("shtclr").style.backgroundImage=`url("${s1.image3}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
    }
     break;

    case "s002":
        document.getElementById("shtclk").style.backgroundImage=`url("${s2.image}")`;
        document.getElementById("shtclk").style.backgroundSize="cover";
        document.getElementById("shtclr").style.backgroundImage=`url("${s2.image2}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
        document.getElementById("desc").innerText="Long Sleeved T-shirt";
        document.getElementById("price").innerText=1500;
        document.getElementById("red").onclick=function(){
            document.getElementById("shtclr").style.backgroundImage=`url("${s2.image2}")`;
            document.getElementById("shtclr").style.backgroundSize="cover";
        }
         document.getElementById("white").onclick=function(){
            document.getElementById("shtclr").style.backgroundImage=`url("${s2.image}")`;
            document.getElementById("shtclr").style.backgroundSize="cover";
        }
         document.getElementById("black").onclick=function(){
            document.getElementById("shtclr").style.backgroundImage=`url("${s2.image3}")`;
            document.getElementById("shtclr").style.backgroundSize="cover";
        }
        break; 

    case "s003":
       document.getElementById("shtclk").style.backgroundImage=`url("${s3.image}")`;
       document.getElementById("shtclk").style.backgroundSize="cover";
       document.getElementById("shtclr").style.backgroundImage=`url("${s3.image2}")`;
       document.getElementById("shtclr").style.backgroundSize="cover";
       document.getElementById("desc").innerText="Breathable Short Sleeved T-shirt";
       document.getElementById("price").innerText=1000;
       document.getElementById("red").onclick=function(){
        document.getElementById("shtclr").style.backgroundImage=`url("${s3.image2}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
    }
     document.getElementById("white").onclick=function(){
        document.getElementById("shtclr").style.backgroundImage=`url("${s3.image}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
    }
     document.getElementById("black").onclick=function(){
        document.getElementById("shtclr").style.backgroundImage=`url("${s3.image3}")`;
        document.getElementById("shtclr").style.backgroundSize="cover";
    }
       break;
}