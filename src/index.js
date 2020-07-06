//Import the react and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = ()=>{
    return <div>Hi There</div>
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)