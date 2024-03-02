//Basics

// var home= document.querySelector("#home")
// home.style.color="red";
// home.innerHTML="<i>Hii bro</i>"; // hii bro in italic instead of home
// home.textContent='Hello bro';
// home.addEventListener('mouseenter',function(){
//     home.style.color='red';
// })
// home.addEventListener('mouseleave',function(){
//     home.style.color='black';
// })

//starts from here
var arr=[
    {name: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Roses", image: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Cars", image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Buildings", image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "SpiderMan", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Anime", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=3153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showCards(){
    var clutter="";
    arr.forEach(function(obj){
        clutter += `<div id="box"> <img id="cursor-pointer" src="${obj.image}" alt=""> <div class="caption">Lorem, ipsum.</div></div>`;
    })
    document.querySelector(".container")
    .innerHTML=clutter;
}

function handleSearch(){
    var input = document.querySelector("#searchinput");
    input
    .addEventListener("focus",function(){
        document.querySelector(".overlay")
        .style.display ="block";
    })
    input.
    addEventListener("blur",function(){
        document.querySelector(".overlay")
        .style.display ="none";
    })
    input.
    addEventListener("input",function(){
        const filteredArray= arr.filter(obj=>obj.name.toLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(obj){
            clutter+=`<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
        document.querySelector(".searchdata").style.display="block";
        document.querySelector(".searchdata").innerHTML=clutter;
    })
}

handleSearch();
showCards();