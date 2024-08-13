# Database

## Introduction

The Database class serves as a crucial component in our application, addressing several key challenges in database management and interaction:

1. Connection Management: Handles database connections, ensuring optimal resource utilization.
2. Query Execution: Provides an interface for executing database queries and transactions.
3. Type Safety: Features type-safe database operations to minimize runtime errors.
4. Schema Management: Provides an entrypoint for the database schema definition.
5. Resource Cleanup: Implements automatic resource cleanup to prevent memory leaks and connection issues.

## Technical Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| TR1 | Connection Pooling | Implement a connection pool to manage database connections efficiently. |
| TR2 | Asynchronous Operations | All database operations should be asynchronous to prevent blocking the main thread. |
| TR3 | Type-Safe Queries | Provide a type-safe interface for database queries, ensuring compile-time checks for query correctness. |
| TR4 | Transaction Support | Support database transactions, allowing multiple operations to be executed atomically. |
| TR5 | Schema Definition | Centralize the database schema definition within the class for easy management and consistency. |
| TR6 | Resource Management | Implement proper resource management, including automatic cleanup of database connections. |
| TR7 | Environment-based Configuration | Support configuration of database connnnnection parameters through environment variables. |
| TR8 | Error Handling | Implement robust error handling for database operations, pnroviding meaningful error messages. |
| TR9 | Query Timeout | Support setting query timeouts to prevent long-running queries from blocking resources. |

## Usage

### Connecting to the Database
A connection may be acquired from the pool by calling the `Database.connect()` method.

The `Database.connect()` method should always be used with the `using` keyword or with explicit disposal. This ensures proper resource management and prevents connection leaks.

#### Using the `using` keyword (Recommended):

```typescript
async function performDatabaseOperation() {
  using database = await Database.connect();
  // Perform database operations
  const result = await database.client.query.user.findFirst({
    where: eq(Database.schema.user.uuid, "some-uuid"),
    });
  // The database connection is automatically disposed when the block exits
}
```

This approach is preferred as it automatically handles resource cleanup, even if an exception occurs.

#### Using explicit disposal:

```typescript
async function performDatabaseOperation() {
  const database = await Database.connect();
  try {
    // Perform database operations
    const result = await database.client.query.user.findFirst({
        where: eq(Database.schema.user.uuid, "some-uuid"),
    });
  } finally {
    database[Symbol.dispose]();
  }
}
```

This approach requires manual resource cleanup but may be necessary in certain scenarios where finer control over the connection lifecycle is needed.

### Executing Queries

To execute a query:

```typescript
using database = await Database.connect();
const user = await database.client.query.user.findFirst({
  where: eq(Database.schema.user.uuid, "some-uuid"),
});
```

### Performing Transactions

To perform a transaction:

```typescript
const result = await Database.transaction(async (tx) => {
  const user = await tx.client.query.user.create({
    data: {
      uuid: "some-uuid",
      name: "John Doe",
      email: "john.doe@example.com",
    },
  });

  const order = await tx.client.query.order.create({
    data: {
      userId: user.id,
      product: "Laptop",
      amount: 1200,
    },
  });

  const payment = await tx.client.query.payment.create({
    data: {
      orderId: order.id,
      status: "Completed",
      method: "Credit Card",
    },
  });

  return { user, order, payment };
});
```

## Possible Future Improvements

1. Query Caching: Implement a caching mechanism for frequently executed queries to improve performance.
2. Read-Write Splitting: Support separate connections for read and write operations to optimize database load.
3. Migration Management: Integrate database migration tools directly into the Database class.
4. Connection Monitoring: Implement detailed logging and monitoring of database connections and query performance.
5. Prepared Statements: Support the use of prepared statements for improved security and performance.
6. Connection Retries: Implement automatic connection retry logic for improved resilience.

By implementing these improvements, the Database class can provide even more robust and efficient database management capabilities.