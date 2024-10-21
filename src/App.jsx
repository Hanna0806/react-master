import { useState } from 'react'
import { AddItemSection } from './componets/AddItemSection/AddItemSection'
import { ListItem } from './componets/ListItem/ListItem'
import './globalStyle.css'

// const items = [<h1>'car'</h1>, <h2>'phone'</h2>, <h3>bag</h3>]
// const items = [{ label: 'Todo1', id: 1 }, { label: 'Todo2', id: 2 }, { label: 'Todo3', id: 3 }]

const items = [<ListItem />, <ListItem />, <ListItem />]

function App() {
    const [todos, setTodos] = useState([])
    const [label, setLabel] = useState('')

    const handlerAddItem = () => {
        console.log('click label: -> ', label)
        setTodos((prevState) => [{label: label, id: new Date().getTime() }, ...prevState])
        setLabel('')
    }

    const handleInput = (event) => {
        console.log(event.target.value)   // то что в input прописываем выводится в console.log
        setLabel(event.target.value)
    }

    const handlerRemoveItem = (id) => {
        console.log('remove', id);   
        setTodos(todos.filter((todo) => todo.id !== id))
        
    }

    const list = todos.length ? todos.map((item, index) => <ListItem key={item.id} label={item.label} onClick={() => handlerRemoveItem(item.id)}/>) : 'Элементов нет'
    console.log('render', todos)
    return <main className="todo">
       
        <AddItemSection onClick={handlerAddItem} onChange={handleInput} label={label} />
        {list}
    </main>

}


export default App


/* <Button title="+" onClick={() => setInitialState((prevState) => prevState + 1)} />
     <h1>{initialState}</h1>
     <Button title="-" onClick={() => setInitialState((prevState) => prevState - 1)} /> */
