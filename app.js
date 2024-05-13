var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cSongolt= document.querySelector('.cSongolt');
var pSongolt = document.querySelector('.pSongolt');
var winner = document.querySelector('.winner');
var computer, random;
var cOnoo=0,pOnoo=0;

function play(player){
	if(player=="chuluu"){
		pSongolt.innerText="player : chuluu";
	}else if(player=="daavuu"){
		pSongolt.innerText="player : daavuu";
	}else if(player=="haich"){
		pSongolt.innerText="player : haich";
	}
		random = Math.floor(Math.random()*3);
		console.log(random);
	if(random==0){
		computer="chuluu"
		cSongolt.innerText="computer: chuluu";
	}else if(random==1){
		computer="daavuu"
		cSongolt.innerText="computer : daavuu";
	}else if(random==2){
		computer="haich"
		cSongolt.innerText="computer : haich";
	}
		if(player=="chuluu" && computer=="haich"){
		winner.innerText="winner: you win";
		pOnoo++;
	}else if(player=="daavuu" && computer=="chuluu"){
		winner.innerText="winner: you win";
		pOnoo++;
	}else if(player=="haich" && computer=="daavuu"){
		winner.innerText="winner: you win";
		pOnoo++;
	}else if(player==computer){
		winner.innerText="winner:Tentslee";
	}else{
		winner.innerText="winner:computer win";
		cOnoo++;
	}
	cPoint.innerText = "computer: " + cOnoo;
	pPoint.innerText = "player: " + pOnoo;
}
function ehleh(){
	cOnoo=0;
	pOnoo=0;
	cPoint.innerText = "computer: " +0;
	pPoint.innerText = "player: " + 0;
	cSongolt.innerText="computer:"
	pSongolt.innerText="player:"
	winner.innerText="winner:";
}
