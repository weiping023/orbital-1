var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema (
{
	name: String},
	{collection: 'event'}
);

mongoose.connect( 'mongodb://localhost/loginapp');

var Todo = module.exports = mongoose.model('Todo', Todo);
