import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./HW5.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={"/"}
                     className={s.link}
                     style={(params) => {
                         return {color: params.isActive ? "green" : "black"}
                     }
                     }
            >
                Main ---
            </NavLink>
            <NavLink to={'/pre-junior'}
                     className={s.link}
                     style={(params) => {
                         return {color: params.isActive ? "green" : "black"}
                     }
                     }
            >Pre-junior ---</NavLink>
            <NavLink to={"/*"}
                        className={s.link}
                     style={(params) => {
                         return {color: params.isActive ? "green" : "black"}
                     }
                     }
                >
                another page ----</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
