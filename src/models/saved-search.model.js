const options = {
  timestamps: true
};

/**
 * Saved search
 */
const fields = {
  title: { type: String, required: true  },
  sortBy: { type: String },
  sortOrder: { type: String  },
  params: { type: 'Mixed' },
  pageProvider: { type: String }
};

module.exports = function model (app, name) {
  const mongoose = app.get('mongoose');
  const schema = new mongoose.Schema(fields, options);
  return mongoose.model(name, schema);
};
module.exports.schema = fields;