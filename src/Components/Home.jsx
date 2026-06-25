/*function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application.</p>
    </div>
  );
}
export default Home;*/
//props is an object that contains the properties passed to the component


/*function Home(props) {
  return (
   <>
    <h1>She is {props.name} and  she is {props.Age}</h1>
   </>
  );
}
export default Home;
*/
/*function Home({name="user",Age="no age"}) {
  return (
   <>
    <h1>She is {name} and  she is {Age}</h1>
   </>
  );
}
export default Home*/
/*import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}*/


/*import { useState } from "react";

export default function Home() {
  const[count,setCount]=useState(0)
  const incCount = () => {
    setCount((prev) => prev+1)
    //setCount((prev) => prev+1)
  }
  const decCount = () => {
    setCount((prev) => prev-1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={decCount}>-</button>
    </>
  )
}*/

/*import { useState } from "react";
import React from 'react'

export default function Home() {
  const[input,setInput] =useState('')
  return (
    <>
    <input type ="text" onChange={(e) => setInput(e.target.value)}/>
    <h1>{input}</h1>
    </>
  )
}*/


import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)
  const incCount = () => {
    setCount((prev) => prev + 1)
    //setCount((prev) => prev+1)
  }
  const decCount = () => {
    if (count > 0)
      setCount((prev) => prev - 1)
  }
  useEffect(() => {
    console.log(value);
  }, [value, count])
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incCount}>+</button>
      <button onClick={decCount}>-</button>

      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Change</button>
    </>
  )
}