import SideBar from "./Components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      <menu className="flex items-center justify-end gap-4 my-4">
        <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      </menu>
    </main>
  );
}

export default App;
