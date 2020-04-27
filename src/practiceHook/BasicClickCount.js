import React, { useState } from "react";

function BasicClickCount() {
  // 宣告一個新的 state 變數，我們稱作為「count」。
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// function ExampleWithManyStates() {
//     // 宣告多個 state 變數!
//     const [age, setAge] = useState(42);
//     const [fruit, setFruit] = useState('banana');
//     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
//     // ...
//   }

export default BasicClickCount;
