import './CatastrophicGraph.css';
import GraphPoint from './GraphPoint';

export default function CatastrophicGraph({risk}){
    return <div className="CatastrophicGraph">
        <div className="ThruLine">
        </div>

        {risk?.results?.map(r => {
            return <GraphPoint title={r.name} caption={r.reasoning} score={r.rating} />
        } )}
    </div>
}