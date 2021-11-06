let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let referencia = [7];
let leftArrow = document.getElementById("leftArrow");
let rigthArrow = document.getElementById("rigthArrow");

const openFullImg = (reference) => {
    fullImgBox.classList.add("moveX");
    fullImg.src = reference;

    for(let i=0; i<8; i++){
        referencia[i] = `http://127.0.0.1:5500/images/img-${i+1}.jpg`;
    }

    if(reference == referencia[0]){
        esconderFlechaIzquierda();
    }

    else if(reference == referencia[7]){
        esconderFlechaDerecha();
    }

    else{
        mostrarFlechas();
    }

    leftArrow.addEventListener("click", function(){
        for(let i=0; i<8; i++){
            if(reference == referencia[0]){
                esconderFlechaIzquierda();
            }
            else if(reference == referencia[i]){
                fullImg.src = referencia[i-1];
                reference = referencia[i-1];
                mostrarFlechas();
            }
        }

    });

    rigthArrow.addEventListener("click", function(){
        for(let i=7; i>=0; i--){
            if(reference == referencia[7]){
                esconderFlechaDerecha();
            }
            else if(reference == referencia[i]){
                fullImg.src = referencia[i+1];
                reference = referencia[i+1];
                mostrarFlechas();
            }
        }
    });
}

const esconderFlechaIzquierda = () =>{
    leftArrow.style.display = "none";
    rigthArrow.style.display = "block";
}

const esconderFlechaDerecha = () =>{
    leftArrow.style.display = "block";
    rigthArrow.style.display = "none";
}

const mostrarFlechas = () =>{
    leftArrow.style.display = "block";
    rigthArrow.style.display = "block";
}

const closeFullImg = () => {
    fullImgBox.classList.remove("moveX");
}
