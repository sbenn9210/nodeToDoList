

fetch('http://localhost:3000/dishes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Hubot',
      login: 'hubot',
    })
  }).then(function(response) {
      return response.json()
  }).then(function(json) {
      console.log(json)
  })