import { datas } from "./data";
import Card from "./components/Card";

function App() {
  return (
      <>
        <header>
          <h1>My app</h1>
        </header>
        <main>
          <section className="card">
            <ul className="places">
              {datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.image}
                  name={data.name}
                  class={data.class}
                />
              ))}
            </ul>
          </section>
        </main>
      </>
  );
}

export default App;
