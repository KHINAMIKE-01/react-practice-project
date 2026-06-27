import './icon.css'

function Icon(props){
    return (
        <div className='icon'>
            <img src={props.icon} alt={props.alt} />
        </div>
    )
}

export default Icon