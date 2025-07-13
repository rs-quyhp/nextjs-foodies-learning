import sql from "better-sqlite3";
import fs from "fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error loading meals");
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
};

export const getMeal = async (slug) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Error loading meal details");
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal;
};

export const createMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const buffer = await meal.image.arrayBuffer();

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error("Failed to save image");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) 
    VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
    )`
  ).run(meal);
};
