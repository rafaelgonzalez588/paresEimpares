const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var data = "";
  for(let i = 1; i <= 50; i++){
    data += i % 2 === 0 ? `<p>${i} Soy Par!</p>` : `<p>${i} Soy Impar!</p>`
  }

  res.send(data);
});

app.listen(3000, () => console.log('Listening on port 3000!'));