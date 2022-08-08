import React, {Dispatch, MouseEventHandler,  SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    // setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     props.setFilter('all')
    // } // need to fix
    //
    // const setHigh = () => {
    //     props.setFilter('high')
    // }
    //
    // const setMiddle = () => {
    //     props.setFilter('middle')
    // }
    //
    // const setLow = () => {
    //     props.setFilter('low')
    // }

    const set = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter( event.currentTarget.value as FilterType)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={set} className={props.filter === 'all' ? s.someClass : ""} value={"all"}>All</button>
            <button onClick={set} className={props.filter === 'high' ? s.someClass : ""} value={"high"}>High</button>
            <button onClick={set} className={props.filter === 'middle' ? s.someClass : ""} value={"middle"}>Middle</button>
            <button onClick={set} className={props.filter === 'low' ? s.someClass : ""} value={"low"}>Low</button>
        </div>
    )
}

export default Affairs
