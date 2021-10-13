import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({ send, validacoes }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erro, setErro] = useState({ senha: { valido: true, texto: "" } })

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erro};
        novoEstado[name] = validacoes[name](value);
        setErro(novoEstado);
    }
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                send({ email, senha });
            }}>

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                label="E-mail"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erro.senha.valido}
                helperText={erro.senha.texto}
                id="password"
                name="password"
                label="Password"
                type="password"
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
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosUsuario;