import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({ send }) {
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    return (
        <form
            onSubmit={
                (event) => {
                    event.preventDefault();
                    send({ cep, estado, cidade, endereco, numero });
                }}>

            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
                id="CEP"
                label="CEP"
                type="number"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                id="estado"
                label="Estado"
                type="text"
                required
                variant="outlined"
            />

            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
                id="cidade"
                label="Cidade"
                type="text"
                required
                variant="outlined"
            />

            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                id="endereco"
                label="Endereço"
                type="text"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                id="numero"
                label="Número"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>
                Finalizar Cadastro
            </Button>

        </form>
    );
}

export default DadosEntrega;