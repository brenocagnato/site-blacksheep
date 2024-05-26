# Site Black Sheep Filmes
#### Descrição

Este projeto tem como objetivo desenvolver um site moderno para nossa produtora audiovisual, refletindo as melhores práticas e tendências de design. O site será um portfólio interativo e atrativo, destacando nossos trabalhos e serviços. O desenvolvimento é colaborativo, realizado entre colegas de cursos de tecnologia, visando criar uma ferramenta que sirva tanto como um portfólio profissional quanto um exemplo de aplicação de habilidades adquiridas durante nossos estudos.

#### Estrutura do Projeto


```java
.
├── frontend/
│   ├── public/
│   │   └── assets/
│   │       └── imgs/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.ts
│   ├── .gitignore
│   ├── package.json
│   └── tsconfig.json
├── Wireframe's/
│   ├── figma/
│   └── outros_arquivos/
├── README.md
└── LICENSE.txt
```


- **frontend/**: Contém o código-fonte do frontend do projeto.
    - **public/**: Arquivos estáticos e assets.
        - **assets/**: Contém arquivos estáticos.
            - **imgs/**: Contém imagens do projeto.
    - **src/**: Contém o código-fonte do frontend.
        - **components/**: Componentes reutilizáveis do projeto.
        - **pages/**: Páginas da aplicação.
        - **styles/**: Estilos globais e específicos.
    - **index.html**: Arquivo HTML principal.
    - **package.json**: Arquivo de configuração do npm, contendo dependências e scripts.
    - **tsconfig.json**: Arquivo de configuração do TypeScript.
    - **vite.config.ts**: Arquivo de configuração do Vite.
- **backend/**: Contém o código-fonte do backend do projeto.
    - **src/**: Contém o código-fonte do backend.
        - **controllers/**: Contém os controladores da aplicação.
        - **models/**: Contém os modelos de dados.
        - **routes/**: Contém as rotas da aplicação.
        - **services/**: Contém os serviços da aplicação.
        - **index.ts**: Ponto de entrada do backend.
    - **package.json**: Arquivo de configuração do npm, contendo dependências e scripts.
    - **tsconfig.json**: Arquivo de configuração do TypeScript.
- **Wireframe's/**: Contém os arquivos de design e mockups do projeto, como arquivos do Figma.
- **README.md**: Documentação do projeto.
- LICENSE


#### Configuração do Ambiente

##### Pré-requisitos

- Node.js (versão 20.12.2 ou superior)
- npm (versão 10.5.0 ou superior) ou yarn (versão 1.22.22 ou superior)

##### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/brenocagnato/site-blacksheep
cd site-blacksheep
```

2. Instale as dependências do frontend:

```bash
cd frontend
npm install
# ou
yarn install
```

3. Instale as dependências do backend:

```bash
cd ../backend
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento do frontend:
```bash
cd ../frontend
npm start
# ou
yarn start
```

5. Inicie o servidor de desenvolvimento do backend:
```bash
cd ../backend
npm run dev
# ou
yarn dev
```

---
## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Fork o projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE (./LICENSE) para mais detalhes.

## Contato

Breno Cagnato - breno.cagnato@gmail.com - [Meu LinkedIn](https://www.linkedin.com/in/brenocagnato/)


