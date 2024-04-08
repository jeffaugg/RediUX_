import "firebase/firestore";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import contentsRouter from './routes/contents';

var app = express();

// Definindo o mecanismo de visualização como Pug
app.set('view engine', 'pug');

// Definindo o diretório de visualizações
const viewsDirectory = path.join(__dirname, '..', 'server', 'views');
app.set('views', viewsDirectory);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Configurando cabeçalhos CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contents', contentsRouter);

export default app;
