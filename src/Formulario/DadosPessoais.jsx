import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import Stack from '@mui/material/Stack';

function DadosPessoais({ send, validacoes }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erro, setErro] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" } })

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
                event.preventDefault(); // Prevenindo o comportamento padrão do HTML em recarregar toda a página em formulários
                if (possoenviar()) {
                    send({ nome, sobrenome, cpf, novidades, promocoes })
                }
            }}>

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erro.nome.valido}
                helperText={erro.nome.texto}
                id="Nome"
                label="Nome"
                name="Nome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="Sobrenome"
                name="Sobrenome"
                label="Sobrenome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erro.cpf.valido}
                helperText={erro.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                required
                type="number"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Stack direction="row" spacing={4}>
                <FormControlLabel
                    label="Promoções"
                    control={
                        <Switch
                            checked={promocoes}
                            onChange={(event) => {
                                setPromocoes(event.target.checked);
                            }}
                            name="promocoes"
                            color="primary"
                        />
                    }
                />


                <FormControlLabel
                    label="Novidades"
                    control={
                        <Switch
                            checked={novidades}
                            onChange={(event) => {
                                setNovidades(event.target.checked);
                            }}
                            name="novidades"
                            color="primary"
                        />
                    }
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Próximo
                </Button>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Voltar
                </Button>
            </Stack>
        </form>
    );
}
export default DadosPessoais;