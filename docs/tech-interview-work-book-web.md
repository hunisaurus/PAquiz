# Web Module Questions

## Javascript Language Features

- What is ECMAScript? What is the difference between Javascript & ECMAScript?

    Huni:
    Az ECMAScript (ES) határozza meg a szabályokat, a Javascript pedig a gyakorlati használatba iktatja őket. A Javascript az ES egy implementációja, kiegészítve egyéb dolgokkal, mint pl. a DOM manipuláció.

    ChatGPT: 
    ECMAScript (ES) is the standard specification that defines the core features of JavaScript. JavaScript itself is an implementation of ECMAScript with additional capabilities, such as the Document Object Model (DOM) for browser interaction. While ECMAScript sets the rules, JavaScript is the practical language developers use in environments like browsers and Node.js.

- Explain the concept of "block scoping" introduced in ES6. How does it differ from function scoping?

    Huni:
    A Blokk szkóp miatt let-tel és const-tal olyan változókat tudunk létrehozni, amik csak az adott szkópon, blokkon belül érvényesek. Ezzel nagyban megkönnyítjük a tiszta kódot, hiszen a globális változókkal nem kavarodunk össze.
    Ezzel szemben a function scoping azt jelenti, hogy a var--ral létrehozott változóink olyannyira elérhetőek a teljes függvényünk szkópján, hogy még hoisting-olva is vannak, tehát deklarálás előtt is elérjük őket.

    ChatGPT:
    Block scoping (introduced with let and const) means variables are only accessible within the block {} in which they are defined. This prevents unintentional variable leakage outside loops, conditionals, or functions.

    In contrast, function scoping (used by var) means a variable is accessible throughout the entire function, even before declaration (due to hoisting). This can lead to unexpected behavior when variables are used outside their intended scope.


- What are template literals in ES6 and how do they improve string manipulation in JavaScript?

    Huni:


    ChatGPT:
    Template literals use backticks (`) instead of quotes and allow embedding expressions using ${}. 

    They enhance string manipulation by supporting:
    - Multiline strings without \n
    - String interpolation for embedding variables or expressions
    - Tagged templates for custom parsing

- What is the "spread operator" in ES6 and how can it be used to manipulate arrays and objects more effectively?

    ChatGPT:
    The spread operator (...) expands elements of an iterable (array, object, etc.) into individual elements.

    Usage:
    - Arrays: Copy, merge, or expand elements
    - Objects: Clone or merge properties

    Example:

    const arr1 = [1, 2];
    const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
    const obj1 = {a: 1, b: 2};
    const obj2 = {...obj1, c: 3}

- Explain the concept of "destructuring assignment" in ES6. How does it simplify variable assignment and object/array manipulation?

    ChatGPT:
    Destructuring allows unpacking values from arrays or properties from objects into variables in a concise way.

    Example:
    const [x, y] = [10, 20]; // x = 10, y = 20
    const {name, age} = {name: "John", age: 30};

    It simplifies accessing nested values, default values, and swapping variables.

- How does ES6 introduce the concept of "default function parameters"? Provide an example of using default parameters in a function.

    ChatGPT:
    ES6 allows setting default values for function parameters when no arguments are passed, preventing undefined values.

    Example:
    function greet(name = "Guest") {
    return `Hello, ${name}!`;
    }
    console.log(greet()); // Hello, Guest!

    This improves function reliability and avoids manual checks for undefined parameters.

- Explain the concept of "modules" introduced in ES6. How do they improve code organization and reusability in JavaScript?

    ChatGPT:
    ES6 modules allow code to be split into reusable files using import and export. 
    
    They help in:
    - Encapsulation: Prevents global namespace pollution
    - Reusability: Code can be shared across different files
    - Lazy loading: Only loads what’s needed

    Example:
    // math.js
    export function add(a, b) { return a + b; }

    // main.js
    import { add } from "./math.js";
    console.log(add(2, 3)); // 5

- Compare the CommonJS and ES6 "modules". What are the differences?

    ChatGPT:

    Feature:
    CommonJS (require)
    ES6 Modules (import/export)

    Syntax:
    CommonJS: const x = require('module')
    ES6: import x from 'module'

    Execution:	
    CommonJS: Synchronous (blocking)
    ES6: Asynchronous (non-blocking)

    Scope:
    CommonJS: Exports as an object
    ES6: Can export multiple named items

    Usage:
    CommonJS: Node.js (default)
    ES6: Browsers and Node.js (with bundlers)

    CommonJS is used in older Node.js versions, while ES6 modules are the modern standard.

- What are higher-order functions in JavaScript?

    ChatGPT:
    A higher-order function is a function that:
    - Takes another function as an argument, OR
    - Returns a function

    They allow for functional programming patterns like callbacks, closures, and currying.

    Example:
    function operate(fn, a, b) {
    return fn(a, b);
    }
    console.log(operate((x, y) => x + y, 5, 3)); // 8

- Explain the purpose and functionality of the map function in JavaScript. How does it differ from the filter and reduce functions?

    ChatGPT:
    The map() function creates a new array by applying a function to each element of the original array.

    Example:
    const nums = [1, 2, 3];
    const squared = nums.map(n => n * n); // [1, 4, 9]

    Differences:
    - filter(): Returns elements that meet a condition
    - reduce(): Aggregates elements into a single value

- How can the filter function be used to selectively extract elements from an array based on a given condition? Provide an example where the filter function is used to create a new array with only the elements that meet the specified criteria.

    ChatGPT:
    filter() creates a new array containing elements that satisfy a condition.

    Example: Extract even numbers:

    const numbers = [1, 2, 3, 4, 5];
    const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
    It’s useful for removing unwanted data or refining search results.

- What is the role of the reduce function in JavaScript? How can it be used to aggregate or combine the elements of an array into a single value? Provide an example where the reduce function is used to calculate a cumulative sum or find the maximum value in an array.

    ChatGPT:
    reduce() processes an array to compute a single value, such as sum, max, or aggregation.

    Example: Sum of numbers:
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
    The first argument is a callback that processes each element.

    The second argument (initial value) determines how aggregation starts.

    Other uses: Finding max, flattening arrays, and transforming data.

## Fetch

- How does a query string parameter in a URL contribute to web application functionality? Explain how query string parameters are typically used to pass data between web pages or APIs.

    ChatGPT:
    Query string parameters allow data to be passed between web pages or APIs via the URL. They appear after a ? in the URL and are formatted as key-value pairs (key=value). They are commonly used for filtering, pagination, search queries, and user preferences. For example, example.com/products?category=shoes&sort=price_asc enables dynamic content rendering without modifying the page structure.

- What is the purpose and functionality of the fetch function in JavaScript?

    ChatGPT:
    The fetch() function is used to make network requests, typically to APIs, and retrieve resources asynchronously. It provides a modern alternative to XMLHttpRequest, returning a Promise that resolves with the response data. It supports various HTTP methods (GET, POST, PUT, DELETE) and allows handling responses in JSON, text, or other formats.

- Explain the syntax of the fetch function and how it handles asynchronous operations. Compare and contrast the syntax of making HTTP requests using fetch with async/await versus the syntax using .then() and .catch(). What are the key differences and benefits of using the async/await syntax in terms of code structure and readability?

    ChatGPT:
    The fetch() function returns a Promise, meaning it handles asynchronous operations.

    Using .then() and .catch():

    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    
    Using async/await:

    async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
    }
    fetchData();

    Key Differences:
    - async/await makes code look more synchronous and easier to read.
    - .then() creates nested callbacks, which can lead to callback chaining.
    - async/await handles errors more cleanly with try...catch.

- What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed.

    ChatGPT:
    Asynchronicity allows JavaScript to execute code without blocking the main thread, enabling smooth performance in web applications. 
    
    It’s necessary for:
    - Fetching data from APIs (e.g., fetch(), XMLHttpRequest).
    - Handling user input events without freezing the UI.
    - Reading/writing files in Node.js.
    - Timers (setTimeout, setInterval).
    - WebSockets for real-time communication.

- How can you handle the response received from a fetch request?

    ChatGPT:
    Responses from fetch() need to be processed since they are Response objects. 

    Typically, you:
    - Check if the response was successful (response.ok).
    - Convert it to JSON (response.json()).
    - Handle data or errors appropriately.

    Example:

    fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

- How does the fetch function handle errors and handle HTTP status codes? Provide an example of using fetch to handle different types of responses, including successful and error responses.

    ChatGPT:
    fetch() only rejects when there’s a network failure, not on HTTP errors like 404 or 500. You must manually check response.ok and response.status.

    Example:

    async function fetchWithErrorHandling() {
    try {
        let response = await fetch('https://api.example.com/data');
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }
    fetchWithErrorHandling();

    This ensures proper error handling for both network and HTTP status-related issues.

- Explain the parts of a URL.

    ChatGPT:
    A URL (Uniform Resource Locator) consists of several parts:
    - Scheme/Protocol: (https://) Specifies how data is transferred.
    - Domain/Host: (www.example.com) Identifies the server.
    - Port (Optional): (:443 for HTTPS, :80 for HTTP) Specifies the connection port.
    - Path: (/products/shoes) Defines the resource location.
    - Query String: (?category=running&sort=price_asc) Contains parameters for filtering or searching.
    - Fragment (Optional): (#section3) Points to a specific section on the page.

## Responsive Design

- What does responsive design do? Why is it important?

    Huni:
    It helps applications, websites be viewed on any device, no matter the screen-size, or aspect-ratio.
    If the developers don't work with responsive desing, their product might appear strange, or be unusable in a radical environment. 

    ChatGPT:
    Responsive design allows websites and applications to adapt seamlessly to different screen sizes and orientations. It ensures that the layout, images, and text look good and function properly on all devices—from desktops to smartphones.
    It’s important because users access websites from a variety of devices, and poor responsiveness can lead to a bad user experience, loss of engagement, or even lost customers.

- What is a mobile-first approach?

    ChatGPT:
    A mobile-first approach means designing the layout and functionality for the smallest screen size first, then gradually enhancing it for larger screens. This strategy ensures that core features work well on mobile, and additional enhancements are layered in as screen real estate increases. It supports performance, accessibility, and clean code structure.

- How can you test the website's appearance on different screen sizes in the browser? 

    ChatGPT:
    You can test responsiveness using the DevTools in modern browsers like Chrome or Firefox.

    Press F12 or right-click → “Inspect”

    Then click the device toolbar icon (usually a small phone/tablet symbol)

    From there, you can simulate different screen sizes or select popular devices like iPhone, iPad, or Galaxy.
    You can also manually resize the browser window to test fluid behavior.

- Can you give some techniques that help to fulfill the responsive design criteria?

    ChatGPT:
    Yes, some key techniques include:
    - Flexible grid layouts using CSS Grid or Flexbox
    - Relative units like %, em, rem, or vw/vh instead of fixed pixels
    - Media queries to apply different styles at different screen widths
    - Responsive images using max-width: 100% and the srcset attribute
    - Mobile-first CSS to prioritize smaller screens and scale up

- What do media queries do? How do they work?

    ChatGPT:
    What do media queries do? How do they work?
    Media queries are CSS rules that apply styles based on conditions like screen width, height, orientation, or resolution.
    They work by checking if a device matches the specified condition. If it does, the contained styles are applied.

    Example (in CSS):

    @media (max-width: 768px) {
    .menu { flex-direction: column; }
    }

    This changes the .menu layout only when the screen is 768px wide or less.

- How would you define the Flexbox layout?

    ChatGPT:
    Flexbox (Flexible Box Layout) is a CSS layout model designed for arranging items in one dimension — either as rows or columns. It distributes space dynamically and aligns items easily, even when their sizes are unknown or change. It’s especially useful for responsive and component-based designs.

- How can you debug the Flexbox layout in the browser?

    ChatGPT:
    Using DevTools:
    - Open DevTools (F12) and select the element with display: flex
    - Go to the "Layout" panel (or "Styles" → check the "Flex" badge)
    - You can toggle flex-related properties and see live previews
    - Tools like Chrome highlight the flex container and items visually, showing spacing, alignment, and overflow issues

- What is the difference between the Flexbox container and the Flexbox item?

    ChatGPT:
    A Flexbox container is the parent element with display: flex. It defines the flex context.

    A Flexbox item is any direct child of that container.

    The container controls direction, wrapping, and alignment, while the items can be customized individually using properties like flex-grow, flex-shrink, or align-self.


## Object Oriented Javascript

- What is the difference between the class syntax and the constructor function syntax?

    ChatGPT:
    Both are used to create objects, but the class syntax is more modern and cleaner.
    - Class syntax uses the class keyword and looks more like traditional OOP in other languages.
    - Constructor functions are older and use a function with the new keyword to create instances.

    Behind the scenes, class syntax is mostly syntactic sugar over prototypes, but it's more readable and organized.

- What does the `new` keyword do?

    ChatGPT:
    The new keyword creates a new object instance from a constructor or class. 

- What does a `constructor` method do in class syntax? When is it executed? 

    ChatGPT:
    The constructor is a special method inside a class that runs automatically when a new instance is created using new.

    It’s used to initialize object properties or run setup logic.
    It gets called once per instance and can receive parameters to customize that instance.

- What are the class methods of a class syntax? 

    ChatGPT:
    Class methods are functions defined inside a class but outside the constructor.

    They define behavior that all instances of the class can use.
    They are shared via the prototype, meaning they don't get duplicated in every object instance.

    Example: greet() or calculate() methods.

- What are the fields of a class syntax?

    ChatGPT:
    Fields (also known as properties) are variables that belong to a class instance.

    They are usually defined inside the constructor using this.fieldName, but in modern syntax, they can be defined directly in the class body.

    They store the object's state—like name, age, isActive, etc.

- What is inheritance in the context of Javascript objects?

    ChatGPT:
    Inheritance allows one object (or class) to use the properties and methods of another.
    In JavaScript, it’s typically done through the prototype chain.
    It lets developers create base classes and extend them to make more specific versions without repeating code.

- What does the `extends` keyword do?

    ChatGPT:
    The extends keyword is used in class syntax to create a subclass that inherits from another class.
    It means the new class (child) gets access to the parent class's methods and properties.
    This supports code reuse and allows overriding or extending the base behavior.

## Express

- Explain the concept of client-server communication in the context of web development. How does information flow between the client and the server in a typical client-server architecture?

    Huni:
    With requests and responses - through API-s.

    ChatGPT:
    In web development, client-server communication means that the client (usually a browser) sends a request to the server, and the server processes it and sends back a response.
    The client can interact with the server through APIs, usually using the HTTP protocol, and the exchange of information typically involves formats like JSON.

- What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.

    Huni:
    header, body, method - the header contains the necessary information and the body contains the data itself

    ChatGPT:
    HTTP is the foundation of communication on the web.

    - A request is made by the client and includes a method (GET, POST, etc.), a URL, headers (with metadata), and sometimes a body (with data).

    - A response comes from the server and includes a status code, headers, and a body with the actual content or data (like HTML or JSON).
    Together, they form the basic exchange pattern between frontend and backend.

- What is Express.js and how does it simplify web application development in Node.js? Explain the core features and benefits of using Express.js as a web framework.

    ChatGPT:
    Express.js is a minimal and flexible web framework for Node.js that simplifies the process of building web applications and APIs.

    It provides an easy way to handle routing, middleware, requests, and responses.
    
    Core benefits include:
    - Simplified syntax for creating servers
    - Middleware system for extensibility
    - Easy routing
    - Support for templates and static files

- What are middlewares in Express.js? Can you list some examples of the built-in middleware?

    ChatGPT:
    Middlewares are functions that have access to the request (req), response (res), and the next() function. They run before the final route handler and can modify the request, the response, or end the cycle.
    
    Built-in examples include:
    - express.json() for parsing JSON bodies
    - express.static() for serving static files
    - express.urlencoded() for parsing URL-encoded data

- How can you tell Express.js to use a middleware?

    ChatGPT:
    You register middleware using the .use() method or by placing it directly in the route handler chain.

    Example:

    app.use(express.json());

    This tells Express to use the JSON parser for every incoming request.

- Explain the process of handling static files (e.g., CSS, images) in Express.js. How can you configure Express.js to serve static assets from a specific directory in your application?

    ChatGPT:
    To serve static files, use the built-in express.static() middleware.
    You just pass in the directory path you want to expose.

    Example:

    app.use(express.static('public'));

    Now files in the /public folder (like images or CSS) are accessible via URL.

- What does the built-in JSON middleware (`express.json()`) do?

    ChatGPT:
    express.json() is a built-in middleware that automatically parses incoming requests with JSON payloads, and makes the data available under req.body.
    It's essential when working with APIs that send data in JSON format, such as in POST or PUT requests.

- How does Express.js handle HTTP request/response cycles? Explain the process of receiving and responding to requests using Express.js middlewares and route handlers.

    ChatGPT:
    Express handles the request/response cycle by passing the request through a middleware stack, which can include parsing, authentication, logging, etc.
    Once the request reaches a matching route, the route handler processes it and sends a response using res.send(), res.json(), etc.
    Each middleware or handler can call next() to move to the next one in line.

- How does routing work in Express.js? Explain how to define routes and handle different HTTP methods (GET, POST, etc.) in an Express.js application.

    ChatGPT:
    Routing in Express defines how the server responds to different HTTP methods and paths.
    You define routes using methods like app.get(), app.post(), etc.

    Example:

    app.get('/users', (req, res) => {
    res.send('User list');
    });

    It listens for GET requests to /users and sends a response.

- What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json() in Express.js.

    ChatGPT:
    Common methods include:
    - res.send() – sends any type of data (string, object, buffer)
    - res.json() – specifically sends a JSON response and sets the correct headers
    - res.status() – sets the HTTP status code
    - res.sendFile() – sends a file from the server
    
    res.send() is more general, while res.json() is best for APIs returning structured JSON data.

- What is the purpose of the next() function in Express.js middleware? How can you use it to pass control to the next middleware function in the chain or to terminate the middleware processing?

    ChatGPT:
    The next() function is used to pass control to the next middleware in the stack.
    If you don’t call next(), the request will hang.
    It also plays a key role in error handling, where calling next(err) triggers error-handling middleware.

- Explain the concept of route parameters in Express.js. How can you extract dynamic values from the URL path using route parameters, and how are these values accessed within route handlers?

    ChatGPT:
    Route parameters let you define dynamic parts in the URL, like /users/:id.
    These values can be accessed from req.params.
    
    Example:
    
    app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
    });
    
    It’s useful for dynamic content like user profiles or product pages.

## REST and CRUD

- Can you name some typical HTTP response codes and their meaning?

    200 OK – Request was successful
    201 Created – Resource was successfully created
    400 Bad Request – Client-side error, often due to invalid data
    401 Unauthorized – Authentication is required or failed
    403 Forbidden – Access is denied even with authentication
    404 Not Found – Requested resource doesn't exist
    500 Internal Server Error – Generic server-side error

- Can you name some typical HTTP request/response headers and their meaning?

    ChatGPT:
    - Content-Type: Specifies the format of the body (e.g., application/json)
    - Authorization: Used to pass credentials or tokens
    - Accept: Tells the server what content types the client expects
    - Cache-Control: Controls caching behavior
    - User-Agent: Provides information about the client (browser/device)

- What are the common HTTP methods used in web development, and what are their respective purposes?

    - GET – Retrieve data
    - POST – Create new data
    - PUT – Replace existing data
    - PATCH – Update part of a resource
    - DELETE – Remove data 

    Each method defines the intent of the request in RESTful APIs.

- How does the GET method differ from the POST method? Explain when it is appropriate to use each method. Which one uses the request body to receive data?

    ChatGPT:
    - GET is used to fetch data, and the parameters are sent in the URL. It should not affect data on the server.
    - POST is used to submit or create data, and the data is sent in the request body.
    
    Use GET for reading, and POST for sending form data or creating resources.

- Explain the use of the PATCH method in HTTP. How does it differ from the PUT method, and when should it be used to update a resource?

    ChatGPT:
    - PATCH updates only specific fields of a resource
    - PUT replaces the entire resource

    Use PATCH when you want to make partial updates, which is more efficient and safer for small changes.

- How can the DELETE method be used to remove a resource from a server? Explain how the DELETE method works and any considerations for handling resource deletion.

    ChatGPT:
    Send a DELETE request to the URL of the resource.
    Example: DELETE /users/123 removes user with ID 123.
    Servers often respond with 204 No Content to confirm deletion.
    You might add authentication or checks to prevent accidental deletion.

- What does the REST architecture mean? What are the REST Constraints? 

    ChatGPT:
    REST (Representational State Transfer) is an architectural style for designing web APIs.
    It’s based on stateless communication, using HTTP methods and standard URIs.

    Key constraints include:
    - Client-Server separation
    - Statelessness
    - Uniform interface
    - Cacheability
    - Layered system
    - Code on demand (optional)

- What does a URL's path represent in a REST architecture? Show an example of the `recipe` resource's CRUD operations. Define the HTTP method and a corresponding path for each CRUD operation.

    ChatGPT:
    In REST, the path identifies a resource.

    CRUD for recipe:
    - Create: POST /recipes
    - Read: GET /recipes or GET /recipes/:id
    - Update: PUT /recipes/:id or PATCH /recipes/:id
    - Delete: DELETE /recipes/:id

- How do you handle form submissions using JavaScript? Explain the process of capturing form data and preventing the default form submission behavior.

    ChatGPT:
    Use the "submit" event, and call event.preventDefault() to stop default behavior.
    Then access form values using event.target.elements or FormData.
    You can send the data using fetch() or another method without refreshing the page.

- Explain the required elements necessary to define a form in HTML.

    ChatGPT:
    A form needs:
    - <form> tag
    - action attribute (where to send the data)
    - method (GET or POST)
    - One or more <input>, <select>, or <textarea> elements
    - A submit button (<button type="submit"> or <input type="submit">)

- What is the purpose of the required attribute in HTML form elements? How does it enforce mandatory input fields and prevent form submission without the required information?

    ChatGPT:
    The required attribute makes an input mandatory.
    The browser will prevent the form from submitting if the field is empty and show a validation message.

- Explain the different types of form input fields available in HTML. How do input types like text, number, email, checkbox, and radio buttons differ, and how are they used in forms?

    ChatGPT:
    - text: Free text input
    - number: Numeric input with step and range
    - email: Must be a valid email format
    - checkbox: Multiple true/false options
    - radio: Select one option from a group

    Each type has different built-in validation and behavior.

- Can you explain the purpose of the name attribute in the context of form submission?

    ChatGPT:
    The name attribute acts as the key in a key-value pair when submitting form data.
    Without it, the value of the input won’t be included in the submission.
    It’s essential for both form serialization and server-side processing.

- Can you explain how we can connect a label tag to a form element?

    ChatGPT:
    Use the for attribute on the <label> and match it to the input’s id.

    Example:

    <label for="email">Email</label>
    <input id="email" name="email" type="email">

    This improves accessibility and usability.

- How can you dynamically manipulate or modify form elements using JavaScript? Explain how to add or remove form fields dynamically based on user interaction or specific conditions.

    ChatGPT:
    You can use the DOM API to create, remove, or change inputs.
    - Use document.createElement() to add a new field
    - Use element.remove() to delete one
    - Attach event listeners to show/hide fields based on conditions
    It allows forms to adapt to user interaction.   

- How can you convert form data into a format that can be easily transmitted or processed by the server?

    ChatGPT:
    You can use the FormData object to collect and serialize form values.
    Then use fetch() or XMLHttpRequest to send it.
    Alternatively, you can use JSON.stringify() on an object built from the form values if sending JSON.

## React

- What is React.js and what are its key features? 
    
    Huni:
    It allows developers to break down complex UI into small, reusable components. Additionally, React's virtual DOM (virtual Document Object Model) – which is in simple terms a big JavaScript object – handles the states of the components and improves performance by minimizing the amount of updates that need to be made to the actual HTML DOM when a component is updated.

    Also, React uses a development server, typically started with the npm run dev command, to run the application during development. This development server is not meant to be used in production and it is not suitable for running a production-grade backend.

    The development server serves the application's frontend code, which is usually composed of React, JSX, and other frontend JavaScript files.

    ChatGPT:
    React.js is a JavaScript library for building user interfaces, especially single-page applications.

    Key features:
    - Component-based architecture for modular UI
    - Virtual DOM for performance optimization
    - JSX for writing UI using HTML-like syntax
    - Unidirectional data flow with props
    - Hooks for managing state and side effects in functional components

- Explain the concept of virtual DOM and how it contributes to React's performance.

    Huni:
    In simple terms it is a big JavaScript object - handles the states of the components and improves performance by minimizing the amount of updates that need to be made to the actual HTML DOM when a component is updated.

    ChatpGPT:
    The virtual DOM is an in-memory representation of the real DOM.
    React uses it to detect changes by comparing previous and current versions (diffing) and updates only the changed parts in the actual DOM.
    This makes updates faster and more efficient, improving performance.


- Explain the component-based architecture in React.js. How do components work, and how can they be composed to build complex user interfaces?
    
    Huni:
    We create them as files in a components folder, with the .jsx extention, name them with uppercase starting letter to differentiate them from the  

    ChatGPT:
    React apps are built using components, which are reusable and self-contained UI blocks.
    Each component can have its own state and props, and components can be nested to build complex interfaces.
    This makes code modular, easier to manage, and encourages reusability.


- What is the significance of JSX in React.js? Explain how JSX combines HTML-like syntax with JavaScript code and how it is transpiled into regular JavaScript during the build process.

    ChatGPT:
    JSX stands for JavaScript XML. It allows developers to write HTML-like syntax directly in JavaScript.
    JSX improves readability and makes UI structure easier to understand.
    It gets transpiled into regular JavaScript (e.g., React.createElement()) during the build process.

- What are props in React and how are they used to pass data between components? Explain the concept of props and how they facilitate parent-child component communication.

    ChatGPT:
    Props (short for "properties") are read-only data passed from a parent to a child component.
    They enable component communication, making components reusable and dynamic by providing them with different values.

- How can you access and utilize props within a functional component in React? Explain how to extract and use props using the destructuring syntax.

    ChatGPT:
    Props are accessed via the function parameter.
    You can use destructuring to directly extract specific props for cleaner code:

    function Greeting({ name }) { ... }

- How can you pass callback functions as props in React? Provide an example of how to pass a function from a parent component to a child component, enabling the child to communicate with the parent.

    ChatGPT:
    You define a function in the parent and pass it as a prop to the child.
    The child can then call it, often to communicate back (e.g., to notify about user actions).
    This enables two-way communication between components.

- Explain the concept of spreading props in React. How can the spread operator be used to pass multiple props from a parent component to a child component in a concise manner?

    ChatGPT:
    The spread operator (...) allows passing multiple props at once to a component.

    Useful when forwarding props or composing components:

    <MyComponent {...props} />

- Explain the concept of default props (with ES6 JS syntax) in React. How can you define default values for props in a component to handle cases where the prop value is not explicitly passed?

    ChatGPT:
    Default props provide fallback values when no prop is passed.

    With ES6, you can define them in the function parameter:

    function Button({ label = "Click Me" }) { ... }

- Explain the immutability principle when working with props and states in React. Why is it important to avoid directly modifying prop values within a component, and what are some best practices for maintaining immutability?

    ChatGPT:
    Props should never be modified inside a component—they’re read-only.
    State should be updated immutably (e.g., by copying arrays/objects before updating).
    This ensures predictable updates and prevents side effects.

- How does React.js handle state management? Explain the concept of state and how it differs from props.

    ChatGPT:
    State is used to store local, changeable data inside a component.
    Unlike props, which are external and passed in, state is internal and can be updated using the useState hook.
    When state changes, the component re-renders to reflect the new state.

- What are React hooks? Explain the purpose and benefits of hooks like useState, and useEffect in React.js.

    ChatGPT:
    Hooks are functions that let you use state and lifecycle features in functional components.

    useState: for managing local state

    useEffect: for handling side effects (e.g., API calls)
    Hooks simplify React development by avoiding class components.

- Explain the concept of virtual DOM reconciliation in React.js. How does React efficiently update and render components by performing minimal DOM manipulations?

    ChatGPT:
    Reconciliation is the process React uses to compare the new virtual DOM with the previous one.
    It diffs the trees, and updates only the parts that changed.
    This reduces direct DOM manipulation and improves performance.

- Explain how to manage complex state objects with useState. Explain techniques like object spreading or merging to update specific properties within an object state.

    ChatGPT:
    When using objects in useState, use the spread operator to preserve unchanged fields:

    setUser(prev => ({ ...prev, name: "Anna" }))
    This prevents overwriting the whole object unintentionally.

- Why is it important to provide a new array as an argument to the state setter function when adding an item to an existing array?

    ChatGPT:
    React checks for reference changes.
    Updating the same array won't trigger a re-render.
    Always create a new array copy (e.g., with spread or .concat()).

- How does conditional rendering work in React? Explain the different techniques and approaches available to conditionally render components or content based on certain conditions or state values.  How can it be used to control the visibility or behavior of components based on user interactions or other dynamic conditions?

    ChatGPT:
    You can use:
    - Ternary operators: {isLoggedIn ? <Logout /> : <Login />}
    - Logical AND: {hasItems && <ItemList />}
    - Conditional return statements
    - This helps control what gets rendered based on state or props.

- What is the difference between a controlled and uncontrolled input element in React?

    ChatGPT:
    - Controlled: React manages the value via state
    - Uncontrolled: Value is managed by the DOM (accessed via ref)

    Controlled inputs give more control and validation, but require more setup.

- How can you get the current input values from a form that contains uncontrolled input elements? 

    Huni:
    they need names and then i can get them through:
    e.elements[name].value

    (maybe iterate through them)

    ChatGPT:
    Use the ref hook (useRef) to access the input’s DOM node and get its value.

    ref.current.value

- How can you connect a label element to an input element in React? 

    ChatGPT:
    Use the htmlFor attribute on <label>, matching the input’s id:

    <label htmlFor="email">Email</label>
    <input id="email" />

- How can you create a select input element in React? How does it differ from the html's select tag? Can you show an example of a controlled and an uncontrolled select element with setting a default value?

    ChatGPT:
    Controlled version:
    - Use value and onChange
    
    Uncontrolled version:
    - Use defaultValue or access via ref
    JSX syntax is similar to HTML, but values and handlers are added in {}.


- Explain how a proxy works during React development. How can you tell the Vite dev server to proxy the requests to your backend? What kind of URLs do you have to use in the fetch in your JS code, if you want to use the proxy?

    ChatGPT:
    A proxy redirects API calls from frontend (React) to backend during development.
    In Vite, you configure it in vite.config.js.
    In your fetch calls, use relative paths like /api/users, and the proxy sends it to the actual backend server.

- What is the difference between statements and expressions in Javascript? Why is it important when working with JSX?

    ChatGPT:
    - Statements perform actions but don’t return values (e.g., if, for)
    - Expressions return values (e.g., a + b, x > 5 ? "yes" : "no")
    JSX can only embed expressions, not full statements.
    This matters when writing logic inside JSX.

## Testing Basics

- What is a test case? 

    ChatGPT:
    A test case is a single, defined scenario that checks whether a specific part of your code behaves as expected. It typically includes inputs, the expected outcome, and assertions to verify the behavior.

- What are the advantages of writing unit tests? 

    ChatGPT:
    - Helps catch bugs early
    - Improves code quality and maintainability
    - Makes refactoring safer
    - Acts as documentation for how the code should behave
    - Builds confidence during development and deployment

- What is an assertion? Give some examples.

    ChatGPT:
    - expect(result).toBe(5)
    - expect(user.isLoggedIn).toBeTruthy()
    - expect(array).toContain('item')

- What is the arrange/act/assert pattern?

    ChatGPT:
    A structure for writing clean tests:
    - Arrange: Set up test data or context
    - Act: Run the function or action being tested
    - Assert: Check the result with assertions
    
    It helps make tests more readable and consistent.

- What is code coverage? Why is it used?

    ChatGPT:
    Code coverage measures how much of your code is executed when running tests.
    It helps identify untested parts of the codebase and improve test completeness, but high coverage doesn't always guarantee good tests.

- How do you test asynchronous code with Vitest?

    ChatGPT:
    You use async/await or return a Promise.

    Example:

    it('fetches data', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
    });

- What is `setup` & `teardown` in Vitest?

    ChatGPT:
    - setup (like beforeEach) prepares the environment before a test runs.
    - teardown (like afterEach) cleans up after tests to avoid side effects.
    
    They're useful for tests that share state or dependencies.

- Give an example when you would use in Vitest's the `toBe` & `toEqual` assertions.

    ChatGPT:
    - Use toBe for comparing primitive values (e.g., numbers, strings) or checking reference equality.
    - Use toEqual for comparing objects or arrays by value.

    Example:

    expect(3).toBe(3); // primitive  
    expect({ name: 'Anna' }).toEqual({ name: 'Anna' }); // object

## Firebase Realtime Database

- What is Firebase Realtime Database? Explain the key features and advantages of the Realtime Database as a NoSQL database solution.

    ChatGPT:
    Firebase Realtime Database is a cloud-hosted NoSQL database that stores data as one large JSON object and syncs in real time across all connected clients.

    Key features:
    - Real-time data syncing
    - Offline support
    - Cross-platform (Android, iOS, Web)
    - Serverless and scalable
    - Integrated with Firebase Authentication and other Firebase services

- Explain the concept of storing data in a Realtime Database. How does a Realtime Database store data in a JSON tree?

    ChatGPT:
    Data in the Realtime Database is structured as a JSON tree.
    Every piece of data is stored as a key-value pair, and can be accessed via a path.
    This tree-like structure is flexible but requires thoughtful organization to avoid deeply nested data, which can cause performance and security issues.

- How can you access the Realtime Database with a REST API? What do the typical CRUD operations look like?

    ChatGPT:
    You can access it via a RESTful endpoint, using standard HTTP methods:
    - Create (POST) – Adds new data
    - Read (GET) – Retrieves data
    - Update (PATCH/PUT) – Modifies existing data
    - Delete (DELETE) – Removes data

    All operations require the .json extension in the URL and can include an auth token for secure access.

- How the Realtime Database Security Rules can help to define the structure of the stored data (validation) when the data can be read from or written to?

    ChatGPT:
    Security Rules are used to control read/write access and data validation.

    You can define:
    - Who can access data (using authentication checks)
    - When data can be accessed (using conditions)
    - What shape the data must have (validation rules)

    This helps enforce structure in a schema-less environment and improve security.

- Why is it a problem if the data is deeply nested? What techniques can solve this issue?

    ChatGPT:
    Deeply nested data can lead to:
    - Inefficient reads (fetching large branches when only part is needed)
    - Complex security rules
    - Difficult updates and maintenance

    Solutions:
    - Flatten the structure (use fan-out patterns)
    - Use references or keys instead of nesting full objects
    - Normalize data similarly to how it’s done in relational databases

## Firebase Authentication

- Why authentication is needed for a web application?

    ChatGPT:
    Authentication is essential to verify the identity of users accessing a web application. It ensures that only authorized individuals can access protected features or data, improving both security and user personalization.


- What are the key functionalities of an authentication system?

    ChatGPT:
    - User registration and login
    - Credential validation (e.g., email/password, token)
    - Session management (e.g., cookies or tokens)
    - Password reset/recovery
    - Optionally, multi-factor authentication (MFA)

- How does the server know that the client is successfully authenticated?

    ChatGPT:
    The server uses a token-based system, like JWT (JSON Web Token). Once authenticated, the client sends the token with each request (e.g., in headers). The server verifies the token to identify the user and validate access.

- What is the difference between Authentication and Authorization?

    ChatGPT:
    - Authentication: Confirms who the user is
    - Authorization: Defines what the user is allowed to do

    Authentication always happens before authorization.

- How can you initialize the Firebase Authentication SDK?

    ChatGPT:
    After importing Firebase and initializing your app with initializeApp(), you call getAuth() to initialize the Authentication SDK. This sets up the service that manages login, logout, and current user tracking.

- How the Firebase Realtime Database Security Rules can enforce authorization?

    ChatGPT:
    Security Rules can check the authenticated user using the auth object. For example, you can allow data access only if auth.uid === request.auth.uid, ensuring only the logged-in user can read/write their data.

- What kind of different authentication providers are supported by Firebase? Can you give some examples? 

    ChatGPT:
    Firebase supports:
    - Email/Password
    - OAuth providers (e.g., Google, Facebook, GitHub, Microsoft)
    - Phone number authentication
    - Anonymous authentication

    This allows developers to choose the most appropriate login method for their application and users.

## Web Applications

- Explain the concept of React Router. How does it enable client-side routing in React.js applications and facilitate the creation of multi-page-like experiences?

    ChatGPT:
    React Router is a library that enables client-side routing, allowing React apps to simulate multiple pages by rendering different components based on the URL path—without reloading the entire page. It provides a seamless user experience, similar to traditional multi-page websites, but with faster navigation.

- Why is it needed to `build` a React application? What does this build step do?

    ChatGPT:
    The build step optimizes your app for production. It:
    - Bundles all files (JS, CSS, etc.)
    - Minifies code (removes spaces, shortens names)
    - Transpiles modern JavaScript (like JSX) into browser-compatible code
    - Improves performance and loading speed

    The output is a set of static files ready to be deployed.

- What is the difference between local development (using a dev server, like Vite) and production deployment?

    ChatGPT:
    - Local development uses tools like Vite that support hot reloading and helpful error messages but are not optimized for speed or security.
    - Production deployment uses the built and optimized version of the app, suitable for real users on the web. It's faster and more secure.

    Gábor:
        Local: 
        - npm run dev pl.
        - fejlesztéshez
        - ha megváltoztatsz egy filet, hot reload
        - debuggolható böngészőben

        Production build:
        - a gyorsaságra hajt
        - kitelepíthető
        - npm run build
        - preview a production buildet futtatja


- How can you deploy a Firebase application?

    ChatGPT:
    You deploy with the Firebase CLI:
    1. Run firebase init to set up hosting
    2. Run npm run build to create the production version
    3. Use firebase deploy to upload your files to Firebase Hosting

    Firebase handles SSL, caching, and CDN out of the box.

- What are React Contexts? Which use cases are they suitable for?

    ChatGPT:
    React Context is a way to share state or values globally across a component tree—without "prop drilling".
    
    It’s best used for global data like:
    - Auth state (logged-in user)
    - Theme (light/dark mode)
    - Language preferences

    It simplifies state management in medium-sized apps.





## CSINÁLTAM ERRE AMODULRA IS EGY QUIZT!

- A régi modulos megjelenítést használtam apró módosításokkal, hogy telefonon is lehessen használni.
Link: https://hunisaurus.github.io/PAquiz/