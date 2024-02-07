import {Kysely, sql} from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
    // Migration code
    await db.schema
        .createTable('user_logs')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('user_id', 'integer', (col) =>
            col.references('users.id').onDelete('restrict').notNull()
        )
        .addColumn('first_name', 'varchar', (col) => col.notNull())
        .addColumn('last_name', 'varchar', (col) => col.notNull())
        .addColumn('email', 'varchar', (col) => col.notNull())
        .addColumn('is_active', 'boolean', (col) => col.notNull())
        .addColumn('created_at', 'timestamp', (col) =>
            col.defaultTo(sql`now()`).notNull()
        )
        .addColumn('modified_by_id', 'integer', (col) => col.notNull().references('users.id').onDelete('restrict'))
        .execute();


    await db.schema
        .createIndex('idx_user_logs_user_id_fk')
        .on('user_logs')
        .column('user_id')
        .execute()

    await db.schema
        .createIndex('idx_user_logs_modified_by_id_fk')
        .on('user_logs')
        .column('modified_by_id')
        .execute()

}

export async function down(db: Kysely<any>): Promise<void> {
    // Migration code
    await db.schema.dropTable('user_logs').execute();
}
