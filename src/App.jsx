import React from "react";
import Netflix from './Netfil';
import Amazon from "./Amazon";


let a = prompt("enter 'netflix or amazon")
const App = () => {
    return (
        <>
            <h2 className='heading_style'>Enjoy the webseries</h2>
            {(a == 'amazon') ? <Amazon />: <Netflix />}
        </>
    )
}

export default App;