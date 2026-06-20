to create a react app
npm create vite@latest
to run 
npm run dev
to install packages
npm i or npm install

/////
In java we use functions
function fname{
    return(
        <></>// we use fragments beacause return can have only one statement to write multiple statements 
    )
}
then we have to export default function 
and then we have to import wherever we want in jsx file by import fname from "path"

Conditional Rendering Statement

function App() {
 let isLogin=true;
  return (
     <>
     <h1>Hello World</h1>
     {/* <Home/> */}
      {/* <About/> */}
    {isLogin ? <Home/> : <About/>}//conditional rendering stmt
    {0 > 1 ? <Home/> : <About/>}
     </>
          
  )
}

export default App