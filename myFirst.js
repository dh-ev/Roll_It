var randomNum1=Math.floor(Math.random()*5+1);
document.querySelector(".img1").setAttribute("src","./myImages/"+randomNum1+".jpg");

var randomNum2=Math.floor(Math.random()*5+1);
document.querySelector(".img2").setAttribute("src","./myImages/"+randomNum2+".jpg");


if (randomNum1>randomNum2){
    document.querySelector("h1").textContent = "Player 1 wins!!";
}
else if (randomNum1<randomNum2){
    document.querySelector("h1").textContent = "Player 2 wins!!";
}
else if (randomNum1==randomNum2){
    document.querySelector("h1").textContent = "Draw";
}