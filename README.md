# Formulário de contato acessível

Projeto desenvolvido para o desafio **Contact Form** do [Frontend Mentor](https://www.frontendmentor.io/).

## Sobre o projeto

O objetivo foi criar um formulário de contato responsivo, acessível e próximo ao design proposto. A aplicação apresenta validação dos campos, mensagens de erro e confirmação de envio.

## Funcionalidades

- Preenchimento do formulário com teclado.
- Validação dos campos obrigatórios.
- Validação do formato do e-mail.
- Mensagens de erro associadas aos respectivos campos.
- Mensagem de sucesso após o envio válido.
- Estados de foco e passar o cursor.
- Layout adaptável para computador, tablet e celular.
- Suporte inicial a leitores de tela com atributos ARIA e regiões dinâmicas.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica e acessível.
- **CSS3:** layout responsivo, estilos de foco, hover e mensagens de erro.
- **JavaScript:** validação e comportamento do formulário.
- **Fonte Karla:** tipografia disponibilizada nos arquivos do desafio.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador.
4. Opcionalmente, utilize a extensão **Live Server** e clique em **Go Live**.

O projeto não utiliza dependências externas nem exige um servidor back-end.

## Estrutura de pastas

```text
contact-form-main/
├── assets/
│   ├── fonts/
│   └── images/
├── design/
├── index.html
├── script.js
├── style.css
└── README.md
```

## Acessibilidade

Foram adotadas as seguintes práticas:

- Cada campo possui um `label` associado.
- Campos obrigatórios usam o atributo `required`.
- Opções de contato são agrupadas com `fieldset` e `legend`.
- Mensagens de erro são relacionadas aos campos com `aria-describedby`.
- Campos inválidos recebem `aria-invalid="true"`.
- A mensagem de sucesso usa `role="status"`, `aria-live` e foco programático.
- Os elementos interativos possuem foco visual.
- A ordem de navegação segue a estrutura do formulário.

> Acessibilidade deve ser validada também com testes reais usando teclado e leitores de tela, como NVDA ou VoiceOver.

## Testes manuais realizados

- [ ] Enviar o formulário vazio.
- [ ] Informar um e-mail inválido.
- [ ] Não selecionar o tipo de contato.
- [ ] Não marcar o consentimento.
- [ ] Preencher todos os campos corretamente.
- [ ] Navegar pelo formulário utilizando somente a tecla `Tab`.
- [ ] Conferir o comportamento em telas pequenas e grandes.
- [ ] Verificar foco e mensagens de erro.

## Aprendizados

Durante o desenvolvimento, pratiquei:

- Construção de formulários com HTML semântico.
- Uso de `fieldset` e `legend` para grupos de opções.
- Validação de informações com JavaScript.
- Manipulação de classes e atributos ARIA.
- Criação de layouts responsivos com CSS Grid.
- Importância do foco visível e da navegação por teclado.

## Melhorias futuras

- Integrar o formulário a um serviço real de envio.
- Criar testes automatizados para a validação.
- Fazer uma rodada completa de testes com leitores de tela.
- Publicar uma demonstração no GitHub Pages.

## Créditos

Desafio criado por [Frontend Mentor](https://www.frontendmentor.io/).

Projeto desenvolvido por **Yasmin Hester Pereira da Silva**.
