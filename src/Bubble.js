import './Bubble.css';

const Bubble = (props) => {
    return (
        <div className="Bubble">
            {props.children}
        </div>
    )
}

export default Bubble;