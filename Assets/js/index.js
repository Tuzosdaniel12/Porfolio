const $heroEl = $('#work') 

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
let  imagePos = 0;
let  imagePosTwo = listOfLinks.length;
let  imagePosThree = Math.floor(Math.random() * listOfLinks.length+1);



const startTimer = () =>{
    console.log("Hit timer")
    clearInterval(interval);
    interval = setInterval(timer, 7000);
}

const timer = ()=>{
    imagePos+=1;
    imagePosTwo-=1;
    imagePosThree = Math.floor(Math.random() * listOfLinks.length+1)

    imagePos = checkImagePos(imagePos);
    imagePosTwo = checkImagePos(imagePosTwo);
    imagePosThree = checkImagePos(imagePosThree);
 
    fadeAttr(imagePos,"#first","#link-1");
    fadeAttr(imagePosTwo,"#second","#link-2");
    fadeAttr(imagePosThree,"#third","#link-3")
}

function changeImage(e){
    e.preventDefault();
    if( $(this).data('target') === "right"){
        imagePos+=1;
        imagePosTwo+=1;
        imagePosThree+=1
    }else{
        imagePos-=1;
        imagePosTwo-=1;
        imagePosThree-=1;
    } 

    imagePos = checkImagePos(imagePos);
    imagePosTwo = checkImagePos(imagePosTwo);
    imagePosThree = checkImagePos(imagePosThree);

    changeAttr(imagePos,"#first","#link-1");
    changeAttr(imagePosTwo,"#second","#link-2");
    changeAttr(imagePosThree,"#third","#link-3")
}

checkImagePos= (num) =>{

    if(num === -1){
        return listOfLinks.length -1
    }else if(num >= listOfLinks.length){
        console.log("hit", imagePos)
        return 0
    }
    return num
}

const fadeAttr = (pos, el,link) =>{
    $(el).delay(2000).fadeOut('slow', function(){
        $(el).attr("src", listOfLinks[pos].image).fadeIn('slow');
        $(link).attr("href", listOfLinks[pos].link)
    });

}
const changeAttr = (pos,el,link) =>{

    $(el).attr("src", listOfLinks[pos].image);
    $(link).attr("href", listOfLinks[pos].link);

}

startTimer();

$heroEl.on("click", "[data-target]", changeImage);

