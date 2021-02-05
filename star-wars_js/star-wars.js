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




const gameData = {
    welcome: {
        msg: "Are you ready to begin?",
        img: "../star wars/star-wars_images/welcome.png",
        buttons: [
            {
                text: "Let's go!",
                goto: "intro",
            },
            {
                text: "Wait, I need some help.",
                goto: "instructions"
            }
        ] 
        
    },
    instructions: {
        // !Need to figure out how to add breaks between the paragraphs in msg
        msg: "So, you need help...",
        img: "star-wars_images/instructions.jpg",
        buttons: [
            {
                text: "Nevermind",
                goto: "intro"
            },
            {
                text: "Coder's Note",
                goto: "note"
            },
            {
                text: "Yes, I need some help",
                goto: "game"
            }
        ]
    },
    note: {
        msg: "But first, a note from the coder: Please understand that this game is in no way a true and accurate representation of Star Wars for the extreme fans of Star Wars. This game came in response to a challenge, and the coder's intention was to do the film some form of justice despite the coder being someone who has never seen the film or anything in the franchise before. Constructive criticism is always wanted.",
        img: "../star wars/star-wars_images/coders-note.png",
        buttons: [
            {
                text: "Let's start the game",
                goto: "intro"
            },
            {
                text: "I need the REAL instructions",
                goto: "game"
            }
        ]
    },
    game: {
        msg: "Anyway, you will be given a series of options to choose at each scene. Please choose wisely. There are a few minigames (in the form of riddles) throughout this text-based game. This game follows the journey of Star Wars character so I wish you the best of luck, and I hope you stay alive during the rebellion.",
        img: "../star wars/star-wars_images/game.jpg",
        buttons: [
            {
                text: "I'm ready",
                goto: "intro"
            },
            {
                text: "Coder's note",
                goto: "note"
            }
        ]
    },
    intro: {
        msg: "You know, this is not how I thought my day was going to go. Well, I guess the best place is to start from the beginning. I woke up to some noise.",
        img: "../star wars/star-wars_images/intro.jpg",
        buttons: [
            {
                text: "Follow the noise",
                goto: "follow",
                // 3
            },
            {
                text: "Hide in the room",
                goto: "hide",
                // score: -1
            }
            // {
            //     text: "Score tester",
            //     goto: "last",
            //     // score: 0
            // }
        ] 
    },
    follow: {
        msg: "Creeping along the carpet in the hallway, you see a light flashing in the living room.",
        img: "../star wars/star-wars_images/follow.jpg", 
        buttons: [
            {
                text: "Grab the closest object to you",
                goto: "remote"
            }
            // {
            //     text: "Find an escape",
            //     goto: "kitchen"
            // }
            //! path is not working at votex
        //     {
        //         text: "Luke route",
        //         goto: "luke1"
        //     }
        ]
        // Need to fix the transitions and add character customization to choose which Star Wars character to be
    },
    // scene remote is not working
    remote: {
        msg: "You have secured a remote. Point and click is what you do. Steathily crossing further into the living room armed with the deadly remote, you point and click the remote at the television befoer you are pushed through a votex.",
        img: "../star wars/star-wars_images/remote_unsplash.jpg",
        buttons: [
            {
                text: "Goodbye world",
                goto: "votex"
            }
        ]
    },
    kitchen: {
        msg: "Entering the kitchen, you see a shadow and attempt to sneak pass to the door. Attempt failed! You are thrown through a vortex.",
        img: "../star wars/star-wars_images/kitchen_unsplash.jpg",
        buttons: [
            {
                text: "Goodbye world",
                goto: "vortex"
            }
        ]
    },
    votex: {
        msg: "While you are spinning in the space of nothingness, you hear a voice that says, 'Hey, we should get to know each other. What are you?'",
        img: "../star wars/star-wars_images/votex.jpg",
        buttons: [
            {
                text: "girl",
                goto: "score1"
            },
            {
                text: "boy",
                goto: "score1"
            }
        ]
    },
    score1: {
        msg: "Interesting, hmmm. What is your life's purpose?",
        img: "../star wars/star-wars_images/score1_unsplash.jpg",
        buttons: [
            {
                text: "To fight for justice",
                goto: "transition"
            },
            {
                text: "To be rich",
                goto: "transition"
            },
            {
                text: "To fight for victory",
                goto: "transition"
            },
            {
                text: "To live",
                goto: "transition"
            }
        ]
    },
    transition: {
        msg: "The voice adds, 'You're kind of weird. You know you can stop when you say 'stop' right.'",
        img: "../star wars/star-wars_images/transition.jpg",
        buttons: [
            {
                text: "'Stop'",
                goto: "landing"
            },
            {
                text: "silence",
                goto: "spinning"
            }
        ]
    },
    landing: {
        msg: "Whoomph! Crashing onto the ground, you can't help but to stare at the sky as the votex closes. Minutes pass before you begin to gain your bearings and sound reenters. You begin to hear a groaning sound and notice that you are on top of someone",
        img: "../star wars/star-wars_images/landing.jpg",
        buttons: [
            {
                text: "Look around",
                goto: "look",
            },
            {
                text: "Loot the body",
                goto: "loot"
            },
            {
                text: "Help the person",
                goto: "help"
            }
        ]
    },
    spinning: {
        msg: "The voice angrily yells, 'Since you want to be silent, how about you be silent forever.",
        img: "../star wars/star-wars_images/spinning.jpg",
        buttons: [
            {
                text: "Wait, I'll say something.",
                goto: "robot1"
            }
        ]
    },
    robot1: {
        msg: "You find yourself in a empty black space.",
        img: "../star wars/star-wars_images/robot1_unsplash.jpg",
        buttons: [
            {
                text: "Where am I?",
                goto: "robot2"
            }
        ]
    },
    robot2: {
        msg: "Gibberish is heard being spoken around you with a tiny silver of light being shown in your dark space. Soon, you move forward in the light.",
        img: "../star wars/star-wars_images/robot2.jpg",
        buttons: [
            {
                text: "You are in the light",
                goto: "robot3"
            },
            {
                text: "You attempt to speak",
                goto: "speak"
            }
        ]
    },
    robot3: {
        msg: "You find yourself in a line with other driods near a spacecraft. You cannot move of your own free will. You start to move closer to a golden droid and young man before you go bezerk.",
        img: "../star wars/star-wars_images/robot3.jpg",
        buttons: [
            {
                text: "Well, you're...",
                goto: "death"
            }
        ]
    },
    speak: {
        msg: "You attempt to speak but no sound comes out.",
        img: "../star wars/star-wars_images/speak_unsplash.jpg",
        buttons: [
            {
                text: "You have been...",
                goto: "silence"
            }
        ]
    },
    silence: {
        msg: "You have been silenced to live your life as a droid. You cannot return home.",
        img: "../star wars/star-wars_images/silence.jpg",
        buttons: [
            {
                text: "I accept my fate",
                goto: "gameover"
            },
            {
                text: "I want a redo",
                goto: "intro"
            }
        ]
    },
    death: {
        msg: "You are dead. You have not helped anyone. You have not returned home.",
        img: "../star wars/star-wars_images/death.png",
        buttons: [
            {
                text: "I accept my fate",
                goto: "gameover"
            },
            {
                text: "I want a redo",
                goto: "intro"
            }
        ]
    },
    gameover: {
        msg: "Gameover",
        img: "../star wars/star-wars_images/gameover.jpg",
        buttons: [
            {
                text: "Play again",
                goto: "intro"
            }
        ]
    },
    look: {
        msg: "You begin to wander as you look around in the desert.",
        img: "../star wars/star-wars_images/look.jpg",
        buttons: [
            {
                text: "Go north",
                goto: "sand",
            },
            {
                text: "Go south",
                goto: "desert"
            }
        ]
    },
    sand: {
        msg: "As you walk north, you begin to hear noise and the shifting of the sand. Soon, you find yourselves ambushed by Tusken Raiders.",
        img: "../star wars/star-wars_images/sand.jpg",
        buttons: [
            {
                text: "You ...",
                goto: "death"
            }
        ]
    },
    desert: {
        msg: "You travel south past the building trying to find your way back home. Soon, you become dehydrated and begin to look for water.",
        img: "../star wars/star-wars_images/desert.jpg",
        buttons: [
            {
                text: "You...",
                goto: "death"
            }
        ]
    },
    loot: {
        msg: "The person appears to be dead, so you begin to search and loot the person of their belongings. 'It's not like the person will be able to take their belongings with them,' you think. Well, that's what you think until you hear, 'Thief!' before you are shot.",
        img: "../star wars/star-wars_images/loot.jpg",
        buttons: [
            {
                text: "You're...",
                goto: "death"
            }
        ]
    },
    help: {
        msg: "'Are you alright?,' you ask the person as they groan on the ground. Attempting to help the person up, you notice your skin begin to become transparent as your vision becomes dark.",
        img: "../star wars/star-wars_images/help_unsplash.jpg",
        buttons: [
            {
                text: "Awake",
                goto: "luke"
            },
            {
                text: "Sleep",
                goto: "death"
            }
        ]
    },
    hide: {
        msg: "You have chosen to hide in your room. As you slowly close your door, you hear the sound of steps creep closer and closer to you.",
        img: "../star wars/star-wars_images/hide_unsplash.jpg",
        buttons: [
            {
                text: "You hide in the closet",
                goto: "closet"
            }
        ]
    },
    closet: {
        msg: "Are you safe? Huddling amongst your clothes, you keep inching backwards as your bedroom opens wider. Scooot, scooot. Hearing steps creep closer to the closet, you frantically scoot backwards. In the back of your mind, you start to ponder how big your closet is when you fall.",
        img: "../star wars/star-wars_images/closet.jpg",
        buttons: [
            {
                text: "You have fallen in a votex.",
                goto: "votex"
            }
        ]
    },
    luke: {
        msg: "As your surroundings become clearer, you begin to hear someone calling a name. 'Is that your name?,' you wonder.",
        img: "../star wars/star-wars_images/luke.jpg",
        buttons: [
            {
                text: "Yes",
                goto: "luke0"
            },
            {
                text: "No",
                goto: "insane"
            }
        ]
    },
    luke0: {
        msg: "A woman nudges you awake saying, 'Luke, wake up. You're supposed to be helping your uncle",
        img: "../star wars/star-wars_images/luke0.png",
        buttons: [
            {
                text: "get up and help your uncle",
                goto: "luke1"
            }
        ]
    },
    insane: {
        msg: "Yelling, 'That is not my name,' before being hit over the head",
        img: "../star wars/star-wars_images/insane.png",
        buttons: [
            {
                text: "You wake to find yourself in ropes",
                goto: "last"
            }
        ]
    },
    luke1: {
        msg: "Your aunt calls, 'Luke. Luke. Luke, tell your uncle. If he gets a translator, be sure it speaks Bocce.' You rush off to catch up with Uncle Owen as he decides which droid to buy. He tells you to take the two driod to the garage. He 'wants them cleaned up before dinner.",
        img: "../star wars/star-wars_images/luke1.jpg",
        buttons: [
            {
                text: "I have other plans.",
                goto: "luke2"
            }, 
            {
                text: "I will obey my uncle's orders.",
                goto: "obey"
            }, 
            {
                text: "I will pretend to listen and obey and go do my other plans after leaving my uncle's sight.",
                goto: "disobey"
            }
        ]
    },
    disobey: {
        msg: "You take the droids to the garage before disappearing and leaving them there. Soon, you are ambushed.",
        img: "../star wars/star-wars_images/disobey.png",
        buttons: [
            {
                text: "You...",
                goto: "death"
            }
        ]
    },
    obey: {
        msg: "As you begin to take the droid, you notice the R2 unit begin to malfunction",
        img: "../star wars/star-wars_images/luke2.jpg",
        buttons: [
            {
                text: "Examine the unit",
                goto: "examine"
            }, 
            {
                text: "Tell your uncle",
                goto: "luke3"
            },
            {
                text: "Do nothing, and keep walking.",
                goto: "nothing"
            }
        ]
    },
    luke2: {
        msg: " After stating, 'I was going into Tosche Station to pick up some power converters,' you head to the garage to clean the droids. However, the R2 unit behind you begins to malfunction.",
        img: "../star wars/star-wars_images/luke2.jpg",
        buttons: [
            {
                text: "Examine the unit",
                goto: "examine"
            }, 
            {
                text: "Tell your uncle",
                goto: "luke3"
            },
            {
                text: "Do nothing, and keep walking.",
                goto: "nothing"
            }
        ]
    },
    examine: {
        msg: "Crounching to get a closer look, you gently poke a finger in the droid and get electrocuted.",
        img: "../star wars/star-wars_images/examine_unsplash.jpg",
        buttons: [
            {
                text: "You...",
                goto: "death"
            }
        ]
    },
    nothing: {
        msg: "You keep moving as if nothing is happening. When your uncle returns, he notices that the R2 is malfunctioned.",
        img: "../star wars/star-wars_images/nothing_unsplash.jpg",
        buttons: [
            {
                text: "This...",
                goto: "last"
            }
        ]
    },
    luke3: {
        msg: "'Uncle Owen. This R2 unit has a bad motivator' Turning to the other driod, it convinces you to convince Uncle Owen to bargain for the cleaner-looking R2. You begin to walk back home to the garage. Hopefully, for the last time.",
        img: "../star wars/star-wars_images/luke3.jpg",
        buttons: [
            {
                text: "Clean the droids",
                goto: "luke4"
            },
            {
                text: "You don't go home",
                goto: "look"
            }
        ]
    },
    luke4: {
        msg: "Voicing your frustrations to the droids, you begin to clean R2-D2.",
        img: "../star wars/star-wars_images/luke4.jpg",
        buttons: [
            {
                text: "I successfully clean R2-D2",
                goto: "quiz1"
            },
            {
                text: "I failed.",
                goto: "fail1"
            }
        ]
    },
    quiz1: {
        msg: "Let's see how well you did and test your Star Wars knowledge: Before every Star Wars movie begins, George Lucas generously provides a short prologue to update viewers of events in the 'Star Wars' galaxy. Who is the only main character mentioned in the rolling prologue that precedes the events of the original 'Star Wars' film?",
        img: "../star wars/star-wars_images/riddle.jpg",
        buttons: [
            {
                text: "Darth Vader",
                goto: "fail1"
            },
            {
                text: "Princess Leia",
                goto: "luke5"
            }
        ]
    },
    fail1: {
        msg: "You have failed. R2D2 remains unclean and begin to malfunction.",
        img: "../star wars/star-wars_images/fail1.jpg",
        buttons: [
            {
                text: "Run",
                goto: "last"
            },
            {
                text: "Keep cleaning",
                goto: "death"
            },
            {
                text: "Hide",
                goto: "last"
            }
        ]
    },
    luke5: {
        msg: "Congrats, you have successfully cleaned R2D2 before he begins to play a message.",
        img: "../star wars/star-wars_images/luke5.jpg",
        buttons: [
            {
                text: "Question R2D2",
                goto: "last"
            },
            {
                text: "Find your uncle for help",
                goto: "last"
            }
        ]
    },
    last: {
        msg: "Thank you for playing the demo. For more action and adventure, please purchase the full game.",
        img: "../star wars/star-wars_images/last.jpg",
        buttons: [
            {
                text: "Play again",
                goto: "intro"
            }
        ]

    }
}



for ( const scene in gameData) { //? system was not recognizing scene in the objects
    // console.log(gameData[scene]);

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
} 



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


addScene("welcome");
