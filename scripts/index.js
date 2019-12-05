console.log(`There are ${characters.length} characters in the array.`);

/*
let nameArr = []
let n = nameArr.includes('A')
*/



//How many characters names start with "A"?
/*let startA = characters.filter(function (character) {
    return character.name[0].toLowerCase() === 'a';
  });
  
  console.log(startA)
  // 168
*/


//How many characters names start with "Z"?
/*
let startZ = characters.filter(function (character) {
    return character.name[0].toLowerCase() === 'z';
  });
  
  console.log(startZ)
// 8
*/


//How many characters are dead?
/*
let isDead = characters.filter(function (character) {
    return character.died;
    
});
console.log(isDead)
// 553
*/

//Who has the most titles?
/*
let mostTitles = characters.filter(function (character) {
    //console.log(character.titles.length > 6);
    return character.titles.length >= 2;
    
});
console.log(mostTitles[0])
// Euron Greyjoy
*/

/*
let maxTitles = 0;
let maxTitleName = "";
characters.forEach(function(character) {
    if (character.titles.length > maxTitles) {
        maxTitles = character.titles.length;
        maxTitleName = character.name;
    }
});
console.log(maxTitleName, maxTitles)
*/

console.log(characters)
/*
//How many are Valyrian?
let isValyrian = 0;
characters.forEach(function(character) {
    if (character.culture === 'Valyrian') {
        isValyrian += 1;
    }
});
console.log(isValyrian)
// 57
*/

/*
let isHotPie = "";
//What actor plays "Hot Pie" (and don't use IMDB)?
characters.forEach(function(character){
    if (character.name == "Hot Pie") {
        isHotPie = character.playedBy;
    }
})
console.log(isHotPie)
*/

//How many characters are *not* in the tv show?
/*
let isTv = 0;
characters.forEach(function(character) {
    if (character.tvSeries.length > 1){
        isTv += 1;
    }
})
console.log(isTv)
*/

//Produce a list characters with the last name "Targaryen"
let isTargaryen = [];
characters.forEach(function(character) {
    if (character.name.includes('Targaryen')) {
        isTargaryen.push(character.name);
    }
})
console.log(isTargaryen);
//Create a histogram of the houses (it's the "allegiances" key)
