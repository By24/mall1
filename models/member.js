'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    memberId: Number,

})

memberSchema.index({ id: 1 });

const member = mongoose.model('ff__member', memberSchema);


export default member


