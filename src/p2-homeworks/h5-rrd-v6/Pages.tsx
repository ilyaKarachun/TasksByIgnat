import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*    /!*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*!/*/}
                <Route path={'/'} element={<div>Main page</div>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                {/*    // add routes*/}
                {/*    /!*он отрисуется если пользователь захочет попасть на несуществующую страницу*!/*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
