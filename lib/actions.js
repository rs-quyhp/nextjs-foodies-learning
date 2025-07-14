"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createMeal } from "./meals";

export const validateText = (text) => {
  if (!text || text.trim().length === 0) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    !validateText(meal.title) ||
    !validateText(meal.summary) ||
    !validateText(meal.instructions) ||
    !validateEmail(meal.creator_email) ||
    !validateText(meal.creator) ||
    !meal.image
  ) {
    return { message: "Invalid input" };
  }

  await createMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
