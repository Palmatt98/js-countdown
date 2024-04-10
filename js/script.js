// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
// Iniziate stampando il countdown nella console e dopo stampatelo in pagina.
let number = 10;

document.getElementById("countdown").innerText = number;

let countDown = setInterval(function(){
	number--
	document.getElementById("countdown").innerText = number;
	if (number === 0){
		clearInterval(countDown);
		document.getElementById("auguri").innerText = "Buon annoooooooo"
	}
}, 1000)