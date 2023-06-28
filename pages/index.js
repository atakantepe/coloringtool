import { Button } from "primereact/button";
import Link from "next/link";
function HomePage() {
  return (
    <div className="App">
      <h1>Welcome to Coloring Tool</h1>
      <Link href="/app/primaryColorGenp">Let's start</Link>
    </div>
  );
}

export default HomePage;
