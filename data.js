

const data = [
    {
        category: "Javascript Language Features",
        question: "What is ECMAScript? What is the difference between Javascript & ECMAScript?",
        answers: [{
            name: "ChatGPT",
            answer: "ECMAScript (ES) is the standard specification that defines the core features of JavaScript. JavaScript itself is an implementation of ECMAScript with additional capabilities, such as the Document Object Model (DOM) for browser interaction. While ECMAScript sets the rules, JavaScript is the practical language developers use in environments like browsers and Node.js."
        }]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the concept of \"block scoping\" introduced in ES6. How does it differ from function scoping?",
        answers: [{
            name: "ChatGPT",
            answer: "Block scoping (introduced with let and const) means variables are only accessible within the block {} in which they are defined. This prevents unintentional variable leakage outside loops, conditionals, or functions.\n\nIn contrast, function scoping (used by var) means a variable is accessible throughout the entire function, even before declaration (due to hoisting). This can lead to unexpected behavior when variables are used outside their intended scope."
        }]
    },
    {
        category: "Javascript Language Features",
        question: "What are template literals in ES6 and how do they improve string manipulation in JavaScript?",
        answers: [{
            name: "ChatGPT",
            answer: "Template literals use backticks (`) instead of quotes and allow embedding expressions using ${}.\n\nThey enhance string manipulation by supporting:\n- Multiline strings without \\n\n- String interpolation for embedding variables or expressions\n- Tagged templates for custom parsing"
        }]
    },
    {
        category: "Javascript Language Features",
        question: "What is the \"spread operator\" in ES6 and how can it be used to manipulate arrays and objects more effectively?",
        answers: [{
            name: "ChatGPT",
            answer: "The spread operator (...) expands elements of an iterable (array, object, etc.) into individual elements.\n\nUsage:\n- Arrays: Copy, merge, or expand elements\n- Objects: Clone or merge properties\n\nExample:\nconst arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]\nconst obj1 = {a: 1, b: 2};\nconst obj2 = {...obj1, c: 3}"
        }]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the concept of \"destructuring assignment\" in ES6. How does it simplify variable assignment and object/array manipulation?",
        answers: [{
            name: "ChatGPT",
            answer: "Destructuring allows unpacking values from arrays or properties from objects into variables in a concise way.\n\nExample:\nconst [x, y] = [10, 20]; // x = 10, y = 20\nconst {name, age} = {name: \"John\", age: 30};\n\nIt simplifies accessing nested values, default values, and swapping variables."
        }]
    },
    {
        category: "Javascript Language Features",
        question: "How does ES6 introduce the concept of \"default function parameters\"? Provide an example of using default parameters in a function.",
        answers: [{
            name: "ChatGPT",
            answer: "ES6 allows setting default values for function parameters when no arguments are passed, preventing undefined values.\n\nExample:\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet()); // Hello, Guest!\n\nThis improves function reliability and avoids manual checks for undefined parameters."
        }]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the concept of \"modules\" introduced in ES6. How do they improve code organization and reusability in JavaScript?",
        answers: [{
            name: "ChatGPT",
            answer: "ES6 modules allow code to be split into reusable files using import and export.\n\nThey help in:\n- Encapsulation: Prevents global namespace pollution\n- Reusability: Code can be shared across different files\n- Lazy loading: Only loads what’s needed\n\nExample:\n// math.js\nexport function add(a, b) { return a + b; }\n\n// main.js\nimport { add } from \"./math.js\";\nconsole.log(add(2, 3)); // 5"
        }]
    },
    {
        category: "Javascript Language Features",
        question: "Compare the CommonJS and ES6 \"modules\". What are the differences?",
        answers: [{
            name: "ChatGPT",
            answer: "Feature:\nCommonJS (require)\nES6 Modules (import/export)\n\nSyntax:\nCommonJS: const x = require('module')\nES6: import x from 'module'\n\nExecution:\nCommonJS: Synchronous (blocking)\nES6: Asynchronous (non-blocking)\n\nScope:\nCommonJS: Exports as an object\nES6: Can export multiple named items\n\nUsage:\nCommonJS: Node.js (default)\nES6: Browsers and Node.js (with bundlers)\n\nCommonJS is used in older Node.js versions, while ES6 modules are the modern standard."
        }]
    },
    {
        category: "Javascript Language Features",
        question: "What are higher-order functions in JavaScript?",
        answers: [{
            name: "ChatGPT",
            answer: "A higher-order function is a function that:\n- Takes another function as an argument, OR\n- Returns a function\n\nThey allow for functional programming patterns like callbacks, closures, and currying.\n\nExample:\nfunction operate(fn, a, b) {\n  return fn(a, b);\n}\nconsole.log(operate((x, y) => x + y, 5, 3)); // 8"
        }]
    },
    {
        category: "Javascript Language Features",
        question: "Explain the purpose and functionality of the map function in JavaScript. How does it differ from the filter and reduce functions?",
        answers: [{
            name: "ChatGPT",
            answer: "The map() function creates a new array by applying a function to each element of the original array.\n\nExample:\nconst nums = [1, 2, 3];\nconst squared = nums.map(n => n * n); // [1, 4, 9]\n\nDifferences:\n- filter(): Returns elements that meet a condition\n- reduce(): Aggregates elements into a single value"
        }]
    },
    {
        category: "Javascript Language Features",
        question: "How can the filter function be used to selectively extract elements from an array based on a given condition? Provide an example where the filter function is used to create a new array with only the elements that meet the specified criteria.",
        answers: [{
            name: "ChatGPT",
            answer: "filter() creates a new array containing elements that satisfy a condition.\n\nExample: Extract even numbers:\n\nconst numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\n\nIt’s useful for removing unwanted data or refining search results."
        }]
    },
    {
        category: "Javascript Language Features",
        question: "What is the role of the reduce function in JavaScript? How can it be used to aggregate or combine the elements of an array into a single value? Provide an example where the reduce function is used to calculate a cumulative sum or find the maximum value in an array.",
        answers: [{
            name: "ChatGPT",
            answer: "reduce() processes an array to compute a single value, such as sum, max, or aggregation.\n\nExample: Sum of numbers:\nconst numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10\n\nThe first argument is a callback that processes each element.\n\nThe second argument (initial value) determines how aggregation starts.\n\nOther uses: Finding max, flattening arrays, and transforming data."
        }]
    },
    {
        category: "Fetch",
        question: "How does a query string parameter in a URL contribute to web application functionality? Explain how query string parameters are typically used to pass data between web pages or APIs.",
        answers: [{
            name: "ChatGPT",
            answer: "Query string parameters allow data to be passed between web pages or APIs via the URL. They appear after a ? in the URL and are formatted as key-value pairs (key=value). They are commonly used for filtering, pagination, search queries, and user preferences. For example, example.com/products?category=shoes&sort=price_asc enables dynamic content rendering without modifying the page structure."
        }]
    },
    {
        category: "Fetch",
        question: "What is the purpose and functionality of the fetch function in JavaScript?",
        answers: [{
            name: "ChatGPT",
            answer: "The fetch() function is used to make network requests, typically to APIs, and retrieve resources asynchronously. It provides a modern alternative to XMLHttpRequest, returning a Promise that resolves with the response data. It supports various HTTP methods (GET, POST, PUT, DELETE) and allows handling responses in JSON, text, or other formats."
        }]
    },
    {
        category: "Fetch",
        question: "Explain the syntax of the fetch function and how it handles asynchronous operations. Compare and contrast the syntax of making HTTP requests using fetch with async/await versus the syntax using .then() and .catch(). What are the key differences and benefits of using the async/await syntax in terms of code structure and readability?",
        answers: [{
            name: "ChatGPT",
            answer: "The fetch() function returns a Promise, meaning it handles asynchronous operations.\n\nUsing .then() and .catch():\n\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n\nUsing async/await:\n\nasync function fetchData() {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\nfetchData();\n\nKey Differences:\n- async/await makes code look more synchronous and easier to read.\n- .then() creates nested callbacks, which can lead to callback chaining.\n- async/await handles errors more cleanly with try...catch."
        }]
    },
    {
        category: "Fetch",
        question: "What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed.",
        answers: [{
            name: "ChatGPT",
            answer: "Asynchronicity allows JavaScript to execute code without blocking the main thread, enabling smooth performance in web applications.\n\nIt’s necessary for:\n- Fetching data from APIs (e.g., fetch(), XMLHttpRequest).\n- Handling user input events without freezing the UI.\n- Reading/writing files in Node.js.\n- Timers (setTimeout, setInterval).\n- WebSockets for real-time communication."
        }]
    },
    {
        category: "Fetch",
        question: "How can you handle the response received from a fetch request?",
        answers: [{
            name: "ChatGPT",
            answer: "Responses from fetch() need to be processed since they are Response objects.\n\nTypically, you:\n- Check if the response was successful (response.ok).\n- Convert it to JSON (response.json()).\n- Handle data or errors appropriately.\n\nExample:\nfetch('https://api.example.com/data')\n  .then(response => {\n    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);\n    return response.json();\n  })\n  .then(data => console.log(data))\n  .catch(error => console.error('Fetch error:', error));"
        }]
    },
    {
        category: "Fetch",
        question: "How does the fetch function handle errors and handle HTTP status codes? Provide an example of using fetch to handle different types of responses, including successful and error responses.",
        answers: [{
            name: "ChatGPT",
            answer: "fetch() only rejects when there’s a network failure, not on HTTP errors like 404 or 500. You must manually check response.ok and response.status.\n\nExample:\nasync function fetchWithErrorHandling() {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\nfetchWithErrorHandling();\n\nThis ensures proper error handling for both network and HTTP status-related issues."
        }]
    },
    {
        category: "Fetch",
        question: "Explain the parts of a URL.",
        answers: [{
            name: "ChatGPT",
            answer: "A URL (Uniform Resource Locator) consists of several parts:\n- Scheme/Protocol: (https://) Specifies how data is transferred.\n- Domain/Host: (www.example.com) Identifies the server.\n- Port (Optional): (:443 for HTTPS, :80 for HTTP) Specifies the connection port.\n- Path: (/products/shoes) Defines the resource location.\n- Query String: (?category=running&sort=price_asc) Contains parameters for filtering or searching.\n- Fragment (Optional): (#section3) Points to a specific section on the page."
        }]
    },
    {
        category: "Responsive Design",
        question: "What does responsive design do? Why is it important?",
        answers: [{
            name: "ChatGPT",
            answer: "Responsive design allows websites and applications to adapt seamlessly to different screen sizes and orientations. It ensures that the layout, images, and text look good and function properly on all devices—from desktops to smartphones.\n\nIt’s important because users access websites from a variety of devices, and poor responsiveness can lead to a bad user experience, loss of engagement, or even lost customers."
        }]
    },
    {
        category: "Responsive Design",
        question: "What is a mobile-first approach?",
        answers: [{
            name: "ChatGPT",
            answer: "A mobile-first approach means designing the layout and functionality for the smallest screen size first, then gradually enhancing it for larger screens. This strategy ensures that core features work well on mobile, and additional enhancements are layered in as screen real estate increases. It supports performance, accessibility, and clean code structure."
        }]
    },
    {
        category: "Responsive Design",
        question: "How can you test the website's appearance on different screen sizes in the browser?",
        answers: [{
            name: "ChatGPT",
            answer: "You can test responsiveness using the DevTools in modern browsers like Chrome or Firefox.\n\n- Press F12 or right-click → “Inspect”\n- Then click the device toolbar icon (usually a small phone/tablet symbol)\n- From there, you can simulate different screen sizes or select popular devices like iPhone, iPad, or Galaxy.\n- You can also manually resize the browser window to test fluid behavior."
        }]
    },
    {
        category: "Responsive Design",
        question: "Can you give some techniques that help to fulfill the responsive design criteria?",
        answers: [{
            name: "ChatGPT",
            answer: "Yes, some key techniques include:\n- Flexible grid layouts using CSS Grid or Flexbox\n- Relative units like %, em, rem, or vw/vh instead of fixed pixels\n- Media queries to apply different styles at different screen widths\n- Responsive images using max-width: 100% and the srcset attribute\n- Mobile-first CSS to prioritize smaller screens and scale up"
        }]
    },
    {
        category: "Responsive Design",
        question: "What do media queries do? How do they work?",
        answers: [
            {
                name: "ChatGPT",
                answer: "Media queries are CSS rules that apply styles based on conditions like screen width, height, orientation, or resolution.\n\nThey work by checking if a device matches the specified condition. If it does, the contained styles are applied.\n\nExample:\n@media (max-width: 768px) {\n  .menu { flex-direction: column; }\n}\n\nThis changes the .menu layout only when the screen is 768px wide or less."
            }
        ]
    },
    {
        category: "Responsive Design",
        question: "How would you define the Flexbox layout?",
        answers: [{
            name: "ChatGPT",
            answer: "Flexbox (Flexible Box Layout) is a CSS layout model designed for arranging items in one dimension — either as rows or columns. It distributes space dynamically and aligns items easily, even when their sizes are unknown or change. It’s especially useful for responsive and component-based designs."
        }]
    },
    {
        category: "Responsive Design",
        question: "How can you debug the Flexbox layout in the browser?",
        answers: [{
            name: "ChatGPT",
            answer: "Using DevTools:\n- Open DevTools (F12) and select the element with display: flex\n- Go to the \"Layout\" panel (or \"Styles\" → check the \"Flex\" badge)\n- You can toggle flex-related properties and see live previews\n- Tools like Chrome highlight the flex container and items visually, showing spacing, alignment, and overflow issues"
        }]
    },
    {
        category: "Responsive Design",
        question: "What is the difference between the Flexbox container and the Flexbox item?",
        answers: [{
            name: "ChatGPT",
            answer: "A Flexbox container is the parent element with display: flex. It defines the flex context.\n\nA Flexbox item is any direct child of that container.\n\nThe container controls direction, wrapping, and alignment, while the items can be customized individually using properties like flex-grow, flex-shrink, or align-self."
        }]
    },
    {
        category: "Object Oriented JavaScript",
        question: "What is the difference between the class syntax and the constructor function syntax?",
        answers: [{
            name: "ChatGPT",
            answer: "Both are used to create objects, but the class syntax is more modern and cleaner.\n- Class syntax uses the class keyword and looks more like traditional OOP in other languages.\n- Constructor functions are older and use a function with the new keyword to create instances.\n\nBehind the scenes, class syntax is mostly syntactic sugar over prototypes, but it's more readable and organized."
        }]
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
        answers: [{
            name: "ChatGPT",
            answer: "In web development, client-server communication means that the client (usually a browser) sends a request to the server, and the server processes it and sends back a response.\nThe client can interact with the server through APIs, usually using the HTTP protocol, and the exchange of information typically involves formats like JSON."
        }]
    },
    {
        category: "Express",
        question: "What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.",
        answers: [{
            name: "ChatGPT",
            answer: "HTTP is the foundation of communication on the web.\n\n- A request is made by the client and includes a method (GET, POST, etc.), a URL, headers (with metadata), and sometimes a body (with data).\n- A response comes from the server and includes a status code, headers, and a body with the actual content or data (like HTML or JSON).\n\nTogether, they form the basic exchange pattern between frontend and backend."
        }]
    },
    {
        category: "Express",
        question: "What is Express.js and how does it simplify web application development in Node.js? Explain the core features and benefits of using Express.js as a web framework.",
        answers: [{
            name: "ChatGPT",
            answer: "Express.js is a minimal and flexible web framework for Node.js that simplifies the process of building web applications and APIs.\n\nIt provides an easy way to handle routing, middleware, requests, and responses.\n\nCore benefits include:\n- Simplified syntax for creating servers\n- Middleware system for extensibility\n- Easy routing\n- Support for templates and static files"
        }]
    },
    {
        category: "Express",
        question: "What are middlewares in Express.js? Can you list some examples of the built-in middleware?",
        answers: [{
            name: "ChatGPT",
            answer: "Middlewares are functions that have access to the request (req), response (res), and the next() function. They run before the final route handler and can modify the request, the response, or end the cycle.\n\nBuilt-in examples include:\n- express.json() for parsing JSON bodies\n- express.static() for serving static files\n- express.urlencoded() for parsing URL-encoded data"
        }]
    },
    {
        category: "Express",
        question: "How can you tell Express.js to use a middleware?",
        answers: [{
            name: "ChatGPT",
            answer: "You register middleware using the .use() method or by placing it directly in the route handler chain.\n\nExample:\n\napp.use(express.json());\n\nThis tells Express to use the JSON parser for every incoming request."
        }]
    },
    {
        category: "Express",
        question: "Explain the process of handling static files (e.g., CSS, images) in Express.js. How can you configure Express.js to serve static assets from a specific directory in your application?",
        answers: [{
            name: "ChatGPT",
            answer: "To serve static files, use the built-in express.static() middleware.\nYou just pass in the directory path you want to expose.\n\nExample:\n\napp.use(express.static('public'));\n\nNow files in the /public folder (like images or CSS) are accessible via URL."
        }]
    },
    {
        category: "Express",
        question: "What does the built-in JSON middleware (`express.json()`) do?",
        answers: [{
            name: "ChatGPT",
            answer: "express.json() is a built-in middleware that automatically parses incoming requests with JSON payloads, and makes the data available under req.body.\nIt's essential when working with APIs that send data in JSON format, such as in POST or PUT requests."
        }]
    },
    {
        category: "Express",
        question: "How does Express.js handle HTTP request/response cycles? Explain the process of receiving and responding to requests using Express.js middlewares and route handlers.",
        answers: [{
            name: "ChatGPT",
            answer: "Express handles the request/response cycle by passing the request through a middleware stack, which can include parsing, authentication, logging, etc.\nOnce the request reaches a matching route, the route handler processes it and sends a response using res.send(), res.json(), etc.\nEach middleware or handler can call next() to move to the next one in line."
        }]
    },
    {
        category: "Express",
        question: "How does routing work in Express.js? Explain how to define routes and handle different HTTP methods (GET, POST, etc.) in an Express.js application.",
        answers: [{
            name: "ChatGPT",
            answer: "Routing in Express defines how the server responds to different HTTP methods and paths.\nYou define routes using methods like app.get(), app.post(), etc.\n\nExample:\n\napp.get('/users', (req, res) => {\n  res.send('User list');\n});\n\nIt listens for GET requests to /users and sends a response."
        }]
    },
    {
        category: "Express",
        question: "What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json() in Express.js.",
        answers: [{
            name: "ChatGPT",
            answer: "Common methods include:\n- res.send() – sends any type of data (string, object, buffer)\n- res.json() – specifically sends a JSON response and sets the correct headers\n- res.status() – sets the HTTP status code\n- res.sendFile() – sends a file from the server\n\nres.send() is more general, while res.json() is best for APIs returning structured JSON data."
        }]
    },
    {
        category: "Express",
        question: "What is the purpose of the next() function in Express.js middleware? How can you use it to pass control to the next middleware function in the chain or to terminate the middleware processing?",
        answers: [{
            name: "ChatGPT",
            answer: "The next() function is used to pass control to the next middleware in the stack.\nIf you don’t call next(), the request will hang.\nIt also plays a key role in error handling, where calling next(err) triggers error-handling middleware."
        }]
    },
    {
        category: "Express",
        question: "Explain the concept of route parameters in Express.js. How can you extract dynamic values from the URL path using route parameters, and how are these values accessed within route handlers?",
        answers: [{
            name: "ChatGPT",
            answer: "Route parameters let you define dynamic parts in the URL, like /users/:id.\nThese values can be accessed from req.params.\n\nExample:\n\napp.get('/users/:id', (req, res) => {\n  const userId = req.params.id;\n  res.send(`User ID is ${userId}`);\n});\n\nIt’s useful for dynamic content like user profiles or product pages."
        }]
    },
    {
        category: "REST and CRUD",
        question: "Can you name some typical HTTP response codes and their meaning?",
        answers: [{
            name: "Huni",
            answer: "200 OK – Request was successful\n201 Created – Resource was successfully created\n400 Bad Request – Client-side error, often due to invalid data\n401 Unauthorized – Authentication is required or failed\n403 Forbidden – Access is denied even with authentication\n404 Not Found – Requested resource doesn't exist\n500 Internal Server Error – Generic server-side error"
        }]
    },
    {
        category: "REST and CRUD",
        question: "Can you name some typical HTTP request/response headers and their meaning?",
        answers: [{
            name: "ChatGPT",
            answer: "- Content-Type: Specifies the format of the body (e.g., application/json)\n- Authorization: Used to pass credentials or tokens\n- Accept: Tells the server what content types the client expects\n- Cache-Control: Controls caching behavior\n- User-Agent: Provides information about the client (browser/device)"
        }]
    },
    {
        category: "REST and CRUD",
        question: "What are the common HTTP methods used in web development, and what are their respective purposes?",
        answers: [{
            name: "Huni",
            answer: "- GET – Retrieve data\n- POST – Create new data\n- PUT – Replace existing data\n- PATCH – Update part of a resource\n- DELETE – Remove data\nEach method defines the intent of the request in RESTful APIs."
        }]
    },
    {
        category: "REST and CRUD",
        question: "How does the GET method differ from the POST method? Explain when it is appropriate to use each method. Which one uses the request body to receive data?",
        answers: [{
            name: "ChatGPT",
            answer: "- GET is used to fetch data, and the parameters are sent in the URL. It should not affect data on the server.\n- POST is used to submit or create data, and the data is sent in the request body.\n\nUse GET for reading, and POST for sending form data or creating resources."
        }]
    },
    {
        category: "REST and CRUD",
        question: "Explain the use of the PATCH method in HTTP. How does it differ from the PUT method, and when should it be used to update a resource?",
        answers: [{
            name: "ChatGPT",
            answer: "- PATCH updates only specific fields of a resource\n- PUT replaces the entire resource\n\nUse PATCH when you want to make partial updates, which is more efficient and safer for small changes."
        }]
    },
    {
        category: "REST and CRUD",
        question: "How can the DELETE method be used to remove a resource from a server? Explain how the DELETE method works and any considerations for handling resource deletion.",
        answers: [{
            name: "ChatGPT",
            answer: "Send a DELETE request to the URL of the resource.\nExample: DELETE /users/123 removes user with ID 123.\nServers often respond with 204 No Content to confirm deletion.\nYou might add authentication or checks to prevent accidental deletion."
        }]
    },
    {
        category: "REST and CRUD",
        question: "What does the REST architecture mean? What are the REST Constraints?",
        answers: [{
            name: "ChatGPT",
            answer: "REST (Representational State Transfer) is an architectural style for designing web APIs.\nIt’s based on stateless communication, using HTTP methods and standard URIs.\n\nKey constraints include:\n- Client-Server separation\n- Statelessness\n- Uniform interface\n- Cacheability\n- Layered system\n- Code on demand (optional)"
        }]
    },
    {
        category: "REST and CRUD",
        question: "What does a URL's path represent in a REST architecture? Show an example of the `recipe` resource's CRUD operations. Define the HTTP method and a corresponding path for each CRUD operation.",
        answers: [{
            name: "ChatGPT",
            answer: "In REST, the path identifies a resource.\n\nCRUD for recipe:\n- Create: POST /recipes\n- Read: GET /recipes or GET /recipes/:id\n- Update: PUT /recipes/:id or PATCH /recipes/:id\n- Delete: DELETE /recipes/:id"
        }]
    },
    {
        category: "REST and CRUD",
        question: "How do you handle form submissions using JavaScript? Explain the process of capturing form data and preventing the default form submission behavior.",
        answers: [{
            name: "ChatGPT",
            answer: "Use the 'submit' event, and call event.preventDefault() to stop default behavior.\nThen access form values using event.target.elements or FormData.\nYou can send the data using fetch() or another method without refreshing the page."
        }]
    },
    {
        category: "REST and CRUD",
        question: "Explain the required elements necessary to define a form in HTML.",
        answers: [{
            name: "ChatGPT",
            answer: "A form needs:\n- <form> tag\n- action attribute (where to send the data)\n- method (GET or POST)\n- One or more <input>, <select>, or <textarea> elements\n- A submit button (<button type='submit'> or <input type='submit'>)"
        }]
    },
    {
        category: "REST and CRUD",
        question: "What is the purpose of the required attribute in HTML form elements? How does it enforce mandatory input fields and prevent form submission without the required information?",
        answers: [{
            name: "ChatGPT",
            answer: "The required attribute makes an input mandatory.\nThe browser will prevent the form from submitting if the field is empty and show a validation message."
        }]
    },
    {
        category: "REST and CRUD",
        question: "Explain the different types of form input fields available in HTML. How do input types like text, number, email, checkbox, and radio buttons differ, and how are they used in forms?",
        answers: [{
            name: "ChatGPT",
            answer: "- text: Free text input\n- number: Numeric input with step and range\n- email: Must be a valid email format\n- checkbox: Multiple true/false options\n- radio: Select one option from a group\n\nEach type has different built-in validation and behavior."
        }]
    },
    {
        category: "REST and CRUD",
        question: "Can you explain the purpose of the name attribute in the context of form submission?",
        answers: [{
            name: "ChatGPT",
            answer: "The name attribute acts as the key in a key-value pair when submitting form data.\nWithout it, the value of the input won’t be included in the submission.\nIt’s essential for both form serialization and server-side processing."
        }]
    },
    {
        category: "REST and CRUD",
        question: "Can you explain how we can connect a label tag to a form element?",
        answers: [{
            name: "ChatGPT",
            answer: "Use the for attribute on the <label> and match it to the input’s id.\n\nExample:\n\n<label for='email'>Email</label>\n<input id='email' name='email' type='email'>\n\nThis improves accessibility and usability."
        }]
    },
    {
        category: "REST and CRUD",
        question: "How can you dynamically manipulate or modify form elements using JavaScript? Explain how to add or remove form fields dynamically based on user interaction or specific conditions.",
        answers: [{
            name: "ChatGPT",
            answer: "You can use the DOM API to create, remove, or change inputs.\n- Use document.createElement() to add a new field\n- Use element.remove() to delete one\n- Attach event listeners to show/hide fields based on conditions\nIt allows forms to adapt to user interaction."
        }]
    },
    {
        category: "REST and CRUD",
        question: "How can you convert form data into a format that can be easily transmitted or processed by the server?",
        answers: [{
            name: "ChatGPT",
            answer: "You can use the FormData object to collect and serialize form values.\nThen use fetch() or XMLHttpRequest to send it.\nAlternatively, you can use JSON.stringify() on an object built from the form values if sending JSON."
        }]
    },
    {
        category: "React",
        question: "What is React.js and what are its key features?",
        answers: [
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
                name: "ChatGPT",
                answer: "React Context is a way to share state or values globally across a component tree—without prop drilling.\n\nIt’s best used for global data like:\n- Auth state (logged-in user)\n- Theme (light/dark mode)\n- Language preferences\n\nIt simplifies state management in medium-sized apps."
            }
        ]
    }
]


const vikiAnswers = [
    //JS Language Features:
    {
        name: "Viki",
        answer: "ECMAScript egy szabvány, amit az ECMA International szervezet tart fenn. Ez határozza meg, hogyan működjön a nyelv alapja: például a változók, függvények, ciklusok, objektumok viselkedését. Az ECMAScript egy nyelvi specifikáció, tehát egy \"szabálykönyv\". A JavaScript viszont egy megvalósítás (implementáció), ami az ECMAScript szabványt követi. A JavaScript nemcsak az ECMAScript szabványt tartalmazza, hanem extra dolgokat is, például a DOM kezelést a böngészőben, API-kat, eseménykezelést stb."
    },
    {
        name: "Viki",
        answer: "Block scoping azt jelenti, hogy egy változó csak azon a kódrészen belül érhető el, amelyet blokknak tekintünk. A blokk lehet például egy if, for, vagy while ciklus. Az ES6 bevezette az új let és const kulcsszavakat, amelyek block scoped változókat hoznak létre. Ezzel szemben function scoping esetén a változók csak a függvényen belül érhetők el, függetlenül attól, hogy a változó milyen kódrészben van deklarálva a függvényen belül. A hagyományos var kulcsszó a function scoped változókat hozza létre."
    },
    {
        name: "Viki",
        answer: "A template literal (sablon literál) az ES6-ban bevezetett új szintaktika a sztringek kezelésére. A sablon literálokat ` (backtick) karakterek közé írjuk, nem pedig a hagyományos ' vagy \" karakterek közé, mint a szokásos sztringeket. Ez lehetővé teszi a dinamikus sztringek egyszerűbb létrehozását és manipulálását."
    },
    {
        name: "Viki",
        answer: "A spread operator (...) az ES6-ban bevezetett szintaktikai elem, amely lehetővé teszi egy tömb vagy objektum eleminek egyszerű kibővítését vagy \"szétterítését\". Ez különösen hasznos lehet tömbök, objektumok másolásakor, vagy amikor új értékeket szeretnénk hozzáadni egy már létező tömbhöz vagy objektumhoz."
    },
    {
        name: "Viki",
        answer: "A destructuring assignment egy ES6-ban bevezetett JavaScript szintaxis, amellyel egyszerűen kibontjuk az objektumok vagy tömbök értékeit külön változókba. Ezáltal gyorsabban és átláthatóbban lehet értékeket kinyerni komplex adatstruktúrákból."
    },
    {
        name: "Viki",
        answer: "Az ES6 bevezette az alapértelmezett paramétereket a függvényekhez. Ez azt jelenti, hogy ha egy függvényhíváskor nem adsz meg értéket egy paraméternek, akkor a megadott alapértelmezett értéket fogja használni. Ez leegyszerűsíti a kódot, mert nem kell külön ellenőrizni, hogy egy paraméter undefined-e, és nem kell if-ekkel vagy ||-al megadni alapértékeket."
    },
    {
        name: "Viki",
        answer: "Az ES6 modulok egy új szabványt hoztak a JavaScript-be, amely lehetővé teszi a kód felosztását kisebb, újrafelhasználható fájlokra. Egy modul tartalmazhat változókat, függvényeket vagy osztályokat, amiket exportálhatsz és importálhatsz más fájlokba."
    },
    {
        name: "Viki",
        answer: "Mindkettő modulrendszer, de különböző környezetekben és különbözőképp működnek. A CommonJS szinkron módon működik és főként Node.js-ben használatos, míg az ES6 modulok aszinkron módon működnek, és modern böngészőkben is támogatottak."
    },
    {
        name: "Viki",
        answer: "A higher-order function (magasabb rendű függvény) olyan függvény, amely másik függvényt kap paraméterként, vagy másik függvényt ad vissza eredményként. Ez lehetővé teszi, hogy rugalmasabban kezeljük a kódot, és segít az abstrakcióban és az újrafelhasználhatóságban."
    },
    {
        name: "Viki",
        answer: "A map() egy beépített tömb metódus, ami végigmegy egy tömb minden elemén, és minden elemre alkalmaz egy függvényt. Az eredmény egy új tömb, ami az eredeti tömb módosított verzióját tartalmazza. Az eredeti tömb nem változik meg."
    },
    {
        name: "Viki",
        answer: "A filter függvény egy JavaScript beépített metódus, amelyet arra használunk, hogy egy tömbből csak azokat az elemeket tartsuk meg, amelyek megfelelnek egy adott feltételnek. A filter egy új tömböt hoz létre a megadott feltételnek megfelelő elemekkel, miközben az eredeti tömb érintetlen marad."
    },
    {
        name: "Viki",
        answer: "A reduce függvény egy tömb elemeit egyetlen értékké összevonja vagy aggregálja. A reduce függvény egy accumulátor (felhalmozó) változót használ, amely minden egyes elem feldolgozása után frissül, és a végén egyetlen értéket ad vissza."
    },

    //Fetch:
    {
        name: "Viki",
        answer: "A lekérdezési karakterlánc (query string) paramétere egy URL-ben hozzájárul a webalkalmazás funkcionalitásához azáltal, hogy lehetővé teszi adatok átadását weboldalak vagy API-k között. Általában kis mennyiségű adat, például felhasználói beállítások, keresési kifejezések, szűrők vagy hitelesítési tokenek továbbítására használják, anélkül hogy módosítanák az URL útvonalát. A query string paraméterek a ? szimbólum után következnek egy URL-ben, és kulcs-érték párok formájában (kulcs=érték) vannak megadva. Több paramétert az & szimbólum választ el egymástól. Például: https://example.com/search?query=javascript&page=2. Ebben az esetben a query=javascript és a page=2 paraméterek segítenek a webalkalmazásnak a megfelelő keresési találatok megjelenítésében."
    },
    {
        name: "Viki",
        answer: "A fetch függvény JavaScript-ben hálózati kérések küldésére szolgál, általában adatok lekérésére egy szerverről vagy adatok küldésére egy API-nak. A fetch egy modern alternatívája az XMLHttpRequest-nek, és Promise alapú, így könnyebben kezelhetők az aszinkron műveletek. Célja és működése: A fetch segítségével HTTP kéréseket küldhetünk (GET, POST, PUT, DELETE, stb.). Egy Promise-t ad vissza, amely egy Response objektummá alakul, tartalmazva az állapotkódot és a fejléceket. Az adatok kinyerhetők a .json(), .text() vagy .blob() metódusokkal. Támogatja a további opciókat, például a fejlécek beállítását, törzstartalmat és hitelesítési tokeneket."
    },
    {
        name: "Viki",
        answer: "A fetch egy beépített JavaScript API, amely HTTP-kéréseket küld és aszinkron módon dolgozza fel azokat. Ez a függvény egy Promise-t ad vissza, amely kétféleképpen kezelhető: .then() és .catch() metódusokkal, vagy async/await szintaxissal."
    },
    {
        name: "Viki",
        answer: "Az aszinkronitás azt jelenti, hogy bizonyos műveletek (például hálózati kérések, időzítők) nem akadályozzák a program további végrehajtását. Ahelyett, hogy egy hosszú művelet befejeződésére várna a program, folytatja a kód futtatását, és később kezeli az eredményt. A JavaScript az eseményciklus (event loop) segítségével kezeli az aszinkron műveleteket, így a böngésző nem fagy le, és a felhasználói élmény folyamatos marad."
    },
    {
        name: "Viki",
        answer: "Amikor egy fetch kérést indítunk JavaScript-ben, az egy Promise-t ad vissza, amely egy Response objektumra oldódik fel. Az adatok kinyeréséhez általában a .json(), .text(), vagy .blob() metódust használjuk."
    },
    {
        name: "Viki",
        answer: "A fetch nem utasítja el automatikusan a Promise-t, ha a válasz egy HTTP hiba státuszt kap (pl. 404 vagy 500). A Promise csak akkor utasítódik el, ha hálózati hiba történik (pl. nincs internetkapcsolat). A HTTP hibák megfelelő kezeléséhez manuálisan ellenőriznünk kell a response.ok értékét (true, ha a státusz 200-299 között van) vagy közvetlenül a response.status-t."
    },
    {
        name: "Viki",
        answer: "Az URL (Uniform Resource Locator) egy internetes cím, amely egy adott erőforrás elérésére szolgál. Több részből áll, amelyek mind külön funkciót látnak el. 1. Séma (Protokoll) Meghatározza az adatátvitel módját. Gyakori protokollok: http:// (Nem biztonságos), https:// (Titkosított, biztonságos kapcsolat), ftp:// (Fájlátvitel), mailto: (E-mail címek esetén). 2. Hoszt (Domain név vagy IP-cím) Példa: www.example.com. Azonosítja azt a szervert, ahol az oldal található. Lehet domain név (example.com) vagy IP-cím (192.168.1.1). A www. előtag nem mindig szükséges."
    },

    //Responsive Design:
    {
        name: "Viki",
        answer: "A reszponzív dizájn lehetővé teszi, hogy egy weboldal különböző képernyőméreteken is jól nézzen ki és használható maradjon. Mivel a legtöbb ember mobiltelefonról böngészi az internetet, fontos, hogy az oldal alkalmazkodjon a kisebb kijelzőkhöz is."
    },
    {
        name: "Viki",
        answer: "A mobile-first megközelítés azt jelenti, hogy a weboldal tervezése először a kisebb kijelzőkre történik, majd fokozatosan optimalizáljuk nagyobb képernyőkre."
    },
    {
        name: "Viki",
        answer: "Fejlesztői konzol megnyitása: Nyomd meg az F12 billentyűt Chrome-ban vagy Firefoxban. Reszponzív mód bekapcsolása: Nyomd meg a CTRL + SHIFT + M billentyűkombinációt, vagy keresd meg az ikonokat (Chrome-ban bal felső sarok, Firefoxban jobb felső sarok). Képernyőméretek váltása: A reszponzív nézetben beállíthatod, hogy milyen méretű eszközön szeretnéd ellenőrizni az oldal kinézetét."
    },
    {
        name: "Viki",
        answer: "Viewport meta tag:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\nEz biztosítja, hogy az oldal igazodjon az eszköz képernyőjének méretéhez.\n\nMedia Queries (média lekérdezések):\n@media (min-width: 768px) {\nbody {\nbackground-color: lightblue;\n}\n}\nEzzel a képernyőméret alapján módosíthatjuk a dizájnt.\n\nFlexbox használata rugalmas elrendezéshez:\n.container {\ndisplay: flex;\nflex-wrap: wrap;\n}\nSegít az elemek elrendezésében és méretezésében.\n\nReszponzív képek:\nimg {\nmax-width: 100%;\nheight: auto;\n}\nA képek nem lépik túl a rendelkezésre álló helyet."
    },
    {
        name: "Viki",
        answer: "A média lekérdezések lehetővé teszik, hogy a CSS szabályok a képernyő tulajdonságai (például szélessége) alapján változzanak.\n@media (min-width: 600px) {\nbody {\nbackground-color: lightgray;\n}\n}\nEz a szabály csak akkor aktiválódik, ha a képernyő szélessége legalább 600px.\n\nPélda több feltétel kombinálására:\n@media screen (min-width: 400px) and (max-width: 800px) {\nbody {\nbackground-color: yellow;\n}\n}\nEz a szabály akkor érvényesül, ha a képernyő szélessége 400px és 800px közé esik."
    },
    {
        name: "Viki",
        answer: "A Flexbox egy egydimenziós elrendezési modell a CSS-ben, amely lehetővé teszi az elemek elrendezését és igazítását egy konténerben sorokban vagy oszlopokban. Egyszerűsíti a bonyolult elrendezéseket, és hatékony módot kínál a tér elosztására egy konténeren belül. Olyan tulajdonságokkal, mint a flex-direction, justify-content és align-items, a Flexbox egyszerűsíti az elemek elhelyezését és igazítását a konténerben."
    },
    {
        name: "Viki",
        answer: "A Flexbox elrendezés hibakereséséhez a böngészők beépített fejlesztői eszközeit használhatjuk. A legtöbb modern böngésző, mint a Chrome és a Firefox, rendelkezik Flexbox hibakereső eszközzel a fejlesztői eszközkészletben. Ez az eszköz lehetővé teszi a flex konténerek és elemek vizualizálását, beleértve azok igazítását és elosztását. Valós időben megtekintheted az elrendezést, láthatod, hogyan viselkednek az elemek, és módosíthatod az olyan tulajdonságokat, mint a flex-grow, flex-shrink, és a justify-content, hogy megoldj elrendezési problémákat."
    },
    {
        name: "Viki",
        answer: "A Flexbox konténer az az elem, amelyen a display: flex vagy display: inline-flex tulajdonság van alkalmazva. Ezáltal flex konténerré válik, amely tartalmazhat flex elemeket. A Flexbox elemek a konténer gyerek elemei, amelyeket a flexbox tulajdonságok (pl. flex-direction, justify-content, align-items) szerint rendezünk és igazítunk. A konténer határozza meg az elrendezést és a struktúrát, míg az elemek az egyes elemek, amelyeket a konténer által meghatározott szabályok szerint rendezünk."
    },

    //Object Oriented JS:
    {
        name: "Viki",
        answer: "Az osztály szintaxis egy modernebb és strukturáltabb módja az objektumok és viselkedésük meghatározásának, amelyet az ES6 vezetett be. Olvashatóbb és tisztább módot biztosít a prototípusok és metódusok meghatározására. A konstruktor függvények pedig a régebbi módszert jelentik az objektumok létrehozására és prototípus alapú öröklésük kezelésére."
      },
      {
        name: "Viki",
        answer: "A new kulcsszó egy osztály vagy egy konstruktor függvény példányosítására szolgál. A következő lépéseket hajtja végre:\n- Létrehoz egy új, üres objektumot.\n- Beállítja az új objektum prototípusát a konstruktor prototípusára.\n- A this kulcsszót az új objektumhoz köti a konstruktor belsejében.\n- Visszaadja az újonnan létrehozott objektumot."
      },
      {
        name: "Viki",
        answer: "A constructor metódus egy speciális függvény az osztályokban, amely automatikusan lefut, amikor egy új példányt hozunk létre az osztályból. Főként az objektum tulajdonságainak inicializálására és az új példány beállítására szolgál."
      },
      {
        name: "Viki",
        answer: "Az osztály metódusai olyan függvények, amelyeket egy osztályon belül határozunk meg, és az osztály prototípusához tartoznak, így minden példány használhatja őket. Ezek határozzák meg az osztály viselkedését."
      },
      {
        name: "Viki",
        answer: "Az osztály mezői olyan tulajdonságok, amelyek az osztály példányaihoz tartoznak. Meghatározhatók a constructor metóduson belül a this használatával, vagy osztálymezőként a konstruktoron kívül is deklarálhatók."
      },
      {
        name: "Viki",
        answer: "Az öröklődés lehetővé teszi, hogy egy osztály (vagy konstruktor függvény) átvegye egy másik osztály tulajdonságait és metódusait. Ez segít a kód újrahasznosításában és a hierarchikus szerkezetek létrehozásában. A JavaScript az öröklődést a prototípusláncolás segítségével valósítja meg."
      },
      {
        name: "Viki",
        answer: "Az extends kulcsszó az osztály szintaxisban egy olyan alosztály létrehozására szolgál, amely örökli az ősosztály tulajdonságait és metódusait. Ez lehetővé teszi az alosztály számára, hogy újrahasznosítsa és kibővítse az ősosztály funkcionalitását."
      },

      //Express:
      {
        name: "Viki",
        answer: "Kliens-szerver kommunikáció a webfejlesztésben: Egy tipikus kliens-szerver architektúrában a kliens (általában egy böngésző vagy egy frontend alkalmazás) és a szerver (backend rendszer) HTTP-protokollon keresztül kommunikálnak egymással. A kliens kérést küld (GET, POST, PUT, DELETE), a szerver feldolgozza a kérést (akár adatbázist is használ), majd válaszol egy HTTP választ tartalmazó üzenettel (általában JSON), amit a kliens feldolgoz és frissíti a felületet."
      },
      {
        name: "Viki",
        answer: "Az HTTP kérések és válaszok alapvető szerepet játszanak a kliens-szerver kommunikációban. Egy HTTP kérés felépítése: metódus (pl. GET), URL (cél), fejlécek (extra infó), és opcionálisan törzs (pl. JSON adat POST esetén). Egy HTTP válasz: állapotkód (pl. 200 OK), fejlécek (pl. content-type), és törzs (pl. HTML vagy JSON)."
      },
      {
        name: "Viki",
        answer: "Az Express.js egy minimalista Node.js keretrendszer, amely leegyszerűsíti a webalkalmazások építését. Főbb jellemzői: egyszerű útvonalkezelés, middleware támogatás, sablonmotorok, REST API-k gyors létrehozása, adatbázis integráció. Előnyei: gyors fejlesztés, testreszabhatóság, skálázhatóság és erős közösség."
      },
      {
        name: "Viki",
        answer: "Az Express.js middleware-ek olyan függvények, amelyek lefutnak a request-response ciklus közben. Tudják módosítani a req vagy res objektumot, befejezhetik a kérést, vagy továbbadhatják a vezérlést a next() segítségével. Beépített middleware-ek: express.json(), express.urlencoded(), express.static(), express.text(), express.raw()."
      },
      {
        name: "Viki",
        answer: "Az Express a `app.use(middlewareFunction)` segítségével használ middleware-t. Ez a függvény minden kérés esetén lefut (ha nincs külön útvonal megadva), és előkészíti vagy naplózza a kérés-válasz folyamatot."
      },
      {
        name: "Viki",
        answer: "Statikus fájlok kiszolgálása Express-ben: Használjuk az `express.static()` middleware-t, és adjuk meg a könyvtárat, pl. `public`. Ezzel a mappában található fájlok (pl. style.css, image.jpg) közvetlenül elérhetők a böngészőből, például http://localhost:3000/style.css."
      },
      {
        name: "Viki",
        answer: "Az express.json() beépített middleware feldolgozza a JSON formátumú kérés testeket. Ellenőrzi, hogy Content-Type: application/json, majd a testet JavaScript objektummá alakítja a req.body-ban. Ha nem használod, a req.body undefined marad."
      },
      {
        name: "Viki",
        answer: "Az Express.js middleware láncot használ a HTTP kérés-válasz ciklus kezelésére. A kliens kérést küld, az Express végigmegy a middleware-eken (pl. naplózás, json), majd ha van megfelelő útvonal, annak a handler-e válaszol (res.send(), res.json(), stb.). Ha nincs route, 404-et ad, hiba esetén error middleware lép életbe."
      },
      {
        name: "Viki",
        answer: "Routing az Express.js-ben azt jelenti, hogy meghatározod, hogyan válaszoljon a szerver különböző HTTP kérésekre (GET, POST, PUT, DELETE). Az app.get(), app.post() stb. metódusokkal párosítod az útvonalat és egy callback-et, ami választ küld. A req.body, req.params és req.query segítségével éred el a kérések adatait."
      },
      {
        name: "Viki",
        answer: "Az Express válaszküldési metódusai: res.send() (bármilyen adat, pl. string, objektum), res.json() (JSON válasz, automatikus content-type), res.status() (állapotkód beállítás), res.redirect(), res.render(), res.sendFile(), res.end(). A res.json() biztonságosabb JSON küldésére, míg res.send() általánosabb."
      },
      {
        name: "Viki",
        answer: "A next() az Express middleware-ekben arra szolgál, hogy továbbadja a vezérlést a következő middleware-nek vagy útvonalnak. Ha nem hívod meg, a kérés 'függőben' marad. Akkor használod, ha a middleware nem küld választ, hanem előfeldolgozást végez (pl. naplózás), majd tovább kell adnia."
      },
      {
        name: "Viki",
        answer: "Route paraméterek lehetővé teszik, hogy dinamikus értékeket adj át az URL-ben (pl. /users/:userId). Ezeket a req.params objektumban érheted el. Több paraméter is megadható (pl. /users/:userId/posts/:postId). Használjuk egyedi adatok lekérdezésére, REST API végpontoknál, vagy navigációnál frontendben."
      },

      //REST and CRUD:
      
]



export { data };

