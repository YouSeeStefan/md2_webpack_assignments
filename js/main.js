/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

 var product1 = "Webshop";
 var product2 = "Blog";
 var product3 = "Chatroom";
 var product4 = "Canvas";
 var product5 = "Calc";

 var number1 = "1";
 var number2 = "2";
 var number3 = "3";
 var number4 = "4";
 var number5 = "5";

 var boolean1 = "true";
 var boolean2 = "false";
 var boolean3 = "true";
 var boolean4 = "false";
 var boolean5 = "true";

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

 var students = ["Stefan", "Frank", "Mauro"];
 var Landen = ["Nederland", "Italie", "Spanje"];
 var Leeftijd = ["18", "19", "20"];

 console.log(students, Landen, Leeftijd);

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

 var fruit = new Array();
 fruit["1"] = "Appel";
 console.log(fruit);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

 var namen = ['henk', 'klaas', 'piet', 'kees', 'bert'];
 namen.splice(0, 1);
 namen.splice(1, 1);
 console.log(namen);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

 var vrucht = {soort:"Apple", color:"red", steel:"yes"};
 var consoles = {merk:"Nintendo", soort:"Switch", color:"black"};
 var car = {type:"Fiat", model:"500", color:"white"};
 var dier = {soort:"Kip", geslacht:"vrouw", color:"white"};
 var bloem = {soort:"tulp", color:"red", height:"20cm"};
 var youtuber = {name:"Casey Neistat", subs:"6.630.277", lid:"15 feb. 2010"};
 var pc = {merk:"Asus", color:"black", audio:"ICEpower"};
 var laptop = {merk:"hp", color:"black", audio:"beatsaudio"};
 var facebook = {name:"Facebook", color:"blue", leuk:"yes"};
 var school = {name:"MA", color:"Red/Black", leuk:"yes"};
 console.log(vrucht,consoles,car,dier,bloem,youtuber,pc,laptop,facebook,school);

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

 function multiply(p1, p2){
 	return p1 * p2;
 }
 console.log(multiply(4, 3));

  function divide(p1, p2){
 	return p1 / p2;
 }
 console.log(divide(4, 3));

  function substract(p1, p2){
 	return p1 - p2;
 }
 console.log(substract(4, 3));

  function add(p1, p2){
 	return p1 + p2;
 }
 console.log(add(4, 3));

debugger;
/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function person(firstname,lastname) {
   	var newperson = {firstname:"firstname", lastname:"lastname"};
   	
}

var myMother = new person("Sally","Rally",48,"green");
console.log(myMother);


/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : false, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */