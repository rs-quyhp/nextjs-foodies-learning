import Link from "next/link";

const Share = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Share</h1>;
      <p style={{ textAlign: "center" }}>
        <Link href={".."}>Back</Link>
      </p>
    </main>
  );
};

export default Share;
