import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] dark:bg-[var(--background-dark-mode)] transition-all duration-300">
      <Header />
    </div>
  );
}
