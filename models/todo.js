const db = require('mongoose');

const TodoSchema = db.Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
});

module.exports = db.model('Todo', TodoSchema);
