const $heroEl = $('#work') 
const  $navMenu = $('#navMenu');
const $firstblock = $('#firstblock');

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
        <figure class="image is-4by3">
          <img id="work-example-img" src="${image}" alt="${alt}">
        </figure>
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
    <small class="has-text-centered" style="width: 100%;">
        <a class="tag is-black is-small" id="repo" href="${gitrepo}" target="_blank">Git Repo</a>-
        <a class="tag is-black is-small" id="demo" href="${link}" target="_blank">Live Demo</a>
    </small>
  </footer>
    
    </div>`

    $firstblock
    .append(workSection);
    }
}





// let  imagePos = 0;
// let  imagePosTwo = listOfLinks.length;
// let  imagePosThree = Math.floor(Math.random() * listOfLinks.length+1);



// const startTimer = () =>{
//     console.log("Hit timer")
//     clearInterval(interval);
//     interval = setInterval(timer, 7000);
// }

// const timer = ()=>{
//     imagePos+=1;
//     imagePosTwo-=1;
//     imagePosThree = Math.floor(Math.random() * listOfLinks.length+1)

//     imagePos = checkImagePos(imagePos);
//     imagePosTwo = checkImagePos(imagePosTwo);
//     imagePosThree = checkImagePos(imagePosThree);
 
//     fadeAttr(imagePos,"#first","#link-1");
//     fadeAttr(imagePosTwo,"#second","#link-2");
//     fadeAttr(imagePosThree,"#third","#link-3")
// }

// function changeImage(e){
//     e.preventDefault();
//     if( $(this).data('target') === "right"){
//         imagePos+=1;
//         imagePosTwo+=1;
//         imagePosThree+=1
//     }else{
//         imagePos-=1;
//         imagePosTwo-=1;
//         imagePosThree-=1;
//     } 

//     imagePos = checkImagePos(imagePos);
//     imagePosTwo = checkImagePos(imagePosTwo);
//     imagePosThree = checkImagePos(imagePosThree);

//     changeAttr(imagePos,"#first","#link-1");
//     changeAttr(imagePosTwo,"#second","#link-2");
//     changeAttr(imagePosThree,"#third","#link-3")
// }

// checkImagePos= (num) =>{

//     if(num === -1){
//         return listOfLinks.length -1
//     }else if(num >= listOfLinks.length){
//         console.log("hit", imagePos)
//         return 0
//     }
//     return num
// }

// const fadeAttr = (pos, el,link) =>{
//     $(el).delay(2000).fadeOut('slow', function(){
//         $(el).attr("src", listOfLinks[pos].image).fadeIn('slow');
//         $(link).attr("href", listOfLinks[pos].link)
//     });

// }
// const changeAttr = (pos,el,link) =>{

//     $(el).attr("src", listOfLinks[pos].image);
//     $(link).attr("href", listOfLinks[pos].link);

// }
function hideBlock(e){
    e.preventDefault();
    if( $(this).data('target') === "home"){

        $("#work").fadeOut('slow', function(){
            $("#aboutme").fadeOut('slow');
            $("#home").fadeIn('slow');
        });
    
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

//startTimer();
renderWork();
// $heroEl.on("click", "[data-target]", changeImage);
$navMenu.on("click", "[data-target]", hideBlock)

