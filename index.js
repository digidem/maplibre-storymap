const express = require('express');
const app = express();
const port = process.argv[2] || 5000;

app.use(express.static('.', {
    // Set content-encoding header for gzipped vector tiles
    setHeaders: (res, url) => {
        if (url.endsWith('.vector.pbf')) {
         res.setHeader('content-encoding', 'gzip');
        }
    }
}));

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Now listening on port ${port}`);
    }
});