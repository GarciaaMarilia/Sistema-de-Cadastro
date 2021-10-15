import React, { Component } from 'react';
import './App.css';
import { validCPF, validSenha } from './Componentes/Formulario/validacoes';
import ValidacoesCadastro from './Context/ValidacoesCadastro';
import Formulario from './Componentes/Formulario/FormularioCadastro';
import Space from './Componentes/Formulario/space';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';


class App extends Component {
  render() {
    return (
      <Container
        component="article"
        maxWidth="sm"
      >
        <Space size={60} />
        <Typography
          variant="h3"
          component="h1"
          align="center"
        >
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{
          cpf: validCPF,
          senha: validSenha,
          nome: validSenha
        }}
        >
          <Space size={60} />
          <Formulario send={send} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function send(dados) {
  console.log(dados)
}


export default App;
