import {Kysely, sql} from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
    // Migration code
    await db.schema
        .createTable('users')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('first_name', 'varchar', (col) => col.notNull())
        .addColumn('last_name', 'varchar', (col) => col.notNull())
        .addColumn('email', 'varchar', (col) => col.notNull().unique())
        .addColumn('password', 'text', (col) => col.notNull())
        .addColumn('is_active', 'boolean', (col) => col.notNull().defaultTo(false))

        .addColumn('created_at', 'timestamp', (col) =>
            col.defaultTo(sql`now()`).notNull()
        )

        .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    // Migration code
    await db.schema.dropTable('users').execute();
}
