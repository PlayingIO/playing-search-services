import timestamps from 'mongoose-timestamp';
import { plugins } from 'mostly-feathers-mongoose';

const fields = {
  title: { type: 'String', required: true  },
  sortBy: { type: 'String' },
  sortOrder: { type: 'String'  },
  params: { type: 'Mixed' },
  pageProvider: { type: 'String' }
};

export default function model (app, name) {
  const mongoose = app.get('mongoose');
  const schema = new mongoose.Schema(fields);
  schema.plugin(timestamps);
  return mongoose.model(name, schema);
}

model.schema = fields;