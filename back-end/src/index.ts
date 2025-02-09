import { DataSource } from "typeorm";
import "reflect-metadata";

import Ad from "./entities/ad";
import Category from "./entities/category";
import Tag from "./entities/tag";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/AdResolver";
import { TagResolver } from "./resolvers/TagResolver";

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Ad, Category, Tag],
  synchronize: true,
});

const PORT = 4000;
const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [AdResolver, TagResolver],
    validate: true,
  });
  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  await dataSource.initialize();
  await Category.initializeCategories();

  console.log(`🚀  Server ready at: ${url}`);
};

startApolloServer();
