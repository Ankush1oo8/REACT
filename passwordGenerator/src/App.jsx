import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const copy=useRef(null);
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char,setChar]=useState(false);
  const [password,setPassword]=useState("");
  const handleCopy =()=>{
    navigator.clipboard.writeText(copy.current?.value);
    copy.current?.select()
  }
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuxyz';
    if(number)str+="0123456789";
    if(char)str+="!@#$%^&*";
    for(let i=0; i<length ;i++){
      let num= Math.floor(Math.random()*str.length)+1;
      pass+=str.charAt(num)
    }
    setPassword(pass);
  },[length,number,char])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])

  return (
    <>
      <div className="password_generator">
        <div className="password">
          <input type="text" readOnly ref={copy} value={password} className="input_password" placeholder='password generator' />
          <button onClick={handleCopy} >copy</button>
        </div>
        <div className="input_group">
          <label htmlFor="lengthRange">Length</label>
          <input id="lengthRange" name="lengthRange" min={4} max={20} onChange={(e)=>{setLength(Number(e.target.value))}} value={length} type="range" />
          <span className="range_value">{length}</span>
        </div>
        <div className="input_group">
          <input id="numbers_allowed" onChange={(e)=>{setNumber(e.target.checked)}} type="checkbox" checked={number} name="numbers_allowed" />
          <label htmlFor="numbers_allowed">Numbers</label>
        </div>
        <div className="input_group">
          <input id="chars_allowed" type="checkbox" onChange={(e)=>{setChar(e.target.checked)}} checked={char} name="chars_allowed" />
          <label htmlFor="chars_allowed">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
