import Home from './Components/Home';
import About from './Components/About';

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
