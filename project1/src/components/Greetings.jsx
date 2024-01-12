import React from "react";

function Greetings() {
    var currTime = new Date().getHours();
    var greetings = '';

    const cssStyle = {

    };

    if (currTime >= 1 && currTime < 12) {
        greetings = "Good Morning";
        cssStyle.color = 'green';
    } else if (currTime >= 12 && currTime < 19) {
        greetings = "Good Afternoon";
        cssStyle.color = 'yellow';
    } else {
        greetings = "Good Night";
        cssStyle.color = 'Orange';
    }
    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
            </div>
        </>
    )
}


export default Greetings;