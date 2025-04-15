

const data = [
    {
        category: "Javascript Language Features",
        question: "What is ECMAScript? What is the difference between Javascript & ECMAScript?",
        answers: [
            {
                name: "Viki",
                answer: `ECMAScript egy szabvány, amit az ECMA International szervezet tart fenn. Ez határozza meg, hogyan működjön a nyelv alapja: például a változók, függvények, ciklusok, objektumok viselkedését. Az ECMAScript egy nyelvi specifikáció, tehát egy "szabálykönyv".

  A JavaScript viszont egy megvalósítás (implementáció), ami az ECMAScript szabványt követi. A JavaScript nemcsak az ECMAScript szabványt tartalmazza, hanem extra dolgokat is, például a DOM kezelést a böngészőben, API-kat, eseménykezelést stb.

  ECMAScript = a szabvány, a szabályok, amik alapján működnie kell a nyelvnek.
  JavaScript = az egyik legismertebb nyelv, ami az ECMAScript szabványt valósítja meg, és ezen kívül tartalmaz böngészőspecifikus képességeket is.`
            },
            {
                name: "Huni",
                answer: "Az ECMAScript (ES) határozza meg a szabályokat, a Javascript pedig a gyakorlati használatba iktatja őket. A Javascript az ES egy implementációja, kiegészítve egyéb dolgokkal, mint pl. a DOM manipuláció."
            },
            {
                name: "ChatGPT",
                answer: "ECMAScript (ES) is the standard specification that defines the core features of JavaScript. JavaScript itself is an implementation of ECMAScript with additional capabilities, such as the Document Object Model (DOM) for browser interaction. While ECMAScript sets the rules, JavaScript is the practical language developers use in environments like browsers and Node.js."
            }
        ]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the concept of \"block scoping\" introduced in ES6. How does it differ from function scoping?",
        answers: [
            {
                name: "Viki",
                answer: `Block scoping azt jelenti, hogy egy változó csak azon a kódrészen belül elérhető, amelyet blokknak tekintünk. A blokk lehet például egy if, for, vagy while ciklus. Az ES6 bevezette az új let és const kulcsszavakat, amelyek block scoped változókat hoznak létre.
  
  Ezzel szemben function scoping esetén a változók csak a függvényen belül érhetők el, függetlenül attól, hogy a változó milyen kódrészben van deklarálva a függvényen belül. A hagyományos var kulcsszó a function scoped változókat hozza létre.

  - Block scoping: A változó csak a blokk szintjén érhető el, nem léphet ki onnan.
  
  - Function scoping: A változó csak a függvény szintjén érhető el, de a függvényen belüli blokkok nem korlátozzák elérhetőségét.`
            },
            {
                name: "Huni",
                answer: "A Blokk szkóp miatt let-tel és const-tal olyan változókat tudunk létrehozni, amik csak az adott szkópon, blokkon belül érvényesek. Ezzel nagyban megkönnyítjük a tiszta kódot, hiszen a globális változókkal nem kavarodunk össze. Ezzel szemben a function scoping azt jelenti, hogy a var--ral létrehozott változóink olyannyira elérhetőek a teljes függvényünk szkópján, hogy még hoisting-olva is vannak, tehát deklarálás előtt is elérjük őket."
            },
            {
                name: "ChatGPT",
                answer: "Block scoping (introduced with let and const) means variables are only accessible within the block {} in which they are defined. This prevents unintentional variable leakage outside loops, conditionals, or functions.\n\nIn contrast, function scoping (used by var) means a variable is accessible throughout the entire function, even before declaration (due to hoisting). This can lead to unexpected behavior when variables are used outside their intended scope."
            }]
    },
    {
        category: "Javascript Language Features",
        question: "What are template literals in ES6 and how do they improve string manipulation in JavaScript?",
        answers: [
            {
                name: "Viki",
                answer: `A template literal (sablon literál) az ES6-ban bevezetett új szintaktika a sztringek kezelésére. A sablon literálokat \` (backtick) karakterek közé írjuk, nem pedig a hagyományos ' vagy " karakterek közé, mint a szokásos sztringeket. Ez lehetővé teszi a dinamikus sztringek egyszerűbb létrehozását és manipulálását.  A template literálok előnyei:
  
- String interpoláció: A sablon literálok segítségével egyszerűen beágyazhatunk változókat vagy kifejezéseket egy sztringbe \${} szintaxis használatával. Így elkerülhetjük a + operátor használatát.
  
- Többsoros sztringek: A template literálok lehetővé teszik a több sorba tördelést anélkül, hogy speciális karaktereket kellene használni, mint a \n.
  
- Kifejezések és függvények: Kifejezéseket vagy akár függvényeket is beágyazhatunk a \${} közé, nemcsak változókat.`
            },
            {
                name: "ChatGPT",
                answer: "Template literals use backticks (`) instead of quotes and allow embedding expressions using ${}.\n\nThey enhance string manipulation by supporting:\n- Multiline strings without \\n\n- String interpolation for embedding variables or expressions\n- Tagged templates for custom parsing"
            }]
    },
    {
        category: "Javascript Language Features",
        question: "What is the \"spread operator\" in ES6 and how can it be used to manipulate arrays and objects more effectively?",
        answers: [
            {
                name: "Viki",
                answer: `A spread operator (...) az ES6-ban bevezetett szintaktikai elem, amely lehetővé teszi egy tömb vagy objektum eleminek egyszerű kibővítését vagy "szétterítését". Ez különösen hasznos lehet tömbök, objektumok másolásakor, vagy amikor új értékeket szeretnénk hozzáadni egy már létező tömbhöz vagy objektumhoz.

A spread operator használata:

- Tömböknél: A spread operator segítségével könnyen másolhatunk tömböket vagy egyesíthetjük őket.

- Objektumoknál: Az objektumoknál is használható a spread operator, hogy egy új objektumot hozzunk létre a meglévő objektum másolataként, vagy új kulcsokat adjunk hozzá.
`
            },
            {
                name: "ChatGPT",
                answer: "The spread operator (...) expands elements of an iterable (array, object, etc.) into individual elements.\n\nUsage:\n- Arrays: Copy, merge, or expand elements\n- Objects: Clone or merge properties\n\nExample:\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]\nconst obj1 = {a: 1, b: 2};\nconst obj2 = {...obj1, c: 3}"
            }]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the concept of \"destructuring assignment\" in ES6. How does it simplify variable assignment and object/array manipulation?",
        answers: [
            {
                name: "Viki",
                answer: `A destructuring assignment egy ES6-ban bevezetett JavaScript szintaxis, amellyel egyszerűen kibontjuk az objektumok vagy tömbök értékeit külön változókba. Ezáltal gyorsabban és átláthatóbban lehet értékeket kinyerni komplex adatstruktúrákból.

Miért jó?
- Egyszerűsíti a kódot: nem kell külön user.name stb. írni.
- Olvashatóbb lesz a kód, főleg ha sok értéket kell kinyerni.
- Hasznos függvények paramétereinek destructuring esetén is.`
            },
            {
                name: "ChatGPT",
                answer: "Destructuring allows unpacking values from arrays or properties from objects into variables in a concise way.\n\nExample:\nconst [x, y] = [10, 20]; // x = 10, y = 20\nconst {name, age} = {name: \"John\", age: 30};\n\nIt simplifies accessing nested values, default values, and swapping variables."
            }
        ]
    },
    {
        category: "Javascript Language Features",
        question: "How does ES6 introduce the concept of \"default function parameters\"? Provide an example of using default parameters in a function.",
        answers: [
            {
                name: "Viki",
                answer: `Az ES6 bevezette az alapértelmezett paramétereket a függvényekhez. Ez azt jelenti, hogy ha egy függvényhíváskor nem adsz meg értéket egy paraméternek, akkor a megadott alapértelmezett értéket fogja használni.
    Ez leegyszerűsíti a kódot, mert nem kell külön ellenőrizni, hogy egy paraméter undefined-e, és nem kell if-ekkel vagy ||-al megadni alapértékeket.

      Miért hasznos?
        - Elkerüli az undefined értékeket, ha egy paraméter kimarad.
        - Egyszerűsíti a kódot, mert nem kell if-feltételekkel ellenőrizni, hogy van-e érték megadva.`
            },
            {
                name: "ChatGPT",
                answer: "ES6 allows setting default values for function parameters when no arguments are passed, preventing undefined values.\n\nExample:\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet()); // Hello, Guest!\n\nThis improves function reliability and avoids manual checks for undefined parameters."
            }
        ]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the concept of \"modules\" introduced in ES6. How do they improve code organization and reusability in JavaScript?",
        answers: [
            {
                name: "Viki",
                answer: `Az ES6 modulok egy új szabványt hoztak a JavaScript-be, amely lehetővé teszi a kód felosztását kisebb, újrafelhasználható fájlokra. Egy modul tartalmazhat változókat, függvényeket vagy osztályokat, amiket exportálhatsz és importálhatsz más fájlokba.

  Hogyan segítik a modulok a kód szervezését és újrafelhasználhatóságát?
  Átláthatóbbá teszik a projektet, mert kisebb, jól elkülönített fájlokra bontod a logikát.
  Újrafelhasználható kódrészeket hozol létre: egy modul többször is használható különböző helyeken.
  Elkerülhetők a névütközések, mert minden modul a saját hatókörében működik.

    math.js:
    export function osszead(a, b) {
        return a + b;
    }

    export const PI = 3.14;

      import { osszead, PI } from './math.js';

    Miért jó ez?
        - Nem kell mindent egy nagy fájlba írni.
        - Könnyebb karbantartani és bővíteni.
        - Modulonként tesztelhető a kód.`
            },
            {
                name: "ChatGPT",
                answer: "ES6 modules allow code to be split into reusable files using import and export.\n\nThey help in:\n- Encapsulation: Prevents global namespace pollution\n- Reusability: Code can be shared across different files\n- Lazy loading: Only loads what’s needed\n\nExample:\n// math.js\nexport function add(a, b) { return a + b; }\n\n// main.js\nimport { add } from \"./math.js\";\nconsole.log(add(2, 3)); // 5"
            }
        ]
    },
    {
        category: "Javascript Language Features",
        question: "Compare the CommonJS and ES6 \"modules\". What are the differences?",
        answers: [
            {
                name: "Viki",
                answer: `Mindkettő modulrendszer, de különböző környezetekben és különbözőképp működnek.
    
    Fő különbségek röviden:
    CommonJS → Szinkron, főleg Node.js-ben, régebbi szabvány.
    ES6 Modulok → Modern, aszinkron, működik a böngészőkben és Node.js-ben is.`
            },
            {
                name: "ChatGPT",
                answer: "Feature:\nCommonJS (require)\nES6 Modules (import/export)\n\nSyntax:\nCommonJS: const x = require('module')\nES6: import x from 'module'\n\nExecution:\nCommonJS: Synchronous (blocking)\nES6: Asynchronous (non-blocking)\n\nScope:\nCommonJS: Exports as an object\nES6: Can export multiple named items\n\nUsage:\nCommonJS: Node.js (default)\nES6: Browsers and Node.js (with bundlers)\n\nCommonJS is used in older Node.js versions, while ES6 modules are the modern standard."
            }
        ]
    },
    {
        category: "Javascript Language Features",
        question: "What are higher-order functions in JavaScript?",
        answers: [
            {
                name: "Viki",
                answer: `Másik függvényt kap paraméterként, vagy
    Másik függvényt ad vissza eredményként.
    Ez lehetővé teszi, hogy rugalmasabban kezeljük a kódot, és segít az abstrakcióban és az újrafelhasználhatóságban.

      function greet(callback) {
        callback();
      }

      function sayHello() {
        console.log("Hello, world!");
      }

      greet(sayHello);  // Calls the sayHello function

    Gyakori higher-order függvények a JavaScript-ben:
    - map()
    - filter()
    - reduce()`
            },
            {
                name: "ChatGPT",
                answer: "A higher-order function is a function that:\n- Takes another function as an argument, OR\n- Returns a function\n\nThey allow for functional programming patterns like callbacks, closures, and currying.\n\nExample:\nfunction operate(fn, a, b) {\n  return fn(a, b);\n}\nconsole.log(operate((x, y) => x + y, 5, 3)); // 8"
            }]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the purpose and functionality of the map function in JavaScript. How does it differ from the filter and reduce functions?",
        answers: [
            {
                name: "Viki",
                answer: `A map() egy beépített tömb metódus, ami végigmegy egy tömb minden elemén, és minden elemre alkalmaz egy függvényt. Az eredmény egy új tömb, ami az eredeti tömb módosított verzióját tartalmazza.
    Fontos: Az eredeti tömb nem változik meg.

    Hogyan működik?
    - A map() bejárja a tömböt
    - Minden elemre meghív egy callback függvényt
    - Az eredményeket összegyűjti egy új tömbbe

    Miben különbözik a filter() és reduce() függvényektől?
    - map()	Átalakítja a tömb minden elemét	Új tömb ugyanannyi elemmel
    - filter()	Kiszűri azokat az elemeket, amik megfelelnek a feltételnek	Új tömb kevesebb vagy ugyanannyi elemmel
    - reduce()	Az összes elemből egyetlen értéket számol ki (pl. összegzés)	Egy érték (nem feltétlen tömb!)`
            },
            {
                name: "ChatGPT",
                answer: "The map() function creates a new array by applying a function to each element of the original array.\n\nExample:\nconst nums = [1, 2, 3];\nconst squared = nums.map(n => n * n); // [1, 4, 9]\n\nDifferences:\n- filter(): Returns elements that meet a condition\n- reduce(): Aggregates elements into a single value"
            }]
    },
    {
        category: "Javascript Language Features",
        question: "How can the filter function be used to selectively extract elements from an array based on a given condition? Provide an example where the filter function is used to create a new array with only the elements that meet the specified criteria.",
        answers: [
            {
                name: "Viki",
                answer: `A filter függvény egy JavaScript beépített metódus, amelyet arra használunk, hogy egy tömbből csak azokat az elemeket tartsuk meg, amelyek megfelelnek egy adott feltételnek.

    A filter egy új tömböt hoz létre a megadott feltételnek megfelelő elemekkel, miközben az eredeti tömb érintetlen marad.

      Tegyük fel, hogy van egy tömbünk számokkal, és csak a páros számokat szeretnénk megtartani:

              const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
              const evenNumbers = numbers.filter(num => num % 2 === 0);
              console.log(evenNumbers); // [2, 4, 6, 8, 10]

    - A filter minden egyes elemre lefuttat egy függvényt.
    - Ha a feltétel (num % 2 === 0) igaz, akkor az adott elem bekerül az új tömbbe.
    - Az eredeti numbers tömb nem változik.`
            },
            {
                name: "ChatGPT",
                answer: "filter() creates a new array containing elements that satisfy a condition.\n\nExample: Extract even numbers:\n\nconst numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\n\nIt’s useful for removing unwanted data or refining search results."
            }]
    },
    {
        category: "Javascript Language Features",
        question: "What is the role of the reduce function in JavaScript? How can it be used to aggregate or combine the elements of an array into a single value? Provide an example where the reduce function is used to calculate a cumulative sum or find the maximum value in an array.",
        answers: [
            {
                name: "Viki",
                answer: `Reduce: egy tömb elemeit egyetlen értékké összevonja vagy aggregálja. A reduce függvény egy accumulátor (felhalmozó) változót használ, amely minden egyes elem feldolgozása után frissül, és a végén egyetlen értéket ad vissza

    Hogyan működik?
    A reduce egy callback függvényt vár, amely két paramétert kap:
    - Accumulator (acc) – Az eddig összegyűjtött érték.
    - Current Value (cur) – Az aktuális elem a tömbben, amelyet a reduce éppen feldolgoz.

    A reduce függvény két fontos paramétert is fogad:
    - Callback függvény: Amely a fent említett két paraméterrel dolgozik.
    - Initial Value (nem kötelező): A kezdő érték az acc számára. Ha nem adjuk meg, akkor az első elem lesz az alapértelmezett érték.
    
    Példa:
          const numbers = [1, 2, 3, 4, 5];
          const sum = numbers.reduce((acc, cur) => acc + cur, 0);
          console.log(sum); // Kimenet: 15

    Magyarázat:
          - Az acc kezdetben 0 (mivel ezt adtuk meg kezdőértékként).
          - Az első elemhez (1) hozzáadjuk az acc-ot, tehát 0 + 1 = 1, majd a következő elemhez folytatódik a művelet, és így tovább.
          - A végén a reduce a teljes összeggel tér vissza.

        A reduce egy erőteljes eszköz JavaScript-ben, amely lehetővé teszi a tömb elemeinek összevonását vagy aggregálását egyetlen értékké. Az ilyen típusú műveletek segíthetnek egyszerűsíteni a kódot és elkerülni a ciklusok használatát.`
            },
            {
                name: "ChatGPT",
                answer: "reduce() processes an array to compute a single value, such as sum, max, or aggregation.\n\nExample: Sum of numbers:\nconst numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10\n\nThe first argument is a callback that processes each element.\n\nThe second argument (initial value) determines how aggregation starts.\n\nOther uses: Finding max, flattening arrays, and transforming data."
            }
        ]
    },
    {
        category: "Fetch",
        question: "How does a query string parameter in a URL contribute to web application functionality? Explain how query string parameters are typically used to pass data between web pages or APIs.",
        answers: [
            {
                name: "Viki",
                answer: `A lekérdezési karakterlánc (query string) paramétere egy URL-ben hozzájárul a webalkalmazás funkcionalitásához azáltal, hogy lehetővé teszi adatok átadását weboldalak vagy API-k között. Általában kis mennyiségű adat, például felhasználói beállítások, keresési kifejezések, szűrők vagy hitelesítési tokenek továbbítására használják, anélkül hogy módosítanák az URL útvonalát.

  A query string paraméterek a ? szimbólum után következnek egy URL-ben, és kulcs-érték párok formájában (kulcs=érték) vannak megadva. Több paramétert az & szimbólum választ el egymástól.
  Például: https://example.com/search?query=javascript&page=2
  Ebben az esetben a query=javascript és a page=2 paraméterek segítenek a webalkalmazásnak a megfelelő keresési találatok megjelenítésében.

  API-k esetében a query paramétereket gyakran használják adatok szűrésére, rendezésére vagy lapozására. Például egy időjárás API így működhet:
  https://api.weather.com/data?city=London&units=metric
  Itt a city=London meghatározza a helyszínt, míg a units=metric beállítja a hőmérsékleti mértékegységet.

  A query paraméterek egyszerűen használhatók, de biztonságosan kell kezelni őket, különösen érzékeny adatok esetén, mivel az URL-ben láthatók és könnyen módosíthatók a felhasználók által.

  ANSWER ENG:
  A query string parameter in a URL contributes to web application functionality by allowing data to be passed between web pages or APIs. It is typically used to send small amounts of data, such as user preferences, search terms, filters, or authentication tokens, without modifying the URL path.

  Query string parameters follow the ? symbol in a URL and are structured as key-value pairs (key=value). Multiple parameters are separated by an & symbol.`
            },
            {
                name: "ChatGPT",
                answer: "Query string parameters allow data to be passed between web pages or APIs via the URL. They appear after a ? in the URL and are formatted as key-value pairs (key=value). They are commonly used for filtering, pagination, search queries, and user preferences. For example, example.com/products?category=shoes&sort=price_asc enables dynamic content rendering without modifying the page structure."
            }
        ]
    },
    {
        category: "Fetch",
        question: "What is the purpose and functionality of the fetch function in JavaScript?",
        answers: [
            {
                name: "Viki",
                answer: `A fetch függvény JavaScript-ben hálózati kérések küldésére szolgál, általában adatok lekérésére egy szerverről vagy adatok küldésére egy API-nak. A fetch egy modern alternatívája az XMLHttpRequest-nek, és Promise alapú, így könnyebben kezelhetők az aszinkron műveletek.

  Célja és működése:
  A fetch segítségével HTTP kéréseket küldhetünk (GET, POST, PUT, DELETE, stb.).
  Egy Promise-t ad vissza, amely egy Response objektummá alakul, tartalmazva az állapotkódot és a fejléceket.
  Az adatok kinyerhetők a .json(), .text() vagy .blob() metódusokkal.
  Támogatja a további opciókat, például a fejlécek beállítását, törzstartalmat és hitelesítési tokeneket.`
            },
            {
                name: "ChatGPT",
                answer: "The fetch() function is used to make network requests, typically to APIs, and retrieve resources asynchronously. It provides a modern alternative to XMLHttpRequest, returning a Promise that resolves with the response data. It supports various HTTP methods (GET, POST, PUT, DELETE) and allows handling responses in JSON, text, or other formats."
            }
        ]
    },
    {
        category: "Fetch",
        question: "Explain the syntax of the fetch function and how it handles asynchronous operations. Compare and contrast the syntax of making HTTP requests using fetch with async/await versus the syntax using .then() and .catch(). What are the key differences and benefits of using the async/await syntax in terms of code structure and readability?",
        answers: [
            {
                name: "Viki",
                answer: `A fetch egy beépített JavaScript API, amely HTTP-kéréseket küld és aszinkron módon dolgozza fel azokat. Ez a függvény egy Promise-t ad vissza, amely kétféleképpen kezelhető: .then() és .catch() metódusokkal, vagy async/await szintaxissal.

    1.  Fetch használata .then() és .catch() metódusokkal
        A fetch() Promise-t ad vissza, így a kérések válasza .then() és .catch() metódusokkal kezelhető:

        fetch('https://api.example.com/data')
        .then(response => {
        if (!response.ok) {
        throw new Error("........");
        }
        return response.json();
        })
        .then(data => {
        console.log('Fetched data:', data);
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });

        fetch() elindítja a kérést és visszaad egy Promise-t.
        Az első .then() a válasz objektumot kezeli. Ha a válasz nem megfelelő (!response.ok), hibát dob.
        A második .then() a JSON formátumú adatokkal dolgozik.
        A .catch() az összes hibát elkapja, ami a fetch vagy az előző then() blokkokban történt.

    2.  Fetch használata async/await szintaxissal
        Az async/await szintaxis tisztább és olvashatóbb megoldást nyújt:

        async function fetchData() {
        try {
        const response = await fetch('https://api.example.com/data');

                if (!response.ok) {
                throw new Error("......");
                }

                const data = await response.json();
                console.log('Fetched data:', data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
            }

            fetchData();
            Az await fetch(url) megvárja, hogy a kérés befejeződjön, majd visszaadja a választ.
            Ha a válasz nem megfelelő, egy hibát dobunk a throw new Error() segítségével.
            Az await response.json() átalakítja a választ JSON formátumra.
            A try...catch blokk kezeli az esetleges hibákat.

    Összehasonlítás: .then() vs async/await
    Szempont .then() és .catch() async/await
    Szintaxis Láncolt .then() és .catch() metódusok try...catch blokkokkal működik
    Kód olvashatósága Nehezen olvasható, "callback hell"-hez vezethet Könnyen érthető, szekvenciális
    Hibakezelés .catch()-ben kezelhető try...catch egyszerűbbé teszi
    Felhasználási helyzet:
    Egyszerűbb kérésekhez, amikor nincs sok logika Összetettebb műveletekhez jobb
    Legfőbb előnyök az async/await esetén:
    ✅ Könnyebben olvasható, mert úgy néz ki, mintha szinkron kód lenne.
    ✅ Egyszerűbb hibakezelés a try...catch segítségével.
    ✅ Jobb szerkezetű kód, főleg összetettebb műveleteknél.`
            },
            {
                name: "ChatGPT",
                answer: "The fetch() function returns a Promise, meaning it handles asynchronous operations.\n\nUsing .then() and .catch():\n\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n\nUsing async/await:\n\nasync function fetchData() {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\nfetchData();\n\nKey Differences:\n- async/await makes code look more synchronous and easier to read.\n- .then() creates nested callbacks, which can lead to callback chaining.\n- async/await handles errors more cleanly with try...catch."
            }
        ]
    },
    {
        category: "Fetch",
        question: "What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed.",
        answers: [
            {
                name: "Viki",
                answers: `Az aszinkronitás azt jelenti, hogy bizonyos műveletek (például hálózati kérések, időzítők) nem akadályozzák a program további végrehajtását.
  Ahelyett, hogy egy hosszú művelet befejeződésére várna a program, folytatja a kód futtatását, és később kezeli az eredményt.

  A JavaScript az eseményciklus (event loop) segítségével kezeli az aszinkron műveleteket, így a böngésző nem fagy le, és a felhasználói élmény folyamatos marad.

  Mikor van szükség aszinkronitásra?
  - API-hívások és adatok lekérése (pl. fetch használata)
      Példa: A NASA APOD API lekérése és az űrfotók megjelenítése a webalkalmazásodban.
  - Felhasználói események kezelése
      Példa: Egy gombnyomás vagy űrlap beküldés feldolgozása anélkül, hogy a weboldal lefagyna.
  - Időzített műveletek (setTimeout, setInterval)
      Példa: Egy animáció elindítása 2 másodperces késleltetéssel.
  - Fájlok olvasása és írása (Node.js-ben)
      Példa: Egy nagy JSON fájl beolvasása a szerveren anélkül, hogy a többi kérést blokkolná.
  - Adatbázis-lekérdezések
      Példa: Egy webalkalmazásban a felhasználói adatok betöltése a háttérben.
  - WebSocket-ek és valós idejű adatok kezelése
      Példa: Tőzsdei árfolyamok folyamatos frissítése egy pénzügyi alkalmazásban.
  - Aszinkron animációk és átmenetek
      Példa: Egy CSS animáció befejeződésének megvárása, mielőtt egy másik műveletet elindítunk.`
            },
            {
                name: "ChatGPT",
                answer: "Asynchronicity allows JavaScript to execute code without blocking the main thread, enabling smooth performance in web applications.\n\nIt’s necessary for:\n- Fetching data from APIs (e.g., fetch(), XMLHttpRequest).\n- Handling user input events without freezing the UI.\n- Reading/writing files in Node.js.\n- Timers (setTimeout, setInterval).\n- WebSockets for real-time communication."
            }
        ]
    },
    {
        category: "Fetch",
        question: "How can you handle the response received from a fetch request?",
        answers: [
            {
                name: "Viki",
                answer: `Amikor egy fetch kérést indítunk JavaScript-ben, az egy Promise-t ad vissza, amely egy Response objektumra oldódik fel.
  Az adatok kinyeréséhez általában a .json(), .text(), vagy .blob() metódust használjuk.

  async function fetchData() {
  try {
  const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  if (!response.ok) {
  throw new Error(".....");
  }
  const data = await response.json(); // JSON formátumra alakítás
  console.log(data); // Adatok feldolgozása
  } catch (error) {
  console.error("Hiba a lekérés során:", error);
  }
  }

  fetchData();`
            },
            {
                name: "ChatGPT",
                answer: "Responses from fetch() need to be processed since they are Response objects.\n\nTypically, you:\n- Check if the response was successful (response.ok).\n- Convert it to JSON (response.json()).\n- Handle data or errors appropriately.\n\nExample:\nfetch('https://api.example.com/data')\n  .then(response => {\n    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Fetch error:', error));"
            }
        ]
    },
    {
        category: "Fetch",
        question: "How does the fetch function handle errors and handle HTTP status codes? Provide an example of using fetch to handle different types of responses, including successful and error responses.",
        answers: [
            {
                name: "Viki",
                answer: `The fetch function does not automatically reject the Promise if the response has an HTTP error status (e.g., 404 or 500).
  It only rejects if there is a network error (e.g., no internet connection).

  To properly handle HTTP errors, we need to manually check the response status using response.ok (which is true for status codes 200-299) or inspect response.status.

  async function fetchWithStatusHandling() {
    try {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=INVALID_KEY");

        switch (response.status) {
        case 200:
            const data = await response.json();
            console.log("Success:", data);
            break;
        case 400:
            console.error("Bad Request: The API key might be incorrect.");
            break;
        case 403:
            console.error("Forbidden: You don't have access.");
            break;
        case 404:
            console.error("Not Found: The requested resource does not exist.");
            break;
        case 500:
            console.error("Server Error: Try again later.");
            break;
        default:
            console.error(".....");
        }

    } catch (error) {
        console.error("Network or Fetch error:", error.message);
    }
    }

    fetchWithStatusHandling();`
            },
            {
                name: "ChatGPT",
                answer: "fetch() only rejects when there’s a network failure, not on HTTP errors like 404 or 500. You must manually check response.ok and response.status.\n\nExample:\nasync function fetchWithErrorHandling() {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\nfetchWithErrorHandling();\n\nThis ensures proper error handling for both network and HTTP status-related issues."
            }
        ]
    },
    {
        category: "Fetch",
        question: "Explain the parts of a URL.",
        answers: [
            {
                name: "Viki",
                answer: `Az URL (Uniform Resource Locator) egy internetes cím, amely egy adott erőforrás elérésére szolgál.
    Több részből áll, amelyek mind külön funkciót látnak el. 

    1. Scheme:
    - Meghatározza az adatátvitel módját.
    - pl.: https://
    - Communication protocol
    - url.protocol

    2. Host:
    - Hoszt (Domain név vagy IP-cím), Azonosítja azt a szervert, ahol az oldal található.
    - pl.: www.example.com
    - Server domain name or IP
    - url.host

    3. Port:
    - Megadja a szerveren használt kommunikációs portot.
    - pl.: ":8080"
    - (Optional) Server port
    . url.port

    4. Path:
    - Az erőforrás helyét jelöli a szerveren. Olyan, mint egy könyvtár vagy fájlszerkezet egy számítógépen.
    - pl.: /path/to/page
    - Resource location on server
    - url.pathname

    5. Query:
    - Extra adatokat küld a szervernek. ? jellel kezdődik, és kulcs-érték párokat tartalmaz &-el elválasztva.
    - pl.: ?search=query	    
    - (Optional) Parameters for the request
    - url.search

    6. Fragment:
    - Egy adott részhez ugrik az oldalon belül. Nem küldődik el a szervernek, csak a böngésző használja.
    - pl.: #section
    - (Optional) In-page navigation
    - url.hash`
            },
            {
                name: "ChatGPT",
                answer: "A URL (Uniform Resource Locator) consists of several parts:\n- Scheme/Protocol: (https://) Specifies how data is transferred.\n- Domain/Host: (www.example.com) Identifies the server.\n- Port (Optional): (:443 for HTTPS, :80 for HTTP) Specifies the connection port.\n- Path: (/products/shoes) Defines the resource location.\n- Query String: (?category=running&sort=price_asc) Contains parameters for filtering or searching.\n- Fragment (Optional): (#section3) Points to a specific section on the page."
            }]
    },
    {
        category: "Responsive Design",
        question: "What does responsive design do? Why is it important?",
        answers: [
            {
                name: "Viki",
                answer: `A reszponzív dizájn lehetővé teszi, hogy egy weboldal különböző képernyőméreteken is jól nézzen ki és használható maradjon.
  Mivel a legtöbb ember mobiltelefonról böngészi az internetet, fontos, hogy az oldal alkalmazkodjon a kisebb kijelzőkhöz is.`
            },
            {
                name: "ChatGPT",
                answer: "Responsive design allows websites and applications to adapt seamlessly to different screen sizes and orientations. It ensures that the layout, images, and text look good and function properly on all devices—from desktops to smartphones.\n\nIt’s important because users access websites from a variety of devices, and poor responsiveness can lead to a bad user experience, loss of engagement, or even lost customers."
            }]
    },
    {
        category: "Responsive Design",
        question: "What is a mobile-first approach?",
        answers: [
            {
                name: "Viki",
                answer: `A mobile-first megközelítés azt jelenti, hogy a weboldal tervezése először a kisebb kijelzőkre történik, majd fokozatosan optimalizáljuk nagyobb képernyőkre.`
            },
            {
                name: "ChatGPT",
                answer: "A mobile-first approach means designing the layout and functionality for the smallest screen size first, then gradually enhancing it for larger screens. This strategy ensures that core features work well on mobile, and additional enhancements are layered in as screen real estate increases. It supports performance, accessibility, and clean code structure."
            }]
    },
    {
        category: "Responsive Design",
        question: "How can you test the website's appearance on different screen sizes in the browser?",
        answers: [
            {
                name: "Viki",
                answer: `  - Fejlesztői konzol megnyitása: Nyomd meg az F12 billentyűt Chrome-ban vagy Firefoxban.
  - Reszponzív mód bekapcsolása: Nyomd meg a CTRL + SHIFT + M billentyűkombinációt, vagy keresd meg az ikonokat (Chrome-ban bal felső sarok, Firefoxban jobb felső sarok).
  - Képernyőméretek váltása: A reszponzív nézetben beállíthatod, hogy milyen méretű eszközön szeretnéd ellenőrizni az oldal kinézetét.`
            },
            {
                name: "ChatGPT",
                answer: "You can test responsiveness using the DevTools in modern browsers like Chrome or Firefox.\n\n- Press F12 or right-click → “Inspect”\n- Then click the device toolbar icon (usually a small phone/tablet symbol)\n- From there, you can simulate different screen sizes or select popular devices like iPhone, iPad, or Galaxy.\n- You can also manually resize the browser window to test fluid behavior."
            }
        ]
    },
    {
        category: "Responsive Design",
        question: "Can you give some techniques that help to fulfill the responsive design criteria?",
        answers: [
            {
                name: "Viki",
                answer: `  1. Viewport meta tag:
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    Ez biztosítja, hogy az oldal igazodjon az eszköz képernyőjének méretéhez.

  2. Media Queries (média lekérdezések):
    @media (min-width: 768px) {
    body {
    background-color: lightblue;
    }
    }
    Ezzel a képernyőméret alapján módosíthatjuk a dizájnt.

  3. Flexbox használata rugalmas elrendezéshez:
    .container {
    display: flex;
    flex-wrap: wrap;
    }
    Segít az elemek elrendezésében és méretezésében.

  4. Reszponzív képek:
    img {
    max-width: 100%;
    height: auto;
    }
    A képek nem lépik túl a rendelkezésre álló helyet.`
            },
            {
                name: "ChatGPT",
                answer: "Yes, some key techniques include:\n- Flexible grid layouts using CSS Grid or Flexbox\n- Relative units like %, em, rem, or vw/vh instead of fixed pixels\n- Media queries to apply different styles at different screen widths\n- Responsive images using max-width: 100% and the srcset attribute\n- Mobile-first CSS to prioritize smaller screens and scale up"
            }
        ]
    },
    {
        category: "Responsive Design",
        question: "What do media queries do? How do they work?",
        answers: [
            {
                name: "Viki",
                answer: `A media query-k lehetővé teszik, hogy a CSS szabályok a képernyő tulajdonságai (például szélessége) alapján változzanak.

  @media (min-width: 600px) {
  body {
    background-color: lightgray;
  }}
  Ez a szabály csak akkor aktiválódik, ha a képernyő szélessége legalább 600px.

  A média lekérdezések szintaxisa:
  @media media-type and (rule1) and (rule2) {}`
            },
            {
                name: "ChatGPT",
                answer: "Media queries are CSS rules that apply styles based on conditions like screen width, height, orientation, or resolution.\n\nThey work by checking if a device matches the specified condition. If it does, the contained styles are applied.\n\nExample:\n@media (max-width: 768px) {\n  .menu { flex-direction: column; }\n}\n\nThis changes the .menu layout only when the screen is 768px wide or less."
            }
        ]
    },
    {
        category: "Responsive Design",
        question: "How would you define the Flexbox layout?",
        answers: [
            {
                name: "Viki",
                answer: `  A Flexbox egy egydimenziós elrendezési modell a CSS-ben, amely lehetővé teszi az elemek elrendezését és igazítását egy konténerben sorokban vagy oszlopokban. 
  
  Egyszerűsíti a bonyolult elrendezéseket, és hatékony módot kínál a tér elosztására egy konténeren belül.
  
  Olyan tulajdonságokkal, mint a flex-direction, justify-content és align-items, a Flexbox egyszerűsíti az elemek elhelyezését és igazítását a konténerben.`
            },
            {
                name: "ChatGPT",
                answer: "Flexbox (Flexible Box Layout) is a CSS layout model designed for arranging items in one dimension — either as rows or columns. It distributes space dynamically and aligns items easily, even when their sizes are unknown or change. It’s especially useful for responsive and component-based designs."
            }
        ]
    },
    {
        category: "Responsive Design",
        question: "How can you debug the Flexbox layout in the browser?",
        answers: [
            {
                name: "Viki",
                answer: `  A Flexbox elrendezés hibakereséséhez a böngészők beépített fejlesztői eszközeit használhatjuk.

  A legtöbb modern böngésző, mint a Chrome és a Firefox, rendelkezik Flexbox hibakereső eszközzel a fejlesztői eszközkészletben.

  Ez az eszköz lehetővé teszi a flex konténerek és elemek vizualizálását, beleértve azok igazítását és elosztását.

  Valós időben megtekintheted az elrendezést, láthatod, hogyan viselkednek az elemek, és módosíthatod az olyan tulajdonságokat, mint a flex-grow, flex-shrink, és a justify-content, hogy megoldj elrendezési problémákat.`
            },
            {
                name: "ChatGPT",
                answer: "Using DevTools:\n- Open DevTools (F12) and select the element with display: flex\n- Go to the \"Layout\" panel (or \"Styles\" → check the \"Flex\" badge)\n- You can toggle flex-related properties and see live previews\n- Tools like Chrome highlight the flex container and items visually, showing spacing, alignment, and overflow issues"
            }
        ]
    },
    {
        category: "Responsive Design",
        question: "What is the difference between the Flexbox container and the Flexbox item?",
        answers: [
            {
                name: "Viki",
                answer: `  - A Flexbox konténer az az elem, amelyen a display: flex vagy display: inline-flex tulajdonság van alkalmazva.
  Ezáltal flex konténerré válik, amely tartalmazhat flex elemeket. 
  
  - A Flexbox elemek a konténer gyerek elemei, amelyeket a flexbox tulajdonságok (pl. flex-direction, justify-content, align-items) szerint rendezünk és igazítunk.

  A konténer határozza meg az elrendezést és a struktúrát, míg az elemek az egyes elemek, amelyeket a konténer által meghatározott szabályok szerint rendezünk.`
            },
            {
                name: "ChatGPT",
                answer: "A Flexbox container is the parent element with display: flex. It defines the flex context.\n\nA Flexbox item is any direct child of that container.\n\nThe container controls direction, wrapping, and alignment, while the items can be customized individually using properties like flex-grow, flex-shrink, or align-self."
            }
        ]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What is the difference between the class syntax and the constructor function syntax?",
        answers: [
            {
                name: "Viki",
                answer: `Az osztály szintaxis egy modernebb és strukturáltabb módja az objektumok és viselkedésük meghatározásának, amelyet az ES6 vezetett be. Olvashatóbb és tisztább módot biztosít a prototípusok és metódusok meghatározására. A konstruktor függvények pedig a régebbi módszert jelentik az objektumok létrehozására és prototípus alapú öröklésük kezelésére.`
            },
            {
                name: "ChatGPT",
                answer: "Both are used to create objects, but the class syntax is more modern and cleaner.\n- Class syntax uses the class keyword and looks more like traditional OOP in other languages.\n- Constructor functions are older and use a function with the new keyword to create instances.\n\nBehind the scenes, class syntax is mostly syntactic sugar over prototypes, but it's more readable and organized."
            }
        ]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What does the `new` keyword do?",
        answers: [{
            name: "ChatGPT",
            answer: "The new keyword creates a new object instance from a constructor or class.\n\nIt:\n- Creates a new empty object\n- Sets the prototype (__proto__)\n- Binds this to the new object inside the constructor\n- Returns the new object\n\nWithout new, this wouldn't refer to the instance, and the object wouldn't be created properly."
        }]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What does a `constructor` method do in class syntax? When is it executed?",
        answers: [{
            name: "ChatGPT",
            answer: "The constructor is a special method inside a class that runs automatically when a new instance is created using new.\n\nIt’s used to initialize object properties or run setup logic.\nIt gets called once per instance and can receive parameters to customize that instance."
        }]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What are the class methods of a class syntax?",
        answers: [{
            name: "ChatGPT",
            answer: "Class methods are functions defined inside a class but outside the constructor.\n\nThey define behavior that all instances of the class can use.\nThey are shared via the prototype, meaning they don't get duplicated in every object instance.\n\nExample: greet() or calculate() methods."
        }]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What are the fields of a class syntax?",
        answers: [{
            name: "ChatGPT",
            answer: "Fields (also known as properties) are variables that belong to a class instance.\n\nThey are usually defined inside the constructor using this.fieldName, but in modern syntax, they can be defined directly in the class body.\n\nThey store the object's state—like name, age, isActive, etc."
        }]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What is inheritance in the context of Javascript objects?",
        answers: [{
            name: "ChatGPT",
            answer: "Inheritance allows one object (or class) to use the properties and methods of another.\nIn JavaScript, it’s typically done through the prototype chain.\nIt lets developers create base classes and extend them to make more specific versions without repeating code."
        }]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What does the `extends` keyword do?",
        answers: [{
            name: "ChatGPT",
            answer: "The extends keyword is used in class syntax to create a subclass that inherits from another class.\nIt means the new class (child) gets access to the parent class's methods and properties.\nThis supports code reuse and allows overriding or extending the base behavior."
        }]
    },
    {
        category: "Express",
        question: "Explain the concept of client-server communication in the context of web development. How does information flow between the client and the server in a typical client-server architecture?",
        answers: [
            {
                name: "Viki",
                answer: `Kliens-szerver kommunikáció a webfejlesztésben:
  Egy tipikus kliens-szerver architektúrában a kliens (általában egy böngésző vagy egy frontend alkalmazás) és a szerver (backend rendszer) HTTP-protokollon keresztül kommunikálnak egymással. A kliens felelős a felhasználói felületért, míg a szerver az adatkezelést és üzleti logikát végzi.

  Hogyan áramlik az információ a kliens és a szerver között?

  A kliens requestet (kérést) küld:
  - A böngésző vagy egy frontend alkalmazás HTTP-kérést küld a szervernek (GET, POST, PUT, DELETE metódusokkal).
  - A kérés egy adott URL-re érkezik (pl. https://api.pelda.hu/adatok).
  - A szerver feldolgozza a kérést:
  - A szerver (például egy Express alkalmazás) fogadja a kérést, végrehajtja a szükséges műveleteket, és ha kell, adatokat kér le egy adatbázisból.
  
  A szerver válaszol:
  - A szerver HTTP-választ küld vissza, általában JSON formátumban, egy állapotkóddal, amely jelezheti a sikeres végrehajtást (200 OK), hibát (404 Not - Found) vagy egyéb státuszt.
  - A kliens feldolgozza a választ:
  - A kliens (JavaScript fetch() vagy Axios segítségével) feldolgozza az adatokat és frissíti a felhasználói felületet.
  
  Ez a folyamat ismétlődik minden új kérésnél, így biztosítva a webalkalmazás dinamikus működését.`
            },
            {
                name: "ChatGPT",
                answer: "In web development, client-server communication means that the client (usually a browser) sends a request to the server, and the server processes it and sends back a response.\nThe client can interact with the server through APIs, usually using the HTTP protocol, and the exchange of information typically involves formats like JSON."
            }
        ]
    },
    {
        category: "Express",
        question: "What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.",
        answers: [
            {
                name: "Viki",
                answer: `  A HTTP kérések és válaszok kulcsszerepet játszanak a webfejlesztésben, mivel ezek teszik lehetővé a kliens (például egy böngésző) és a szerver közötti kommunikációt. Amikor egy felhasználó meglátogat egy weboldalt, a böngésző HTTP kérést küld a szervernek, amely válaszul egy HTTP választ küld vissza, tartalmazva a kért adatokat (pl. egy HTML-oldalt, egy JSON-fájlt stb.).

        HTTP kérés (HTTP Request) szerkezete:
        - Metódus (Method) – Meghatározza, hogy milyen műveletet szeretnénk végrehajtani (pl. GET, POST, PUT, DELETE).
        - URL (Uniform Resource Locator) – A célzott erőforrás elérési útja a szerveren.
        - Fejlécek (Headers) – Kiegészítő információkat tartalmaz (pl. milyen típusú tartalmat kér a kliens, milyen hitelesítési adatokat küld stb.).
        - Törzs (Body, csak bizonyos metódusoknál, pl. POST) – Opcionális adat, amelyet a kérés küld (pl. űrlapadatok JSON formátumban).
        
        HTTP válasz (HTTP Response) szerkezete:
        - Állapotkód (Status Code) – Jelzi a kérés eredményét (pl. 200 OK, 404 Not Found, 500 Internal Server Error).
        - Fejlécek (Headers) – Kiegészítő információkat tartalmaz a válaszról (pl. a tartalom típusa, a szerver neve, gyorsítótárazási beállítások stb.).
        - Törzs (Body, ha van) – A tényleges adatokat tartalmazza, amelyeket a szerver küld vissza (pl. HTML, JSON, képek stb.).`
            },
            {
                name: "ChatGPT",
                answer: "HTTP is the foundation of communication on the web.\n\n- A request is made by the client and includes a method (GET, POST, etc.), a URL, headers (with metadata), and sometimes a body (with data).\n- A response comes from the server and includes a status code, headers, and a body with the actual content or data (like HTML or JSON).\n\nTogether, they form the basic exchange pattern between frontend and backend."
            }
        ]
    },
    {
        category: "Express",
        question: "What is Express.js and how does it simplify web application development in Node.js? Explain the core features and benefits of using Express.js as a web framework.",
        answers: [
            {
                name: "Viki",
                answer: `Az Express.js egy minimalista és rugalmas webes keretrendszer a Node.js számára, amely leegyszerűsíti a szerveroldali alkalmazások fejlesztését. Segítségével könnyen kezelhetjük a HTTP-kéréseket és -válaszokat, útvonalakat hozhatunk létre, middleware-eket használhatunk, és API-kat építhetünk.

        Express.js főbb jellemzői:
        - Egyszerű és minimalista – Nem tartalmaz felesleges komponenseket, így rugalmasan bővíthető.
        - Útvonalkezelés (Routing) – Könnyen létrehozhatók GET, POST, PUT, DELETE végpontok.
        - Middleware támogatás – Lehetővé teszi kiegészítő funkciók (pl. hitelesítés, naplózás) beépítését.
        - RESTful API-k egyszerű létrehozása – Gyorsan készíthetünk backend API-kat JSON válaszokkal.
        - Integráció adatbázisokkal – MongoDB, MySQL és más adatbázisokkal való könnyű kapcsolódás.`
            },
            {
                name: "ChatGPT",
                answer: "Express.js is a minimal and flexible web framework for Node.js that simplifies the process of building web applications and APIs.\n\nIt provides an easy way to handle routing, middleware, requests, and responses.\n\nCore benefits include:\n- Simplified syntax for creating servers\n- Middleware system for extensibility\n- Easy routing\n- Support for templates and static files"
            }
        ]
    },
    {
        category: "Express",
        question: "What are middlewares in Express.js? Can you list some examples of the built-in middleware?",
        answers: [
            {
                name: "Viki",
                answer: `A middlewarek olyan függvények az Express.js-ben, amelyek a kérések és válaszok feldolgozása során futnak le. 
   
    A middleware-ek:
      - Módosíthatják a kérés objektumát (req).
      - Módosíthatják a válasz objektumát (res).
      - Lezárhatják a kérés-válasz ciklust.
      - Meghívhatják a következő middleware-t a next() függvénnyel.
      - Ezek a függvények köztes állomásként működnek a beérkező kérés és a végső válasz között. Például használhatók:
      - Kérések naplózására (logging).
      - Jogosultságok ellenőrzésére (authentikáció).
      - Bejövő adatok átalakítására (pl. JSON vagy űrlapadatok feldolgozása).

    Beépített Middleware-ek az Express.js-ben:
      1. express.json()
        Feladata: JSON típusú kérés törzsének (body) feldolgozása, így az adatok elérhetők lesznek a req.body-ban.
        app.use(express.json());
        Nélküle a req.body értéke undefined marad JSON adatoknál.

      2. express.urlencoded({ extended: true })
        Feladata: Az űrlapadatok (application/x-www-form-urlencoded) feldolgozása és a req.body-ba helyezése.
        app.use(express.urlencoded({ extended: true }));
        extended: true lehetővé teszi az összetettebb objektumok feldolgozását.

      3. express.static(rootPath)
        Feladata: Statikus fájlok (pl. képek, CSS, JavaScript) kiszolgálása egy megadott könyvtárból.
        app.use(express.static('public'));
        Ezzel a /public könyvtárban lévő fájlok közvetlenül elérhetővé válnak.

      4. express.text()
        Feladata: Egyszerű szöveges tartalmú (text/plain) kérés törzsének (body) feldolgozása.
        app.use(express.text());
        Ha egy API például sima szöveget fogad, ezzel elérhető lesz a req.body-ban.

      5. express.raw()
        Feladata: Nyers (raw) bináris adatok, például képek vagy fájlok feldolgozása.
        app.use(express.raw());
        Hasznos lehet, ha például egy fájlt töltünk fel az API-n keresztül.

    Miért fontosak a middleware-ek?
    - Segítenek gyakori feladatok (pl. autentikáció, naplózás, adatfeldolgozás) automatizálásában.
    - Lehetővé teszik a kód modularizálását – azaz különálló egységekbe szervezhetjük a funkciókat.
    - Hatékonyabbá teszik a kérés-válasz feldolgozást.`
            },
            {
                name: "ChatGPT",
                answer: "Middlewares are functions that have access to the request (req), response (res), and the next() function. They run before the final route handler and can modify the request, the response, or end the cycle.\n\nBuilt-in examples include:\n- express.json() for parsing JSON bodies\n- express.static() for serving static files\n- express.urlencoded() for parsing URL-encoded data"
            }
        ]
    },
    {
        category: "Express",
        question: "How can you tell Express.js to use a middleware?",
        answers: [
            {
                name: "Viki",
                answer: `app.use(middlewareFunction);
    Ez azt jelenti, hogy az app (az Express alkalmazás) használni fogja ezt a middlewareFunction nevű köztes réteget minden bejövő kérés (request) előtt vagy alatt.`
            },
            {
                name: "ChatGPT",
                answer: "You register middleware using the .use() method or by placing it directly in the route handler chain.\n\nExample:\n\napp.use(express.json());\n\nThis tells Express to use the JSON parser for every incoming request."
            }
        ]
    },
    {
        category: "Express",
        question: "Explain the process of handling static files (e.g., CSS, images) in Express.js. How can you configure Express.js to serve static assets from a specific directory in your application?",
        answers: [
            {
                name: "Viki",
                answer: `Az Express.js-ben van egy beépített middleware, az express.static, amit használhatsz statikus fájlok (pl. CSS, képek, JavaScript) kiszolgálására.

        Lépések:

        - Hozz létre egy mappát (pl. public/), ahová beteszed a statikus fájlokat.
        - Az app.use(express.static('mappa_neve')) segítségével megadod az Express-nek, hogy ebből a mappából szolgáljon ki fájlokat.

        Példa:

        const express = require('express');
        const app = express();
        app.use(express.static('public'));
        app.listen(3000, () => {
          console.log('A szerver fut a 3000-es porton');
        });`
            },
            {
                name: "ChatGPT",
                answer: "To serve static files, use the built-in express.static() middleware.\nYou just pass in the directory path you want to expose.\n\nExample:\n\napp.use(express.static('public'));\n\nNow files in the /public folder (like images or CSS) are accessible via URL."
            }
        ]
    },
    {
        category: "Express",
        question: "What does the built-in JSON middleware (`express.json()`) do?",
        answers: [
            {
                name: "Viki",
                answer: `  Az express.json() beépített middleware azt a feladatot látja el, hogy kezelje és feldolgozza a JSON formátumú bejövő kérés body-ját.

  Amikor használod az express.json()-ot, akkor az middleware ellenőrzi, hogy a kérés Content-Type fejlécének értéke application/json-e.
  Ha igen, akkor a testet JSON.parse() segítségével JavaScript objektummá alakítja, és ezt az objektumot a req.body-ban tárolja.

  Ha nem használod ezt a middleware-t, akkor az Express nem fogja automatikusan feldolgozni a JSON formátumú testeket, és a req.body értéke undefined lesz.
  
  Az express.json() middleware biztosítja, hogy a test biztonságosan JSON.parse()-szal legyen feldolgozva, így az útvonalkezelők könnyen hozzáférhetnek az adatokhoz.`
            },
            {
                name: "ChatGPT",
                answer: "express.json() is a built-in middleware that automatically parses incoming requests with JSON payloads, and makes the data available under req.body.\nIt's essential when working with APIs that send data in JSON format, such as in POST or PUT requests."
            }
        ]
    },
    {
        category: "Express",
        question: "How does Express.js handle HTTP request/response cycles? Explain the process of receiving and responding to requests using Express.js middlewares and route handlers.",
        answers: [
            {
                name: "Viki",
                answer: `Az Express.js egy middleware láncot használ, hogy feldolgozza a bejövő HTTP kéréseket, és választ küldjön rájuk.

  A kérés-válasz ciklus lépései:
  - A kliens küld egy kérést – például: GET /about
  - Az Express végigmegy a megadott middleware-eken, amiket app.use()-szal adtál meg (pl. naplózás, JSON feldolgozás stb.).
  - Ha van megfelelő route (pl. app.get('/about')), akkor annak a handler függvénye lefut.
  - Ebben a handlerben válaszolhatsz pl. res.send(), res.json() vagy res.render() segítségével.
  - Ha nem talál megfelelő route-ot, akkor a szerver 404-et küld vissza.
  - Hibák esetén a hiba-kezelő middleware (err, req, res, next) lép működésbe.`
            },
            {
                name: "ChatGPT",
                answer: "Express handles the request/response cycle by passing the request through a middleware stack, which can include parsing, authentication, logging, etc.\nOnce the request reaches a matching route, the route handler processes it and sends a response using res.send(), res.json(), etc.\nEach middleware or handler can call next() to move to the next one in line."
            }
        ]
    },
    {
        category: "Express",
        question: "How does routing work in Express.js? Explain how to define routes and handle different HTTP methods (GET, POST, etc.) in an Express.js application.",
        answers: [
            {
                name: "Viki",
                answer: `  Az Express.js-ben a routing azt jelenti, hogy meghatározod, hogyan válaszoljon a szerver különböző HTTP kérésekre (pl. GET, POST), amik egy adott útvonalra (URL-re) érkeznek.

    Alapelv:
    Összepárosítod:
    - a kérés típusát (GET, POST stb.)
    - a címet (pl. /, /users)
    és megadsz egy függvényt, amit a szerver lefuttat, ha ilyen kérés érkezik.

    A req.body, req.params, req.query segítségével elérheted az adatokat a kérésből.`
            },
            {
                name: "ChatGPT",
                answer: "Routing in Express defines how the server responds to different HTTP methods and paths.\nYou define routes using methods like app.get(), app.post(), etc.\n\nExample:\n\napp.get('/users', (req, res) => {\n  res.send('User list');\n});\n\nIt listens for GET requests to /users and sends a response."
            }
        ]
    },
    {
        category: "Express",
        question: "What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json() in Express.js.",
        answers: [
            {
                name: "Viki",
                answer: `  Express.js válaszküldési metódusok:
    - res.send() – Bármilyen tartalom küldésére jó (szöveg, objektum, tömb).
    - res.json() – JSON válasz küldése (Content-Type: application/json).
    - res.status() – Állapotkód beállítása.
    - res.redirect() – Átirányítás másik URL-re.
    - res.render() – Nézet (template) megjelenítése.
    - res.sendFile() – Fájl küldése válaszként.
    - res.end() – Válasz befejezése adat küldése nélkül.

  Különbség res.send() és res.json() között:
    res.send():
    - Általános célú.
    - Küldhetsz vele szöveget, objektumot, tömböt stb.
    - Objektum esetén JSON-t küld, de nem garantált a Content-Type fejléc.

    res.json():
    - Kifejezetten JSON küldésére szolgál.
    - Automatikusan beállítja a Content-Type: application/json fejlécet.
    - Biztonságosabb, ha objektumot vagy tömböt küldesz vissza.`
            },
            {
                name: "ChatGPT",
                answer: "Common methods include:\n- res.send() – sends any type of data (string, object, buffer)\n- res.json() – specifically sends a JSON response and sets the correct headers\n- res.status() – sets the HTTP status code\n- res.sendFile() – sends a file from the server\n\nres.send() is more general, while res.json() is best for APIs returning structured JSON data."
            }
        ]
    },
    {
        category: "Express",
        question: "What is the purpose of the next() function in Express.js middleware? How can you use it to pass control to the next middleware function in the chain or to terminate the middleware processing?",
        answers: [
            {
                name: "Viki",
                answer: `  Az, hogy továbbadja az irányítást a következő middleware függvénynek a láncban. Ha nem hívod meg, akkor a feldolgozás megakad, és a kliens nem kap választ.

  Mikor használjuk?
  Akkor hívod meg, ha a middleware-ed nem fejezi be a választ (tehát nem küld vissza pl. res.send()-et), hanem csak valamilyen előfeldolgozást végez (pl. naplózás, ellenőrzés), és utána át akarod adni a vezérlést a következő feldolgozónak.

  app.use((req, res, next) => {
    console.log('Kérés érkezett:', req.method, req.url);
    next(); // fontos: ezzel megy tovább a feldolgozás
  });

  app.get('/', (req, res) => {
    res.send('Hello Express!');
  });

  Ha nem hívod meg a next()-et és nem küldesz választ, akkor a kérés "függőben" marad, vagyis a böngésző csak vár és nem történik semmi.`
            },
            {
                name: "ChatGPT",
                answer: "The next() function is used to pass control to the next middleware in the stack.\nIf you don’t call next(), the request will hang.\nIt also plays a key role in error handling, where calling next(err) triggers error-handling middleware."
            }
        ]
    },
    {
        category: "Express",
        question: "Explain the concept of route parameters in Express.js. How can you extract dynamic values from the URL path using route parameters, and how are these values accessed within route handlers?",
        answers: [
            {
                name: "Viki",
                answer: `  A route paraméterek (útvonalparaméterek) az Express.js-ben lehetővé teszik, hogy dinamikus értékeket adj át az URL-en keresztül. Ezeket akkor használjuk, amikor például egy adott felhasználóhoz, termékhez vagy bejegyzéshez szeretnél elérni adatokat azonosító (pl. ID) alapján.

  Egy route paramétert kettősponttal (:) jelölünk az útvonalban:
      app.get('/users/:userId', (req, res) => {
        // itt userId egy route paraméter
      });

  Az Express automatikusan kinyeri ezeket az értékeket, és elérhetővé teszi a req.params objektumban:
      app.get('/users/:userId', (req, res) => {
        const userId = req.params.userId; // így érheted el a dinamikus értéket
        res.send("A felhasználó ID-je: \${userId}");
      });

  Mire használjuk?
    - Egyedi adatok lekérésére adatbázisból (pl. /products/:id)
    - URL-alapú navigációnál React vagy más frontend app esetén
    - REST API végpontokban (GET, PUT, DELETE műveleteknél)`
            },
            {
                name: "ChatGPT",
                answer: "Route parameters let you define dynamic parts in the URL, like /users/:id.\nThese values can be accessed from req.params.\n\nExample:\n\napp.get('/users/:id', (req, res) => {\n  const userId = req.params.id;\n  res.send(`User ID is ${userId}`);\n});\n\nIt’s useful for dynamic content like user profiles or product pages."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Can you name some typical HTTP response codes and their meaning?",
        answers: [
            {
                name: "Viki",
                answer: `200 OK:
        Jelentés: A kérés sikeresen végrehajtódott, és a válasz tartalmazza a kért adatokat.

        201 Created:
        Jelentés: A kérés sikeres volt, és az új erőforrás sikeresen létrejött. (Pl. egy új elem hozzáadása adatbázishoz)

        400 Bad Request:
        Jelentés: A kérés érvénytelen volt vagy helytelen szintaxisú, ezért a szerver nem tudta feldolgozni.

        401 Unauthorized:
        Jelentés: A kéréshez hitelesítés szükséges, és a kliens nem biztosította a megfelelő hitelesítési adatokat.

        403 Forbidden:
        Jelentés: A kérés feldolgozása megtörtént, de a kliens számára nem engedélyezett hozzáférés az erőforráshoz.

        404 Not Found:
        Jelentés: A kért erőforrás nem található a szerveren. A URL nem létezik.

        500 Internal Server Error:
        Jelentés: A szerver hibát észlelt a kérés feldolgozása közben, de nem tudja részletezni a problémát.

        502 Bad Gateway:
        Jelentés: A szerver egy másik szerver által adott érvénytelen választ kapott, miközben megpróbálta feldolgozni a kérését.

        503 Service Unavailable:
        Jelentés: A szerver ideiglenesen nem elérhető, mert túlterhelt vagy karbantartás alatt van.`
            },
            {
                name: "Huni",
                answer: "200 OK – Request was successful\n201 Created – Resource was successfully created\n400 Bad Request – Client-side error, often due to invalid data\n401 Unauthorized – Authentication is required or failed\n403 Forbidden – Access is denied even with authentication\n404 Not Found – Requested resource doesn't exist\n500 Internal Server Error – Generic server-side error"
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Can you name some typical HTTP request/response headers and their meaning?",
        answers: [
            {
                name: "Viki",
                answer: `Kérés Fejlécek (Request Headers) – REST és CRUD:
    - Content-Type
    - Accept
    - Authorization  
    - If-Match
    - Cache-Control
  
  Válasz Fejlécek (Response Headers) – REST és CRUD:
    - Content-Type
    - Location
    - ETag
    - Access-Control-Allow-Origin
    - Cache-Control`
            },
            {
                name: "ChatGPT",
                answer: "- Content-Type: Specifies the format of the body (e.g., application/json)\n- Authorization: Used to pass credentials or tokens\n- Accept: Tells the server what content types the client expects\n- Cache-Control: Controls caching behavior\n- User-Agent: Provides information about the client (browser/device)"
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "What are the common HTTP methods used in web development, and what are their respective purposes?",
        answers: [
            {
                name: "Viki",
                answer: `  GET: Adatok lekérése.
  POST: Új erőforrás létrehozása vagy adat küldése.
  PUT: Egy erőforrás teljes frissítése.
  PATCH: Egy erőforrás részleges frissítése.
  DELETE: Erőforrás eltávolítása.`
            },
            {
                name: "Huni",
                answer: "- GET – Retrieve data\n- POST – Create new data\n- PUT – Replace existing data\n- PATCH – Update part of a resource\n- DELETE – Remove data\nEach method defines the intent of the request in RESTful APIs."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "How does the GET method differ from the POST method? Explain when it is appropriate to use each method. Which one uses the request body to receive data?",
        answers: [
            {
                name: "Viki",
                answer: `  GET:
  Adatok lekérése.
  Nem használja a kérés törzsét.
  Akkor használjuk, ha adatokat szeretnénk lekérni anélkül, hogy változtatnánk a szerver állapotán.

  POST:
  Adatok küldése új erőforrás létrehozására vagy módosítására.
  Használja a kérés törzsét.
  Akkor használjuk, ha adatokat küldünk, amelyek módosítják a szerver állapotát (pl. új erőforrás létrehozása vagy meglévő adat frissítése).`
            },
            {
                name: "ChatGPT",
                answer: "- GET is used to fetch data, and the parameters are sent in the URL. It should not affect data on the server.\n- POST is used to submit or create data, and the data is sent in the request body.\n\nUse GET for reading, and POST for sending form data or creating resources."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Explain the use of the PATCH method in HTTP. How does it differ from the PUT method, and when should it be used to update a resource?",
        answers: [
            {
                name: "Viki",
                answer: `  - A PATCH metódust akkor használjuk, amikor csak a meglévő erőforrás (pl. egy recept) egy részét szeretnénk módosítani, nem az egészet lecserélni.
  - A PUT-nál az összes mezőt újra el kell küldeni, adatok elveszhetnek, ha nem küldöd újra.	A többi adat változatlan marad
  
  Mikor használjuk a PATCH-et?
    Ha csak egy vagy néhány mezőt szeretnél módosítani (pl. recept neve vagy kalóriája).`
            },
            {
                name: "ChatGPT",
                answer: "- PATCH updates only specific fields of a resource\n- PUT replaces the entire resource\n\nUse PATCH when you want to make partial updates, which is more efficient and safer for small changes."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "How can the DELETE method be used to remove a resource from a server? Explain how the DELETE method works and any considerations for handling resource deletion.",
        answers: [
            {
                name: "Huni",
                answer: `A DELETE egy HTTP kérési metódus, amelyet arra használunk, hogy töröljünk egy erőforrást a szerverről. 

    Hogyan működik?
    - A kliens küld egy DELETE típusú kérést egy konkrét URL-re, a megfelelő paraméterrel ellátva
    - A szerver megkapja a kérést, megkeresi az erőforrást (pl. adatbázisból vagy tömbből), törli, majd választ küld vissza.

    A szerver válaszai lehetnek:
      - 200 OK + a törölt adat visszaküldése,
      - 204 No Content, ha nincs mit visszaküldeni,
      - vagy 404 Not Found, ha nem található az adott erőforrás.

    Fontos szempontok:
      - Hitelesítés és jogosultság: Csak engedélyezett felhasználók törölhessenek.
      - Ellenőrzés: Törlés előtt ellenőrizzük, hogy létezik-e az erőforrás.
      - Soft delete: Néha nem törlünk ténylegesen, csak megjelöljük, hogy törölve lett.
      - Hibakezelés: Kezeljük jól, ha pl. az erőforrás nem létezik.
      - ID kezelés`
            },
            {
                name: "ChatGPT",
                answer: "Send a DELETE request to the URL of the resource.\nExample: DELETE /users/123 removes user with ID 123.\nServers often respond with 204 No Content to confirm deletion.\nYou might add authentication or checks to prevent accidental deletion."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "What does the REST architecture mean? What are the REST Constraints?",
        answers: [
            {
                name: "Viki",
                answer: `  Representational State Transfer:
  Egy hálózati alkalmazások tervezésére szolgáló architektura. 
  Egy sor elv alapjául szolgál, amely lehetővé teszi, hogy az ügyfelek és a szerverek hatékony módon kommunikáljanak.

  A REST-t általában webes szolgáltatásokban használják, és alapvetően az HTTP szabványos metódusaira (GET, POST, PUT, DELETE, PATCH) épít, hogy CRUD műveleteket végezzenek az erőforrásokon (Create, Read, Update, Delete).

    A REST architektúra hat alapvető constraint-el (megszorítással) rendelkezik, amelyek mindegyike segíti a kommunikáció skálázhatóságát, állapotmentességét és egyszerűségét.

      - Kliens-Szerver: A kliens és a szerver különálló entitások, amelyek standard protokollokon (általában HTTP-n) keresztül kommunikálnak. A szerver kezeli az adatokat és az üzleti logikát, míg a kliens a felhasználói felületet kezeli.

      - Állapotmentesség (Stateless): Minden kliens által küldött kérésnek tartalmaznia kell az összes szükséges információt a kérés feldolgozásához. A szerver nem tárolja el az előző kérésekkel kapcsolatos adatokat, tehát minden kérés független.

      - Cache-elhetőség (Cacheable): A szerver válaszainak egyértelműen jelezniük kell, hogy cache-elhetők-e vagy sem. Ez lehetővé teszi a kliensek számára, hogy tárolják a válaszokat, és elkerüljék a felesleges kéréseket, javítva ezzel a teljesítményt.

      - Egységes interfész (Uniform Interface): A REST API-knak követniük kell egy szabványos és következetes szabályrendszert az interakciókhoz. Ez megkönnyíti a kliens és a szerver közötti kommunikációt, és biztosítja, hogy az API előrejelezhető legyen.

      - Rétegezett rendszer (Layered System): A REST API-k több rétegből is felépíthetők, amelyek mindegyike egy adott kommunikációs aspektusért felelős. A kliensek nem feltétlenül tudják, hogy hány rétegből áll a rendszer, és minden réteg egy konkrét funkciót lát el (pl. biztonság, terheléselosztás, cache-elés).

      - Kód a kereslet alapján (Code on Demand – opcionális): A szerverek végrehajtható kódot (pl. JavaScript) biztosíthatnak a kliens számára, amely kiterjesztheti a funkcionalitást. Ez az opció nem kötelező, és nem minden esetben használják.`
            },
            {
                name: "ChatGPT",
                answer: "REST (Representational State Transfer) is an architectural style for designing web APIs.\nIt’s based on stateless communication, using HTTP methods and standard URIs.\n\nKey constraints include:\n- Client-Server separation\n- Statelessness\n- Uniform interface\n- Cacheability\n- Layered system\n- Code on demand (optional)"
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "What does a URL's path represent in a REST architecture? Show an example of the `recipe` resource's CRUD operations. Define the HTTP method and a corresponding path for each CRUD operation.",
        answers: [
            {
                name: "Viki",
                answer: `A REST architektúrában az URL útvonal azokat az erőforrásokat vagy azok gyűjteményeit jelöli, amelyekkel a kliens interakcióba lép. Az útvonal alapvetően meghatározza az erőforrás helyét a szerveren, míg az HTTP metódus azt jelzi, hogy milyen műveletet kell végrehajtani ezen az erőforráson (pl. létrehozás, olvasás, frissítés vagy törlés).

    HTTP Metódus: POST
    Útvonal: /api/recipes

    HTTP Metódus: GET
    Útvonal: /api/recipes

    HTTP Metódus: PUT (teljes erőforrás cseréje) vagy PATCH (részleges frissítés)
    Útvonal: /api/recipes/:id (ahol :id a recept egyedi azonosítója)

    HTTP Metódus: DELETE
    Útvonal: /api/recipes/:id (ahol :id a törlendő recept egyedi azonosítója)
    Leírás: Ez a művelet törli a megadott receptet a szerverről.`
            },
            {
                name: "ChatGPT",
                answer: "In REST, the path identifies a resource.\n\nCRUD for recipe:\n- Create: POST /recipes\n- Read: GET /recipes or GET /recipes/:id\n- Update: PUT /recipes/:id or PATCH /recipes/:id\n- Delete: DELETE /recipes/:id"
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "How do you handle form submissions using JavaScript? Explain the process of capturing form data and preventing the default form submission behavior.",
        answers: [
            {
                name: "Huni",
                answer: `  - Összegyűjtjük az űrlap adatait. (Az űrlapon lévő adatokat state segítségével vagy az egyes űrlapelemek elérésével tudjuk lekérni.)
  - Megakadályozzuk az alapértelmezett viselkedést (e.preventDefault()) 
  - A beérkezett adatokat feldolgozzuk vagy továbbítjuk valahová (például a szerverre).`
            },
            {
                name: "ChatGPT",
                answer: "Use the 'submit' event, and call event.preventDefault() to stop default behavior.\nThen access form values using event.target.elements or FormData.\nYou can send the data using fetch() or another method without refreshing the page."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Explain the required elements necessary to define a form in HTML.",
        answers: [
            {
                name: "Viki",
                answer: `    <form> tag: Az űrlapelemek tárolója. 
    <input> tag: A felhasználói inputok fogadására szolgál. Különböző típusú lehet (pl. szöveg, email, szám). 
    <button> vagy <input type="submit">: Az űrlap beküldésének elindítására szolgál. Opcionálisan, 
    <label> elemek: Leíró szöveget biztosítanak az inputokhoz.`
            },
            {
                name: "ChatGPT",
                answer: "A form needs:\n- <form> tag\n- action attribute (where to send the data)\n- method (GET or POST)\n- One or more <input>, <select>, or <textarea> elements\n- A submit button (<button type='submit'> or <input type='submit'>)"
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "What is the purpose of the required attribute in HTML form elements? How does it enforce mandatory input fields and prevent form submission without the required information?",
        answers: [
            {
                name: "Viki",
                answer: `A required attribútum az HTML űrlapelemekben azt jelzi, hogy a mezőt ki kell tölteni, mielőtt az űrlap elküldhető lenne. Ez biztosítja, hogy a felhasználó nem küldheti el az űrlapot anélkül, hogy megadná a szükséges információkat az adott mezőben. Ha a felhasználó megpróbálja beküldeni az űrlapot úgy, hogy a kötelező mező üres marad, a böngésző megakadályozza az elküldést, és általában vizuálisan kiemeli a hiányzó mezőket, például piros kerettel, hogy arra figyelmeztesse a felhasználót.`
            },
            {
                name: "ChatGPT",
                answer: "The required attribute makes an input mandatory.\nThe browser will prevent the form from submitting if the field is empty and show a validation message."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Explain the different types of form input fields available in HTML. How do input types like text, number, email, checkbox, and radio buttons differ, and how are they used in forms?",
        answers: [
            {
                name: "Viki",
                answer: `    Minden űrlapmező-típusnak megvan a saját viselkedése, amely a kívánt használathoz van optimalizálva, biztosítva a jobb felhasználói élményt és a felhasználói adatok megfelelő érvényesítését.
    Az HTML különböző típusú űrlapmezőket biztosít a felhasználói adatok kezelésére. Íme néhány gyakori űrlapmező-típus áttekintése:

    <input type="text">:
    Simább szöveges adatbevitelhez használják.
    Bármilyen alfanumerikus karakter beírását lehetővé teszi.
    Példa: <input type="text" name="username">

    <input type="number">:
    Számok bevitelére szolgál.
    Csak számok adhatók meg (néhány böngésző érvényesítést biztosít a számokkal kapcsolatban).
    Példa: <input type="number" name="age">

    <input type="email">:
    E-mail címek bevitelére szolgál.
    A böngészők ellenőrizhetik, hogy az adott szöveg érvényes e-mail cím formátumban van-e (pl. example@domain.com).
    Példa: <input type="email" name="email">

    <input type="checkbox">:
    Lehetővé teszi, hogy a felhasználók több opciót válasszanak ki egy listából.
    Minden egyes jelölőnégyzet függetlenül működik (bejelölhető vagy eltávolítható).
    Példa: <input type="checkbox" name="subscribe" value="newsletter"> Feliratkozás a hírlevélre

    <input type="radio">:
    Olyan esetekben használható, amikor egy felhasználó csak egy opciót választhat a választható lehetőségek közül.
    Minden rádiógomb ugyanazzal a name attribútummal rendelkezik, biztosítva, hogy egyszerre csak egy lehetőség választható.`
            },
            {
                name: "ChatGPT",
                answer: "- text: Free text input\n- number: Numeric input with step and range\n- email: Must be a valid email format\n- checkbox: Multiple true/false options\n- radio: Select one option from a group\n\nEach type has different built-in validation and behavior."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Can you explain the purpose of the name attribute in the context of form submission?",
        answers: [
            {
                name: "Viki",
                answer: `Röviden: a name attribútum segít összekapcsolni a felhasználói inputot az űrlap egyes mezőivel, és lehetővé teszi az adatok megfelelő továbbítását az űrlap beküldésekor.`
            },
            {
                name: "ChatGPT",
                answer: "The name attribute acts as the key in a key-value pair when submitting form data.\nWithout it, the value of the input won’t be included in the submission.\nIt’s essential for both form serialization and server-side processing."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "Can you explain how we can connect a label tag to a form element?",
        answers: [
            {
                name: "Viki",
                answer: `Két fő módon lehet összekapcsolni a <label> taget egy űrlapelemmel:

    - A for attribútum használatával (REACT: HTMLfor)
    - A beviteli mező beágyazása a címke tagba:
        <label>
          Felhasználónév:
          <input type="text" name="username">
        </label>

    Mindkét módszer összekapcsolja a címkét az űrlapelemmel, és bármelyik használható a preferenciák vagy a speciális igények függvényében.
    `
            },
            {
                name: "ChatGPT",
                answer: "Use the for attribute on the <label> and match it to the input’s id.\n\nExample:\n\n<label for='email'>Email</label>\n<input id='email' name='email' type='email'>\n\nThis improves accessibility and usability."
            }
        ]
    },
    {
        category: "REST and CRUD",
        question: "How can you dynamically manipulate or modify form elements using JavaScript? Explain how to add or remove form fields dynamically based on user interaction or specific conditions.",
        answers: [
            {
                name: "Viki",
                answer: `A JavaScript lehetővé teszi, hogy valós időben módosítsuk az űrlapokat – például új mezőket adjunk hozzá vagy töröljünk, amikor a felhasználó egy gombra kattint, vagy bizonyos feltételek teljesülnek.

    1. Űrlapmező hozzáadása gombnyomásra
        <form id="myForm">
          <button type="button" onclick="addField()">Mező hozzáadása</button>
        </form>

        <script>
        function addField() {
          const input = document.createElement("input");
          input.type = "text";
          input.name = "extraField";
          input.placeholder = "További mező";
          document.getElementById("myForm").appendChild(input);
        }
        </script>


    2. Mező eltávolítása
        function removeField() {
          const form = document.getElementById("myForm");
          if (form.lastChild.tagName === "INPUT") {
            form.removeChild(form.lastChild);
          }
        }`
            },
            {
            name: "ChatGPT",
            answer: "You can use the DOM API to create, remove, or change inputs.\n- Use document.createElement() to add a new field\n- Use element.remove() to delete one\n- Attach event listeners to show/hide fields based on conditions\nIt allows forms to adapt to user interaction."
        }
    ]
    },
    {
        category: "REST and CRUD",
        question: "How can you convert form data into a format that can be easily transmitted or processed by the server?",
        answers: [
            {
                name: "Viki",
                answer: `Ha űrlapadatokat szeretnél a szerverre küldeni, azokat célszerű strukturált formátumba konvertálni, például:
    - Lekérdezési karakterlánc (pl. name=John&age=25)
    - JSON objektum (pl. { "name": "John", "age": 25 })
    - FormData objektum (fájlok vagy HTML-űrlap teljes elküldéséhez)`
            },
            {
            name: "ChatGPT",
            answer: "You can use the FormData object to collect and serialize form values.\nThen use fetch() or XMLHttpRequest to send it.\nAlternatively, you can use JSON.stringify() on an object built from the form values if sending JSON."
        }
    ]
    },
    {
        category: "React",
        question: "What is React.js and what are its key features?",
        answers: [
            {
                name: "Viki",
                answer: `A React.js egy nyílt forráskódú JavaScript könyvtár, amelyet felhasználói felületek (UI-k) és egyoldalas alkalmazások (SPA-k) készítésére használnak. 
      A Facebook fejlesztette, és lehetővé teszi a fejlesztők számára, hogy újrahasználható UI komponenseket készítsenek, amelyeket könnyen kezelhetnek és manipulálhatnak, gyorsabb és hatékonyabb módot biztosítva az interaktív UI-k építésére. 
      A React virtuális DOM-ot (Document Object Model) és deklaratív szintaxist használ, hogy lehetővé tegye a fejlesztők számára a felhasználói felület megjelenésének leírását bármely adott pillanatban, majd a React csak a szükséges változtatásokat frissíti a valódi DOM-ban, javítva a teljesítményt és csökkentve a betöltési időket.
      Emellett számos erőteljes funkciót kínál, mint például állapotkezelés, eseménykezelés és szerveroldali renderelés, ami népszerű választássá teszi a komplex és skálázható webalkalmazások építésére.`
            },
            {
                name: "ChatGPT",
                answer: "React.js is a JavaScript library for building user interfaces, especially single-page applications.\n\nKey features:\n- Component-based architecture for modular UI\n- Virtual DOM for performance optimization\n- JSX for writing UI using HTML-like syntax\n- Unidirectional data flow with props\n- Hooks for managing state and side effects in functional components"
            }
        ]
    },
    {
        category: "React",
        question: "Explain the concept of virtual DOM and how it contributes to React's performance.",
        answers: [
            {
                name: "Viki",
                answer: `A virtuális DOM (Virtual DOM) a React-ben használt technológia, amely lehetővé teszi a gyors és hatékony UI frissítést.
  A virtuális DOM egy JavaScript objektum, amely a valódi DOM (Document Object Model) memóriában tárolt másolata. 
  Amikor egy állapotváltozás történik a React alkalmazásban, a valódi DOM helyett először a virtuális DOM frissül. 
  A React ezt a frissített virtuális DOM-ot összehasonlítja az előző verzióval, és csak a szükséges változtatásokat alkalmazza a valódi DOM-ra. 
  Ennek eredményeként csökkenthetők a DOM műveletek, amelyek általában lassúak, és javítható a teljesítmény, mivel a React csak azokat az elemeket módosítja, amelyek valóban változtak.`
            },
            {
                name: "ChatGPT",
                answer: "The virtual DOM is an in-memory representation of the real DOM.\nReact uses it to detect changes by comparing previous and current versions (diffing) and updates only the changed parts in the actual DOM.\nThis makes updates faster and more efficient, improving performance."
            }
        ]
    },
    {
        category: "React",
        question: "Explain the component-based architecture in React.js. How do components work, and how can they be composed to build complex user interfaces?",
        answers: [
            {
                name: "Viki",
                answer: `  A React.js komponens-alapú architektúrája azt jelenti, hogy az alkalmazások felhasználói felületei kisebb, újrahasználható és elkülönített egységekre, azaz komponensekre vannak bontva.

  Minden egyes komponens egy önálló, jól meghatározott része az alkalmazásnak, amely saját logikával, állapottal (state) és megjelenítéssel rendelkezik. A komponensek úgy működnek, hogy bemenetekként (props) adatokat kapnak, majd egy kimenetet (renderelést) generálnak. 
  
  A React a komponensek segítségével felépíti a teljes felhasználói felületet, és mivel a komponensek újrahasználhatóak, a kód karbantartása és tesztelése is egyszerűbbé válik.

  A komplex felhasználói felületek úgy építhetők fel, hogy kisebb komponenseket hozunk létre, amelyek más komponenseket tartalmaznak. Ezeket a komponenseket hierarchikusan rendezhetjük el, ahol egy szülőkomponens tartalmazza az alkomponenseket, és az adatok vagy események áramlása a komponensek között történik.`
            },
            {
                name: "ChatGPT",
                answer: "React apps are built using components, which are reusable and self-contained UI blocks.\nEach component can have its own state and props, and components can be nested to build complex interfaces.\nThis makes code modular, easier to manage, and encourages reusability."
            }
        ]
    },
    {
        category: "React",
        question: "What is the significance of JSX in React.js? Explain how JSX combines HTML-like syntax with JavaScript code and how it is transpiled into regular JavaScript during the build process.",
        answers: [
            {
                name: "Viki",
                answer: `  - A JSX (JavaScript XML) a JavaScript szintaxis kiterjesztése, amely lehetővé teszi a fejlesztők számára, hogy HTML-szerű szintaxist használjanak JavaScript kódon belül. 
  - A JSX kulcsfontosságú jellemzője a React.js könyvtárnak, és megkönnyíti a webalkalmazások felhasználói felületének (UI) létrehozását és manipulálását.
  - A JSX segítségével a fejlesztők HTML-szerű tageket írhatnak, és ezeket a komponenseik UI struktúrájának meghatározására használhatják. Ez segít jobban vizualizálni a komponens hierarchiát, és jobban megérteni, hogyan illeszkednek a különböző UI részek egymáshoz.`
            },
            {
                name: "ChatGPT",
                answer: "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax directly in JavaScript.\nJSX improves readability and makes UI structure easier to understand.\nIt gets transpiled into regular JavaScript (e.g., React.createElement()) during the build process."
            }
        ]
    },
    {
        category: "React",
        question: "What are props in React and how are they used to pass data between components? Explain the concept of props and how they facilitate parent-child component communication.",
        answers: [
            {
                name: "Viki",
                answer: `  A props-ok lehetővé teszik a kommunikációt a komponensek között. 

  A props objektum ("properties") a React egyik alapvető fogalma, amely lehetővé teszi az adatok átvitelét egyik komponensből a másikba, különösen a szülő és gyerek komponensek között. A props segítségével a komponensek dinamikusak lesznek, mivel lehetőséget ad arra, hogy külső adatokat kapjanak, és az alapján jelenítsenek meg eltérő tartalmat.

  Mi a props?
    A props olyan csak olvasható értékek, amelyeket a szülő komponens ad át a gyerek komponensnek. A props segítségével egy szülő komponens adatokat adhat át a gyerek komponensnek, amely ezeket az adatokat felhasználhatja a rendereléshez vagy eseménykezeléshez. A props lehet bármilyen JavaScript típus: stringek, számok, objektumok, tömbök, függvények, stb. A props hasonlít a függvényparaméterekhez, de itt az adatokat React komponensek között továbbítjuk.
  
  Egy tipikus React alkalmazásban:
  - A szülő komponens átad adatokat a gyerek komponensnek props-on keresztül.
  - A gyerek komponens ezeket az adatokat használja fel a rendereléshez vagy más műveletekhez.
  - A szülő által átadott adatokat a gyerek komponens a props objektum segítségével éri el.`
            },
            {
                name: "ChatGPT",
                answer: "Props (short for 'properties') are read-only data passed from a parent to a child component.\nThey enable component communication, making components reusable and dynamic by providing them with different values."
            }
        ]
    },
    {
        category: "React",
        question: "How can you access and utilize props within a functional component in React? Explain how to extract and use props using the destructuring syntax.",
        answers: [
            {
                name: "Viki",
                answer: `A props-ot a funkcionális komponensekben a props objektumon keresztül érhetjük el.

  1. Props elérése a props objektum használatával:
    A funkcionális komponensben az átadott props-okat a props objektum segítségével érhetjük el, amely tartalmazza az összes átadott adatot.
    (props.name stb....)

  2. Props desktrukturálása:
    A props-ok elérésére egy tisztább és rövidebb mód a destrukturálás használata, amely lehetővé teszi, hogy az objektumból közvetlenül kinyerjük az értékeket és változókba rendeljük őket.
    function MyComponent({ title, description }) {.....}
    Ebben a példában a title és description közvetlenül a props objektumból kerül kiemelésre. 
    
  A { title, description } destrukturálás ugyanazt jelenti, mint props.title és props.description, de sokkal tisztább és kompaktabb módon.

  Összegzés:
  - Props segítségével adhatunk át adatokat a szülőtől a gyerek komponensnek.
  - A props-okat elérhetjük a props objektumon keresztül vagy destrukturálással.
  - A destrukturálás leegyszerűsíti és tisztábbá teszi a kódot.
`
            },
            {
                name: "ChatGPT",
                answer: "Props are accessed via the function parameter.\nYou can use destructuring to directly extract specific props for cleaner code:\n\nfunction Greeting({ name }) { ... }"
            }
        ]
    },
    {
        category: "React",
        question: "How can you pass callback functions as props in React? Provide an example of how to pass a function from a parent component to a child component, enabling the child to communicate with the parent.",
        answers: [
            {
                name: "Viki",
                answer: `  React-ben a szülő komponens callback függvényeket adhat át prop-ként a gyerek komponensnek. Ez lehetővé teszi, hogy a gyerek komponens kommunikáljon a szülővel, például egy akció kiváltásával vagy a szülő komponens állapotának frissítésével.

  Callback függvény átadása a szülőtől a gyerekhez:
  - Definiáljuk a függvényt a szülő komponensben.
  - Átadjuk a függvényt prop-ként a gyerek komponensnek.
  - A gyerek komponens meghívhatja ezt a függvényt, hogy kommunikáljon a szülővel és frissítse annak állapotát.`
            },
            {
                name: "ChatGPT",
                answer: "You define a function in the parent and pass it as a prop to the child.\nThe child can then call it, often to communicate back (e.g., to notify about user actions).\nThis enables two-way communication between components."
            }
        ]
    },
    {
        category: "React",
        question: "Explain the concept of spreading props in React. How can the spread operator be used to pass multiple props from a parent component to a child component in a concise manner?",
        answers: [
            {
                name: "Viki",
                answer: `  A spread operator (...) segítségével egyszerre több props-ot is átadhatunk egy komponensnek rövidebb és tisztább módon azaz a van egy objektumod, amiben több adat van (pl. name, age, city), akkor nem kell minden egyes értéket külön-külön átadni, hanem a spread operátorral egyszerűen „szétterítheted” az összeset.

    const user = {
      name: "Anna",
      age: 28,
      city: "Budapest"
    };

    <Profile name={user.name} age={user.age} city={user.city} /> ezzel egyenlő ez <Profile {...user} />
    Ez ugyanazt eredményezi, mintha a name, age, city külön-külön prop-ként lettek volna megadva.`
            },
            {
                name: "ChatGPT",
                answer: "The spread operator (...) allows passing multiple props at once to a component.\nUseful when forwarding props or composing components:\n\n<MyComponent {...props} />"
            }
        ]
    },
    {
        category: "React",
        question: "Explain the concept of default props (with ES6 JS syntax) in React. How can you define default values for props in a component to handle cases where the prop value is not explicitly passed?",
        answers: [
            {
                name: "Viki",
                answer: `A default props (alapértelmezett props) azt jelenti, hogy egy komponens kap egy alapértelmezett értéket egy prop-hoz, ha azt nem adjuk meg a szülő komponensből.

  Ez segít:
  - elkerülni, hogy undefined hibák legyenek
  - a komponens stabil és kiszámítható marad
  - nem kell mindig minden értéket külön átadni

  Hogyan adunk meg alapértelmezett prop-ot ES6 szintaxissal?
  React függvénykomponensnél az ES6 destruktúrálásnál közvetlenül a paraméternél megadhatsz alapértelmezést:

    function Welcome({ name = "Vendég" }) {
        return <h1>Szia, {name}!</h1>;
    }
      
  Mit jelent ez?
  ha ezt írod: <Welcome name="Anna" /> → az jelenik meg: Szia, Anna!

  ha ezt írod: <Welcome /> → nincs name → megjelenik: Szia, Vendég!
  (mert a name értéke alapból "Vendég")`
            },
            {
                name: "ChatGPT",
                answer: "Default props provide fallback values when no prop is passed.\nWith ES6, you can define them in the function parameter:\n\nfunction Button({ label = 'Click Me' }) { ... }"
            }
        ]
    },
    {
        category: "React",
        question: "Explain the immutability principle when working with props and states in React. Why is it important to avoid directly modifying prop values within a component, and what are some best practices for maintaining immutability?",
        answers: [
            {
                name: "Viki",
                answer: `Az immutabilitás azt jelenti, hogy egy értéket nem módosítunk közvetlenül, hanem egy új példányt hozunk létre megváltoztatott értékekkel.

  Miért nem szabad props-ot közvetlenül módosítani?
    - A props a szülő komponensből érkezik, tehát az a komponens felelős az értékének megadásáért.
    - Ha egy gyermek komponens megpróbálja megváltoztatni a props-ot, az ellenkezik a React működési elvével.
    - Ez hibákhoz vezethet, mert a React nem fogja tudni követni, hogy mi változott.
    - React-ben a props csak olvasható!

  Miért fontos az immutabilitás a state-nél is?
    - Ha egy state értéket közvetlenül módosítunk, a React nem fogja érzékelni a változást → nem történik újrarenderelés!
    - Ehelyett mindig a setState-et (pl. setCount) kell használni, ami új objektumot vagy értéket hoz létre.

    Jó gyakorlatok:
    - Soha ne módosítsd közvetlenül a props-ot vagy a state-et
    - Tömb módosításnál használj spread operátort vagy függvényeket:
    setList([...list, newItem]); // új tömb
    - Objektum módosításnál szintén új példány:
    setUser({ ...user, name: "Anna" });`
            },
            {
                name: "ChatGPT",
                answer: "Props should never be modified inside a component—they’re read-only.\nState should be updated immutably (e.g., by copying arrays/objects before updating).\nThis ensures predictable updates and prevents side effects."
            }
        ]
    },
    {
        category: "React",
        question: "How does React.js handle state management? Explain the concept of state and how it differs from props.",
        answers: [
            {
                name: "Viki",
                answer: `  A state (állapot) a React-ben egy komponens saját adatait jelenti, amit a komponens maga kezel, és amit meg tud változtatni.
  A React automatikusan újrarendereli a komponenst, ha a state értéke megváltozik – ez a React egyik legfontosabb működési elve.

  A state jellemzői:
    - A komponens sajátja
    - Módosítható (useState, setState)
    - Dinamikus, változhat a felhasználói interakciók során
    - Újrarendereléshez vezet

  A props jellemzői:
    - Kívülről, a szülő komponensből érkezik
    - Nem módosítható a gyermek komponensben
    - Csak olvasható adat, amit "átadunk" a komponensnek
    - A komponens viselkedését testreszabja`
            },
            {
                name: "ChatGPT",
                answer: "State is used to store local, changeable data inside a component.\nUnlike props, which are external and passed in, state is internal and can be updated using the useState hook.\nWhen state changes, the component re-renders to reflect the new state."
            }
        ]
    },
    {
        category: "React",
        question: "What are React hooks? Explain the purpose and benefits of hooks like useState, and useEffect in React.js.",
        answers: [
            {
                name: "Viki",
                answer: `  A React hook-ok olyan beépített függvények, amiket funkcionális komponensekben használunk, hogy olyan képességeket adjunk nekik, amit korábban csak osztálykomponensek tudtak.

  A két legismertebb hook:

    useState
      - Lehetővé teszi, hogy egy komponens saját állapotot (state) tároljon.
      - A React újrarendereli a komponenst, ha az állapot megváltozik.
      - Például egy számláló, egy űrlapmező tartalma stb.

    useEffect
      - Akkor használjuk, ha a komponensben valamilyen mellékhatást (side effect) akarunk végrehajtani.
      - Pl.: adat lekérése API-ból, időzítő indítása, console.log, DOM manipuláció.
      - Fut a komponens megjelenésekor, frissítésekor vagy eltűnésekor – a dependency tömb alapján.

  Hook-ok előnyei:
    - Tiszta, egyszerű kód funkcionális komponensekben
    - Nem kell osztályokat írni
    - Könnyebb újrahasznosítható logikát készíteni`
            },
            {
                name: "ChatGPT",
                answer: "Hooks are functions that let you use state and lifecycle features in functional components.\n\nuseState: for managing local state\nuseEffect: for handling side effects (e.g., API calls)\nHooks simplify React development by avoiding class components."
            }
        ]
    },
    {
        category: "React",
        question: "Explain the concept of virtual DOM reconciliation in React.js. How does React efficiently update and render components by performing minimal DOM manipulations?",
        answers: [
            {
                name: "Viki",
                answer: `A React Virtual DOM (virtuális DOM) egy memóriában létező, gyors másolata a böngésző valós DOM-jának.

  Hogyan működik?
    - Amikor az alkalmazás állapota (state, props) megváltozik, a React nem azonnal a valódi DOM-ot módosítja.
    - Először létrehoz egy új Virtual DOM fát, amely tartalmazza az új állapot szerinti nézetet.
    - Ezután a React összehasonlítja (reconciliation) az új Virtual DOM-ot a korábbi verzióval.
    - Csak azokat a változtatásokat hajtja végre a valós DOM-on, amik valóban megváltoztak → minimális DOM-manipuláció → gyorsabb működés.

  Miért jó ez?
    - A valós DOM lassú, a Virtual DOM gyors
    - A React így hatékonyabb, mint a hagyományos DOM-kezelés
    - Csak a szükséges elemek frissülnek → jobb teljesítmény`
            },
            {
                name: "ChatGPT",
                answer: "Reconciliation is the process React uses to compare the new virtual DOM with the previous one.\nIt diffs the trees, and updates only the parts that changed.\nThis reduces direct DOM manipulation and improves performance."
            }
        ]
    },
    {
        category: "React",
        question: "Explain how to manage complex state objects with useState. Explain techniques like object spreading or merging to update specific properties within an object state.",
        answers: [
            {
                name: "Viki",
                answer: `  Ha egy useState állapot nem csak egy szám vagy szöveg, hanem egy objektum, akkor nem lehet csak egy tulajdonságot frissíteni anélkül, hogy a többinek baja lenne. Ilyenkor a megoldás: object spreading (...) vagy merging.

  Példa – egy összetett objektum:
      const [user, setUser] = useState({
        name: "Anna",
        age: 25,
        city: "Budapest"
      });
  
  Hibás: csak egy tulajdonság módosítása így:
    setUser({ name: "Béla" }); // elveszíti az age és city adatokat!

  Helyes: objektum szétterítése:
    setUser({ ...user, name: "Béla" }); // megtartja a többit
      Itt a ...user bemásolja a meglévő mezőket, és a name felülírja a régit.

  További tipp:
    Ha a frissítés egy korábbi állapottól függ, használj callback-et:
      setUser(prev => ({ ...prev, age: prev.age + 1 }));`
            },
            {
                name: "ChatGPT",
                answer: "When using objects in useState, use the spread operator to preserve unchanged fields:\n\nsetUser(prev => ({ ...prev, name: 'Anna' }))\nThis prevents overwriting the whole object unintentionally."
            }
        ]
    },
    {
        category: "React",
        question: "Why is it important to provide a new array as an argument to the state setter function when adding an item to an existing array?",
        answers: [
            {
                name: "Viki",
                answer: `  Rövid válasz:
    Mert a React csak akkor észleli, hogy az állapot megváltozott, ha az új érték egy teljesen új tömb (vagy objektum).

  Ha csak módosítod a meglévő tömböt (push, splice stb.):
    - A referencia (memóriahely) nem változik
    - A React azt hiszi: „semmi sem változott” → nem frissíti az UI-t

  Ezért mindig új tömböt kell létrehoznod, pl.:
  setList([...list, newItem]); // új tömb, új memóriahely`
            },
            {
                name: "ChatGPT",
                answer: "React checks for reference changes.\nUpdating the same array won't trigger a re-render.\nAlways create a new array copy (e.g., with spread or .concat())."
            }
        ]
    },
    {
        category: "React",
        question: "How does conditional rendering work in React? Explain the different techniques and approaches available to conditionally render components or content based on certain conditions or state values. How can it be used to control the visibility or behavior of components based on user interactions or other dynamic conditions?",
        answers: [
            {
                name: "Viki",
                answer: `A conditional rendering azt jelenti, hogy React-ben csak akkor jelenítünk meg egy elemet vagy komponenst, ha egy adott feltétel teljesül (pl. egy state értéke vagy props alapján).

  Milyen technikák vannak?
    1. if-else (JSX-en kívül)
      if (isLoggedIn) {
        return <p>Üdv újra itt!</p>;
      } else {
        return <p>Kérlek, jelentkezz be!</p>;
      }
    2. Ternary operátor (? :) JSX-en belül:
      <p>{isLoggedIn ? "Üdv újra itt!" : "Kérlek, jelentkezz be!"}</p>
      
    3. Logikai ÉS (&&) – ha csak akkor kell megjeleníteni, ha igaz:
      {isLoggedIn && <p>Szia felhasználó!</p>}
      Visszatérés null-lal – ha nem akarunk semmit megjeleníteni:
      {shouldShow ? <MyComponent /> : null}

    Mire jó a conditional rendering?
      - Egyes elemek csak akkor jelennek meg, ha a felhasználó be van jelentkezve
      - Egy hibaüzenet csak akkor látható, ha valóban van hiba
      - Egy betöltés jelző (Loading...) csak akkor látszik, amíg jönnek az adatok
      - A viselkedés dinamikusan változhat gombnyomás vagy más interakció hatására`
            },
            {
                name: "ChatGPT",
                answer: "You can use:\n- Ternary operators: {isLoggedIn ? <Logout /> : <Login />}\n- Logical AND: {hasItems && <ItemList />}\n- Conditional return statements\nThis helps control what gets rendered based on state or props."
            }
        ]
    },
    {
        category: "React",
        question: "What is the difference between a controlled and uncontrolled input element in React?",
        answers: [
            {
                name: "Viki",
                answer: `  Kontrollált input (controlled input):
    - A mező értékét a React state-ben tároljuk
    - A value és onChange prop-okat használjuk
    - A React vezérli az input értékét

    Előny:
      - Teljesen irányított
      - Könnyen validálható, figyelhető, formázott

  Nem kontrollált input (uncontrolled input):
    - Az input saját maga kezeli az értékét (DOM vezérli)
    - React nem tárolja külön state-ben
    - Hozzáférés pl. ref segítségével történik

    Előny:
      - Gyors, egyszerű
      - Kevesebb kód
      - Kevésbé ajánlott, ha sok mező vagy validáció kell

  Összefoglalás:
    - Kontrollált = React kezeli az input értékét (useState)
    - Nem kontrollált = böngésző (DOM) kezeli, React csak figyeli`
            },
            {
                name: "ChatGPT",
                answer: "- Controlled: React manages the value via state\n- Uncontrolled: Value is managed by the DOM (accessed via ref)\n\nControlled inputs give more control and validation, but require more setup."
            }
        ]
    },
    {
        category: "React",
        question: "How can you get the current input values from a form that contains uncontrolled input elements?",
        answers: [
            {
                name: "Huni",
                answer: `Ha az űrlap nem kontrollált mezőket használ (vagyis nem useState-tel követjük az értékeket), akkor az aktuális input értékeket a React useRef hook segítségével tudjuk lekérni, vagy a submit-nél az e.target.elements[name] iterálásával.`
            },
            {
                name: "ChatGPT",
                answer: "Use the ref hook (useRef) to access the input’s DOM node and get its value.\n\nref.current.value"
            }
        ]
    },
    {
        category: "React",
        question: "How can you connect a label element to an input element in React?",
        answers: [
            {
                name: "Viki",
                answer: `React-ben úgy kapcsolsz össze egy label és egy input elemet, hogy:

    Az input kap egy id-t
    A label pedig a htmlFor attribútummal utal erre az id-re

    Figyelem: HTML-ben for lenne, de React-ben htmlFor a neve!

      <label htmlFor="username">Felhasználónév:</label>
      <input id="username" type="text" />

    ha rákattintasz a label szövegre, az input automatikusan fókuszt kap
    ez hozzáférhetőség (accessibility) szempontból is nagyon fontos`
            },
            {
                name: "ChatGPT",
                answer: "Use the htmlFor attribute on <label>, matching the input’s id:\n\n<label htmlFor='email'>Email</label>\n<input id='email' />"
            }
        ]
    },
    {
        category: "React",
        question: "How can you create a select input element in React? How does it differ from the html's select tag? Can you show an example of a controlled and an uncontrolled select element with setting a default value?",
        answers: [
            {
                name: "Viki",
                answer: `A React select eleme majdnem úgy működik, mint a sima HTML-ben, csak React-ben a kiválasztott értéket value-ként kezeljük → így lesz kontrollált mező
  A defaultValue csak a nem kontrollált változatban működik

   Kontrollált <select> (React vezérli)

      return (
        <div>
          <label htmlFor="pet">Válassz állatot:</label>
          <select id="pet" value={selected} onChange={(e)=>setSelected(e.target.value)}>
            <option value="dog">Kutya</option>
            <option value="cat">Macska</option>
            <option value="bird">Madár</option>
          </select>
          <p>Kiválasztott: {selected}</p>
        </div>
      );

    Nem kontrollált <select> (DOM vezérli)
      A React itt nem tartja nyilván a kiválasztott értéket, csak kiolvassa (pl reffel):

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="pet">Válassz állatot:</label>
          <select id="pet" ref={selectRef} defaultValue="cat">
            <option value="dog">Kutya</option>
            <option value="cat">Macska</option>
            <option value="bird">Madár</option>
          </select>
          <button type="submit">OK</button>
        </form>
      );`
            },
            {
                name: "ChatGPT",
                answer: "Controlled version:\n- Use value and onChange\n\nUncontrolled version:\n- Use defaultValue or access via ref\nJSX syntax is similar to HTML, but values and handlers are added in {}."
            }
        ]
    },
    {
        category: "React",
        question: "Explain how a proxy works during React development. How can you tell the Vite dev server to proxy the requests to your backend? What kind of URLs do you have to use in the fetch in your JS code, if you want to use the proxy?",
        answers: [
            {
                name: "Viki",
                answer: `A proxy egy olyan köztes „kapcsolat”, ami lehetővé teszi, hogy a React fejlesztőszerver (pl. Vite) átirányítsa a kéréseket a backend szerverre (pl. API, Firebase emulator), anélkül hogy CORS hibát kapnál.

  1. Miért kell proxy?
    - A frontend (React app) pl. a localhost:5173-on fut
    - A backend pl. a localhost:3000-on
    - Ha a React app közvetlenül hívná a backendet → CORS hibát kapnál
    - A proxy megoldja, hogy a frontend úgy érezze, mintha minden egy szerveren futna

  2. Hogyan állítasz be proxy-t Vite-ben?
    Nyisd meg a vite.config.js vagy vite.config.ts fájlt

    Add hozzá a server.proxy beállítást így:

    export default {
      server: {
        proxy: {
          '/api': 'http://localhost:3000'
        }
      }
    };

  Ez azt jelenti : „Ha a React app /api-val kezdődő kérést küld, akkor a Vite továbbítja azt a localhost:3000 szerverre.”

  3. Milyen URL-t használj a fetch hívásban?
    Mivel a proxy átirányítja a kérést, csak a relatív útvonalat használod, nem kell teljes URL-t írni.

    fetch('/api/employees') // ez proxy-n keresztül megy át
    NE írj teljes http://localhost:3000/... URL-t, mert az megkerülné a proxy-t, és CORS hibát okozhat.

  Összefoglalás magyarul:
    - A proxy fejlesztés közben átirányítja a kéréseket, hogy ne legyen CORS probléma
    - A Vite-ben a server.proxy beállítással konfigurálod
    - A fetch URL-ben csak relatív útvonalat használj (pl. /api/...), nem teljes URL-t.`
            },
            {
                name: "ChatGPT",
                answer: "A proxy redirects API calls from frontend (React) to backend during development.\nIn Vite, you configure it in vite.config.js.\nIn your fetch calls, use relative paths like /api/users, and the proxy sends it to the actual backend server."
            }
        ]
    },
    {
        category: "React",
        question: "What is the difference between statements and expressions in Javascript? Why is it important when working with JSX?",
        answers: [
            {
                name: "Viki",
                answer: `- Expression (kifejezés): Egy olyan kód, ami visszaad egy értéket.
  - Statement (utasítás): Olyan kódrészlet, ami valamit végrehajt, de nem ad vissza közvetlen értéket.

    Expression példák:
      2 + 2          // → 4
      "Hello"        // → "Hello"
      x > 5          // → true vagy false
      name && "Üdv"  // → "Üdv" vagy false

      jsx: 
        <p>{2 + 2}</p>
        <p>{user.name}</p>

    Statement példák:
      if (x > 5) { ... }
      for (...) { ... }
      let a = 3;
      function hello() { ... }

      jsx
        // ❌ Nem működik JSX-ben:
        <p>{if (x > 5) { return "igen" }}</p>

        Helyette használj ternary-t vagy &&:
        <p>{x > 5 ? "igen" : "nem"}</p>

  A JSX nem enged meg statement-et { ... } belül – csak expression-öket.
  Ezért például if, for, while nem írható JSX-be – de ternary (? :) vagy logikai && igen!`
            },
            {
                name: "ChatGPT",
                answer: "- Statements perform actions but don’t return values (e.g., if, for)\n- Expressions return values (e.g., a + b, x > 5 ? 'yes' : 'no')\nJSX can only embed expressions, not full statements.\nThis matters when writing logic inside JSX."
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "What is a test case?",
        answers: [
            {
                name: "ChatGPT",
                answer: "A test case is a single, defined scenario that checks whether a specific part of your code behaves as expected. It typically includes inputs, the expected outcome, and assertions to verify the behavior."
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "What are the advantages of writing unit tests?",
        answers: [
            {
                name: "ChatGPT",
                answer: "- Helps catch bugs early\n- Improves code quality and maintainability\n- Makes refactoring safer\n- Acts as documentation for how the code should behave\n- Builds confidence during development and deployment"
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "What is an assertion? Give some examples.",
        answers: [
            {
                name: "ChatGPT",
                answer: "- expect(result).toBe(5)\n- expect(user.isLoggedIn).toBeTruthy()\n- expect(array).toContain('item')"
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "What is the arrange/act/assert pattern?",
        answers: [
            {
                name: "ChatGPT",
                answer: "A structure for writing clean tests:\n- Arrange: Set up test data or context\n- Act: Run the function or action being tested\n- Assert: Check the result with assertions\n\nIt helps make tests more readable and consistent."
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "What is code coverage? Why is it used?",
        answers: [
            {
                name: "ChatGPT",
                answer: "Code coverage measures how much of your code is executed when running tests. It helps identify untested parts of the codebase and improve test completeness, but high coverage doesn't always guarantee good tests."
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "How do you test asynchronous code with Vitest?",
        answers: [
            {
                name: "ChatGPT",
                answer: "You use async/await or return a Promise.\n\nExample:\n\nit('fetches data', async () => {\n  const data = await fetchData();\n  expect(data).toBeDefined();\n});"
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "What is `setup` & `teardown` in Vitest?",
        answers: [
            {
                name: "ChatGPT",
                answer: "- setup (like beforeEach) prepares the environment before a test runs.\n- teardown (like afterEach) cleans up after tests to avoid side effects.\n\nThey're useful for tests that share state or dependencies."
            }
        ]
    },
    {
        category: "Testing Basics",
        question: "Give an example when you would use in Vitest's the `toBe` & `toEqual` assertions.",
        answers: [
            {
                name: "ChatGPT",
                answer: "- Use toBe for comparing primitive values (e.g., numbers, strings) or checking reference equality.\n- Use toEqual for comparing objects or arrays by value.\n\nExample:\n\nexpect(3).toBe(3); // primitive\nexpect({ name: 'Anna' }).toEqual({ name: 'Anna' }); // object"
            }
        ]
    },
    {
        category: "Firebase Realtime Database",
        question: "What is Firebase Realtime Database? Explain the key features and advantages of the Realtime Database as a NoSQL database solution.",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Realtime Database egy felhőalapú NoSQL adatbázis, amely valós időben tárolja és szinkronizálja az adatokat az összes csatlakoztatott kliens között. Olyan alkalmazásokhoz ideális, amelyek élő frissítéseket igényelnek, például chat alkalmazások, együttműködési eszközök vagy IoT rendszerek.

  Főbb jellemzők és előnyök:
    - Valós idejű szinkronizáció: Az adatbázisban történő változások azonnal megjelennek az összes kliensen.
    - Offline támogatás: Az adatokat helyileg gyorsítótárazza, így az offline módosítások később automatikusan szinkronizálódnak.
    - NoSQL szerkezet: Az adatok egy rugalmas JSON fa formátumban tárolódnak, nem pedig táblázatokban.
    - Biztonsági szabályok: JSON alapú szabályokkal vezérelhetjük az adatokhoz való hozzáférést.
    - Skálázhatóság: Nagyszámú egyidejű kapcsolatot képes kezelni.
    - Egyszerű integráció: Könnyen együttműködik a Firebase Authentication-nel és más Firebase szolgáltatásokkal.`
            },
            {
                name: "ChatGPT",
                answer: "Firebase Realtime Database is a cloud-hosted NoSQL database that stores data as one large JSON object and syncs in real time across all connected clients.\n\nKey features:\n- Real-time data syncing\n- Offline support\n- Cross-platform (Android, iOS, Web)\n- Serverless and scalable\n- Integrated with Firebase Authentication and other Firebase services"
            }
        ]
    },
    {
        category: "Firebase Realtime Database",
        question: "Explain the concept of storing data in a Realtime Database. How does a Realtime Database store data in a JSON tree?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Realtime Database egy JSON alapú dokumentumszerkezetet használ, amelyben az adatok egy fa-struktúrában tárolódnak. Minden csomópont egy kulcs-érték pár, és az alcsomópontok beágyazhatók a szülő csomópontokba.

    Példa:
    {
      "users": {
        "user1": {
          "name": "Alice",
          "age": 25
        },
        "user2": {
          "name": "Bob",
          "age": 30
        }
      }
    }
  Ez a rugalmas struktúra lehetővé teszi a hierarchikus tárolást, de fontos odafigyelni, hogy ne legyen túl mélyen beágyazott, mert az adatkezelés bonyolulttá válhat.
`
            },
            {
                name: "ChatGPT",
                answer: "Data in the Realtime Database is structured as a JSON tree. Every piece of data is stored as a key-value pair, and can be accessed via a path. This tree-like structure is flexible but requires thoughtful organization to avoid deeply nested data, which can cause performance and security issues."
            }
        ]
    },
    {
        category: "Firebase Realtime Database",
        question: "How can you access the Realtime Database with a REST API? What do the typical CRUD operations look like?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Realtime Database REST API-t biztosít, amely lehetővé teszi az adatbázis HTTP kérésekkel történő elérését.

  Tipikus CRUD műveletek:

  Létrehozás (POST/PUT)
      async function createUser() {
        try {
          const response = await fetch("https://your-database.firebaseio.com/users/user1.json", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "Alice", age: 25 })
          });

          if (!response.ok) throw new Error(......);
          
          const data = await response.json();
          console.log("Created:", data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      createUser();


  Olvasás (GET)
      async function readUser() {
        try {
          const response = await fetch("https://your-database.firebaseio.com/users/user1.json");

          if (!response.ok) throw new Error(.....);
          
          const data = await response.json();
          console.log("Read:", data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      readUser();


  Frissítés (PATCH)
    async function updateUser() {
      try {
        const response = await fetch("https://your-database.firebaseio.com/users/user1.json", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ age: 26 })
        });

        if (!response.ok) throw new Error(.....);

        const data = await response.json();
        console.log("Updated:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    updateUser();


  Törlés (DELETE)
    async function deleteUser() {
      try {
        const response = await fetch("https://your-database.firebaseio.com/users/user1.json", {
          method: "DELETE"
        });

        if (!response.ok) throw new Error(....);

        console.log("Deleted successfully");
      } catch (error) {
        console.error("Error:", error);
      }
    }
    deleteUser();`
            },
            {
                name: "ChatGPT",
                answer: "You can access it via a RESTful endpoint, using standard HTTP methods:\n- Create (POST) – Adds new data\n- Read (GET) – Retrieves data\n- Update (PATCH/PUT) – Modifies existing data\n- Delete (DELETE) – Removes data\n\nAll operations require the .json extension in the URL and can include an auth token for secure access."
            }
        ]
    },
    {
        category: "Firebase Realtime Database",
        question: "How the Realtime Database Security Rules can help to define the structure of the stored data (validation) when the data can be read from or written to?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Realtime Database biztonsági szabályai segítenek meghatározni, ki olvashat és írhat adatokat, valamint biztosítják az adatok validálását azáltal, hogy strukturált feltételeket alkalmaznak. Ezeket a szabályokat JSON formátumban írjuk és a database különböző szintjein érvényesíthetjük.

  Biztonsági szabályok főbb jellemzői:
  - Olvasási és írási engedélyek – Meghatározhatjuk, hogy ki férhet hozzá az adatokhoz (".read" és ".write").
  - Adatvalidálás – Biztosítja, hogy csak megfelelő formátumú és értékű adatokat lehessen menteni (például kötelező mezők, adattípusok ellenőrzése).
  - Hierarchikus struktúra – Szabályokat alkalmazhatunk a database adott útvonalaira, így részletes hozzáférés-kezelést biztosíthatunk.
  - Egyedi feltételek – A szabályok ellenőrizhetik az értékeket, például hogy egy életkor szám legyen, vagy hogy egy felhasználó csak a saját adatait módosíthassa.

      Biztonsági szabályok példája:
      {
        "rules": {
          "users": {
            "$uid": {
              ".read": "auth != null && auth.uid == $uid",
              ".write": "auth != null && auth.uid == $uid",
              "age": {
                ".validate": "newData.isNumber() && newData.val() > 0"
              }
            }
          }
        }
      }

Magyarázat:
  - Csak bejelentkezett felhasználók férhetnek hozzá a saját adataikhoz.
  - Az age mezőnek számnak kell lennie, és nagyobbnak kell lennie, mint 0.
  - Ez megakadályozza az illetéktelen hozzáférést és biztosítja az adatok helyességét.`
            },
            {
                name: "ChatGPT",
                answer: "Security Rules are used to control read/write access and data validation.\n\nYou can define:\n- Who can access data (using authentication checks)\n- When data can be accessed (using conditions)\n- What shape the data must have (validation rules)\n\nThis helps enforce structure in a schema-less environment and improve security."
            }
        ]
    },
    {
        category: "Firebase Realtime Database",
        question: "Why is it a problem if the data is deeply nested? What techniques can solve this issue?",
        answers: [
            {
                name: "Viki",
                answer: `A túlzottan mélyen ágyazott adatszerkezet több problémát okozhat:
  - Teljesítményproblémák – Egy mélyen beágyazott adat lekérésekor az egész faág betöltődik, még ha csak egy kis részére van szükség.
  - Bonyolult adatelérés – A mélyen ágyazott struktúrák esetén nehezebb elérni vagy frissíteni az egyes értékeket.
  - Biztonsági problémák – A Firebase biztonsági szabályai csomópont szinten működnek, így nehezebb a finomhangolt hozzáférés-ellenőrzés.
  - Adatduplikáció veszélye – Ha az adatok túl mélyen vannak ágyazva, az alkalmazás más részei esetleg duplikálni kényszerülnek az adatokat a könnyebb hozzáférés érdekében.

  Megoldási technikák:
  - Adatszerkezet laposítása – Inkább normalizált adatmodellt használjunk mély ágyazás helyett
  - Különálló csomópontok használata – Az összetartozó adatokat külön csomópontokban tároljuk és azonosítókkal kapcsoljuk össze.
  - Denormalizáció – Kis mennyiségű adatok megkettőzése több helyen a gyorsabb elérés érdekében (csak ha indokolt).
  - Indexelés és lekérdezés – Firebase indexelt lekérdezései segítenek az adatok hatékony elérésében mély bejárás nélkül.

  Példa:
  🔴 Rossz (Mélyen ágyazott)
  {
    "users": {
      "user1": {
        "profile": {
          "name": "Alice",
          "age": 25,
          "posts": {
            "post1": { "title": "Első bejegyzés", "content": "Hello világ" },
            "post2": { "title": "Második bejegyzés", "content": "Újabb bejegyzés" }
          }
        }
      }
    }
  }
  💡 Probléma: Egyetlen bejegyzés lekéréséhez az egész profile-t is le kell tölteni.

  ✅ Jobb (Laposabb szerkezet)
  {
    "users": {
      "user1": { "name": "Alice", "age": 25 }
    },
    "posts": {
      "post1": { "userId": "user1", "title": "Első bejegyzés", "content": "Hello világ" },
      "post2": { "userId": "user1", "title": "Második bejegyzés", "content": "Újabb bejegyzés" }
    }
  }
  💡 Megoldás: A bejegyzések külön vannak tárolva, és az userId segítségével kapcsolódnak a felhasználókhoz, így az adatok felesleges letöltése elkerülhető. ✅`
            },
            {
                name: "ChatGPT",
                answer: "Deeply nested data can lead to:\n- Inefficient reads (fetching large branches when only part is needed)\n- Complex security rules\n- Difficult updates and maintenance\n\nSolutions:\n- Flatten the structure (use fan-out patterns)\n- Use references or keys instead of nesting full objects\n- Normalize data similarly to how it’s done in relational databases"
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "Why authentication is needed for a web application?",
        answers: [
            {
                name: "Viki",
                answer: `Az autentikáció (azonosítás) szükséges, hogy biztosítsa a webalkalmazás biztonságát, és lehetővé tegye a felhasználók azonosítását. Lehetővé teszi, hogy az alkalmazás csak a megfelelő jogosultságokkal rendelkező felhasználók számára biztosítson hozzáférést bizonyos funkciókhoz, így megvédve a felhasználói adatokat és az alkalmazás érzékeny részeit.`
            },
            {
                name: "ChatGPT",
                answer: "Authentication is essential to verify the identity of users accessing a web application. It ensures that only authorized individuals can access protected features or data, improving both security and user personalization."
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "What are the key functionalities of an authentication system?",
        answers: [
            {
                name: "Viki",
                answer: `Az autentikációs rendszer fő funkciói közé tartozik:
    - Felhasználói azonosítás: Az autentikációs rendszer lehetővé teszi a felhasználók azonosítását különböző módokon (pl. e-mail, jelszó, biometrikus adatok).
    - Jelszókezelés: A rendszer kezeli a jelszavakat, biztosítja azok tárolását és védelmét.
    - Hozzáférési tokenek generálása: A felhasználók bejelentkezése után a rendszer hozzáférési tokeneket biztosít, amelyekkel a felhasználók jogosultságot nyerhetnek a további szolgáltatásokhoz.
    - Session kezelés: Az autentikációs rendszer nyomon követi a bejelentkezett felhasználókat, és biztosítja, hogy a felhasználók a szükséges ideig hozzáférhessenek a rendszerhez.`
            },
            {
                name: "ChatGPT",
                answer: "- User registration and login\n- Credential validation (e.g., email/password, token)\n- Session management (e.g., cookies or tokens)\n- Password reset/recovery\n- Optionally, multi-factor authentication (MFA)"
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "How does the server know that the client is successfully authenticated?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Authentication esetében a szerver akkor tudja, hogy a kliens sikeresen autentikált, amikor a kliens a sikeres bejelentkezés után egy hitelesítési tokent küld a szervernek. Ez a token egy JSON Web Token (JWT), amelyet a Firebase Authentication generál, és tartalmazza a felhasználó hitelesítési adatait, például a felhasználó ID-ját.

  - Bejelentkezés után a kliens megkapja a hozzáférési tokent: 
  A sikeres bejelentkezés után, például e-mail/jelszó, Google, Facebook vagy más szolgáltatóval, a Firebase létrehoz egy token-t.
  - A token küldése a szervernek: 
  Ezután a kliens a Firebase által generált token-t (például JWT-t) elküldi a szervernek, például HTTP fejlécben, mint Authorization fejlécre, így a szerver tudja, hogy a felhasználó autentikált.
  - Token ellenőrzése a szerveren: 
  A szerver a kapott token-t ellenőrzi a Firebase Authentication SDK segítségével. A token tartalmazza a felhasználó egyedi azonosítóját (UID), és a Firebase SDK képes érvényesíteni a token-t, hogy meggyőződjön arról, hogy az nem járt le, és valóban a Firebase által lett kiadva.`
            },
            {
                name: "ChatGPT",
                answer: "The server uses a token-based system, like JWT (JSON Web Token). Once authenticated, the client sends the token with each request (e.g., in headers). The server verifies the token to identify the user and validate access."
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "What is the difference between Authentication and Authorization?",
        answers: [
            {
                name: "Viki",
                answer: `- Autentikáció (Authentication): Az autentikáció a felhasználó azonosítását jelenti. Ez azt jelenti, hogy a rendszer megpróbálja kideríteni, hogy ki a felhasználó (pl. e-mail és jelszó párosával).
  
  - Autorizáció (Authorization): Az autorizáció arra vonatkozik, hogy mihez férhet hozzá a felhasználó miután azonosították őt. Az autorizáció a felhasználói jogosultságok kezelésére összpontosít (pl. adminisztrátori vagy normál felhasználói jogosultságok).`
            },
            {
                name: "ChatGPT",
                answer: "- Authentication: Confirms who the user is\n- Authorization: Defines what the user is allowed to do\n\nAuthentication always happens before authorization."
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "How can you initialize the Firebase Authentication SDK?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Authentication SDK inicializálása úgy történik, hogy először importáljuk a Firebase SDK-t, majd a getAuth() függvény segítségével lekérjük az autentikációs szolgáltatást. A Firebase beállításoknak megfelelően kell az alkalmazást inicializálni, majd az autentikációs funkciókat ezen az objektumon keresztül használjuk.

    import { getAuth } from "firebase/auth";
    import { initializeApp } from "firebase/app";

    // Firebase konfiguráció
    const firebaseConfig = {
      apiKey: "API_KEY",
      authDomain: "PROJECT_ID.firebaseapp.com",
      projectId: "PROJECT_ID",
      storageBucket: "PROJECT_ID.appspot.com",
      messagingSenderId: "SENDER_ID",
      appId: "APP_ID"
    };

    // Firebase inicializálása
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);  // Autentikációs szolgáltatás inicializálása`
            },
            {
                name: "ChatGPT",
                answer: "After importing Firebase and initializing your app with initializeApp(), you call getAuth() to initialize the Authentication SDK. This sets up the service that manages login, logout, and current user tracking."
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "How the Firebase Realtime Database Security Rules can enforce authorization?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase Realtime Database biztonsági szabályai lehetővé teszik a felhasználói hozzáférés korlátozását és az engedélyek meghatározását. A szabályok alapját képezhetik az autentikációs tokenek, például a felhasználó egyedi ID-ja, és így biztosítható, hogy csak a jogosult felhasználók férhessenek hozzá az adatokhoz. Az adatbázis szabályai egyszerű logikát biztosítanak, mint például a read és write műveletek engedélyezése vagy tiltása a felhasználói állapot függvényében.

    {
      "rules": {
        "users": {
          "$userId": {
            ".read": "$userId === auth.uid",  // Csak a bejelentkezett felhasználó olvashatja saját adatait
            ".write": "$userId === auth.uid"  // Csak a bejelentkezett felhasználó írhatja a saját adatait
          }
        }
      }
    }`
            },
            {
                name: "ChatGPT",
                answer: "Security Rules can check the authenticated user using the auth object. For example, you can allow data access only if auth.uid === request.auth.uid, ensuring only the logged-in user can read/write their data."
            }
        ]
    },
    {
        category: "Firebase Authentication",
        question: "What kind of different authentication providers are supported by Firebase? Can you give some examples?",
        answers: [
            {
                name: "Viki",
                answer: `A Firebase különböző autentikációs szolgáltatókat támogat, lehetővé téve a felhasználók azonosítását többféle módon. 
  
  A támogatott autentikációs szolgáltatók a következők:
    - E-mail/jelszó: Felhasználók regisztrálhatják és bejelentkezhetnek e-mail cím és jelszó segítségével.
    - Google: A Google fiókkal történő bejelentkezés.
    - Facebook: A Facebook fiókkal történő bejelentkezés.
    - Twitter: A Twitter fiókkal történő bejelentkezés.
    - GitHub: A GitHub fiókkal történő bejelentkezés.
    - Anonim: Anonim módú bejelentkezés a felhasználói adatok összegyűjtése nélkül.
    - Phone (SMS): A telefonos autentikáció, ahol SMS-ben érkezik egy kód a felhasználónak.`
            },
            {
                name: "ChatGPT",
                answer: "Firebase supports:\n- Email/Password\n- OAuth providers (e.g., Google, Facebook, GitHub, Microsoft)\n- Phone number authentication\n- Anonymous authentication\n\nThis allows developers to choose the most appropriate login method for their application and users."
            }
        ]
    },
    {
        category: "Web Applications",
        question: "Explain the concept of React Router. How does it enable client-side routing in React.js applications and facilitate the creation of multi-page-like experiences?",
        answers: [
            {
                name: "Viki",
                answer: `A React Router egy könyvtár, amely lehetővé teszi a kliensoldali útválasztást React alkalmazásokban, így többoldalas élményt nyújt egyoldalas alkalmazás (SPA) keretein belül.

  Hogyan működik?
    - A History API segítségével módosítja az URL-t, teljes oldalfrissítés nélkül.
    - A <BrowserRouter>, <Routes>, és <Route> komponensek határozzák meg a nézeteket.
    - A <Link> komponens helyettesíti az <a> tageket a gyors navigáció érdekében.

    Példa:
    <BrowserRouter>
      <nav>
        <Link to="/">Kezdőlap</Link>
        <Link to="/about">Rólunk</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    ✅ Eredmény: Az URL változik, de nincs oldalfrissítés.`
            },
            {
                name: "ChatGPT",
                answer: "React Router is a library that enables client-side routing, allowing React apps to simulate multiple pages by rendering different components based on the URL path—without reloading the entire page. It provides a seamless user experience, similar to traditional multi-page websites, but with faster navigation."
            }
        ]
    },
    {
        category: "Web Applications",
        question: "Why is it needed to `build` a React application? What does this build step do?",
        answers: [
            {
                name: "Viki",
                answer: `A React alkalmazás buildelésére azért van szükség, mert a fejlesztői környezetben használt kód nem optimalizált, és nem megfelelő a termelési (éles) környezetben történő futtatásra. A build lépés során a kódot minifikálják, optimalizálják, és készítenek egy verziót, amely gyorsan betöltődik, és jól működik a felhasználók számára.

  Mi történik a build lépés során?

  - Minifikálás (Minification & Optimization):
    A kódot összenyomják, eltávolítják a fölösleges szóközöket, kommenteket és egyéb nem szükséges karaktereket, így csökkentve a fájlméretet. Ez gyorsabb betöltést biztosít.

  - Bundling:
    Az összes JavaScript fájlt egyetlen vagy néhány fájlba egyesítik, hogy csökkentsék a HTTP kérések számát, és gyorsabbá tegyék az alkalmazás betöltését.

  - Transzpiláció (Transpilation):
    A modern JavaScript kódot (pl. ES6+) régebbi JavaScript verzióra konvertálják, hogy minden böngésző támogassa. Például, a JSX-t is sima JavaScript kóddá alakítják.

  - Optimalizálás (Asset Optimization):
    Az alkalmazás más részeit (pl. képek, stílusok) is optimalizálják, hogy gyorsabb legyen a betöltés és a felhasználói élmény.

  Kész verzió:
    A buildelési folyamat végén létrejön egy "build" vagy "dist" mappa, amely tartalmazza azokat a fájlokat, amelyek éles környezetben, a felhasználóknak kiszolgálhatók. Ezek a fájlok már nem tartalmaznak fejlesztői információkat, és a legjobb teljesítményt nyújtják.

  Összegzés:
    A buildelési folyamat célja, hogy a fejlesztői környezetben használt kódot előkészítse a termelési környezetre, biztosítva a gyors betöltést, optimalizált teljesítményt és jobb felhasználói élményt.`
            },
            {
                name: "ChatGPT",
                answer: "The build step optimizes your app for production. It:\n- Bundles all files (JS, CSS, etc.)\n- Minifies code (removes spaces, shortens names)\n- Transpiles modern JavaScript (like JSX) into browser-compatible code\n- Improves performance and loading speed\n\nThe output is a set of static files ready to be deployed."
            }
        ]
    },
    {
        category: "Web Applications",
        question: "What is the difference between local development (using a dev server, like Vite) and production deployment?",
        answers: [
            {
                name: "Viki",
                answer: `A helyi fejlesztés gyors iterációt és hibakeresést biztosít, míg az éles telepítés a végfelhasználók számára biztosít gyors, biztonságos és optimalizált alkalmazásélményt.

  1. Cél:
    - Local development: A cél a gyors fejlesztés és hibakeresés, hogy a fejlesztők könnyen tesztelhessék a változtatásaikat.
    - Production deployment: Az alkalmazást optimális teljesítményre készítik, hogy a felhasználók számára gyors, biztonságos és megbízható legyen.

  2. Sebesség:
    - Local development: Lassabb, mivel nem történik optimalizálás és a kód minden változása azonnal frissül. A fejlesztői eszközök és a forró újratöltés (HMR) lassíthatják a teljesítményt.
    - Production deployment: Gyorsabb, mivel a kód minifikálva és optimalizálva van, és a szükséges fájlok minimalizálva vannak, hogy csökkentsék a betöltési időt.

  3. Kiszolgáló típusa:
    - Local development: Fejlesztői szerverek, mint például Vite, Webpack Dev Server vagy Parcel futtatják az alkalmazást, és lehetővé teszik a gyors fejlesztést.
    - Production deployment: Statikus fájlok hosztolása történik, például Firebase, Vercel, Netlify vagy egyéb hosztolási szolgáltatásokkal.

  4. Kód olvashatósága:
    - Local development: Az összes kód olvasható és nem optimalizált (nem minifikált). Könnyen debugolható.
    - Production deployment: A kód minifikálva és optimalizálva van, hogy csökkentse a fájlok méretét és gyorsabb betöltést biztosítson. Ilyenkor a kód olvashatósága romlik.

  5. Hibakezelés:
    - Local development: Részletes hibaüzenetek jelennek meg, amelyek segítenek a hibák gyors elhárításában.
    - Production deployment: Az alkalmazás hibakezelése egyszerűsödik, és nem tartalmazza a fejlesztés során használt részletes hibaüzeneteket, mivel a felhasználói élményre fókuszálunk.

  6. Fájlok és források:
    - Local development: Az összes fájl (forráskód, függőségek) elérhető és módosítható.
    - Production deployment: Csak a szükséges fájlok kerülnek telepítésre (minifikált JS, CSS, HTML), és nem tartalmazzák a fejlesztéshez szükséges fájlokat.

  7. Közvetlen újratöltés:
    - Local development: Ha változtatást végzel, a böngésző azonnal frissíti az alkalmazást, így gyorsan tesztelheted a módosításokat.
    - Production deployment: Az új verziók telepítése után a felhasználóknak várniuk kell a frissítésre, és nem történik automatikus újratöltés.

  8. Biztonság:
    - Local development: Nincs szükség különös biztonsági intézkedésekre, mivel a kód nyíltan elérhető és a fejlesztési környezetben fut.
    - Production deployment: A kód minifikálása és optimalizálása segít a biztonságban, mivel a kód nehezebben olvasható és megértett, illetve az éles környezetben további biztonsági intézkedéseket is alkalmaznak.

  9. Példa:
    - Local Development: npm run dev starts a dev server for fast local changes.
    - Production Deployment: npm run build prepares the app for deployment, minifying and optimizing it for production use.`
            },
            {
                name: "ChatGPT",
                answer: "- Local development uses tools like Vite that support hot reloading and helpful error messages but are not optimized for speed or security.\n- Production deployment uses the built and optimized version of the app, suitable for real users on the web. It's faster and more secure."
            }
        ]
    },
    {
        category: "Web Applications",
        question: "How can you deploy a Firebase application?",
        answers: [
            {
                name: "Viki",
                answer: `1. Telepítsd a Firebase CLI-t (ha még nincs telepítve)
    npm install -g firebase-tools
    Ezzel telepíted a Firebase parancssori eszközeit a számítógépedre.

  2. Jelentkezz be a Firebase-be
    firebase login
    Ez megnyit egy böngészőt, ahol be kell jelentkezned a Google-fiókoddal.

  3. Inicializáld a Firebase-t a projektedben
    - Lépj be a projekted mappájába, majd futtasd ezt a parancsot:
    - firebase init
    - Válaszd ki a "Hosting" opciót.
    - Válaszd ki a Firebase projektet, amelyhez csatlakoztatni szeretnéd.
    - Állítsd be a könyvtárat (például build React esetén, dist Vite esetén).
    - Ha egy Single Page Application (SPA) alkalmazást telepítesz (pl. React), válaszd az "Igen" lehetőséget.
    - Dönthetsz arról, hogy beállítasz-e automatikus GitHub deployt (opcionális).

  4. Építsd meg a projektet (ha frontend alkalmazás, pl. React, Vue, stb.)
    Ha például Reactet használsz, futtasd ezt:
    npm run build
    Ez létrehozza az optimalizált, éles verziót az alkalmazásodból.

  5. Telepítsd az alkalmazást (Deploy)
    firebase deploy
    Ez feltölti az alkalmazásodat a Firebase szervereire, és egy élő URL-t biztosít.

  6. Nyisd meg az éles alkalmazást
    A telepítés után a Firebase CLI megad egy URL-t, például:
    https://your-project-name.web.app/
    Ezen a linken az alkalmazásod mostantól elérhető a felhasználók számára.`
            },
            {
                name: "ChatGPT",
                answer: "You deploy with the Firebase CLI:\n1. Run firebase init to set up hosting\n2. Run npm run build to create the production version\n3. Use firebase deploy to upload your files to Firebase Hosting\n\nFirebase handles SSL, caching, and CDN out of the box."
            }
        ]
    },
    {
        category: "Web Applications",
        question: "What are React Contexts? Which use cases are they suitable for?",
        answers: [
            {
                name: "Viki",
                answer: `Normál esetben, ha egy adatot egy magasabb szintű komponensből egy mélyebben lévő komponensnek kell továbbadni, akkor minden köztes komponensnek át kell adnia azt a props segítségével. Ezt nevezzük prop drillingnek, ami bonyolulttá teheti a kódot.

    A React Context ezt a problémát oldja meg azzal, hogy egy globális állapotot hoz létre, amelyet a fa mélyebb komponensei közvetlenül elérhetnek anélkül, hogy a köztes komponenseken át kellene adni.

    Hogyan működik a React Context?
      - A React Context három fő elemből áll:
      - Context létrehozása – React.createContext()
      - Context Provider (Ellátó) – A magasabb szitű komponens, amely az adatokat biztosítja.
      - Context Consumer (Fogyasztó) – Azok a komponensek, amelyek az adatokat elérik.

    Példa egy React Context használatára:
      import React, { createContext, useContext, useState } from "react";

      // 1. Létrehozunk egy Context-et
      const ThemeContext = createContext();

      function ThemeProvider({ children }) {
        const [theme, setTheme] = useState("light");

        return (
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
          </ThemeContext.Provider>
        );
      }

      // 2. Egy komponens, amely felhasználja a Context-et
      function ThemedButton() {
        const { theme, setTheme } = useContext(ThemeContext);
        
        return (
          <button
            style={{
              background: theme === "light" ? "#fff" : "#333",
              color: theme === "light" ? "#000" : "#fff",
            }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </button>
        );
      }

      // 3. Az alkalmazásban használjuk a Context-et
      function App() {
        return (
          <ThemeProvider>
            <ThemedButton />
          </ThemeProvider>
        );
      }

      export default App;

    Ebben a példában a ThemeProvider tárolja a témát (light vagy dark), és a ThemedButton közvetlenül eléri azt a useContext segítségével.

    Milyen esetekben érdemes használni a React Context-et?
      A React Context akkor hasznos, ha egy állapotot vagy adatot több komponensben kell elérni anélkül, hogy minden szinten át kellene adni props-ként.

    Tipikus felhasználási esetek:
      - Téma (dark/light mode)
      - Felhasználói autentikáció (bejelentkezett felhasználó adatai)
      - Nyelvi beállítások (i18n, többnyelvű támogatás)
      - Globális állapot (például bevásárlókosár egy webshopban)
      - Ha csak egy vagy két szinten kell adatot továbbadni, akkor nem szükséges a Context, ilyenkor elég a props. Ha viszont mélyebb struktúrákban kell - adatot kezelni, a React Context jó megoldás lehet.

    Összegzés
      - A React Context segít elkerülni a prop drilling-et.
      - Kiválóan alkalmas globális állapotok kezelésére, például téma, autentikáció vagy nyelvi beállítások.
      - Az adatok megosztása a useContext segítségével gyors és hatékony.
      - Ha egy állapot gyakran változik és sok komponens használja, akkor jobb lehet a Redux vagy a Zustand, mert a React Context nem teljes értékű állapotkezelő.`
            },
            {
                name: "ChatGPT",
                answer: "React Context is a way to share state or values globally across a component tree—without prop drilling.\n\nIt’s best used for global data like:\n- Auth state (logged-in user)\n- Theme (light/dark mode)\n- Language preferences\n\nIt simplifies state management in medium-sized apps."
            }
        ]
    }
]



export { data };

