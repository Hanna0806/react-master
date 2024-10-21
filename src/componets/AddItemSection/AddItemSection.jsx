import Button from '../Button/Button'
import { Input } from '../Input/Input'
import './style.css'



export function AddItemSection(props) {
    const {onClick, onChange, label} = props

    return <div className="todo-control-block">
        <Input onChange={onChange} label={label}/>
        <Button title='Add' onClick={onClick} />
    </div>


}