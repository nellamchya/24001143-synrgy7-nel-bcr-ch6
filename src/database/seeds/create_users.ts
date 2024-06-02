import { Knex } from "knex";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: uuidv4(),
      username: "superadmin1",
      name: "superadmin1",
      email: "superadmin1@yahoo.co.id",
      password: await bcrypt.hash("superadmin1", 10),
      role: "superadmin",
    },
    {
      id: uuidv4(),
      username: "superadmin2",
      name: "superadmin2",
      email: "superadmin2@yahoo.co.id",
      password: await bcrypt.hash("superadmin2", 10),
      role: "superadmin",
    },
    {
      id: uuidv4(),
      username: "superadmin3",
      name: "superadmin3",
      email: "superadmin3@yahoo.co.id",
      password: await bcrypt.hash("superadmin3", 10),
      role: "superadmin",
    },
    {
      id: uuidv4(),
      username: "superadmin4",
      name: "superadmin4",
      email: "superadmin4@yahoo.co.id",
      password: await bcrypt.hash("superadmin4", 10),
      role: "superadmin",
    },
    {
      id: uuidv4(),
      username: "superadmin5",
      name: "superadmin5",
      email: "superadmin5@yahoo.co.id",
      password: await bcrypt.hash("superadmin5", 10),
      role: "superadmin",
    },
    {
      id: uuidv4(),
      username: "user1",
      name: "user1",
      email: "user1@yahoo.co.id",
      password: await bcrypt.hash("user1", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user2",
      name: "user2",
      email: "user2@yahoo.co.id",
      password: await bcrypt.hash("user2", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user3",
      name: "user3",
      email: "user3@yahoo.co.id",
      password: await bcrypt.hash("user3", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user4",
      name: "user4",
      email: "user4@yahoo.co.id",
      password: await bcrypt.hash("user4", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user5",
      name: "user5",
      email: "user5@yahoo.co.id",
      password: await bcrypt.hash("user5", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user6",
      name: "user6",
      email: "user6@yahoo.co.id",
      password: await bcrypt.hash("user6", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user7",
      name: "user7",
      email: "user7@yahoo.co.id",
      password: await bcrypt.hash("user7", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user8",
      name: "user8",
      email: "user8@yahoo.co.id",
      password: await bcrypt.hash("user8", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user9",
      name: "user9",
      email: "user9@yahoo.co.id",
      password: await bcrypt.hash("user9", 10),
      role: "user",
    },
    {
      id: uuidv4(),
      username: "user10",
      name: "user10",
      email: "user10@yahoo.co.id",
      password: await bcrypt.hash("user10", 10),
      role: "user",
    },
  ]);
}
