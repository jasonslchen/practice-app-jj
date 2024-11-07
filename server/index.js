const app = require('./server.js');
app.port = 3000
app.listen(app.port, () => console.log(`Listening on port ${app.port}`));