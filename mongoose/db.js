import mongoose from'mongoose';

module.exports = {
	connect: function() {
		mongoose.connect('mongodb://localhost/demo');
	},
	close: function() {
		mongoose.connection.close();
	}
};