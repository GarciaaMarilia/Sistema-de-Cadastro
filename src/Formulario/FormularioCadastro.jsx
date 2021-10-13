import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega'
import { Step, Stepper, Typography } from '@material-ui/core';
import { StepLabel } from '@material-ui/core';

function FormularioCadastro({ send, validacoes }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            send(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario send={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais send={coletarDados} validacoes={validacoes} />,
        <DadosEntrega send={coletarDados} validacoes={validacoes}/>,
        <Typography variant="h5" align="center">Obrigada pelo cadastro!</Typography>
    ];

    function coletarDados(dados) { // Lembrar de função assíncrona
        setDadosColetados({ ...dadosColetados, ...dados })
        next();
    }

    function next() {
        setEtapaAtual(etapaAtual + 1);
    }

    return <>
        <Stepper activeStep={etapaAtual} align="center">
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoais</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
    </>;
}

export default FormularioCadastro;
