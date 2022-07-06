import "./style.css"
import React from "react"
import ReactDOM from "react-dom"

function sum (a,b){
    return a+b
}

function PrimeiroJSX(){
    return(
        <div>
         Bruno Mascarenhas - Introdução ao ReactJS
         <h1>Soma:{sum(10, 15)}</h1>
        </div>
    )
}

const App = () => {
    return(
        <div className="App">
            {PrimeiroJSX()}
            
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)