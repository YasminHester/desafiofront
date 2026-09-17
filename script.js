const formulario = document.querySelector("#formulario-contato");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");
const grupoTipoContato = document.querySelector(".grupo-radio");

const campos = {
  nome: {
    entrada: document.querySelector("#nome"),
    erro: document.querySelector("#erro-nome"),
    mensagem: "Este campo é obrigatório."
  },
  sobrenome: {
    entrada: document.querySelector("#sobrenome"),
    erro: document.querySelector("#erro-sobrenome"),
    mensagem: "Este campo é obrigatório."
  },
  email: {
    entrada: document.querySelector("#email"),
    erro: document.querySelector("#erro-email")
  },
  mensagem: {
    entrada: document.querySelector("#mensagem"),
    erro: document.querySelector("#erro-mensagem"),
    mensagem: "Este campo é obrigatório."
  },
  tipoContato: {
    entrada: document.querySelector('input[name="tipoContato"]'),
    erro: document.querySelector("#erro-tipo-contato"),
    mensagem: "Selecione um tipo de contato."
  },
  consentimento: {
    entrada: document.querySelector("#consentimento"),
    erro: document.querySelector("#erro-consentimento"),
    mensagem: "Para enviar o formulário, você precisa concordar em ser contatado."
  }
};

function mostrarErro(campo, mensagem) {
  campo.erro.textContent = mensagem;
  campo.entrada.setAttribute("aria-invalid", "true");

  if (campo === campos.tipoContato) {
    grupoTipoContato.setAttribute("aria-invalid", "true");
  }
}

function limparErro(campo) {
  campo.erro.textContent = "";
  campo.entrada.removeAttribute("aria-invalid");

  if (campo === campos.tipoContato) {
    grupoTipoContato.removeAttribute("aria-invalid");
  }
}

function limparTodosOsErros() {
  Object.values(campos).forEach(limparErro);
}

function validarFormulario() {
  let formularioValido = true;
  let primeiroCampoInvalido = null;

  limparTodosOsErros();

  ["nome", "sobrenome", "mensagem"].forEach((nomeCampo) => {
    const campo = campos[nomeCampo];

    if (!campo.entrada.value.trim()) {
      mostrarErro(campo, campo.mensagem);
      formularioValido = false;
      primeiroCampoInvalido ??= campo.entrada;
    }
  });

  if (!campos.email.entrada.value.trim()) {
    mostrarErro(campos.email, "Este campo é obrigatório.");
    formularioValido = false;
    primeiroCampoInvalido ??= campos.email.entrada;
  } else if (!campos.email.entrada.validity.valid) {
    mostrarErro(campos.email, "Digite um endereço de e-mail válido.");
    formularioValido = false;
    primeiroCampoInvalido ??= campos.email.entrada;
  }

  const tipoContatoSelecionado = document.querySelector('input[name="tipoContato"]:checked');

  if (!tipoContatoSelecionado) {
    mostrarErro(campos.tipoContato, campos.tipoContato.mensagem);
    formularioValido = false;
    primeiroCampoInvalido ??= campos.tipoContato.entrada;
  }

  if (!campos.consentimento.entrada.checked) {
    mostrarErro(campos.consentimento, campos.consentimento.mensagem);
    formularioValido = false;
    primeiroCampoInvalido ??= campos.consentimento.entrada;
  }

  if (primeiroCampoInvalido) {
    primeiroCampoInvalido.focus();
  }

  return formularioValido;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!validarFormulario()) return;

  mensagemSucesso.hidden = false;
  formulario.reset();
  limparTodosOsErros();
  mensagemSucesso.focus();
  mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

formulario.addEventListener("input", (evento) => {
  const entrada = evento.target;
  const campo = campos[entrada.name];

  if (campo) limparErro(campo);
});

formulario.addEventListener("change", (evento) => {
  const entrada = evento.target;

  if (entrada.name === "tipoContato") limparErro(campos.tipoContato);
  if (entrada.name === "consentimento") limparErro(campos.consentimento);
});
