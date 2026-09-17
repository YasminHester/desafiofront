# Formulário de contato acessível

Projeto desenvolvido como solução para o desafio **Contact Form** do [Frontend Mentor](https://www.frontendmentor.io/).

O objetivo foi construir um formulário de contato responsivo, com validação, feedback visual e atenção à acessibilidade.

## Demonstração

- Layout adaptável para computadores, tablets e celulares.
- Mensagem de confirmação após o envio correto.
- Validação de campos obrigatórios.
- Validação do formato do endereço de e-mail.
- Estados de foco e de passar o cursor sobre elementos interativos.
- Navegação usando apenas o teclado.
- Mensagens de erro e sucesso preparadas para leitores de tela.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 puro
- JavaScript puro
- Fonte Karla

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador.
4. Para uma experiência melhor, use a extensão **Live Server** e clique em **Go Live**.

O projeto não precisa de instalação de dependências ou de um servidor back-end.

## Estrutura do projeto

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

Foram aplicados os seguintes cuidados:

- Cada entrada possui um `label` associado.
- Os campos obrigatórios são identificados visualmente e no HTML.
- As mensagens de erro usam `role="alert"`.
- Os campos inválidos recebem `aria-invalid="true"`.
- Os erros são associados aos campos por meio de `aria-describedby`.
- A mensagem de sucesso utiliza `role="status"` e recebe foco após o envio.
- O formulário pode ser preenchido usando somente o teclado.
- O foco visível foi mantido nos elementos interativos.

## O que aprendi

Durante o desenvolvimento, pratiquei:

- Criação de formulários com HTML semântico.
- Uso de `fieldset` e `legend` para agrupar opções relacionadas.
- Validação de dados com JavaScript.
- Manipulação de classes e atributos de acessibilidade.
- Construção de layouts responsivos com CSS Grid.
- Importância dos estados de foco para usuários de teclado.

## Melhorias futuras

- Conectar o formulário a um serviço de envio de mensagens.
- Adicionar testes automatizados de validação.
- Realizar testes com leitores de tela, como NVDA e VoiceOver.
- Publicar o projeto no GitHub Pages ou em outra plataforma de hospedagem.

## Créditos

Desafio criado por [Frontend Mentor](https://www.frontendmentor.io/). Projeto desenvolvido por **Yasmin**.
