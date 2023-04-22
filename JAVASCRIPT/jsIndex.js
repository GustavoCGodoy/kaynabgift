
function mudarTexto(){
    document.getElementById('tirar').innerHTML='';
    document.getElementById('tirar1').innerHTML='';
    document.getElementById('Mudar1').innerHTML='Meu lugar favorito é você, um lugar repleto de mistérios e segredos.';
    document.getElementById('Mudar1').style.opacity = 1;
    document.getElementById('Mudar2').innerHTML='Mas, para aqueles que se aventuram além de conversas rasas e banais, há um mundo a ser descoberto.';
    document.getElementById('Mudar2').style.opacity = 1;
    document.getElementById('Mudar3').innerHTML=' Embora seja uma pessoa complexa, Kayná tem uma beleza indescritível. Sua energia radiante brilha no céu, criando um cenário espetacular digno de um pôr do Sol. Ilumina como as estrelas da noite refletem nas dunas com uma luz mágica. E, acima de tudo, há a paz e a tranquilidade da sua calma, onde se pode encontrar um refúgio para a alma.';
    document.getElementById('Mudar3').style.opacity = 1;
    document.getElementById('Mudar4').innerHTML='Para aqueles que podem chamar Kayná de próxima, é uma pessoa especial e única. É como aventura, descoberta e liberdade. E, embora possa ser difícil às vezes, a força e a determinação dela é inabalável.';
    document.getElementById('Mudar4').style.opacity = 1;
    document.getElementById('Mudar5').innerHTML='Você captura minha imaginação, e permanecerá viva na memória mesmo que um dia não nos falemos mais. Para quem a conhece, é mais do que uma simples amizade - é nosso lar, é nosso tesouro.';
    document.getElementById('Mudar5').style.opacity = 1;
}
function opacidade(){
    setTimeout(delay,1500);
    document.getElementById('transformar').style.visibility = 'hidden';
    document.getElementById('tirar').style.opacity = 0;
    document.getElementById('tirar1').style.opacity = 0;
    document.getElementById('Mudar1').style.opacity = 0;
    document.getElementById('Mudar2').style.opacity = 0;
    document.getElementById('Mudar3').style.opacity = 0;
    document.getElementById('Mudar4').style.opacity = 0;
    document.getElementById('Mudar5').style.opacity = 0;
    setTimeout(mudarTexto, 1000);
}
function delay(){};


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
        response.json().then(function(data){console.log(data)})})};