import React from 'react'
import {AffairPriorityType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: {
        _id: number
        name: string
        priority: AffairPriorityType
    } // need to fix any
    deleteAffairCallback: (_id: number ) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
       return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            {props.affair._id}
            {props.affair.name}
            {props.affair.priority}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
