const EXPRESS = require('express');
const PATH = require('path');

const APP = EXPRESS();

APP.set('port', 8080);

APP.use(EXPRESS.static(PATH.join(__dirname, '../html')));
APP.use('/css', EXPRESS.static(PATH.join(__dirname, '../css')));
APP.use('/dist', EXPRESS.static(PATH.join(__dirname, '../../../dist')));
APP.use('/img', EXPRESS.static(PATH.join(__dirname, '../../img')));
APP.use('/uml', EXPRESS.static(PATH.join(__dirname, '../uml')));
APP.use('/img-uml', EXPRESS.static(PATH.join(__dirname, '../img')));

const SERVER = APP.listen(APP.get('port'), '0.0.0.0', () => {
  console.log('The server is running on http://<your machine IP addr>:' + APP.get('port'));
});