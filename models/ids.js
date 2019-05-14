'use strict';

import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
	user_id: Number,
	mall_id: Number
});

const Ids = mongoose.model('ff__Ids', idsSchema);

Ids.findOne((err, data) => {
	if (!data) {
		const newIds = new Ids({
			user_id: 0,
			mall_id: 0
		});
		newIds.save();
	}
})
export default Ids