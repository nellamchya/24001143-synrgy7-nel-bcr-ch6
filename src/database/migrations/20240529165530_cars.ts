import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.uuid("id").primary();
    table.string("plate", 30).notNullable();
    table.string("manufacture", 30).notNullable();
    table.string("model", 30).notNullable();
    table.text("image").notNullable();
    table.integer("rent_per_day").notNullable();
    table.integer("capacity").notNullable();
    table.string("description");
    table.timestamp("available_at").notNullable();
    table.string("transmission", 20).notNullable();
    table.boolean("available").notNullable();
    table.string("type", 20).notNullable();
    table.integer("year").notNullable();
    table.specificType("options", "TEXT[]").notNullable();
    table.specificType("specs", "TEXT[]").notNullable();
    table.uuid("created_by_id").unsigned().notNullable();
    table.foreign("created_by_id").references("users.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.uuid("updated_by_id").unsigned();
    table.foreign("updated_by_id").references("users.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.uuid("deleted_by_id").unsigned();
    table.foreign("deleted_by_id").references("users.id").onUpdate("CASCADE").onDelete("CASCADE");
    table.timestamps(true, true);
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
