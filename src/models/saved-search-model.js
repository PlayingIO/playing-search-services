import { plugins } from 'mostly-feathers-mongoose';

const options = {
  timestamps: true
};

const fields = {
  title: { type: String, required: true  },
  sortBy: { type: String },
  sortOrder: { type: String  },
  params: { type: 'Mixed' },
  pageProvider: { type: String }
};

export default function model (app, name) {
  const mongoose = app.get('mongoose');
  const schema = new mongoose.Schema(fields, options);
  return mongoose.model(name, schema);
}

model.schema = fields;