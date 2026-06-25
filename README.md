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
/props is an object that contains the properties passed to the component


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
//react-route-dom

in react dom there are two doms curr and prv dom
