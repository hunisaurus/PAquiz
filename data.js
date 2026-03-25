
const baseData = [
  {
    category: "Java Ecosystem",
    question: "What is the JVM?",
    answers: [
      {
        name: "Huni",
        answer:
          "Java Virtual Machine, it runs Java bytecode on any platform.\n        Example: java MyProgram runs inside the JVM.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "What does Java compilation mean?",
    answers: [
      {
        name: "Huni",
        answer:
          "Translating Java source code into bytecode.\n        Example: javac MyProgram.java → MyProgram.class.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "What is Java bytecode?",
    answers: [
      {
        name: "Huni",
        answer:
          "Platform-independent instructions executed by the JVM.\n        Example: .class files contain bytecode.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "What is the difference between the JRE and the JDK?",
    answers: [
      {
        name: "Huni",
        answer:
          'JRE (Java Runtime Environment): This is the "power outlet." For running Java programs.\n    JDK (Java Development Kit): This is the full "toolbox." For developing apps, compiling source.',
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "What is the `Iterable` interface?",
    answers: [
      {
        name: "Huni",
        answer:
          "Iterable represents something that can be looped over with a for-each loop. \n    It defines the iterator() method.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "What is the `Collection` interface?",
    answers: [
      {
        name: "Huni",
        answer:
          "Collection is the root interface for most data structures like lists, sets, and queues. \n    It provides basic operations like add, remove, size, and contains.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "What is the `Map` interface?",
    answers: [
      {
        name: "Huni",
        answer:
          "Map stores key–value pairs. \n    Each key is unique and maps to exactly one value.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "Compare sets, lists, and queues in Java.",
    answers: [
      {
        name: "Huni",
        answer:
          "List:   Ordered collection, allows duplicates, elements are indexed.\n    Set:    No duplicates, order is not guaranteed.\n    Queue:  Processes elements in a particular order, usually FIFO (first in, first out).\n\n    Use a List when order and indexing matter.\n    Use a Set when you must avoid duplicates.\n    Use a Queue when processing in sequence or scheduling tasks.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "Compare `ArrayList` and `LinkedList` in Java.",
    answers: [
      {
        name: "Huni",
        answer:
          "ArrayList: (implements List interface) Fast random access, slow insert/delete in the middle.\n    LinkedList: (implements List and Deque interfaces) Slow random access, faster insert/delete in the middle.\n\n    ArrayList is better when you read data often.\n    LinkedList is better when you insert/remove in the middle often.\n\n    But in real practice, ArrayList is used much more often because:\n        - Random access is very common.\n        - Modern processors handle array operations efficiently.",
      },
    ],
  },
  {
    category: "Java Ecosystem",
    question: "Are sets sorted in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "Not by default.\n        HashSet         → not sorted.\n        LinkedHashSet   → preserves insertion order.\n        TreeSet         → sorted automatically.",
      },
    ],
  },
  {
    category: "Language Features",
    question: "What control statements are available in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "if, else, switch, loops (for, while, do-while), break, continue.\n        Example: if(x > 5) { ... }.",
      },
    ],
  },
  {
    category: "Language Features",
    question: "Compare the different looping constructs in Java.",
    answers: [
      {
        name: "Huni",
        answer:
          "for: fixed iterations           → for   (int i=0;i<5;i++)\n    while: repeats while condition  → while (x<5)\n    do-while: runs at least once    → do { } while(x<5)",
      },
    ],
  },
  {
    category: "Language Features",
    question: "Compare the different conditional constructs in Java.",
    answers: [
      {
        name: "Huni",
        answer:
          "if-else: checks boolean → if(a>b) ... else ....\n    switch: multiple values → switch(day) { case 1: ... }",
      },
    ],
  },
  {
    category: "Language Features",
    question: "What is a `while` loop?",
    answers: [
      {
        name: "Huni",
        answer:
          "Loop that runs while a condition is true.\n        Example: while(count < 10) count++;",
      },
    ],
  },
  {
    category: "Language Features",
    question: "How do you manually break out of a loop?",
    answers: [
      {
        name: "Huni",
        answer: "Use break.\n        Example: if(x==5) break;",
      },
    ],
  },
  {
    category: "Language Features",
    question: "What does the `var` keyword mean?",
    answers: [
      {
        name: "Huni",
        answer:
          "var allows local variable type inference. The compiler figures out the variable’s type from the value assigned to it.\n    It does not make Java dynamically typed — the type is still fixed at compile time.\n\n    Example:\n        var x = 5; // x is an int",
      },
    ],
  },
  {
    category: "Language Features",
    question:
      "What are lambda expressions? How are they used in Java development?",
    answers: [
      {
        name: "Huni",
        answer:
          'Lambda expressions are short functions written inline without defining a full method.\n    They are mainly used to make code more concise when working with functional interfaces, especially in streams and collections.\n\n    Example:\n        numbers.forEach(n -> System.out.println(n));\n\n    Use cases:\n        - Passing behavior as a parameter\n        - Stream operations (filter, map, reduce)\n        - Simplifying callback or event code\n\n        + Method reference: \n            In Java, :: is called the method reference operator. \n            It’s used in lambda expressions to refer to a method by name instead of writing a full lambda.\n\n            Example:\n                List<String> names = List.of("Alice", "Bob");\n                names.forEach(System.out::println); (References a static method)',
      },
    ],
  },
  {
    category: "Type System",
    question: "What are primitive types in Java? Give some examples.",
    answers: [
      {
        name: "Huni",
        answer:
          "Basic data types.\n        Example: int x=10; double pi=3.14; boolean flag=true; char c='A';",
      },
    ],
  },
  {
    category: "Type System",
    question:
      "What is the difference between primitive types and reference types?",
    answers: [
      {
        name: "Huni",
        answer:
          'Primitives store values directly; references store addresses.\n        Example: int a=5; String s="Hi";',
      },
    ],
  },
  {
    category: "Type System",
    question: "What is a class in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "A blueprint for objects.\n        Example: class Car { String model; }",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is an object in Java?",
    answers: [
      {
        name: "Huni",
        answer: "An instance of a class.\n        Example: Car c = new Car();",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is a constructor?",
    answers: [
      {
        name: "Huni",
        answer:
          "In Java, the constructor is a special type of method defined within the class, used to initialize fields when an instance of the class is created. The name of the constructor method must be the same as the class itself.\n\n    A special method to initialize objects.\n        Example: Car(String m){ model = m; }.",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is an enum in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "An enum is a special type that represents a fixed set of constant values.",
      },
    ],
  },
  {
    category: "Type System",
    question: "Explain the difference between a class and an enum.",
    answers: [
      {
        name: "Huni",
        answer:
          "A class can create many different objects with varying values, \n    while an enum only defines a limited set of predefined constant instances.",
      },
    ],
  },
  {
    category: "Type System",
    question: "Explain the difference between a class and a record.",
    answers: [
      {
        name: "Huni",
        answer:
          "A class can have flexible behavior and fields, \n    whereas a record is a compact class meant to store data with automatic getters, equals(), hashCode(), and toString().",
      },
    ],
  },
  {
    category: "Type System",
    question: "What are interfaces? Why should we use them?",
    answers: [
      {
        name: "Huni",
        answer:
          "Interfaces define method signatures without implementation. \n    They are used to achieve abstraction and allow different classes to follow the same contract.",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is inheritance?",
    answers: [
      {
        name: "Huni",
        answer:
          "Inheritance is an object-oriented concept where one class (child/subclass) \nautomatically receives the fields and methods of another class (parent/superclass).\n\nIt allows code reuse and creates a natural hierarchy between classes.",
      },
    ],
  },
  {
    category: "Type System",
    question: "Is multiple inheritance allowed in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "Classes cannot inherit from multiple classes, but they can implement multiple interfaces.",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is a static class member?",
    answers: [
      {
        name: "Huni",
        answer:
          "It is a field or method that belongs to the class itself, not to individual objects.",
      },
    ],
  },
  {
    category: "Type System",
    question: "Can a static method use non-static members?",
    answers: [
      {
        name: "Huni",
        answer:
          "No, because static methods do not have access to a specific object instance.",
      },
    ],
  },
  {
    category: "Type System",
    question: "What does the final keyword mean in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "Can’t be changed/overridden/extended.\n    When it is a reference type only thje reference cannort be changed, the values it holds can!\n        Example: private final int x=10;",
      },
    ],
  },
  {
    category: "Type System",
    question: "What does the abstract keyword mean in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "Class/method that must be completed in a subclass.\n        Example: abstract class Animal { abstract void sound(); }",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is overloading in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "Defining multiple methods with the same name but different parameters.\n        Example:\n        int add(int a, int b)  \n        double add(double a, double b)",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is overriding in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          'Redefining a method from a superclass in a subclass with the same signature.\n        Example:\n        class Animal { void sound() { } }  \n        class Dog extends Animal { void sound() { System.out.println("Bark"); } }',
      },
    ],
  },
  {
    category: "Type System",
    question: "What is the difference between overloading and overriding?",
    answers: [
      {
        name: "Huni",
        answer:
          "Overloading:    same method name, different parameters, in the same class.\n    Overriding:     same method signature, different implementation, in subclass.\n\n        Example difference:\n        Overloading → print(int x) vs print(String s)\n        Overriding → Parent’s print() replaced by Child’s print()",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is null?",
    answers: [
      {
        name: "Huni",
        answer:
          "A literal meaning no object reference.\n        Example: String s = null;",
      },
    ],
  },
  {
    category: "Type System",
    question: "Compare the access modifiers in Java.",
    answers: [
      {
        name: "Huni",
        answer:
          "public:     visible everywhere → public class A {}\n    private:    only in class → private String name;\n    protected:  visible in package + subclasses → protected int x;\n    default (package-private): only in package → int y;",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is the default access modifier in a class?",
    answers: [
      {
        name: "Huni",
        answer: "Package-private.\n        Example: class Dog {} (no modifier)",
      },
    ],
  },
  {
    category: "Type System",
    question: "What is the purpose of the equals() method?",
    answers: [
      {
        name: "Huni",
        answer:
          'Checks if objects are logically equal.\n        Example: "hi".equals("hi") // true',
      },
    ],
  },
  {
    category: "Type System",
    question: "What is the difference between == and equals()?",
    answers: [
      {
        name: "Huni",
        answer:
          '== compares references, equals() compares content.\n        Example:\n        new String("hi") == new String("hi") // false\n        new String("hi").equals("hi")        // true.',
      },
    ],
  },
  {
    category: "Type System",
    question: "What is the difference between long and Long?",
    answers: [
      {
        name: "Huni",
        answer:
          "long is a primitive type.\n    Long is the wrapper class (an object) for long, which can be null and provides useful methods.",
      },
    ],
  },
  {
    category: "Type System",
    question: "Which can store bigger numbers, long or Long?",
    answers: [
      {
        name: "Huni",
        answer:
          "They store the same numeric range (-2^63 to 2^63-1). \n    The difference is not size, but that Long can be used as an object.",
      },
    ],
  },
  {
    category: "Type System",
    question:
      "What kind of packages do you know under java.util.* ? Bring at least 3 examples.",
    answers: [
      {
        name: "Huni",
        answer:
          "Examples from java.util:\n        ArrayList → resizable list.\n        HashMap → key–value pairs.\n        HashSet → unique elements.\n        Date / Calendar → date and time utilities.\n\n        Example:\n            ArrayList<String> list = new ArrayList<>();\n            HashMap<Integer,String> map = new HashMap<>();\n            HashSet<Integer> set = new HashSet<>();",
      },
    ],
  },
  {
    category: "Architecture",
    question: "Explain the Single Responsibility Principle.",
    answers: [
      {
        name: "Huni",
        answer:
          "SRP is a software-design guideline that states a class or function should have only one reason to change.\nThis means it should have a single, well-defined responsibility.\nFor example, a class that handles saving a user to a database should be separate from a class that sends email notifications to that user.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "Explain the Interface Segregation Principle.",
    answers: [
      {
        name: "Huni",
        answer:
          "Short: Classes should not be forced to implement interfaces they don’t use.\n\nDefinition:\nNo client should be forced to depend on methods it does not use.\nIt’s better to have many small, focused interfaces than one large one.\n\nWhy:\nLarge interfaces make classes implement useless or meaningless methods.\n\nExample:\nInstead of one Animal interface with fly(), run(), swim(), split into:\n- Flyable\n- Runnable\n- Swimmable\nSo each animal only implements what it needs.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What is composition over inheritance?",
    answers: [
      {
        name: "Huni",
        answer:
          "Prefer building objects by combining other objects (has-a) rather than extending classes (is-a), to keep code more flexible and less tightly coupled.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What is a model class?",
    answers: [
      {
        name: "Huni",
        answer:
          "A class that represents data in the application, usually just fields with getters/setters (e.g., User, Order).",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What is a service class?",
    answers: [
      {
        name: "Huni",
        answer:
          "A class that contains business logic or operations that act on model data.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "Explain the Open/Closed Principle.",
    answers: [
      {
        name: "Huni",
        answer:
          "Short: Classes should be open for extension but closed for modification, meaning behavior can be added without changing existing code.\n\nDefinition:\nClasses should be open for extension (we can add new behavior), but closed for modification (we don’t need to edit existing code to add it).\n\nWhy:\nIf you change existing code often, you risk breaking features that already work.\n\nExample:\nInstead of modifying a method to handle new cases, use polymorphism (add new subclasses or strategies).",
      },
    ],
  },
  {
    category: "Architecture",
    question: "Explain the Liskov Substitution Principle.",
    answers: [
      {
        name: "Huni",
        answer:
          "Short: A subclass should be able to replace its parent class without breaking the program’s behavior.\n\nDefinition:\nAny subclass should be usable in place of its parent class without changing the program’s behavior.\n\nMeaning:\nA subclass must not:\n- Remove behavior that the parent promised\n- Add unexpected side-effects or new rules\n\nExample:\nIf Bird has fly(), then Penguin should not extend Bird because it cannot fly — that breaks LSP.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "Explain the Dependency Inversion Principle.",
    answers: [
      {
        name: "Huni",
        answer:
          "Short: High-level code should depend on abstractions (interfaces), not on concrete implementations.\n\nDefinition:\nHigh-level modules should depend on abstractions, not concrete implementations.\n\nMeaning:\nClasses should talk to interfaces, not to specific classes.\n\nWhy:\nThis reduces coupling and makes code easier to replace, test, and modify.\n\nExample:\nInstead of: Car car = new Car();\nUse: Vehicle car = new Car();\n\nNow you can replace Car() with Bike() without changing the dependent code.",
      },
    ],
  },
  {
    category: "Architecture",
    question:
      "What do we mean by the Gang of Four (GoF) Design Patterns? Can you name some of these patterns?",
    answers: [
      {
        name: "Huni",
        answer:
          "They are classic, well-known design patterns from the Design Patterns book by four authors.\n\nExamples: Singleton, Factory, Strategy, Observer, Decorator.",
      },
    ],
  },
  {
    category: "Architecture",
    question:
      "What are the risks associated with using the GoF design patterns?",
    answers: [
      {
        name: "Huni",
        answer:
          "They can make code overly complex or abstract if used where they aren’t needed.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What do we mean by YAGNI?",
    answers: [
      {
        name: "Huni",
        answer:
          "“You Aren’t Gonna Need It” — don’t add features until they are needed.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What do we mean by SLAP?",
    answers: [
      {
        name: "Huni",
        answer:
          "Single Level of Abstraction Principle — methods should operate at one logical level to stay clear and understandable.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What do we mean by KISS?",
    answers: [
      {
        name: "Huni",
        answer:
          "“Keep It Simple, Stupid” — simpler solutions are usually better and easier to maintain.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What is the Repository Pattern?",
    answers: [
      {
        name: "Huni",
        answer:
          "A layer that manages data access, providing methods to retrieve, update, and store model objects.",
      },
    ],
  },
  {
    category: "Architecture",
    question: "What is a CRUD interface?",
    answers: [
      {
        name: "Huni",
        answer:
          "An interface that defines methods for basic data operations: Create, Read, Update, Delete.",
      },
    ],
  },
  {
    category: "Unit Testing",
    question: "Why is unit testing a good practice?",
    answers: [
      {
        name: "Huni",
        answer:
          "1. It catches bugs early – you find problems before running the whole program.\n2. It ensures code correctness – you can verify each method does what it should.\n3. It makes changes safer – if you break something, tests will fail and alert you.\n4. It improves design – writing tests encourages smaller, cleaner, more modular code.\n5. It helps documentation – tests show how the code is meant to be used.\n6. It saves time later – fewer debugging sessions and easier maintenance.\n\nIn short: unit tests make your code more reliable, maintainable, and easier to improve.",
      },
    ],
  },
  {
    category: "Unit Testing",
    question: "What is JUnit?",
    answers: [
      {
        name: "Huni",
        answer:
          "JUnit is a unit testing framework for most languages on JVM (Java, Kotlin, Groovy).",
      },
    ],
  },
  {
    category: "Unit Testing",
    question: "What is a parameterized test?",
    answers: [
      {
        name: "Huni",
        answer:
          "A test method that runs multiple times with different input values, allowing you to check the same logic under various scenarios.",
      },
    ],
  },
  {
    category: "Unit Testing",
    question:
      "What options do you have in NUnit to create parameterized tests?",
    answers: [
      {
        name: "Huni",
        answer:
          "[TestCase] → pass specific values directly.\n[TestCaseSource] → use a method, property, or field as a data source.\n[ValueSource] → provide values for a single parameter.\n[Range] → generate numeric sequences for testing.",
      },
    ],
  },
  {
    category: "Unit Testing",
    question: "What is mocking?",
    answers: [
      {
        name: "Huni",
        answer:
          "Creating a fake version of a dependency to isolate a unit of code during testing, often verifying how it was used.",
      },
    ],
  },
  {
    category: "Unit Testing",
    question: "What is the difference between mocking, stubbing and faking?",
    answers: [
      {
        name: "Huni",
        answer:
          "Stubbing: Provides fixed return values for methods.\nMocking: Simulates behavior and can verify interactions (e.g., method calls).\nFaking: Provides a simplified working implementation that behaves like the real system but is easier/faster for tests.",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "What are relational databases? What are their advantages and disadvantages?",
    answers: [
      {
        name: "Huni",
        answer:
          "Relational databases store data in tables with rows and columns, and relationships between them.\n\nAdvantages: strong structure, data integrity, easy querying with SQL.\nDisadvantages: less flexible for unstructured data, can be slower at very large scale.",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "How do you associate entities to each other in a relational database model?",
    answers: [
      {
        name: "Huni",
        answer:
          "By using primary keys and foreign keys to link rows in different tables.",
      },
    ],
  },
  {
    category: "Databases",
    question: "What are tables in a relational database?",
    answers: [
      {
        name: "Huni",
        answer:
          "Tables are structures that store data in rows (records) and columns (fields).",
      },
    ],
  },
  {
    category: "Databases",
    question: "What is a primary key?",
    answers: [
      {
        name: "Huni",
        answer:
          "A primary key uniquely identifies each row in a table. It cannot be null or duplicated.",
      },
    ],
  },
  {
    category: "Databases",
    question: "What is a foreign key?",
    answers: [
      {
        name: "Huni",
        answer:
          "A foreign key is a field in one table that refers to a primary key in another table, creating a relationship.",
      },
    ],
  },
  {
    category: "Databases",
    question: "What does the SQL abbreviation stand for?",
    answers: [
      {
        name: "Huni",
        answer: "SQL = Structured Query Language.",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "What are some of the SQL database providers that you’ve heard of?",
    answers: [
      {
        name: "Huni",
        answer:
          "MySQL, PostgreSQL, SQLite, MariaDB, Oracle, Microsoft SQL Server.",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "What are SQL data types? Are there any differences in data types between different SQL databases?",
    answers: [
      {
        name: "Huni",
        answer:
          "SQL data types define what kind of values a column can hold (e.g., INT, VARCHAR, DATE).\n\nThe difference is: exact names and size limits can differ between SQL databases.",
      },
    ],
  },
  {
    category: "Databases",
    question: "What are constraints in SQL?",
    answers: [
      {
        name: "Huni",
        answer:
          "Rules applied to columns to enforce data integrity, such as PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, and CHECK.",
      },
    ],
  },
  {
    category: "Databases",
    question: "How can we program different SQL databases in Java?",
    answers: [
      {
        name: "Huni",
        answer:
          "Using JDBC (Java Database Connectivity) or ORM frameworks like Hibernate / JPA.",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "Which SQL statement is used to create tables? Describe the syntax briefly.",
    answers: [
      {
        name: "Huni",
        answer:
          "CREATE TABLE table_name (\n    column_name data_type constraint,\n    ...\n);",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "Which SQL statement can be used to insert values? Describe the syntax briefly.",
    answers: [
      {
        name: "Huni",
        answer:
          "INSERT INTO table_name (column1, column2)\nVALUES (value1, value2);",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "Which SQL statement can be used to update values? Describe the syntax briefly.",
    answers: [
      {
        name: "Huni",
        answer: "UPDATE table_name\nSET column = value\nWHERE condition;",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "Which SQL statement can be used to delete rows? Describe the syntax briefly.",
    answers: [
      {
        name: "Huni",
        answer: "DELETE FROM table_name\nWHERE condition;",
      },
    ],
  },
  {
    category: "Databases",
    question:
      "Which SQL statement can be used to create queries? Describe the syntax briefly.",
    answers: [
      {
        name: "Huni",
        answer: "SELECT column_list\nFROM table_name\nWHERE condition;",
      },
    ],
  },
  {
    category: "Databases",
    question: "How can you join tables together in SQL? When should you do it?",
    answers: [
      {
        name: "Huni",
        answer:
          "Using a JOIN clause, typically on matching primary/foreign keys. You join tables when you need related data stored across multiple tables.\n\nSELECT *\nFROM table1\nJOIN table2 ON table1.id = table2.table1_id;",
      },
    ],
  },
  {
    category: "Bonus Questions (From Background Materials)",
    question:
      "What is the Java Collection Framework? Describe some of its elements.",
    answers: [
      {
        name: "Huni",
        answer:
          "A set of interfaces and classes in Java that provide standard ways to store, access, and manipulate groups of objects. It includes lists, sets, queues, and maps, plus utility classes like Collections.\n\nSome key elements:\n- List → ordered, allows duplicates (ArrayList, LinkedList)\n- Set → no duplicates, may or may not be ordered (HashSet, TreeSet)\n- Queue → processes elements in order, usually FIFO (LinkedList, PriorityQueue)\n- Map → key–value pairs (HashMap, TreeMap)\n- Iterator → for traversing collections\n- Collections utility class → methods like sort(), reverse(), shuffle()",
      },
    ],
  },
  {
    category: "Bonus Questions (From Background Materials)",
    question:
      "What's the advantage of working with abstractions rather than concrete implementations?",
    answers: [
      {
        name: "Huni",
        answer:
          "Code becomes more flexible and loosely coupled, because logic depends on behaviors (List, Set) instead of specific classes (ArrayList, HashSet). It is also easier to test and maintain.\n\nExample:\nList<String> names = new ArrayList<>();\n// Later you can switch to LinkedList without changing logic",
      },
    ],
  },
  {
    category: "Bonus Questions (From Background Materials)",
    question: "What is Optional?",
    answers: [
      {
        name: "Huni",
        answer:
          "Optional is a container object that may or may not contain a value. It helps avoid null references and provides methods to safely handle missing data.",
      },
    ],
  },
  {
    category: "Bonus Questions (From Background Materials)",
    question: "What does Optional.empty return?",
    answers: [
      {
        name: "Huni",
        answer:
          "Optional.empty() returns an empty Optional instance, meaning it contains no value. It is used to indicate the absence of a result without using null.",
      },
    ],
  },
  {
    category: "Bonus Questions (From Background Materials)",
    question: "What are generic types, and why use them?",
    answers: [
      {
        name: "Huni",
        answer:
          "Generics allow classes and methods to work with different data types while maintaining type safety. They use placeholders like T instead of concrete types.\n\nWhy use them?\n- Type safety: errors caught at compile time\n- Avoid casting: no manual type conversion\n- Code reuse: one generic class can serve many types\n\nExample:\nArrayList<String> names = new ArrayList<>();\nArrayList<Integer> numbers = new ArrayList<>();",
      },
    ],
  },
  // Data Basics
  {
    category: "Data Basics",
    question:
      "What are the differences between objects, arrays, and primitives in JavaScript? How are they used in programming?",
    answers: [
      {
        name: "Huni",
        answer:
          "A primitívek maguk az értéktípusok, amíg az objektek, arrayek pedig a referencia értékekek tartalmazzák.",
      },
    ],
  },
  {
    category: "Data Basics",
    question: "How would you access the value of a specific key in an object?",
    answers: [
      {
        name: "Huni",
        answer: "object.key",
      },
    ],
  },
  {
    category: "Data Basics",
    question:
      "Explain the concept of key-value pairs in objects and how they differ from indexed elements in arrays.",
    answers: [
      {
        name: "Huni",
        answer:
          "In an object you can reach a certain element by using it's key, while in an array you need to use the index. \nYou can not iterate an object with a for of loop, but you can iterate it with a for loop or a for in loop",
      },
    ],
  },
  {
    category: "Data Basics",
    question:
      "Describe a scenario where you would choose to use an object instead of an array, or vice versa, and explain your reasoning.",
    answers: [
      {
        name: "Huni",
        answer:
          "Komplex adattypusoknál, mint például ami volt feladat a product list, és a neighbouring countries, ahol egy adott elemhez több féle infó tartozik - pl ár, hossz, név, évszám, stb. Szóval ahol komplex adatokat kell kezelni.",
      },
    ],
  },
  {
    category: "Data Basics",
    question: "How can you retrieve the first and last items of an array?",
    answers: [
      {
        name: "Huni",
        answer: "[0]; [array.length-1];",
      },
    ],
  },
  {
    category: "Data Basics",
    question:
      "Identify the five most commonly used primitive types in JavaScript, and provide examples demonstrating when and how to use them?",
    answers: [
      {
        name: "Huni",
        answer: "string, number, boolean, undefined, null",
      },
    ],
  },

  // Algorithm Basics
  {
    category: "Algorithm Basics",
    question: "Provide examples of assignment operators in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer: "=, +=, -=, *=, /=, %=, **=",
      },
    ],
  },
  {
    category: "Algorithm Basics",
    question: "Name some of the arithmetic operators in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer: "+, -, *, /, %, --, ++, **",
      },
    ],
  },
  {
    category: "Algorithm Basics",
    question: "What are the different comparison operators in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer: "<, >, ==, ===, !=, !==, <=, >=",
      },
    ],
  },
  {
    category: "Algorithm Basics",
    question: "Name a few logical operators used in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer: "&&, ||, !",
      },
    ],
  },
  {
    category: "Algorithm Basics",
    question:
      "Explain the differences between a `for` loop, `for of` loop, and `for in` loop in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer:
          "Mindegyikkel iterálnuk. \n\nEgy for looppal meg az iteráció egy változóval történik, ami egy szám - gyakran \"i\", aminek megadjuk a kezdő és záró értékét, illetve, hogy mekkora és milyen lépésekben változzon. Stringben, arrayben és objectben is használhatjuk.\n\nEgy for of loopban egy adott string vagy array elemein úgy iterálunk, hogy mindig az aktuális elem tölti ki a meghatározott változó nevét, amivel aztán dolgozunk az iterációban. For of loopot nem tudunk objectekre használni.\n\nEgy for in looppal objectben tudunk iterálni úgy, hogy az object aktuális key-e tölti ki a loopban definiált válozónk helyét minden iterációban.",
      },
    ],
  },
  {
    category: "Algorithm Basics",
    question:
      "If you can't use any built-in functions or methods, how would you calculate the average of values in an array?",
    answers: [
      {
        name: "Huni",
        answer:
          "Összeadnám a tagok értékét, majd elosztanám a tagok számával.",
      },
    ],
  },

  // Function Basics
  {
    category: "Function Basics",
    question:
      "What is a function in JavaScript? Explain its purpose and how it is used in programming.",
    answers: [
      {
        name: "Huni",
        answer:
          "Egy kód tömb (block), ami egy adott szerepet tölt be.\nVan egy return értéke, amit aztán használhatunk.\nEgy function-t létre kell hozni, majd meg kell hívni - általában egy adott értékkel, vagy callback function esetén egy másik functionnel.\nhoisting fogalma: a funcion declarációja előtt is már meg lehet hívni a functiont - ez a hoisting.",
      },
    ],
  },
  {
    category: "Function Basics",
    question:
      "Describe the different syntax elements that make up a JavaScript function.",
    answers: [
      {
        name: "Huni",
        answer: "function + név + () + {} ---- arrow: ()=>{}",
      },
    ],
  },
  {
    category: "Function Basics",
    question:
      "How do you pass arguments to a function? Explain the concept of parameter passing and provide an example.",
    answers: [
      {
        name: "Huni",
        answer:
          "Amikor definiálom a functiont, paramétereket adhatok meg neki. A paraméterek helyére írom később az argúmentumokat amikor meghívom a functiont, és ezáltal az argumentumok használatával fog végigmenni a művelet.",
      },
    ],
  },
  {
    category: "Function Basics",
    question:
      "What is the difference between function expressions and function declarations? Provide examples of each.",
    answers: [
      {
        name: "Huni",
        answer:
          "Amikor expression van, akkor nem hoistingolhatok, magyarul ha egy változóba mentem a functionomet, a változó deklarálása előtt ha  hivatkozok rá még nem létezik, vagy nincs értéke.",
      },
    ],
  },
  {
    category: "Function Basics",
    question: "Explain what a callback function is in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer:
          "Egy olyan function, aminek az argúmentuma egy másik function. Például az eventlistenerek callback functionök.",
      },
    ],
  },
  {
    category: "Function Basics",
    question:
      "What is the scope of variables in JavaScript functions? Explain the difference between local and global variables.",
    answers: [
      {
        name: "Huni",
        answer:
          "Block scope, nested scope, shadowing, temporal dead zone, global scope.\n\nA scope határozza meg, hogy hol érvényes a variáns, amit létrehozunk. \\nHa egy loopon, functionön belül hozunk például létre változót, azt az adott egységen kívül nem fogjuk elérni, mert lokális - \\nazonban, ha mindenen kívül - globálisan - hozzuk létre, akkor elérhetjük functionön belül. \\n Ha szeretnénk használni, vigyázni kell az elnevezésekkel, nehogy \"leárnyaljuk\" (shadowing) a function vagy a loop egyik paraméterével a belső scope-on a globális változót.",
      },
    ],
  },

  // Built-in Features
  {
    category: "Built-in Features",
    question:
      "What are some commonly used built-in functions or methods in JavaScript for working with strings? Provide examples and explain their usage.",
    answers: [
      {
        name: "Huni",
        answer:
          "typeof, toString(), \ncharAt(), toLowerCase(), toUpperCase(), includes(), indexOf(), startsWith(), endsWith(), \nsubstring(), slice(), split(),  \n////match(), test(), ",
      },
    ],
  },
  {
    category: "Built-in Features",
    question:
      "Name at least five built-in functions or methods in JavaScript for manipulating arrays. Describe how each function/method works and provide an example for each.",
    answers: [
      {
        name: "Huni",
        answer:
          "push(), pop(), slice(), splice(), join(), filter(), sort(), forEach(), lastIndexOf(), indexOf(), map(), reverse(),",
      },
    ],
  },
  {
    category: "Built-in Features",
    question:
      "How can you use built-in functions or methods in JavaScript to perform mathematical operations? Give examples of commonly used functions or methods for mathematical calculations.",
    answers: [
      {
        name: "Huni",
        answer:
          "parseFloat(), parseInt(), \nMath.floor(), Math.round(), Math.ceil(),\nMath.pow(base, exponent), Math.sqrt(x), Math.cbrt(x),\nMath.random() * 10 --- 0-10 random\nMath.floor(Math.random() * 10) + 1 --- 1-10 random\nMath.max(...values)\nMath.min(...values)",
      },
    ],
  },
  {
    category: "Built-in Features",
    question:
      "What are some built-in functions or methods in JavaScript for manipulating numbers? Describe their functionality and give examples of how they can be used.",
    answers: [
      {
        name: "Huni",
        answer:
          "Number(), toString(),\nparseInt(), parseFloat(),\nInfinity, -Infinity, isFinite()\nisNan(), Number.isInteger()",
      },
    ],
  },
  {
    category: "Built-in Features",
    question:
      "Discuss the differences between `for` loops and the `forEach` method in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer:
          "for loop iterál, sorban haladva, foreach pedig mindegyik elemre ugyanazt csinálja, nem lehet megtörni",
      },
    ],
  },

  // View Basics
  {
    category: "View Basics",
    question:
      "Explain the difference between JavaScript object data structure and DOM data structure.",
    answers: [
      {
        name: "Huni",
        answer:
          "Kulcs-érték párok vannak az objectben, ahol bármilyen infót tárolhatunk, a DOM (Document Object Model) pedig egy tree-like structur, azaz egy faszerkezetes megjelenítési mód HTMLben, ahol a javascriptet használva jeleníthetünk meg elementeket az oldalon. Az object business logic, míg a DOM view logic.",
      },
    ],
  },
  {
    category: "View Basics",
    question:
      "What are the necessary steps to change the content of an HTML element using JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "Meg kell keressük a document-ben, el kell mentsük egy változóba, majd utána tudjuk módosítani különböző módokon.",
      },
    ],
  },

  // Event Basics
  {
    category: "Event Basics",
    question: "Define an event listener in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer:
          "Egy olyan callback function ami egy esemény végbemenetele után fut le.\n\n\\ndocument.addEventListener(\"click\", (event)=>{\n\\n    ///tartalom\n\\n})",
      },
    ],
  },
  {
    category: "Event Basics",
    question:
      "Outline the steps involved in changing the content of an HTML element when it is clicked.",
    answers: [
      {
        name: "Huni",
        answer:
          "Őrá rakhatok egy \"click\" event listenert ha a scopeomon változóban elérem - a listeneren belül a változó nevével tudok hivatkozni rá .innerText vagy .innerHTML-lel pedig megváltoztatom a belső tartalmát, ha szöveget akarok, ha p\n\nRakhatok a document-re is event listenert, ezesetben a clickelt element-et a callback function paraméterében szereplő elnevezéssel érem el - általában e vagy event - szóval pl. e.target-ként elérem a kattintással célzott elementet.",
      },
    ],
  },
  {
    category: "Event Basics",
    question:
      "Inside a `click` event listener, how can you access the element that was clicked?",
    answers: [
      {
        name: "Huni",
        answer:
          "a clickelt element-et a callback function paraméterében szereplő elnevezéssel érem el - általában e vagy event - szóval pl. e.target-ként elérem a kattintással célzott elementet.",
      },
    ],
  },

  // Design Basics
  {
    category: "Design Basics",
    question:
      "What are the differences between `display: block`, `display: inline`, and `display: inline-block` in CSS? \\nWhen would you use each display property, and how do they affect the layout and behavior of elements?",
    answers: [
      {
        name: "Huni",
        answer:
          "block:\n\\n Egy új sort csinál magának, teljes sor hosszát elfoglalja pl. div, h1-h2-..., p\n\\n Akkor használnám, ha címet, teljes sort kitöltő információt akarok megjeleníteni.\n\n\\ninline:\n\\nNem új sorban kezd, szélessége, magassága nem állítható, margin, padding csak széltében él pl. span, a, strong, em\n\\n Akkor használnám, ha a szövegbe kisebb elementet akarok berakni pl. strong, vagy egy linket pl.\n\n\\nblock-inline:\n\\nVegyíti a két megjelenítési módot. Nem új sorban lesz az element, nem foglalja el a teljes sort, viszont állíthatóak a paraméterei.\n\\n Akkor használnám, ha az eddigi szöveg, elementek mellé akarok rakni valami olyat, aminek a szélességét, magasságát állítani szeretném külön.",
      },
    ],
  },
  {
    category: "Design Basics",
    question:
      "Explain the distinctions between `position: relative` and `position: absolute` CSS properties.",
    answers: [
      {
        name: "Huni",
        answer:
          "Relative: A normál helyzetükhöz képest vannak pozicionálva az elementek. Pozicionálás a top, right, bottom, és left beállításokkal történik.\n\nAbsolute: A legközelebb pozicionált ősükhöz képest vannak elhelyezve az elemek. Ha azt nem találja, a bodyhoz képest. Ugyanazzal a 4 beállítással lehet módosítgatni, elhelyezni.",
      },
    ],
  },
  {
    category: "Design Basics",
    question:
      "What is the box model? Name the CSS properties associated with it.",
    answers: [
      {
        name: "Huni",
        answer:
          "A CSS box model koncepció azt reprezentálja, hogy a HTML elemek négyzetes dobozként jelennek meg a weboldalon. \\nA box modell négy összetevőből áll: content, padding, border, és margin.\\n \n\nContent: The content area is where the text, images, and other media are displayed. It is defined by the height and width of the element.\n\nPadding: The padding is the space between the content and the border. It can be set using the padding property.\n\nBorder: The border is a line that surrounds the content and padding areas. It can be set using the border property.\n\nMargin: The margin is the space between the border and the surrounding elements. It can be set using the margin property.\n\nWidth and height are also quite important.",
      },
    ],
  },
  {
    category: "Design Basics",
    question:
      "Identify the CSS properties that affect font and text appearance.",
    answers: [
      {
        name: "Huni",
        answer:
          "Sok van, mint pl font-family, font-size, line-height, font-weight, font-style, text-decoration, text-align... stb.",
      },
    ],
  },
  {
    category: "Design Basics",
    question:
      "List the steps for adding or removing a class name from an HTML element.",
    answers: [
      {
        name: "Huni",
        answer:
          "element.classList.add(\"toAdd\")\n\\nelement.classList.remove(\"toRemove\")",
      },
    ],
  },

  // JavaScript - Language Specialties
  {
    category: "JavaScript - Language Specialties",
    question:
      "Elaborate on the differences between value and reference data types in JavaScript, specifically in relation to objects and primitives.",
    answers: [
      {
        name: "Huni",
        answer:
          "Az objectek, arrayek csak a reference data structure-t tartalmazzák, azaz az elérési utat (?), amíg a primitívek pedig egy egyszerű adatot.",
      },
    ],
  },
  {
    category: "JavaScript - Language Specialties",
    question:
      "Discuss the concept of mutability and immutability in objects, arrays, and primitives, and explain why it is important to understand when working with data structures in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer:
          "A mutable, mint az objectek, arrayek változtatható, módosítható adatstruktúra, amíg a primitívek immutable-ök.",
      },
    ],
  },
  {
    category: "JavaScript - Language Specialties",
    question: "Is `null` considered an object or a primitive in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer: "Primitive. - van egy régi bug javascriptben, ami objectnek mutatja?",
      },
    ],
  },
  {
    category: "JavaScript - Language Specialties",
    question: "\"What does `undefined` represent in JavaScript?\"",
    answers: [
      {
        name: "Huni",
        answer:
          "Egy érték hiányát jelzi, vagy egy olyan változót, amit létrehoztak, de nem rendeltek hozzá semmit.",
      },
    ],
  },
  {
    category: "JavaScript - Language Specialties",
    question: "When would you use `var`, `let`, and `const` in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "var: function scope, hoistolható, de amíg értéket nem kap, undefined lesz. - nem gyakran használom - outdated.\nlet: block scope, ha változtatni akarjuk a teljes értéket, primitivek pl.\nconst: block scope, objectek arrayek, ahol a teljes értéket nem írjuk át.",
      },
    ],
  },
  {
    category: "JavaScript - Language Specialties",
    question: "Explain the concept of hoisting in JavaScript.",
    answers: [
      {
        name: "Huni",
        answer:
          "A deklaráció előtt is a scopeon elérhető az adott dolog.",
      },
    ],
  },

  // Git
  {
    category: "Git",
    question:
      "Discuss the advantages of using a version control system.",
    answers: [
      {
        name: "Huni",
        answer:
          "Lehet követni a változásokat, visszacsinálni a rossz változtatást, rendszerezni, backupolni, távoli elérésre feltolni - felhőbe.",
      },
    ],
  },
  {
    category: "Git",
    question: "Clarify the differences between Git and GitHub.",
    answers: [
      {
        name: "Huni",
        answer:
          "A git egy lokális kódmenedzser rendszer, amivel a változásokat lehet lekövetni a kódban. A github felhő alapú, így a közös munkát is megsegíti, és a távoli elérést, backupot, source kód kezelést leegyszerűsíti.",
      },
    ],
  },
  {
    category: "Git",
    question:
      "What is the purpose of remote repositories in Git?",
    answers: [
      {
        name: "Huni",
        answer:
          "Az együtt dolgozás, távoli elérés, branch kezelés, illetve a kód eljuttatása bárkihez.",
      },
    ],
  },
  {
    category: "Git",
    question: "When does a merge conflict occur in Git?",
    answers: [
      {
        name: "Huni",
        answer:
          "Amikor a git nem tudja automatikusan egyeztetni a kód két verzióját, és manuálisan kell kibogozni az adott részt.",
      },
    ],
  },

  // Terminal
  {
    category: "Terminal",
    question:
      "How would you execute a JavaScript file in the terminal?",
    answers: [
      {
        name: "Huni",
        answer: "node script.js",
      },
    ],
  },
  {
    category: "Terminal",
    question:
      "What is the keyboard shortcut to stop a running process in the terminal?",
    answers: [
      {
        name: "Huni",
        answer: "ctrl + C",
      },
    ],
  },
  {
    category: "Terminal",
    question:
      "How can you retrieve the previous command executed in the terminal?",
    answers: [
      {
        name: "Huni",
        answer: "up arrow button",
      },
    ],
  },
  {
    category: "Terminal",
    question:
      "How do you navigate to the parent directory of the current directory in the terminal?",
    answers: [
      {
        name: "Huni",
        answer: "cd.. (change directory ..)",
      },
    ],
  },

  // Debugging
  {
    category: "Debugging",
    question:
      "What techniques can you use while debugging a program?",
    answers: [
      {
        name: "Huni",
        answer:
          "Firstly check if there is an error message and if there is, what does it say?\nIf the line is in a function, check where you call the function and what we entered the function at that time.\n\nconsole.log() helps with understanding\n\ndebugger tool can stop our running of the code with a break point",
      },
    ],
  },
  {
    category: "Debugging",
    question:
      "What does step over, step into and step out mean while using the debugger?",
    answers: [
      {
        name: "Huni",
        answer:
          "Step overrel az esetleges meghívott functionöket egészében lefuttatja és csak utána áll meg, míg a step into belelép és ott folytatja, a step out pedig onnan lefuttatja a maradék functiont és úgy áll meg a kinti scope következő soránál.",
      },
    ],
  },
  {
    category: "Debugging",
    question:
      "How can you start to debug a program from a certain line using the debugger?",
    answers: [
      {
        name: "Huni",
        answer:
          "A bal oldalt lévő űrbe kell egy breakpointot létrehozni.",
      },
    ],
  },
  // Web development
  {
    category: "Web development",
    question: "What is an API?",
    answers: [
      {
        name: "Huni",
        answer:
          "An API (Application Programming Interface) is a contract that defines how different software systems communicate.\nIt exposes functionality or data in a controlled way so other programs can use it without knowing internal implementation details.",
      },
    ],
  },
  {
    category: "Web development",
    question: "What is a REST?",
    answers: [
      {
        name: "Huni",
        answer:
          "REST (Representational State Transfer) is an architectural style for building APIs.\n\nKey ideas:\n- Uses standard HTTP\n- Works with resources (users, posts, orders)\n- Each resource has a unique URL\n- Uses HTTP methods (GET, POST, etc.)\n- Is stateless (server doesn’t remember client state between requests)\n\nREST makes APIs simple, predictable, and scalable.",
      },
    ],
  },
  {
    category: "Web development",
    question: "What is a cookie?",
    answers: [
      {
        name: "Huni",
        answer:
          "A cookie is a small piece of data stored in the browser by a server.\n\nIt’s mainly used to:\n- keep users logged in\n- store session IDs\n- remember preferences\n\nBecause HTTP is stateless, cookies help servers recognize returning clients.",
      },
    ],
  },
  {
    category: "Web development",
    question: "Describe the HTTP protocol and its methods.",
    answers: [
      {
        name: "Huni",
        answer:
          "HTTP is a request–response protocol used for communication between client and server.\n\nCommon methods:\n- GET → retrieve data\n- POST → create data\n- PUT → replace data\n- PATCH → update part of data\n- DELETE → remove data\n\nEach request contains headers + optional body, and receives a response with a status code (200, 404, etc.).",
      },
    ],
  },
  {
    category: "Web development",
    question: "How do you identify unique resources on the web?",
    answers: [
      {
        name: "Huni",
        answer:
          "Using URLs (Uniform Resource Locator) / URIs (Uniform Resource Identifier).\n\nEach resource (like a user or product) gets its own unique address, for example:\n- /users/42\n- /products/7\n\nThis is fundamental to REST design.",
      },
    ],
  },
  {
    category: "Web development",
    question:
      "What are the main frontend languages on the web? Describe them briefly.",
    answers: [
      {
        name: "Huni",
        answer:
          "- HTML\n  Defines structure and content.\n\n- CSS\n  Controls layout, colors, and visual appearance.\n\n- JavaScript\n  Adds behavior and interactivity (logic, events, API calls).\n\nTogether they form the core of frontend development.",
      },
    ],
  },
  {
    category: "Web development",
    question: "What is JSON?",
    answers: [
      {
        name: "Huni",
        answer:
          "JSON (JavaScript Object Notation) is a lightweight text format for exchanging data.\n\nIt’s:\n- human-readable\n- language-independent\n- commonly used in APIs\n\nMost web servers send and receive JSON.",
      },
    ],
  },
  {
    category: "Web development",
    question:
      "What operations are fundamental to most data-driven applications?",
    answers: [
      {
        name: "Huni",
        answer:
          "The classic CRUD operations:\n- Create\n- Read\n- Update\n- Delete\n\nNearly every application revolves around these.",
      },
    ],
  },
  {
    category: "Web development",
    question:
      "Briefly describe at least two communication technologies that enable a server to push data to a client in a web application.",
    answers: [
      {
        name: "Huni",
        answer:
          "- WebSockets\n  Creates a persistent connection allowing real-time, two-way communication (chat, games, live updates).\n- Server-Sent Events (SSE)\n  Allows server to push updates one-way to clients (notifications, live feeds).\n\nBoth avoid constant polling and enable real-time behavior.",
      },
    ],
  },

  // Spring and Spring Boot
  {
    category: "Spring and Spring Boot",
    question:
      "What is Spring Framework and what are its core features?",
    answers: [
      {
        name: "Huni",
        answer:
          "Spring is a Java application framework that helps build enterprise applications in a modular, testable way.\n\nCore ideas:\n- Dependency Injection\n- Inversion of Control\n- Aspect-Oriented Programming (AOP)\n- Transaction management\n- MVC for web apps\n\nIts main goal: reduce coupling and boilerplate while improving structure.",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "Explain the main differences between Spring and Spring Boot.",
    answers: [
      {
        name: "Huni",
        answer:
          "Spring:\n“a Java platform that provides comprehensive infrastructure support for developing Java applications. Spring handles the infrastructure so you can focus on your application. Spring enables you to build applications from “plain old Java objects” (POJOs) and to apply enterprise services non-invasively to POJOs.”\n- Requires manual configuration\n- XML / Java config needed\n- You wire many things yourself\n\nSpring Boot:\n- Built on top of Spring\n- Auto-configures components\n- Embedded servers (no external Tomcat)\n- Opinionated defaults\n- Much faster project setup\n\nThink:\n- Spring → toolkit\n- Spring Boot → ready-to-run platform",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "How does Spring Boot simplify the configuration of Spring applications?",
    answers: [
      {
        name: "Huni",
        answer:
          "Spring Boot:\n- Automatically configures beans based on dependencies\n- Provides starter packages\n- Uses sensible defaults\n- Eliminates most XML\n- Offers application.properties / yaml for central config\n\nYou focus on business logic, not plumbing.",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "What is a dependency injection (DI) and how does Spring support it?",
    answers: [
      {
        name: "Huni",
        answer:
          "DI means:\nObjects don’t create their dependencies themselves — they receive them from outside.\n\nBenefits:\n- loose coupling\n- easier testing\n- better modularity\n\nSpring supports DI via:\n- constructor injection\n- field injection\n- setter injection\n\nSpring’s container manages object creation and wiring.",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "How can you define a bean in Spring? Provide examples.",
    answers: [
      {
        name: "Huni",
        answer:
          "@Component\n@Service\n@Repository\n@Controller\n\nConceptually, you can define beans by:\n- annotating classes (component scanning)\n- defining them in configuration classes\n- declaring them manually\n\nSpring then manages their lifecycle.\n\nKey idea:\nA bean is simply an object managed by Spring.",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "What is inversion of control (IoC) and how is it implemented in Spring?",
    answers: [
      {
        name: "Huni",
        answer:
          "IoC means:\nYou don’t control object creation — Spring does.\n\nInstead of:\n“I create my dependencies”\n\nYou say:\n“Spring gives me what I need.”\n\nSpring implements IoC through its ApplicationContext container.",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "What is a RESTful API, and how can you develop a Web API using Spring Boot?",
    answers: [
      {
        name: "Huni",
        answer:
          "A RESTful API:\n- exposes resources via URLs\n- uses HTTP methods (GET, POST, PUT, DELETE)\n- is stateless\n- typically uses JSON\n\nSpring Boot makes REST APIs easy by providing:\n- REST controllers\n- automatic JSON serialization\n- embedded servers\n- request mapping\n\nYou mainly define endpoints and logic.",
      },
    ],
  },
  {
    category: "Spring and Spring Boot",
    question:
      "How do you handle HTTP requests in Spring MVC? Give an example.",
    answers: [
      {
        name: "Huni",
        answer:
          "Spring MVC uses:\n- Controllers to receive requests\n- Mappings to connect URLs to methods\n- Automatic conversion between JSON and objects\n\nFlow:\nClient → Controller → Service → Repository → Response\n\nMVC separates concerns clearly.",
      },
    ],
  },

  // Entity Relationships, ORM, Spring Data
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "What is ORM (Object Relational Mapping)? What are the benefits, when to use?",
    answers: [
      {
        name: "Huni",
        answer:
          "ORM (Object-Relational Mapping) allows you to map objects to database records and classes to database tables.\nInstead of writing SQL, you work with objects.\n\nIt provides advantages such as:\n- Productivity: Reduces boilerplate code by automating SQL generation.\n- Maintainability: Keeps the database interaction logic separated from business logic.\n- Portability: Provides a layer of abstraction over different relational databases.\n\nBenefits:\n- less boilerplate SQL\n- database abstraction\n- faster development\n- easier refactoring\n- type safety\n\nWhen to use:\n- typical CRUD applications\n- domain-driven designs\n- when productivity matters more than micro-optimizing SQL\n\nAvoid ORM for:\n- extremely performance-critical queries\n- complex reporting",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question: "What is JPA?",
    answers: [
      {
        name: "Huni",
        answer:
          "Jakarta Persistence API (formerly known as Java Persistence API) is a specification that defines a set of standards for object-relational mapping in Java. Its purpose is to standardize how Java objects are persisted to relational databases.\n\nKey Concepts:\n- Entities: Classes annotated with @Entity that map to database tables.\n- Entity Manager: The primary interface used to interact with the persistence context.\n- Persistence Unit: A set of all entity classes that are managed by EntityManager in an application.\n\nIt does NOT implement anything.\nHibernate is the most common JPA implementation.",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "What is the difference between JPA and Spring Data JPA?",
    answers: [
      {
        name: "Huni",
        answer:
          "- JPA → standard specification\n- Spring Data JPA → Spring abstraction on top of JPA\n\nSpring Data JPA:\n- auto-generates repositories\n- removes boilerplate\n- provides query methods\n\nThink:\n- JPA = rules\n- Spring Data JPA = productivity layer",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "What is the difference between Hibernate ORM and Spring Data JPA?",
    answers: [
      {
        name: "Huni",
        answer:
          "Hibernate ORM:\n- actual ORM engine\n- implements JPA\n- talks to the database\n\nSpring Data JPA:\n- does NOT persist data itself\n- sits above Hibernate\n- generates repositories and queries\n\nStack looks like:\n- Spring Data JPA → Hibernate → Database",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "How can you configure database connection properties in a Spring Boot application?",
    answers: [
      {
        name: "Huni",
        answer:
          "Via configuration files:\n- URL\n- username\n- password\n- driver\n- dialect\n\nSpring Boot auto-detects everything once these are provided.\nNo manual DataSource setup needed.",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "Explain the concept of cardinality in entity relationships. How does it impact the design and mapping of entities?",
    answers: [
      {
        name: "Huni",
        answer:
          "Cardinality defines how many entities relate to how many others:\n- One-to-One\n- One-to-Many\n- Many-to-One\n- Many-to-Many\n\nIt impacts:\n- table structure\n- foreign keys\n- join tables\n- performance\n\nGood cardinality design avoids:\n- unnecessary joins\n- duplicated data\n- circular dependencies",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "How to create a custom repository in Spring Data JPA?",
    answers: [
      {
        name: "Huni",
        answer:
          "Conceptually:\n- extend base repository\n- define custom methods\n- optionally provide your own implementation\n\nUsed when:\n- queries are too complex for derived methods\n- performance tuning is needed\n- business-specific queries exist",
      },
    ],
  },
  {
    category: "Entity Relationships, ORM, Spring Data",
    question:
      "What is the difference between FetchType.Eager and FetchType.Lazy?",
    answers: [
      {
        name: "Huni",
        answer:
          "FetchType.EAGER\n- Related data is loaded immediately with the parent entity.\n- Happens automatically in the same query or additional queries.\n- Simpler to access, but can hurt performance.\n- Can cause unnecessary joins and N+1 problems.\n\nFetchType.LAZY\n- Related data is loaded only when accessed.\n- Improves performance by avoiding unnecessary queries.\n- Requires an active persistence context (transaction).\n- Preferred in most cases.",
      },
    ],
  },

  // Spring Security
  {
    category: "Spring Security",
    question:
      "What are some essential features of Spring Security?",
    answers: [
      {
        name: "Huni",
        answer:
          "* Authentication and authorization\n  - Role-based access control\n  - Password encoding\n  - CSRF protection\n  - Security filter chain\n  - Integration with JWT and OAuth2\n\n  It secures both web endpoints and methods.",
      },
    ],
  },
  {
    category: "Spring Security",
    question:
      "How can you secure a Spring Boot application using Spring Security?",
    answers: [
      {
        name: "Huni",
        answer:
          "- Add Spring Security dependency\n- Configure authentication (in-memory, database, JWT, etc.)\n- Define authorization rules for endpoints\n- Configure password encoding\n\nSpring Boot auto-configures basic security by default.",
      },
    ],
  },
  {
    category: "Spring Security",
    question:
      "Explain how the security filter chain works.",
    answers: [
      {
        name: "Huni",
        answer:
          "Every HTTP request passes through a chain of security filters before reaching the controller.\n\nFilters handle:\n- Authentication\n- Authorization\n- CSRF checks\n- Session management\n\nIf a request fails any filter, it’s rejected before hitting business logic.",
      },
    ],
  },
  {
    category: "Spring Security",
    question:
      "What is JWT (JSON Web Token), and how can you use it for authentication?",
    answers: [
      {
        name: "Huni",
        answer:
          "JWT (JSON Web Token) is a compact, signed token that contains user information.\n\nFlow:\n1. User logs in\n2. Server generates JWT\n3. Client sends JWT in Authorization header\n4. Server validates token on each request\n\nIt enables stateless authentication.",
      },
    ],
  },
  {
    category: "Spring Security",
    question:
      "Explain the concept of authentication and authorization in Spring Security.",
    answers: [
      {
        name: "Huni",
        answer:
          "Authentication → Who are you?\nAuthorization → What are you allowed to do?\n\nAuthentication verifies identity.\nAuthorization checks permissions.",
      },
    ],
  },
  {
    category: "Spring Security",
    question:
      "How can you implement method-level security using annotations in Spring?",
    answers: [
      {
        name: "Huni",
        answer:
          "You can use annotations on methods to restrict access based on roles or permissions.\nThis allows fine-grained security at the service layer, not just at endpoint level.",
      },
    ],
  },

  // Integration testing
  {
    category: "Integration testing",
    question:
      "What is integration testing, and how does it differ from unit testing?",
    answers: [
      {
        name: "Huni",
        answer:
          "- Integration test: tests multiple components working together (e.g. controller + service + DB)\n- Unit test: tests one class in isolation (usually with mocks)",
      },
    ],
  },
  {
    category: "Integration testing",
    question:
      "How can you configure and set up integration tests in a Spring Boot project?",
    answers: [
      {
        name: "Huni",
        answer:
          "You set up integration tests by loading the full Spring context, so your components work together like in a real app.\n\n- Use @SpringBootTest\n→ starts the whole application (beans, config, etc.)\n\n- Optionally add @AutoConfigureMockMvc\n→ lets you test HTTP endpoints without starting a real server\n\n- Use @ActiveProfiles(\"test\")\n→ loads a separate config (e.g. test database)\n\n- Place tests under src/test/java\n→ same package structure as your app\n\n- Use an embedded database (like H2)\n→ avoids using real production DB\n\n👉 Key idea:\nYou’re not mocking everything — you’re testing how real parts work together (controller → service → repository → DB).",
      },
    ],
  },
  {
    category: "Integration testing",
    question:
      "How do you perform an HTTP request in an integration test for a Spring Boot application?",
    answers: [
      {
        name: "Huni",
        answer:
          "- Use MockMvc or TestRestTemplate\n- Simulate real HTTP calls (GET, POST, etc.)",
      },
    ],
  },
  {
    category: "Integration testing",
    question:
      "How can you mock dependencies or external services in Spring Boot integration tests?",
    answers: [
      {
        name: "Huni",
        answer:
          "- Use @MockBean\n- Replaces real beans in the Spring context",
      },
    ],
  },
  {
    category: "Integration testing",
    question:
      "How do you configure an embedded H2 database for integration testing in Spring Boot?",
    answers: [
      {
        name: "Huni",
        answer:
          "- Add H2 dependency\n- Use application-test.properties\n- Configure in-memory DB (URL, driver, etc.)\n- Often used with @ActiveProfiles(\"test\")",
      },
    ],
  },

  // DevOps
  {
    category: "DevOps",
    question:
      "What is CI/CD (Continuous Integration/Continuous Deployment), and what are its benefits?",
    answers: [
      {
        name: "Huni",
        answer:
          "- CI (Continuous Integration): frequently merge code + run tests automatically\n- CD (Continuous Deployment/Delivery): automatically build and deploy app\n\nBenefits:\n- Faster releases\n- Early bug detection\n- More reliable deployments",
      },
    ],
  },
  {
    category: "DevOps",
    question:
      "What is Docker and Docker Compose?",
    answers: [
      {
        name: "Huni",
        answer:
          "- Docker: tool to package an app + dependencies into a container\n- Docker Compose: runs multiple containers together (e.g. app + DB)",
      },
    ],
  },
  {
    category: "DevOps",
    question:
      "Explain the difference between an image and a container in Docker.",
    answers: [
      {
        name: "Huni",
        answer:
          "- Image: blueprint (read-only template)\n- Container: running instance of an image\n\n👉 Image = class, Container = object (good analogy)",
      },
    ],
  },
  {
    category: "DevOps",
    question:
      "What is a Dockerfile?",
    answers: [
      {
        name: "Huni",
        answer:
          "- A file with instructions to build a Docker image\n- Defines base image, dependencies, commands, etc.",
      },
    ],
  },
  {
    category: "DevOps",
    question:
      "How can you set up a basic CI/CD pipeline for a Spring Boot application?",
    answers: [
      {
        name: "Huni",
        answer:
          "High-level steps:\n- Push code to Git repo\n- CI tool (e.g. GitHub Actions) runs:\n    - build (mvn clean install)\n    - tests\n- Build Docker image\n- Deploy (e.g. server or cloud)\n\n👉 Key idea: automate build → test → deploy",
      },
    ],
  },
  // Javascript Language Features
  {
    category: "Javascript Language Features",
    question:
      "What is ECMAScript? What is the difference between Javascript & ECMAScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "ECMAScript (ES) is the language standard that defines the core rules and features of JavaScript. JavaScript is an implementation of that standard in real environments (browsers, Node.js) and usually adds extra capabilities like the DOM.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "Explain the concept of \"block scoping\" introduced in ES6. How does it differ from function scoping?",
    answers: [
      {
        name: "Huni",
        answer:
          "Block scoping (with let and const) means a variable only exists inside the nearest block { } where it is declared. Function scoping (with var) makes a variable visible throughout the whole function, and because of hoisting it can even be accessed before its declaration, which can lead to surprising behavior.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "What are template literals in ES6 and how do they improve string manipulation in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "Template literals are strings written with backticks. They support multiline text and interpolation with ${...}, so you can embed variables and expressions directly instead of manually concatenating with + and \\n.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "What is the \"spread operator\" in ES6 and how can it be used to manipulate arrays and objects more effectively?",
    answers: [
      {
        name: "Huni",
        answer:
          "The spread operator (...) expands an iterable or object into its individual elements. With arrays it’s useful for copying and merging, and with objects for cloning or combining properties in a concise way.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "Explain the concept of \"destructuring assignment\" in ES6. How does it simplify variable assignment and object/array manipulation?",
    answers: [
      {
        name: "Huni",
        answer:
          "Destructuring lets you pull values out of arrays or object properties into variables in one step. It makes code shorter and clearer, especially when you need several fields from the same object or fixed positions from an array.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "How does ES6 introduce the concept of \"default function parameters\"? Provide an example of using default parameters in a function.",
    answers: [
      {
        name: "Huni",
        answer:
          "In ES6 you can assign default values directly in the function parameter list, so if a caller omits an argument, that parameter falls back to the default instead of being undefined. This removes the need for manual checks inside the function.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "Explain the concept of \"modules\" introduced in ES6. How do they improve code organization and reusability in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "ES6 modules let you split code into separate files that explicitly export and import values. This avoids polluting the global scope, improves structure, and makes it easier to reuse and reason about pieces of code across a project.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "Compare the CommonJS and ES6 modules. What are the differences?",
    answers: [
      {
        name: "Huni",
        answer:
          "CommonJS uses require and module.exports, is synchronous, and is the older Node.js module system. ES6 modules use import and export, support static analysis and tree-shaking, and are the modern standard in browsers and Node. Syntax, loading model, and tooling support differ.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question: "What are higher-order functions in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "A higher‑order function either takes another function as an argument or returns a function. They enable patterns like callbacks, map/filter/reduce, and functional composition.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "Explain the purpose and functionality of the map function in JavaScript. How does it differ from the filter and reduce functions?",
    answers: [
      {
        name: "Huni",
        answer:
          "map creates a new array by transforming each element with a callback. filter selects only elements that match a condition. reduce combines all elements into a single value (like a sum). All iterate, but with different goals.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "How can the filter function be used to selectively extract elements from an array based on a given condition?",
    answers: [
      {
        name: "Huni",
        answer:
          "filter takes a callback that returns true or false for each element and returns a new array containing only the elements where the callback returned true, for example all even numbers from a list.",
      },
    ],
  },
  {
    category: "Javascript Language Features",
    question:
      "What is the role of the reduce function in JavaScript? How can it be used to aggregate or combine the elements of an array into a single value?",
    answers: [
      {
        name: "Huni",
        answer:
          "reduce processes an array step by step with an accumulator and a current value and returns a single result. Typical uses are summing numbers, finding a maximum, building an object, or flattening nested arrays.",
      },
    ],
  },

  // Fetch
  {
    category: "Fetch",
    question:
      "How does a query string parameter in a URL contribute to web application functionality?",
    answers: [
      {
        name: "Huni",
        answer:
          "Query string parameters (after ?) let you pass small pieces of data in the URL as key=value pairs. They’re often used for filtering, searching, pagination, and similar options without changing the page structure.",
      },
    ],
  },
  {
    category: "Fetch",
    question:
      "What is the purpose and functionality of the fetch function in JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "fetch is a modern API for making HTTP requests from JavaScript. It returns a Promise with a Response object and supports all common HTTP methods to talk to backends or other resources.",
      },
    ],
  },
  {
    category: "Fetch",
    question:
      "Explain the syntax of the fetch function and how it handles asynchronous operations. Compare async/await with .then()/.catch().",
    answers: [
      {
        name: "Huni",
        answer:
          "fetch returns a Promise, so you can either chain .then().catch() or use async/await. async/await makes the code look more like synchronous code and usually improves readability, while .then() can lead to deeper nesting when many steps are involved.",
      },
    ],
  },
  {
    category: "Fetch",
    question:
      "What is asynchronicity in JavaScript? Name some typical use cases when asynchronicity is needed.",
    answers: [
      {
        name: "Huni",
        answer:
          "Asynchronicity means some operations run in the background and complete later, so the main thread is not blocked. Typical cases are network requests, timers, file I/O in Node.js, and real‑time communication like WebSockets.",
      },
    ],
  },
  {
    category: "Fetch",
    question:
      "How can you handle the response received from a fetch request?",
    answers: [
      {
        name: "Huni",
        answer:
          "You get a Response object, usually check response.ok / status, then call a method like response.json() or response.text() to read the body, and finally handle the resulting data or errors in your code.",
      },
    ],
  },
  {
    category: "Fetch",
    question:
      "How does the fetch function handle errors and HTTP status codes?",
    answers: [
      {
        name: "Huni",
        answer:
          "fetch rejects its Promise only for network‑level errors. HTTP errors like 404 still resolve, so you must check response.ok or response.status yourself and throw errors when needed, then catch them to handle failures.",
      },
    ],
  },
  {
    category: "Fetch",
    question: "Explain the parts of a URL.",
    answers: [
      {
        name: "Huni",
        answer:
          "A URL has a scheme (protocol like https), host (domain), optional port, path to the resource, an optional query string with parameters, and an optional fragment (hash) that points to a position inside the resource.",
      },
    ],
  },

  // Responsive Design
  {
    category: "Responsive Design",
    question:
      "What does responsive design do? Why is it important?",
    answers: [
      {
        name: "Huni",
        answer:
          "Responsive design makes a site adapt to different screen sizes and orientations so it looks usable on phones, tablets, and desktops. Without it, layouts can break or become unusable on smaller or unusual screens.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question: "What is a mobile-first approach?",
    answers: [
      {
        name: "Huni",
        answer:
          "Mobile‑first means designing and styling for small screens first, then progressively enhancing the layout for larger screens. This usually leads to better performance, accessibility, and simpler CSS.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question:
      "How can you test the website's appearance on different screen sizes in the browser?",
    answers: [
      {
        name: "Huni",
        answer:
          "Use the browser's DevTools device toolbar to simulate different devices and screen widths, or just resize the window manually to see how the layout responds.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question:
      "Can you give some techniques that help to fulfill the responsive design criteria?",
    answers: [
      {
        name: "Huni",
        answer:
          "Use flexible layouts with Flexbox or Grid, relative units (%, rem, vw/vh), media queries, responsive images, and usually a mobile‑first CSS strategy.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question:
      "What do media queries do? How do they work?",
    answers: [
      {
        name: "Huni",
        answer:
          "Media queries are CSS rules that only apply when certain conditions are met, for example max‑width. The browser checks the condition, and if it matches, the contained styles override or extend the base styles.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question: "How would you define the Flexbox layout?",
    answers: [
      {
        name: "Huni",
        answer:
          "Flexbox is a one‑dimensional layout system for distributing space and aligning items along a row or column. It makes it much easier to create responsive layouts and align content without complex floats or positioning.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question:
      "How can you debug the Flexbox layout in the browser?",
    answers: [
      {
        name: "Huni",
        answer:
          "Inspect the flex container and items in DevTools. Many browsers highlight flex containers, show direction and spacing, and provide a Layout panel that lets you toggle flex properties and see the result live.",
      },
    ],
  },
  {
    category: "Responsive Design",
    question:
      "What is the difference between the Flexbox container and the Flexbox item?",
    answers: [
      {
        name: "Huni",
        answer:
          "The Flexbox container is the parent with display: flex and controls direction, wrapping and main alignment. Flex items are its direct children; you can control how each item grows, shrinks, or aligns within the container.",
      },
    ],
  },

  // Object Oriented Javascript
  {
    category: "Object Oriented Javascript",
    question:
      "What is the difference between the class syntax and the constructor function syntax?",
    answers: [
      {
        name: "Huni",
        answer:
          "Constructor functions are the older pattern using function + new, while class syntax is a cleaner, more modern way that looks like other OOP languages. Under the hood both use prototypes, but classes make the structure more explicit.",
      },
    ],
  },
  {
    category: "Object Oriented Javascript",
    question: "What does the new keyword do?",
    answers: [
      {
        name: "Huni",
        answer:
          "new creates a new object, sets its prototype to the constructor’s prototype, binds this inside the constructor to that object, and returns it (unless the constructor returns something else).",
      },
    ],
  },
  {
    category: "Object Oriented Javascript",
    question:
      "What does a constructor method do in class syntax? When is it executed?",
    answers: [
      {
        name: "Huni",
        answer:
          "The constructor is a special method in a class that runs once when you create an instance with new. It’s used to initialize the object’s fields and setup any needed state.",
      },
    ],
  },
  {
    category: "Object Oriented Javascript",
    question:
      "What are the class methods of a class syntax?",
    answers: [
      {
        name: "Huni",
        answer:
          "Class methods are functions defined in the class body (outside the constructor). They live on the prototype and are shared by all instances, representing the behavior of the class.",
      },
    ],
  },
  {
    category: "Object Oriented Javascript",
    question: "What are the fields of a class syntax?",
    answers: [
      {
        name: "Huni",
        answer:
          "Fields (or properties) hold the data of an instance. Traditionally they’re assigned in the constructor via this.field, and with newer syntax they can also be declared directly in the class body.",
      },
    ],
  },
  {
    category: "Object Oriented Javascript",
    question:
      "What is inheritance in the context of Javascript objects?",
    answers: [
      {
        name: "Huni",
        answer:
          "Inheritance lets one object or class reuse and extend the behavior of another. In JavaScript this is done via the prototype chain or class extends, so a child object can access the parent’s methods and properties.",
      },
    ],
  },
  {
    category: "Object Oriented Javascript",
    question: "What does the extends keyword do?",
    answers: [
      {
        name: "Huni",
        answer:
          "extends in a class definition creates a subclass that inherits from a parent class. The child automatically gets the parent’s prototype methods and can add or override methods as needed.",
      },
    ],
  },

  // Express
  {
    category: "Express",
    question:
      "Explain the concept of client-server communication in the context of web development.",
    answers: [
      {
        name: "Huni",
        answer:
          "In a client‑server model the client (e.g. browser) sends HTTP requests to a server, and the server processes them and sends back responses. Typically this happens via APIs that send and receive JSON.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "What is the role of HTTP requests and responses in web development? Explain the structure of an HTTP request and an HTTP response.",
    answers: [
      {
        name: "Huni",
        answer:
          "HTTP requests have a method, a URL, headers with metadata, and sometimes a body with data. Responses include a status code, headers, and an optional body with HTML or JSON. Together they define how frontend and backend communicate.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "What is Express.js and how does it simplify web application development in Node.js?",
    answers: [
      {
        name: "Huni",
        answer:
          "Express.js is a minimal web framework for Node.js that makes it easy to define routes, use middleware, and handle requests and responses. It hides a lot of low‑level HTTP details and gives a clean API for building APIs and servers.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "What are middlewares in Express.js? Can you list some examples of the built-in middleware?",
    answers: [
      {
        name: "Huni",
        answer:
          "Middlewares are functions that run between the request and the final route handler. They can read or modify req and res, or end the response. Built‑in ones include express.json(), express.urlencoded(), and express.static().",
      },
    ],
  },
  {
    category: "Express",
    question: "How can you tell Express.js to use a middleware?",
    answers: [
      {
        name: "Huni",
        answer:
          "You register middleware with app.use(...) for global use, or pass it as extra arguments in route definitions, so Express runs it before the actual handler.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "Explain the process of handling static files in Express.js.",
    answers: [
      {
        name: "Huni",
        answer:
          "Static files like CSS, images and client‑side JS are served by mounting express.static() on a folder. Then Express exposes everything in that directory at a public URL path.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "What does the built-in JSON middleware (express.json()) do?",
    answers: [
      {
        name: "Huni",
        answer:
          "express.json() parses incoming requests with a JSON body and puts the parsed object on req.body so you don’t have to parse it manually.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "How does Express.js handle HTTP request/response cycles?",
    answers: [
      {
        name: "Huni",
        answer:
          "Express chains middlewares and route handlers. A request enters the stack, passes through each middleware (which can modify it or reject it), and finally reaches a route handler that sends back a response.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "How does routing work in Express.js?",
    answers: [
      {
        name: "Huni",
        answer:
          "Routing maps HTTP methods and paths (like GET /users) to handler functions. You declare routes with app.get, app.post, etc., and Express calls the appropriate handler when a matching request arrives.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "What are the various methods available in Express.js for sending responses to clients? Explain the differences between res.send() and res.json().",
    answers: [
      {
        name: "Huni",
        answer:
          "Common methods: res.send for general responses, res.json for JSON, res.status to set status, res.sendFile for files. res.json automatically sets JSON headers and stringifies the object; res.send is more general and can send strings, buffers, or already‑stringified content.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "What is the purpose of the next() function in Express.js middleware?",
    answers: [
      {
        name: "Huni",
        answer:
          "next() hands control to the next middleware or route handler in the stack. If you forget to call it (or send a response), the request will hang. Passing an error to next triggers error‑handling middleware.",
      },
    ],
  },
  {
    category: "Express",
    question:
      "Explain the concept of route parameters in Express.js.",
    answers: [
      {
        name: "Huni",
        answer:
          "Route parameters are dynamic parts of the path, like /users/:id. Express parses them and puts their values on req.params, so you can use them inside handlers, e.g. to load a user by ID.",
      },
    ],
  },

  // REST and CRUD
  {
    category: "REST and CRUD",
    question:
      "Can you name some typical HTTP response codes and their meaning?",
    answers: [
      {
        name: "Huni",
        answer:
          "Examples: 200 OK (success), 201 Created (resource created), 400 Bad Request (client error), 401 Unauthorized (auth required or failed), 403 Forbidden (no permission), 404 Not Found (no such resource), 500 Internal Server Error (server failure).",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "Can you name some typical HTTP request/response headers and their meaning?",
    answers: [
      {
        name: "Huni",
        answer:
          "Examples: Content-Type (body format, like application/json), Authorization (credentials or tokens), Accept (which formats the client can handle), Cache-Control (caching rules), User-Agent (client info like browser).",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "What are the common HTTP methods used in web development, and what are their respective purposes?",
    answers: [
      {
        name: "Huni",
        answer:
          "Typical methods: GET (read data), POST (create), PUT (replace an existing resource), PATCH (partial update), DELETE (remove). They map naturally to CRUD operations in REST APIs.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "How does the GET method differ from the POST method? Which one uses the request body to receive data?",
    answers: [
      {
        name: "Huni",
        answer:
          "GET is used to retrieve data and passes parameters via the URL; it should not change server state. POST sends data in the request body and is used to create or submit data. So POST is the one that typically uses the body.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "Explain the use of the PATCH method in HTTP. How does it differ from the PUT method?",
    answers: [
      {
        name: "Huni",
        answer:
          "PATCH applies a partial update to a resource, changing only specified fields. PUT replaces the entire resource representation. PATCH is better when you only want to modify a few properties.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "How can the DELETE method be used to remove a resource from a server?",
    answers: [
      {
        name: "Huni",
        answer:
          "You send a DELETE request to the resource’s URL, e.g. DELETE /users/123. The server deletes it and usually responds with a status like 204 No Content to indicate success.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "What does the REST architecture mean? What are the REST Constraints?",
    answers: [
      {
        name: "Huni",
        answer:
          "REST is an architectural style using stateless HTTP and resource‑based URLs. Its constraints include client‑server separation, statelessness, cacheability, a uniform interface, layered system, and optionally code‑on‑demand.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "What does a URL's path represent in a REST architecture? Show an example of the recipe resource's CRUD operations.",
    answers: [
      {
        name: "Huni",
        answer:
          "The path identifies which resource you are acting on. For recipes: POST /recipes (create), GET /recipes and GET /recipes/:id (read), PUT or PATCH /recipes/:id (update), DELETE /recipes/:id (delete).",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "How do you handle form submissions using JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "Listen for the submit event, call event.preventDefault() to stop the default reload, then read the values from the form (e.g. via FormData or event.target.elements) and send them with fetch or another method.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "Explain the required elements necessary to define a form in HTML.",
    answers: [
      {
        name: "Huni",
        answer:
          "You need a <form> element with an action and method, at least one input/select/textarea with a name, and usually a submit button to trigger the submission.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "What is the purpose of the required attribute in HTML form elements?",
    answers: [
      {
        name: "Huni",
        answer:
          "The required attribute tells the browser that the field cannot be left empty. If it is, the form will not submit and the browser will show a validation message.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "Explain the different types of form input fields available in HTML.",
    answers: [
      {
        name: "Huni",
        answer:
          "Common ones: text (free text), number (numeric with optional min/max), email (requires email format), checkbox (multiple true/false options), radio (choose exactly one from a group). Each type has built‑in behavior and validation.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "Can you explain the purpose of the name attribute in the context of form submission?",
    answers: [
      {
        name: "Huni",
        answer:
          "The name attribute becomes the key when the form is serialized and sent. Without it, the field’s value is not included in the submitted data.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "Can you explain how we can connect a label tag to a form element?",
    answers: [
      {
        name: "Huni",
        answer:
          "Set the label’s for attribute to match the input’s id. Clicking the label then focuses or toggles the corresponding input and improves accessibility.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "How can you dynamically manipulate or modify form elements using JavaScript?",
    answers: [
      {
        name: "Huni",
        answer:
          "Use DOM methods like createElement, appendChild, remove, and setAttribute to add, remove, or change inputs based on user actions or conditions.",
      },
    ],
  },
  {
    category: "REST and CRUD",
    question:
      "How can you convert form data into a format that can be easily transmitted or processed by the server?",
    answers: [
      {
        name: "Huni",
        answer:
          "You can use the FormData API to build key‑value pairs from a form, or manually construct an object and send it as JSON with JSON.stringify in a fetch request.",
      },
    ],
  },

  // React
  {
    category: "React",
    question:
      "What is React.js and what are its key features?",
    answers: [
      {
        name: "Huni",
        answer:
          "React is a JavaScript library for building user interfaces. Key features include component‑based architecture, the virtual DOM, JSX syntax, unidirectional data flow via props, and hooks for state and side‑effects.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain the concept of virtual DOM and how it contributes to React's performance.",
    answers: [
      {
        name: "Huni",
        answer:
          "The virtual DOM is an in‑memory representation of the real DOM. React diffs the new virtual tree against the previous one and only updates the changed parts in the real DOM, which is much faster than re‑rendering everything.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain the component-based architecture in React.js.",
    answers: [
      {
        name: "Huni",
        answer:
          "React UIs are built from components: small, reusable pieces that each handle their own markup, logic, and styling. Components can be composed and nested to build complex interfaces while keeping the code modular.",
      },
    ],
  },
  {
    category: "React",
    question:
      "What is the significance of JSX in React.js?",
    answers: [
      {
        name: "Huni",
        answer:
          "JSX lets you write HTML‑like syntax directly in JavaScript. It improves readability and maps closely to the UI structure. At build time it is compiled into regular React.createElement calls.",
      },
    ],
  },
  {
    category: "React",
    question:
      "What are props in React and how are they used to pass data between components?",
    answers: [
      {
        name: "Huni",
        answer:
          "Props (properties) are read‑only values passed from a parent component to a child. They allow parents to configure children and share data down the component tree.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How can you access and utilize props within a functional component in React?",
    answers: [
      {
        name: "Huni",
        answer:
          "In a function component props are the argument. You can either use props.propertyName or destructure them in the parameter list, like function MyComp({ title }) { ... }.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How can you pass callback functions as props in React?",
    answers: [
      {
        name: "Huni",
        answer:
          "Define a function in the parent and pass it to the child as a prop. The child calls that function (often with some data), which lets the parent react to child events or update state.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain the concept of spreading props in React.",
    answers: [
      {
        name: "Huni",
        answer:
          "You can use the spread operator when passing props, e.g. <Child {...props} />. This forwards all properties of an object as individual props to the child component.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain the concept of default props (with ES6 JS syntax) in React.",
    answers: [
      {
        name: "Huni",
        answer:
          "With function components you can give props default values via parameter defaults, e.g. function Button({ label = \"Click me\" }) { ... }. If the parent doesn’t pass that prop, the default is used.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain the immutability principle when working with props and states in React.",
    answers: [
      {
        name: "Huni",
        answer:
          "Props must never be mutated inside a component; they’re read‑only. State updates should also be immutable: create new objects or arrays instead of mutating existing ones. This makes React’s change detection predictable.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How does React.js handle state management? Explain the concept of state and how it differs from props.",
    answers: [
      {
        name: "Huni",
        answer:
          "State is internal, changeable data stored in a component. Props come from outside and are read‑only. You manage state with hooks like useState; when it changes, React re‑renders the component.",
      },
    ],
  },
  {
    category: "React",
    question:
      "What are React hooks? Explain the purpose and benefits of hooks like useState and useEffect.",
    answers: [
      {
        name: "Huni",
        answer:
          "Hooks are functions that let you use state and lifecycle features in function components. useState manages local state, and useEffect runs side‑effects like fetching data or subscribing to events. They simplify code compared to class components.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain the concept of virtual DOM reconciliation in React.js.",
    answers: [
      {
        name: "Huni",
        answer:
          "Reconciliation is the process of comparing the new virtual DOM tree to the previous one and figuring out the minimal set of real DOM changes needed. React uses this diffing algorithm to update the UI efficiently.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain how to manage complex state objects with useState.",
    answers: [
      {
        name: "Huni",
        answer:
          "When state is an object, you usually update it by copying the previous object and changing only the needed fields, for example setUser(prev => ({ ...prev, name: \"Anna\" })). This preserves other properties.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Why is it important to provide a new array as an argument to the state setter function when adding an item to an existing array?",
    answers: [
      {
        name: "Huni",
        answer:
          "React relies on reference changes to detect updates. If you mutate the existing array and pass it back, React might not see a change. Creating a new array copy (e.g. [...old, newItem]) ensures a new reference and a re‑render.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How does conditional rendering work in React?",
    answers: [
      {
        name: "Huni",
        answer:
          "You choose what to render based on conditions using ternaries, logical &&, or early returns. For example: {isLoggedIn ? <Dashboard /> : <Login />}. This lets components show different content depending on props or state.",
      },
    ],
  },
  {
    category: "React",
    question:
      "What is the difference between a controlled and uncontrolled input element in React?",
    answers: [
      {
        name: "Huni",
        answer:
          "A controlled input's value is driven by React state and updated via onChange. An uncontrolled input keeps its own value in the DOM, and you read it via refs or the event, not via state.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How can you get the current input values from a form that contains uncontrolled input elements?",
    answers: [
      {
        name: "Huni",
        answer:
          "You can read values from the event’s target (like e.target.elements[name].value) on submit, or attach refs to individual inputs and read ref.current.value when needed.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How can you connect a label element to an input element in React?",
    answers: [
      {
        name: "Huni",
        answer:
          "Use htmlFor on the label and an id on the input with the same value. In JSX it’s <label htmlFor=\"email\"> and <input id=\"email\" ... />.",
      },
    ],
  },
  {
    category: "React",
    question:
      "How can you create a select input element in React? How does it differ from the HTML select tag?",
    answers: [
      {
        name: "Huni",
        answer:
          "In JSX a select looks similar to HTML, but you control its value via props. A controlled select uses value and onChange tied to state; an uncontrolled one may use defaultValue or refs. The main difference is that React binds value to state instead of the DOM managing it.",
      },
    ],
  },
  {
    category: "React",
    question:
      "Explain how a proxy works during React development. How can you tell the Vite dev server to proxy the requests to your backend?",
    answers: [
      {
        name: "Huni",
        answer:
          "A proxy forwards frontend requests (like /api/...) from the dev server to the real backend server to avoid CORS issues. In Vite you configure a proxy in vite.config.js and then use relative URLs (e.g. /api/users) in fetch calls.",
      },
    ],
  },
  {
    category: "React",
    question:
      "What is the difference between statements and expressions in Javascript? Why is it important when working with JSX?",
    answers: [
      {
        name: "Huni",
        answer:
          "Expressions produce a value (like a + b or a ternary), statements perform actions (if, for, while). JSX can embed only expressions inside { }, not full statements, so you have to structure logic accordingly.",
      },
    ],
  },

  // Testing Basics
  {
    category: "Testing Basics",
    question: "What is a test case?",
    answers: [
      {
        name: "Huni",
        answer:
          "A test case is a single scenario that checks whether a piece of code behaves as expected, with defined inputs, steps, and assertions about the result.",
      },
    ],
  },
  {
    category: "Testing Basics",
    question: "What are the advantages of writing unit tests?",
    answers: [
      {
        name: "Huni",
        answer:
          "Unit tests catch bugs early, document intended behavior, make refactoring safer, and generally improve code quality and confidence in changes.",
      },
    ],
  },
  {
    category: "Testing Basics",
    question: "What is an assertion? Give some examples.",
    answers: [
      {
        name: "Huni",
        answer:
          "An assertion is a statement in a test that checks if an actual value matches an expected value. Examples: expect(result).toBe(5), expect(list).toContain('item').",
      },
    ],
  },
  {
    category: "Testing Basics",
    question: "What is the arrange/act/assert pattern?",
    answers: [
      {
        name: "Huni",
        answer:
          "Arrange/Act/Assert is a structure for tests: first set up data and state (Arrange), then run the code under test (Act), and finally check the outcome with assertions (Assert).",
      },
    ],
  },
  {
    category: "Testing Basics",
    question: "What is code coverage? Why is it used?",
    answers: [
      {
        name: "Huni",
        answer:
          "Code coverage measures how much of your code is executed by tests. It helps find untested areas, but high coverage alone doesn’t guarantee good tests.",
      },
    ],
  },
  {
    category: "Testing Basics",
    question:
      "How do you test asynchronous code with Vitest?",
    answers: [
      {
        name: "Huni",
        answer:
          "Mark the test function async and use await inside, or return a Promise. Vitest waits for the Promise to resolve or reject before finishing the test.",
      },
    ],
  },
  {
    category: "Testing Basics",
    question:
      "What is setup & teardown in Vitest?",
    answers: [
      {
        name: "Huni",
        answer:
          "Setup (beforeAll/beforeEach) prepares shared state or resources before tests run, and teardown (afterAll/afterEach) cleans up afterwards. This avoids duplicated code and test side‑effects.",
      },
    ],
  },
  {
    category: "Testing Basics",
    question:
      "Give an example when you would use Vitest's toBe & toEqual assertions.",
    answers: [
      {
        name: "Huni",
        answer:
          "Use toBe for primitive values or reference equality (like numbers, strings). Use toEqual when comparing objects or arrays by value, because it does deep comparison.",
      },
    ],
  },

  // Firebase Realtime Database
  {
    category: "Firebase Realtime Database",
    question:
      "What is Firebase Realtime Database? Explain the key features and advantages.",
    answers: [
      {
        name: "Huni",
        answer:
          "Firebase Realtime Database is a cloud‑hosted NoSQL database that stores data as a big JSON tree and syncs it in real time to all connected clients. It’s serverless, cross‑platform, supports offline use, and integrates with other Firebase services.",
      },
    ],
  },
  {
    category: "Firebase Realtime Database",
    question:
      "Explain the concept of storing data in a Realtime Database. How does it store data in a JSON tree?",
    answers: [
      {
        name: "Huni",
        answer:
          "Data is organized as nested key‑value pairs in a JSON tree. Each path is like a folder/child chain. It’s flexible but you must design the structure carefully to avoid extremely deep nesting.",
      },
    ],
  },
  {
    category: "Firebase Realtime Database",
    question:
      "How can you access the Realtime Database with a REST API? What do the typical CRUD operations look like?",
    answers: [
      {
        name: "Huni",
        answer:
          "You can call the database REST endpoint with .json added to the path and use GET, POST, PUT/PATCH and DELETE for CRUD. You usually include an auth token in the query string for secured access.",
      },
    ],
  },
  {
    category: "Firebase Realtime Database",
    question:
      "How can the Realtime Database Security Rules help to define the structure of the stored data and when it can be read from or written to?",
    answers: [
      {
        name: "Huni",
        answer:
          "Rules let you express who can read/write and what shape the data must have. They can validate fields and types and use the auth context, which effectively adds structure and authorization to your otherwise schemaless JSON data.",
      },
    ],
  },
  {
    category: "Firebase Realtime Database",
    question:
      "Why is it a problem if the data is deeply nested? What techniques can solve this issue?",
    answers: [
      {
        name: "Huni",
        answer:
          "Deep nesting can make reads heavy, rules complicated, and updates hard. To fix it, flatten your data, avoid putting big subtrees under one key, and use references/IDs (normalization) instead of nesting full objects everywhere.",
      },
    ],
  },

  // Firebase Authentication
  {
    category: "Firebase Authentication",
    question:
      "Why authentication is needed for a web application?",
    answers: [
      {
        name: "Huni",
        answer:
          "Authentication verifies who the user is so only the right people can access protected actions or data. It’s essential for security and personalization.",
      },
    ],
  },
  {
    category: "Firebase Authentication",
    question:
      "What are the key functionalities of an authentication system?",
    answers: [
      {
        name: "Huni",
        answer:
          "Typical features: register, login, validate credentials, manage sessions or tokens, logout, and handle password resets or multi‑factor authentication.",
      },
    ],
  },
  {
    category: "Firebase Authentication",
    question:
      "How does the server know that the client is successfully authenticated?",
    answers: [
      {
        name: "Huni",
        answer:
          "After login, the server issues a token (like a JWT). The client sends this token with each request, and the server verifies it to confirm identity and permissions.",
      },
    ],
  },
  {
    category: "Firebase Authentication",
    question:
      "What is the difference between Authentication and Authorization?",
    answers: [
      {
        name: "Huni",
        answer:
          "Authentication answers \"Who are you?\"; authorization answers \"What are you allowed to do?\". Authentication comes first; authorization checks permissions after identity is known.",
      },
    ],
  },
  {
    category: "Firebase Authentication",
    question:
      "How can you initialize the Firebase Authentication SDK?",
    answers: [
      {
        name: "Huni",
        answer:
          "After calling initializeApp with your Firebase config, you call getAuth() to get the Auth instance that you use for sign‑up, login, logout, and tracking the current user.",
      },
    ],
  },
  {
    category: "Firebase Authentication",
    question:
      "How can the Firebase Realtime Database Security Rules enforce authorization?",
    answers: [
      {
        name: "Huni",
        answer:
          "Rules can inspect the auth object (like auth.uid) and allow or deny reads/writes depending on who the authenticated user is, so users can only access data they’re authorized to see or modify.",
      },
    ],
  },
  {
    category: "Firebase Authentication",
    question:
      "What kind of different authentication providers are supported by Firebase? Can you give some examples?",
    answers: [
      {
        name: "Huni",
        answer:
          "Firebase supports email/password, OAuth providers like Google, Facebook, GitHub or Microsoft, phone number auth, and even anonymous sign‑in. You can pick the combination that fits your app.",
      },
    ],
  },

  // Web Applications
  {
    category: "Web Applications",
    question:
      "Explain the concept of React Router. How does it enable client-side routing in React.js applications?",
    answers: [
      {
        name: "Huni",
        answer:
          "React Router maps URL paths to components on the client side and switches them without full page reloads. That gives a single‑page app a multi‑page feel while staying in the browser.",
      },
    ],
  },
  {
    category: "Web Applications",
    question:
      "Why is it needed to build a React application? What does this build step do?",
    answers: [
      {
        name: "Huni",
        answer:
          "The build step bundles, transpiles and optimizes your React app into static assets ready for production. It removes dev‑only features, minifies code, and outputs files that can be served efficiently to real users.",
      },
    ],
  },
  {
    category: "Web Applications",
    question:
      "What is the difference between local development (using a dev server, like Vite) and production deployment?",
    answers: [
      {
        name: "Huni",
        answer:
          "The dev server provides hot reload, nice error messages and unoptimized code, meant only for local development. Production deployment uses the built, optimized static files served from a real server or hosting, focusing on speed and stability.",
      },
    ],
  },
  {
    category: "Web Applications",
    question:
      "How can you deploy a Firebase application?",
    answers: [
      {
        name: "Huni",
        answer:
          "Use the Firebase CLI: initialize hosting, build your app, then run firebase deploy to upload the production build to Firebase Hosting. Firebase handles SSL, CDN, and caching.",
      },
    ],
  },
  {
    category: "Web Applications",
    question:
      "What are React Contexts? Which use cases are they suitable for?",
    answers: [
      {
        name: "Huni",
        answer:
          "React Context lets you share values globally across a component tree without passing props at every level. It’s good for things like auth state, theme, or language that many components need.",
      },
    ],
  },
];

const categoryToModule = {
  // OOP Java module
  "Java Ecosystem": "OOP Java",
  "Language Features": "OOP Java",
  "Type System": "OOP Java",
  Architecture: "OOP Java",
  "Unit Testing": "OOP Java",
  Databases: "OOP Java",
  "Bonus Questions (From Background Materials)": "OOP Java",

  // Prog Basics module (from module_progbasics.md)
  "Data Basics": "Prog Basics",
  "Algorithm Basics": "Prog Basics",
  "Function Basics": "Prog Basics",
  "Built-in Features": "Prog Basics",
  "View Basics": "Prog Basics",
  "Event Basics": "Prog Basics",
  "Design Basics": "Prog Basics",
  "JavaScript - Language Specialties": "Prog Basics",
  Git: "Prog Basics",
  Terminal: "Prog Basics",
  Debugging: "Prog Basics",

  // Advanced Java module (from module_advanced_java.md)
  "Web development": "Advanced Java",
  "Spring and Spring Boot": "Advanced Java",
  "Entity Relationships, ORM, Spring Data": "Advanced Java",
  "Spring Security": "Advanced Java",
  "Integration testing": "Advanced Java",
  DevOps: "Advanced Java",

  // Web module (from tech-interview-work-book-web.md)
  "Javascript Language Features": "Web",
  Fetch: "Web",
  "Responsive Design": "Web",
  "Object Oriented Javascript": "Web",
  Express: "Web",
  "REST and CRUD": "Web",
  React: "Web",
  "Testing Basics": "Web",
  "Firebase Realtime Database": "Web",
  "Firebase Authentication": "Web",
  "Web Applications": "Web",
};

const data = baseData.map((item) => ({
  ...item,
  module: categoryToModule[item.category] || "OOP Java",
}));

export { data };
