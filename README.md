# ngrock webpack plugin

Port ngrock to webpack-dev-server  
localhost tunnel for your static build

[![Build Status](https://api.travis-ci.org/edtoken/ngrock-webpack-plugin.svg?branch=master)](https://travis-ci.org/edtoken/ngrock-webpack-plugin)
[![npm version](https://badge.fury.io/js/ngrock-webpack-plugin.svg)](https://badge.fury.io/js/ngrock-webpack-plugin)
[![Maintainability](https://api.codeclimate.com/v1/badges/e5d9c3dff376764b7763/maintainability)](https://codeclimate.com/github/edtoken/ngrock-webpack-plugin/maintainability)
[![HitCount](http://hits.dwyl.com/edtoken/ngrock-webpack-plugin.svg)](http://hits.dwyl.com/edtoken/ngrock-webpack-plugin)

[![NPM](https://nodei.co/npm/ngrock-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ngrock-webpack-plugin/)

[![NPM](https://nodei.co/npm-dl/ngrock-webpack-plugin.png?height=3)](https://nodei.co/npm/ngrock-webpack-plugin/)

## Install
```
npm install ngrock-webpack-plugin --save-dev
```

## Basic Usage

### 1. Include plugin
   
```
var NgrockWebpackPlugin = require('ngrock-webpack-plugin')
var webpackConfig = {
    entry: 'index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        historyApiFallback: {
            index: 'http://localhost:8080/index.html'
        }
    },
    plugins: [new NgrockWebpackPlugin()]
}

webpack-dev-server --progress --port=8080 --hot --inline --config=webpack.config.js
```

### 2. Open and send link to your friend
![LogMessage](/log.png)



## Unit testing
```
npm test
```

## License
[MIT](https://github.com/edtoken/ngrock-webpack-plugin/blob/master/LICENSE)
