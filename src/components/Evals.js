import './Evals.css';
import CatastrophicGraph from './CatastrophicGraph';
import Scorecard from './Scorecard';
import Banner from './Banner';
import RiskFindings from './RiskFindings';

export default function Evals({risk, loading}){
    return <div className={`Evals ${risk == null ? 'Evals-Blurred' : ''}`}>
        {/* TODO: use context for risk */}
        <RiskFindings risk={risk} />
        <CatastrophicGraph risk={risk}/>
        <Scorecard risk={risk}/>
    </div>
}