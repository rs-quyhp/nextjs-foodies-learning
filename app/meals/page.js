import Link from "next/link";

const Meals = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals</h1>
      <h2 style={{ textAlign: "center" }}>
        <Link href={"/meals/share"}>Share</Link>
      </h2>
      <h2 style={{ textAlign: "center" }}>
        <Link href={"/meals/chicken"}>Chicken</Link>
      </h2>
      <h2 style={{ textAlign: "center" }}>
        <Link href={"/meals/hamburger"}>Hamburger</Link>
      </h2>
      <p style={{ textAlign: "center" }}>
        <Link href={".."}>Back</Link>
      </p>
    </main>
  );
};

export default Meals;
