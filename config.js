'use strict';

module.exports = {
	port: 8006,
	url: 'mongodb://root:root@localhost:27017/mall',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:  365 * 24 * 60 * 60 * 1000,
		}
	},
	jwtsecret:'jjjjjj'
}

// db.createUser({user:'root',pwd :'root',roles: [{role:'userAdminAnyDatabase',db:'admin'},'readWriteAnyDatabase']})


// db.adminCommand({  shutdown:1 })