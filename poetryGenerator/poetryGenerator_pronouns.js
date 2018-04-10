
function poemGenerate() {
    let r = Math.random();

    if (r > 0.5) {
        generatePronounPoetry();
    } else {
        generateIngPoetry();
    }



}

function generatePronounPoetry() {

var allPronouns = ["I",	"me",	"my",	"mine",	"myself","you",	"your",	"yours", "yourself", "he",	"him",	"his",	"himself", "she",	"her",	"her",	"hers",	"herself", "it", "its", "itself","we","us",	"our", "ours", "ourselves", "you",	"your",	"yours", "ourselves", "they",	"them",	"their", "theirs","themselves"];
//

let allWordsDream=[];
let pronounPoemWords=[];

let ingWords=[];

//    let dream = select('#read_body').html();
    let dream = document.getElementById('read_body').innerHTML;
//    console.log(dream);
// // algorithm for generating the text
//
    let words = dream.split(' ');
    //console.log(words)
//
////  let poem = random(words) + ' ' random(words);
//    let poem = dream;


let re1 = /\bI|\bi|\bme\bmy|\bmine|\bmyself\byou|\byour|\byours\byourself|\bhe|\bhim\bhis|\bhimself|\bshe\bher|\bhers|\bherself\bit|\bits|\bitself\bwe|\bus|\bour\bourselves|\byou|\byour\byours|\bourselves|\bthey\bthem|\btheir|\btheirs\bthemselves|\bHe/g
// let dreamBase =" her cat my bat me her sat";
// //let dreamBase = text(body);
//
//
 //do {
     m = re1.exec(words);
//     if (m) {
         console.log(m);
//     }
 //} while (m);

var text = "";
var i;
for (i = 0; i < words.length; i++) {
  if words[i] in re1 {
    text += words[i] + "<br>";
    }
}






    //document.getElementById('poem').innerHTML = dream;
    //document.getElementById('poem').innerHTML = "here we will have a poem";
    //document.getElementById('poem').innerHTML = m;
    document.getElementById('poem').innerHTML = text;


}












// //textSize,typography
// function poemDiagramation(wordPerLine,spaceBetweenWords,spaceBetweenLines, tabSpaces){
//
// //display 6 words for line
// //make library to space between words , lines between
//
// //   I I she me he I I
//
// // I  I   I   he   he   he
//
// //  she I I I I I
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
// // numbersSpaceBetweenWords=[];
// // numbersWordPerLine = [];
// // numbersSpaceBetweenLines =[];
// // numberTabSpaces=[];
// // textSizes=[];
// // typography =[];


// function poeticGeneration(poem, typography, wordsPerLine, tabSpace, spaceBetweenWords) {
//
// let re1 = /\bmy|\bher|\bme/g
// let dreamBase =" her cat my bat me her sat";
// //let dreamBase = text(body);
//
//
// do {
//     m = re1.exec(dreamBase);
//     if (m) {
//         //console.log(m);
//     }
// } while (m);
//
// }

// TEST BASE WITH REGEX
// function poeticGeneration(poem, typography, wordsPerLine, tabSpace, spaceBetweenWords) {
//
// let re1 = /\bmy|\bher|\bme/g
// let dreamBase =" her cat my bat me her sat";
// //let dreamBase = text(body);
//
//
// do {
//     m = re1.exec(dreamBase);
//     if (m) {
//         //console.log(m);
//     }
// } while (m);
//
// }
