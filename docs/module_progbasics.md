# Programming Basics questions

## Data Basics

- What are the differences between objects, arrays, and primitives in JavaScript? How are they used in programming?

A primitívek maguk az értéktípusok, amíg az objektek, arrayek pedig a referencia értékekek tartalmazzák.

- How would you access the value of a specific key in an object?

object.key

- Explain the concept of key-value pairs in objects and how they differ from indexed elements in arrays.

In an object you can reach a certain element by using it's key, while in an array you need to use the index. 
You can not iterate an object with a for of loop, but you can iterate it with a for loop or a for in loop

- Describe a scenario where you would choose to use an object instead of an array, or vice versa, and explain your reasoning.

Komplex adattypusoknál, mint például ami volt feladat a product list, és a neighbouring countries, ahol egy adott elemhez több féle infó tartozik - pl ár, hossz, név, évszám, stb. Szóval ahol komplex adatokat kell kezelni. 

- How can you retrieve the first and last items of an array?

[0]; [array.length-1];

- Identify the five most commonly used primitive types in JavaScript, and provide examples demonstrating when and how to use them?

string, number, boolean, undefined, null


## Algorithm Basics

- Provide examples of assignment operators in JavaScript.

=, +=, -=, *=, /=, %=, **=

- Name some of the arithmetic operators in JavaScript.

+, -, *, /, %, --, ++, **

- What are the different comparison operators in JavaScript?

<, >, ==, ===, !=, !==, <=, >=

- Name a few logical operators used in JavaScript.

&&, ||, !

- Explain the differences between a `for` loop, `for of` loop, and `for in` loop in JavaScript.

Mindegyikkel iterálnuk. 

Egy for looppal meg az iteráció egy változóval történik, ami egy szám - gyakran "i", aminek megadjuk a kezdő és záró értékét, illetve, hogy mekkora és milyen lépésekben változzon. Stringben, arrayben és objectben is használhatjuk.

Egy for of loopban egy adott string vagy array elemein úgy iterálunk, hogy mindig az aktuális elem tölti ki a meghatározott változó nevét, amivel aztán dolgozunk az iterációban. For of loopot nem tudunk objectekre használni.

Egy for in looppal objectben tudunk iterálni úgy, hogy az object aktuális key-e tölti ki a loopban definiált válozónk helyét minden iterációban.

- If you can't use any built-in functions or methods, how would you calculate the average of values in an array?

Összeadnám a tagok értékét, majd elosztanám a tagok számával.

## Function Basics

- What is a function in JavaScript? Explain its purpose and how it is used in programming.

Egy kód tömb (block), ami egy adott szerepet tölt be.
Van egy return értéke, amit aztán használhatunk.
Egy function-t létre kell hozni, majd meg kell hívni - általában egy adott értékkel, vagy callback function esetén egy másik functionnel.
hoisting fogalma: a funcion declarációja előtt is már meg lehet hívni a functiont - ez a hoisting.

- Describe the different syntax elements that make up a JavaScript function.

function + név + () + {} ---- arrow: ()=>{}


- How do you pass arguments to a function? Explain the concept of parameter passing and provide an example.

Amikor definiálom a functiont, paramétereket adhatok meg neki. A paraméterek helyére írom később az argúmentumokat amikor meghívom a functiont, és ezáltal az argumentumok használatával fog végigmenni a művelet.

- What is the difference between function expressions and function declarations? Provide examples of each.

Amikor expression van, akkor nem hoistingolhatok, magyarul ha egy változóba mentem a functionomet, a változó deklarálása előtt ha  hivatkozok rá még nem létezik, vagy nincs értéke.

- Explain what a callback function is in JavaScript.

Egy olyan function, aminek az argúmentuma egy másik function. Például az eventlistenerek callback functionök.

- What is the scope of variables in JavaScript functions? Explain the difference between local and global variables.

Block scope, nested scope, shadowing, temporal dead zone, global scope.

A scope határozza meg, hogy hol érvényes a variáns, amit létrehozunk. \nHa egy loopon, functionön belül hozunk például létre változót, azt az adott egységen kívül nem fogjuk elérni, mert lokális - \nazonban, ha mindenen kívül - globálisan - hozzuk létre, akkor elérhetjük functionön belül. \n Ha szeretnénk használni, vigyázni kell az elnevezésekkel, nehogy "leárnyaljuk" (shadowing) a function vagy a loop egyik paraméterével a belső scope-on a globális változót.

## Built-in Features

- What are some commonly used built-in functions or methods in JavaScript for working with strings? Provide examples and explain their usage.

typeof, toString(), 
charAt(), toLowerCase(), toUpperCase(), includes(), indexOf(), startsWith(), endsWith(), 
substring(), slice(), split(),  
////match(), test(), 


- Name at least five built-in functions or methods in JavaScript for manipulating arrays. Describe how each function/method works and provide an example for each.

push(), pop(), slice(), splice(), join(), filter(), sort(), forEach(), lastIndexOf(), indexOf(), map(), reverse(),

- How can you use built-in functions or methods in JavaScript to perform mathematical operations? Give examples of commonly used functions or methods for mathematical calculations.

parseFloat(), parseInt(), 
Math.floor(), Math.round(), Math.ceil(),
Math.pow(base, exponent), Math.sqrt(x), Math.cbrt(x),
Math.random() * 10 --- 0-10 random
Math.floor(Math.random() * 10) + 1 --- 1-10 random
Math.max(...values)
Math.min(...values)

- What are some built-in functions or methods in JavaScript for manipulating numbers? Describe their functionality and give examples of how they can be used.

Number(), toString(),
parseInt(), parseFloat(),
Infinity, -Infinity, isFinite()
isNan(), Number.isInteger()


- Discuss the differences between `for` loops and the `forEach` method in JavaScript.

for loop iterál, sorban haladva, foreach pedig mindegyik elemre ugyanazt csinálja, nem lehet megtörni


## File Basics

- What distinguishes JavaScript data structures from JSON data structures?
- How would you create a JavaScript data structure from the data in a JSON file?

## View Basics

- Explain the difference between JavaScript object data structure and DOM data structure.

Kulcs-érték párok vannak az objectben, ahol bármilyen infót tárolhatunk, a DOM (Document Object Model) pedig egy tree-like structur, azaz egy faszerkezetes megjelenítési mód HTMLben, ahol a javascriptet használva jeleníthetünk meg elementeket az oldalon. Az object business logic, míg a DOM view logic.  

- What are the necessary steps to change the content of an HTML element using JavaScript?

Meg kell keressük a document-ben, el kell mentsük egy változóba, majd utána tudjuk módosítani különböző módokon.

## Event Basics

- Define an event listener in JavaScript.

Egy olyan callback function ami egy esemény végbemenetele után fut le.

\ndocument.addEventListener("click", (event)=>{
\n    ///tartalom
\n})

- Outline the steps involved in changing the content of an HTML element when it is clicked.

Őrá rakhatok egy "click" event listenert ha a scopeomon változóban elérem - a listeneren belül a változó nevével tudok hivatkozni rá .innerText vagy .innerHTML-lel pedig megváltoztatom a belső tartalmát, ha szöveget akarok, ha p

Rakhatok a document-re is event listenert, ezesetben a clickelt element-et a callback function paraméterében szereplő elnevezéssel érem el - általában e vagy event - szóval pl. e.target-ként elérem a kattintással célzott elementet.

- Inside a `click` event listener, how can you access the element that was clicked?

a clickelt element-et a callback function paraméterében szereplő elnevezéssel érem el - általában e vagy event - szóval pl. e.target-ként elérem a kattintással célzott elementet.

## Design Basics

- What are the differences between `display: block`, `display: inline`, and `display: inline-block` in CSS? \nWhen would you use each display property, and how do they affect the layout and behavior of elements?

block:
\n Egy új sort csinál magának, teljes sor hosszát elfoglalja pl. div, h1-h2-..., p
\n Akkor használnám, ha címet, teljes sort kitöltő információt akarok megjeleníteni.

\ninline:
\nNem új sorban kezd, szélessége, magassága nem állítható, margin, padding csak széltében él pl. span, a, strong, em
\n Akkor használnám, ha a szövegbe kisebb elementet akarok berakni pl. strong, vagy egy linket pl.

\nblock-inline:
\nVegyíti a két megjelenítési módot. Nem új sorban lesz az element, nem foglalja el a teljes sort, viszont állíthatóak a paraméterei.
\n Akkor használnám, ha az eddigi szöveg, elementek mellé akarok rakni valami olyat, aminek a szélességét, magasságát állítani szeretném külön.

- Explain the distinctions between `position: relative` and `position: absolute` CSS properties.

Relative: A normál helyzetükhöz képest vannak pozicionálva az elementek. Pozicionálás a top, right, bottom, és left beállításokkal történik.

Absolute: A legközelebb pozicionált ősükhöz képest vannak elhelyezve az elemek. Ha azt nem találja, a bodyhoz képest. Ugyanazzal a 4 beállítással lehet módosítgatni, elhelyezni.

- What is the box model? Name the CSS properties associated with it.

A CSS box model koncepció azt reprezentálja, hogy a HTML elemek négyzetes dobozként jelennek meg a weboldalon. \nA box modell négy összetevőből áll: content, padding, border, és margin.\n 

Content: The content area is where the text, images, and other media are displayed. It is defined by the height and width of the element.

Padding: The padding is the space between the content and the border. It can be set using the padding property.

Border: The border is a line that surrounds the content and padding areas. It can be set using the border property.

Margin: The margin is the space between the border and the surrounding elements. It can be set using the margin property.

Width and height are also quite important.

- Identify the CSS properties that affect font and text appearance.

Sok van, mint pl font-family, font-size, line-height, font-weight, font-style, text-decoration, text-align... stb.

- List the steps for adding or removing a class name from an HTML element.

element.classList.add("toAdd")
\nelement.classList.remove("toRemove")

## JavaScript - Language Specialties

- Elaborate on the differences between value and reference data types in JavaScript, specifically in relation to objects and primitives.

Az objectek, arrayek csak a reference data structure-t tartalmazzák, azaz az elérési utat (?), amíg a primitívek pedig egy egyszerű adatot.

- Discuss the concept of mutability and immutability in objects, arrays, and primitives, and explain why it is important to understand when working with data structures in JavaScript.

A mutable, mint az objectek, arrayek változtatható, módosítható adatstruktúra, amíg a primitívek immutable-ök.  

- Is `null` considered an object or a primitive in JavaScript?

Primitive. - van egy régi bug javascriptben, ami objectnek mutatja?

- "What does `undefined` represent in JavaScript?"

Egy érték hiányát jelzi, vagy egy olyan változót, amit létrehoztak, de nem rendeltek hozzá semmit.

- When would you use `var`, `let`, and `const` in JavaScript?

var: function scope, hoistolható, de amíg értéket nem kap, undefined lesz. - nem gyakran használom - outdated.
let: block scope, ha változtatni akarjuk a teljes értéket, primitivek pl.
const: block scope, objectek arrayek, ahol a teljes értéket nem írjuk át.

- Explain the concept of hoisting in JavaScript.

A deklaráció előtt is a scopeon elérhető az adott dolog.

## Git

- Discuss the advantages of using a version control system.

Lehet követni a változásokat, visszacsinálni a rossz változtatást, rendszerezni, backupolni, távoli elérésre feltolni - felhőbe.

- Clarify the differences between Git and GitHub.

A git egy lokális kódmenedzser rendszer, amivel a változásokat lehet lekövetni a kódban. A github felhő alapú, így a közös munkát is megsegíti, és a távoli elérést, backupot, source kód kezelést leegyszerűsíti.

- What is the purpose of remote repositories in Git?

Az együtt dolgozás, távoli elérés, branch kezelés, illetve a kód eljuttatása bárkihez.

- When does a merge conflict occur in Git?

Amikor a git nem tudja automatikusan egyeztetni a kód két verzióját, és manuálisan kell kibogozni az adott részt.

## Terminal

- How would you execute a JavaScript file in the terminal?

node script.js

- What is the keyboard shortcut to stop a running process in the terminal?

ctrl + C

- How can you retrieve the previous command executed in the terminal?

up arrow button

- How do you navigate to the parent directory of the current directory in the terminal?

cd.. (change directory ..)

## Debugging

- What techniques can you use while debugging a program?

Firstly check if there is an error message and if there is, what does it say?
If the line is in a function, check where you call the function and what we entered the function at that time.

console.log() helps with understanding

debugger tool can stop our running of the code with a break point


- What does step over, step into and step out mean while using the debugger?

Step overrel az esetleges meghívott functionöket egészében lefuttatja és csak utána áll meg, míg a step into belelép és ott folytatja, a step out pedig onnan lefuttatja a maradék functiont és úgy áll meg a kinti scope következő soránál.

- How can you start to debug a program from a certain line using the debugger?

A bal oldalt lévő űrbe kell egy breakpointot létrehozni.
