import './Scorecard.css';
import Card from './Card';

export default function Scorecard({risk}){
    return <div className="Scorecard">
        {risk?.risk_categories?.map(r => <Card label={r.name} score={r.overlap}/>) 
        ?? <>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </>}
    </div>
}