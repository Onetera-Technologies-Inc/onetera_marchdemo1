import Navbar from "./components/navigation/navbar";
import PlatformLandingPage from "./platformLandingPage/platformLandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <PlatformLandingPage />
    </main>
  );
}
