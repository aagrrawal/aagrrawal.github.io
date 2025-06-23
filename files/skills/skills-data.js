const staticSkillsData = {
    "Kubernetes": {
        activities: {
            "Activity 1: Setup and Deep Dive into Kubernetes Architecture": [
                "Read: Kubernetes Architecture | https://kubernetes.io/docs/concepts/overview/components/",
                "Install Minikube/kind and simulate node behavior | https://minikube.sigs.k8s.io",
                "Explore control plane vs worker node responsibilities",
                "Visualize resources using k9s and Lens | https://k9scli.io"
            ],
            "Activity 2: Deploy and Expose Applications": [
                "Create Deployments, Services | https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
                "Use NodePort, LoadBalancer, Ingress",
                "Create Helm chart for sample app | https://helm.sh/docs/intro/quickstart/",
                "Visualize services using Lens"
            ],
            "Activity 3: Manage Stateful Applications": [
                "Understand StatefulSets vs Deployments",
                "Deploy Redis or MySQL using StatefulSets",
                "Attach Persistent Volumes and PVCs",
                "Backup/restore volume data"
            ],
            "Activity 4: Scheduling & Affinity Rules": [
                "Use nodeSelector, taints/tolerations",
                "Define affinity and anti-affinity rules",
                "Test pod placement behavior"
            ],
            "Activity 5: Kubernetes Networking": [
                "Understand CNI plugins",
                "Deploy Calico or Flannel",
                "Create Network Policies",
                "Analyze pod communication patterns"
            ],
            "Activity 6: Kubernetes Security": [
                "Apply RBAC for user access",
                "Create PodSecurityPolicies / OPA Gatekeeper",
                "Test least privilege access"
            ],
            "Activity 7: Monitoring and Logging": [
                "Install Prometheus and Grafana",
                "Visualize metrics and alerts",
                "Add Loki/Fluentd for centralized logging"
            ],
            "Activity 8: Cluster Upgrades and Maintenance": [
                "Use kubeadm to simulate upgrade",
                "Practice drain/cordon/reboot node",
                "Upgrade control plane and node components"
            ],
            "Activity 9: Troubleshooting Kubernetes": [
                "Check logs, events, describe commands",
                "Analyze CrashLoopBackOff and Pending pods",
                "Use `kubectl-debug`, `stern`, and `kubetail`"
            ],
            "Activity 10: Advanced Helm and GitOps": [
                "Templatize complex Helm charts",
                "Use Kustomize for overlays",
                "Implement ArgoCD or FluxCD for GitOps"
            ],
            "Activity 11: Autoscaling and Resource Optimization": [
                "Configure HPA/VPA",
                "Set requests/limits correctly",
                "Profile resource usage with metrics"
            ],
            "Activity 12: CI/CD Pipeline Integration": [
                "Integrate GitHub Actions with Kubernetes",
                "Push image → build → deploy flow",
                "Use Skaffold for local CI testing"
            ],
            "Activity 13: Multi-Tenant Clusters and Namespaces": [
                "Design namespaces per team",
                "Apply resource quotas and limit ranges",
                "Use NetworkPolicies between tenants"
            ],
            "Activity 14: Cost Estimation and Budgeting": [
                "Enable metrics server cost monitoring",
                "Use open-source tools like Kubecost | https://www.kubecost.com/",
                "Analyze resource usage for cost reduction"
            ],
            "Activity 15: Capstone Project - Build a Production-Grade Cluster": [
                "Design architecture for scalable app",
                "Use GitOps, monitoring, secure policies",
                "Demonstrate zero-downtime deployment",
                "Document lessons and prepare demo"
            ]
        }
    },

    "Kafka": {
        activities: {
            "Activity 1: Understand Kafka Architecture & Internals": [
                "Read Kafka documentation | https://kafka.apache.org/documentation/",
                "Deploy Kafka via Docker or on cloud",
                "Explore producer, consumer, brokers, partitions, topics",
                "Analyze logs and monitor health with Kafka Manager"
            ],
            "Activity 2: Schema Management and Serialization": [
                "Use Avro, Protobuf with Schema Registry",
                "Version and evolve schemas | https://docs.confluent.io/platform/current/schema-registry/",
                "Send/receive typed messages"
            ],
            "Activity 3: Kafka Streams and KSQLDB": [
                "Implement simple stream transformations",
                "Query topics using ksqlDB | https://ksqldb.io/",
                "Windowed joins and aggregations"
            ],
            "Activity 4: Kafka Connect": [
                "Setup connectors to ingest/export data",
                "Use JDBC, Elasticsearch, S3 connectors",
                "Monitor tasks and offsets"
            ],
            "Activity 5: Topic Management": [
                "Create/delete/modify topics",
                "Configure replication, partitioning",
                "Simulate rebalancing scenarios"
            ],
            "Activity 6: Kafka Security": [
                "Enable SSL, SASL for brokers",
                "Create ACLs for topics and consumers",
                "Test secure and insecure access"
            ],
            "Activity 7: Monitoring Kafka Clusters": [
                "Install Confluent Control Center or open-source alternatives",
                "Track throughput, lag, partition imbalance",
                "Set alerts and thresholds"
            ],
            "Activity 8: Performance Optimization": [
                "Tune producer batch size, linger.ms",
                "Configure broker disk, memory settings",
                "Benchmark with kafka-producer-perf-test"
            ],
            "Activity 9: Troubleshooting and Failure Recovery": [
                "Force leader failure, simulate partition loss",
                "Handle corrupted logs, zombie producers",
                "Check ISR and replication status"
            ],
            "Activity 10: Real-Time Stream Processing Capstone": [
                "Design multi-stage stream pipeline",
                "Process data with Kafka Streams or Flink",
                "Ingest → Transform → Load pattern"
            ],
            "Activity 11: Tiered Storage & Retention Policies": [
                "Configure topic retention by size/time",
                "Test deletion and compaction",
                "Enable S3 tiered storage"
            ],
            "Activity 12: Multi-Cluster and MirrorMaker": [
                "Sync topics across regions",
                "Test failover and message consistency",
                "Secure replication links"
            ],
            "Activity 13: CI/CD for Kafka Workflows": [
                "Create GitHub pipelines to deploy configs",
                "Test schema evolution and rollback",
                "Use Terraform to provision Kafka clusters"
            ],
            "Activity 14: Real-Time Analytics with Kafka + OLAP": [
                "Integrate Kafka with Druid/ClickHouse",
                "Run analytical queries on streamed data",
                "Visualize results with Grafana"
            ],
            "Activity 15: Capstone Project - Build Production-Ready Kafka Platform": [
                "Design complete data ingestion architecture",
                "Secure and monitor every component",
                "Document SLAs, scaling patterns"
            ]
        }
    },

    "Machine Learning": {
        activities: {
            "Activity 1: Model Lifecycle, EDA and ML Tooling": [
                "Read: EDA techniques | https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15",
                "Practice EDA using seaborn and pandas profiling",
                "Understand model development lifecycle (train/test/deploy)",
                "Experiment with mlflow, wandb, or dvc"
            ],
            "Activity 2: Feature Engineering and Pipelines": [
                "Create pipelines using sklearn or Featuretools",
                "Apply normalization, encoding techniques",
                "Automate preprocessing steps"
            ],
            "Activity 3: Model Selection & Cross-Validation": [
                "Try multiple models: tree, linear, ensemble",
                "Use grid/random search with cross-validation",
                "Analyze model variance and bias"
            ],
            "Activity 4: Model Explainability": [
                "Use SHAP and LIME for explaining outputs",
                "Visualize feature importances",
                "Explain black-box models to stakeholders"
            ],
            "Activity 5: Experiment Tracking and Reproducibility": [
                "Log all experiments using MLflow or wandb",
                "Save datasets, parameters, metrics",
                "Reproduce results via versioning"
            ],
            "Activity 6: Model Deployment": [
                "Deploy model using Flask/FastAPI",
                "Containerize with Docker",
                "Use CI/CD to push to cloud (AWS/GCP)"
            ],
            "Activity 7: Monitoring and Drift Detection": [
                "Track prediction accuracy over time",
                "Use EvidentlyAI or custom drift checks",
                "Trigger retraining based on thresholds"
            ],
            "Activity 8: Time Series Forecasting": [
                "Use ARIMA, Prophet, or LSTM models",
                "Visualize time trends",
                "Build forecast pipeline with updates"
            ],
            "Activity 9: NLP with Transformers": [
                "Fine-tune BERT or DistilBERT",
                "Perform token classification, summarization",
                "Deploy NLP model to REST API"
            ],
            "Activity 10: MLOps Capstone Project": [
                "Create full ML pipeline (EDA → Deploy)",
                "Track experiments, validate model performance",
                "Deploy and monitor in production"
            ],
            "Activity 11: Advanced Hyperparameter Tuning": [
                "Use Optuna, Ray Tune, or Hyperopt",
                "Parallelize experiments",
                "Track best models across sessions"
            ],
            "Activity 12: Responsible AI and Bias Mitigation": [
                "Test model bias using AIF360",
                "Apply fairness-aware learning techniques",
                "Report fairness metrics"
            ],
            "Activity 13: Real-Time Inference at Scale": [
                "Batch vs Real-time comparison",
                "Deploy via Kafka + model server",
                "Load test and monitor latency"
            ],
            "Activity 14: Using Vector Databases": [
                "Build similarity search with FAISS or Pinecone",
                "Index embeddings from NLP/vision models",
                "Query via cosine similarity"
            ],
            "Activity 15: Capstone - Deploy Multi-Model ML Platform": [
                "Deploy multiple models behind one gateway",
                "Route based on model type/user context",
                "Add monitoring, drift detection, retraining"
            ]
        }
    },

    "Spring Boot": {
        activities: {
            "Activity 1: Project Setup and REST API Basics": [
                "Create a Spring Boot project using Spring Initializr",
                "Develop simple REST controller with GET/POST endpoints",
                "Test endpoints using Postman or curl"
            ],
            "Activity 2: Dependency Injection and Bean Management": [
                "Understand @Component, @Service, @Repository annotations",
                "Explore lifecycle of Spring Beans",
                "Inject services using @Autowired and constructor injection"
            ],
            "Activity 3: Working with Spring Data JPA": [
                "Connect to H2/PostgreSQL DB",
                "Define JPA repositories and entities",
                "Use CRUDRepository and PagingAndSortingRepository"
            ],
            "Activity 4: Exception Handling and Validation": [
                "Implement global exception handling using @ControllerAdvice",
                "Use javax validation annotations (e.g. @NotNull, @Email)",
                "Return meaningful error responses"
            ],
            "Activity 5: Spring Security Basics": [
                "Secure endpoints with HTTP Basic Auth",
                "Add role-based access control",
                "Explore OAuth2 or JWT setup (optional)"
            ],
            "Activity 6: Testing Spring Boot Applications": [
                "Write unit tests with JUnit and Mockito",
                "Write integration tests using @SpringBootTest",
                "Test REST endpoints with MockMvc"
            ],
            "Activity 7: Actuator, Metrics and Monitoring": [
                "Enable Spring Boot Actuator",
                "Monitor app health, metrics, and environment",
                "Integrate with Prometheus or Grafana"
            ],
            "Activity 8: Building and Deploying Spring Boot App": [
                "Build executable JAR using Maven/Gradle",
                "Create Dockerfile for the app",
                "Deploy to cloud or Kubernetes"
            ],
            "Activity 9: Capstone – Full-Stack Task Management App": [
                "Define database schema for tasks, users, and labels",
                "Develop RESTful APIs for task CRUD operations",
                "Implement JWT-based user authentication and role-based authorization",
                "Use Spring Data JPA to connect with PostgreSQL",
                "Integrate exception handling, input validation, and logging",
                "Expose Actuator metrics and health checks",
                "Containerize the application with Docker",
                "Deploy on cloud or Kubernetes cluster"
            ]
        }
    },

    "Database": {
        activities: {
            "Activity 1: SQL Fundamentals": [
                "Write basic SELECT, INSERT, UPDATE, DELETE queries",
                "Use WHERE, GROUP BY, ORDER BY clauses",
                "Practice joins and subqueries"
            ],
            "Activity 2: Database Design and Normalization": [
                "Design entity-relationship diagram (ERD)",
                "Apply normalization (1NF, 2NF, 3NF)",
                "Create foreign key relationships"
            ],
            "Activity 3: Indexing and Performance": [
                "Create indexes to speed up queries",
                "Analyze slow queries with EXPLAIN",
                "Optimize queries and schema"
            ],
            "Activity 4: Transactions and Isolation Levels": [
                "Understand ACID properties",
                "Use BEGIN, COMMIT, ROLLBACK",
                "Test isolation levels with concurrent queries"
            ],
            "Activity 5: Working with NoSQL Databases": [
                "Install MongoDB or Redis",
                "Perform CRUD operations using Mongo shell or drivers",
                "Understand document vs key-value vs column stores"
            ],
            "Activity 6: Capstone – Online Course Platform Database Design": [
                "Design ER diagram for users, courses, enrollments, quizzes, and payments",
                "Implement schema in PostgreSQL or MySQL with constraints and indexing",
                "Normalize schema up to 3NF",
                "Write stored procedures and triggers for course enrollment",
                "Build views and analytical queries (e.g., most active students)",
                "Export schema as SQL and document design rationale"
            ]
        }
    },

    "Java": {
        activities: {
            "Activity 1: Core Java and OOP Concepts": [
                "Practice with classes, objects, inheritance, polymorphism",
                "Use interfaces and abstract classes",
                "Explore object lifecycle and garbage collection"
            ],
            "Activity 2: Java Collections Framework": [
                "Use List, Set, Map, Queue effectively",
                "Understand performance of ArrayList vs LinkedList",
                "Practice sorting, filtering collections"
            ],
            "Activity 3: Java Streams and Lambdas": [
                "Use functional programming style with Stream API",
                "Write custom lambdas and method references",
                "Combine map, filter, reduce"
            ],
            "Activity 4: Exception Handling and File I/O": [
                "Use try-catch-finally, custom exceptions",
                "Read/write files with FileReader, BufferedReader",
                "Use NIO for file operations"
            ],
            "Activity 5: Multithreading and Concurrency": [
                "Create threads using Runnable/Callable",
                "Synchronize access with locks, semaphores",
                "Use ExecutorService, CompletableFuture"
            ],
            "Activity 6: Java 17 Features (or latest)": [
                "Use records, pattern matching, sealed classes",
                "Explore text blocks and switch expressions",
                "Practice with latest language enhancements"
            ],
            "Activity 7: Capstone – CLI-Based Inventory Management System": [
                "Define Java classes for items, users, transactions using OOP principles",
                "Implement command-line interface for inventory operations",
                "Use collections and file-based persistence (CSV or JSON)",
                "Handle concurrent inventory updates using multithreading",
                "Integrate error logging and input validation",
                "Write unit tests for service layer using JUnit and Mockito"
            ]
        }
    },

    "Python": {
        activities: {
            "Activity 1: Python Syntax and Data Types": [
                "Write clean Python code using PEP8",
                "Use lists, dicts, sets, tuples",
                "Understand mutable vs immutable types"
            ],
            "Activity 2: Functions, Modules and Packages": [
                "Write and import modules",
                "Use *args, **kwargs, decorators",
                "Create and install packages with pip"
            ],
            "Activity 3: File Handling and Exceptions": [
                "Read/write text and CSV files",
                "Handle exceptions using try-except",
                "Use context managers (with open)"
            ],
            "Activity 4: Object-Oriented Python": [
                "Define classes, methods, properties",
                "Use inheritance and multiple inheritance",
                "Explore dunder methods (__init__, __str__)"
            ],
            "Activity 5: Python for Data and Web": [
                "Use Pandas, NumPy for data manipulation",
                "Plot charts with matplotlib/seaborn",
                "Build REST API with Flask or FastAPI"
            ],
            "Activity 6: Python Testing and Environments": [
                "Write tests using pytest/unittest",
                "Create virtual environments with venv/conda",
                "Mock and patch functions in tests"
            ],
            "Activity 7: Capstone – Personal Finance Tracker with Flask": [
                "Design data model for income, expenses, and budget goals",
                "Build RESTful API using Flask and SQLite or PostgreSQL",
                "Add frontend using simple HTML + Chart.js or integrate with React",
                "Use Pandas to generate monthly reports and summaries",
                "Add user authentication and session management",
                "Package the app with Docker and deploy to cloud (Heroku, Render, etc.)"
            ]
        }
    }
};
