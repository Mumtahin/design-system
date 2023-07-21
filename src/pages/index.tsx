import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "../components/button";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-24`}>
      <div className="font-mono text-sm">
        <Button>Click me</Button>
      </div>
    </main>
  );
}
