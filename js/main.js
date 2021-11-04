let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let leftArrow = document.getElementById("leftArrow");
let rigthArrow = document.getElementById("rigthArrow");

const openFullImg = (reference) => {
    fullImgBox.classList.add("moveX");
    fullImg.src = reference;

    var referencia = new Array(7);
    for(i=0; i<8; i++){
        referencia[i] = `http://127.0.0.1:5500/images/img-${i+1}.jpg`;
    }

    if(reference == `http://127.0.0.1:5500/images/img-1.jpg`){
        leftArrow.style.display = "none";
        rigthArrow.style.display = "block";
    }

    else if(reference == `http://127.0.0.1:5500/images/img-8.jpg`){
        leftArrow.style.display = "block";
        rigthArrow.style.display = "none";
    }

    else{
        leftArrow.style.display = "block";
        rigthArrow.style.display = "block";
    }

    var i =0;
    leftArrow.addEventListener("click", function(){
        i--;

        fullImg.src = referencia [i];

        if(fullImg.src == referencia[0]){
            leftArrow.style.display = "none";
            rigthArrow.style.display = "block";
        }
        rigthArrow.style.display = "block";
    });

    rigthArrow.addEventListener("click", function(){
        i++;

        fullImg.src = referencia[i]; 

        if(fullImg.src == referencia[7]){
            leftArrow.style.display = "block";
            rigthArrow.style.display = "none";
        }
        leftArrow.style.display = "block";
    });
}

const closeFullImg = () => {
    fullImgBox.classList.remove("moveX");
}




