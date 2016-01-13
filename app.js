var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarPosts = function(){
    var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
    var randomContent = faker.lorem.paragraph();
    var randomDate = faker.date.past(10);
  var randomImage = faker.image.avatar();
  return {
      Id:randomId,
    Nombre: randomName,
    Publicación: randomContent,
      Fecha:randomDate,
    Imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var publicaciones = _.times(cantidad, generarPosts)
  res.json(publicaciones);
})

app.listen(3000);