import React, { useState } from "react"; 
import axios from "axios"; 
import "./BuscadorDeCep.css"; 
 
function BuscadorDeCep() { 
 
  const [cep, setCep] = useState(""); 
 
  const [endereco, setEndereco] = useState(""); 
 
  const [cidade, setCidade] = useState(""); 
 
  const [estado, setEstado] = useState(""); 
 
  const handleCepChange = (event) => { 
 
    setCep(event.target.value); 
 
  }; 
 
  const buscarCep = async () => {  
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);  
    if (response.status !== 200) {  
      throw new Error("Erro na requisição");  
    }  
    setCidade(response.data.uf);  
    setEstado(response.data.localidade);  
    setEndereco(response.data.logradouro);  
  };  

 
  return ( 
 
    <div className="buscador-de-cep-container"> 
 
      <input 
 
        type="text" 
 
        value={cep} 
 
        onChange={handleCepChange} 
 
        className="cep-input" 
 
        placeholder="Digite o CEP" 
 
      /> 
 
      <button onClick={buscarCep} className="search-button"> 
 
        Buscar 
 
      </button> 
 
      <p className="endereco-texto"> 
 
        {cidade && ( 
 
          <> 
 
            <strong>Estado:</strong> {cidade}<br /> 
 
          </> 
 
        )} 
 
        {estado && ( 
 
          <> 
 
            <strong>Cidade:</strong> {estado}<br /> 
 
          </> 
 
        )} 
 
        {endereco && ( 
 
          <> 
 
            <strong>Endereço:</strong> {endereco} 
 
          </> 
 
        )} 
 
      </p> 
 
    </div> 
 
  ); 
 
} 
 
export default BuscadorDeCep;