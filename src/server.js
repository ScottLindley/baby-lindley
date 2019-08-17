import fs from 'fs';
import sirv from 'sirv';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, ADMIN_PASSWORD } = process.env;
const dev = NODE_ENV === 'development';

if (!ADMIN_PASSWORD) {
  console.log('no admin password provided!');
  process.exit(0);
}

let configPath = './config.json';
if (!fs.existsSync(configPath)) {
  configPath = './src/defaultConfig.json';
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const app = express();

app.use(bodyParser.json());

app.get('/config', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(config);
});

app.post('/config', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache');
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).send({ error: 'password incorrect' });
  }

  delete req.body.password;
  Object.assign(config, req.body);
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2), 'utf-8');
  return res.send(config);
});

app.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware());

app.listen(PORT, () => console.log('server up and running! 🚀'));
