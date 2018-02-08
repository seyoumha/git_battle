// Express
const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.resolve('angular-client/dist')));

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// CORS
const cors = require('cors');
app.use(cors());

let morgan = require("morgan");
app.use(morgan('dev'));

//Model

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gitub-player-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const playerSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'userame is required'],
    // minlength: [2, 'Name length must be greater than 2'],
    unique: true
  },
  score:{
    type: Number, 
    trim: true,
    
  },
  avatar: {
    type: String,
  },
}, {
  timestamps: true
});
playerSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Player = mongoose.model('Player', playerSchema);

//Controller

const playerController = {
    index: (request, response) => {
      Player.find({},{score: -1, username: true, avatar: true })
        .then(players => response.json(players))
        .catch(error => console.log(error));
    },
    create: (request, response) => {  
      Player.create(request.body)
        .then(player => response.json(player))
        .catch(error => console.log(error));
    }
};

  // Routes
app 
.get('/players', playerController.index)
.post('/players', playerController.create)
.all('*/', function (req, res) {
  res.sendFile(path.resolve('dist.index.html'))
})

//Server
const port = 5000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));