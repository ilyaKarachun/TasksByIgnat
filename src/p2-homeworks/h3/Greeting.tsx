import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    setError: (name:string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""// need to fix with (?:)
    const onKeyPressInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            addUser()
        }
    }

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressInputHandler} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            {/*{error && <div>{error}</div>}*/}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
