const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Acesso à rota: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Página Inicial');
});

app.get('/about', (req, res) => {
  res.send('Página About');
});

app.post('/data', (req, res) => {
  res.send('Página Data');
});

app.get('/users', (req, res) => {
  // Redireciona para a página de signup se nenhum userid for fornecido
  res.redirect('/signup');
});

app.get('/users/:userid', (req, res) => {
  const { userid } = req.params;
  res.send(`Bem-vindo, usuário ${userid}!`);
});

app.get('/signup', (req, res) => {
  res.send('Página de Signup');
});

app.get('/signin', (req, res) => {
  res.send('Página de Signin');
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>Erro 404 - Página não encontrada</h1>
    <a href="/">Voltar para a Página Inicial</a>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});