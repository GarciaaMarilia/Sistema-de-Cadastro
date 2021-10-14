import React, { Component } from 'react';
import './App.css';
import { validCPF, validSenha } from './Formulario/validacoes'
import Formulario from './Formulario/FormularioCadastro';
import Space from './Formulario/space';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Space size={60} />
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <Space size={60} />
        <Formulario send={send} validacoes={{ cpf: validCPF, senha: validSenha, nome: validSenha }} />
      </Container>
    );
  }
}

function send(dados) {
  console.log(dados)
}


export default App;
