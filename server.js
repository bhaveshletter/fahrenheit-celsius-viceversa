const express = require('express'),
	app = express(),
	port = 8080

app.use(express.static(__dirname + '/dist/fahrenheit-celsius-viceversa'))

app.get('/', function (req, res) {
	res.sendFile('index.html', { root: 'dist/fahrenheit-celsius-viceversa' })
})

app.listen(process.env.PORT || port, () =>
	console.log(`Running on port ${process.env.PORT || 8080}`)
)
