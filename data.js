const data = [
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
          "Interfaces define method signatures without implementation. \n    They are used to achieve abstraction and allow different classes to follow the same contract.",
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
];

export { data };
