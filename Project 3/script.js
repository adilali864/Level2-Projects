var songs=[
    {name:"Pehle Bhi Mein",url:"./songs/Pehle Bhi Main.mp3",img:"./images/animal.jpg"},
    {name:"Arjun Valley",url:"./songs/Arjan Vailly Ne.mp3",img:"./images/animal.jpg"},
    {name:"Jale",url:"./songs/Jale 2.mp3",img:"./images/jale.jpg"},
    {name:"Ram siya Ram",url:"./songs/Ram Siya Ram.mp3",img:"./images/ram.jpg"}
]

var audio=new Audio();
var allSongs=document.querySelector("#all-songs");
var poster=document.querySelector("#left");

var play=document.querySelector("#play");
var forward=document.querySelector("#forward");
var backward=document.querySelector("#backward");

var selectedSong=0;
function main(){
    var clutter="";
    songs.forEach(function(elem,idx){
        clutter+=`<div class="song-card" id=${idx}>
        <div class="part1">
        <img src="${elem.img}" alt="">
        <h4>${elem.name}</h4>
        </div>
        <h6>3:36</h6>
        </div>`
})
    allSongs.innerHTML=clutter;
    audio.src=songs[selectedSong].url;
    poster.style.backgroundImage=`url(${songs[selectedSong].img})`
}
main();

allSongs.addEventListener("click",function(dets){ //dets = details
    selectedSong=dets.target.id;
    main();
    play.innerHTML=`<i class="ri-pause-line"></i>`;
    flag=1;
    audio.play();
})

var flag=0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-line"></i>`;
        main();
        audio.play()
        flag=1;
    }else{
        play.innerHTML=`<i class="ri-play-fill"></i>`;
        main();
        audio.pause();
        flag=0;
    }
})

forward.addEventListener("click",function(){
    if(selectedSong<songs.length-1){
        selectedSong++;
        main();
        audio.play();
    }else{
        forward.style.opacity=0.3;
        forward.style.scale=1;
    }
})

backward.addEventListener("click",function(){
    if(selectedSong>0){
        selectedSong--;
        main();
        audio.play();
    }else{
        backward.style.opacity=0.3;
        backward.style.scale=1;
    }
})