import express from 'express';
import chalk from 'chalk';

import config from './config';
import router from './routers';
import './mongoose';
const app = express();

router(app);

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});