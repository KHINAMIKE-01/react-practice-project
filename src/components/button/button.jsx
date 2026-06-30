import './button-style.css'

function Button(props) {

    return (
        <button className={`btn ${props.className || ''}`} onClick={props.onClick}>
            {props.content}
        </button>
    )
}

export default Button