import Link from "next/link";

import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealGrid from "../components/meals/meals-grid";
import styles from "./page.module.css";

export const metadata = {
  title: "Meals",
  description: "Delicious meals, created by you",
};

const Meals = async () => {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
