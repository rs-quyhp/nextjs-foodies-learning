import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error loading meals");
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
};

export default getMeals;
