import Link from "next/link";

const MealDetail = ({ params }) => {
  const { slug } = params;

  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>{slug}</h1>
      <p style={{ textAlign: "center" }}>
        <Link href={".."}>Back</Link>
      </p>
    </main>
  );
};

export default MealDetail;
