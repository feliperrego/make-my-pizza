# Make My Pizza

Aplicação de teste para avaliação de conhecimentos.  

Você pode ver o resultado na seguinte URL:  
[https://make-my-pizza.vercel.app](https://make-my-pizza.vercel.app/)

## Principais tecnologias usadas: 
- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [YUP](https://github.com/jquense/yup)
- [Unform](https://unform.dev/)
- [Styled components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)

## Início

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn dev
```

Depois rode o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Observações:
- O projeto foi implementado em React utiliando o framework Next.js.
- As requisições estão mockadas usando a API Functions, no diretório `src/pages/api`
- Não foram implementados testes, devido a problemas de tempo e priorização.
- Para simular um erro no formulário da última etapa, basta inserir a palavra "erro" em qualquer lugar do campo "Nome completo"
