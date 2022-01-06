import React from 'react';

const AppendScript = (props) => {
    console.log(props.appendToScript);
    const script = document.createElement("script");
    script.src = props.appendToScript;
    script.async = true;
    document.body.appendChild(script);
    return true;
};
export default AppendScript;