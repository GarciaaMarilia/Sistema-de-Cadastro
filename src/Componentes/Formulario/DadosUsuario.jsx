import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../Context/ValidacoesCadastro';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({ send }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erro, setErro] = useState({ senha: { valido: true, texto: "" } })

    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erro };
        novoEstado[name] = validacoes[name](value);
        setErro(novoEstado);
    }

    function possoenviar() {
        for (let campo in erro) {
            if (!erro[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoenviar()) {
                    send({ email, senha });
                }
            }}>

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                name='email'
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
                fullWidth
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario;