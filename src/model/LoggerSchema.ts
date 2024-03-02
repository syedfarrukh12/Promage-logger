import { Schema, model } from 'mongoose';

const loggerSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  level: { type: String, required: true },
  message: { type: String, required: true },
  context: { type: Object, optional: true },
});

export default model('Logger', loggerSchema);
