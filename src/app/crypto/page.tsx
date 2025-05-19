import Navbar from "../components/navbar";

export default function Crypto() {
  return (
    <main className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white">

      <div id="nav">
        <Navbar/>
      </div>

      <h1 className="text-3xl font-bold">Crypto Page</h1>
      <p>This is where your crypto charts and data will go.</p>
    </main>
  );
}