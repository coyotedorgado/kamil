const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

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

// Defina uma rota de exemplo
app.get('/api/exemplo', (req, res) => {
  // Execute uma consulta SQL de exemplo
  db.query('SELECT * FROM funcionarios', (err, resultados) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro ao buscar dados' });
      return;
    }
    res.json(resultados);
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`);
});