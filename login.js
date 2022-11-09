function login(){
    var user, password;

    user=document.getElementById("usuario").value;
    pass=document.getElementById("contraseña").value;


    if(user == "alumno" && pass == "1234"){

        window.location= "Libreta-de-Notas.html";

    }

    if(user == "profesor" && pass == "5678")
        
        window.location = "http://localhost:3000"
}



