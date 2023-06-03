import React from "react";
var x;
let a = ["good morning", "good evening", "good night"];
let b = ["blue", "green", "red"];
let h = new Date().getHours();
if (h >= 1 && h <= 11) {
    x = 0;
}
else if (h > 11 && h < 19) {
    x = 1;
}
else {
    x = 2;
}

function Maintime() {
    return <span style={{ color: b[x] }}>{a[x]}</span>
}

export default Maintime;