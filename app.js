import express from 'express';
import chalk from 'chalk';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import FileStreamRotator from'file-stream-rotator';
import config from './config';
import router from './routers';
import './mongoose';
const app = express();



// 日志
var logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
})
app.use(morgan('combined', { stream: accessLogStream }))




router(app);

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});


export default app;