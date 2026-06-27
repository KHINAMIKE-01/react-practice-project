import './button-style.css'

function Button(props) {
    return (
        <button className={`btn ${props.className || ''}`}>
            {props.content}
        </button>
    )
}

export default Button