import './RiskFindings.css';

export default function RiskFindings({risk}){
    return <div className="RiskFindings">
        <h1 className="Findings-Title">{risk?.findings.title}</h1>
        <p className="Findings-Text">{risk?.findings.findings}</p>
    </div>   
}