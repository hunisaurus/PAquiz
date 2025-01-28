

const data = [
    {
        category: "Data Basics",
        question: "Mik a különbségek az objektumok, tömbök és primitívek között JavaScriptben? Hogyan használjuk őket a programozásban?",
        answers: "A primitívek maguk az értéktípusok, amíg az objektek, arrayek pedig a referencia értékekek tartalmazzák."
    },
    {
        category: "Data Basics",
        question: "How would you access the value of a specific key in an object?",
        answers: "object.key"
    },
    {
        category: "Data Basics",
        question: "Explain the concept of key-value pairs in objects and how they differ from indexed elements in arrays.",
        answers: "In an object you can reach a certain element by using it's key, while in an array you need to use the index. You can not iterate an object with a for of loop, but you can iterate it with a for loop or a for in loop"
    },
    {
        category: "Data Basics",
        question: "Describe a scenario where you would choose to use an object instead of an array, or vice versa, and explain your reasoning.",
        answers: "Komplex adattípusoknál, mint például ami volt feladat a product list, és a neighbouring countries, ahol egy adott elemhez több féle infó tartozik - pl ár, hossz, név, évszám, stb. Szóval ahol komplex adatokat kell kezelni."
    },
    {
        category: "Data Basics",
        question: "How can you retrieve the first and last items of an array?",
        answers: "[0]; [array.length-1];"
    },
    {
        category: "Data Basics",
        question: "Identify the five most commonly used primitive types in JavaScript, and provide examples demonstrating when and how to use them?",
        answers: "string, number, boolean, undefined, null"
    },
    {
        category: "Algorithm Basics",
        question: "Provide examples of assignment operators in JavaScript.",
        answers: "=, +=, -=, *=, /=, %=, **="
    },
    {
        category: "Algorithm Basics",
        question: "Name some of the arithmetic operators in JavaScript.",
        answers: "+, -, *, /, %, --, ++, **"
    },
    {
        category: "Algorithm Basics",
        question: "What are the different comparison operators in JavaScript?",
        answers: "<, >, ==, ===, !=, !==, <=, >="
    },
    {
        category: "Algorithm Basics",
        question: "Name a few logical operators used in JavaScript.",
        answers: "&&, ||, !"
    },
    {
        category: "Algorithm Basics",
        question: "Explain the differences between a `for` loop, `for of` loop, and `for in` loop in JavaScript.",
        answers: "Mindegyikkel iterálnuk.\nEgy for looppal meg az iteráció egy változóval történik, ami egy szám - gyakran i, aminek megadjuk a kezdő és záró értékét, illetve, hogy mekkora és milyen lépésekben változzon. Stringben, arrayben és objectben is használhatjuk. \nEgy for of loopban egy adott string vagy array elemein úgy iterálunk, hogy mindig az aktuális elem tölti ki a meghatározott változó nevét, amivel aztán dolgozunk az iterációban. For of loopot nem tudunk objectekre használni.\nEgy for in looppal objectben tudunk iterálni úgy, hogy az object aktuális key-e tölti ki a loopban definiált válozónk helyét minden iterációban."
    },
    {
        category: "Algorithm Basics",
        question: "If you can't use any built-in functions or methods, how would you calculate the average of values in an array?",
        answers: "Összeadnám a tagok értékét, majd elosztanám a tagok számával."
    },
    {
        category: "Function Basics",
        question: "What is a function in JavaScript? Explain its purpose and how it is used in programming.",
        answers: "Egy kód tömb (block), ami egy adott szerepet tölt be. Van egy return értéke, amit aztán használhatunk. Egy function-t létre kell hozni, majd meg kell hívni - általában egy adott értékkel, vagy callback function esetén egy másik functionnel. \nhoisting fogalma: a funcion declarációja előtt is már meg lehet hívni a functiont - ez a hoisting."
    },
    {
        category: "Function Basics",
        question: "Describe the different syntax elements that make up a JavaScript function.",
        answers: "function + név + () + {} ---- arrow: ()=>{}"
    },
    {
        category: "Function Basics",
        question: "How do you pass arguments to a function? Explain the concept of parameter passing and provide an example.",
        answers: "Amikor definiálom a functiont, paramétereket adhatok meg neki. A paraméterek helyére írom később az argúmentumokat amikor meghívom a functiont, és ezáltal az argumentumok használatával fog végigmenni a művelet."
    },
    {
        category: "Function Basics",
        question: "What is the difference between function expressions and function declarations? Provide examples of each.",
        answers: "Amikor expression van, akkor nem hoistingolhatok, magyarul ha egy változóba mentem a functionomet, a változó deklarálása előtt nem hivatkozhatok rá, hiszen még nem létezik."
    },
    {
        category: "Function Basics",
        question: "Explain what a callback function is in JavaScript.",
        answers: "Egy olyan function, aminek az argúmentuma egy másik function. Például az eventlistenerek callback functionök."
    },
    {
        category: "Function Basics",
        question: "What is the scope of variables in JavaScript functions? Explain the difference between local and global variables.",
        answers: "Block scope, nested scope, shadowing, temporal dead zone, global scope. \nA scope határozza meg, hogy hol érvényes a variáns, amit létrehozunk. \nHa egy loopon, functionön belül hozunk például létre változót, azt az adott egységen kívül nem fogjuk elérni, mert lokális - \nazonban, ha mindenen kívül - globálisan - hozzuk létre, akkor elérhetjük functionön belül. \n Ha szeretnénk használni, vigyázni kell az elnevezésekkel, nehogy leárnyaljuk (shadowing) a function vagy a loop egyik paraméterével a belső scope-on a globális változót."
    },
    {
        category: "Built-in Features",
        question: "What are some commonly used built-in functions or methods in JavaScript for working with strings? Provide examples and explain their usage.",
        answers: "typeof, toString(), \ncharAt(), toLowerCase(), toUpperCase(), includes(), indexOf(), startsWith(), endsWith(), \nsubstring(), slice(), split(), \n////match(), test(),"
    },
    {
        category: "Built-in Features",
        question: "Name at least five built-in functions or methods in JavaScript for manipulating arrays. Describe how each function/method works and provide an example for each.",
        answers: "push(), pop(), slice(), splice(), join(), filter(), sort(), forEach(), lastIndexOf(), indexOf(), map(), reverse(),"
    },
    {
        category: "Built-in Features",
        question: "How can you use built-in functions or methods in JavaScript to perform mathematical operations? Give examples of commonly used functions or methods for mathematical calculations.",
        answers: "parseFloat(), parseInt(),\nMath.floor(), Math.round(), Math.ceil(),\nMath.pow(base, exponent), Math.sqrt(x), Math.cbrt(x),\nMath.random() * 10 --- 0-10 random\nMath.floor(Math.random() * 10) + 1 --- 1-10 random\nMath.max(...values)\nMath.min(...values)"
    },
    {
        category: "Built-in Features",
        question: "What are some built-in functions or methods in JavaScript for manipulating numbers? Describe their functionality and give examples of how they can be used.",
        answers: "Number(), toString(),\nparseInt(), parseFloat(),\nInfinity, -Infinity, isFinite()\nisNan(), Number.isInteger()"
    },
    {
        category: "Built-in Features",
        question: "Discuss the differences between `for` loops and the `forEach` method in JavaScript.",
        answers: "for loop iterál, sorban haladva, foreach pedig mindegyik elemre ugyanazt csinálja, nem lehet megtörni"
    },
    {
        category: "View Basics",
        question: "Explain the difference between JavaScript object data structure and DOM data structure.",
        answers: "Kulcs-érték párok vannak az objectben, ahol bármilyen infót tárolhatunk,\na DOM (Document Object Model) pedig egy tree-like structure, azaz egy faszerkezetes megjelenítési mód HTMLben, \nahol a javascriptet használva jeleníthetünk meg elementeket az oldalon. \nAz object business logic, míg a DOM view logic."
    },
    {
        category: "View Basics",
        question: "What are the necessary steps to change the content of an HTML element using JavaScript?",
        answers: "Meg kell keressük a document-ben, el kell mentsük egy változóba, majd utána tudjuk módosítani különböző módokon."
    },
    {
        category: "Event Basics",
        question: "Define an event listener in JavaScript.",
        answers: "Egy olyan callback function, ami meghatároz egy eseményt, és egy functiont, ami az esemény végbemenetele után fut le.\ndocument.addEventListener(`click`, (event)=>{\n    ///tartalom\n})"
    },
    {
        category: "Event Basics",
        question: "Outline the steps involved in changing the content of an HTML element when it is clicked.",
        answers: "Őrá rakhatok egy click event listenert ha a scopeomon változóban elérem - a listeneren belül a változó nevével tudok hivatkozni rá .innerText vagy .innerHTML-lel pedig megváltoztatom a belső tartalmát, ha szöveget akarok, ha p\nRakhatok a document-re is event listenert, ezesetben a clickelt element-et a callback function paraméterében szereplő elnevezéssel érem el - általában e vagy event - szóval pl. e.target-ként elérem a kattintással célzott elementet."
    },
    {
        category: "Event Basics",
        question: "Inside a `click` event listener, how can you access the element that was clicked?",
        answers: "A clickelt element-et a callback function paraméterében szereplő elnevezéssel érem el - általában e vagy event - szóval pl. e.target-ként elérem a kattintással célzott elementet."
    },
    {
        category: "Design Basics",
        question: "What are the differences between `display: block`, `display: inline`, and `display: inline-block` in CSS? \nWhen would you use each display property, and how do they affect the layout and behavior of elements?",
        answers: "block:\n Egy új sort csinál magának, teljes sor hosszát elfoglalja pl. div, h1-h2-..., p\n Akkor használnám, ha címet, teljes sort kitöltő információt akarok megjeleníteni.\ninline:\nNem új sorban kezd, szélessége, magassága nem állítható, margin, padding csak széltében él pl. span, a, strong, em\n Akkor használnám, ha a szövegbe kisebb elementet akarok berakni pl. strong, vagy egy linket pl.\nblock-inline:\nVegyíti a két megjelenítési módot. Nem új sorban lesz az element, nem foglalja el a teljes sort, viszont állíthatóak a paraméterei.\n Akkor használnám, ha az eddigi szöveg, elementek mellé akarok rakni valami olyat, aminek a szélességét, magasságát állítani szeretném külön."
    },
    {
        category: "Design Basics",
        question: "Explain the distinctions between `position: relative` and `position: absolute` CSS properties.",
        answers: "Relative: A normál helyzetükhöz képest vannak pozicionálva az elementek. Pozicionálás a top, right, bottom, és left beállításokkal történik.\nAbsolute: A legközelebb pozicionált ősükhöz képest vannak elhelyezve az elemek. Ha azt nem találja, a bodyhoz képest. Ugyanazzal a 4 beállítással lehet módosítgatni, elhelyezni."
    },
    {
        category: "Design Basics",
        question: "What is the box model? Name the CSS properties associated with it.",
        answers: "A CSS box model koncepció azt reprezentálja, hogy a HTML elemek négyzetes dobozként jelennek meg a weboldalon. \nA box modell négy összetevőből áll: content, padding, border, és margin.\nContent: The content area is where the text, images, and other media are displayed. It is defined by the height and width of the element.\nPadding: The padding is the space between the content and the border. It can be set using the padding property.\nBorder: The border is a line that surrounds the content and padding areas. It can be set using the border property.\nMargin: The margin is the space between the border and the surrounding elements. It can be set using the margin property.\nWidth and height are also quite important."
    },
    {
        category: "Design Basics",
        question: "Identify the CSS properties that affect font and text appearance.",
        answers: "Sok van, mint pl font-family, font-size, line-height, font-weight, font-style, text-decoration, text-align... stb."
    },
    {
        category: "Design Basics",
        question: "List the steps for adding or removing a class name from an HTML element.",
        answers: "element.classList.add(`toAdd`)\nelement.classList.remove(`toRemove`)"
    },
    {
        category: "JavaScript - Language Specialties",
        question: "Elaborate on the differences between value and reference data types in JavaScript, specifically in relation to objects and primitives.",
        answers: "Az objectek, arrayek csak a reference data structure-t tartalmazzák, azaz az elérési utat (?), amíg a primitívek pedig egy egyszerű adatot."
    },
    {
        category: "JavaScript - Language Specialties",
        question: "Discuss the concept of mutability and immutability in objects, arrays, and primitives, and explain why it is important to understand when working with data structures in JavaScript.",
        answers: "A mutable, mint az objectek, arrayek változtatható, módosítható adatstruktúra, amíg a primitívek immutable-ök.  "
    },
    {
        category: "JavaScript - Language Specialties",
        question: "Is `null` considered an object or a primitive in JavaScript?",
        answers: "Primitive. - van egy régi bug javascriptben, ami objectnek mutatja?"
    },
    {
        category: "JavaScript - Language Specialties",
        question: "What does `undefined` represent in JavaScript?",
        answers: "Egy érték hiányát jelzi, vagy egy olyan változót, amit létrehoztak, de nem rendeltek hozzá semmit."
    },
    {
        category: "JavaScript - Language Specialties",
        question: "When would you use `var`, `let`, and `const` in JavaScript?",
        answers: "var: function scope, hoistolható, de amíg értéket nem kap, undefined lesz. - nem gyakran használom - outdated.\nlet: block scope, ha változtatni akarjuk a teljes értéket, primitivek pl.\nconst: block scope, objectek arrayek, ahol a teljes értéket nem írjuk át."
    },
    {
        category: "JavaScript - Language Specialties",
        question: "Explain the concept of hoisting in JavaScript.",
        answers: "A deklaráció előtt is a scopeon elérhető az adott dolog."
    },
    {
        category: "Git",
        question: "Discuss the advantages of using a version control system.",
        answers: "Lehet követni a változásokat, visszacsinálni a rossz változtatást, rendszerezni, backupolni, távoli elérésre feltolni - felhőbe."
    },
    {
        category: "Git",
        question: "Clarify the differences between Git and GitHub.",
        answers: "A git egy lokális kódmenedzser rendszer, amivel a változásokat lehet lekövetni a kódban. A github felhő alapú, így a közös munkát is megsegíti, és a távoli elérést, backupot, source kód kezelést leegyszerűsíti."
    },
    {
        category: "Git",
        question: "What is the purpose of remote repositories in Git?",
        answers: "Az együtt dolgozás, távoli elérés, branch kezelés, illetve a kód eljuttatása bárkihez."
    },
    {
        category: "Git",
        question: "When does a merge conflict occur in Git?",
        answers: "Amikor a git nem tudja automatikusan egyeztetni a kód két verzióját, és manuálisan kell kibogozni az adott részt."
    },
    {
        category: "Terminal",
        question: "How would you execute a JavaScript file in the terminal?",
        answers: "node script.js"
    },
    {
        category: "Terminal",
        question: "What is the keyboard shortcut to stop a running process in the terminal?",
        answers: "ctrl + C"
    },
    {
        category: "Terminal",
        question: "How can you retrieve the previous command executed in the terminal?",
        answers: "up arrow button"
    },
    {
        category: "Terminal",
        question: "How do you navigate to the parent directory of the current directory in the terminal?",
        answers: "cd.. (change directory ..)"
    },
    {
        category: "Debugging",
        question: "What techniques can you use while debugging a program?",
        answers: "Firstly check if there is an error message and if there is, what does it say?\nIf the line is in a function, check where you call the function and what we entered the function at that time.\nconsole.log() helps with understanding\ndebugger tool can stop our running of the code with a break point"
    },
    {
        category: "Debugging",
        question: "What does step over, step into and step out mean while using the debugger?",
        answers: "Step overrel az esetleges meghívott functionöket egészében lefuttatja és csak utána áll meg, míg a step into belelép és ott folytatja, a step out pedig onnan lefuttatja a maradék functiont és úgy áll meg a kinti scope következő soránál."
    },
    {
        category: "Debugging",
        question: "How can you start to debug a program from a certain line using the debugger?",
        answers: "A bal oldalt lévő űrbe kell egy breakpointot létrehozni."
    }
]

for (let q of data){
    q.answers = [{name: "Huni", answer: q.answers}];
}
  
const questions = [
    "Mik a különbségek az objektumok, tömbök és primitívek között JavaScriptben? Hogyan használjuk őket a programozásban?",
    "Hogyan érheted el egy adott kulcs értékét egy objektumban?",
    "Magyarázd el az objektumokban található kulcs-érték párok koncepcióját, és hogy ezek hogyan különböznek a tömbök indexált elemeitől.",
    "Írj le egy forgatókönyvet, amelyben egy objektumot választanál tömb helyett, vagy fordítva, és magyarázd el az indokaidat.",
    "Hogyan érheted el egy tömb első és utolsó elemét?",
    "Sorold fel az öt leggyakrabban használt primitív típust JavaScriptben, és mutass példákat arra, mikor és hogyan használd őket.",
    "Adj példákat JavaScriptben használt értékadó operátorokra.",
    "Nevezz meg néhány aritmetikai operátort JavaScriptben.",
    "Melyek a különböző összehasonlító operátorok JavaScriptben?",
    "Nevezz meg néhány logikai operátort JavaScriptben.",
    "Magyarázd el a for, for of és for in ciklusok közötti különbségeket JavaScriptben.",
    "Hogyan számolnád ki egy tömb értékeinek átlagát, ha nem használhatnál beépített függvényeket?",
    "Mi az a függvény JavaScriptben? Magyarázd el a célját, és hogy hogyan használják a programozásban.",
    "Írd le a JavaScript függvényt alkotó szintaktikai elemeket.",
    "Hogyan adsz át argumentumokat egy függvénynek? Magyarázd el a paraméterátadás fogalmát, és hozz egy példát.",
    "Mi a különbség a függvény kifejezések és deklarációk között? Hozz példákat mindkettőre.",
    "Magyarázd el, mi az a callback függvény JavaScriptben.",
    "Mi a változók hatóköre JavaScript függvényekben? Magyarázd el a lokális és globális változók közötti különbséget.",
    "Melyek a leggyakrabban használt beépített függvények vagy metódusok JavaScriptben szövegek kezelésére? Adj példákat, és magyarázd el a használatukat.",
    "Nevezz meg legalább öt beépített függvényt vagy metódust JavaScriptben tömbök kezelésére. Írd le, hogyan működnek, és hozz példákat.",
    "Hogyan használhatod a JavaScript beépített függvényeit matematikai műveletek végrehajtására? Adj példákat.",
    "Melyek a számok kezelésére szolgáló JavaScript beépített függvények vagy metódusok? Írd le működésüket, és adj példákat.",
    "Beszéld meg a for ciklusok és a forEach metódus közötti különbségeket JavaScriptben.",
    "Magyarázd el a JavaScript objektum adattípus és a DOM adattípus közötti különbséget.",
    "Melyek a szükséges lépések egy HTML elem tartalmának JavaScript segítségével történő módosításához?",
    "Határozd meg, mi az eseményfigyelő (event listener) JavaScriptben.",
    "Vázold fel azokat a lépéseket, amelyekkel megváltoztatod egy HTML elem tartalmát kattintáskor.",
    "Hogyan érheted el azt az elemet, amelyre kattintottál, egy click eseményfigyelőn belül?",
    "Mik a különbségek a display: block, display: inline és display: inline-block CSS tulajdonságok között? Mikor használnád ezeket, és hogyan befolyásolják az elemek elrendezését és viselkedését?",
    "Magyarázd el a position: relative és position: absolute CSS tulajdonságok közötti különbségeket.",
    "Mi az a box model? Nevezd meg a hozzá tartozó CSS tulajdonságokat.",
    "Melyek azok a CSS tulajdonságok, amelyek befolyásolják a betűtípus és szöveg megjelenését?",
    "Sorold fel a lépéseket egy HTML elem osztályának hozzáadásához vagy eltávolításához.",
    "Beszélj a JavaScript objektumok és primitívek közötti érték- és referencia adattípusok közötti különbségekről.",
    "Beszélj a mutabilitás és immutabilitás fogalmáról objektumok, tömbök és primitívek esetén, és magyarázd el, miért fontos ezt megérteni JavaScriptben.",
    "A null objektum vagy primitív JavaScriptben?",
    "Mit képvisel az undefined JavaScriptben?",
    "Mikor használnád a var, let és const kulcsszavakat JavaScriptben?",
    "Magyarázd el a hoisting fogalmát JavaScriptben.",
    "Beszélj a verziókövető rendszer használatának előnyeiről.",
    "Magyarázd el a Git és a GitHub közötti különbségeket.",
    "Mi a célja a távoli tárolóknak (remote repositories) a Gitben?",
    "Mikor fordul elő merge konfliktus Gitben?",
    "Hogyan futtatnál egy JavaScript fájlt terminálban?",
    "Mi a billentyűparancs a futó folyamat leállítására a terminálban?",
    "Hogyan hívhatod vissza a terminálban végrehajtott előző parancsot?",
    "Hogyan navigálhatsz az aktuális könyvtár szülőkönyvtárába a terminálban?",
    "Milyen technikákat használhatsz egy program hibakeresése során?",
    "Mit jelent a „step over”, „step into” és „step out” a hibakereső használata során?",
    "Hogyan tudsz hibakeresést indítani egy adott sorból a debugger használatával?"
];
  
for (let i = 0; i < questions.length; i++){
    data[i].question = questions[i];
}

const chatGPTAnswers = [
    "Objektumok kulcs-érték párokat tárolnak, tömbök indexált adatokat, primitívek egyszerű adattípusok.",
    "Egy objektum kulcsának értéke elérhető: obj.kulcs vagy obj['kulcs'].",
    "Kulcsok nevesítettek az objektumban, indexek számalapúak a tömbben.",
    "Objektumot választasz nevesített tulajdonságokhoz, tömböt sorrendhez.",
    "Tömb első eleme: arr[0], utolsó eleme: arr[arr.length - 1].",
    "String, Number, Boolean, Null, Undefined. Pl.: let name = 'John'.",
    "Értékadó operátorok: =, +=, -=, *=, /=.",
    "Aritmetikai operátorok: +, -, *, /, %.",
    "Összehasonlító operátorok: ==, ===, !=, !==, <, >.",
    "Logikai operátorok: &&, ||, !.",
    "For ciklus számlálóval iterál, for of iterálható elemek felett, for in objektum kulcsain.",
    "Tömb átlagához: összeg+darabszám osztással.",
    "Függvény újrahasznosítható kódblokkok műveletekre.",
    "Függvény szintaxisa: function név(paraméterek) { törzs }.",
    "Paraméterátadás: Érték vagy referencia alapján, pl.: myFunc(42).",
    "Függvény deklaráció: function foo() {}. Kifejezés: const foo = function() {}.",
    "Callback függvény: Függvény, amit másik függvény hív meg.",
    "Globális változó bárhonnan elérhető, lokális csak a függvényben.",
    "Szöveg metódusok: toUpperCase(), toLowerCase(), trim().",
    "Tömb metódusok: push(), pop(), map(), filter(), reduce().",
    "Matematikai függvények: Math.sqrt(4), Math.round(3.5).",
    "Számok metódusai: toFixed(), parseInt().",
    "For ciklus rugalmasabb, forEach egyszerűbb, nem szakítható meg.",
    "Objektum: JavaScript adat, DOM: HTML elemek reprezentációja.",
    "HTML elem módosítása: document.querySelector().innerText.",
    "Eseményfigyelő: Kód, ami reagál eseményekre.",
    "HTML elem módosítása kattintásra: click esemény létrehozásával.",
    "Kattintott elem elérése: esemény target tulajdonságával.",
    "Display block új sorba tör, inline egy sorban, inline-block méretezhető.",
    "Position relative saját helyzethez képest, absolute szülőhöz képest.",
    "Box model: Margin, Border, Padding, Content.",
    "Betűtípus tulajdonságok: font-size, color, text-align.",
    "HTML osztály hozzáadása: element.classList.add().",
    "Primitívek érték alapúak, objektumok referencia alapúak.",
    "Primitívek immutábilisak, objektumok és tömbök mutábilisak.",
    "Null primitív, üres értéket jelent.",
    "Undefined nem definiált érték.",
    "Var globális vagy funkció szintű, let blokk szintű, const nem változtatható.",
    "Hoisting: Változók és függvények 'felhúzása' a kód tetejére.",
    "Verziókövetés előnyei: változások követése, csapatmunka.",
    "Git: Verziókezelő rendszer, GitHub: Tárolók hosztolása.",
    "Távoli tárolók célja: Tárolók megosztása és szinkronizálása.",
    "Merge konfliktus: Két módosítás ütközik.",
    "JavaScript fájl futtatása: node file.js.",
    "Folyamat leállítása terminálban: Ctrl + C.",
    "Előző parancs visszahívása: Fel nyíl.",
    "Szülőkönyvtárba navigálás: cd ..",
    "Hibakeresés: Debugger, console.log, tesztek.",
    "Step over: Következő sor, Step into: Függvény belépés, Step out: Függvény kilépés.",
    "Hibakeresés adott sorból: Breakpoint beállítása."
  ];

for (let i = 0; i < chatGPTAnswers.length; i++){
    let GPTanswer = {name: "ChatGPT", answer: chatGPTAnswers[i]}
    data[i].answers.push(GPTanswer);
}
  

export {data};

