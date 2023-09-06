/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
// eslint-disable-next-line import/first
import config, { output } from './webpack.config.js';

const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: output.publicPath,
  }),
);

// Serve the files on port 3000.
app.listen(3000, () => {

});