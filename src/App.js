// import React, { useState } from 'react'
// import './App.css'

// function App() {
//   const [result, setResult] = useState("0");

  
//   const hadleClick = (e) => {
//     const value = e.target.name;
//     setResult((prevResult) => prevResult === "0" ? value : prevResult + value);
//   };
  

//   const clere=()=>{
//     setResult("");

//   }

//   const backspace=()=>{
//     setResult(result.slice(0,-1))   //setResult(result.slice(0,result.length-1))
//   }

//   const calculate=()=>{
//     try{
//       setResult(eval(result).toString())

//     }catch(err){
//       setResult("Error")
//     }
    
//   }

  

//   return (
//     <div className='calc'>
//       <div className='container'>
//         <form>
//         <input type="text" value={result}  />
//         </form>
        
//         <div className='keypad'>
         
//          <button onClick={clere}>AC</button>
//          <button onClick={backspace} className=''>+/-</button>
//          <button name="%" onClick={hadleClick}>%</button>
//          <button name="/" onClick={hadleClick}>&divide;</button>
//          <button name="7" onClick={hadleClick}>7</button>
//          <button name="8" onClick={hadleClick}>8</button>
//          <button name="9" onClick={hadleClick}>9</button>
//          <button name="*" onClick={hadleClick}>&times;</button>
//          <button name="4" onClick={hadleClick}>4</button>
//          <button name="5" onClick={hadleClick}>5</button>
//          <button name="6" onClick={hadleClick}>6</button>
//          <button name="-" onClick={hadleClick}>&ndash;</button>
//          <button name="1" onClick={hadleClick}>1</button>
//          <button name="2" onClick={hadleClick}>2</button>
//          <button name="3" onClick={hadleClick}>3</button>
//          <button name="+" onClick={hadleClick}>+</button>
//          <button name="0" onClick={hadleClick} className='zero'>0</button>
//          <button name="." onClick={hadleClick}>.</button>
//          <button name="=" onClick={calculate} className='result'>=</button>
         
          

//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default App

//==============================================================================




import React, { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("0");

  const hadleClick = (e) => {
    const value = e.target.name;
    setResult((prevResult) => prevResult === "0" ? value : prevResult + value);
  };

  const clere = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0,-1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch(err) {
      setResult("Error")
    }  
  }

  return (
    <div className='container'>
    <table>
      <tr>
        <td colspan="4">
          <form>
            <input type="text" value={result}/>
          </form>
        </td>
      </tr>
      <tr>
        <td><button onClick={clere}>AC</button></td>
        <td><button onClick={backspace} className=''>+/-</button></td>
        <td><button name="%" onClick={hadleClick}>%</button></td>
        <td><button name="/" onClick={hadleClick}>&divide;</button></td>
      </tr>
      <tr>
        <td><button name="7" onClick={hadleClick}>7</button></td>
        <td><button name="8" onClick={hadleClick}>8</button></td>
        <td><button name="9" onClick={hadleClick}>9</button></td>
        <td><button name="*" onClick={hadleClick}>&times;</button></td>
      </tr>
      <tr>
        <td><button name="4" onClick={hadleClick}>4</button></td>
        <td><button name="5" onClick={hadleClick}>5</button></td>
        <td><button name="6" onClick={hadleClick}>6</button></td>
        <td><button name="-" onClick={hadleClick}>&ndash;</button></td>
      </tr>
      <tr>
        <td><button name="1" onClick={hadleClick}>1</button></td>
        <td><button name="2" onClick={hadleClick}>2</button></td>
        <td><button name="3" onClick={hadleClick}>3</button></td>
        <td><button name="+" onClick={hadleClick}>+</button></td>
      </tr>
      <tr>
        <td colspan="2"><button name="0" onClick={hadleClick} className='zero'>0</button></td>
        <td><button name="." onClick={hadleClick}>.</button></td>
        <td><button name="=" onClick={calculate} className='result'>=</button></td>
      </tr>
    </table>
    </div>
  )
}

export default App


