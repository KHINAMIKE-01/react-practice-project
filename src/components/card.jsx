import './card.css'
import Icon from './icon.jsx'

function Card(props) {
    return (
        <>
            <div className="card-ctn">
                <div className="card-top-ctn">
                    <Icon icon={props.icon} alt={props.alt} />
                </div>
                <div className="card-buttom-ctn">
                    <h2>{props.h2Header}</h2>
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </>
    )
}


export default Card