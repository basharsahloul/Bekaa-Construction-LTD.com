window.addEventListener("scroll",function() {
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle= document.querySelector(".toggle");
    var menu= document.querySelector(".menu");

    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
}


function gotowhatsapp() {
            
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/919981921564?text=" 
    + "Name: " + name + "%0a"
    + "Address: " + address + "%0a"
    + "Phone: " + phone  + "%0a"
    + "Message: " + message; 

    window.open(url, '_blank').focus();
}