//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/academic-journal-kstu-client'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/academic-journal-kstu-client/'}),
);

// Start the app by listening on the port 5001
app.listen(process.env.PORT || 5001);
