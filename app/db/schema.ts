import { relations, sql } from "drizzle-orm";
import { int, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const topics = sqliteTable(
  "topics",
  {
    id: int().primaryKey(),
    name: text("name").notNull(),
    path: text("path"),
  },
  (topics) => ({
    nameIdx: uniqueIndex("nameIdx").on(topics.name),
    pathIdx: uniqueIndex("pathIdx").on(topics.path),
  })
);

export const files = sqliteTable(
  "files",
  {
    id: int().primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    file: text("file"),
    url: text("url"),
  },
  (topics) => ({
    nameIdx: uniqueIndex("nameIdx").on(topics.name),
  })
);

export const price = sqliteTable(
  "price",
  {
    id: int().primaryKey(),
    title: text("title"),
    description: text("description"),
    amount: int(),
    file: text("file"),
    url: text("url"),
  }
);

export const voucher = sqliteTable(
  "voucher",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    price: int(),
    file: text("file"),
    url: text("url"),
  }
);

export const customer = sqliteTable(
  "customer",
  {
    id: int().primaryKey(),
    firstname: text("firstname").notNull(),
    lastname: text("lastname").notNull(),
    email: text("email").notNull(),
    streetAddress: text("streetAddress").notNull(),
    city: text("city").notNull(),
    zipCode: text("zipCode").notNull(),
    country: text("country").notNull(),
    additionalInfo: text("additionalInfo"),
    company: text("company"),
    ico: text("ico"),
    dic: text("dic"),
    companyStreetAddress: text("companyStreetAddress"),
    companyCity: text("companyCity"),
    companyZipCode: text("companyZipCode"),
    companyCountry: text("companyCountry"),
    notes: text("notes"),
    tags: text("tags", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
  }
);

export const productVariant = sqliteTable(
  "productVariant",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    file: text("file"),
    url: text("url"),
  }
);

export const fileDownload = sqliteTable(
  "fileDownload",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    file: text("file"),
    url: text("url"),
  }
);

export const searchByTopicsProductList = sqliteTable(
  "searchByTopicsProductList",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    file: text("file"),
    url: text("url"),
  }
);

export const promotions = sqliteTable(
  "promotions",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    file: text("file"),
    url: text("url"),
  }
);

export const images = sqliteTable(
  "images",
  {
    id: int().primaryKey(),
    key: text("key"),
    url: text("url"),
    altText: text("altText"),
    caption: text("caption"),
    file: text("file"),
    focalPointX: int(),
    focalPointY: int(),
    variants: text("variants", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
  }
);

export const landingPage = sqliteTable(
  "landingPage",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    image: text("image"),
    seo: text("seo"),
  }
);

export const localCart = sqliteTable(
  "localCart",
  {
    id: int().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    image: text("image"),
    seo: text("seo"),
  }
);

export const cartItem = sqliteTable(
  "cartItem",
  {
    id: int().primaryKey(),
    quantity: int('quantity'),
    state: t.text().$type<"cart" | "placed" | "paid">().default("cart"),
    image: text("image"),
    sku: text("sku"),
    price: int("price"),
  }
);

export const stockLocation = sqliteTable(
  "stockLocation",
  {
    id: int().primaryKey(),
    stock: int('stock'),
    name: text("name"),
  }
);

export const category = sqliteTable(
  "category",
  {
    id: int().primaryKey(),
    seo: text("seo"),
    description: text("description"),
    hero: text("hero"),
  }
);

export const shop = sqliteTable(
  "shop",
  {
    id: int().primaryKey(),
    title: text("title"),
    description: text("description"),
    hero: text("hero"),
    seo: text("seo"),
  }
);

export const curatedStory = sqliteTable(
  "curatedStory",
  {
    id: int().primaryKey(),
    type: text("type").default("curated-product-story"),
    merchandising: text("merchandising", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
  }
);

export const commonStory = sqliteTable(
  "commonStory",
  {
    id: int().primaryKey(),
    description: text("description"),
    medias: text("medias", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
    story: text("story", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
    relatedArticles: text("relatedArticles", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
    seo: text("seo"),
  }
);

export const story = sqliteTable(
  "story",
  {
    id: int().primaryKey(),
    createdAt: text("createdAt"),
    featuredProducts: text("featuredProducts", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
    type: text("type").default("story"),
  }
);

export const productSlim = sqliteTable(
  "productSlim",
  {
    id: int().primaryKey(),
    variants: text("variants", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
    topics: text("topics", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
  }
);

export const seo = sqliteTable(
  "seo",
  {
    id: int().primaryKey({ autoIncrement: true }),
    name: text("name"),
    path: text("path"),
  },
  (topics) => ({
    nameIdx: uniqueIndex("nameIdx").on(topics.name),
    pathIdx: uniqueIndex("pathIdx").on(topics.path),
  })
);

export const products = sqliteTable(
  "products",
  {
    id: int().primaryKey({ autoIncrement: true }),
    slug: text("slug").primaryKey().notNull(),
    title: text("title"),
    description: text("description"),
    story: text("story"),
    specifications: text("specifications", { mode: "json" })
      .notNull()
      .$type<string[]>()
      .default(sql`(json_array())`),
  },
  (articles) => ({
    slugIdx: uniqueIndex("slugIdx").on(articles.slug),
    titleIdx: uniqueIndex("titleIdx").on(articles.title),
  })
);

export const productsRelations = relations(topics, ({ many }) => ({
  topics: many(topics)
}));

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});
