import React from "react";
import Maintime from './Maintime';

let bigdiv = {
    backgroundColor: 'aqua',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
let inbigdiv = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(241, 190, 122, 0.785)',
    height: '15vh',
    width : '30vw',
    textAlign : 'center',
    alignItems: 'center'
}
function App() {
    return (
        <>
            <div style={bigdiv}>
                <div style={inbigdiv}><div>hello sir <Maintime /></div></div>
            </div>
        </>
    )
}
export default App;