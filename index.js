const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('.', {
    // Set content-encoding header for gzipped vector tiles produced for use with Mapeo, which end in .vector.pbf
    setHeaders: (res, url) => {
        if (url.endsWith('.vector.pbf')) {
         res.setHeader('content-encoding', 'gzip');
        }
    }
}));

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});