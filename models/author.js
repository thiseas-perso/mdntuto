const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual('fullname').get(function () {
  let fullname = '';
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  return fullname;
});

AuthorSchema.virtual('lifespan').get(function () {
  let lifetimeString = '';
  if (this.date_of_birth) {
    lifetimeString = this.date_of_birth.getYear().toString();
  }
  lifetimeString += ' - ';
  if (this.date_of_death) {
    lifetimeString += this.date_of_death.getYear();
  }
  return lifetimeString;
});

AuthorSchema.virtual('url').get(function () {
  return `/catalog/author/${this._id}`;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
