import './style.css'




export function Input(props) {
const {onChange, label} = props
    return <>
        <input type="text" onChange={onChange} className="todo-control-input" value={label}/>
    </>
}