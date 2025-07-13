import sql from "better-sqlite3";

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
