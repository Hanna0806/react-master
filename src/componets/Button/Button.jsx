import { useState } from 'react'
import { classNames } from '../../utils';
import './style.css';





export function Button(props) {
    const { title,  onClick} = props

    return <button className="btn add-btn" onClick={onClick}>{title}</button>
}



// function Button(props) {
//     const { title, isDanger, isPrimary, m, l, onClick } = props
//     const [counter, setCounter] = useState(0)
//     const [style, setStyle] = useState(false)

//     return (
//         <button
//             className={classNames(
//                 'btn',
//                 { danger: isDanger, primary: isPrimary, 'btn-m': m, 'btn-l': l, temp: style },
//                 ['color-red']
//             )
//             }
//             onClick={() => {
//                 onClick()
//                 setCounter((prevState) => prevState + 1)
//                 setStyle(true)
//             }}
//         >
//             {`${title}-кликнули: ${counter} раз`}
//         </button >)
// }

export default Button

