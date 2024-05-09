import './App.css';
import OpenAILogo from './components/Logo';
import Title from './components/Title';
import Banner from './components/Banner';
import Evals from './components/Evals';
import EvalInput from './components/EvalInput';
import Border from './components/Border';

import { useEffect, useState } from 'react';

function App() {

  const [jailbreak, setJailbreak] = useState();
  const [loading, setLoading] = useState(false);
  const [riskAssessment, setRiskAssessment] = useState(null)

  const updateRisk = async function(){
    fetch(`${process.env.REACT_APP_BASE_URL}/risk`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        jailbreak: jailbreak
      })
    }).then(res => res.json()).then(data => {
      setRiskAssessment(JSON.parse(data[0]));
      setLoading(false);
    });
  }

  useEffect(() => {
    if (jailbreak?.length > 0){
      setLoading(true);
      setRiskAssessment(null);

      updateRisk();
    }
  }, [jailbreak]);

  return (
    <div className="App">
      <header className="Header">
        <OpenAILogo/>
        <Title text="Preparedness | Evals" />
      </header>
      {riskAssessment == null ? 
      <> <Banner title="Quantifying Unknowns">
        In its <span class="Highlight">Beta Preparedness Framework</span>, 
        OpenAI proposes four Tracked Risk Categories; this tool helps explore new areas of concern within that framework.
      </Banner>
      <EvalInput loading={loading} onSubmit={(val) => {
        setJailbreak(val);
      }}/>  </> : null }
      <Border/>
      <Evals loading={loading} risk={riskAssessment}/>
      </div>
  );
}

export default App;
