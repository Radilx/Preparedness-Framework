import './EvalInput.css';
import { useState } from 'react';
import { Puff } from 'react-loading-icons'

export default function EvalInput({onSubmit, loading}){
    const [jailBreak, setJailBreak] = useState();
    return <div className="EvalInput">
        <input onChange={
            (e) => setJailBreak(e.target.value)
        } placeholder="Enter a jailbreak to see its risk assessment" className="Text-Input" />
        {loading ? <div className="Loader"> <Puff stroke="black" /> </div>: <img onClick={() => onSubmit(jailBreak)} className="Eval-Input-Submit" src="./arrow.png"/>}
    </div>
}