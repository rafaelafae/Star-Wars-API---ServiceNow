# Star Wars API Integration

Este repositório contém um exemplo de integração com a API de Star Wars utilizando o ServiceNow. A integração é demonstrada através de um Script Include e um Catalog Client Script.

## Descrição

Este projeto demonstra como integrar a API de Star Wars com o ServiceNow. A API permite consultar informações sobre personagens de Star Wars e exibi-las em um formulário no ServicePortal.

## Estrutura do Projeto

- **Script Include:** Contém a lógica para se conectar e consultar a API de Star Wars.
- **Catalog Client Script:** Utiliza o Script Include para obter dados da API e exibi-los no formulário.
- **Vídeo de Demonstração:** Um vídeo que mostra a integração em funcionamento.

## Vídeo de Demonstração

Assista ao vídeo de demonstração para ver a integração em ação:

[![Demonstração da API Star Wars](https://img.youtube.com/vi/Afq_QNgVWCw/maxresdefault.jpg)](https://youtu.be/Afq_QNgVWCw)

## Como Utilizar

**Adicione o Script Include**

   - Navegue até a área de Script Includes no ServiceNow e crie um novo Script Include.
   - Copie e cole no novo Script Include.

**Adicione o Catalog Client Script**

   - Navegue até a área de Catalog Client Scripts no ServiceNow e crie um novo Client Script.
   - Copie e cole o código no novo Catalog Client Script.
   - O Catalog Client Script deve ser do tipo onChange, e selecionar a variável de input.

**Configure o Formulário**

   - Configure o formulário no ServicePortal para utilizar o Client Script e exibir os dados retornados pela API.

**Clone o Repositório**

   ```bash
   git clone https://github.com/rafaelafae/Star-Wars-API---ServiceNow.git
