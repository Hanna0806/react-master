import Button from '../Button/Button'
import './style.css'


export function ListItem(params) {
    const { label, onClick } = params
    return <li className="todo-list__item">
        <div className="todo-list__item-wrapper">
            <p className="todo-list__item-title">{label}</p>
            <Button title='Remove' onClick={onClick}/>
        </div>
    </li>
}