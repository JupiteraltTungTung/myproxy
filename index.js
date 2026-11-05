const express = require('express');
const Unblocker = require('unblocker');

const app = express();
const unblocker = new Unblocker({ prefix: '/proxy/' });

app.use(unblocker);
app.get('/', (req, res) => res.send('Proxy is running'));

app.listen(process.env.PORT || 8080).on('upgrade', unblocker.onUpgrade);
