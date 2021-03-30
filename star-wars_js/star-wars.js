import gameData from "./scenes.js";
// debugger;
// $(function() {
//     $("div.game").delay(200).fadeIn();
// });




window.onload=function() {
    // alert("Test check!")
    alert("If you would like to skip the Star Wars crawl, click on the 'Skip to game'");

    //target the audio and manually play the sound

    // const soundtrack = document.querySelector("#soundtrack");
    //     soundtrack.play();
//! to get soundtrack to replay/autoplay if browser is refreshed (issues appears to lie in a browser behavior)

    // function clickEvent() {
    //     let crawl = document.getElementById("crawl");
    //     crawl.addEventListener("click", clickFunction);
    // }

    // function clickFunction() {
    //     console.log("click");
    // }

    // document.getElementById("star-wars").click();

    let skip = document.getElementById("link");
    skip.addEventListener("click", gameStart);

    function gameStart(event) {
        // console.log("click");
        document.getElementById("game").className="show";
        document.getElementById("star-wars").className="hide";

        const starWars = document.getElementById("star-wars");
    if (starWars.className === "hide") {
        const soundtrack = document.querySelector("#soundtrack");
        soundtrack.pause();
    }
    }
//! to skip intro (crawl and music)   

    setTimeout(func1, 27000);  
    // document.getElementById("soundtrack").play();

};

function func1() {
    document.getElementById("game").className="show";
    document.getElementById("star-wars").className="hide";

//! to show the game after the crawl
    const starWars = document.getElementById("star-wars");
    if (starWars.className === "hide") {
        const soundtrack = document.querySelector("#soundtrack");
        soundtrack.pause();
    }
    
//! to get soundtrack to stop with crawl
}


// function showAlert() {
//     alert("Test check!");
// }



// const crawl = document.getElementById("crawl");
// let skip = document.createElement("button");
// skip.addEventListener("click", fun2);
// skip.innerHTML += "Skip to game";

// function fun2(event) {
//     console.log("click");
// }



// for ( const scene in gameData) { //? system was not recognizing scene in the objects
//     // console.log(gameData[scene]);

//     addScene(scene);
// } 



function handleClick(event) {
    // console.log("click");
    const game = document.getElementById("game");
    game.innerHTML = "";
    let goto = event.target.dataset.goto;
    addScene(goto);
}

// $(document).ready(function() {
//     $(#)
// })



function gameEnding() {
    if (score < 0) {
        gameData[last].msg = "You are on your path to becoming a Jedi.";
    } else if (score > 0) {
        gameData[last].msg = "You are on your path to becoming a Seith.";
    } else {
        gameData[last].msg = "You are on your way.";
    }
}

function addScene(scene) {
        let buttons = gameData[scene].buttons;
        console.log(buttons);

        const game = document.getElementById("game");
        let section = document.createElement("section");
        section.className = "scene";
    
        let img = document.createElement("img");
        img.src = gameData[scene].img;
        section.appendChild(img);
    
        section.innerHTML += `<h2>${gameData[scene].msg}</h2>`;
        // section.innerHTML += `<h2>${gameData[scene].msg2}</h2>`;
        // section.innerHTML += `<h2>${gameData[scene].msg3}</h2>`;
    
        // let score = document.getElementById("score");
        // section.innerHTML += `<p>${gameData[scene].score}</p>`;
        // ! to add the score to the array of objects
    
        
        
        buttons.forEach(button => { //? use instead of for of loop: issues with scenes moving from one to the next
            let btn = document.createElement("button");
            btn.addEventListener("click", handleClick);
            btn.innerHTML = button.text;
            btn.dataset.goto = button.goto;
            section.appendChild(btn);
        });
        
        
        
    
        game.appendChild(section);
    }

addScene("welcome");