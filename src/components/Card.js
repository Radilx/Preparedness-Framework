import './Card.css';
import getColor from '../utils/color-gradient';

export default function Card({label, score}){
    return <div className="Card" style={{backgroundColor: getColor(score/10)}}>
        <h1 className="label">
            {label}
        </h1>
    </div>
}