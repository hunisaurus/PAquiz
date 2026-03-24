# Advanced Java

## Web development

- What is an API?
  An API (Application Programming Interface) is a contract that defines how different software systems communicate.
  It exposes functionality or data in a controlled way so other programs can use it without knowing internal implementation details.

- What is a REST?
  REST (Representational State Transfer) is an architectural style for building APIs.

  Key ideas:
  - Uses standard HTTP
  - Works with resources (users, posts, orders)
  - Each resource has a unique URL
  - Uses HTTP methods (GET, POST, etc.)
  - Is stateless (server doesn’t remember client state between requests)

  REST makes APIs simple, predictable, and scalable.

- What is a cookie?
  A cookie is a small piece of data stored in the browser by a server.

  It’s mainly used to:
  - keep users logged in
  - store session IDs
  - remember preferences

  Because HTTP is stateless, cookies help servers recognize returning clients.

- Describe the HTTP protocol and its methods.
  HTTP is a request–response protocol used for communication between client and server.

  Common methods:
  - GET → retrieve data
  - POST → create data
  - PUT → replace data
  - PATCH → update part of data
  - DELETE → remove data

  Each request contains headers + optional body, and receives a response with a status code (200, 404, etc.).

- How do you identify unique resources on the web?
  Using URLs (Uniform Resource Locator) / URIs (Uniform Resource Identifier).

  Each resource (like a user or product) gets its own unique address, for example:
  - /users/42
  - /products/7

  This is fundamental to REST design.

- What are the main frontend languages on the web? Describe them briefly.
  - HTML
    Defines structure and content.

  - CSS
    Controls layout, colors, and visual appearance.

  - JavaScript
    Adds behavior and interactivity (logic, events, API calls).

  Together they form the core of frontend development.

- What is JSON?
  JSON (JavaScript Object Notation) is a lightweight text format for exchanging data.

  It’s:
  - human-readable
  - language-independent
  - commonly used in APIs

  Most web servers send and receive JSON.

- What operations are fundamental to most data-driven applications?
  The classic CRUD operations:
  - Create
  - Read
  - Update
  - Delete

  Nearly every application revolves around these.

- Briefly describe at least two communication technologies that enable a server to push data to a client in a web application.
  - WebSockets
    Creates a persistent connection allowing real-time, two-way communication (chat, games, live updates).
  - Server-Sent Events (SSE)
    Allows server to push updates one-way to clients (notifications, live feeds).

  Both avoid constant polling and enable real-time behavior.

## Spring and Spring Boot

- What is Spring Framework and what are its core features?
  Spring is a Java application framework that helps build enterprise applications in a modular, testable way.

  Core ideas:
  - Dependency Injection
  - Inversion of Control
  - Aspect-Oriented Programming (AOP)
  - Transaction management
  - MVC for web apps

  Its main goal: reduce coupling and boilerplate while improving structure.

- Explain the main differences between Spring and Spring Boot.
  Spring:
  “a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application. Spring enables you to build applications from “plain old Java objects” (POJOs) and to apply enterprise services non-invasively to POJOs.”
  - Requires manual configuration
  - XML / Java config needed
  - You wire many things yourself

  Spring Boot:
  - Built on top of Spring
  - Auto-configures components
  - Embedded servers (no external Tomcat)
  - Opinionated defaults
  - Much faster project setup

  Think:
  - Spring → toolkit
  - Spring Boot → ready-to-run platform

- How does Spring Boot simplify the configuration of Spring applications?
  Spring Boot:
  - Automatically configures beans based on dependencies
  - Provides starter packages
  - Uses sensible defaults
  - Eliminates most XML
  - Offers application.properties / yaml for central config

  You focus on business logic, not plumbing.

- What is a dependency injection (DI) and how does Spring support it?
  DI means:
  Objects don’t create their dependencies themselves — they receive them from outside.

  Benefits:
  - loose coupling
  - easier testing
  - better modularity

  Spring supports DI via:
  - constructor injection
  - field injection
  - setter injection

  Spring’s container manages object creation and wiring.

- How can you define a bean in Spring? Provide examples.
  Conceptually, you can define beans by:
  - annotating classes (component scanning)
  - defining them in configuration classes
  - declaring them manually

  Spring then manages their lifecycle.

  Key idea:
  A bean is simply an object managed by Spring.

- What is inversion of control (IoC) and how is it implemented in Spring?
  IoC means:
  You don’t control object creation — Spring does.

  Instead of:
  “I create my dependencies”

  You say:
  “Spring gives me what I need.”

  Spring implements IoC through its ApplicationContext container.

- What is a RESTful API, and how can you develop a Web API using Spring Boot?
  A RESTful API:
  - exposes resources via URLs
  - uses HTTP methods (GET, POST, PUT, DELETE)
  - is stateless
  - typically uses JSON

  Spring Boot makes REST APIs easy by providing:
  - REST controllers
  - automatic JSON serialization
  - embedded servers
  - request mapping

  You mainly define endpoints and logic.

- How do you handle HTTP requests in Spring MVC? Give an example.
  Spring MVC uses:
  - Controllers to receive requests
  - Mappings to connect URLs to methods
  - Automatic conversion between JSON and objects

  Flow:
  Client → Controller → Service → Repository → Response

  MVC separates concerns clearly.

## Entity Relationships, ORM, Spring Data

- What is ORM (Object Relational Mapping)? What are the benefits, when to use?
  ORM (Object-Relational Mapping) allows you to map objects to database records and classes to database tables.
  Instead of writing SQL, you work with objects.

  It provides advantages such as:
  - Productivity: Reduces boilerplate code by automating SQL generation.
  - Maintainability: Keeps the database interaction logic separated from business logic.
  - Portability: Provides a layer of abstraction over different relational databases.

  Benefits:
  - less boilerplate SQL
  - database abstraction
  - faster development
  - easier refactoring
  - type safety

  When to use:
  - typical CRUD applications
  - domain-driven designs
  - when productivity matters more than micro-optimizing SQL

  Avoid ORM for:
  - extremely performance-critical queries
  - complex reporting

- What is JPA?
  Jakarta Persistence API (formerly known as Java Persistence API) is a specification that defines a set of standards for object-relational mapping in Java. Its purpose is to standardize how Java objects are persisted to relational databases.

  Key Concepts:
  - Entities: Classes annotated with @Entity that map to database tables.
  - Entity Manager: The primary interface used to interact with the persistence context.
  - Persistence Unit: A set of all entity classes that are managed by EntityManager in an application.

  It does NOT implement anything.
  Hibernate is the most common JPA implementation.

- What is the difference between JPA and Spring Data JPA?
  - JPA → standard specification
  - Spring Data JPA → Spring abstraction on top of JPA

  Spring Data JPA:
  - auto-generates repositories
  - removes boilerplate
  - provides query methods

  Think:
  - JPA = rules
  - Spring Data JPA = productivity layer

- What is the difference between Hibernate ORM and Spring Data JPA?
  Hibernate ORM:
  - actual ORM engine
  - implements JPA
  - talks to the database

  Spring Data JPA:
  - does NOT persist data itself
  - sits above Hibernate
  - generates repositories and queries

  Stack looks like:
  - Spring Data JPA → Hibernate → Database

- How can you configure database connection properties in a Spring Boot application?
  Via configuration files:
  - URL
  - username
  - password
  - driver
  - dialect

  Spring Boot auto-detects everything once these are provided.
  No manual DataSource setup needed.

- Explain the concept of cardinality in entity relationships. How does it impact the design and mapping of entities?
  Cardinality defines how many entities relate to how many others:
  - One-to-One
  - One-to-Many
  - Many-to-One
  - Many-to-Many

  It impacts:
  - table structure
  - foreign keys
  - join tables
  - performance

  Good cardinality design avoids:
  - unnecessary joins
  - duplicated data
  - circular dependencies

- How to create a custom repository in Spring Data JPA?
  Conceptually:
  - extend base repository
  - define custom methods
  - optionally provide your own implementation

  Used when:
  - queries are too complex for derived methods
  - performance tuning is needed
  - business-specific queries exist

- What is the difference between FetchType.Eager and FetchType.Lazy?
  FetchType.EAGER
  - Related data is loaded immediately with the parent entity.
  - Happens automatically in the same query or additional queries.
  - Simpler to access, but can hurt performance.
  - Can cause unnecessary joins and N+1 problems.

  FetchType.LAZY
  - Related data is loaded only when accessed.
  - Improves performance by avoiding unnecessary queries.
  - Requires an active persistence context (transaction).
  - Preferred in most cases.

## Spring Security

- What are some essential features of Spring Security?

* Authentication and authorization
  - Role-based access control
  - Password encoding
  - CSRF protection
  - Security filter chain
  - Integration with JWT and OAuth2

  It secures both web endpoints and methods.

- How can you secure a Spring Boot application using Spring Security?
  - Add Spring Security dependency
  - Configure authentication (in-memory, database, JWT, etc.)
  - Define authorization rules for endpoints
  - Configure password encoding

  Spring Boot auto-configures basic security by default.

- Explain how the security filter chain works.
  Every HTTP request passes through a chain of security filters before reaching the controller.

  Filters handle:
  - Authentication
  - Authorization
  - CSRF checks
  - Session management

  If a request fails any filter, it’s rejected before hitting business logic.

- What is JWT (JSON Web Token), and how can you use it for authentication?
  JWT (JSON Web Token) is a compact, signed token that contains user information.

  Flow:
  1. User logs in
  2. Server generates JWT
  3. Client sends JWT in Authorization header
  4. Server validates token on each request

  It enables stateless authentication.

- Explain the concept of authentication and authorization in Spring Security.
  Authentication → Who are you?
  Authorization → What are you allowed to do?

  Authentication verifies identity.
  Authorization checks permissions.

- How can you implement method-level security using annotations in Spring?
  You can use annotations on methods to restrict access based on roles or permissions.
  This allows fine-grained security at the service layer, not just at endpoint level.

## Integration testing

- What is integration testing, and how does it differ from unit testing?
  - Integration test: tests multiple components working together (e.g. controller + service + DB)
  - Unit test: tests one class in isolation (usually with mocks)

- How can you configure and set up integration tests in a Spring Boot project?
    You set up integration tests by loading the full Spring context, so your components work together like in a real app.

    - Use @SpringBootTest
    → starts the whole application (beans, config, etc.)

    - Optionally add @AutoConfigureMockMvc
    → lets you test HTTP endpoints without starting a real server

    - Use @ActiveProfiles("test")
    → loads a separate config (e.g. test database)

    - Place tests under src/test/java
    → same package structure as your app

    - Use an embedded database (like H2)
    → avoids using real production DB

    👉 Key idea:
    You’re not mocking everything — you’re testing how real parts work together (controller → service → repository → DB).

- How do you perform an HTTP request in an integration test for a Spring Boot application?
  - Use MockMvc or TestRestTemplate
  - Simulate real HTTP calls (GET, POST, etc.)

- How can you mock dependencies or external services in Spring Boot integration tests?
  - Use @MockBean
  - Replaces real beans in the Spring context

- How do you configure an embedded H2 database for integration testing in Spring Boot?
    - Add H2 dependency
    - Use application-test.properties
    - Configure in-memory DB (URL, driver, etc.)
    - Often used with @ActiveProfiles("test")

## DevOps

- What is CI/CD (Continuous Integration/Continuous Deployment), and what are its benefits?
    - CI (Continuous Integration): frequently merge code + run tests automatically
    - CD (Continuous Deployment/Delivery): automatically build and deploy app

    Benefits:
    - Faster releases
    - Early bug detection
    - More reliable deployments

- What is Docker and Docker Compose?
    - Docker: tool to package an app + dependencies into a container
    - Docker Compose: runs multiple containers together (e.g. app + DB)

- Explain the difference between an image and a container in Docker.
    - Image: blueprint (read-only template)
    - Container: running instance of an image

    👉 Image = class, Container = object (good analogy)

- What is a Dockerfile?
    - A file with instructions to build a Docker image
    - Defines base image, dependencies, commands, etc.

- How can you set up a basic CI/CD pipeline for a Spring Boot application?
    High-level steps:
    - Push code to Git repo
    - CI tool (e.g. GitHub Actions) runs:
        - build (mvn clean install)
        - tests
    - Build Docker image
    - Deploy (e.g. server or cloud)

    👉 Key idea: automate build → test → deploy

## Bonus Questions

- What is a parent POM, and why do we use it?
- What annotation do we use to indicate that a class contains methods that are responsible for handling HTTP requests, and they return a response formatted as JSON?
- In these classes, how can you specify the HTTP method that a method handles?
- Assume that one of these methods returns a list of objects. How would you ensure that the response is formatted as JSON? Are there any annotations or configurations required?
- What is the purpose of the SpringBootApplication annotation, and where is it typically used in a Spring Boot application?
- How can we handle a request with one or multiple query parameters in a controller method in a Spring Boot Web Application?
- How can we make a parameter required?
- How can we make a parameter optional?
- What are the advantages of using Spring Data JPA?
  - Eliminates boilerplate CRUD code
  - Auto-generates queries from method names
  - Integrates seamlessly with Spring
  - Provides pagination and sorting
  - Abstracts Hibernate/JPA details

  In short: faster development with cleaner repositories.
  These features come out of the box, which is great for APIs.

- List at least three JPA annotations, and explain what they are used for!
  @Entity
  Marks a class as a database table.

  @Id
  Defines the primary key of the entity.

  @OneToMany / @ManyToOne6
  Defines relationships between entities.

  (Bonus)
  @GeneratedValue → auto ID generation
  @Column → customize column mapping
