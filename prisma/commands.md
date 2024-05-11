## DB Schema Update Workflow

-   Keep your database schema in sync with your Prisma schema as it evolves
-   Make model changes in schema.prisma

    -   Maintain existing data in your database

    -   Dev (NEVER USE IN PROD)
        ```
        npx prisma migrate dev --name migration_name
        ```
        ```
        npx prisma migrate dev --name migration_name --create-only
        ```
    -   Stage/Prod
        ```
        npx prisma migrate deploy
        ```

-   Generate new prisma client (auto-generated database client that's tailored to your database schema.)

    ```
    npx prisma generate
    ```

### Seed data from seed.ts
```
npx prisma db seed
```