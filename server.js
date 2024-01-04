const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;
function insertFunci(a, b, c) {
  var sql = `INSERT INTO funcionarios (nome, tipo, sexo) VALUES ('${a}', '${b}', '${c}')`
    db.query(sql, function(err, result){
    if(err) throw err;
    })
    console.log("foi inserido na tabela funcionarios ", a, b, c)
}

function addCliente(a) {
  var sql = `INSERT INTO clientes (nome) VALUES ('${a}')`
  db.query(sql, function(err, resultado){
    if(err) throw err;
  })
  console.log(`foi inserido no banco ${a}`)
}

  function removerConta(id) {
  var sql = `UPDATE contas SET boletoAtivo = 0 WHERE contaId = ${id}`
  db.query(sql, (err, resultado)=>{
    if(err) throw err
  })
  console.log(`foi alterado a tabela contas com o id ${id}`)
  }
  function addConta(ben, valor, vencimento) {
    var sql = `INSERT INTO contas(beneficiario, valor, dataVencimento, boletoAtivo) VALUES ('${ben}', '${valor}', '${vencimento}', true);`
    db.query(sql, (err, resultado)=>{
      if(err) throw err
    })
    console.log(`adicionado uma conta ${ben}, ${valor}, ${vencimento}`)
  }
// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'vaniadb',
  port: 3306
});

// Conecte-se ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida');
});
app.use(cors())
// Defina uma rota de exemplo
app.get('/', (req, res) => {
  // Execute uma consulta SQL de exemplo
  db.query('SELECT * FROM funcionarios', (err, resultado) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro ao buscar dados' });
      return;
    }
    res.json(resultado);
  });
});

app.get('/funcionarios', (req, res)=> {
  db.query(`SELECT * FROM funcionarios`, (err, resultado)=>{
    res.send(resultado)
  })
})

app.get('/clientes', (req, res)=> {
  var sql = `SELECT * FROM clientes`
  db.query(sql, (err, resultado)=>{
    if(err) throw err;
    res.send(resultado)
  })
})

app.get('/addFuncio/:nome/:profissao/:sexo', (req, res) => {
  insertFunci(req.params.nome, req.params.profissao, req.params.sexo)
})

app.get('/addClientes/:nome', (req, res) => {
  addCliente(req.params.nome)
})

app.get('/contas', (req, res)=> {
  var sql = 'SELECT * FROM contas WHERE boletoAtivo = true'
  db.query(sql, (err, resultado)=>{
    if(err){
      console.log(err)
    }
    res.send(resultado)
  })
})
app.get('/contas/removerConta/:id', (req, res)=>{
  removerConta(req.params.id)
})
app.get('/contas/addConta/:beneficiario/:valor/:vencimento', (req, res)=>{
  addConta(req.params.beneficiario, req.params.valor, req.params.vencimento)
})

app.get('/servicos', (req, res)=> {
  var sql = `SELECT * FROM servicos`
  db.query(sql, (err, resultado)=> {
    if(err) throw err
    res.send(resultado)
  })
})

app.post('/servicos/addServico/:servico/:comissao', (req, res)=>{
  var sql = `INSERT INTO servicos (servico, comissao) VALUES ('${req.params.servico}', '${req.params.comissao}')`
  db.query(sql, (err, resultado)=> {
    if(err) throw err
    res.send(resultado)
  })
})

app.get('/pagamentos', (req, res)=> {
  var sql = 'SELECT * FROM tipos_pagamentos;'
  db.query(sql, (err, resultado)=>{
    if(err) throw err
    res.send(resultado)
  })
})
app.post('/pagamentos/adicionar/:tipo', (req, res)=>{
  var tipo = req.params.tipo
  var sql = `INSERT INTO tipos_pagamentos (pagamentos) VALUES ('${tipo}')`
  db.query(sql, (err, resultado)=>{
    if(err) throw err
    res.send(resultado)
  })
})
app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`);
});