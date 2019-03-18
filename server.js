const {createServer} = require('http');
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== "production",
    conf: {
        webpack: config => {
          config.devtool = false;
    
          for (const r of config.module.rules) {
            if (r.loader === 'babel-loader') {
              r.options.sourceMaps = false;
            }
          }
    
          config.module.rules.push({
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          });
    
          return config;
        }
      }
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(3000, err => {
        if(err) throw err;
        console.log('Ready on localhost:3000');
    });
});