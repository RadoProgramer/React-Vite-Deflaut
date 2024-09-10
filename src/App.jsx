import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// *********************************************obsługa zdarzeń, bobber to jest props

// function App({ surname }) {
//   const [pomidorwartosc, ogorek] = useState(0);
//   const sayHi = (name) => {
//     console.log("Hi my name is:", name, surname);
//   };
//   return <button onClick={() => sayHi("Bob")}>count {pomidorwartosc}</button>;
// }
// export default App;

// *******************************************zmiana stanu i rerender komponentu

// function App() {
//   const [pomidorwartosc, setPomidorwartosc] = useState(0);
//   const increment = () => {
//     setPomidorwartosc(555);
//   };
//   return <button onClick={increment}>count {pomidorwartosc}</button>;
// }
// export default App;

// *********************************************zmiana stanu plus naliczanie

// function App() {
//   const [pomidorwartosc, setPomidorwartosc] = useState(0);
//   const [name, setName] = useState("Bob");
//   const increment = () => {
//     setPomidorwartosc((prevState) => prevState + 1); //*mozna pominąć return
//   };
//   const changeName = () => {
//     setName("Ala");
//   };
//   console.log("render");

//   return (
//     <>
//       <p>{name}</p>
//       <button onClick={changeName}>change name</button>;
//       <button onClick={increment}>count {pomidorwartosc}</button>;
//     </>
//   );
// }
// export default App;

// *******************************************destrukturyzacja tablicy?

// const tab = [1, 2];
// const [a, b] = tab;
// console.log(a, b);

// ********************************************interakcja dziecko rodzic, usuwanie pojedynczego taska
// function ToDo({ name, remove }) {
//   return (
//     <div>
//       {name}
//       <button onClick={() => remove(name)}>Remove</button>
//     </div>
//   );
// }
// function ToDoApp() {
//   const [todos, setToDos] = useState(["task1", "task2"]);

//   const removeTodo = (todoRemove) => {
//     console.log(todoRemove);
    
//     setToDos((prevState) => prevState.filter((todo) => todo !== todoRemove));
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <ToDo key={todo} name={todo} remove={removeTodo} />
//       ))}
//     </>
//   );
// }
// export default ToDoApp;

// **********************************************************jak modyfikować tablice i jak obiekyy
