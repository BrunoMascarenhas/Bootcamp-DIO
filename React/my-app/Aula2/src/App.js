import React from "react";

const buttonA = <button> Histórico de Clientes</button>

const buttonB = <button> Cadastrar Cliente </button>

const hasCustomer = true

const App = () => {
     const renderShowHistory = (
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
    )
    const renderAddCustomer = (
        <div>
            Clique abaixo para cadastrar o cliente
            <br />
            {buttonB}
        </div>
    )
    const showCustomer = () =>{
        if (!hasCustomer) return null

        return(
            <div>
                <h2>Cliente Bruno Mascarenhas da Silva</h2>
            </div>
        )
    }
    console.log('hasCustomer', hasCustomer)

    return(
        <div>
            <p> Digital Innovation One</p>
            <p>Bem Vindo a nossa aual =D</p>
            {hasCustomer ? renderShowHistory : rednerAddCustomer}

            <div>
                {showCustomer()}
                </div>
        </div>        

    )

};
export default App;