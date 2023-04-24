
function mudarTexto(i){
    switch (i){
        case 1: 
        document.getElementById('tirar').innerHTML='';
        document.getElementById('tirar1').innerHTML='';
        document.documentElement.scrollTop = 1;
        document.getElementById('Mudar1').innerHTML='Meu lugar favorito é você, um lugar repleto de mistérios e segredos.';
        document.getElementById('Mudar1').style.opacity = 1;
        break;
        case 2: 
        document.getElementById('Mudar2').innerHTML='Mas, para aqueles que se aventuram além de conversas rasas e banais, há um mundo a ser descoberto.';
        document.getElementById('Mudar2').style.opacity = 1;
        break;
        case 3:
        document.getElementById('Mudar3').innerHTML=' Embora seja uma pessoa complexa, você tem uma beleza indescritível. Sua energia radiante brilha no céu, criando um cenário espetacular digno de um pôr do Sol. Ilumina como as estrelas da noite refletem nas dunas com uma luz mágica. E, acima de tudo, há a paz e a tranquilidade da sua calma, onde se pode encontrar um refúgio para a alma.';
        document.getElementById('Mudar3').style.opacity = 1;
        break;
        case 4: 
        document.getElementById('Mudar4').innerHTML='Para aqueles que podem te considerar próxima, é uma pessoa especial e única. É como aventura, descoberta e liberdade. E, embora possa ser difícil às vezes, a força e a determinação dela é inabalável.';
        document.getElementById('Mudar4').style.opacity = 1;
        break;
        case 5:
        document.getElementById('Mudar5').innerHTML='Você captura minha imaginação, e permanecerá viva na memória mesmo que um dia não nos falemos mais. Para mim, é a melhor coisa que aconteceu - é meu lar, é meu tesouro.';
        document.getElementById('Mudar5').style.opacity = 1;
        break;
        case 6:
            document.getElementById("highlight").style.color = "yellow";
            break;
    }
}
function opacidade(){
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById('botao').style.padding = '80px';
    document.getElementById('transformar').style.visibility = 'hidden';
    document.getElementById('tirar').style.opacity = 0;
    document.getElementById('tirar1').style.opacity = 0;
    document.getElementById('Mudar1').style.opacity = 0;
    document.getElementById('Mudar2').style.opacity = 0;
    document.getElementById('Mudar3').style.opacity = 0;
    document.getElementById('Mudar4').style.opacity = 0;
    document.getElementById('Mudar5').style.opacity = 0;
    document.getElementById("dwnpg").style.scale = '0%';
    setTimeout(function() {
        mudarTexto(1);
    }, 1000);
    setTimeout(function() {
        mudarTexto(2);
    }, 3000);
    setTimeout(function() {
        mudarTexto(3);
    }, 5000);
    setTimeout(function() {
        mudarTexto(4);
    }, 9000);
    setTimeout(function() {
        mudarTexto(5);
    }, 12000);
}
function delay(){};
function carregarpagdelay(){
    setTimeout(carregarpag, 2000);
}
function rolling(){
    document.getElementById("dwnpg").style.opacity = 1;
    document.getElementById("dwnpg").style.visibility = "visible";
}
function norolling(){
    document.getElementById("dwnpg").style.opacity = 0;
    document.getElementById("dwnpg").style.visibility = "hidden";
}
function carregarpag(){
    document.getElementById("imginicio").style.opacity = 0;
    document.getElementById("imginicio").style.visibility = "hidden";
    document.getElementById("txtlogo").style.opacity = 1;
    document.getElementById("transformar").style.opacity = 1;
    document.getElementById("Maintitle").style.opacity = 1;
    document.getElementById("body").style.border = "3px solid green";
    document.getElementById("body").style.overflow = "visible";
    document.getElementById("dwnpg").style.opacity = 1;
};


window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled>20){
    norolling();
  }
  else{
    rolling();
  }
}


//* API DE HORA CERTA
function horacerta(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2a7288aa8msh7725963753b0639p1d7550jsn6cca2c4a636a',
            'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=S%C3%A3o%20Paulo', options)
	.then(function(response){
        response.json().then(function(data){console.log(data)})})
}