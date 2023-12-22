import Watches from "./components/watches/Watches";

function App() {
  return (
    <>
      <h1>Жизненный цикл и работа с HTTP</h1>
      <div className="task">
        <h4>Задача 1. Мировые часы</h4>
        <Watches />
      </div>
      {/* <div className="task">
        <h4>Задача 2. CRUD</h4>
      </div>
      <div className="task">
        <h4>Задача 3. Анонимный чат</h4>
        
      </div> */}
    </>
  );
}

export default App;
