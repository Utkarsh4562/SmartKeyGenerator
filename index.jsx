import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function PasswordGenerator()
{
 const [Password,setPassword] = useState(""); // RANDOM PASSWORD VALUE and Paasword is a state vatiable and we initialy put it it zero
 const  [length,setlength] = useState(10); // length is a state variable 
 const [numberChanged,setnumberChanged] = useState(false); // numberchanged is a state variable and initialy number canged is false 
 const [characterChanged,setcharecterchanged] = useState(false); // charectorchanged is a state variable 

 function generatePassword(){
    let str = "abcdefghijklmnopqsrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberChanged) // if numberChanged is true so which type of string it can keep or numbers
    str = str+"0123456789";
    if(characterChanged)
        str = str+"+-)(*/$%^&@!~{}";
    let pass = "" // pass or password it will determine the lenth of password 
    for(let i=0;i<length;i++){
        pass+= str[Math.floor(Math.random()*str.length)] // let suppose the length of string is ten so it will generate the random number or charector as we click check boxes in web browser of (number and charector) and we add random generated password to password   
    }
    setPassword(pass); // call the set password and update the password 
 };
  useEffect(()=>{ // if we don't use useEffect and call the  generatePaasword alone so it will go in infinite loop since useEffect run at last on it protect for going into infinite loop and useEffect runs only once because dependeency array is empty and if we pass any value and that value in future change so it runs   
    generatePassword();
  },[length,numberChanged,characterChanged]) // if we add length in dependency so it will update the length and when we scroll our input so lenth of password will change as we scroll the input in our web browser and if we want that when we click numberchanged checkbox and characterchanged checkbox so input password will change on the basses of checkboxes so it is important to pass them in dependency
  return(<>
 <h2 className="title">🔐 SecureKey Generator</h2>
      <h1>{Password}</h1>
<div className="second">
    <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input> {/* minimum and maximum value scrole bar that is how much lenth of your password and onChange is a event listener and e is object */}
    <label>Length{length}</label> {/*length of the lable */} 
    <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
    <label>Number</label> 
     <input type="checkbox" defaultChecked={characterChanged} onChange={()=>setcharecterchanged(!characterChanged)}></input>
    <label>Character</label> 
</div>
</>
)
}
ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);
