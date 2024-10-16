import "./App.css";
import Construindo from "./Construindo";
function App() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 lg:flex-row">
      <div>
        <h1 className="text-3xl font-bold font-poppins text-left lg:text-6xl">
          Em construção
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Construindo />
      </div>
    </section>
  );
}

export default App;
