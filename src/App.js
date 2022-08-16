import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  incremented,
  amountAdded,
  decremented,
  reset,
} from "./features/counter/counterSlice";
import {
  useFetchBreedsQuery,
  useFetchCategoriesQuery,
} from "./features/counter/dogs/dogsApiSlice";

function App() {
  const [numDogs, setNumDogs] = useState(10);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  const { categories = [] } = useFetchCategoriesQuery();

  console.log(categories);

  const handleClick = () => {
    // dispatch(incremented());
    dispatch(amountAdded(24));
  };
  const handleDecrement = () => {
    dispatch(decremented());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>count is: {count}</button>
        <button onClick={handleDecrement}>Decrement by 1</button>
        <button onClick={handleReset}>Reset</button>
      </header>
      <div>
        <p>Dogs to fetch: </p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bread) => (
              <tr key={bread.id}>
                <td>{bread.name}</td>
                <td>
                  <img
                    src={bread.image.url}
                    alt={bread.name}
                    height={250}
                    width={200}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>Number of categories fetched: {categories.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
