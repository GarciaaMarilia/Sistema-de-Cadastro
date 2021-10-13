function validCPF(cpf) {
    if (cpf.length !== 11) {
      return { valido: false, texto: "CPF deve ter 11 dígitos." }
    } else {
      return { valido: true, texto: "" }
    }
  }

  function validSenha(senha) {
    if (senha.length < 3 || senha.length > 72) {
      return { valido: false, texto: "Senha deve terentre 11 e 72 dígitos." }
    } else {
      return { valido: true, texto: "" }
    }
  }

  export {validCPF, validSenha};