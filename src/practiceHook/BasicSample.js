import React, { useState } from "react";

function BasicSample() {
    // 宣告一個新的 state 變數，我們稱作為「count」。
    const [count, setCount] = useState(0);
    return (<div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>);
}

export default BasicSample