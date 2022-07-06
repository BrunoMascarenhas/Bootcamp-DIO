import React from "react";

const buttonA = <button> Histórico de Clientes</button>

const buttonB = <button> Segundo Botão </button>

const hasCustomer = false

const App = () => {
    return (
        <div>
            <p>Digital Innovation</p>
            <p> Bem Vindo =D.</p>
            
            {hasCustomer && (            
            <div>
                Clique no Botão abaixo para visualizar o histórico dos clientes
                <br />
                {buttonA}
            </div>
            )}        
        </div>
    );
};
export default App;