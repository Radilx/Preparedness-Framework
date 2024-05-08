import './GraphPoint.css';
import getColor from '../utils/color-gradient';

export default function GraphPoint({title, caption, score}) {
    return (
        <div className="GraphPoint">
            <div className="GraphPoint-Circle" style={{backgroundColor: getColor(score/10)}}>
            </div>
            <div className="GraphPoint-Info">
                <h3 className="GraphPoint-Title">{title}</h3>
                <p className="GraphPoint-Caption">{caption}</p>
            </div>
        </div>
    );
}