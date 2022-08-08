import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    setError: (name: string) => void
    onKeyPressInputHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError, onKeyPressInputHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""// need to fix with (?:)


    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressInputHandler} className={inputClass} onBlur={setNameCallback}/>
            {/*<span>{error}</span>*/}
            <button onClick={addUser} disabled={!name}>add</button>
            {error && <div>{error}</div>}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
