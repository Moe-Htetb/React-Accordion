import { useState } from "react";
function App() {
  const [count, setCount] = useState(1);

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="p-10">
        <p className="text-3xl font-bold">{count}</p>
        <button
          className="px-4 py-2  mt-5 mx-1 bg-blue-500 text-white"
          onClick={Increase}
        >
          Increase
        </button>
        <button
          className="px-4 py-2  mt-5 bg-blue-500 text-white"
          onClick={Decrease}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
