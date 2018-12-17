var nameList = [
    "Matthew Mercer",
    "Mike Mearls",
    "Jeremy Crawford",
    "Gary Gygax",
    "Dave Arneson",
    "Lydia Maud",
    "Xiqs",
    "Dianaluna",
    "Nixe Aranel",
    "Barrel",
    "Hector",
    "Khaksee",
    "Ydris",
    "Shump"
];

$(document).ready(function(){
    var choice = Math.floor(Math.random()*nameList.length)
    var charName = nameList[choice];
    console.log("Placeholder Choice:", charName);
    $('#charName').prop("placeholder", charName);
});