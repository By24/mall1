'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const weappStyleConfigSchema = new Schema({
    appConfigId: Number,
    theme:[],
    tabBar: {},
})

weappStyleConfigSchema.index({ id: 1 });

const weappStyleConfig = mongoose.model('ff__weapp_style_config', weappStyleConfigSchema);


export default weappStyleConfig


