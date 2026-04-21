/**
 * Fresher-friendly basic questions — covers:
 *  variables, loops, functions, classes, basic coding,
 *  interview essentials, topic understanding
 */
export const freshQuestions = {

  /* ══════════════ PYTHON ══════════════ */
  python: {
    basic: [
      { type: "Basic Syntax", question: "What does the following code print?\n\nprint(\"Hello, World!\")", options: ["Hello, World!", "print Hello, World!", "Error", "Nothing"], answer: 0 },
      { type: "Variables", question: "Which of these is a valid Python variable name?", options: ["2name", "my_name", "my-name", "class"], answer: 1 },
      { type: "Variables", question: "What is stored in x after this line?\n\nx = 10", options: ["The string \"10\"", "The integer 10", "Nothing", "An error occurs"], answer: 1 },
      { type: "Variables", question: "What does the `=` operator do in Python?", options: ["Checks if two values are equal", "Assigns a value to a variable", "Compares two variables", "Adds two numbers"], answer: 1 },
      { type: "Data Types", question: "What is the data type of `True` in Python?", options: ["String", "Integer", "Boolean", "Float"], answer: 2 },
      { type: "Data Types", question: "What does `type(42)` return?", options: ["<class 'float'>", "<class 'str'>", "<class 'int'>", "<class 'number'>"], answer: 2 },
      { type: "Data Types", question: "How do you convert the string '5' to an integer in Python?", options: ["str('5')", "int('5')", "float('5')", "num('5')"], answer: 1 },
      { type: "Strings", question: "What does `len(\"hello\")` return?", options: ["4", "5", "6", "Error"], answer: 1 },
      { type: "Strings", question: "How do you join two strings in Python?", options: ["name + age", "'Hello' + ' World'", "'Hello' - ' World'", "'Hello' * ' World'"], answer: 1 },
      { type: "Input / Output", question: "Which function is used to get user input in Python?", options: ["get()", "read()", "input()", "scan()"], answer: 2 },
      { type: "Comments", question: "How do you write a single-line comment in Python?", options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"], answer: 2 },
      { type: "Operators", question: "What is the output of `3 + 2 * 2`?", options: ["10", "7", "12", "Error"], answer: 1 },
      { type: "Operators", question: "Which operator checks if two values are equal?", options: ["=", "==", "!=", ":="], answer: 1 },
      { type: "Operators", question: "What does `10 % 3` return?", options: ["3", "1", "0", "3.33"], answer: 1 },
      { type: "Indentation", question: "What does indentation (spaces/tabs) mean in Python?", options: ["It is only for readability", "It defines code blocks — wrong indentation causes an error", "It speeds up the code", "It is optional"], answer: 1 },
      { type: "Lists", question: "How do you create an empty list in Python?", options: ["list = {}", "list = ()", "list = []", "list = <>"], answer: 2 },
      { type: "Lists", question: "What does `my_list.append(5)` do?", options: ["Removes 5 from the list", "Adds 5 at the beginning", "Adds 5 at the end", "Replaces all elements with 5"], answer: 2 },
      { type: "Lists", question: "How do you access the first element of a list `my_list`?", options: ["my_list[1]", "my_list[0]", "my_list.first()", "my_list[-1]"], answer: 1 },
      { type: "Loops", question: "What does this code print?\n\nfor i in range(3):\n    print(i)", options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"], answer: 1 },
      { type: "Loops", question: "Which keyword is used to stop a loop immediately?", options: ["stop", "exit", "break", "end"], answer: 2 },
      { type: "Loops", question: "What does `range(1, 5)` produce?", options: ["[1, 2, 3, 4, 5]", "[1, 2, 3, 4]", "[0, 1, 2, 3, 4]", "[1, 5]"], answer: 1 },
      { type: "Loops", question: "What is a `while` loop?", options: ["Runs exactly once", "Runs while a condition is True", "Runs a fixed number of times", "Runs until a list ends"], answer: 1 },
      { type: "Conditionals", question: "What does an `if` statement do?", options: ["Repeats code in a loop", "Runs code only if a condition is True", "Defines a function", "Imports a module"], answer: 1 },
      { type: "Conditionals", question: "What keyword handles the 'otherwise' case in an if statement?", options: ["elif", "else", "except", "default"], answer: 1 },
      { type: "Functions", question: "How do you define a function named `greet` in Python?", options: ["function greet():", "def greet():", "func greet():", "define greet():"], answer: 1 },
      { type: "Functions", question: "What does the `return` keyword do inside a function?", options: ["Prints the result", "Sends a value back to the caller", "Ends the program", "Starts a loop"], answer: 1 },
      { type: "Dictionaries", question: "How do you create a dictionary in Python?", options: ["d = []", "d = ()", "d = {}", "d = <key:value>"], answer: 2 },
      { type: "Dictionaries", question: "How do you access the value for key 'name' in dict `d`?", options: ["d.name", "d['name']", "d->name", "d.get_key('name')"], answer: 1 },
    ]
  },

  /* ══════════════ OOP ══════════════ */
  oop: {
    basic: [
      { type: "Interview", question: "What is a class in programming?", options: ["A function that runs automatically", "A blueprint/template for creating objects", "A type of loop", "A way to store a single value"], answer: 1 },
      { type: "Interview", question: "What is an object in OOP?", options: ["A keyword in Python", "An instance of a class", "A list of functions", "A database table"], answer: 1 },
      { type: "Interview", question: "What is the purpose of `__init__` in Python?", options: ["It destroys the object", "It initializes (sets up) an object when it is created", "It prints the object", "It imports the class"], answer: 1 },
      { type: "Interview", question: "What does `self` refer to in a Python class method?", options: ["The class itself", "The current instance (object)", "The parent class", "The constructor"], answer: 1 },
      { type: "Concepts", question: "What is inheritance?", options: ["One class copying another class's code manually", "A child class automatically getting properties and methods from a parent class", "Creating two identical classes", "Hiding data inside a class"], answer: 1 },
      { type: "Concepts", question: "What is encapsulation?", options: ["Running code faster", "Bundling data and methods together and hiding internal details", "Writing a class inside a function", "Sharing data between all objects"], answer: 1 },
      { type: "Concepts", question: "What is polymorphism in OOP?", options: ["Using the same method name across different classes with different behaviour", "Creating multiple objects at once", "Inheriting from multiple classes", "Hiding private variables"], answer: 1 },
      { type: "Coding", question: "What will this print?\n\nclass Dog:\n    def speak(self):\n        print('Woof!')\n\nd = Dog()\nd.speak()", options: ["Dog.speak()", "Error", "Woof!", "None"], answer: 2 },
      { type: "Coding", question: "Which keyword is used to create a class in Python?", options: ["object", "struct", "class", "def"], answer: 2 },
      { type: "Coding", question: "How do you create an object called `cat` from class `Animal`?", options: ["cat = new Animal()", "cat = Animal.create()", "cat = Animal()", "cat = class Animal()"], answer: 2 },
      { type: "Concepts", question: "What does `super()` do in Python?", options: ["Creates a new class", "Calls the parent class's method", "Deletes the object", "Lists all class methods"], answer: 1 },
      { type: "Interview", question: "What is method overriding?", options: ["Deleting a method in the parent class", "Redefining a parent class method in the child class", "Calling a method twice", "Passing extra arguments to a method"], answer: 1 },
      { type: "Interview", question: "What is the difference between a class attribute and an instance attribute?", options: ["No difference", "Class attributes are shared by all instances; instance attributes belong to one object", "Instance attributes can't be changed", "Class attributes must be integers"], answer: 1 },
      { type: "Coding", question: "What is the output?\n\nclass Car:\n    wheels = 4\n\nprint(Car.wheels)", options: ["Error", "None", "4", "Car.wheels"], answer: 2 },
      { type: "Concepts", question: "What is abstraction in OOP?", options: ["Exposing all internal details to the user", "Hiding complex implementation and showing only what is necessary", "Making code run faster", "Using multiple loops"], answer: 1 },
    ]
  },

  /* ══════════════ SQL ══════════════ */
  sql: {
    basic: [
      { type: "Interview", question: "What is a database?", options: ["A programming language", "An organised collection of structured data", "A type of web server", "A loop in programming"], answer: 1 },
      { type: "Interview", question: "What does `SELECT * FROM users` do?", options: ["Deletes all users", "Gets all columns and all rows from the users table", "Creates a table named users", "Updates all users"], answer: 1 },
      { type: "Interview", question: "What is a primary key?", options: ["The first column in a table", "A unique identifier for each row in a table", "A password for the database", "The largest value in a table"], answer: 1 },
      { type: "Clauses", question: "What does the `WHERE` clause do?", options: ["Groups rows together", "Sorts the results", "Filters rows based on a condition", "Counts rows"], answer: 2 },
      { type: "Clauses", question: "What does `ORDER BY name ASC` do?", options: ["Filters by name", "Sorts results by name from A to Z", "Sorts results by name from Z to A", "Counts rows by name"], answer: 1 },
      { type: "Clauses", question: "What does `LIMIT 5` do?", options: ["Skips the first 5 rows", "Returns only the first 5 rows", "Deletes 5 rows", "Counts 5 rows"], answer: 1 },
      { type: "Functions", question: "What does `COUNT(*)` return?", options: ["The sum of a column", "The number of rows", "The average value", "The maximum value"], answer: 1 },
      { type: "Functions", question: "Which SQL keyword removes duplicate rows from results?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "NONDUPLICATE"], answer: 1 },
      { type: "NULL", question: "What does NULL represent in SQL?", options: ["Zero", "An empty string", "The absence of a value / unknown", "False"], answer: 2 },
      { type: "NULL", question: "How do you check if a column value is NULL?", options: ["col = NULL", "col == NULL", "col IS NULL", "col EQUALS NULL"], answer: 2 },
      { type: "JOINs", question: "What is a JOIN in SQL?", options: ["Adding a new column to a table", "Combining rows from two or more tables based on a related column", "Deleting linked rows", "Counting related rows"], answer: 1 },
      { type: "DML", question: "Which SQL statement adds a new row to a table?", options: ["ADD INTO", "INSERT INTO", "PUSH INTO", "CREATE ROW"], answer: 1 },
      { type: "DML", question: "Which SQL statement removes rows from a table?", options: ["REMOVE", "DROP", "DELETE", "CLEAR"], answer: 2 },
      { type: "DML", question: "Which SQL statement modifies existing rows?", options: ["MODIFY", "CHANGE", "UPDATE", "ALTER ROW"], answer: 2 },
      { type: "Keys", question: "What is a foreign key?", options: ["A key used to encrypt data", "A column that links to the primary key of another table", "A duplicate of the primary key", "Any column that is not the primary key"], answer: 1 },
      { type: "GROUP BY", question: "What does GROUP BY do?", options: ["Sorts the result", "Groups rows with the same value in a column together", "Filters rows", "Joins two tables"], answer: 1 },
    ]
  },

  /* ══════════════ API ══════════════ */
  api: {
    basic: [
      { type: "Interview", question: "What is an API?", options: ["A type of database", "A set of rules that allows two software systems to communicate", "A programming language", "A web browser"], answer: 1 },
      { type: "Interview", question: "What does REST stand for?", options: ["Remote Execution of Server Tasks", "Representational State Transfer", "Really Easy Server Technology", "Reliable End-to-end Server Transfer"], answer: 1 },
      { type: "HTTP", question: "What is HTTP?", options: ["A database protocol", "A programming language", "A protocol for transferring data over the web", "A type of server"], answer: 2 },
      { type: "HTTP Methods", question: "Which HTTP method is used to retrieve (read) data?", options: ["POST", "PUT", "GET", "DELETE"], answer: 2 },
      { type: "HTTP Methods", question: "Which HTTP method is used to create (send) new data?", options: ["GET", "POST", "PATCH", "OPTIONS"], answer: 1 },
      { type: "HTTP Methods", question: "Which HTTP method is used to delete a resource?", options: ["GET", "POST", "PUT", "DELETE"], answer: 3 },
      { type: "Status Codes", question: "What does HTTP status code 200 mean?", options: ["Not Found", "Server Error", "OK — the request was successful", "Redirect"], answer: 2 },
      { type: "Status Codes", question: "What does HTTP status code 404 mean?", options: ["Unauthorized", "Resource Not Found", "Success", "Created"], answer: 1 },
      { type: "Status Codes", question: "What does HTTP status code 500 mean?", options: ["Not Found", "Redirect", "Success", "Internal Server Error"], answer: 3 },
      { type: "Status Codes", question: "What does HTTP status code 201 mean?", options: ["No Content", "Bad Request", "Created successfully", "Unauthorized"], answer: 2 },
      { type: "Data Format", question: "What is JSON?", options: ["A programming language", "A database type", "A lightweight data format using key-value pairs", "A server framework"], answer: 2 },
      { type: "Data Format", question: "Which of these is valid JSON?", options: ['{ name: "John" }', '{ "name": "John" }', "{ 'name': 'John' }", "name = John"], answer: 1 },
      { type: "Concepts", question: "What is an API endpoint?", options: ["A server's physical location", "A specific URL where an API can be accessed to perform an action", "A database table", "The last server in a chain"], answer: 1 },
      { type: "Concepts", question: "What is an API key used for?", options: ["Encrypting data in transit", "Identifying and authenticating the caller of an API", "Choosing which server to connect to", "Setting a timer for the request"], answer: 1 },
      { type: "Concepts", question: "What is a query parameter in a URL?", options: ["A part of the domain name", "Additional data passed in the URL after a `?`", "The HTTP method being used", "The server response format"], answer: 1 },
    ]
  },

  /* ══════════════ PANDAS ══════════════ */
  pandas: {
    basic: [
      { type: "Interview", question: "What is pandas used for in Python?", options: ["Web development", "Data manipulation and analysis", "Game development", "Network programming"], answer: 1 },
      { type: "Interview", question: "What is a DataFrame in pandas?", options: ["A single column of data", "A 2-dimensional table of rows and columns (like a spreadsheet)", "A list of numbers", "A Python dictionary"], answer: 1 },
      { type: "Interview", question: "What is a pandas Series?", options: ["A 2D table", "A 1-dimensional labelled array", "A loop in pandas", "A pandas function"], answer: 1 },
      { type: "Import", question: "What is the standard way to import pandas?", options: ["import pandas", "import pandas as p", "import pandas as pd", "from pandas import *"], answer: 2 },
      { type: "Reading Data", question: "How do you read a CSV file into a DataFrame?", options: ["pd.read_excel('file.csv')", "pd.open('file.csv')", "pd.read_csv('file.csv')", "pd.load('file.csv')"], answer: 2 },
      { type: "Exploring Data", question: "How do you view the first 5 rows of a DataFrame `df`?", options: ["df.first(5)", "df.show(5)", "df.head(5)", "df.top(5)"], answer: 2 },
      { type: "Exploring Data", question: "What does `df.shape` return?", options: ["Column names", "Data types", "A tuple of (rows, columns)", "Number of missing values"], answer: 2 },
      { type: "Exploring Data", question: "What does `df.info()` show?", options: ["The first 5 rows", "Column names, data types, and non-null counts", "Summary statistics like mean and max", "A random sample of rows"], answer: 1 },
      { type: "Selecting Data", question: "How do you select the 'age' column from DataFrame `df`?", options: ["df.get('age')", "df['age']", "df.select('age')", "df.column('age')"], answer: 1 },
      { type: "Selecting Data", question: "How do you filter rows where age > 25?", options: ["df.where('age > 25')", "df[df['age'] > 25]", "df.filter(age > 25)", "df.select(df.age > 25)"], answer: 1 },
      { type: "Missing Data", question: "How do you check for missing (null) values in a DataFrame?", options: ["df.missing()", "df.null()", "df.isnull().sum()", "df.na()"], answer: 2 },
      { type: "Operations", question: "What does `df['city'].value_counts()` do?", options: ["Counts the total rows", "Counts occurrences of each unique value in the 'city' column", "Finds the most common city only", "Sorts the city column"], answer: 1 },
      { type: "Operations", question: "What does `df.groupby('department')` do?", options: ["Sorts by department", "Groups rows that have the same department value together", "Deletes the department column", "Filters specific departments"], answer: 1 },
      { type: "Operations", question: "How do you drop a column named 'temp' from `df`?", options: ["df.remove('temp')", "df.delete('temp')", "df.drop('temp', axis=1)", "del df['temp'] only"], answer: 2 },
      { type: "Operations", question: "What does `df.sort_values('salary')` do?", options: ["Finds the max salary", "Sorts the DataFrame by the salary column (ascending by default)", "Groups by salary", "Filters high salary rows"], answer: 1 },
    ]
  },

  /* ══════════════ AI / ML ══════════════ */
  aiml: {
    basic: [
      { type: "Interview", question: "What is Machine Learning?", options: ["Programming a robot to move", "Teaching computers to learn from data and make decisions without being explicitly programmed", "Writing very complex if-else rules", "Using a faster computer"], answer: 1 },
      { type: "Interview", question: "What is supervised learning?", options: ["The model learns without any data", "Learning from labelled data where the correct answer is known", "The model labels its own data", "Running ML on a supercomputer"], answer: 1 },
      { type: "Interview", question: "What is unsupervised learning?", options: ["Learning from labelled data", "Finding hidden patterns in data without labels", "A model supervised by a human at all times", "Training without a GPU"], answer: 1 },
      { type: "Data", question: "What is a feature in machine learning?", options: ["The final output of a model", "An input variable used to train the model", "The accuracy score", "The number of layers in a neural network"], answer: 1 },
      { type: "Data", question: "What is a label in supervised learning?", options: ["The feature names", "The correct output/answer the model is trying to predict", "A column in the dataset that is removed", "The model's parameter"], answer: 1 },
      { type: "Data", question: "What is a training dataset?", options: ["Data used to evaluate the final model performance", "Data the model has never seen", "Data used to teach / fit the model", "Random data generated by the model"], answer: 2 },
      { type: "Data", question: "What is a test dataset used for?", options: ["Training the model", "Tuning hyperparameters", "Evaluating the model's performance on unseen data", "Generating new data"], answer: 2 },
      { type: "Concepts", question: "What is overfitting?", options: ["The model performs well on both training and test data", "The model learns the training data too well and performs badly on new data", "The model doesn't learn anything", "The model runs too slowly"], answer: 1 },
      { type: "Concepts", question: "What is underfitting?", options: ["The model is too complex", "The model learns nothing from training and performs badly on both training and test data", "The model has too many features", "The model runs too fast"], answer: 1 },
      { type: "Metrics", question: "What is accuracy in classification?", options: ["The speed of the model", "The percentage of correct predictions out of all predictions", "The number of training samples", "The size of the model"], answer: 1 },
      { type: "Concepts", question: "What is a classification problem?", options: ["Predicting a continuous number", "Predicting which category / class something belongs to", "Sorting a dataset", "Cleaning missing values"], answer: 1 },
      { type: "Concepts", question: "What is a regression problem?", options: ["Predicting a category label", "Predicting a continuous numerical value (e.g., house price)", "Grouping similar items", "Reducing dimensionality"], answer: 1 },
      { type: "Interview", question: "What is a neural network?", options: ["A network of computers", "A system of interconnected nodes (neurons) inspired by the human brain, used in deep learning", "A type of database", "A way to connect APIs"], answer: 1 },
      { type: "Interview", question: "What is cross-validation?", options: ["Checking if the model's code compiles", "A technique to evaluate model performance by splitting data into multiple train/test sets", "Comparing two different neural networks", "Validating the feature names"], answer: 1 },
      { type: "Tools", question: "What is scikit-learn?", options: ["A data visualisation library", "A popular Python library for building and evaluating machine learning models", "A deep learning framework", "A data cleaning tool"], answer: 1 },
    ]
  }
};
