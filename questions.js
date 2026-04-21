export const questionBank = {
  python: {
    basic: [
      { type: "Output Prediction", code: "x = [1, 2, 3]\nprint(x * 2)", question: "What is the output?", options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "TypeError", "[1, 2, 3]2"], answer: 0 },
      { type: "Missing Code", question: "Fill the blank to avoid shared mutable defaults:\n\ndef add_item(v, bucket=___):\n    bucket.append(v)\n    return bucket", options: ["[]", "None + inside set []", "list()", "{}"], answer: 1 },
      { type: "Debugging", code: "def f(items=[]):\n    items.append(1)\n    return items", question: "What's the core bug?", options: ["append is invalid", "Default list persists across calls", "Function must return tuple", "items should be global"], answer: 1 },
      { type: "Tricky Concept", question: "Given s='python', what is s[-10:]?", options: ["Error", "''", "'python'", "'n'"], answer: 2 },
      { type: "Scenario", question: "You need to transform 1M lines lazily with low memory. Best approach?", options: ["Build huge list then process", "Use generator pipeline", "Use recursion", "Convert all to dict"], answer: 1 },
      { type: "Logic", code: "a = [1,2,3]\nb = a\nb += [4]\nprint(a)", question: "What prints and why?", options: ["[1,2,3] because b is new object", "[1,2,3,4] because list mutated in place", "Error", "[4]"], answer: 1 }
    ],
    intermediate: [
      { type: "Output Prediction", code: "def outer():\n    x = 2\n    def inner(y):\n        return x * y\n    return inner\nf = outer()\nprint(f(4))", question: "Output?", options: ["8", "TypeError", "6", "None"], answer: 0 },
      { type: "Missing Code", question: "Complete decorator to preserve metadata:", code: "from functools import wraps\n\ndef log(fn):\n    @___(fn)\n    def wrapper(*a, **k):\n        return fn(*a, **k)\n    return wrapper", options: ["decorator", "wraps", "cache", "property"], answer: 1 },
      { type: "Debugging", code: "nums = [1,2,3,4]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)", question: "Why is behavior unreliable?", options: ["remove needs index", "Mutating list while iterating", "Modulo is wrong", "for requires range"], answer: 1 },
      { type: "Tricky Concept", question: "Which statement about tuples is true?", options: ["Tuple always deeply immutable", "Tuple can contain mutable objects", "Tuple uses hash only when empty", "Tuple cannot be sliced"], answer: 1 },
      { type: "Scenario", question: "You need retry with backoff for flaky API calls. Best Python tool?", options: ["Manual while True with sleep fixed", "tenacity/backoff library with jitter", "Use assert in loop", "threading.Timer"], answer: 1 },
      { type: "Logic", code: "vals = ['10', '2', '30']\nprint(sorted(vals))", question: "How to sort numerically ascending?", options: ["sorted(vals, reverse=True)", "sorted(vals, key=int)", "list.sort(vals)", "vals.sort(str)"], answer: 1 }
    ],
    advanced: [
      { type: "Output Prediction", code: "funcs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])", question: "Output?", options: ["[0,1,2]", "[2,2,2]", "Error", "[1,2,3]"], answer: 0 },
      { type: "Missing Code", code: "class A:\n    def __init__(self):\n        self.__x = 1\n\nobj = A()\nprint(obj.___)", question: "Access mangled private attr without modifying class:", options: ["__x", "_A__x", "A.__x", "__A_x"], answer: 1 },
      { type: "Debugging", code: "import asyncio\n\nasync def main():\n    asyncio.create_task(asyncio.sleep(1))\n\nasyncio.run(main())", question: "Subtle issue?", options: ["sleep can't be task", "Task may be cancelled before completion", "run cannot call main", "Need threading"], answer: 1 },
      { type: "Tricky Concept", question: "Decorator order @d1 above @d2 means:", options: ["d1 runs first at call time only", "Equivalent to d1(d2(fn))", "Equivalent to d2(d1(fn))", "Order undefined"], answer: 1 },
      { type: "Scenario", question: "High-throughput ETL transforms CPU-heavy Python code. Best speedup direction?", options: ["More threads in CPython", "Vectorize / C extensions / multiprocessing", "Add print debugging", "Use globals"], answer: 1 },
      { type: "Logic", code: "def f(a, b, /, c, *, d):\n    return a+b+c+d", question: "Valid call?", options: ["f(a=1,b=2,c=3,d=4)", "f(1,2,3,4)", "f(1,2,c=3,d=4)", "f(1,b=2,c=3,d=4)"], answer: 2 }
    ]
  },
  oop: {
    basic: [
      { type: "Output Prediction", code: "class A:\n    def show(self):\n        return 'A'\nclass B(A):\n    pass\nprint(B().show())", question: "Output?", options: ["A", "B", "Error", "None"], answer: 0 },
      { type: "Missing Code", question: "To call base constructor in Python subclass, use:", options: ["base().__init__()", "super().__init__()", "this.parent()", "A.init(self)"], answer: 1 },
      { type: "Debugging", code: "class User:\n    def __init__(name):\n        self.name = name", question: "What's wrong?", options: ["Need return self", "Missing self parameter", "Class name invalid", "__init__ cannot assign"], answer: 1 },
      { type: "Tricky Concept", question: "Encapsulation primarily helps by:", options: ["Hiding all data absolutely", "Controlling access via clear interface", "Preventing inheritance", "Increasing CPU speed"], answer: 1 },
      { type: "Scenario", question: "Multiple shapes share area() behavior but different formulas. Best design?", options: ["Huge if/else on type string", "Polymorphic subclasses implementing area()", "Global function mutating state", "Duplicate code"], answer: 1 },
      { type: "Logic", question: "Method overriding means:", options: ["Same name, different class hierarchy with new implementation", "Two methods same name in same class", "Adding private variable", "Calling static method"], answer: 0 }
    ],
    intermediate: [
      { type: "Output Prediction", code: "class A:\n    def f(self): return 'A'\nclass B(A):\n    def f(self): return super().f() + 'B'\nprint(B().f())", question: "Output?", options: ["AB", "B", "A", "Error"], answer: 0 },
      { type: "Missing Code", question: "To enforce method implementation contract in Python:", options: ["@final", "abc.ABC with @abstractmethod", "@staticmethod", "__slots__"], answer: 1 },
      { type: "Debugging", code: "class C:\n    count = 0\n    def __init__(self):\n        self.count += 1", question: "Why does class counter stay 0?", options: ["__init__ not called", "self.count shadows class variable", "count must be private", "Need dataclass"], answer: 1 },
      { type: "Tricky Concept", question: "In diamond inheritance, Python resolves methods using:", options: ["Depth-first right-first", "C3 MRO", "Randomized chain", "Oldest class only"], answer: 1 },
      { type: "Scenario", question: "You need plugin behavior switchable at runtime without subclass explosion.", options: ["Strategy pattern via composition", "Create 1 subclass per combination", "Use global flags everywhere", "Hardcode in base class"], answer: 0 },
      { type: "Logic", code: "class A:\n    def x(self): return 1\nclass B:\n    def x(self): return 2\nclass C(A,B):\n    pass\nprint(C().x())", question: "Output and why?", options: ["2, B wins always", "1, left-to-right MRO", "Error ambiguous", "None"], answer: 1 }
    ],
    advanced: [
      { type: "Output Prediction", code: "class D:\n    def __getattribute__(self, n):\n        if n == 'x': return 42\n        return object.__getattribute__(self, n)\nprint(D().x)", question: "Output?", options: ["42", "AttributeError", "None", "x"], answer: 0 },
      { type: "Missing Code", question: "A class should be immutable and memory-lean. Choose best combo:", options: ["Public attrs + setters", "frozen dataclass with slots=True", "Only inheritance", "Use __dict__ heavily"], answer: 1 },
      { type: "Debugging", code: "class Repo:\n    _conn = connect()\n    def query(self):\n        return self._conn.run()", question: "Major design issue?", options: ["Method name too short", "Shared eager global connection causes lifecycle/testability problems", "query must be static", "connect must be property"], answer: 1 },
      { type: "Tricky Concept", question: "Liskov Substitution violation occurs when subtype:", options: ["Adds methods", "Strengthens preconditions or breaks expected behavior", "Uses composition", "Has docstring"], answer: 1 },
      { type: "Scenario", question: "Need to add cross-cutting logging to many classes without editing each method.", options: ["Decorator or proxy/aspect style wrapper", "Copy paste logging in all methods", "Avoid logging", "Use inheritance for every class"], answer: 0 },
      { type: "Logic", question: "Best reason to prefer composition over inheritance here?", options: ["Always faster", "Decouples behavior and reduces fragile base-class coupling", "No need for interfaces", "Prevents polymorphism"], answer: 1 }
    ]
  },
  sql: {
    basic: [
      { type: "Output Prediction", code: "SELECT COUNT(*) FROM users WHERE city IS NULL;", question: "What does it count?", options: ["Rows where city is NULL", "Distinct city values", "All rows", "Rows where city = 'NULL'"], answer: 0 },
      { type: "Missing Code", code: "SELECT name, SUM(amount)\nFROM sales\nGROUP BY ___;", question: "What should replace blank?", options: ["amount", "name", "sales", "SUM(amount)"], answer: 1 },
      { type: "Debugging", code: "SELECT * FROM A INNER JOIN B;", question: "Bug?", options: ["JOIN not supported", "Missing ON/USING condition", "Need GROUP BY first", "Must use LEFT JOIN"], answer: 1 },
      { type: "Tricky Concept", question: "Which join keeps all left rows even without match?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"], answer: 1 },
      { type: "Scenario", question: "You need fast lookup by email often used in WHERE. Best first step?", options: ["Create index on email", "Use SELECT *", "Denormalize all tables", "Disable constraints"], answer: 0 },
      { type: "Logic", question: "WHERE vs HAVING: true statement?", options: ["HAVING filters before grouping", "WHERE filters rows before GROUP BY", "They are equivalent", "WHERE supports aggregate only"], answer: 1 }
    ],
    intermediate: [
      { type: "Output Prediction", code: "SELECT dept, COUNT(*) c\nFROM emp\nGROUP BY dept\nHAVING COUNT(*) > 5;", question: "Returns:", options: ["Employees with salary >5", "Departments with more than 5 employees", "Only dept named 5", "Error"], answer: 1 },
      { type: "Missing Code", code: "SELECT e.*\nFROM emp e\nWHERE salary > (\n  SELECT AVG(salary) FROM emp WHERE dept = e.___\n);", question: "Fill blank", options: ["salary", "id", "dept", "name"], answer: 2 },
      { type: "Debugging", code: "SELECT id, name, MAX(score)\nFROM exams\nGROUP BY id;", question: "Issue in strict SQL modes?", options: ["MAX unsupported", "name not aggregated or grouped", "id can't be grouped", "Need ORDER BY first"], answer: 1 },
      { type: "Tricky Concept", question: "NOT IN behaves unexpectedly when subquery returns NULL because:", options: ["NULL makes comparison unknown", "NOT IN ignores null safely", "It becomes LEFT JOIN", "DB crashes"], answer: 0 },
      { type: "Scenario", question: "Need latest order per customer with tie-break by highest id.", options: ["Window function with ROW_NUMBER partition by customer", "GROUP BY customer only", "DISTINCT *", "ORDER BY globally LIMIT 1"], answer: 0 },
      { type: "Logic", question: "Correlated subquery means:", options: ["Runs once only", "References outer query row values", "Must use JOIN", "Cannot be in WHERE"], answer: 1 }
    ],
    advanced: [
      { type: "Output Prediction", code: "SELECT id, SUM(amount) OVER(PARTITION BY acct ORDER BY ts\nROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running\nFROM tx;", question: "What is running?", options: ["Total all accounts", "Running total per account by time", "Count rows", "Latest amount only"], answer: 1 },
      { type: "Missing Code", code: "WITH ranked AS (\n  SELECT *, ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY created_at DESC, id DESC) rn\n  FROM events\n)\nSELECT * FROM ranked WHERE rn = ___;", question: "Fill blank", options: ["0", "1", "2", "NULL"], answer: 1 },
      { type: "Debugging", question: "Query uses function on indexed column in WHERE and slows badly. Fix?", options: ["Add more joins", "Rewrite predicate to be sargable (avoid wrapping indexed column)", "Remove index", "Use SELECT DISTINCT"], answer: 1 },
      { type: "Tricky Concept", question: "Serializable isolation strongest guarantee is:", options: ["No dirty reads only", "Equivalent to some serial execution order", "Always fastest", "No locks used"], answer: 1 },
      { type: "Scenario", question: "You must upsert safely under concurrency in PostgreSQL.", options: ["SELECT then INSERT always", "INSERT ... ON CONFLICT DO UPDATE", "Disable transactions", "Use temp table only"], answer: 1 },
      { type: "Logic", question: "Window functions are evaluated:", options: ["Before WHERE", "After GROUP BY and before final ORDER BY output phase", "Instead of SELECT", "Only in subqueries"], answer: 1 }
    ]
  },
  api: {
    basic: [
      { type: "Tricky Concept", question: "Which method should be idempotent by design?", options: ["POST", "PUT", "PATCH always non-idempotent", "CONNECT"], answer: 1 },
      { type: "Output Prediction", code: "Client sends GET /users/1 with body payload.", question: "Typical REST behavior?", options: ["Body is generally ignored/unsupported by many servers", "Always 201", "Guaranteed update", "Protocol error always"], answer: 0 },
      { type: "Missing Code", question: "Missing status code for successful resource creation:", options: ["200", "201", "204", "304"], answer: 1 },
      { type: "Debugging", question: "Frontend sends JSON but API returns 415 Unsupported Media Type. Most likely fix?", options: ["Add Accept: */*", "Set Content-Type: application/json", "Use GET instead", "Disable CORS"], answer: 1 },
      { type: "Scenario", question: "Token expired mid-session. Best UX + security approach?", options: ["Retry endlessly", "Use refresh token flow + short-lived access token", "Store password in localStorage", "Disable expiry"], answer: 1 },
      { type: "Logic", question: "401 vs 403: correct statement?", options: ["401 means authenticated but forbidden", "403 means unauthenticated", "401 unauthenticated/invalid auth, 403 authenticated but not allowed", "Same meaning"], answer: 2 }
    ],
    intermediate: [
      { type: "Output Prediction", code: "If-None-Match: \"abc\" against unchanged resource ETag \"abc\"", question: "Expected response?", options: ["200 with full body", "304 Not Modified", "409 Conflict", "206 Partial"], answer: 1 },
      { type: "Missing Code", question: "For partial updates of a resource, preferred HTTP method:", options: ["PUT only", "PATCH", "TRACE", "OPTIONS"], answer: 1 },
      { type: "Debugging", question: "Client gets CORS preflight failure for custom header. What must server include?", options: ["Access-Control-Allow-Headers containing header", "Only Content-Length", "WWW-Authenticate", "Set-Cookie required"], answer: 0 },
      { type: "Tricky Concept", question: "Why include idempotency key for payment POST?", options: ["Compress payload", "Prevent duplicate charges on retries", "Speed TLS", "Avoid auth"], answer: 1 },
      { type: "Scenario", question: "Need backward-compatible API evolution.", options: ["Remove fields immediately", "Version API and add optional fields conservatively", "Break all clients and notify later", "Return random schema"], answer: 1 },
      { type: "Logic", question: "Best response for successful DELETE with no body:", options: ["201", "204", "301", "412"], answer: 1 }
    ],
    advanced: [
      { type: "Output Prediction", code: "Gateway timeout occurs upstream after 30s, edge returns 504.", question: "Who likely timed out?", options: ["Client DNS only", "Proxy/gateway waiting for upstream", "Auth token", "Browser cache"], answer: 1 },
      { type: "Missing Code", question: "Choose strongest browser-safe token storage pattern for SPA:", options: ["localStorage access token", "httpOnly secure sameSite cookies with CSRF protection", "Query param token", "Plain text file"], answer: 1 },
      { type: "Debugging", question: "Intermittent duplicate order creation on network retries. Best API-side fix?", options: ["Increase timeout", "Implement idempotency keys + dedupe persistence", "Disable retries client-side only", "Return 500 always"], answer: 1 },
      { type: "Tricky Concept", question: "Why can PATCH be non-idempotent?", options: ["PATCH forbidden by RFC", "Patch document can represent incremental operation", "No body allowed", "Only XML allowed"], answer: 1 },
      { type: "Scenario", question: "Need near-real-time updates for stock ticks to many clients.", options: ["Long polling every 200ms", "WebSocket or SSE based on bidirectional needs", "Daily cron", "Only POST responses"], answer: 1 },
      { type: "Logic", question: "Circuit breaker in API clients mainly prevents:", options: ["JSON parse errors", "Cascading failures from repeatedly calling unhealthy upstream", "Authorization bugs", "DNS lookup"], answer: 1 }
    ]
  },
  pandas: {
    basic: [
      { type: "Output Prediction", code: "import pandas as pd\ns = pd.Series([1, None, 3])\nprint(s.mean())", question: "Output behavior?", options: ["NaN always", "2.0 (NaN skipped by default)", "Error", "1.5"], answer: 1 },
      { type: "Missing Code", code: "df = df[df['age'] ___ 18]", question: "Filter adults:", options: [">", "<", "==", "!="], answer: 0 },
      { type: "Debugging", question: "You get SettingWithCopyWarning after chained assignment. Better fix?", options: ["Ignore warning", "Use .loc with explicit assignment", "Convert to list first", "Use loop"], answer: 1 },
      { type: "Tricky Concept", question: "df.loc uses:", options: ["Integer position only", "Label-based indexing", "Column order index only", "Boolean only"], answer: 1 },
      { type: "Scenario", question: "Need fast column-wise operation over large DataFrame.", options: ["for row in iterrows()", "Vectorized pandas/numpy ops", "Nested Python loops", "Apply python print"], answer: 1 },
      { type: "Logic", question: "dropna(subset=['x']) does what?", options: ["Drops rows where x is null", "Drops column x", "Fills null in x", "Drops duplicate x"], answer: 0 }
    ],
    intermediate: [
      { type: "Output Prediction", code: "df = pd.DataFrame({'k':['a','a','b'], 'v':[1,2,3]})\nprint(df.groupby('k')['v'].sum()['a'])", question: "Output?", options: ["1", "2", "3", "4"], answer: 2 },
      { type: "Missing Code", code: "df['ratio'] = df['num'] / df['den']\ndf['ratio'] = df['ratio'].replace([np.inf, -np.inf], ___)", question: "Replace infinities with:", options: ["0", "np.nan", "1", "'inf'"], answer: 1 },
      { type: "Debugging", question: "merge creates unexpected row explosion. Primary reason?", options: ["Wrong dtype", "Join keys not unique causing many-to-many join", "Pandas bug always", "Need concat instead"], answer: 1 },
      { type: "Tricky Concept", question: "groupby().transform differs from agg because transform:", options: ["Returns scalar only", "Returns aligned result same length as original", "Drops index", "Always slower"], answer: 1 },
      { type: "Scenario", question: "Need per-group z-score added back to each row.", options: ["groupby+agg then lose mapping", "groupby+transform with vectorized formula", "for-loop per row", "sort_values only"], answer: 1 },
      { type: "Logic", question: "When to prefer category dtype?", options: ["High-cardinality free text", "Low-cardinality repeated strings to save memory", "Numeric columns only", "Datetime only"], answer: 1 }
    ],
    advanced: [
      { type: "Output Prediction", code: "idx = pd.MultiIndex.from_tuples([('A',1),('A',2),('B',1)])\ns = pd.Series([10,20,30], index=idx)\nprint(s.loc['A'].sum())", question: "Output?", options: ["10", "20", "30", "60"], answer: 2 },
      { type: "Missing Code", question: "Best join for time-series nearest prior key in pandas:", options: ["merge", "merge_asof", "concat", "pivot_table"], answer: 1 },
      { type: "Debugging", question: "to_datetime silently creates NaT for bad rows and you lose data. Better strategy?", options: ["errors='coerce' then audit invalid rows explicitly", "Use errors='ignore' forever", "Drop column", "Convert with int()"], answer: 0 },
      { type: "Tricky Concept", question: "Why can apply(axis=1) be slow?", options: ["Uses Python-level row iteration", "Compiles to C automatically", "Runs in GPU by default", "Always vectorized"], answer: 0 },
      { type: "Scenario", question: "Dataset barely fits memory; must aggregate by key.", options: ["Read all then loop", "Chunked read + incremental aggregation", "Convert to JSON string", "Use plot first"], answer: 1 },
      { type: "Logic", question: "Reliable way to compare two DataFrames for exact equality including NaNs?", options: ["df1 == df2", "df1.equals(df2)", "str(df1)==str(df2)", "np.array_equal(df1,df2) always"], answer: 1 }
    ]
  },
  aiml: {
    basic: [
      { type: "Tricky Concept", question: "Overfitting usually means:", options: ["High train and high test error", "Low train error, worse test generalization", "Model too small always", "Data leaked from future"], answer: 1 },
      { type: "Output Prediction", code: "Model A: train 99%, val 72%\nModel B: train 88%, val 85%", question: "Which generalizes better?", options: ["A", "B", "Both equal", "Cannot compare"], answer: 1 },
      { type: "Missing Code", question: "For class imbalance in evaluation, prefer:", options: ["Accuracy only", "Precision/Recall/F1 or PR-AUC", "MSE", "R2"], answer: 1 },
      { type: "Debugging", question: "Data leakage bug example?", options: ["Scaling using train-only stats", "Using full dataset stats before split", "Train/val split before feature engineering fit", "Cross-validation"], answer: 1 },
      { type: "Scenario", question: "False negatives are very costly (disease detection). Focus metric:", options: ["Recall", "Precision only", "MAE", "Adjusted R2"], answer: 0 },
      { type: "Logic", question: "Bias-variance tradeoff: increasing model complexity tends to:", options: ["Increase bias and decrease variance", "Decrease bias and increase variance", "Decrease both always", "Affect neither"], answer: 1 }
    ],
    intermediate: [
      { type: "Output Prediction", code: "Confusion matrix: TP=40, FP=10, FN=20\nPrecision = ?", question: "Compute precision.", options: ["0.50", "0.67", "0.80", "0.40"], answer: 2 },
      { type: "Missing Code", question: "To reduce overfitting in tree models, tune:", options: ["Increase max_depth aggressively", "Regularize with max_depth/min_samples_leaf", "Remove validation set", "Only add features"], answer: 1 },
      { type: "Debugging", question: "Cross-validation scores unstable across folds. Likely issue?", options: ["Too much data", "Data not stratified / high variance split", "Model deterministic bug only", "Need fewer folds always"], answer: 1 },
      { type: "Tricky Concept", question: "ROC-AUC can look high but still poor for rare positives because:", options: ["ROC ignores negatives", "Class imbalance can hide poor precision at useful thresholds", "AUC always equals F1", "ROC invalid for binary"], answer: 1 },
      { type: "Scenario", question: "You deploy model and data distribution drifts slowly.", options: ["Never retrain", "Monitor drift + performance, trigger retraining pipeline", "Delete old data", "Freeze thresholds forever"], answer: 1 },
      { type: "Logic", question: "In k-fold CV, test fold should be:", options: ["Used for hyperparameter tuning every iteration", "Kept unseen for that fold's training", "Merged back before scoring", "Reused as training only"], answer: 1 }
    ],
    advanced: [
      { type: "Output Prediction", code: "If threshold increases from 0.5 to 0.8 in binary classifier, what typically happens?", question: "Choose best expected effect.", options: ["Recall up, precision down", "Recall down, precision up", "Both up", "No change"], answer: 1 },
      { type: "Missing Code", question: "For unbiased model selection with hyperparameter search, use:", options: ["Single train/test split only", "Nested cross-validation", "Train accuracy", "Random threshold tuning"], answer: 1 },
      { type: "Debugging", question: "Model performs great offline but fails in production due to feature mismatch. Best prevention?", options: ["Manually patch occasionally", "Shared feature pipeline + schema/version checks", "Increase epochs", "Use bigger GPU"], answer: 1 },
      { type: "Tricky Concept", question: "SHAP explanations are:", options: ["Always causal effects", "Attribution under model assumptions, not proof of causality", "Only for trees", "Equivalent to p-values"], answer: 1 },
      { type: "Scenario", question: "Need low-latency inference under tight SLA and slight accuracy drop acceptable.", options: ["Distill/prune/quantize model", "Always choose largest model", "Disable batching and profiling", "Use CPU loops in Python"], answer: 0 },
      { type: "Logic", question: "When comparing models with different business costs, best strategy?", options: ["Use accuracy only", "Optimize expected cost/utility with threshold tuning", "Pick highest recall always", "Randomly choose"], answer: 1 }
    ]
  }
};
