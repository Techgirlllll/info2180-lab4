window.onload = function() { 

    var Sbutton = document.getElementById("btn");
    Sbutton.addEventListener("click", function(e) {
        e.preventDefault();


    var result = document.getElementById("result");
    var valInput = document.getElementById("superhero").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
    
    fetch(`http://localhost:8888/info2180-lab4/superheroes.php?query= ${valInput}`, {method : 'GET'})
    .then(response => response.text())
    .then(data => {
        result.innerHTML = "";
        result.innerHTML = data; 
    });
  });
};



