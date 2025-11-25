# Web Module Questions

## Javascript Language Features

- What is ECMAScript? What is the difference between Javascript & ECMAScript?

  ECMAScript egy szabvány, amit az ECMA International szervezet tart fenn. Ez határozza meg, hogyan működjön a nyelv alapja: például a változók, függvények, ciklusok, objektumok viselkedését. Az ECMAScript egy nyelvi specifikáció, tehát egy "szabálykönyv".

  A JavaScript viszont egy megvalósítás (implementáció), ami az ECMAScript szabványt követi. A JavaScript nemcsak az ECMAScript szabványt tartalmazza, hanem extra dolgokat is, például a DOM kezelést a böngészőben, API-kat, eseménykezelést stb.

  ECMAScript = a szabvány, a szabályok, amik alapján működnie kell a nyelvnek.
  JavaScript = az egyik legismertebb nyelv, ami az ECMAScript szabványt valósítja meg, és ezen kívül tartalmaz böngészőspecifikus képességeket is.

        ECMAScript is a standard maintained by ECMA International. It defines how the core language should work, including things like variables, functions, loops, and objects. ECMAScript is a language specification, basically a "rulebook".

        JavaScript is an implementation that follows the ECMAScript standard. JavaScript includes not only the ECMAScript features but also additional things like DOM manipulation, browser APIs, event handling, etc.

        Simply put:
        ECMAScript = the standard, the rules that define how the language works.
        JavaScript = one of the most popular implementations of ECMAScript, with additional browser-specific features.

- Explain the concept of "block scoping" introduced in ES6. How does it differ from function scoping?

  Block scoping azt jelenti, hogy egy változó csak azon a kódrészen belül elérhető, amelyet blokknak tekintünk. A blokk lehet például egy if, for, vagy while ciklus. Az ES6 bevezette az új let és const kulcsszavakat, amelyek block scoped változókat hoznak létre.
  Ezzel szemben function scoping esetén a változók csak a függvényen belül érhetők el, függetlenül attól, hogy a változó milyen kódrészben van deklarálva a függvényen belül. A hagyományos var kulcsszó a function scoped változókat hozza létre.
  Block scoping: A változó csak a blokk szintjén érhető el, nem léphet ki onnan.
  Function scoping: A változó csak a függvény szintjén érhető el, de a függvényen belüli blokkok nem korlátozzák elérhetőségét.

        Block scoping means that a variable is only accessible within the block of code where it is defined. A block can be an if, for, or while loop, for example. ES6 introduced the let and const keywords, which create block scoped variables.
        On the other hand, function scoping means that variables are accessible only within the function they are declared in, regardless of whether they are inside a block within the function. The traditional var keyword creates function scoped variables.
        Block scoping: The variable is accessible only within the block and cannot be accessed outside.
        Function scoping: The variable is accessible within the function, but inner blocks inside the function don't limit its scope.

- What are template literals in ES6 and how do they improve string manipulation in JavaScript?
  A template literal (sablon literál) az ES6-ban bevezetett új szintaktika a sztringek kezelésére. A sablon literálokat ` (backtick) karakterek közé írjuk, nem pedig a hagyományos ' vagy " karakterek közé, mint a szokásos sztringeket. Ez lehetővé teszi a dinamikus sztringek egyszerűbb létrehozását és manipulálását.

  A template literálok előnyei:
  String interpoláció: A sablon literálok segítségével egyszerűen beágyazhatunk változókat vagy kifejezéseket egy sztringbe ${} szintaxis használatával. Így elkerülhetjük a + operátor használatát.
  const név = "Anna";
  const üdvözlet = `Helló, ${név}!`;
  console.log(üdvözlet); // "Helló, Anna!"
  Többsoros sztringek: A template literálok lehetővé teszik a több sorba tördelést anélkül, hogy speciális karaktereket kellene használni, mint a \n.
  const üzenet = `Ez egy több soros
sztring, amely könnyedén
kezelhető.`;
  Kifejezések és függvények: Kifejezéseket vagy akár függvényeket is beágyazhatunk a ${} közé, nemcsak változókat.
  const szám1 = 10;
  const szám2 = 20;
  const összeg = `A két szám összege: ${szám1 + szám2}`;

  Template literals are a feature introduced in ES6 for handling strings more efficiently. They are enclosed in backticks (`) rather than the traditional single quotes (') or double quotes ("), making string creation and manipulation easier and more flexible.

  The advantages of template literals:
  String interpolation: Template literals allow embedding variables or expressions directly within a string using ${} syntax. This eliminates the need for concatenation with the + operator.
  Multiline strings: Template literals allow you to easily create strings that span multiple lines without needing escape characters like \n.
  Expressions and functions: You can embed not only variables but also expressions or even function calls inside ${}.

- What is the "spread operator" in ES6 and how can it be used to manipulate arrays and objects more effectively?
  A spread operator (...) az ES6-ban bevezetett szintaktikai elem, amely lehetővé teszi egy tömb vagy objektum eleminek egyszerű kibővítését vagy "szétterítését". Ez különösen hasznos lehet tömbök, objektumok másolásakor, vagy amikor új értékeket szeretnénk hozzáadni egy már létező tömbhöz vagy objektumhoz.

  A spread operator használata:
  Tömböknél: A spread operator segítségével könnyen másolhatunk tömböket vagy egyesíthetjük őket.
  Tömb másolása: Ha egy tömböt másolunk, nem kell manuálisan végigiterálnunk rajta. A spread operator automatikusan szétszedi az eredeti tömböt és létrehozza az új tömböt.
  const eredetiTomb = [1, 2, 3];
  const masoltTomb = [...eredetiTomb];
  console.log(masoltTomb); // [1, 2, 3]

        Tömbök egyesítése: Tömbök egyesítéséhez egyszerűen a spread operátort használhatjuk, így nem kell a concat metódust használnunk.
            const tomb1 = [1, 2, 3];
            const tomb2 = [4, 5, 6];
            const ujTomb = [...tomb1, ...tomb2];
            console.log(ujTomb); // [1, 2, 3, 4, 5, 6]

        Objektumoknál: Az objektumoknál is használható a spread operator, hogy egy új objektumot hozzunk létre a meglévő objektum másolataként, vagy új kulcsokat adjunk hozzá.

        Objektum másolása: Az objektumok másolására is használhatjuk a spread operátort, így elkerülhetjük a referencia másolást.
            const eredetiObjektum = { a: 1, b: 2 };
            const masoltObjektum = { ...eredetiObjektum };
            console.log(masoltObjektum); // { a: 1, b: 2 }

        Objektumok egyesítése: Két objektumot egyesíthetünk úgy, hogy a kulcs-érték párjaik a spread operátor segítségével egyesülnek.
            const objektum1 = { a: 1, b: 2 };
            const objektum2 = { c: 3, d: 4 };
            const ujObjektum = { ...objektum1, ...objektum2 };
            console.log(ujObjektum); // { a: 1, b: 2, c: 3, d: 4 }

  The spread operator (...) is a syntax introduced in ES6 that allows you to expand or "spread" the elements of an array or object. It is particularly useful for copying arrays or objects or when you want to add new values to an existing array or object.
  The use of the spread operator:
  For Arrays: The spread operator allows you to easily copy arrays or merge them.
  Copying an array: When copying an array, we don’t need to manually loop through it. The spread operator expands the original array and creates a new array.
  Merging arrays: To merge arrays, you can use the spread operator, avoiding the need for the concat method.

  For Objects: The spread operator can also be used with objects to create a new object that is a copy of the existing object, or to add new properties.
  Copying an object: The spread operator can be used to copy an object, avoiding reference copying.
  Merging objects: Two objects can be merged so that their key-value pairs are combined using the spread operator.

- Explain the concept of "destructuring assignment" in ES6. How does it simplify variable assignment and object/array manipulation? Mi az a "destructuring assignment" (strukturális szétszedés) az ES6-ban?

  A destructuring assignment egy ES6-ban bevezetett JavaScript szintaxis, amellyel egyszerűen kibontjuk az objektumok vagy tömbök értékeit külön változókba. Ezáltal gyorsabban és átláthatóbban lehet értékeket kinyerni komplex adatstruktúrákból.

  const tomb = [1, 2, 3];
    const [elso, masodik] = tomb;

    console.log(elso);   // 1
    console.log(masodik); // 2
    Példa objektummal:

  const user = { nev: "Anna", kor: 25 };
  const { nev, kor } = user;

  console.log(nev); // Anna
  console.log(kor); // 25
     Miért jó?
      Egyszerűsíti a kódot: nem kell külön user.nev stb. írni.
      Olvashatóbb lesz a kód, főleg ha sok értéket kell kinyerni.
      Hasznos függvények paramétereinek destructuring esetén is.

  Destructuring assignment is a syntax introduced in ES6 that allows you to extract values from arrays or properties from objects into distinct variables. It makes variable assignment and object/array manipulation simpler and cleaner.
    Why is it useful?
        It simplifies the code: no need to access user.name repeatedly.
        It makes the code more readable, especially when working with many values.
        It's helpful in function parameters for directly extracting values.


- How does ES6 introduce the concept of "default function parameters"? Provide an example of using default parameters in a function. Hogyan vezeti be az ES6 az "alapértelmezett függvényparaméterek" fogalmát?

    Az ES6 bevezette az alapértelmezett paramétereket a függvényekhez. Ez azt jelenti, hogy ha egy függvényhíváskor nem adsz meg értéket egy paraméternek, akkor a megadott alapértelmezett értéket fogja használni.
    Ez leegyszerűsíti a kódot, mert nem kell külön ellenőrizni, hogy egy paraméter undefined-e, és nem kell if-ekkel vagy ||-al megadni alapértékeket.

        function koszones(nev = "Vendég") {
          console.log(`Szia, ${nev}!`);
        }

        koszones();          // Szia, Vendég!
        koszones("Anna");    // Szia, Anna!

      Miért hasznos?
        Elkerüli az undefined értékeket, ha egy paraméter kimarad.
        Egyszerűsíti a kódot, mert nem kell if-feltételekkel ellenőrizni, hogy van-e érték megadva.


  ES6 allows functions to have default values for their parameters. If a function is called without a value for a certain parameter, the default value is used instead.
  Why is it useful?
  Avoids undefined values when parameters are missing.
  Simplifies code by removing the need for if conditions to check for missing arguments.





- Explain the concept of "modules" introduced in ES6. How do they improve code organization and reusability in JavaScript?
  Az ES6 modulok egy új szabványt hoztak a JavaScript-be, amely lehetővé teszi a kód felosztását kisebb, újrafelhasználható fájlokra. Egy modul tartalmazhat változókat, függvényeket vagy osztályokat, amiket exportálhatsz és importálhatsz más fájlokba.

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

    console.log(osszead(5, 3)); // 8
    console.log(PI);            // 3.14
    Miért jó ez?
        Nem kell mindent egy nagy fájlba írni.
        Könnyebb karbantartani és bővíteni.
        Modulonként tesztelhető a kód.


  ES6 modules introduced a standard way to split JavaScript code into smaller, reusable files. A module can contain variables, functions, or classes that you can export and import into other files.

    How do modules improve code organization and reusability?
        They make the project more organized, by splitting code into logical pieces.
        They allow for reusability: a module can be imported and used in multiple places.
        They avoid naming conflicts, since each module has its own scope.    

    Why is this useful?
        No need to put everything into one big file.
        Easier to maintain and scale your code.
        Code can be tested module by module.






- Compare the CommonJS and ES6 "modules". What are the differences?
    Mindkettő modulrendszer, de különböző környezetekben és különbözőképp működnek.
    CommonJS (CJS) vs ES6 Modules (ESM) - Összehasonlítás

    Szintaxis:
    CommonJS: require() és module.exports
    ES6 Modules: import és export

    Futtatási környezet:
    CommonJS: Node.js (elsősorban szerver oldalon)
    ES6 Modules: Modern böngészők és Node.js is támogatja

    Betöltés típusa
    CommonJS: Szinkron (blokkoló)
    ES6 Modules: Aszinkron (nem blokkoló)

    Fájl kiterjesztés
    CommonJS: .js
    ES6 Modules: Általában .js vagy .mjs

    Export típusa
    CommonJS: Egyszerű objektum exportálás (egyetlen module.exports)
    ES6 Modules: Több named export és default export

    Betöltés ideje
    CommonJS: Futtatás közben (runtime)
    ES6 Modules: Fordításkor (compile-time / statikus)

    Használat
    CommonJS: Régebbi rendszerek, főként Node.js modulok
    ES6 Modules: Modern JavaScript fejlesztések, webalkalmazások

        Példa CommonJS-ben:
        👉 math.js
        function osszead(a, b) {
          return a + b;
        }

        module.exports = { osszead };

        👉 main.js
        const { osszead } = require('./math');
        console.log(osszead(3, 4)); // 7

        Példa ES6 modulban:
        👉 math.js
        export function osszead(a, b) {
          return a + b;
        }
        👉 main.js

        import { osszead } from './math.js';
        console.log(osszead(3, 4)); // 7

    Fő különbségek röviden:

    CommonJS → Szinkron, főleg Node.js-ben, régebbi szabvány.
    ES6 Modulok → Modern, aszinkron, működik a böngészőkben és Node.js-ben is.


    Both are module systems, but they work differently and in different environments.

    Feature: Syntax
    CommonJS (CJS): require() and module.exports
    ES6 Modules (ESM): import and export

    Feature: Environment
    CommonJS (CJS): Node.js (mostly server-side)
    ES6 Modules (ESM): Modern browsers and Node.js

    Feature: Loading type
    CommonJS (CJS): Synchronous (blocking)
    ES6 Modules (ESM): Asynchronous (non-blocking)

    Feature: File extension
    CommonJS (CJS): .js
    ES6 Modules (ESM): Usually .js or .mjs

    Feature: Export type
    CommonJS (CJS): Exports a single object
    ES6 Modules (ESM): Supports multiple named and default exports

    Feature: Load time
    CommonJS (CJS): Runtime (dynamically loaded)
    ES6 Modules (ESM): Compile-time (statically analyzed)

    Feature: Use case
    CommonJS (CJS): Older systems, Node.js modules
    ES6 Modules (ESM): Modern JS development, web applications



- What are higher-order functions in JavaScript? Mik azok a "higher-order functions" (magasabb rendű függvények) JavaScriptben?

  A higher-order function (magasabb rendű függvény) olyan függvény, amely:

    Másik függvényt kap paraméterként, vagy
    Másik függvényt ad vissza eredményként.
    Ez lehetővé teszi, hogy rugalmasabban kezeljük a kódot, és segít az abstrakcióban és az újrafelhasználhatóságban.
    function koszont(fuggveny) {
      fuggveny();
    }

    function udvozles() {
      console.log("Szia, világ!");
    }

    koszont(udvozles);  // Meghívja az udvozles függvényt

    Gyakori higher-order függvények a JavaScript-ben:
    map()
    filter()
    reduce()


  What are higher-order functions in JavaScript?
      A higher-order function is a function that does one or both of the following:

      Takes another function as a parameter, or
      Returns another function as its result.
      They allow for more flexible code, help with abstraction, and reusability.

      function greet(callback) {
        callback();
      }

      function sayHello() {
        console.log("Hello, world!");
      }

      greet(sayHello);  // Calls the sayHello function
      Common higher-order functions in JavaScript:
      map()
      filter()
      reduce()





- Explain the purpose and functionality of the map function in JavaScript. How does it differ from the filter and reduce functions? Mi a map() függvény célja és működése JavaScriptben?
    A map() egy beépített tömb metódus, ami végigmegy egy tömb minden elemén, és minden elemre alkalmaz egy függvényt. Az eredmény egy új tömb, ami az eredeti tömb módosított verzióját tartalmazza.
      ➡️ Fontos: Az eredeti tömb nem változik meg.

    Hogyan működik?
    A map() bejárja a tömböt
    Minden elemre meghív egy callback függvényt
    Az eredményeket összegyűjti egy új tömbbe

    const szamok = [1, 2, 3, 4];
    const duplaSzamok = szamok.map(function(szam) {
      return szam * 2;
    });

    console.log(duplaSzamok);  // [2, 4, 6, 8]
    console.log(szamok);       // [1, 2, 3, 4] (nem változott meg)
    Miben különbözik a filter() és reduce() függvényektől?

    map()	Átalakítja a tömb minden elemét	Új tömb ugyanannyi elemmel
    filter()	Kiszűri azokat az elemeket, amik megfelelnek a feltételnek	Új tömb kevesebb vagy ugyanannyi elemmel
    reduce()	Az összes elemből egyetlen értéket számol ki (pl. összegzés)	Egy érték (nem feltétlen tömb!)

    ➡️ filter():

    const szamok = [1, 2, 3, 4];
    const parosSzamok = szamok.filter(function(szam) {
      return szam % 2 === 0;
    });

    console.log(parosSzamok);  // [2, 4]

    ➡️ reduce():

    const szamok = [1, 2, 3, 4];
    const osszeg = szamok.reduce(function(acc, szam) {
      return acc + szam;
    }, 0);

    console.log(osszeg);  // 10

  What is the purpose and functionality of the map() function in JavaScript?
      The map() function is a built-in array method that iterates over each element of an array and applies a callback function to each one. It returns a new array with the transformed values.
      ➡️ Note: The original array does not get modified.

      How does it work?
      map() loops through each item in the array
      Calls a callback function on every element
      Collects the results into a new array







- How can the filter function be used to selectively extract elements from an array based on a given condition? Provide an example where the filter function is used to create a new array with only the elements that meet the specified criteria.
    A filter függvény egy JavaScript beépített metódus, amelyet arra használunk, hogy egy tömbből csak azokat az elemeket tartsuk meg, amelyek megfelelnek egy adott feltételnek.

    A filter egy új tömböt hoz létre a megadott feltételnek megfelelő elemekkel, miközben az eredeti tömb érintetlen marad.

      Tegyük fel, hogy van egy tömbünk számokkal, és csak a páros számokat szeretnénk megtartani:

              const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

              const evenNumbers = numbers.filter(num => num % 2 === 0);

              console.log(evenNumbers); // [2, 4, 6, 8, 10]

    *A filter minden egyes elemre lefuttat egy függvényt.
    *Ha a feltétel (num % 2 === 0) igaz, akkor az adott elem bekerül az új tömbbe.
    *Az eredeti numbers tömb nem változik.

  
  The filter function is a built-in JavaScript method used to selectively extract elements from an array based on a given condition.
    The filter method creates a new array containing only elements that meet the specified criteria, while leaving the original array unchanged.

      The filter function iterates through each element of the array.
      If the condition (num % 2 === 0) is true, the element is included in the new array.
      The original numbers array remains unchanged.

- What is the role of the reduce function in JavaScript? How can it be used to aggregate or combine the elements of an array into a single value? Provide an example where the reduce function is used to calculate a cumulative sum or find the maximum value in an array.

    Reduce: egy tömb elemeit egyetlen értékké összevonja vagy aggregálja. A reduce függvény egy accumulátor (felhalmozó) változót használ, amely minden egyes elem feldolgozása után frissül, és a végén egyetlen értéket ad vissza

    Hogyan működik?
    A reduce egy visszahívási (callback) függvényt vár, amely két paramétert kap:

    Accumulator (acc) – Az eddig összegyűjtött érték.
    Current Value (cur) – Az aktuális elem a tömbben, amelyet a reduce éppen feldolgoz.

    A reduce függvény két fontos paramétert is fogad:
    Callback függvény: Amely a fent említett két paraméterrel dolgozik.
    Initial Value (nem kötelező): A kezdő érték az acc számára. Ha nem adjuk meg, akkor az első elem lesz az alapértelmezett érték.
    
    Példa:
          const numbers = [1, 2, 3, 4, 5];

          const sum = numbers.reduce((acc, cur) => acc + cur, 0);

          console.log(sum); // Kimenet: 15
    Magyarázat:

          Az acc kezdetben 0 (mivel ezt adtuk meg kezdőértékként).

          Az első elemhez (1) hozzáadjuk az acc-ot, tehát 0 + 1 = 1, majd a következő elemhez folytatódik a művelet, és így tovább.

          A végén a reduce a teljes összeggel tér vissza.

        A reduce egy erőteljes eszköz JavaScript-ben, amely lehetővé teszi a tömb elemeinek összevonását vagy aggregálását egyetlen értékké. Az ilyen típusú műveletek segíthetnek egyszerűsíteni a kódot és elkerülni a ciklusok használatát.


    The reduce function in JavaScript is used to aggregate or combine the elements of an array into a single value. It works by applying a callback function to each element in the array, using an accumulator that is updated with each iteration. At the end, it returns a single value.

    How it works:
    The reduce function takes two main parameters:

    Accumulator (acc) – The value that is accumulated or accumulated over each iteration.

    Current Value (cur) – The current element in the array being processed by reduce.

    The reduce function can also take an optional second argument:

    Callback function: The function that works with the two parameters mentioned above.

    Initial Value (optional): The initial value for the accumulator (acc). If not provided, the first element of the array will be used as the initial value.

## Fetch

- How does a query string parameter in a URL contribute to web application functionality? Explain how query string parameters are typically used to pass data between web pages or APIs:
  A lekérdezési karakterlánc (query string) paramétere egy URL-ben hozzájárul a webalkalmazás funkcionalitásához azáltal, hogy lehetővé teszi adatok átadását weboldalak vagy API-k között. Általában kis mennyiségű adat, például felhasználói beállítások, keresési kifejezések, szűrők vagy hitelesítési tokenek továbbítására használják, anélkül hogy módosítanák az URL útvonalát.
  A query string paraméterek a ? szimbólum után következnek egy URL-ben, és kulcs-érték párok formájában (kulcs=érték) vannak megadva. Több paramétert az & szimbólum választ el egymástól.
  Például: https://example.com/search?query=javascript&page=2
  Ebben az esetben a query=javascript és a page=2 paraméterek segítenek a webalkalmazásnak a megfelelő keresési találatok megjelenítésében.

  API-k esetében a query paramétereket gyakran használják adatok szűrésére, rendezésére vagy lapozására. Például egy időjárás API így működhet:
  https://api.weather.com/data?city=London&units=metric
  Itt a city=London meghatározza a helyszínt, míg a units=metric beállítja a hőmérsékleti mértékegységet.

  A query paraméterek egyszerűen használhatók, de biztonságosan kell kezelni őket, különösen érzékeny adatok esetén, mivel az URL-ben láthatók és könnyen módosíthatók a felhasználók által.

  ANSWER ENG:
  A query string parameter in a URL contributes to web application functionality by allowing data to be passed between web pages or APIs. It is typically used to send small amounts of data, such as user preferences, search terms, filters, or authentication tokens, without modifying the URL path.

  Query string parameters follow the ? symbol in a URL and are structured as key-value pairs (key=value). Multiple parameters are separated by an & symbol.

- What is the purpose and functionality of the fetch function in JavaScript?
  A fetch függvény JavaScript-ben hálózati kérések küldésére szolgál, általában adatok lekérésére egy szerverről vagy adatok küldésére egy API-nak. A fetch egy modern alternatívája az XMLHttpRequest-nek, és Promise alapú, így könnyebben kezelhetők az aszinkron műveletek.

  Célja és működése:
  A fetch segítségével HTTP kéréseket küldhetünk (GET, POST, PUT, DELETE, stb.).
  Egy Promise-t ad vissza, amely egy Response objektummá alakul, tartalmazva az állapotkódot és a fejléceket.
  Az adatok kinyerhetők a .json(), .text() vagy .blob() metódusokkal.
  Támogatja a további opciókat, például a fejlécek beállítását, törzstartalmat és hitelesítési tokeneket.
  Példa használatra:

        JSON adatok lekérése egy API-ból:

        Itt a fetch egy GET kérést küld, ellenőrzi a választ, JSON-ná alakítja, és kezeli a hibákat.
        fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP hiba! Állapotkód: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Hiba történt:', error));


        Egy POST kérés küldése JSON adattal:

        fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'John', age: 30 })
        })
        .then(response => response.json())
        .then(data => console.log('Siker:', data))
        .catch(error => console.error('Hiba:', error));

- Explain the syntax of the fetch function and how it handles asynchronous operations. Compare and contrast the syntax of making HTTP requests using fetch with async/await versus the syntax using .then() and .catch().
  What are the key differences and benefits of using the async/await syntax in terms of code structure and readability?

      Fetch függvény szintaxisa és az aszinkron műveletek kezelése

  A fetch egy beépített JavaScript API, amely HTTP-kéréseket küld és aszinkron módon dolgozza fel azokat. Ez a függvény egy Promise-t ad vissza, amely kétféleképpen kezelhető: .then() és .catch() metódusokkal, vagy async/await szintaxissal.

    1.  Fetch használata .then() és .catch() metódusokkal
        A fetch() Promise-t ad vissza, így a kérések válasza .then() és .catch() metódusokkal kezelhető:
        fetch('https://api.example.com/data')
        .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
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
                throw new Error(`HTTP error! Status: ${response.status}`);
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
    ✅ Jobb szerkezetű kód, főleg összetettebb műveleteknél.

        Comparison: .then() vs async/await
                Aspect	.then() and .catch()	async/await
                Syntax	Chained .then() and .catch() methods	Uses try...catch for error handling
                Readability	Harder to read, can lead to "callback hell"	More readable, sequential structure
                Error Handling	Managed in .catch()	try...catch simplifies handling
                Best Use Case	Simple requests with minimal logic	Better for complex logic
                Key Benefits of async/await:
                ✅ Easier to read as it looks like synchronous code.
                ✅ Simpler error handling with try...catch.
                ✅ Better structure, especially for complex operations.

- What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed:
  Az aszinkronitás azt jelenti, hogy bizonyos műveletek (például hálózati kérések, időzítők) nem akadályozzák a program további végrehajtását.
  Ahelyett, hogy egy hosszú művelet befejeződésére várna a program, folytatja a kód futtatását, és később kezeli az eredményt.

        A JavaScript az eseményciklus (event loop) segítségével kezeli az aszinkron műveleteket, így a böngésző nem fagy le, és a felhasználói élmény folyamatos marad.

        Mikor van szükség aszinkronitásra?
        API-hívások és adatok lekérése (pl. fetch használata)
            Példa: A NASA APOD API lekérése és az űrfotók megjelenítése a webalkalmazásodban.

        Felhasználói események kezelése
            Példa: Egy gombnyomás vagy űrlap beküldés feldolgozása anélkül, hogy a weboldal lefagyna.

        Időzített műveletek (setTimeout, setInterval)
            Példa: Egy animáció elindítása 2 másodperces késleltetéssel.

        Fájlok olvasása és írása (Node.js-ben)
            Példa: Egy nagy JSON fájl beolvasása a szerveren anélkül, hogy a többi kérést blokkolná.

        Adatbázis-lekérdezések
            Példa: Egy webalkalmazásban a felhasználói adatok betöltése a háttérben.

        WebSocket-ek és valós idejű adatok kezelése
            Példa: Tőzsdei árfolyamok folyamatos frissítése egy pénzügyi alkalmazásban.

        Aszinkron animációk és átmenetek
            Példa: Egy CSS animáció befejeződésének megvárása, mielőtt egy másik műveletet elindítunk.

  What is Asynchronicity in JavaScript?
    Asynchronicity in JavaScript means that certain operations, such as network requests or timers, do not block the execution of the rest of the code. Instead of waiting for a long-running task to complete, JavaScript can continue executing other code and handle the result of the task later.
    JavaScript uses the event loop to manage asynchronous operations, allowing it to remain responsive while handling tasks in the background.
    Typical Use Cases for Asynchronicity
    Fetching Data from an API (e.g., fetch requests)
    Example: Fetching data from NASA's APOD API in your web app.
    Handling User Input Events
    Example: Waiting for a button click or a form submission without blocking the UI.
    Timers and Delayed Execution (setTimeout, setInterval)
    Example: Showing a loading animation for 2 seconds before displaying content.
    Reading/Writing Files (in Node.js)
    Example: Reading a large JSON file without freezing the server.
    Database Queries
    Example: Retrieving user data from a database asynchronously.
    Executing Heavy Computations Without Blocking the UI
    Example: Running complex calculations in a Web Worker.
    WebSockets and Real-time Data
    Example: Receiving live stock market updates in a finance app.
    Asynchronous Animations and Transitions
    Example: Waiting for a CSS animation to finish before executing another function.

- How can you handle the response received from a fetch request?
  Amikor egy fetch kérést indítunk JavaScript-ben, az egy Promise-t ad vissza, amely egy Response objektumra oldódik fel.
  Az adatok kinyeréséhez általában a .json(), .text(), vagy .blob() metódust használjuk.
  async function fetchData() {
  try {
  const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  if (!response.ok) {
  throw new Error(`Hiba történt! HTTP státusz: ${response.status}`);
  }
  const data = await response.json(); // JSON formátumra alakítás
  console.log(data); // Adatok feldolgozása
  } catch (error) {
  console.error("Hiba a lekérés során:", error);
  }
  }

                fetchData();

- How does the fetch function handle errors and handle HTTP status codes? Provide an example of using fetch to handle different types of responses, including successful and error responses:
  The fetch function does not automatically reject the Promise if the response has an HTTP error status (e.g., 404 or 500).
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
                    console.error(`Unexpected error: ${response.status} - ${response.statusText}`);
                }

            } catch (error) {
                console.error("Network or Fetch error:", error.message);
            }
            }

            fetchWithStatusHandling();

  A fetch nem utasítja el automatikusan a Promise-t, ha a válasz egy HTTP hiba státuszt kap (pl. 404 vagy 500).
  A Promise csak akkor utasítódik el, ha hálózati hiba történik (pl. nincs internetkapcsolat).
  A HTTP hibák megfelelő kezeléséhez manuálisan ellenőriznünk kell a response.ok értékét (true, ha a státusz 200-299 között van) vagy közvetlenül a response.status-t.
  async function fetchWithStatusHandling() {
  try {
  const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=INVALID_KEY");

                switch (response.status) {
                case 200:
                    const data = await response.json();
                    console.log("Siker:", data);
                    break;
                case 400:
                    console.error("Hibás kérés: Az API kulcs valószínűleg helytelen.");
                    break;
                case 403:
                    console.error("Hozzáférés megtagadva: Nincs jogosultságod.");
                    break;
                case 404:
                    console.error("Nem található: A keresett erőforrás nem létezik.");
                    break;
                case 500:
                    console.error("Szerverhiba: Próbáld újra később.");
                    break;
                default:
                    console.error(`Váratlan hiba: ${response.status} - ${response.statusText}`);
                }

            } catch (error) {
                console.error("Hálózati vagy fetch hiba:", error.message);
            }
            }

            fetchWithStatusHandling();

- Explain the parts of a URL:
  Az URL (Uniform Resource Locator) egy internetes cím, amely egy adott erőforrás elérésére szolgál.
  Több részből áll, amelyek mind külön funkciót látnak el. 1. Séma (Protokoll)
  Meghatározza az adatátvitel módját.
  Gyakori protokollok:
  http:// (Nem biztonságos)
  https:// (Titkosított, biztonságos kapcsolat)
  ftp:// (Fájlátvitel)
  mailto: (E-mail címek esetén)

          2. Hoszt (Domain név vagy IP-cím)
              Példa: www.example.com
              Azonosítja azt a szervert, ahol az oldal található.
              Lehet domain név (example.com) vagy IP-cím (192.168.1.1).
              A www. előtag nem mindig szükséges.

          3. Port (Opcionális)
              Példa: :8080
              Megadja a szerveren használt kommunikációs portot.
              Alapértelmezett portok:
              80 → http
              443 → https
              Egyedi portokat (8080, 3000) speciális célokra használnak.

           4. Útvonal (Path)
              Példa: /utvonal/oldal
              Az erőforrás helyét jelöli a szerveren.
              Olyan, mint egy könyvtár vagy fájlszerkezet egy számítógépen.

          5. Lekérdezési karakterlánc (Query - Opcionális)
              Példa: ?kereses=adat
              Extra adatokat küld a szervernek.
              ? jellel kezdődik, és kulcs-érték párokat tartalmaz &-el elválasztva.
              ?felhasznalo=Janos&kor=30

          6. Fragmentum (Horgony - Opcionális)
              Példa: #resz
              Egy adott részhez ugrik az oldalon belül.
              Nem küldődik el a szervernek, csak a böngésző használja.
              https://example.com/oldal#hozzaszolasok

        URL feldarabolása
              const urlString = "https://www.example.com:8080/path/to/page?search=query#section";
              const url = new URL(urlString);
              console.log("Protocol:", url.protocol); // https:
              console.log("Host:", url.host); // www.example.com:8080
              console.log("Hostname:", url.hostname); // www.example.com
              console.log("Port:", url.port); // 8080
              console.log("Pathname:", url.pathname); // /path/to/page
              console.log("Search:", url.search); // ?search=query
              console.log("Search Params:", url.searchParams.get("search")); // query
              console.log("Hash:", url.hash); // #section


        Summary Table
              Part	    Example	        Description
              Scheme	    https://	        Communication protocol
              Host	    www.example.com	    Server domain name or IP
              Port	    :8080	            (Optional) Server port
              Path	    /path/to/page	    Resource location on server
              Query	    ?search=query	    (Optional) Parameters for the request
              Fragment	#section	    (Optional) In-page navigation

## Responsive Design

- What does responsive design do? Why is it important?
  A reszponzív dizájn lehetővé teszi, hogy egy weboldal különböző képernyőméreteken is jól nézzen ki és használható maradjon.
  Mivel a legtöbb ember mobiltelefonról böngészi az internetet, fontos, hogy az oldal alkalmazkodjon a kisebb kijelzőkhöz is.

  Responsive design ensures that a website looks good and remains usable on different screen sizes.
  Since most people browse the internet on their mobile phones, it is crucial that the site adapts to smaller screens as well.

- What is a mobile-first approach?
  A mobile-first megközelítés azt jelenti, hogy a weboldal tervezése először a kisebb kijelzőkre történik, majd fokozatosan optimalizáljuk nagyobb képernyőkre.

  The mobile-first approach means designing the website primarily for smaller screens first and then progressively optimizing it for larger displays.

- How can you test the website's appearance on different screen sizes in the browser?
  Fejlesztői konzol megnyitása: Nyomd meg az F12 billentyűt Chrome-ban vagy Firefoxban.
  Reszponzív mód bekapcsolása: Nyomd meg a CTRL + SHIFT + M billentyűkombinációt, vagy keresd meg az ikonokat (Chrome-ban bal felső sarok, Firefoxban jobb felső sarok).
  Képernyőméretek váltása: A reszponzív nézetben beállíthatod, hogy milyen méretű eszközön szeretnéd ellenőrizni az oldal kinézetét.

  1. Open the developer console by pressing F12 in Chrome or Firefox.
  2. Activate Responsive Design Mode by pressing CTRL + SHIFT + M or using the icons (top left in Chrome, top right in Firefox).
  3. Adjust screen sizes in the responsive view to check how the site looks on different devices.

- Can you give some techniques that help to fulfill the responsive design criteria?
  Viewport meta tag:
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    Ez biztosítja, hogy az oldal igazodjon az eszköz képernyőjének méretéhez.

  Media Queries (média lekérdezések):
  @media (min-width: 768px) {
  body {
  background-color: lightblue;
  }
  }
  Ezzel a képernyőméret alapján módosíthatjuk a dizájnt.

  Flexbox használata rugalmas elrendezéshez:
  .container {
  display: flex;
  flex-wrap: wrap;
  }
  Segít az elemek elrendezésében és méretezésében.

  Reszponzív képek:
  img {
  max-width: 100%;
  height: auto;
  }
  A képek nem lépik túl a rendelkezésre álló helyet.

  1. Viewport meta tag ensures the site adapts to the device screen size.
  2. Media queries modify styles based on screen width.
  3. Flexbox helps in flexible layouts.
  4. Responsive images prevent images from overflowing their container.

- What do media queries do? How do they work?
  A média lekérdezések lehetővé teszik, hogy a CSS szabályok a képernyő tulajdonságai (például szélessége) alapján változzanak.
  @media (min-width: 600px) {
  body {
  background-color: lightgray;
  }
  }
  Ez a szabály csak akkor aktiválódik, ha a képernyő szélessége legalább 600px.

  A média lekérdezések szintaxisa:
  @media media-type and (rule1) and (rule2) {

  }
  The media query starts with the media rule (officially it is called at-rule, because of the @ symbol).
  Optionally has a media type
  Optionally has one or more media feature rules.
  You can connect them with the and keyword.
  The media type can be a screen (the page is shown in a browser), print (when the site is printed with a printer) or all. Typically we use a screen or simply skip it.
  There are a lot of rules available but for now the min-width and max-width are enough for us.

  Példa több feltétel kombinálására:

  @media screen (min-width: 400px) and (max-width: 800px) {
  body {
  background-color: yellow;
  }
  }
  Ez a szabály akkor érvényesül, ha a képernyő szélessége 400px és 800px közé esik.

  **(Media queries allow CSS rules to change based on screen properties like width.
  @media (min-width: 600px) { body { background-color: lightgray; } }
  This rule applies only if the screen width is at least 600px.
  You can also combine conditions like:
  @media (min-width: 400px) and (max-width: 800px) { body { background-color: yellow; } }
  which applies only if the width is between 400px and 800px.)**

- How would you define the Flexbox layout?
  A Flexbox egy egydimenziós elrendezési modell a CSS-ben, amely lehetővé teszi az elemek elrendezését és igazítását
  egy konténerben sorokban vagy oszlopokban. Egyszerűsíti a bonyolult elrendezéseket, és hatékony módot kínál a tér elosztására egy konténeren belül.
  Olyan tulajdonságokkal, mint a flex-direction, justify-content és align-items, a Flexbox egyszerűsíti az elemek elhelyezését és igazítását a konténerben.

  Flexbox is a one-dimensional layout model in CSS that allows you to arrange and align elements inside a container along a row or a column.
  It simplifies complex layouts and provides an efficient way to distribute space within a container.
  By using properties like flex-direction, justify-content, and align-items,
  Flexbox makes it easy to control the positioning and alignment of items inside a container.

- How can you debug the Flexbox layout in the browser?
  A Flexbox elrendezés hibakereséséhez a böngészők beépített fejlesztői eszközeit használhatjuk.
  A legtöbb modern böngésző, mint a Chrome és a Firefox, rendelkezik Flexbox hibakereső eszközzel a fejlesztői eszközkészletben.
  Ez az eszköz lehetővé teszi a flex konténerek és elemek vizualizálását, beleértve azok igazítását és elosztását.
  Valós időben megtekintheted az elrendezést, láthatod, hogyan viselkednek az elemek, és módosíthatod az olyan tulajdonságokat, mint a flex-grow, flex-shrink, és a justify-content, hogy megoldj elrendezési problémákat.

  To debug Flexbox in the browser, you can use the browser’s built-in developer tools.
  Most modern browsers like Chrome and Firefox offer a Flexbox debugging tool in their DevTools.
  This tool allows you to visualize the flex containers and items, including their alignment and distribution.
  You can inspect the layout in real-time, see how items are behaving, and adjust properties like flex-grow, flex-shrink, and justify-content to troubleshoot layout issues.

- What is the difference between the Flexbox container and the Flexbox item?
  A Flexbox konténer az az elem, amelyen a display: flex vagy display: inline-flex tulajdonság van alkalmazva.
  Ezáltal flex konténerré válik, amely tartalmazhat flex elemeket. A Flexbox elemek a konténer gyerek elemei, amelyeket a flexbox tulajdonságok (pl. flex-direction, justify-content, align-items) szerint rendezünk és igazítunk.
  A konténer határozza meg az elrendezést és a struktúrát, míg az elemek az egyes elemek, amelyeket a konténer által meghatározott szabályok szerint rendezünk.

  The Flexbox container is the element that has the display: flex or display: inline-flex property applied to it.
  This makes it a flex container that can hold flex items inside.
  The Flexbox items are the child elements within the container, and they are arranged and aligned according to the flexbox properties (e.g., flex-direction, justify-content, align-items).
  The container defines the layout and structure, while the items are the individual elements that are arranged according to the rules set by the container.

## Object Oriented Javascript

- What is the difference between the class syntax and the constructor function syntax?

    Az osztály szintaxis egy modernebb és strukturáltabb módja az objektumok és viselkedésük meghatározásának, amelyet az ES6 vezetett be. Olvashatóbb és tisztább módot biztosít a prototípusok és metódusok meghatározására. A konstruktor függvények pedig a régebbi módszert jelentik az objektumok létrehozására és prototípus alapú öröklésük kezelésére.

    The class syntax is a more modern and structured way of defining objects and their behavior, introduced in ES6. It provides a clearer and more readable way to define prototypes and methods. Constructor functions, on the other hand, are the older way of creating objects with shared behavior using prototype inheritance.

- What does the `new` keyword do?

    A new kulcsszó egy osztály vagy egy konstruktor függvény példányosítására szolgál. A következő lépéseket hajtja végre:
        Létrehoz egy új, üres objektumot.
        Beállítja az új objektum prototípusát a konstruktor prototípusára.
        A this kulcsszót az új objektumhoz köti a konstruktor belsejében.
        Visszaadja az újonnan létrehozott objektumot.

    The new keyword is used to create an instance of a class or a constructor function. It does the following:
        Creates a new empty object.
        Sets its prototype to the constructor’s prototype.
        Binds this to the new object inside the constructor.
        Returns the newly created object.


- What does a `constructor` method do in class syntax? When it is executed?

    A constructor metódus egy speciális függvény az osztályokban, amely automatikusan lefut, amikor egy új példányt hozunk létre az osztályból. Főként az objektum tulajdonságainak inicializálására és az új példány beállítására szolgál.

    The constructor method in a class is a special function that is automatically executed when a new instance of the class is created. It is used to initialize object properties and set up the instance.

- What are the class methods of a class syntax?

    Az osztály metódusai olyan függvények, amelyeket egy osztályon belül határozunk meg, és az osztály prototípusához tartoznak, így minden példány használhatja őket. Ezek határozzák meg az osztály viselkedését.

    Class methods are functions defined inside a class that belong to the prototype of the class and can be used by all instances. These methods define the behavior of the class.

- What are the fields of a class syntax?
    Az osztály mezői olyan tulajdonságok, amelyek az osztály példányaihoz tartoznak. Meghatározhatók a constructor metóduson belül a this használatával, vagy osztálymezőként a konstruktoron kívül is deklarálhatók.

    Fields in a class are properties that belong to instances of the class. They can be declared inside the constructor method using this or defined as class fields outside the constructor.

- What is inheritance in the context of Javascript objects?

    Az öröklődés lehetővé teszi, hogy egy osztály (vagy konstruktor függvény) átvegye egy másik osztály tulajdonságait és metódusait. Ez segít a kód újrahasznosításában és a hierarchikus szerkezetek létrehozásában. A JavaScript az öröklődést a prototípusláncolás segítségével valósítja meg.

    Inheritance allows one class (or constructor function) to acquire properties and methods from another class. This enables code reuse and the creation of hierarchical structures. JavaScript achieves inheritance through prototype chaining.

- What does the `extends` keyword do?

    Az extends kulcsszó az osztály szintaxisban egy olyan alosztály létrehozására szolgál, amely örökli az ősosztály tulajdonságait és metódusait. Ez lehetővé teszi az alosztály számára, hogy újrahasznosítsa és kibővítse az ősosztály funkcionalitását.

    The extends keyword is used in class syntax to create a subclass that inherits properties and methods from a parent class. This allows the child class to reuse and extend the functionality of the parent class.

## Express

- Explain the concept of client-server communication in the context of web development. How does information flow between the client and the server in a typical client-server architecture?

  Kliens-szerver kommunikáció a webfejlesztésben:
  Egy tipikus kliens-szerver architektúrában a kliens (általában egy böngésző vagy egy frontend alkalmazás) és a szerver (backend rendszer) HTTP-protokollon keresztül kommunikálnak egymással. A kliens felelős a felhasználói felületért, míg a szerver az adatkezelést és üzleti logikát végzi.

  Hogyan áramlik az információ a kliens és a szerver között?
  A kliens kérést küld:
  A böngésző vagy egy frontend alkalmazás HTTP-kérést küld a szervernek (GET, POST, PUT, DELETE metódusokkal).
  A kérés egy adott URL-re érkezik (pl. https://api.pelda.hu/adatok).
  A szerver feldolgozza a kérést:
  A szerver (például egy Express alkalmazás) fogadja a kérést, végrehajtja a szükséges műveleteket, és ha kell, adatokat kér le egy adatbázisból.
  A szerver válaszol:
  A szerver HTTP-választ küld vissza, általában JSON formátumban, egy állapotkóddal, amely jelezheti a sikeres végrehajtást (200 OK), hibát (404 Not Found) vagy egyéb státuszt.
  A kliens feldolgozza a választ:
  A kliens (JavaScript fetch() vagy Axios segítségével) feldolgozza az adatokat és frissíti a felhasználói felületet.
  Ez a folyamat ismétlődik minden új kérésnél, így biztosítva a webalkalmazás dinamikus működését.

  Client-Server Communication in Web Development:
  In a typical client-server architecture, the client and the server communicate using the HTTP (Hypertext Transfer Protocol) or other web protocols. The client is usually a web browser or a frontend application, while the server is responsible for handling data storage, business logic, and responding to client requests.

  How Information Flows Between the Client and Server
  Client Sends a Request:
  The client (e.g., a browser) makes an HTTP request to the server using methods like GET, POST, PUT, or DELETE.
  This request is sent to a specific URL (e.g., https://api.example.com/data).
  Server Processes the Request:
  The server (running Express, for example) receives the request, processes it, and interacts with a database if needed.
  Server Sends a Response:
  The server returns an HTTP response, typically in JSON format, with a status code indicating success (200 OK), failure (404 Not Found), or other conditions.
  Client Receives and Processes the Response:
  The client (using JavaScript fetch() or Axios) processes the response and updates the UI accordingly.
  This process repeats as needed, enabling dynamic web applications that retrieve and update data in real time.

- What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.
  Az HTTP kérések és válaszok kulcsszerepet játszanak a webfejlesztésben, mivel ezek teszik lehetővé a kliens (például egy böngésző) és a szerver közötti kommunikációt. Amikor egy felhasználó meglátogat egy weboldalt, a böngésző HTTP kérést küld a szervernek, amely válaszul egy HTTP választ küld vissza, tartalmazva a kért adatokat (pl. egy HTML-oldalt, egy JSON-fájlt stb.).

        HTTP kérés (HTTP Request) szerkezete:
        Metódus (Method) – Meghatározza, hogy milyen műveletet szeretnénk végrehajtani (pl. GET, POST, PUT, DELETE).
        URL (Uniform Resource Locator) – A célzott erőforrás elérési útja a szerveren.
        Fejlécek (Headers) – Kiegészítő információkat tartalmaz (pl. milyen típusú tartalmat kér a kliens, milyen hitelesítési adatokat küld stb.).
        Törzs (Body, csak bizonyos metódusoknál, pl. POST) – Opcionális adat, amelyet a kérés küld (pl. űrlapadatok JSON formátumban).
        HTTP válasz (HTTP Response) szerkezete:
        Állapotkód (Status Code) – Jelzi a kérés eredményét (pl. 200 OK, 404 Not Found, 500 Internal Server Error).
        Fejlécek (Headers) – Kiegészítő információkat tartalmaz a válaszról (pl. a tartalom típusa, a szerver neve, gyorsítótárazási beállítások stb.).
        Törzs (Body, ha van) – A tényleges adatokat tartalmazza, amelyeket a szerver küld vissza (pl. HTML, JSON, képek stb.).

  HTTP requests and responses play a crucial role in web development by enabling communication between a client (such as a browser) and a server. When a user visits a website, the browser sends an HTTP request to the server, which then responds with an HTTP response containing the requested data (e.g., an HTML page, a JSON file, etc.).

        Structure of an HTTP Request:
        Method – Defines the action to be performed (e.g., GET, POST, PUT, DELETE).
        URL (Uniform Resource Locator) – The path to the target resource on the server.
        Headers – Contain additional information (e.g., the type of content requested, authentication details, etc.).
        Body (only for certain methods like POST) – Optional data sent with the request (e.g., form data in JSON format).
        Structure of an HTTP Response:
        Status Code – Indicates the result of the request (e.g., 200 OK, 404 Not Found, 500 Internal Server Error).
        Headers – Contain additional information about the response (e.g., content type, server name, caching settings, etc.).
        Body (if applicable) – Contains the actual data sent by the server (e.g., HTML, JSON, images, etc.).

- What is Express.js and how does it simplify web application development in Node.js? Explain the core features and benefits of using Express.js as a web framework.
  Az Express.js egy minimalista és rugalmas webes keretrendszer a Node.js számára, amely leegyszerűsíti a szerveroldali alkalmazások fejlesztését. Segítségével könnyen kezelhetjük a HTTP-kéréseket és -válaszokat, útvonalakat hozhatunk létre, middleware-eket használhatunk, és API-kat építhetünk.

        Express.js főbb jellemzői:
        Egyszerű és minimalista – Nem tartalmaz felesleges komponenseket, így rugalmasan bővíthető.
        Útvonalkezelés (Routing) – Könnyen létrehozhatók GET, POST, PUT, DELETE végpontok.
        Middleware támogatás – Lehetővé teszi kiegészítő funkciók (pl. hitelesítés, naplózás) beépítését.
        Sablonmotor támogatás – Pl. Pug, EJS használatával dinamikus HTML-t generálhatunk.
        RESTful API-k egyszerű létrehozása – Gyorsan készíthetünk backend API-kat JSON válaszokkal.
        Integráció adatbázisokkal – MongoDB, MySQL és más adatbázisokkal való könnyű kapcsolódás.
        Express.js előnyei:
        Gyors fejlesztés – Egyszerű szintaxis és széles körű dokumentáció.
        Modularitás – Middleware-ekkel és bővítményekkel könnyen testreszabható.
        Skálázhatóság – Nagy forgalmú alkalmazásokhoz is alkalmas.
        Erős közösség és támogatás – Rengeteg csomag és kiegészítő érhető el hozzá.

        Express.js is a minimalist and flexible web framework for Node.js that simplifies server-side application development. It makes handling HTTP requests and responses, setting up routes, using middleware, and building APIs much easier.

        Core Features of Express.js:
        Simple and minimalistic – Lightweight and does not include unnecessary components.
        Routing system – Easily define GET, POST, PUT, DELETE endpoints.
        Middleware support – Enables additional functionalities like authentication and logging.
        Template engine support – Generate dynamic HTML with Pug, EJS, etc.
        Easy RESTful API creation – Quickly build backend APIs that return JSON responses.
        Database integration – Seamless connection with MongoDB, MySQL, and other databases.
        Benefits of Express.js:
        Fast development – Simple syntax and extensive documentation.
        Modular structure – Customizable with middleware and plugins.
        Scalability – Suitable for high-traffic applications.
        Strong community and support – A vast ecosystem of packages and extensions.

- What are middlewares in Express.js? Can you list some examples of the built-in middleware?
  Middlewares in Express.js are functions that execute during the request-response cycle. They can:

   A middleware egy olyan függvény az Express.js-ben, amely a kérések és válaszok feldolgozása során fut le. A middleware-ek:

        Módosíthatják a kérés objektumát (req).
        Módosíthatják a válasz objektumát (res).
        Lezárhatják a kérés-válasz ciklust.
        Meghívhatják a következő middleware-t a next() függvénnyel.
        Ezek a függvények köztes állomásként működnek a beérkező kérés és a végső válasz között. Például használhatók:
        Kérések naplózására (logging).
        Jogosultságok ellenőrzésére (authentikáció).
        Bejövő adatok átalakítására (pl. JSON vagy űrlapadatok feldolgozása).

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
        Segítenek gyakori feladatok (pl. autentikáció, naplózás, adatfeldolgozás) automatizálásában.
        Lehetővé teszik a kód modularizálását – azaz különálló egységekbe szervezhetjük a funkciókat.
        Express hatékonyabbá teszi a kérés-válasz feldolgozást.

        Modify the request object (req).
        Modify the response object (res).
        End the request-response cycle.
        Call the next middleware in the stack using next().
        They sit between the incoming request and the final response, allowing us to handle common logic such as authentication, logging, error handling, and request parsing.

        Built-in Middleware Examples in Express.js:
        express.json()

        Parses incoming JSON payloads in requests and assigns them to req.body.

        app.use(express.json());
        Without this, req.body would be undefined for JSON requests.
        express.urlencoded({ extended: true })

        Parses URL-encoded data from forms (application/x-www-form-urlencoded).

        app.use(express.urlencoded({ extended: true }));
        extended: true allows parsing of complex objects.
        express.static(rootPath)

        Serves static files like images, CSS, and JavaScript from a directory.

        app.use(express.static('public'));
        Now files inside /public are accessible via the browser.
        express.text()

        Parses text payloads (text/plain) and assigns them to req.body.


        app.use(express.text());
        express.raw()

        Handles raw request bodies (useful for binary data like images or files).

        app.use(express.raw());
        Why Are Middlewares Important?
        They help with common functionalities like authentication, logging, and validation.
        They allow modular code by separating concerns.
        They help Express.js efficiently process HTTP requests.

       

- How can you tell Express.js to use a middleware?
      The app.use() function adds a new middleware to our Express app:
      app.use(express.json())
      Add the JSON middleware to parse our request bodies if they their Content-Type is application/json.
  
        app.use(middlewareFunction);
      Ez azt jelenti, hogy az app (az Express alkalmazás) használni fogja ezt a middlewareFunction nevű köztes réteget minden bejövő kérés (request) előtt vagy alatt.

      📌 Példa:

      const express = require('express');
      const app = express();

      const loggerMiddleware = (req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next(); // Tovább a következő middleware-hez
      };

      app.use(loggerMiddleware);

- Explain the process of handling static files (e.g., CSS, images) in Express.js. How can you configure Express.js to serve static assets from a specific directory in your application?

        Hogyan szolgálhatsz ki statikus fájlokat Express.js-ben
        Az Express.js-ben van egy beépített middleware, az express.static, amit használhatsz statikus fájlok (pl. CSS, képek, JavaScript) kiszolgálására.

        👉 Lépések:

        Hozz létre egy mappát (pl. public/), ahová beteszed a statikus fájlokat.

        Az app.use(express.static('mappa_neve')) segítségével megadod az Express-nek, hogy ebből a mappából szolgáljon ki fájlokat.

        🧠 Példa:

        const express = require('express');
        const app = express();

        app.use(express.static('public'));

        app.listen(3000, () => {
          console.log('A szerver fut a 3000-es porton');
        });
        📁 Ha a mappaszerkezet így néz ki:

        project/
        │
        ├── public/
        │   ├── style.css
        │   └── image.jpg
        ├── app.js
        Akkor a következő URL-eken eléred a fájlokat:

        http://localhost:3000/style.css

        http://localhost:3000/image.jpg

        ⚠️ Nem kell külön útvonalat (route) létrehozni minden fájlhoz — az Express automatikusan kezeli.



  Express.js has a built-in middleware called express.static that you can use to serve static files such as CSS, images, JavaScript, fonts, etc.

      👉 Steps to serve static assets:

      Choose or create a folder (e.g., public/) where your static files will be stored.

      Use app.use() and express.static() to tell Express to serve files from that directory.

      🧠 Example:
      const express = require('express');
      const app = express();

      // Serve static files from the 'public' folder
      app.use(express.static('public'));

      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
      📁 If your folder structure looks like this:

      project/
      │
      ├── public/
      │   ├── style.css
      │   └── image.jpg
      ├── app.js
      Then you can access:

      http://localhost:3000/style.css

      http://localhost:3000/image.jpg

      You don’t need to define individual routes for each static file — Express handles it automatically.      

- What does the built-in JSON middleware (`express.json()`) do?
  Az express.json() beépített middleware azt a feladatot látja el, hogy kezelje és feldolgozza a JSON formátumú bejövő kérés testjét.
  Amikor használod az express.json()-ot, akkor az middleware ellenőrzi, hogy a kérés Content-Type fejlécének értéke application/json-e.
  Ha igen, akkor a testet JSON.parse() segítségével JavaScript objektummá alakítja, és ezt az objektumot a req.body-ban tárolja.

        Ha nem használod ezt a middleware-t, akkor az Express nem fogja automatikusan feldolgozni a JSON formátumú testeket, és a req.body értéke undefined lesz.
        Az express.json() middleware biztosítja, hogy a test biztonságosan JSON.parse()-szal legyen feldolgozva, így az útvonalkezelők könnyen hozzáférhetnek az adatokat.

  The built-in express.json() middleware is used to handle and parse the incoming request bodies that are in JSON format. When you use express.json(), it checks if the incoming request has a Content-Type of application/json.
  If so, it parses the body of the request and converts it into a JavaScript object, which is then available on req.body.

        Without this middleware, Express would not be able to automatically parse JSON request bodies, and req.body would be undefined. The middleware ensures that the body is safely parsed using JSON.parse(), allowing your route handlers to easily access the parsed data.

        For example, if a client sends a request with a JSON body:

        {
        "operandA": 4,
        "operandB": 3
        }
        After adding express.json() middleware, you can access the values in the body like this:

        app.post('/calculate', (req, res) => {
        const a = req.body.operandA;
        const b = req.body.operandB;
        // Do something with a and b
        });

- How does Express.js handle HTTP request/response cycles? Explain the process of receiving and responding to requests using Express.js middlewares and route handlers.

      Az Express.js egy middleware láncot használ, hogy feldolgozza a bejövő HTTP kéréseket, és választ küldjön rájuk.

        🔁 A kérés-válasz ciklus lépései:
        A kliens küld egy kérést – például: GET /about
        1.Az Express végigmegy a megadott middleware-eken, amiket app.use()-szal adtál meg (pl. naplózás, JSON feldolgozás stb.).
        2.Ha van megfelelő route (pl. app.get('/about')), akkor annak a handler függvénye lefut.
        Ebben a handlerben válaszolhatsz pl. res.send(), res.json() vagy res.render() segítségével.
        Ha nem talál megfelelő route-ot, akkor a szerver 404-et küld vissza.
        Hibák esetén a hiba-kezelő middleware (err, req, res, next) lép működésbe.


    Express.js handles HTTP requests using a middleware pipeline.

      When a client (like a browser) sends a request, Express processes it through a series of middleware functions, followed by the appropriate route handler, and finally sends back a response.

      🔁 Request/Response cycle steps:
      Client sends a request – e.g., GET /about

      Express checks for any global middleware via app.use(), like logging, body parsing, etc.

      If a matching route is found (e.g., app.get('/about')), its handler function is called.

      Inside the handler, you can send a response using res.send(), res.json(), res.render(), etc.

      If no matching route is found, Express returns a 404 response.

      Errors are passed to error-handling middleware if needed.

      const express = require('express');
      const app = express();

        // Middleware: logs the request
        app.use((req, res, next) => {
          console.log(`${req.method} ${req.url}`);
          next(); // Go to next middleware or route handler
        });

        // Route handler
        app.get('/about', (req, res) => {
          res.send('About Page');
        });

        // Start server
        app.listen(3000, () => {
          console.log('Server running on port 3000');
        });

- How does routing work in Express.js? Explain how to define routes and handle different HTTP methods (GET, POST, etc.) in an Express.js application.

  Az Express.js-ben a routing azt jelenti, hogy meghatározod, hogyan válaszoljon a szerver különböző HTTP kérésekre (pl. GET, POST), amik egy adott útvonalra (URL-re) érkeznek.

    🧩 Alapelv:
    Összepárosítod:

    a kérés típusát (GET, POST stb.)

    a címet (pl. /, /users)

    és megadsz egy függvényt, amit a szerver lefuttat, ha ilyen kérés érkezik.

      const express = require('express');
      const app = express();

      // GET kérés a "/" címre
      app.get('/', (req, res) => {
        res.send('Helló, világ!');
      });

      // POST kérés a "/submit" címre
      app.post('/submit', (req, res) => {
        res.send('Űrlap beküldve!');
      });

      // PUT kérés a "/user" címre
      app.put('/user', (req, res) => {
        res.send('Felhasználó frissítve!');
      });

      // DELETE kérés a "/user" címre
      app.delete('/user', (req, res) => {
        res.send('Felhasználó törölve!');
      });
    A req.body, req.params, req.query segítségével elérheted az adatokat a kérésből.


    Routing in Express.js means defining how your server responds to different HTTP requests (like GET, POST, PUT, DELETE) made to specific URLs.

        🧩 Basic idea:
        You match:
        a URL path (like /users, /about)
        a HTTP method (like GET, POST)
        and define a handler function to run when that route is hit  



- What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json() in Express.js.
  Express.js válaszküldési metódusok:
      res.send() – Bármilyen tartalom küldésére jó (szöveg, objektum, tömb).
      res.json() – JSON válasz küldése (Content-Type: application/json).
      res.status() – Állapotkód beállítása.
      res.redirect() – Átirányítás másik URL-re.
      res.render() – Nézet (template) megjelenítése.
      res.sendFile() – Fájl küldése válaszként.
      res.end() – Válasz befejezése adat küldése nélkül.

      Különbség res.send() és res.json() között:
          res.send():
          Általános célú.
          Küldhetsz vele szöveget, objektumot, tömböt stb.
          Objektum esetén JSON-t küld, de nem garantált a Content-Type fejléc.

          res.json():
          Kifejezetten JSON küldésére szolgál.
          Automatikusan beállítja a Content-Type: application/json fejlécet.
          Biztonságosabb, ha objektumot vagy tömböt küldesz vissza.


  Methods in Express.js to send responses:
    res.send() – Sends any type of content (string, object, array, buffer).
    res.json() – Sends a JSON response (sets Content-Type: application/json).
    res.status() – Sets the HTTP status code (used before send() or json()).
    res.redirect() – Redirects the client to another URL.
    res.render() – Renders a view template (e.g., Pug, EJS).
    res.sendFile() – Sends a file as a response.
    res.end() – Ends the response without sending any data.


    res.send() vs res.json():

        res.send():
        General-purpose method.
        Can send strings, objects, arrays, etc.
        Converts objects to JSON automatically, but doesn’t always set Content-Type to application/json.

        res.json():
        Specifically for sending JSON.
        Automatically sets Content-Type: application/json.
        Safer and clearer when returning structured data (like objects or arrays).




- What is the purpose of the next() function in Express.js middleware? How can you use it to pass control to the next middleware function in the chain or to terminate the middleware processing?
          A next() függvény szerepe az Express.js middleware-ekben az, hogy továbbadja az irányítást a következő middleware függvénynek a láncban. Ha nem hívod meg, akkor a feldolgozás megakad, és a kliens nem kap választ.

        Mikor használjuk?
        Akkor hívod meg, ha a middleware-ed nem fejezi be a választ (tehát nem küld vissza pl. res.send()-et), hanem csak valamilyen előfeldolgozást végez (pl. naplózás, ellenőrzés), és utána át akarod adni a vezérlést a következő feldolgozónak.

        app.use((req, res, next) => {
          console.log('Kérés érkezett:', req.method, req.url);
          next(); // fontos: ezzel megy tovább a feldolgozás
        });

        app.get('/', (req, res) => {
          res.send('Hello Express!');
        });

        Ha nem hívod meg a next()-et és nem küldesz választ, akkor a kérés "függőben" marad, vagyis a böngésző csak vár és nem történik semmi.



        Purpose of next():
        next() is a function provided by Express.

        It passes control from the current middleware to the next middleware in the stack.

        Without calling next(), the request will hang (the response won't be sent).

        🧠 When do you use it?
        If your middleware does something (like logging, parsing), and then needs to move on to the next route or middleware.

        In error-handling, you use next(error) to skip to the error handler.

        app.use((req, res, next) => {
          console.log('Request received');
          next(); // Move to the next middleware or route
        });

        app.get('/', (req, res) => {
          res.send('Hello!');
        });



- Explain the concept of route parameters in Express.js. How can you extract dynamic values from the URL path using route parameters, and how are these values accessed within route handlers?

      A route paraméterek (útvonalparaméterek) az Express.js-ben lehetővé teszik, hogy dinamikus értékeket adj át az URL-en keresztül. Ezeket akkor használjuk, amikor például egy adott felhasználóhoz, termékhez vagy bejegyzéshez szeretnél elérni adatokat azonosító (pl. ID) alapján.

      Egy route paramétert kettősponttal (:) jelölünk az útvonalban:
          app.get('/users/:userId', (req, res) => {
            // itt userId egy route paraméter
          });

      Az Express automatikusan kinyeri ezeket az értékeket, és elérhetővé teszi a req.params objektumban:
          app.get('/users/:userId', (req, res) => {
            const userId = req.params.userId; // így érheted el a dinamikus értéket
            res.send(`A felhasználó ID-je: ${userId}`);
          });

      Több paraméter: 
          app.get('/users/:userId/posts/:postId', (req, res) => {
            const userId = req.params.userId;
            const postId = req.params.postId;
            res.send(`Felhasználó: ${userId}, bejegyzés: ${postId}`);
          });

      Mire használjuk?
          Egyedi rekordok lekérésére adatbázisból (pl. /products/:id)
          URL-alapú navigációnál React vagy más frontend app esetén
          REST API végpontokban (GET, PUT, DELETE műveleteknél)

  Route parameters in Express.js are used to capture dynamic values from the URL path. These values are defined in the route path using a colon (:) before the parameter name, and can then be accessed within the route handler via req.params.       

        app.get('/users/:userId', (req, res) => {
        const userId = req.params.userId;
        res.send(`User ID is: ${userId}`);
      });

      In this example, if the user visits /users/123, the value "123" will be available as req.params.userId.

      You can also define multiple parameters:
      app.get('/users/:userId/posts/:postId', (req, res) => {
        const { userId, postId } = req.params;
        res.send(`User: ${userId}, Post: ${postId}`);
      }); 





## REST and CRUD

- Can you name some typical HTTP response codes and their meaning?
  Az HTTP válaszkódok azokat a háromjegyű kódokat jelentik, amelyek a szerver válaszát jelzik a kliens kérésére. Az alábbiakban néhány tipikus HTTP válaszkódot és azok jelentését találod:

        200 OK:
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
        Jelentés: A szerver ideiglenesen nem elérhető, mert túlterhelt vagy karbantartás alatt van.

  HTTP response codes are three-digit codes that indicate the server's response to a client's request. Here are some typical HTTP response codes and their meanings:

        200 OK:
        Meaning: The request was successful, and the response contains the requested data.

        201 Created:
        Meaning: The request was successful, and a new resource was created. (e.g., adding a new item to a database)

        400 Bad Request:
        Meaning: The request was malformed or had invalid syntax, so the server could not process it.

        401 Unauthorized:
        Meaning: Authentication is required, and the client did not provide valid authentication credentials.

        403 Forbidden:
        Meaning: The request was valid, but the client does not have permission to access the resource.

        404 Not Found:
        Meaning: The requested resource could not be found on the server. The URL does not exist.

        500 Internal Server Error:
        Meaning: The server encountered an error while processing the request but cannot specify the problem.

        502 Bad Gateway:
        Meaning: The server received an invalid response from an upstream server while attempting to fulfill the request.

        503 Service Unavailable:
        Meaning: The server is temporarily unavailable due to being overloaded or undergoing maintenance.

- Can you name some typical HTTP request/response headers and their meaning?

  Kérés Fejlécek (Request Headers) – REST és CRUD:
      Content-Type
      Angol: Indicates the media type of the resource in the request body (used in POST, PUT, PATCH).
      Magyar: Meghatározza az erőforrás média típusát a kérés törzsében (POST, PUT, PATCH esetén használatos).
      Példa: Content-Type: application/json
      CRUD kapcsolódás: Amikor új erőforrást hozunk létre (POST), vagy meglévőt módosítunk (PUT, PATCH), a Content-Type jelzi, hogy az adatok milyen formátumban érkeznek.

    Accept
      Angol: Specifies the media types that the client is willing to accept in the response.
      Magyar: Meghatározza, hogy a kliens milyen média típusokat hajlandó fogadni a válaszban.
      Példa: Accept: application/json
      CRUD kapcsolódás: A kliens jelezheti, hogy JSON formátumban szeretné megkapni az adatokat, amikor például az erőforrásokat lekérdezi (GET).

    Authorization
      Angol: Contains the credentials to authenticate the client with the server (typically in the form of a token).
      Magyar: Hitelesítési adatokat tartalmaz a kliens és a szerver közötti kapcsolat biztosítására (általában token formájában).
      Példa: Authorization: Bearer <token>
      CRUD kapcsolódás: Ha az alkalmazás biztonságos, akkor az erőforrások eléréséhez gyakran szükséges autentikáció (pl. GET, PUT).

    If-Match
      Angol: Used with PUT or DELETE requests to perform the action only if the entity matches the provided version (usually with an ETag).
      Magyar: PUT vagy DELETE kéréseknél használják, hogy az akció csak akkor történjen meg, ha az entitás megegyezik a megadott verzióval (általában ETag használatával).
      Példa: If-Match: "abc123"
      CRUD kapcsolódás: Segít elkerülni az adatok felülírását vagy törlését, ha közben más kliens módosította az erőforrást.

    Cache-Control
      Angol: Specifies caching directives for the request, such as no-cache, max-age, etc.
      Magyar: Meghatározza a kérés gyorsítótárazási irányelveit, például no-cache, max-age stb.
      Példa: Cache-Control: no-store
      CRUD kapcsolódás: A válaszok gyorsítótárazása fontos lehet, különösen a GET kérések esetén, hogy ne terheljük túl a szervert.


  Válasz Fejlécek (Response Headers) – REST és CRUD:
    Content-Type
      Angol: Indicates the media type of the resource in the response body (typically JSON, XML).
      Magyar: Meghatározza az erőforrás média típusát a válasz törzsében (általában JSON, XML).
      Példa: Content-Type: application/json
      CRUD kapcsolódás: A válaszban az erőforrás formátumát (például JSON) jelzi, amit a kliens a CRUD műveletek után kap meg (pl. GET, POST).

    Location
      Angol: Used in response to a POST request to specify the URI of the newly created resource.
      Magyar: POST válaszként használják az újonnan létrehozott erőforrás URI-jának meghatározására.
      Példa: Location: https://api.example.com/resources/123
      CRUD kapcsolódás: A POST kérés eredményeként az új erőforrás helye (URL) kerül visszaadásra.

    ETag
      Angol: Provides a unique identifier for the version of the resource, used for cache validation or conditional requests.
      Magyar: Egyedi azonosítót ad az erőforrás verziójához, amelyet a gyorsítótárazás érvényesítésére vagy feltételes kérésekhez használhatunk.
      Példa: ETag: "abc123"
      CRUD kapcsolódás: Az ETag segít a szervernek és a kliensnek az erőforrások verzióinak nyomon követésében (pl. PUT, DELETE műveletek esetén).

    Access-Control-Allow-Origin
      Angol: Specifies which domains are allowed to access the resources via CORS (Cross-Origin Resource Sharing).
      Magyar: Meghatározza, hogy mely domainek férhetnek hozzá az erőforrásokhoz CORS-on keresztül.
      Példa: Access-Control-Allow-Origin: *
      CRUD kapcsolódás: A REST API-k esetén CORS-támogatás lehet szükséges, hogy különböző domainekről érkező kéréseket engedélyezzünk.

    Cache-Control
      Angol: Specifies caching directives for the response, such as max-age, no-cache.
      Magyar: Meghatározza a válasz gyorsítótárazási irányelveit, mint például max-age, no-cache.
      Példa: Cache-Control: max-age=3600
      CRUD kapcsolódás: A GET válaszok esetében használják, hogy meghatározzák, meddig tárolhatóak a válaszok a gyorsítótárban.






- What are the common HTTP methods used in web development, and what are their respective purposes?

    1. GET
    Cél: Adatok lekérése a szerverről anélkül, hogy módosítanánk a forrást.
    Használati eset: Adatok lekérése, például egy weboldal megjelenítése vagy API válasz lekérése.
    Példa: Felhasználói adatok lekérése egy adatbázisból: GET /users/123.

    2. POST
    Cél: Adatok küldése a szerverre új erőforrás létrehozására vagy adat beküldésére (pl. űrlap beküldés).
    Használati eset: Adatok beküldése, például űrlapok kitöltése, új rekordok létrehozása adatbázisban, vagy hitelesítési adatok küldése.
    Példa: Új felhasználó létrehozása a rendszerben: POST /users.

    3. PUT
    Cél: Adatok küldése a szerverre egy meglévő erőforrás frissítésére vagy teljes cseréjére.
    Használati eset: Egy meglévő rekord vagy erőforrás teljes frissítése (az egész erőforrás felülírása).
    Példa: Felhasználói információk frissítése: PUT /users/123.

    4. PATCH
    Cél: Hasonló a PUT-hoz, de csak az erőforrás egy részét frissíti, nem cseréli le teljesen.
    Használati eset: Csak a módosuló adatokat küldjük el, tehát részleges frissítést végezhetünk egy erőforráson.
    Példa: Csak a felhasználó e-mail címének frissítése: PATCH /users/123.

    5. DELETE
    Cél: Egy adott erőforrás eltávolítása a szerverről.
    Használati eset: Rekordok vagy erőforrások törlése (pl. felhasználó törlése, poszt eltávolítása).
    Példa: Felhasználó törlése: DELETE /users/123.

    Összefoglalás:
        GET: Adatok lekérése.
        POST: Új erőforrás létrehozása vagy adat küldése.
        PUT: Egy erőforrás teljes frissítése.
        PATCH: Egy erőforrás részleges frissítése.
        DELETE: Erőforrás eltávolítása.


    Here are the common HTTP methods used in web development, along with their respective purposes:

    1. GET
    Purpose: Retrieves data from the server without making any changes to the resource.
    Use case: Fetching data, such as displaying a webpage or retrieving an API response.
    Example: Fetching user details from a database: GET /users/123.

    2. POST
    Purpose: Sends data to the server to create a new resource or submit data (e.g., form submission).
    Use case: Submitting data like form entries, creating new records in a database, or sending authentication credentials.
    Example: Creating a new user in a system: POST /users.

    3. PUT
    Purpose: Sends data to the server to update or replace an existing resource.
    Use case: Updating an existing record or resource with new data (replaces the entire resource).
    Example: Updating user information: PUT /users/123.

    4. PATCH
    Purpose: Similar to PUT but only updates a part of the resource instead of replacing it entirely.
    Use case: Making partial updates to an existing resource (only the fields that need to change are sent).
    Example: Updating just the email address of a user: PATCH /users/123.

    5. DELETE
    Purpose: Removes a specified resource from the server.
    Use case: Deleting records or resources (e.g., removing a user, deleting a post).
    Example: Deleting a user: DELETE /users/123.

    Summary:
        GET: Retrieve data.
        POST: Create new resource or submit data.
        PUT: Update/replaces entire resource.
        PATCH: Partially update a resource.
        DELETE: Remove a resource.

- How does the GET method differ from the POST method? Explain when it is appropriate to use each method. Which one uses the request body to receive data?

  GET Metódus
    Cél:
       A GET metódust arra használjuk, hogy adatokat kérjünk le a szerverről anélkül, hogy módosítanánk az erőforrást. Általában adatokat kérünk le, például weboldalak betöltésekor vagy API-ból történő információ lekérésekor.

    Kérés Törzse:
       A GET metódus nem használ kéréstörzset az adatok küldésére. Az adatokat általában az URL-ben található lekérdezési paraméterekben küldjük (pl. /search?query=example). Mivel nem tartalmaz kérés törzset, biztonságosnak és idempotensnek (ugyanaz a GET kérés mindig ugyanazt az eredményt adja) tekintjük.

    Mikor Használjuk:
       A GET metódust akkor használjuk, ha adatokat szeretnénk lekérni anélkül, hogy módosítanánk a szerveren található erőforrást. Alkalmas például weboldal betöltésére vagy adat lekérésére egy API-ból.

    Példa:
    Felhasználói információk lekérése:
    GET /users/123

  POST Metódus
    Cél:
    A POST metódust arra használjuk, hogy adatokat küldjünk a szervernek, jellemzően új erőforrás létrehozására vagy űrlapok beküldésére. A szerver állapotát módosítja, például új rekordot hoz létre, vagy egy meglévő adatot frissít.

    Kérés Törzse:
        A POST metódus használja a kérés törzsét, hogy adatokat küldjön a szervernek. Itt találhatók az adatokat, például űrlapok adatainak, amelyeket a szervernek küldünk. A POST metódus alkalmas olyan műveletekhez, amelyek új erőforrást hoznak létre, vagy meglévőt módosítanak.

    Mikor Használjuk:
       A POST metódust akkor használjuk, ha adatokat szeretnénk küldeni, amelyek változást okoznak a szerveren, például űrlapok beküldése, új felhasználó létrehozása, vagy adat mentése egy API segítségével.

    Példa:
    Új felhasználó létrehozása:
    POST /users

          Összegzés:
          GET:
          Adatok lekérése.
          Nem használja a kérés törzsét.
          Akkor használjuk, ha adatokat szeretnénk lekérni anélkül, hogy változtatnánk a szerver állapotán.

          POST:
          Adatok küldése új erőforrás létrehozására vagy módosítására.
          Használja a kérés törzsét.
          Akkor használjuk, ha adatokat küldünk, amelyek módosítják a szerver állapotát (pl. új erőforrás létrehozása vagy meglévő adat frissítése).


    GET vs POST:
    GET Method
    Purpose (Cél):
    The GET method is used to retrieve data from the server without making any changes to the resource. It is used to request data, like loading a webpage or getting information from an API.

    Request Body (Kérés Törzs):
    The GET method does not use the request body to send data. All data is usually sent in the URL, as query parameters (e.g., /search?query=example). Since it doesn’t have a request body, it is considered "safe" and "idempotent" (multiple identical GET requests will have the same result).

    Appropriate Use (Alkalmazás):
    Use GET when you want to retrieve data without altering any server-side resources. It is appropriate for actions like loading a webpage or requesting data from an API.

    Example (Példa):
    Requesting user information:
    GET /users/123

    POST Method
    Purpose (Cél):
    The POST method is used to send data to the server, typically to create a new resource or submit a form. It modifies the server state, such as creating or updating a resource.

    Request Body (Kérés Törzs):
    The POST method uses the request body to send data to the server. This is where data, such as form inputs, is included. It is appropriate for creating or updating resources.

    Appropriate Use (Alkalmazás):
    Use POST when you want to send data that will change the server's state, such as submitting form data, creating a new user, or making an API call to store information.

    Example (Példa):
    Creating a new user:
    POST /users

    Summary (Összegzés):
    GET:

    Retrieves data.
    Does not use the request body.
    Appropriate for fetching data without changing the server state.

    POST:
    Sends data to create or modify resources.
    Uses the request body.
    Appropriate for actions that require sending data that affects the server (like creating or updating a resource).




- Explain the use of the PATCH method in HTTP. How does it differ from the PUT method, and when should it be used to update a resource?

    A PATCH metódust akkor használjuk, amikor csak a meglévő erőforrás (pl. egy recept) egy részét szeretnénk módosítani, nem az egészet lecserélni.

    Miben különbözik a PUT metódustól?
    PUT:	
        Teljes erőforrást cserél	
        Az összes mezőt újra el kell küldeni	
        Adatok elveszhetnek, ha nem küldöd újra	A többi adat változatlan marad
    PATCH: 
        Csak egy részét módosítja az erőforrásnak
        Csak a módosítandó mezőket küldöd
        A többi adat változatlan marad

      Mikor használjuk a PATCH-et?
      Ha csak egy vagy néhány mezőt szeretnél módosítani (pl. recept neve vagy kalóriája).

            // PATCH – csak a címet frissítjük
            fetch('/api/recipes/5', {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ title: "Rántotta" })
            });


      The PATCH method is used when you want to partially update a resource, not replace it entirely.


      PUT	                                    PATCH
      Replaces the entire resource	          Updates only part of it
      Requires sending all fields	            Only the changed fields are needed
      Can overwrite data unintentionally	    Other data remains unchanged

      When should you use PATCH?
      When you only want to update one or a few properties of a resource.


- How can the DELETE method be used to remove a resource from a server? Explain how the DELETE method works and any considerations for handling resource deletion.
    A DELETE egy HTTP kérési metódus, amelyet arra használunk, hogy töröljünk egy erőforrást a szerverről. 

    Hogyan működik?
    A kliens küld egy DELETE típusú kérést egy konkrét URL-re, például:

    DELETE /api/recipes/5
    Ez azt mondja a szervernek: „Töröld az 5-ös azonosítójú receptet.”

    A szerver megkapja a kérést, megkeresi az erőforrást (pl. adatbázisból vagy tömbből), törli, majd választ küld vissza.

    A szerver válaszai lehetnek:
      200 OK + a törölt adat visszaküldése,
      204 No Content, ha nincs mit visszaküldeni,
      vagy 404 Not Found, ha nem található az adott erőforrás.

    Fontos szempontok:
      Hitelesítés és jogosultság: Csak engedélyezett felhasználók törölhessenek.
      Ellenőrzés: Törlés előtt ellenőrizzük, hogy létezik-e az erőforrás.
      Soft delete: Néha nem törlünk ténylegesen, csak megjelöljük, hogy törölve lett.
      Hibakezelés: Kezeljük jól, ha pl. az erőforrás nem létezik.

    The DELETE method is an HTTP request method used to remove a resource from the server. It is commonly used in REST APIs when a client wants to delete something, such as a recipe, a user, or a blog post.
      1. The client sends a DELETE request to a specific URL, like:   DELETE /api/recipes/5
      2. The server receives the request, finds the resource (e.g., in a database or an in-memory array), deletes it, and then sends a response back.

        The server often responds with:
        200 OK + the deleted resource,
        or 204 No Content (just to confirm deletion, without a body),
        or 404 Not Found if the resource doesn’t exist.

      Considerations:
        Authentication & Authorization: Only allow trusted users to delete.
        Validation: Check if the resource exists before attempting to delete it.
        Soft delete: Sometimes we don’t actually delete it from the database, just mark it as deleted.
        Error handling: Make sure to handle cases like "not found" or "already deleted". 





- What does the REST architecture mean? What are the REST Constraints?
  Mit jelent a REST architektúra?
      A REST (Representational State Transfer) egy hálózati alkalmazások tervezésére szolgáló architekturális stílus. Egy sor elv és megszorítás alapjául szolgál, amely lehetővé teszi, hogy az ügyfelek és a szerverek állapotmentes, skálázható és hatékony módon kommunikáljanak.

      A REST-t általában webes szolgáltatásokban használják, és alapvetően az HTTP szabványos metódusaira (GET, POST, PUT, DELETE, PATCH) épít, hogy CRUD műveleteket végezzenek az erőforrásokon (Create, Read, Update, Delete).

  Mik a REST megszorítások?
      A REST architektúra hat alapvető megszorítással rendelkezik, amelyek mindegyike segíti a kommunikáció skálázhatóságát, állapotmentességét és egyszerűségét.

      Kliens-Szerver: A kliens és a szerver különálló entitások, amelyek standard protokollokon (általában HTTP-n) keresztül kommunikálnak. A szerver kezeli az adatokat és az üzleti logikát, míg a kliens a felhasználói felületet kezeli.

      Állapotmentesség (Stateless): Minden kliens által küldött kérésnek tartalmaznia kell az összes szükséges információt a kérés feldolgozásához. A szerver nem tárolja el az előző kérésekkel kapcsolatos adatokat, tehát minden kérés független.

      Cache-elhetőség (Cacheable): A szerver válaszainak egyértelműen jelezniük kell, hogy cache-elhetők-e vagy sem. Ez lehetővé teszi a kliensek számára, hogy tárolják a válaszokat, és elkerüljék a felesleges kéréseket, javítva ezzel a teljesítményt.

      Egységes interfész (Uniform Interface): A REST API-knak követniük kell egy szabványos és következetes szabályrendszert az interakciókhoz. Ez megkönnyíti a kliens és a szerver közötti kommunikációt, és biztosítja, hogy az API előrejelezhető legyen.

      Rétegezett rendszer (Layered System): A REST API-k több rétegből is felépíthetők, amelyek mindegyike egy adott kommunikációs aspektusért felelős. A kliensek nem feltétlenül tudják, hogy hány rétegből áll a rendszer, és minden réteg egy konkrét funkciót lát el (pl. biztonság, terheléselosztás, cache-elés).

      Kód a kereslet alapján (Code on Demand – opcionális): A szerverek végrehajtható kódot (pl. JavaScript) biztosíthatnak a kliens számára, amely kiterjesztheti a funkcionalitást. Ez az opció nem kötelező, és nem minden esetben használják.

  What does the REST architecture mean?
    REST (Representational State Transfer) is an architectural style for designing networked applications. It is based on a set of principles and constraints that allow clients and servers to communicate in a stateless, scalable, and efficient manner.

    REST is typically used in web services, and it relies on standard HTTP methods like GET, POST, PUT, DELETE, and PATCH to perform CRUD operations (Create, Read, Update, Delete) on resources.   

  What are the REST Constraints?
      REST architecture is defined by six key constraints, each of which helps to ensure scalability, statelessness, and simplicity of communication.

      Client-Server: The client and server are separate entities that communicate through standard protocols (usually HTTP). The server manages data and business logic, while the client handles the user interface.

      Stateless: Each request from the client to the server must contain all the information needed to process the request. The server does not store any information about previous requests, so every request is independent.

      Cacheable: Responses from the server must explicitly specify whether they are cacheable or not. This allows clients to cache responses and avoid unnecessary requests, improving performance.

      Uniform Interface: REST APIs must follow a standard and consistent set of rules for interaction. This makes it easier for clients to communicate with the server and ensures that the API is predictable.

      Layered System: REST APIs can be composed of multiple layers, each responsible for a specific aspect of the communication. Clients are not necessarily aware of the various layers, and each layer has a specific function (e.g., security, load balancing, caching).

      Code on Demand (optional): Servers can provide executable code (e.g., JavaScript) to the client, which can be executed to extend functionality. This constraint is optional and not always used.   



- What does a URL's path represent in a REST architecture? Show an example of the `recipe` resource's CRUD operations. Define the HTTP method and a corresponding path for each CRUD operation.

  Mi a REST architektúrában az URL útvonal szerepe?
        A REST architektúrában az URL útvonal azokat az erőforrásokat vagy azok gyűjteményeit jelöli, amelyekkel a kliens interakcióba lép. Az útvonal alapvetően meghatározza az erőforrás helyét a szerveren, míg az HTTP metódus azt jelzi, hogy milyen műveletet kell végrehajtani ezen az erőforráson (pl. létrehozás, olvasás, frissítés vagy törlés).

      Példa: CRUD műveletek egy recipe erőforráson
      Íme, hogyan történnének a CRUD műveletek a recipe (recept) erőforráson, az HTTP metódusok és a hozzájuk tartozó útvonalak segítségével:

    Új recept létrehozása (POST)
        HTTP Metódus: POST
        Útvonal: /api/recipes
        Leírás: Ez a művelet egy új receptet hoz létre. A kliens a recept adatait tartalmazó kérés törzset küld.

            POST /api/recipes
            Content-Type: application/json
            Body: { "title": "Pasta", "ingredients": ["pasta", "sauce"], "calories": 300 }

        Válasz: A szerver létrehozza a receptet és visszaküldi az új erőforrást (például egyedi azonosítóval):
          { "id": 1, "title": "Pasta", "ingredients": ["pasta", "sauce"], "calories": 300 }

    Receptek listájának lekérése (GET)
        HTTP Metódus: GET
        Útvonal: /api/recipes
        Leírás: Ez a művelet visszaadja az összes receptet.

          GET /api/recipes
        Válasz: A receptek listája:
            [
              { "id": 1, "title": "Pasta", "ingredients": ["pasta", "sauce"], "calories": 300 },
              { "id": 2, "title": "Salad", "ingredients": ["lettuce", "tomato"], "calories": 150 }
            ]


    Recept frissítése (PUT vagy PATCH)

        HTTP Metódus: PUT (teljes erőforrás cseréje) vagy PATCH (részleges frissítés)
        Útvonal: /api/recipes/:id (ahol :id a recept egyedi azonosítója)
        Leírás: Ez a művelet egy meglévő receptet frissít. A kliens az új adatokat küldi.

        PUT /api/recipes/1
        Content-Type: application/json
        Body: { "title": "Spaghetti", "ingredients": ["spaghetti", "tomato sauce"], "calories": 350 }
        Válasz: A szerver frissíti a receptet és visszaküldi a frissített erőforrást:
            { "id": 1, "title": "Spaghetti", "ingredients": ["spaghetti", "tomato sauce"], "calories": 350 }
    
    
    Recept törlése (DELETE)

         HTTP Metódus: DELETE
          Útvonal: /api/recipes/:id (ahol :id a törlendő recept egyedi azonosítója)
          Leírás: Ez a művelet törli a megadott receptet a szerverről.

            DELETE /api/recipes/1
            Válasz: A szerver törli a receptet és visszaküldi a törölt erőforrást:
            { "id": 1, "title": "Spaghetti", "ingredients": ["spaghetti", "tomato sauce"], "calories": 350 }

    CRUD műveletek összefoglalása HTTP metódusokkal és útvonalakkal:
    Művelet	        HTTP Metódus	         Útvonal	          Leírás
    Létrehozás	    POST	                 /api/recipes	       Új recept létrehozása
    Lekérés	        GET	                   /api/recipes	       Receptek listájának lekérése
    Lekérés       	GET	                   /api/recipes/:id	    Egy adott recept lekérése az ID alapján
    Frissítés	      PUT	                   /api/recipes/:id	    Meglévő recept teljes cseréje
    Frissítés	      PATCH	                  /api/recipes/:id  	Meglévő recept részleges frissítése
    Törlés	        DELETE	                /api/recipes/:id	    Egy adott recept törlése

  URL Path in REST:
      Resource: A resource is typically an object or a collection of objects that can be manipulated by the client through HTTP requests. In REST, the path usually describes the type of resource being interacted with.

      Example: /api/recipes refers to the collection of recipes, while /api/recipes/123 refers to the individual recipe with ID 123.

  Summary of the CRUD operations with HTTP methods and paths:
      Operation	    HTTP Method	          Path	          Description
      Create	      POST	                /api/recipes	  Create a new recipe
      Read	        GET	                  /api/recipes	   Get a list of all recipes
      Read	        GET	                  /api/recipes/:id	Get a specific recipe by ID
      Update	      PUT	                  /api/recipes/:id	Replace an existing recipe by ID
      Update	      PATCH	                /api/recipes/:id	Partially update an existing recipe by ID
      Delete	      DELETE	              /api/recipes/:id	Delete a recipe by ID


- How do you handle form submissions using JavaScript? Explain the process of capturing form data and preventing the default form submission behavior.

    A JavaScript segítségével az űrlapok beküldését általában úgy kezeljük, hogy először elkapjuk az űrlap adatait, megakadályozzuk az alapértelmezett viselkedést (ami az oldal újratöltését eredményezné), majd a beérkezett adatokat feldolgozzuk vagy továbbítjuk valahová (például a szerverre).

    Az űrlap beküldésének kezelése JavaScript-tel:
    Űrlap beküldésének eseményének elkapása: Eseményfigyelőt rendelünk az űrlap elemhez, hogy figyeljük a submit eseményt.

    Az alapértelmezett űrlap beküldési viselkedés megakadályozása: Alapértelmezés szerint, amikor egy űrlapot beküldenek, az oldal újratöltődik. Ennek elkerülésére az eseménykezelőben meghívjuk az event.preventDefault() metódust.

    Űrlapadatok elkapása: Az űrlapon lévő adatokat az FormData API segítségével vagy az egyes űrlapelemek elérésével tudjuk lekérni.

    Az adatok feldolgozása vagy továbbítása: Az űrlapadatok elkapása után dönthetünk úgy, hogy megjelenítjük őket, érvényesítjük, vagy például AJAX-kérést küldünk velük (pl. fetch() vagy XMLHttpRequest segítségével).

    <form id="myForm">
      <input type="text" id="name" placeholder="Add meg a neved" />
      <input type="email" id="email" placeholder="Add meg az email címed" />
      <button type="submit">Beküldés</button>
    </form>

    <script>
      const form = document.getElementById('myForm');
      
      form.addEventListener('submit', function (event) {
        event.preventDefault(); // Az alapértelmezett űrlap beküldési viselkedés megakadályozása
        
        // Az űrlapadatok elkapása
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Az adatok feldolgozása vagy továbbítása (például szerverre küldés)
        console.log(`Név: ${name}, Email: ${email}`);
        
        // Példa adatok küldésére fetch segítségével
        // fetch('/submit-form', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ name, email }),
        // });
      });
    </script>

    Handling form submissions with JavaScript typically involves capturing the form data, preventing the default behavior of the form (which would reload the page), and then processing or sending the data elsewhere (like to a server).

    Here’s how you can handle form submissions in JavaScript:

    1. Capture the form submission event: You attach an event listener to the form element to listen for the submit event.

    2. Prevent the default form submission behavior: By default, when a form is submitted, the page reloads. To prevent this, you call the event.preventDefault() method inside the event handler.

    3. Capture form data: You can capture the data entered into the form using the FormData API or by accessing individual form elements.

    4. Process the data or send it: After capturing the form data, you can either display it, perform validation, or send it via an AJAX request (e.g., using fetch() or XMLHttpRequest).


- Explain the required elements necessary to define a form in HTML.
    <form> tag: Az űrlapelemek tárolója. <input> tag: A felhasználói inputok fogadására szolgál. Különböző típusú lehet (pl. szöveg, email, szám). <button> vagy <input type="submit">: Az űrlap beküldésének elindítására szolgál. Opcionálisan, <label> elemek: Leíró szöveget biztosítanak az inputokhoz.

    <form> tag: The container for form elements.
    <input> tags: To accept user input. Can be various types (e.g., text, email, number).
    <button> or <input type="submit">: To trigger form submission.
    Optionally, <label> elements: To provide descriptive text for the inputs.





- What is the purpose of the required attribute in HTML form elements? How does it enforce mandatory input fields and prevent form submission without the required information?

    A required attribútum az HTML űrlapelemekben azt jelzi, hogy a mezőt ki kell tölteni, mielőtt az űrlap elküldhető lenne. Ez biztosítja, hogy a felhasználó nem küldheti el az űrlapot anélkül, hogy megadná a szükséges információkat az adott mezőben. Ha a felhasználó megpróbálja beküldeni az űrlapot úgy, hogy a kötelező mező üres marad, a böngésző megakadályozza az elküldést, és általában vizuálisan kiemeli a hiányzó mezőket, például piros kerettel, hogy arra figyelmeztesse a felhasználót.

    The required attribute in HTML form elements specifies that the field must be filled out before the form can be submitted. It ensures that the user cannot submit the form without providing the necessary information for that field. If a user attempts to submit the form with a required field left blank, the browser will prevent submission and usually highlight the missing fields with a visual indicator, such as a red border, prompting the user to fill them in.



- Explain the different types of form input fields available in HTML. How do input types like text, number, email, checkbox, and radio buttons differ, and how are they used in forms?


    Minden űrlapmező-típusnak megvan a saját viselkedése, amely a kívánt használathoz van optimalizálva, biztosítva a jobb felhasználói élményt és a felhasználói adatok megfelelő érvényesítését.
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
    Minden rádiógomb ugyanazzal a name attribútummal rendelkezik, biztosítva, hogy egyszerre csak egy lehetőség választható.


    HTML provides several types of input fields to handle different types of user data. Here’s an overview of some common input types:

    <input type="text">:
    Used for plain text input.
    Allows users to enter any alphanumeric characters.
    Example: <input type="text" name="username">

    <input type="number">:
    Used for numeric input.
    Only numbers can be entered (some browsers provide input validation for numbers).
    Example: <input type="number" name="age">

    <input type="email">:
    Used for email addresses.
    Browsers can validate that the entered text is in the format of an email (e.g., example@domain.com).
    Example: <input type="email" name="email">

    <input type="checkbox">:
    Allows users to select one or more options from a list.
    Each checkbox operates independently (can be checked or unchecked).
    Example: <input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter

    <input type="radio">:
    Used when a user can select only one option from a group of choices.
    All radio buttons in a group share the same name attribute, ensuring that only one option can be selected at a time.

    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female

    Each input type has specific behavior tailored to its intended use, providing better user experience and ensuring proper validation of user input.




- Can you explain the purpose of the name attribute in the context of form submission?

    HTML űrlapok esetén a name attribútum kulcsfontosságú a beküldött adatok azonosításához. Így működik:

    Űrlapadatok azonosítása:
    A name attribútum adja meg az űrlapelem nevét. Amikor az űrlapot beküldik, a böngésző név-érték párokat küld a szervernek, ahol a szerver azonosítani tudja és feldolgozhatja az adatokat.
    Példa: <input type="text" name="username"> a username=value formában küldi el az adatokat, amikor az űrlapot beküldik.

    Beküldött adatok elérése:
    A szerveren az űrlapadatokat jellemzően az elem nevén keresztül érik el. Ez lehetővé teszi, hogy a szerver tudja, melyik adat tartozik melyik űrlapelemhez.
    Példa: Ha egy űrlapmező <input type="text" name="email">, akkor a szerver az email kulcs alatt fogja keresni a beküldött értéket.

    Egyedi azonosítás:
    A name attribútum fontos az egyes űrlapelemek értékeinek egyedi azonosításához. Ha több elem ugyanazt a nevet használja (pl. több jelölőnégyzet vagy rádiógomb), az értékek ugyanazon név alatt lesznek összegyűjtve.

    Röviden: a name attribútum segít összekapcsolni a felhasználói inputot az űrlap egyes mezőivel, és lehetővé teszi az adatok megfelelő továbbítását az űrlap beküldésekor.


  In HTML forms, the name attribute is crucial for identifying the data being submitted. Here's how it works:

    Form Data Identification:
    The name attribute specifies the name of the form element. When the form is submitted, the browser sends the name-value pairs to the server, where the server can identify and process the data.
    Example: <input type="text" name="username"> will send the data as username=value when the form is submitted.

    Accessing Submitted Data:
    On the server side, the form data is typically accessed using the name of the field. This allows the server to know what data corresponds to each form element.
    Example: If a form field is <input type="text" name="email">, the server will look for the submitted value under the key email.

    Unique Identification:
    The name attribute is essential for uniquely identifying each form element's value. If multiple elements share the same name (e.g., multiple checkboxes or radio buttons), their values will be grouped together under the same name.

    In short, the name attribute helps associate user input with the specific fields in a form and enables the proper transmission of data when the form is submitted.  


- Can you explain how we can connect a label tag to a form element?
    HTML-ben a <label> tagot arra használjuk, hogy felhasználóbarát leírást adjunk az űrlapelemeknek, például a beviteli mezőknek. A label javítja a hozzáférhetőséget és a használhatóságot azáltal, hogy világosan jelzi, melyik űrlapmező tartozik egy adott címkéhez.

    Két fő módon lehet összekapcsolni a <label> taget egy űrlapelemmel:

    A for attribútum használatával:

      A <label> tag for attribútumának meg kell egyeznie annak az űrlapelemnek az id attribútumával, amelyhez a címke tartozik. Ez kifejezetten összekapcsolja a címkét és az űrlapmezőt.

      Amikor a felhasználó rákattint a címkére, az adott beviteli mező fókuszba kerül, ami különösen hasznos a hozzáférhetőség javításához (pl. képernyőolvasót használó felhasználók számára vagy azok számára, akiknek nehezebb kiválasztaniuk az űrlap elemeit).

      <label for="username">Felhasználónév:</label>
      <input id="username" type="text" name="username">


    A beviteli mező beágyazása a címke tagba:
        Alternatívaként az űrlapelem közvetlenül a <label> tagbe helyezhető. Ez automatikusan összekapcsolja a címkét az űrlapelemmel, anélkül hogy szükség lenne a for és id attribútumokra.

        <label>
          Felhasználónév:
          <input type="text" name="username">
        </label>

    Mindkét módszer összekapcsolja a címkét az űrlapelemmel, és bármelyik használható a preferenciák vagy a speciális igények függvényében. Az első módszer (a for és id használata) általában ajánlott a tisztaság és a hozzáférhetőség érdekében, különösen akkor, ha a címkét stílusozni kell, vagy bonyolultabb űrlapokat kell kezelni.


    In HTML, the <label> tag is used to provide a user-friendly description for form elements, such as input fields. It improves accessibility and usability by clearly indicating which input field corresponds to a specific label.

    You can connect a <label> tag to a form element in two primary ways:

    Using the for Attribute:

    The <label> tag's for attribute should match the id attribute of the form element it is labeling. This creates an explicit connection between the label and the form field.

    When the user clicks on the label, the associated input field receives focus, which is especially useful for enhancing accessibility (e.g., for users with screen readers or those who have difficulty selecting form elements).

    <label for="username">Username:</label>
    <input id="username" type="text" name="username">
    Wrapping the Input Element Inside the Label:

    Alternatively, you can place the form element directly inside the <label> tag. This implicitly associates the label with the input element without needing the for and id attributes.

  
    <label>
      Username:
      <input type="text" name="username">
    </label>
    Both methods connect the label to the form element, and either can be used based on your preference or specific requirements. The first method (using for and id) is often recommended for clarity and accessibility, especially when you need to style the label or manage more complex forms.

- How can you dynamically manipulate or modify form elements using JavaScript? Explain how to add or remove form fields dynamically based on user interaction or specific conditions.

    A JavaScript lehetővé teszi, hogy valós időben módosítsuk az űrlapokat – például új mezőket adjunk hozzá vagy töröljünk, amikor a felhasználó egy gombra kattint, vagy bizonyos feltételek teljesülnek.

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
        }

    használata:
    Új résztvevő hozzáadása egy jelentkezési űrlaphoz
    Plusz e-mail mező hozzáadása ha checkbox be van jelölve
    Egyéni kérdések megjelenítése feltételek alapján


    JavaScript allows you to modify form elements in real-time – such as adding or removing input fields based on user interaction or specific conditions.

      Common use cases:
      Adding extra participants to a form
      Showing an additional email field if a checkbox is selected
      Displaying custom fields based on a dropdown selection



- How can you convert form data into a format that can be easily transmitted or processed by the server?

    Ha űrlapadatokat szeretnél a szerverre küldeni, azokat célszerű strukturált formátumba konvertálni, például:

      Lekérdezési karakterlánc (pl. name=John&age=25)
      JSON objektum (pl. { "name": "John", "age": 25 })
      FormData objektum (fájlok vagy HTML-űrlap teljes elküldéséhez)

      1. FormData használata
      const form = document.querySelector("form");
      const formData = new FormData(form);

      fetch("/submit", {
        method: "POST",
        body: formData
      });
      Jó választás, ha az űrlapban fájlokat is küldesz (<input type="file">).

      2. Átalakítás JSON formátumra
      const form = document.querySelector("form");
      const formData = new FormData(form);
      const json = Object.fromEntries(formData.entries());

      fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(json)
      });
      Hasznos, ha a backend JSON formátumban várja az adatokat – pl. REST API-k esetén.



    To send form data to the server, you typically want it in a structured format like:

      Query string (e.g., name=John&age=25)
      JSON (e.g., { "name": "John", "age": 25 })
      FormData object (for file uploads or multipart/form data)

      1. Using FormData:
      const form = document.querySelector("form");
      const formData = new FormData(form);

      // Example: send with fetch
      fetch("/submit", {
        method: "POST",
        body: formData,
      });
      This is useful when your form contains files (<input type="file">).

      2. Convert to JSON

      const form = document.querySelector("form");
      const formData = new FormData(form);
      const json = Object.fromEntries(formData.entries());

      // Example: send JSON with fetch
      fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      });
  This is best when your backend expects JSON (e.g., in REST APIs).


## React

- What is React.js and what are its key features?

      A React.js egy nyílt forráskódú JavaScript könyvtár, amelyet felhasználói felületek (UI-k) és egyoldalas alkalmazások (SPA-k) készítésére használnak. A Facebook fejlesztette, és lehetővé teszi a fejlesztők számára, hogy újrahasználható UI komponenseket készítsenek, amelyeket könnyen kezelhetnek és manipulálhatnak, gyorsabb és hatékonyabb módot biztosítva az interaktív UI-k építésére. A React virtuális DOM-ot (Document Object Model) és deklaratív szintaxist használ, hogy lehetővé tegye a fejlesztők számára a felhasználói felület megjelenésének leírását bármely adott pillanatban, majd a React csak a szükséges változtatásokat frissíti a valódi DOM-ban, javítva a teljesítményt és csökkentve a betöltési időket. Emellett számos erőteljes funkciót kínál, mint például állapotkezelés, eseménykezelés és szerveroldali renderelés, ami népszerű választássá teszi a komplex és skálázható webalkalmazások építésére.

      React.js is an open-source JavaScript library used for building user interfaces (UIs) and single-page applications. Developed by Facebook, React allows developers to build reusable UI components that can be easily managed and manipulated, providing a faster and more efficient way to build interactive UIs. React uses a virtual DOM (Document Object Model) and a declarative syntax to allow developers to describe how the UI should look at any given time, and then React updates the actual DOM only with the necessary changes, improving performance and reducing load times. It also offers a range of powerful features such as state management, event handling, and server-side rendering, making it a popular choice for building complex and scalable web applications.

- Explain the concept of virtual DOM and how it contributes to React's performance.

      A virtuális DOM (Virtual DOM) a React-ben használt technológia, amely lehetővé teszi a gyors és hatékony UI frissítést. A virtuális DOM egy JavaScript objektum, amely a valódi DOM (Document Object Model) memóriában tárolt másolata. Amikor egy állapotváltozás történik a React alkalmazásban, a valódi DOM helyett először a virtuális DOM frissül. A React ezt a frissített virtuális DOM-ot összehasonlítja az előző verzióval, és csak a szükséges változtatásokat alkalmazza a valódi DOM-ra. Ennek eredményeként csökkenthetők a DOM műveletek, amelyek általában lassúak, és javítható a teljesítmény, mivel a React csak azokat az elemeket módosítja, amelyek valóban változtak.

      The Virtual DOM is a technology used in React that allows for fast and efficient UI updates. The virtual DOM is a JavaScript object that is a copy of the real DOM (Document Object Model) stored in memory. When a state change occurs in a React application, the virtual DOM is updated first, instead of the real DOM. React then compares the updated virtual DOM with the previous version and only applies the necessary changes to the real DOM. As a result, DOM operations, which are generally slow, can be minimized, improving performance, since React only modifies the elements that have actually changed.


- Explain the component-based architecture in React.js. How do components work, and how can they be composed to build complex user interfaces?

      A React.js komponens-alapú architektúrája azt jelenti, hogy az alkalmazások felhasználói felületei kisebb, újrahasználható és elkülönített egységekre, azaz komponensekre vannak bontva. Minden egyes komponens egy önálló, jól meghatározott része az alkalmazásnak, amely saját logikával, állapottal (state) és megjelenítéssel rendelkezik. Egy komponens lehet funkcionális vagy osztályalapú, és képes más komponenseket tartalmazni vagy "összeállítani" a felhasználói felület létrehozásához.
      A komponensek úgy működnek, hogy bemenetekként (props) adatokat kapnak, majd egy kimenetet (renderelést) generálnak. A React a komponensek segítségével felépíti a teljes felhasználói felületet, és mivel a komponensek újrahasználhatóak, a kód karbantartása és tesztelése is egyszerűbbé válik.
      A komplex felhasználói felületek úgy építhetők fel, hogy kisebb komponenseket hozunk létre, amelyek más komponenseket tartalmaznak. Ezeket a komponenseket hierarchikusan rendezhetjük el, ahol egy szülőkomponens tartalmazza az alkomponenseket, és az adatok vagy események áramlása a komponensek között történik.

      React.js's component-based architecture means that the user interfaces of applications are broken down into smaller, reusable, and self-contained units called components. Each component is an independent, well-defined part of the application that has its own logic, state, and rendering. A component can be functional or class-based, and it can contain or "compose" other components to create the user interface.
      Components work by receiving data as inputs (props) and then generating an output (rendering). Using components, React builds the entire user interface, and since components are reusable, maintaining and testing the code becomes easier.
      Complex user interfaces are built by creating smaller components that contain other components. These components can be arranged hierarchically, where a parent component contains the child components, and data or events flow between the components.

- What is the significance of JSX in React.js? Explain how JSX combines HTML-like syntax with JavaScript code and how it is transpiled into regular JavaScript during the build process.

      A JSX (JavaScript XML) a JavaScript szintaxis kiterjesztése, amely lehetővé teszi a fejlesztők számára, hogy HTML-szerű szintaxist használjanak JavaScript kódon belül. A JSX kulcsfontosságú jellemzője a React.js könyvtárnak, és megkönnyíti a webalkalmazások felhasználói felületének (UI) létrehozását és manipulálását.
      A JSX segítségével a fejlesztők HTML-szerű tageket írhatnak, és ezeket a komponenseik UI struktúrájának meghatározására használhatják. Ez segít jobban vizualizálni a komponens hierarchiát, és jobban megérteni, hogyan illeszkednek a különböző UI részek egymáshoz.

      JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like syntax within their JavaScript code. It is a key feature of the React.js library and makes it easier to create and manipulate the user interface (UI) of web applications.
      With JSX, developers can write HTML-like tags and use them to describe the structure of their UI components. This helps to better visualize the component hierarchy and understand how the different parts of the UI fit together.


- What are props in React and how are they used to pass data between components? Explain the concept of props and how they facilitate parent-child component communication.

    A props (röviden "properties") a React egyik alapvető fogalma, amely lehetővé teszi az adatok átvitelét egyik komponensből a másikba, különösen a szülő és gyerek komponensek között. A props segítségével a komponensek dinamikusak lesznek, mivel lehetőséget ad arra, hogy külső adatokat kapjanak, és az alapján jelenítsenek meg eltérő tartalmat.

  Mi a props?
      A props olyan csak olvasható értékek, amelyeket a szülő komponens ad át a gyerek komponensnek. A props segítségével egy szülő komponens adatokat adhat át a gyerek komponensnek, amely ezeket az adatokat felhasználhatja a rendereléshez vagy eseménykezeléshez. A props lehet bármilyen JavaScript típus: stringek, számok, objektumok, tömbök, függvények, stb. A props hasonlít a függvényparaméterekhez, de itt az adatokat React komponensek között továbbítjuk.

  Hogyan működnek a props-ok? Szülő-gyerek kommunikáció
  A props-ok lehetővé teszik a kommunikációt a komponensek között. Egy tipikus React alkalmazásban:
    A szülő komponens átad adatokat a gyerek komponensnek props-on keresztül.
    A gyerek komponens ezeket az adatokat használja fel a rendereléshez vagy más műveletekhez.
    A szülő által átadott adatokat a gyerek komponens a props objektum segítségével éri el.


  In React, props (short for "properties") are a fundamental concept used to pass data from one component to another, especially from parent to child components. Props allow components to be dynamic by enabling them to receive external data and render different content based on that data.

    What are Props?
    Props are read-only values that are passed from a parent component to a child component. They allow you to pass data and event handlers down the component tree. Props can be any JavaScript data type: strings, numbers, objects, arrays, functions, etc. They are similar to function arguments but are used to pass data into React components.

    How Props Work: Parent-Child Communication
    Props enable communication between components. In a typical React app:

    A parent component can pass data down to its child components via props.
    The child component can then use these props to render dynamic content or trigger actions.
    Props are passed down from the parent to the child when the child component is invoked. Once the props are passed, the child component can access them through its props object.

    Key Points about Props:
        Read-only: Props are immutable, meaning a child component cannot modify the props it receives. If a child needs to update data, it should notify the parent component (typically using callbacks passed as props).

        Dynamic Data: Props allow components to be reusable by passing dynamic data. A child component can display different content based on different prop values passed to it.

        Unidirectional Flow: Data flows one-way in React, from parent to child through props. This ensures predictability and makes the app easier to understand and debug.

    Destructuring Props: 
        In modern JavaScript, props can be destructured directly in the function parameters for cleaner and more concise code.
    Passing Functions as Props:
        Props can also include functions, which allows child components to communicate back with the parent. This is often done with event handlers.

    Conclusion:
    Props are essential in React for:
    Passing data between components.
    Communicating from parent to child components.
    Making components dynamic and reusable by allowing external data to control their behavior.
    Understanding props helps you build complex UIs where different components interact and display data.






- How can you access and utilize props within a functional component in React? Explain how to extract and use props using the destructuring syntax.
  A React-ben a props (rövidítve "properties") az adatok átadására szolgálnak a szülő komponenstől a gyerek komponens felé. A props-ot a funkcionális komponensekben a props objektumon keresztül érhetjük el.

  1. Props elérése a props objektum használatával:
  A funkcionális komponensben az átadott props-okat a props objektum segítségével érhetjük el, amely tartalmazza az összes átadott adatot.

  function MyComponent(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    );
  }
  Itt a title és description a MyComponent komponenshez átadott props-ok.

  2. Props desktrukturálása:
  A props-ok elérésére egy tisztább és rövidebb mód a destrukturálás használata, amely lehetővé teszi, hogy az objektumból közvetlenül kinyerjük az értékeket és változókba rendeljük őket.


  function MyComponent({ title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
  Ebben a példában a title és description közvetlenül a props objektumból kerül kiemelésre. A { title, description } destrukturálás ugyanazt jelenti, mint props.title és props.description, de sokkal tisztább és kompaktabb módon.

  Összegzés:
  Props segítségével adhatunk át adatokat a szülőtől a gyerek komponensnek.
  A props-okat elérhetjük a props objektumon keresztül vagy destrukturálással.
  A destrukturálás leegyszerűsíti és tisztábbá teszi a kódot.



  In React, props (short for "properties") are used to pass data from a parent component to a child component. To access and utilize props within a functional component, you can use the props object that is automatically passed to the component.

    1. Accessing props using props object:
    In a functional component, you can access the props passed to it by referencing props, which is an object containing all the properties passed to the component.

    function MyComponent(props) {
      return (
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      );
    }
    Here, title and description are props passed to the MyComponent component.

    2. Destructuring props:
    A more concise and cleaner way to access props is by destructuring them directly in the function's parameter list. Destructuring allows you to extract values from an object and assign them to variables in a more readable and compact manner.

    function MyComponent({ title, description }) {
      return (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      );
    }
In this example, we directly extract title and description from the props object. The destructuring syntax { title, description } does the same thing as props.title and props.description, but in a cleaner and more concise way.

  Summary:
  Props are used to pass data from parent to child components.
  You can access props via the props object or by using destructuring.
  Destructuring simplifies the code and makes it easier to read.




- How can you pass callback functions as props in React? Provide an example of how to pass a function from a parent component to a child component, enabling the child to communicate with the parent.

  React-ben a szülő komponens callback függvényeket adhat át prop-ként a gyerek komponensnek. Ez lehetővé teszi, hogy a gyerek komponens kommunikáljon a szülővel, például egy akció kiváltásával vagy a szülő komponens állapotának frissítésével.

  Callback függvény átadása a szülőtől a gyerekhez:
  Definiáljuk a függvényt a szülő komponensben.
  Átadjuk a függvényt prop-ként a gyerek komponensnek.
  A gyerek komponens meghívja a függvényt.

    Szülő komponens:

        import React, { useState } from 'react';
        import ChildComponent from './ChildComponent';

        function ParentComponent() {
          const [message, setMessage] = useState('Hello from Parent!');

          // Callback függvény az üzenet frissítéséhez
          const handleMessageUpdate = (newMessage) => {
            setMessage(newMessage);
          };

          return (
            <div>
              <h1>{message}</h1>
              <ChildComponent updateMessage={handleMessageUpdate} />
            </div>
          );
        }

        export default ParentComponent;
  
    Gyerek komponens:

    import React from 'react';

    function ChildComponent({ updateMessage }) {
      const changeMessage = () => {
        // A prop-ként átadott függvény meghívása a szülővel való kommunikációhoz
        updateMessage('Hello from Child!');
      };

      return (
        <div>
          <button onClick={changeMessage}>Update Parent Message</button>
        </div>
      );
    }

    export default ChildComponent;

  Magyarázat:
    A ParentComponent komponensben definiálunk egy handleMessageUpdate nevű függvényt, amely frissíti a message állapotot.
    Ezt a függvényt átadjuk a ChildComponent komponensnek updateMessage néven.
    A ChildComponent komponensben a updateMessage függvényt hívjuk meg, amikor a gombra kattintunk, hogy frissítsük a szülő állapotát és adatokat küldjünk vissza a szülőnek.
    Összegzés:
    A szülő komponens függvényt ad át prop-ként a gyerek komponensnek.
    A gyerek komponens meghívhatja ezt a függvényt, hogy kommunikáljon a szülővel és frissítse annak állapotát.


  In React, you can pass callback functions as props from a parent component to a child component. This allows the child component to communicate with the parent, for example, by triggering some actions or updating the parent component's state.

    How to pass a callback function from parent to child:
    Define the function in the parent component.
    Pass the function as a prop to the child component.
    Call the function in the child component.

    summary:
    The parent passes a function as a prop to the child.
    The child can call that function to communicate with and update the parent’s state.

    

- Explain the concept of spreading props in React. How can the spread operator be used to pass multiple props from a parent component to a child component in a concise manner?

    A spread operator (...) segítségével egyszerre több props-ot is átadhatunk egy komponensnek rövidebb és tisztább módon azaz a van egy objektumod, amiben több adat van (pl. name, age, city), akkor nem kell minden egyes értéket külön-külön átadni, hanem a spread operátorral egyszerűen „szétterítheted” az összeset.

      const user = {
        name: "Anna",
        age: 28,
        city: "Budapest"
      };

      <Profile name={user.name} age={user.age} city={user.city} /> ezzel egyenlő ez <Profile {...user} />
      Ez ugyanazt eredményezi, mintha a name, age, city külön-külön prop-ként lettek volna megadva.

      In React, the spread operator (...) is used to pass multiple props from a parent component to a child component in a concise and readable way.
      If you have an object with multiple values (like name, age, city), instead of passing each one individually, you can spread the object into props using ....



- Explain the concept of default props (with ES6 JS syntax) in React. How can you define default values for props in a component to handle cases where the prop value is not explicitly passed?

    A default props (alapértelmezett props) azt jelenti, hogy egy komponens kap egy alapértelmezett értéket egy prop-hoz, ha azt nem adjuk meg a szülő komponensből.

    Ez segít:
    elkerülni, hogy undefined hibák legyenek
    a komponens stabil és kiszámítható marad
    nem kell mindig minden értéket külön átadni

    Hogyan adunk meg alapértelmezett prop-ot ES6 szintaxissal?
    React függvénykomponensnél az ES6 destruktúrálásnál közvetlenül a paraméternél megadhatsz alapértelmezést:

          function Welcome({ name = "Vendég" }) {
              return <h1>Szia, {name}!</h1>;
            }
    Mit jelent ez?
    ha ezt írod: <Welcome name="Anna" /> → az jelenik meg: Szia, Anna!

    ha ezt írod: <Welcome /> → nincs name → megjelenik: Szia, Vendég!
    (mert a name értéke alapból "Vendég")

    Összefoglalás
          A default props segít, ha a szülő nem ad meg minden adatot

    Függvénykomponensnél az ajánlott szintaxis:

          function Komponens({ prop = alapérték }) { ... }
    A React csak akkor használja a default értéket, ha nem kaptunk értéket hozzá

  Default props are fallback values that a component will use when a prop is not provided by the parent.

      This helps:
      avoid undefined errors
      keep components predictable
      set sensible defaults without requiring the parent to always pass every value

      React uses the default only when the prop is not passed


- Explain the immutability principle when working with props and states in React. Why is it important to avoid directly modifying prop values within a component, and what are some best practices for maintaining immutability?

    Az immutabilitás azt jelenti, hogy egy értéket nem módosítunk közvetlenül, hanem egy új példányt hozunk létre megváltoztatott értékekkel.

  Miért nem szabad props-ot közvetlenül módosítani?
    A props a szülő komponensből érkezik, tehát az a komponens felelős az értékének megadásáért.
    Ha egy gyermek komponens megpróbálja megváltoztatni a props-ot, az ellenkezik a React működési elvével.
    Ez hibákhoz vezethet, mert a React nem fogja tudni követni, hogy mi változott.

    React-ben a props csak olvasható!

  Miért fontos az immutabilitás a state-nél is?
    Ha egy state értéket közvetlenül módosítunk, a React nem fogja érzékelni a változást → nem történik újrarenderelés!
    Ehelyett mindig a setState-et (pl. setCount) kell használni, ami új objektumot vagy értéket hoz létre.

    Jó gyakorlatok:
    Soha ne módosítsd közvetlenül a props-ot vagy a state-et

    Tömb módosításnál használj spread operátort vagy függvényeket:
    setList([...list, newItem]); // új tömb

    Objektum módosításnál szintén új példány:
    setUser({ ...user, name: "Anna" });


    What is immutability?
      Immutability means that you do not change an existing value directly — instead, you create a new version of it with the updated data.

        Why shouldn’t you modify props directly?
        Props come from the parent component and are read-only.

        If you try to modify props in a child component, it breaks React’s one-way data flow and can cause unexpected behavior.

      React will not detect changes if props are mutated directly.

       In React, props are read-only!

    Why is immutability important with state?
    If you change the state directly (e.g. state.count++), React won’t know something changed, and it won’t re-render.

    You should always use setState functions, and create a new value or object.



- How does React.js handle state management? Explain the concept of state and how it differs from props.

  A state (állapot) a React-ben egy komponens saját adatait jelenti, amit a komponens maga kezel, és amit meg tud változtatni.

  A React automatikusan újrarendereli a komponenst, ha a state értéke megváltozik – ez a React egyik legfontosabb működési elve.

  A state jellemzői:
      A komponens sajátja
      Módosítható (useState, setState)
      Dinamikus, változhat a felhasználói interakciók során
      Újrarendereléshez vezet

  A props jellemzői:
      Kívülről, a szülő komponensből érkezik
      Nem módosítható a gyermek komponensben
      Csak olvasható adat, amit "átadunk" a komponensnek
      A komponens viselkedését testreszabja


  In React, state refers to data that is local to a component and can be changed by the component itself.

      React automatically re-renders the component whenever its state changes — this is a core principle of how React works.

    Key features of state:
      Belongs to the component
      Can be changed with useState or setState
      Used for dynamic, interactive behavior
      Triggers a re-render when updated

    Key features of props:
      Passed from a parent component
      Read-only inside the child component
      Cannot be modified by the receiver
      Used to customize and configure components





- What are React hooks? Explain the purpose and benefits of hooks like useState, and useEffect in React.js.

      A React hook-ok olyan beépített függvények, amiket funkcionális komponensekben használunk, hogy olyan képességeket adjunk nekik, amit korábban csak osztálykomponensek tudtak.

    A két legismertebb hook a:

        useState
              Lehetővé teszi, hogy egy komponens saját állapotot (state) tároljon.
              A React újrarendereli a komponenst, ha az állapot megváltozik.
              Például egy számláló, egy űrlapmező tartalma stb.

        useEffect
            Akkor használjuk, ha a komponensben valamilyen mellékhatást (side effect) akarunk végrehajtani.
            Pl.: adat lekérése API-ból, időzítő indítása, console.log, DOM manipuláció.
            Fut a komponens megjelenésekor, frissítésekor vagy eltűnésekor – a dependency tömb alapján.

    Hook-ok előnyei:
          Tiszta, egyszerű kód funkcionális komponensekben
          Nem kell osztályokat írni
          Könnyebb újrahasznosítható logikát készíteni


    What are React hooks? Explain the purpose and benefits of hooks like useState and useEffect.
        React hooks are built-in functions that allow functional components to use features like state and lifecycle methods, which were previously available only in class components.

        Two of the most common hooks are:

        useState
            Allows a component to store internal state
            Triggers a re-render when the state changes
            Used for things like counters, form inputs, toggles, etc.

        useEffect
            Used to handle side effects in a component
            Example side effects: fetching data, setting up timers, logging, DOM updates
            Runs when the component mounts, updates, or unmounts — based on the dependency array

        Benefits of hooks:
            Cleaner and simpler code with functional components
            No need for class components
            Encourages reusable and modular logic


- Explain the concept of virtual DOM reconciliation in React.js. How does React efficiently update and render components by performing minimal DOM manipulations?

    A React Virtual DOM (virtuális DOM) egy memóriában létező, gyors másolata a böngésző valós DOM-jának.

    Hogyan működik?
        Amikor az alkalmazás állapota (state, props) megváltozik, a React nem azonnal a valódi DOM-ot módosítja.
        Először létrehoz egy új Virtual DOM fát, amely tartalmazza az új állapot szerinti nézetet.
        Ezután a React összehasonlítja (reconciliation) az új Virtual DOM-ot a korábbi verzióval.
        Csak azokat a változtatásokat hajtja végre a valós DOM-on, amik valóban megváltoztak → minimális DOM-manipuláció → gyorsabb működés.

    Miért jó ez?
        A valós DOM lassú, a Virtual DOM gyors
        A React így hatékonyabb, mint a hagyományos DOM-kezelés
        Csak a szükséges elemek frissülnek → jobb teljesítmény



  The React Virtual DOM is a lightweight in-memory copy of the real browser DOM.

    How does it work?
        When state or props change, React does not update the real DOM immediately.
        Instead, it creates a new Virtual DOM tree representing the updated UI.
        React then compares the new Virtual DOM to the previous one (this is called reconciliation).
        React calculates the minimal set of changes needed and applies them only to the affected parts of the real DOM.

    Why is this efficient?
        The real DOM is slow to update directly
        The Virtual DOM is fast and optimized
        React performs minimal DOM updates, which improves performance and responsiveness




- Explain how to manage complex state objects with useState. Explain techniques like object spreading or merging to update specific properties within an object state.

    Ha egy useState állapot nem csak egy szám vagy szöveg, hanem egy objektum, akkor nem lehet csak egy tulajdonságot frissíteni anélkül, hogy a többinek baja lenne. Ilyenkor a megoldás: objektum szétterítés (...) vagy összeolvasztás.

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
        setUser(prev => ({ ...prev, age: prev.age + 1 }));



    When using useState with an object, you can’t just update one property without replacing the whole object. So, you need to use object spreading or merging.

     Example – complex object:

    const [user, setUser] = useState({
      name: "Anna",
      age: 25,
      city: "Budapest"
    });

    Incorrect way to update:

    setUser({ name: "Béla" }); // this removes `age` and `city`!
    
    Correct way using object spread:
    setUser({ ...user, name: "Béla" }); // keeps age and city intact
    🔸 The ...user spreads the existing properties, and name overwrites the old value.

    Bonus tip:
    If the update depends on the previous state, use a callback:

    setUser(prev => ({ ...prev, age: prev.age + 1 }));




- Why is it important to provide a new array as an argument to the state setter function when adding an item to an existing array?

      Rövid válasz:
        Mert a React csak akkor észleli, hogy az állapot megváltozott, ha az új érték egy teljesen új tömb (vagy objektum).

      Ha csak módosítod a meglévő tömböt (push, splice stb.):
        A referencia (memóriahely) nem változik
        A React azt hiszi: „semmi sem változott” → nem frissíti az UI-t

      Ezért mindig új tömböt kell létrehoznod, pl.:
      setList([...list, newItem]); // új tömb, új memóriahely

      Hibás példa:

      list.push(newItem);
      setList(list); //  nem fog frissülni megfelelően!

      Helyes példa:
      setList([...list, newItem]); // új tömb jön létre, React érzékeli
      Ez a megközelítés megtartja az immutabilitást – a React egyik alapelve.


      Short answer:
        Because React only detects changes when the reference of the state value is new (i.e., a brand new array or object).

      If you just modify the existing array (e.g. with push or splice):
          The array reference remains the same
          React thinks: "nothing has changed" → no re-render happens

      That's why you must always create a new array, like this:
        setList([...list, newItem]); //  creates a new array

       Incorrect:
      list.push(newItem);
      setList(list); //  same reference, React may not re-render

      Correct:

      setList([...list, newItem]); //  new reference, triggers re-render
      This follows the principle of immutability, which is essential in React.





- How does conditional rendering work in React? Explain the different techniques and approaches available to conditionally render components or content based on certain conditions or state values. How can it be used to control the visibility or behavior of components based on user interactions or other dynamic conditions?

      A feltételes megjelenítés azt jelenti, hogy React-ben csak akkor jelenítünk meg egy elemet vagy komponenst, ha egy adott feltétel teljesül (pl. egy state értéke vagy props alapján).

      Milyen technikák vannak?
     1. if-else (JSX-en kívül)

     2. if (isLoggedIn) {
        return <p>Üdv újra itt!</p>;
      } else {
        return <p>Kérlek, jelentkezz be!</p>;
      }

      3. Ternary operátor (? :) JSX-en belül:

      <p>{isLoggedIn ? "Üdv újra itt!" : "Kérlek, jelentkezz be!"}</p>
      
      4. Logikai ÉS (&&) – ha csak akkor kell megjeleníteni, ha igaz:

      {isLoggedIn && <p>Szia felhasználó!</p>}
      Visszatérés null-lal – ha nem akarunk semmit megjeleníteni:

      {shouldShow ? <MyComponent /> : null}


      Mire jó a feltételes megjelenítés?
          Egyes elemek csak akkor jelennek meg, ha a felhasználó be van jelentkezve
          Egy hibaüzenet csak akkor látható, ha valóban van hiba
          Egy betöltés jelző (Loading...) csak akkor látszik, amíg jönnek az adatok
          A viselkedés dinamikusan változhat gombnyomás vagy más interakció hatására


    Conditional rendering in React means that you only render elements or components if a specific condition is met, usually based on state or props.

      Common techniques:
       1. if-else (outside JSX)
       2. Ternary operator (? :) – inside JSX
       3. Logical AND (&&) – short form
       4. Returning null – render nothing

        When to use conditional rendering?
            Show content only if the user is logged in
            Display an error message if an error exists
            Show loading... text while data is being fetched
            Dynamically control what the user sees based on interaction



- What is the difference between a controlled and uncontrolled input element in React?


    Kontrollált input (controlled input):
      A mező értékét a React state-ben tároljuk
      A value és onChange prop-okat használjuk
      A React vezérli az input értékét

     Példa:
      const [name, setName] = useState("");

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    Előny:
      Teljesen irányított
      Könnyen validálható, figyelhető, formázott

    Nem kontrollált input (uncontrolled input):
        Az input saját maga kezeli az értékét (DOM vezérli)
        React nem tárolja külön state-ben
        Hozzáférés pl. ref segítségével történik

        Példa:
        const nameRef = useRef();
    <input type="text" ref={nameRef} />
    <button onClick={() => alert(nameRef.current.value)}>OK</button>

    Előny:
        Gyors, egyszerű
        Kevesebb kód
        Kevésbé ajánlott, ha sok mező vagy validáció kell

      Összefoglalás:
        Kontrollált = React kezeli az input értékét (useState)
        Nem kontrollált = böngésző (DOM) kezeli, React csak figyeli



      Controlled input:
      The input’s value is stored in React state
      Uses value and onChange
      React controls the input

      Example:
      const [name, setName] = useState("");

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Benefits:

      Fully controlled
      Easy to validate and manipulate

      Uncontrolled input:
      The input manages its own value
      React doesn't store or track the value
      Access via ref (reference to the DOM)

      Example:
      const nameRef = useRef();

      <input type="text" ref={nameRef} />

      <button onClick={() => alert(nameRef.current.value)}>OK</button>
      Benefits:

      Quick and minimal setup
      Less code
      Less flexible for validation or logic

    Summary:
      Controlled = React handles the input via useState
      Uncontrolled = DOM handles the input, React just reads from it



- How can you get the current input values from a form that contains uncontrolled input elements?

    Ha az űrlap nem kontrollált mezőket használ (vagyis nem useState-tel követjük az értékeket), akkor az aktuális input értékeket a React useRef hook segítségével tudjuk lekérni.

    Lépések:
      Hozz létre egy ref-et minden inputhoz a useRef()-tel
      Állítsd be az input mezőre a ref={...} attribútumot
      Az űrlap elküldésekor (onSubmit) olvasd ki az értéket:
      ref.current.value

    🔹 Példa:
    import { useRef } from 'react';

    function MyForm() {
      const nameRef = useRef();
      const emailRef = useRef();

      function handleSubmit(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        console.log("Név:", name, "Email:", email);
      }

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Név" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <button type="submit">Küldés</button>
        </form>
      );
    }

  When working with uncontrolled input elements in a form (i.e., not using useState), you can access their current values using React’s useRef hook.

    Steps:
      Create a ref for each input using useRef()
      Attach the ref to the input with ref={...}
      Read the value with ref.current.value when the form is submitted   


- How can you connect a label element to an input element in React?

  React-ben úgy kapcsolsz össze egy label és egy input elemet, hogy:

    Az input kap egy id-t
    A label pedig a htmlFor attribútummal utal erre az id-re

    Figyelem: HTML-ben for lenne, de React-ben htmlFor a neve!

      <label htmlFor="username">Felhasználónév:</label>
      <input id="username" type="text" />

    ha rákattintasz a label szövegre, az input automatikusan fókuszt kap
    ez hozzáférhetőség (accessibility) szempontból is nagyon fontos

  In React, you connect a label to an input by:

    Giving the input an id
    Setting the label’s htmlFor attribute to match that id

    In HTML it’s for, but in React it must be htmlFor (camelCase!)


    <label htmlFor="username">Username:</label>
    <input id="username" type="text" />

    This ensures:
    Clicking the label focuses the input field
    It's great for accessibility and usability   



- How can you create a select input element in React? How does it differ from the html's select tag? Can you show an example of a controlled and an uncontrolled select element with setting a default value?

    Hogyan hozhatsz létre <select> elemet React-ben?
    Hasonlóság:
    A React select eleme majdnem úgy működik, mint a sima HTML-ben.

    Különbség:
    React-ben a kiválasztott értéket value-ként kezeljük → így lesz kontrollált mező

    A defaultValue csak a nem kontrollált változatban működik

    Kontrollált <select> (React vezérli)
    A value egy useState állapotban van, és az onChange esemény frissíti:
    import { useState } from 'react';

    function ControlledSelect() {
      const [selected, setSelected] = useState("dog");

      function handleChange(e) {
        setSelected(e.target.value);
      }

      return (
        <div>
          <label htmlFor="pet">Válassz állatot:</label>
          <select id="pet" value={selected} onChange={handleChange}>
            <option value="dog">Kutya</option>
            <option value="cat">Macska</option>
            <option value="bird">Madár</option>
          </select>
          <p>Kiválasztott: {selected}</p>
        </div>
      );
    }

    Nem kontrollált <select> (DOM vezérli)
    A React itt nem tartja nyilván a kiválasztott értéket, csak ref-fel olvassa ki:

    jsx
    Másolás
    Szerkesztés
    import { useRef } from 'react';

    function UncontrolledSelect() {
      const selectRef = useRef();

      function handleSubmit(e) {
        e.preventDefault();
        alert("Kiválasztott: " + selectRef.current.value);
      }

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
      );
    }


        Similar to HTML:
    React’s <select> works almost like in regular HTML.

        Differences:
    In React, you use value to control it via useState → controlled
    Use defaultValue for uncontrolled inputs



- Explain how a proxy works during React development. How can you tell the Vite dev server to proxy the requests to your backend? What kind of URLs do you have to use in the fetch in your JS code, if you want to use the proxy?

      A proxy egy olyan köztes „kapcsolat”, ami lehetővé teszi, hogy a React fejlesztőszerver (pl. Vite) átirányítsa a kéréseket a backend szerverre (pl. API, Firebase emulator), anélkül hogy CORS hibát kapnál.

      Miért kell proxy?
        A frontend (React app) pl. a localhost:5173-on fut
        A backend pl. a localhost:3000-on
        Ha a React app közvetlenül hívná a backendet → CORS hibát kapnál
        A proxy megoldja, hogy a frontend úgy érezze, mintha minden egy szerveren futna

      Hogyan állítasz be proxy-t Vite-ben?
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

      Milyen URL-t használj a fetch hívásban?
        Mivel a proxy átirányítja a kérést, csak a relatív útvonalat használod, nem kell teljes URL-t írni.

      fetch('/api/employees') // ez proxy-n keresztül megy át
      NE írj teljes http://localhost:3000/... URL-t, mert az megkerülné a proxy-t, és CORS hibát okozhat.

      Összefoglalás magyarul:
        A proxy fejlesztés közben átirányítja a kéréseket, hogy ne legyen CORS probléma
        A Vite-ben a server.proxy beállítással konfigurálod
        A fetch URL-ben csak relatív útvonalat használj (pl. /api/...), nem teljes URL-t

  A proxy allows the React dev server (like Vite) to forward requests to a backend (e.g. an API), so you can avoid CORS issues during development.

    Why do you need a proxy?
    Your React frontend runs at localhost:5173
    Your backend runs at localhost:3000
    If you make requests directly to localhost:3000, you'll get CORS errors
    A proxy tricks the browser into thinking everything comes from the same origin


- What is the difference between statements and expressions in Javascript? Why is it important when working with JSX?

    Expression (kifejezés)
        Egy olyan kód, ami visszaad egy értéket.

    Példák:

        2 + 2          // → 4
        "Hello"        // → "Hello"
        x > 5          // → true vagy false
        name && "Üdv"  // → "Üdv" vagy false

    jsx: 
    <p>{2 + 2}</p>
    <p>{user.name}</p>

    Statement (utasítás)
      Olyan kódrészlet, ami valamit végrehajt, de nem ad vissza közvetlen értéket.

    Példák:

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
  Ezért például if, for, while nem írható JSX-be – de ternary (? :) vagy logikai && igen!


  Expression: An expression is a piece of code that returns a value.
  Statement: A statement is code that performs an action, but does not directly return a value.

   Why is this important in JSX: JSX only allows expressions inside { ... } — statements are not allowed.
    This affects how you write conditions, loops, etc. in React components.



## Testing Basics

- What is a test case?

  A teszteset egy meghatározott forgatókönyv, amely egy adott kódrészlet működését ellenőrzi. Tartalmazza:

    Bemeneti értékeket
    Elvárt kimenetet
    Tesztlépéseket

  Példa:
  Ha egy sum(a, b) függvényt tesztelünk:
  Bemenet: sum(2, 3)
  Elvárt kimenet: 5

    A test case is a specific scenario used to verify that a piece of code behaves as expected. It consists of:

    Input values
    Expected output
    Test steps




- What are the advantages of writing unit tests?

      Korán felismeri a hibákat, csökkentve a hibakeresési időt.
      Biztosítja a kód helyességét, megakadályozva a visszaeséseket (regression).
      Megkönnyíti a refaktorálást, mert a tesztek ellenőrzik a működést.
      Dokumentációként is szolgál, megmutatva, hogyan kell a függvényeknek viselkedniük.

      Catches bugs early, reducing debugging time.
      Ensures code correctness, preventing regressions.
      Makes refactoring safer, since tests verify expected behavior.
      Improves documentation, showing how functions should work.

- What is an assertion? Give some examples.
  Az assertion (állítás) egy olyan utasítás, amely ellenőrzi, hogy egy adott feltétel igaz-e. Ha hamis, a teszt sikertelen.

      import { expect, test } from "vitest";

      test("Az összeadás helyesen működik", () => {
        expect(2 + 2).toBe(4);  // ✅ Sikeres
        expect(2 + 2).toBe(5);  // ❌ Sikertelen
      });

  An assertion is a statement that checks if a test condition is true. If false, the test fails.
      import { expect, test } from "vitest";

      test("Addition works correctly", () => {
        expect(2 + 2).toBe(4);  // ✅ Passes
        expect(2 + 2).toBe(5);  // ❌ Fails
      });    

- What is the arrange/act/assert pattern?

  Az Arrange-Act-Assert (AAA) minta egy módszer a tesztek strukturálására:
    Arrange (Előkészítés) – Beállítjuk az adatokat és a környezetet.
    Act (Végrehajtás) – Meghívjuk a tesztelt függvényt.
    Assert (Ellenőrzés) – Megnézzük, hogy az eredmény helyes-e.

      test("A sum függvény helyesen működik", () => {
        // Előkészítés
        const a = 2, b = 3;

        // Végrehajtás
        const result = sum(a, b);

        // Ellenőrzés
        expect(result).toBe(5);
      });

  The Arrange-Act-Assert (AAA) pattern is a structured way to write tests:
      Arrange – Set up test data and environment.
      Act – Execute the function being tested.
      Assert – Verify the result.    

            test("sum function returns correct result", () => {
        // Arrange
        const a = 2, b = 3;

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(5);
      });


- What is code coverage? Why is it used?

  A code coverage (kódfedettség) azt mutatja meg, hogy a tesztek a kód hány százalékát futtatják le.
    Megmutatja, hogy van-e teszteletlen rész.
    Segít teljesebb teszteket írni.
    Százalékos értékként mérhető (pl. 80% fedettség).

  Code coverage measures how much of the code is executed during testing.
    Helps identify untested parts.
    Encourages writing more complete tests.
    Measured in percentages (e.g., 80% coverage).



- How do you test asynchronous code with Vitest?

  Az async/await használatával lehet aszinkron kódot tesztelni./Use async/await inside the test.
    import { test, expect } from "vitest";

        async function fetchData() {
          return new Promise(resolve => setTimeout(() => resolve("Hello"), 100));
        }

        test("fetchData 'Hello'-t ad vissza", async () => {
          const data = await fetchData();
          expect(data).toBe("Hello");
        });



- What is `setup` & `teardown` in Vitest?

    Setup (Előkészítés) – Minden teszt előtt lefut (pl. adatbázis inicializálás).
    Teardown (Tisztítás) – Minden teszt után lefut (pl. kapcsolat bezárása).

          import { beforeEach, afterEach } from "vitest";

          beforeEach(() => {
            console.log("Teszteset indul...");
          });

          afterEach(() => {
            console.log("Teszteset véget ért.");
          });

    Setup – Runs before each test (e.g., initializing a database).
    Teardown – Runs after each test (e.g., closing connections).
        import { beforeEach, afterEach } from "vitest";

            beforeEach(() => {
              console.log("Test starting...");
            });

            afterEach(() => {
              console.log("Test finished.");
            });


- Give an example when you would use in Vitest's the `toBe` & `toEqual` assertions.

  toBe – Primitív értékek összehasonlítása (számok, stringek).
  toEqual – Objektumok és tömbök összehasonlítása.

      test("Primitív értékek összehasonlítása", () => {
      expect(10).toBe(10); // ✅
    });

    test("Objektumok összehasonlítása", () => {
      expect({ name: "Alice" }).toEqual({ name: "Alice" }); // ✅
    });

  toBe – Compares primitives (numbers, strings).
  toEqual – Compares objects and arrays.  

      test("Primitive comparison", () => {
      expect(10).toBe(10); // ✅
    });

      test("Object comparison", () => {
        expect({ name: "Alice" }).toEqual({ name: "Alice" }); // ✅
      });

## Firebase Realtime Database

- What is Firebase Realtime Database? Explain the key features and advantages of the Realtime Database as a NoSQL database solution.

    A Firebase Realtime Database egy felhőalapú NoSQL adatbázis, amely valós időben tárolja és szinkronizálja az adatokat az összes csatlakoztatott kliens között. Olyan alkalmazásokhoz ideális, amelyek élő frissítéseket igényelnek, például chat alkalmazások, együttműködési eszközök vagy IoT rendszerek.

    Főbb jellemzők és előnyök:
      Valós idejű szinkronizáció: Az adatbázisban történő változások azonnal megjelennek az összes kliensen.
      Offline támogatás: Az adatokat helyileg gyorsítótárazza, így az offline módosítások később automatikusan szinkronizálódnak.
      NoSQL szerkezet: Az adatok egy rugalmas JSON fa formátumban tárolódnak, nem pedig táblázatokban.
      Biztonsági szabályok: JSON alapú szabályokkal vezérelhetjük az adatokhoz való hozzáférést.
      Skálázhatóság: Nagyszámú egyidejű kapcsolatot képes kezelni.
      Egyszerű integráció: Könnyen együttműködik a Firebase Authentication-nel és más Firebase szolgáltatásokkal.


    Firebase Realtime Database is a cloud-hosted NoSQL database that stores and synchronizes data in real-time across connected clients. It is designed for building applications that require live updates, such as chat apps, collaborative tools, or IoT applications.

    Key features and advantages:
          Real-time synchronization: Changes in the database are instantly reflected on all connected clients.
          Offline support: The database caches data locally, allowing users to read and write even when offline. Changes sync when the connection is restored.
          NoSQL structure: Data is stored in a flexible JSON tree format instead of relational tables.
          Security Rules: Firebase allows you to define access rules using JSON-based security rules.
          Scalability: It can handle a large number of concurrent connections.
          Easy integration: Works well with Firebase Authentication and other Firebase services.


- Explain the concept of storing data in a Realtime Database. How does a Realtime Database store data in a JSON tree?

    A Firebase Realtime Database egy JSON alapú dokumentumszerkezetet használ, amelyben az adatok egy fa-struktúrában tárolódnak. Minden csomópont egy kulcs-érték pár, és az alcsomópontok beágyazhatók a szülő csomópontokba.

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


    Firebase Realtime Database uses a JSON-based document structure, where data is stored in a tree-like format. Each node in the JSON tree represents a key-value pair, and child nodes can be nested within parent nodes.

        Example:

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
        This flexible structure allows hierarchical storage but requires careful structuring to avoid deeply nested data.


- How can you access the Realtime Database with a REST API? What do the typical CRUD operations look like?

    A Firebase Realtime Database REST API-t biztosít, amely lehetővé teszi az adatbázis HTTP kérésekkel történő elérését.

    Tipikus CRUD műveletek:

    Létrehozás (POST/PUT)
        async function createUser() {
          try {
            const response = await fetch("https://your-database.firebaseio.com/users/user1.json", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: "Alice", age: 25 })
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
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

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
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

          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

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

          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

          console.log("Deleted successfully");
        } catch (error) {
          console.error("Error:", error);
        }
      }
      deleteUser();


  Firebase Realtime Database provides a REST API that allows HTTP requests to read and write data.
  Typical CRUD operations:
      Create (POST/PUT)
      Read (GET)
      Update (PATCH)
      Delete (DELETE)


- How the Realtime Database Security Rules can help to define the structure of the stored data (validation) when the data can be read from or written to?

    A Firebase Realtime Database biztonsági szabályai segítenek meghatározni, ki olvashat és írhat adatokat, valamint biztosítják az adatok validálását azáltal, hogy strukturált feltételeket alkalmaznak. Ezeket a szabályokat JSON formátumban írjuk és a database különböző szintjein érvényesíthetjük.

    Biztonsági szabályok főbb jellemzői:
    Olvasási és írási engedélyek – Meghatározhatjuk, hogy ki férhet hozzá az adatokhoz (".read" és ".write").

    Adatvalidálás – Biztosítja, hogy csak megfelelő formátumú és értékű adatokat lehessen menteni (például kötelező mezők, adattípusok ellenőrzése).

    Hierarchikus struktúra – Szabályokat alkalmazhatunk a database adott útvonalaira, így részletes hozzáférés-kezelést biztosíthatunk.

    Egyedi feltételek – A szabályok ellenőrizhetik az értékeket, például hogy egy életkor szám legyen, vagy hogy egy felhasználó csak a saját adatait módosíthassa.

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

    🔹 Magyarázat:

    Csak bejelentkezett felhasználók férhetnek hozzá a saját adataikhoz.
    Az age mezőnek számnak kell lennie, és nagyobbnak kell lennie, mint 0.
    Ez megakadályozza az illetéktelen hozzáférést és biztosítja az adatok helyességét. ✅



    Firebase Realtime Database Security Rules help define who can read and write data and ensure data validation by enforcing a structured set of conditions. These rules are written in JSON format and applied at different levels of the database hierarchy.

    Key Features of Security Rules:
    Read and Write Permissions – You can define who is allowed to read (".read") or write (".write") data based on authentication (auth object).

    Data Validation – Ensures that incoming data meets certain criteria before being written to the database (e.g., required fields, data types, constraints).

    Hierarchical Structure – Rules can be applied to specific database paths, allowing granular access control.

    Custom Conditions – Rules can check values, such as ensuring an age is a number or that a user can only modify their own data.

        Example of Security Rules:
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


    🔹 Explanation:

    Only authenticated users can read and write their own data.
    The age field must be a number greater than 0.
    This prevents unauthorized access and ensures the integrity of stored data.


- Why is it a problem if the data is deeply nested? What techniques can solve this issue?

      Miért probléma a mélyen egymásba ágyazott adatszerkezet a Firebase Realtime Database-ben?
      A túlzottan mélyen ágyazott adatszerkezet több problémát okozhat:

      Teljesítményproblémák – Egy mélyen beágyazott adat lekérésekor az egész faág betöltődik, még ha csak egy kis részére van szükség.

      Bonyolult adatelérés – A mélyen ágyazott struktúrák esetén nehezebb elérni vagy frissíteni az egyes értékeket.

      Biztonsági problémák – A Firebase biztonsági szabályai csomópont szinten működnek, így nehezebb a finomhangolt hozzáférés-ellenőrzés.

      Adatduplikáció veszélye – Ha az adatok túl mélyen vannak ágyazva, az alkalmazás más részei esetleg duplikálni kényszerülnek az adatokat a könnyebb hozzáférés érdekében.

      Megoldási technikák:
      Adatszerkezet laposítása – Inkább normalizált adatmodellt használjunk mély ágyazás helyett.

      Különálló csomópontok használata – Az összetartozó adatokat külön csomópontokban tároljuk és azonosítókkal kapcsoljuk össze.

      Denormalizáció – Kis mennyiségű adatok megkettőzése több helyen a gyorsabb elérés érdekében (csak ha indokolt).

      Indexelés és lekérdezés – Firebase indexelt lekérdezései segítenek az adatok hatékony elérésében mély bejárás nélkül.

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
      💡 Megoldás: A bejegyzések külön vannak tárolva, és az userId segítségével kapcsolódnak a felhasználókhoz, így az adatok felesleges letöltése elkerülhető. ✅



    Why is deeply nested data a problem in Firebase Realtime Database?
    Deeply nested data in Firebase Realtime Database can cause several issues:

    Performance Issues – Fetching deeply nested data retrieves entire branches, even if only a small portion is needed.

    Difficult Data Access – It becomes more complex to retrieve or update specific values inside deeply nested structures.

    Security & Permission Issues – Firebase Security Rules work at the node level, making it harder to apply fine-grained access control.

    Data Duplication Risks – If data is deeply structured, different parts of the app may need to duplicate information for easier access.

    Techniques to Solve This Issue:
    Flatten Data Structure – Use a more normalized approach instead of deeply nesting data.

    Use Separate Nodes – Store related data in separate top-level nodes and use references (keys) instead of embedding data.

    Denormalization – Duplicate small amounts of necessary data in multiple locations to improve read performance while avoiding deep nesting.

    Indexing & Querying – Firebase allows indexed queries, which help access data efficiently without needing deep traversal.

    Example:
    🔴 Bad (Deeply Nested)

    {
      "users": {
        "user1": {
          "profile": {
            "name": "Alice",
            "age": 25,
            "posts": {
              "post1": { "title": "First Post", "content": "Hello World" },
              "post2": { "title": "Second Post", "content": "Another post" }
            }
          }
        }
      }
    }
    💡 Problem: Fetching a single post requires loading the entire user profile.

    ✅ Better (Flattened Structure)


    {
      "users": {
        "user1": { "name": "Alice", "age": 25 }
      },
      "posts": {
        "post1": { "userId": "user1", "title": "First Post", "content": "Hello World" },
        "post2": { "userId": "user1", "title": "Second Post", "content": "Another post" }
      }
    }
    💡 Solution: Posts are stored separately and reference the user by userId, allowing independent retrieval without loading unnecessary data.

## Firebase Authentication

- Why authentication is needed for a web application?
      Az autentikáció (azonosítás) szükséges, hogy biztosítsa a webalkalmazás biztonságát, és lehetővé tegye a felhasználók azonosítását. Az autentikáció lehetővé teszi, hogy az alkalmazás csak a megfelelő jogosultságokkal rendelkező felhasználók számára biztosítson hozzáférést bizonyos funkciókhoz, így megvédve a felhasználói adatokat és az alkalmazás érzékeny részeit.

      Authentication is necessary to ensure the security of a web application and to allow the identification of users. Authentication enables the application to provide access to certain features only to users with the appropriate permissions, thereby protecting user data and sensitive parts of the application.


- What are the key functionalities of an authentication system?
    Az autentikációs rendszer fő funkciói közé tartozik:
        Felhasználói azonosítás: Az autentikációs rendszer lehetővé teszi a felhasználók azonosítását különböző módokon (pl. e-mail, jelszó, biometrikus adatok).
        Jelszókezelés: A rendszer kezeli a jelszavakat, biztosítja azok tárolását és védelmét.
        Hozzáférési tokenek generálása: A felhasználók bejelentkezése után a rendszer hozzáférési tokeneket biztosít, amelyekkel a felhasználók jogosultságot nyerhetnek a további szolgáltatásokhoz.
        Session kezelés: Az autentikációs rendszer nyomon követi a bejelentkezett felhasználókat, és biztosítja, hogy a felhasználók a szükséges ideig hozzáférhessenek a rendszerhez.


     Key functionalities of an authentication system include:

        User Identification: The authentication system allows the identification of users through various methods (e.g., email, password, biometrics).

        Password Management: The system handles passwords, ensuring their storage and protection.

        Access Token Generation: After logging in, the system provides access tokens that allow users to access additional services.

        Session Management: The authentication system tracks logged-in users and ensures they have access to the system for the required duration.



- How does the server know that the client is successfully authenticated?

    A Firebase Authentication esetében a szerver akkor tudja, hogy a kliens sikeresen autentikált, amikor a kliens a sikeres bejelentkezés után egy hitelesítési tokent küld a szervernek. Ez a token egy JSON Web Token (JWT), amelyet a Firebase Authentication generál, és tartalmazza a felhasználó hitelesítési adatait, például a felhasználó ID-ját.

      Bejelentkezés után a kliens megkapja a hozzáférési tokent: A sikeres bejelentkezés után, például e-mail/jelszó, Google, Facebook vagy más szolgáltatóval, a Firebase létrehoz egy token-t.

      A token küldése a szervernek: Ezután a kliens a Firebase által generált token-t (például JWT-t) elküldi a szervernek, például HTTP fejlécben, mint Authorization fejlécre, így a szerver tudja, hogy a felhasználó autentikált.

      Token ellenőrzése a szerveren: A szerver a kapott token-t ellenőrzi a Firebase Authentication SDK segítségével. A token tartalmazza a felhasználó egyedi azonosítóját (UID), és a Firebase SDK képes érvényesíteni a token-t, hogy meggyőződjön arról, hogy az nem járt le, és valóban a Firebase által lett kiadva.


        In Firebase Authentication, the server knows that the client is successfully authenticated when the client sends a authentication token after a successful login. This token is a JSON Web Token (JWT) generated by Firebase Authentication, and it contains the user's authentication details, such as the user ID.

        After login, the client receives an access token: After a successful login (e.g., with email/password, Google, Facebook, etc.), Firebase generates a token.

        The token is sent to the server: The client then sends the generated token (e.g., JWT) to the server, typically in the Authorization header of an HTTP request, so the server knows the user is authenticated.

        Token verification on the server: The server verifies the received token using the Firebase Authentication SDK. The token contains the user's unique ID (UID), and the Firebase SDK can validate the token to ensure it hasn't expired and that it was indeed issued by Firebase.




- What is the difference between Authentication and Authorization?

    Autentikáció (Authentication): Az autentikáció a felhasználó azonosítását jelenti. Ez azt jelenti, hogy a rendszer megpróbálja kideríteni, hogy ki a felhasználó (pl. e-mail és jelszó párosával).
    Autorizáció (Authorization): Az autorizáció arra vonatkozik, hogy mihez férhet hozzá a felhasználó miután azonosították őt. Az autorizáció a felhasználói jogosultságok kezelésére összpontosít (pl. adminisztrátori vagy normál felhasználói jogosultságok).


    Authentication: Authentication is the process of verifying the identity of a user. It determines "who the user is" (e.g., using email and password).
    Authorization: Authorization refers to what the authenticated user is allowed to do. It deals with managing user permissions (e.g., admin or regular user rights).



- How can you initialize the Firebase Authentication SDK(=software development kit)?

    A Firebase Authentication SDK inicializálása úgy történik, hogy először importáljuk a Firebase SDK-t, majd a getAuth() függvény segítségével lekérjük az autentikációs szolgáltatást. A Firebase beállításoknak megfelelően kell az alkalmazást inicializálni, majd az autentikációs funkciókat ezen az objektumon keresztül használjuk.

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
      const auth = getAuth(app);  // Autentikációs szolgáltatás inicializálása


    The Firebase Authentication SDK is initialized by first importing the Firebase SDK and then retrieving the authentication service using the getAuth() function. The app needs to be initialized with the appropriate Firebase settings, and then authentication functions are used through this object.


- How the Firebase Realtime Database Security Rules can enforce authorization?

    A Firebase Realtime Database biztonsági szabályai lehetővé teszik a felhasználói hozzáférés korlátozását és az engedélyek meghatározását. A szabályok alapját képezhetik az autentikációs tokenek, például a felhasználó egyedi ID-ja, és így biztosítható, hogy csak a jogosult felhasználók férhessenek hozzá az adatokhoz. Az adatbázis szabályai egyszerű logikát biztosítanak, mint például a read és write műveletek engedélyezése vagy tiltása a felhasználói állapot függvényében.

      {
        "rules": {
          "users": {
            "$userId": {
              ".read": "$userId === auth.uid",  // Csak a bejelentkezett felhasználó olvashatja saját adatait
              ".write": "$userId === auth.uid"  // Csak a bejelentkezett felhasználó írhatja a saját adatait
            }
          }
        }
      }


    Firebase Realtime Database security rules allow for restricting access and defining permissions for users. These rules can be based on authentication tokens, such as the user's unique ID, ensuring that only authorized users can access data. The rules provide simple logic for allowing or denying read and write operations depending on the user's state.


- What kind of different authentication providers are supported by Firebase? Can you give some examples?

    A Firebase különböző autentikációs szolgáltatókat támogat, lehetővé téve a felhasználók azonosítását többféle módon. A támogatott autentikációs szolgáltatók a következők:

        E-mail/jelszó: Felhasználók regisztrálhatják és bejelentkezhetnek e-mail cím és jelszó segítségével.

        Google: A Google fiókkal történő bejelentkezés.

        Facebook: A Facebook fiókkal történő bejelentkezés.

        Twitter: A Twitter fiókkal történő bejelentkezés.

        GitHub: A GitHub fiókkal történő bejelentkezés.

        Anonim: Anonim módú bejelentkezés a felhasználói adatok összegyűjtése nélkül.

        Phone (SMS): A telefonos autentikáció, ahol SMS-ben érkezik egy kód a felhasználónak.


    Firebase supports various authentication providers, allowing users to authenticate in multiple ways. The supported authentication providers include:

        Email/Password: Users can register and log in with their email and password.

        Google: Log in with a Google account.

        Facebook: Log in with a Facebook account.

        Twitter: Log in with a Twitter account.

        GitHub: Log in with a GitHub account.

        Anonymous: Log in anonymously without collecting user information.

        Phone (SMS)    

## Web Applications

- Explain the concept of React Router. How does it enable client-side routing in React.js applications and facilitate the creation of multi-page-like experiences?

      A React Router egy könyvtár, amely lehetővé teszi a kliensoldali útválasztást React alkalmazásokban, így többoldalas élményt nyújt egyoldalas alkalmazás (SPA) keretein belül.

      Hogyan működik?
      A History API segítségével módosítja az URL-t, teljes oldalfrissítés nélkül.

      A <BrowserRouter>, <Routes>, és <Route> komponensek határozzák meg a nézeteket.

      A <Link> komponens helyettesíti az <a> tageket a gyors navigáció érdekében.

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
      ✅ Eredmény: Az URL változik, de nincs oldalfrissítés.

    React Router is a library for handling client-side routing in React applications. It allows developers to create multi-page-like experiences in a single-page application (SPA) by changing the URL and rendering different components without a full page reload.

    How React Router Works:
    It uses the History API to update the URL dynamically without a full reload.

    Components like <BrowserRouter>, <Routes>, and <Route> define different views based on the URL.
    The Link component replaces traditional <a> tags to enable seamless navigation.

    Example:
    import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

    function App() {
      return (
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      );
    }
    💡 Result: Clicking the links updates the URL and renders the corresponding component without refreshing the page.

- Why is it needed to `build` a React application? What does this build step do?
Why is it needed to build a React application?

    A React alkalmazás buildelésére azért van szükség, mert a fejlesztői környezetben használt kód nem optimalizált, és nem megfelelő a termelési (éles) környezetben történő futtatásra. A build lépés során a kódot minifikálják, optimalizálják, és készítenek egy verziót, amely gyorsan betöltődik, és jól működik a felhasználók számára.

    Mi történik a build lépés során?
    Minifikálás:
    A kódot összenyomják, eltávolítják a fölösleges szóközöket, kommenteket és egyéb nem szükséges karaktereket, így csökkentve a fájlméretet. Ez gyorsabb betöltést biztosít.

    Bundling:
    Az összes JavaScript fájlt egyetlen vagy néhány fájlba egyesítik, hogy csökkentsék a HTTP kérések számát, és gyorsabbá tegyék az alkalmazás betöltését.

    Transzpiláció:
    A modern JavaScript kódot (pl. ES6+) régebbi JavaScript verzióra konvertálják, hogy minden böngésző támogassa. Például, a JSX-t is sima JavaScript kóddá alakítják.

    Optimalizálás:
    Az alkalmazás más részeit (pl. képek, stílusok) is optimalizálják, hogy gyorsabb legyen a betöltés és a felhasználói élmény.

    Kész verzió:
    A buildelési folyamat végén létrejön egy "build" vagy "dist" mappa, amely tartalmazza azokat a fájlokat, amelyek éles környezetben, a felhasználóknak kiszolgálhatók. Ezek a fájlok már nem tartalmaznak fejlesztői információkat, és a legjobb teljesítményt nyújtják.

    Összegzés:
    A buildelési folyamat célja, hogy a fejlesztői környezetben használt kódot előkészítse a termelési környezetre, biztosítva a gyors betöltést, optimalizált teljesítményt és jobb felhasználói élményt.


      Before deploying a React app, we need to build it to optimize it for production.

      What the build step does:
      Minification & Optimization – Removes unused code and compresses files.

      Bundling – Merges JavaScript and CSS into fewer files.

      Transpilation – Converts modern JavaScript (ES6+) into a format browsers can understand.

      Asset Optimization – Optimizes images, fonts, and static assets.

      💡 Example:

      Running npm run build in Vite or CRA generates an optimized /dist or /build folder.

- What is the difference between local development (using a dev server, like Vite) and production deployment?

    1. Cél:
    Helyi fejlesztés: A cél a gyors fejlesztés és hibakeresés, hogy a fejlesztők könnyen tesztelhessék a változtatásaikat.

    Éles telepítés: Az alkalmazást optimális teljesítményre készítik, hogy a felhasználók számára gyors, biztonságos és megbízható legyen.

    2. Sebesség:
    Helyi fejlesztés: Lassabb, mivel nem történik optimalizálás és a kód minden változása azonnal frissül. A fejlesztői eszközök és a forró újratöltés (HMR) lassíthatják a teljesítményt.

    Éles telepítés: Gyorsabb, mivel a kód minifikálva és optimalizálva van, és a szükséges fájlok minimalizálva vannak, hogy csökkentsék a betöltési időt.

    3. Kiszolgáló típusa:
    Helyi fejlesztés: Fejlesztői szerverek, mint például Vite, Webpack Dev Server vagy Parcel futtatják az alkalmazást, és lehetővé teszik a gyors fejlesztést.

    Éles telepítés: Statikus fájlok hosztolása történik, például Firebase, Vercel, Netlify vagy egyéb hosztolási szolgáltatásokkal.

    4. Kód olvashatósága:
    Helyi fejlesztés: Az összes kód olvasható és nem optimalizált (nem minifikált). Könnyen debugolható.

    Éles telepítés: A kód minifikálva és optimalizálva van, hogy csökkentse a fájlok méretét és gyorsabb betöltést biztosítson. Ilyenkor a kód olvashatósága romlik.

    5. Hibakezelés:
    Helyi fejlesztés: Részletes hibaüzenetek jelennek meg, amelyek segítenek a hibák gyors elhárításában.

    Éles telepítés: Az alkalmazás hibakezelése egyszerűsödik, és nem tartalmazza a fejlesztés során használt részletes hibaüzeneteket, mivel a felhasználói élményre fókuszálunk.

    6. Fájlok és források:
    Helyi fejlesztés: Az összes fájl (forráskód, függőségek) elérhető és módosítható.

    Éles telepítés: Csak a szükséges fájlok kerülnek telepítésre (minifikált JS, CSS, HTML), és nem tartalmazzák a fejlesztéshez szükséges fájlokat.

    7. Közvetlen újratöltés:
    Helyi fejlesztés: Ha változtatást végzel, a böngésző azonnal frissíti az alkalmazást, így gyorsan tesztelheted a módosításokat.

    Éles telepítés: Az új verziók telepítése után a felhasználóknak várniuk kell a frissítésre, és nem történik automatikus újratöltés.

    8. Biztonság:
    Helyi fejlesztés: Nincs szükség különös biztonsági intézkedésekre, mivel a kód nyíltan elérhető és a fejlesztési környezetben fut.

    Éles telepítés: A kód minifikálása és optimalizálása segít a biztonságban, mivel a kód nehezebben olvasható és megértett, illetve az éles környezetben további biztonsági intézkedéseket is alkalmaznak.

    Összegzés:
    A helyi fejlesztés gyors iterációt és hibakeresést biztosít, míg az éles telepítés a végfelhasználók számára biztosít gyors, biztonságos és optimalizált alkalmazásélményt.


    Difference Between Local Development and Production Deployment
    Purpose:

    Local Development: Fast development & debugging
    Production Deployment: Optimized for users

    Uses Hot Reload?
      Local Development: Yes (HMR - Hot Module Replacement)
      Production Deployment: No

    Performance:
      Local Development: Slower (not optimized)
      Production Deployment: Faster (minified, optimized)

    Server Type:
      Local Development: Development server (Vite, Webpack Dev Server)
      Production Deployment: Static file hosting (Firebase, Vercel, Netlify)

    Source Code:
      Local Development: Readable and unminified
      Production Deployment: Minified and optimized

    Error Handling:
      Local Development: More detailed errors, useful for debugging
      Production Deployment: Simplified error messages for users

    File Structure:
      Local Development: All files available (source code, dependencies)
      Production Deployment: Only necessary static files (JS, CSS, HTML)

    Environment Variables:
      Local Development: Often uses local environment variables
      Production Deployment: Uses production environment variables

    Caching:
      Local Development: No caching (always loads the latest version)
      Production Deployment: Caching is enabled (faster load times)

    Live Reload:
      Local Development: Yes, changes are reflected instantly during development
      Production Deployment: No live reload, updates require deployment

    Security:
      Local Development: Less secure (easier to debug, access to source code)
      Production Deployment: More secure (minified, optimized files, restricted access)

    💡 Example:
      Local Development:
      npm run dev starts a dev server for fast local changes.

      Production Deployment:
      npm run build prepares the app for deployment, minifying and optimizing it for production use.






- How can you deploy a Firebase application?

      1. Telepítsd a Firebase CLI-t (ha még nincs telepítve)
      npm install -g firebase-tools
      Ezzel telepíted a Firebase parancssori eszközeit a számítógépedre.

      2. Jelentkezz be a Firebase-be
      firebase login
      Ez megnyit egy böngészőt, ahol be kell jelentkezned a Google-fiókoddal.

      3. Inicializáld a Firebase-t a projektedben
      Lépj be a projekted mappájába, majd futtasd ezt a parancsot:

      firebase init
      Válaszd ki a "Hosting" opciót.

      Válaszd ki a Firebase projektet, amelyhez csatlakoztatni szeretnéd.

      Állítsd be a könyvtárat (például build React esetén, dist Vite esetén).

      Ha egy Single Page Application (SPA) alkalmazást telepítesz (pl. React), válaszd az "Igen" lehetőséget.

      Dönthetsz arról, hogy beállítasz-e automatikus GitHub deployt (opcionális).

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
      Ezen a linken az alkalmazásod mostantól elérhető a felhasználók számára.



      Firebase Hosting allows you to deploy web apps with fast global CDN hosting.

      Steps to Deploy:

      Install Firebase CLI:
      npm install -g firebase-tools
      This installs the Firebase command-line tools globally on your system.

      Login to Firebase:
      firebase login
      This opens a browser window where you can authenticate with your Google account.

      Initialize Firebase in your project:

      firebase init
        Select "Hosting" as the Firebase feature you want to use.
          Choose the Firebase project you want to deploy.
          Set the public directory (for example, build for React, dist for Vite).
          Choose whether to configure as a single-page app (SPA) (for React apps, select "Yes").
          Choose whether to set up automatic builds and deploys using GitHub (optional).

      Select Hosting.
      Choose your Firebase project.

      Set the build directory (e.g., /dist or /build).

      Deploy the app:
      firebase deploy
      💡 Result: Your app is live at https://your-app.firebaseapp.com.


- What are React Contexts? Which use cases are they suitable for?

    Normál esetben, ha egy adatot egy magasabb szintű komponensből egy mélyebben lévő komponensnek kell továbbadni, akkor minden köztes komponensnek át kell adnia azt a props segítségével. Ezt nevezzük prop drillingnek, ami bonyolulttá teheti a kódot.

    A React Context ezt a problémát oldja meg azzal, hogy egy globális állapotot hoz létre, amelyet a fa mélyebb komponensei közvetlenül elérhetnek anélkül, hogy a köztes komponenseken át kellene adni.

    Hogyan működik a React Context?
    A React Context három fő elemből áll:

    Context létrehozása – React.createContext()

    Context Provider (Ellátó) – A magasabb szintű komponens, amely az adatokat biztosítja.

    Context Consumer (Fogyasztó) – Azok a komponensek, amelyek az adatokat elérik.

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
    Téma (dark/light mode)

    Felhasználói autentikáció (bejelentkezett felhasználó adatai)

    Nyelvi beállítások (i18n, többnyelvű támogatás)

    Globális állapot (például bevásárlókosár egy webshopban)

    Ha csak egy vagy két szinten kell adatot továbbadni, akkor nem szükséges a Context, ilyenkor elég a props. Ha viszont mélyebb struktúrákban kell adatot kezelni, a React Context jó megoldás lehet.

    Összegzés
      A React Context segít elkerülni a prop drilling-et.

      Kiválóan alkalmas globális állapotok kezelésére, például téma, autentikáció vagy nyelvi beállítások.

      Az adatok megosztása a useContext segítségével gyors és hatékony.

      Ha egy állapot gyakran változik és sok komponens használja, akkor jobb lehet a Redux vagy a Zustand, mert a React Context nem teljes értékű állapotkezelő.



    React Context provides a way to share state across multiple components without prop drilling.

    Use Cases:
    Global State Management (e.g., user authentication, themes, language settings).

    Avoiding Prop Drilling – No need to pass props down multiple levels.

    Efficient Performance – Components only re-render when needed.

    Example: Creating a Theme Context
    import { createContext, useContext, useState } from "react";

    // Create Context
    const ThemeContext = createContext();

    // Provider Component
    export function ThemeProvider({ children }) {
      const [theme, setTheme] = useState("light");
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    }

    // Hook to Use Context
    export function useTheme() {
      return useContext(ThemeContext);
    }
    💡 Usage:

    function App() {
      const { theme, setTheme } = useTheme();
      return (
        <div className={theme}>
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle Theme
          </button>
        </div>
      );
    }
    ✅ Result: The theme can be changed globally without passing props manually.
