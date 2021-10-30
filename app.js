window.onload = function(){

    var Sbutton = document.getElementById("btn");
    Sbutton.addEventListener("click", function() {
        fetch("http://localhost:8888/info2180-lab4/superheroes.php")
        .then(response => response.text())
        .then(data => {
           alert(data) 
        });
    });
};


