const $heroEl = $('#work') 
const  $navMenu = $('#navMenu');
const $firstblock = $('#firstblock');
const $iconHref = $('#icon-href');

window.addEventListener('scroll', function() {
    $(".navbar-burger").removeClass("is-active");
    $(".navbar-menu").removeClass("is-active");
  });

let interval;
const listOfWork = [
    {
        link:"https://workout-buddies.herokuapp.com/",
        gitrepo:"https://github.com/Tuzosdaniel12/Workout-Buddies",
        image:"Assets/images/Untitled.png",
        description:"Js, Css, Bootstrap, Sequelize, Node.js, express, handlebars, Nodemailer, Mailgun, Passport, JWT, Axios",
        alt:"Work Out Buddies"
    },
    {
        link:"https://eat-la-burger-please.herokuapp.com/",
        image:"Assets/images/burger-example.png",
        gitrepo:"https://github.com/Tuzosdaniel12/Eat-Da-Burger",
        description:"Js, Css, Bootstrap, MySql, Node.js, express, handlebars",
        alt:"Eat The Burger"
    },
    {
        link:"https://github.com/Tuzosdaniel12/Employee-Tracker",
        image:"Assets/images/example.png",
        gitrepo:"https://github.com/Tuzosdaniel12/Employee-Tracker",
        description:"MySql, Node.js, Inquire",
        alt:"Employee Tracker"
    },
    {
        link:"https://mfrisch87.github.io/MovieTrailerMatchUp/",
        image:"Assets/images/movie.png",
        gitrepo:"https://github.com/mfrisch87/MovieTrailerMatchUp",
        description:"Js, Css, Bulma, Youtube Api, OMDB Api",
        alt:"Movie Trailer Match Up"
    },
    {
        link:"https://tuzosdaniel12.github.io/Weather-App/",
        image:"Assets/images/Weather-App.png",
        gitrepo:"https://github.com/Tuzosdaniel12/Weather-App",
        description:"Js, Css, Bootstrap, Open Weather Api",
        alt:"Weather App"
    },
    {
        link:"https://serene-hamlet-18402.herokuapp.com/",
        image:"Assets/images/My-Team.png",
        gitrepo:"https://github.com/Tuzosdaniel12/Employee-Generator",
        description:"Js, Css, Bootstrap, Inquirer, Node.js, express, handlebars",
        alt:"Employee Generator"
    }
];

const renderWork = () =>{
    $firstblock.empty();
    let workSection; 
    for (const work of listOfWork) {
        const{link, image,gitrepo,description,alt} = work
    
    workSection = `<div class="column is-full-mobile is-half-tablet is-one-third-desktop mb-3 work-example-card card-has-ratio" >
    <div class="card">
        <div class="card-image">
            <a href="${link}" target="_blank">
                <figure class="image is-4by3">
                <img id="work-example-img" src="${image}" alt="${alt}">
            </a>
        </div>
        </div>
        <div class="card-content has-text-white" id=card-content-ratio>
        <p class="is-size-6 has-text-white" id="work-tittle">
        ${alt}
        </p>
        <p class="is-size-7 has-text-white" id="work-description">
        ${description}
        </p>
        </div>
        <footer class="card-footer has-text-centered pt-2">
        <small class="has-text-centered has-text-danger" style="width: 100%;">
            <a class="tag is-black has-text-danger is-size-7" id="repo" href="${gitrepo}" target="_blank">Git Repo</a>-
            <a class="tag is-black has-text-danger is-size-7" id="demo" href="${link}" target="_blank">Live Demo</a>
        </small>
        </footer>
    </div>`

    $firstblock
    .append(workSection);
    }
}

function hideBlock(e){
    e.preventDefault();
    console.log("hit")
    if( $(this).data('target') === "home" || $(this).data('target') === "home-2"){

        $("#work").fadeOut('slow', function(){
            $("#aboutme").fadeOut('slow');
            $("#home").fadeIn('slow');
        });

        if($(this).data('target') === "home-2"){
            return
        }
    
    }else if( $(this).data('target') === "about"){

        $("#home").fadeOut('slow', function(){
            $("#work").fadeOut('slow');
            $("#aboutme").fadeIn('slow');
        });
    
    }else{

        $("#aboutme").fadeOut('slow', function(){
            $("#home").fadeOut('slow');
            $("#work").fadeIn('slow');
        });
    }
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
}

renderWork();
$navMenu.on("click", "[data-target]", hideBlock)
$iconHref.on("click", hideBlock)
