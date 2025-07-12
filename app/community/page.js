import Link from "next/link";

const Community = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Community</h1>
      <p style={{ textAlign: "center" }}>
        <Link href={".."}>Back</Link>
      </p>
    </main>
  );
};

export default Community;
