const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const { ADMIN_PASSWORD } = process.env;

if (!ADMIN_PASSWORD) {
  console.log('no admin password provided!');
  process.exit();
}

const app = express();

const config = {
  name: '???',
  gender: '???',
  timeOfBirth: '???',
  weight: '???',
  dueDate: '2019-10-11T00:00:00.000',
  update: '',
  image:
    'https://lh3.googleusercontent.com/LwiuTYx1m3si_q3tICuY69MxMx2Z-DtpiPvkzG9xVQ9eN5ONiCdNp18MlgkKtpoKmd3nMgQEbbPS4xdpB0tTKMUTudaM3k-KZtiXHbB6HFQjloPueO_Lpmx3n4wh0qTnwIIWwfR0hVyHYwcZWM6zpP5cG6CoCcGEXyMqeL-NI5xPUVaYQbfqPsVDE1ipGrcrHF3UgCE9Uv7cKjpIgdvD9yHE5hoyeoGj2BevyaWn2fng6KH0HfBZUQVay45VPpYV7DVk6_IF3wivn-M3QVa-Mr4vqq60D-aE3kGhil1aYnZM0fFIsIg3hEcX57VZdKm15T6LrENMi5xbUKFSUvw01JEYN2_NDkhs36UGPMOqZ1rwB6VLfW2TL13zGBilJZadZdSm9xWTw6u1r2fL2iCF7CoA4YoZ7nNFUmmSz9mkbuquP80ZAH7wjT3ZQ8pmo0OixB_bJ72gJ-F9a0RHdKkkMr_PsDmu2Me34I7UvnpRStHdfeDVBjAPqZKwW0UHqPAGtbBBQmFT3TQMKC24bjoFxTWWh96kZsbZoS2tR9O-IT1ELgKh4yb8rIOYLhSvn8gPzDCqmWOembSFU7LsfQ5A2h4nd6kba_P44OD4TioRTR6TEC4ZhEboKTKql_wQIEnlULRRf2MG2IfxwabOvjzrt7Rrc1pG-zOj=w2542-h1908-no',
};

app.use(bodyParser.json());

app.use(express.static('public'));

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache');
  fs.createReadStream(`${__dirname}/public_admin/index.html`, 'utf-8').pipe(res);
});

adminRouter.get('/global.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'no-cache');
  fs.createReadStream(`${__dirname}/public_admin/global.css`, 'utf-8').pipe(res);
});

adminRouter.get('/bundle.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'no-cache');
  fs.createReadStream(`${__dirname}/public_admin/bundle.css`, 'utf-8').pipe(res);
});

adminRouter.get('/bundle.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  res.setHeader('Cache-Control', 'no-cache');
  fs.createReadStream(`${__dirname}/public_admin/bundle.js`, 'utf-8').pipe(res);
});

app.use('/admin', adminRouter);

app.get('/favicon.png', (req, res) => {
  res.setHeader('Content-Type', 'image/png');
  fs.createReadStream(`${__dirname}/public/favicon.png`).pipe(res);
});

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

  console.log({ config });

  return res.send(config);
});

app.listen(1337, () => console.log('server up and running!'));
