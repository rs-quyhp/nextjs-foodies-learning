import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <h2 style={{ textAlign: "center" }}>
        <Link href={"/meals"}>Meals</Link>
      </h2>
      <h2 style={{ textAlign: "center" }}>
        <Link href={"/community"}>Community</Link>
      </h2>
    </main>
  );
}
