const $heroEl = $('#work') 

let  imagePos = 0;

let interval;
const listOfLinks = [
    {
        link:"https://eat-la-burger-please.herokuapp.com/",
        image:"Assets/images/burger-example.png"
    },
    {
        link:"https://github.com/Tuzosdaniel12/Employee-Tracker",
        image:"Assets/images/example.png"
    },{
        link:"https://tuzosdaniel12.github.io/Horiseon-Marketing/",
        image:"Assets/images/Horiseon-Marketing.png"
    },{
        link:"https://mfrisch87.github.io/MovieTrailerMatchUp/",
        image:"Assets/images/movie.png"
    },{
        link:"https://tuzosdaniel12.github.io/PasswordGenerator/",
        image:"Assets/images/Password-Generator.png"
    },{
        link:"https://tuzosdaniel12.github.io/Day-Scheduler/",
        image:"Assets/images/schedulerApp.png"
    },{
        link:"https://tuzosdaniel12.github.io/Weather-App/",
        image:"Assets/images/Weather-App.png"
    },
    {
        link:"https://whispering-brook-42517.herokuapp.com/",
        image:"Assets/images/Note-Taker.png"
    },
    {
        link:"https://serene-hamlet-18402.herokuapp.com/",
        image:"Assets/images/My-Team.png"
    }
];
let  imagePosS = listOfLinks.length;

const startTimer = () =>{
    console.log("Hit timer")
    clearInterval(interval);
    interval = setInterval(timer, 5000);
}

const timer = ()=>{
    imagePos+=1;
    imagePosS-=1;
    imagePos = checkImagePos(imagePos);
    imagePosS = checkImagePos(imagePosS);

    $('#first').attr("src", listOfLinks[imagePos].image)
    $('#link-1').attr("href", listOfLinks[imagePos].link)

    $('#second').attr("src", listOfLinks[imagePosS].image)
    $('#link-2').attr("href", listOfLinks[imagePosS].link)
}

function changeImage(e){
    e.preventDefault();
    if( $(this).data('target') === "right"){
        imagePos+=1;
    }else{
        imagePos-=1;
    } 
    
    imagePos = checkImagePos(imagePos);

    $('#first').attr("src", listOfLinks[imagePos].image)
    $('#link-1').attr("href", listOfLinks[imagePos].link)
}

checkImagePos= (num) =>{

    if(num === -1){
        return listOfLinks.length -1
    }else if(imagePos >= listOfLinks.length){
        console.log("hit", imagePos)
        return 0
    }
    return num
}

startTimer();

$heroEl.on("click", "[data-target]", changeImage);

