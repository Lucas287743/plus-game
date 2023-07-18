function resolver(e){
  let ej=document.getElementById('ej');
  let resultado=parseInt(e.target.innerText);
  let aux = ej.innerText.split('+');
  let suma1=parseInt(aux[0]);
  let suma2=parseInt( aux[1].split('=')[0]);
  let suma=suma1+suma2;

  let msjDiv=document.getElementsByClassName('mensaje')[0];
  if(suma==resultado){
    msjDiv.innerHTML='BIEN AHI PIBE!!';
    msjDiv.style.display = "block";
    msjDiv.style.color = "green";
  }else{
    msjDiv.innerHTML='LA CAGASTE!!';
    msjDiv.style.display = "block";
    msjDiv.style.color = "red";
  }

  setTimeout(aleatorizar(),3000)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function aleatorizar(){

  



  let suma1=getRandomInt(100);
  let suma2=getRandomInt(100);
  let res=suma1+suma2;
}

