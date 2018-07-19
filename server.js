const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());

const partsRouter = require('./routes/parts.route');
const robotsRouter = require('./routes/robots.route');


app.use(express.static('/static'));
app.use('/api', partsRouter);
app.use('/api', robotsRouter);



// config tha files for build it from index.html ----------------------------------------------
const allowedExt = ['.js', '.ico', '.css', '.png', '.jpg', '.woff2', '.woff', '.ttf', '.svg',];

app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`static/${req.url}`));
    } else {
        res.sendFile(path.resolve('static/index.html'));
    }
});
//---------------------------------------------------------------------------------------------



app.listen(3000,
  () => console.log('Robot labs API server listening on port 3000!')
);