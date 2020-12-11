import React from "react"
import {Helmet} from 'react-helmet';
import PaginaProduto from './PaginaProduto';

const PaginaDeCompra:React.FunctionComponent = () =>{
    return(
        <div style={{width:"57%"}}>
            <Helmet>
                <title>Placa de Arduino</title>
            </Helmet>
            <PaginaProduto 
                nomeProduto="Arduino" 
                precoProduto={100}
                descricaoProduto="Placa de Arduino"
                imagemProduto="data:image/jpeg;base64,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"
                linkProduto="https://www.youtube.com/watch?v=t0tCMcDhbZE"
            />
        </div>
    )
}

export default PaginaDeCompra