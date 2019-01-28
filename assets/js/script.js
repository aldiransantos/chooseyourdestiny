function allHero() {
    // var min = 4;
    // var max = 5;
    // var result = Math.floor(Math.random() * (+max - +min)) + +min;
    var result = Math.floor(Math.random() * 28);
    // document.getElementById("gerado").innerHTML = ("Número aleatório gerado: " + result);

    if (result == "0") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/ana.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "1") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/ashe.png\" width=\"180\" height=\"310\">";
    }
    
    else if (result == "2") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/bastion.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "3") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/brigitte.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "4") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/d.va.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "5") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/doomfist.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "6") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/genji.png\" width=\"180\" height=\"310\">";
    }

    if (result == "7") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/hanzo.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "8") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/junkrat.png\" width=\"180\" height=\"310\">";
    }
    
    else if (result == "9") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/lucio.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "10") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/mccree.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "11") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/mei.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "12") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/mercy.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "13") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/moira.png\" width=\"180\" height=\"310\">";
    }

    if (result == "14") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/orisa.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "15") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/pharah.png\" width=\"180\" height=\"310\">";
    }
    
    else if (result == "16") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/reaper.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "17") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/reinhardt.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "18") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/roadhog.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "19") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/soldier76.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "20") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/sombra.png\" width=\"180\" height=\"310\">";
    }

    if (result == "21") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/symmetra.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "22") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/torbjorn.png\" width=\"180\" height=\"310\">";
    }
    
    else if (result == "23") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/tracer.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "24") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/widowmaker.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "25") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/winston.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "26") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/wrecking-ball.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "27") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/zarya.png\" width=\"180\" height=\"310\">";
    }

    else if (result == "28") {
        var hero = document.getElementById("heroesId");
        hero.innerHTML = "<img src=\"assets/imgs/zenyatta.png\" width=\"180\" height=\"310\">";
    }
} 

function tank() {
    var result = Math.floor(Math.random() * 6);

    if (result == 0) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/d.va.png\" width=\"180\" height=\"310\">";
    }

    else if (result == 1) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/orisa.png\" width=\"180\" height=\"310\">";
    }

    else if (result == 2) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/reinhardt.png\" width=\"180\" height=\"310\">";
    }

    else if (result == 3) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/roadhog.png\" width=\"180\" height=\"310\">";
    }

    else if (result == 4) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/winston.png\" width=\"180\" height=\"310\">";
    }

    else if (result == 5) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/wrecking-ball.png\" width=\"180\" height=\"310\">";
    }

    else if (result == 6) {
        var hero = document.getElementById("tankId");
        hero.innerHTML = "<img src=\"assets/imgs/zarya.png\" width=\"180\" height=\"310\">";
    }
}