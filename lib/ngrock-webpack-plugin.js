var ngrok = require('ngrok')
var NGROCK_PORT = process.env.NGROCK_PORT || undefined

function NgrockWebpackPlugin (output, options, cache) {

    this.options = Object.assign({
        port: NGROCK_PORT
    }, options || {})

    this.ngrock = {
        connected: false,
        http: '',
        https: ''
    }
}

NgrockWebpackPlugin.prototype.apply = function apply (compiler) {
    var self = this
    var port = this.options.port || compiler.options.devServer.port || 80

    compiler.options.devServer.disableHostCheck = true
    console.info('\x1b[34m%s\x1b[0m', '\r\nngrock-webpack starting...')

    ngrok.connect({addr: port}, function (err, url) {
        self.ngrock.https = url
        self.ngrock.http = self.ngrock.https.replace('https://', 'http://')
        self.ngrock.connected = true

        console.info('\x1b[34m%s\x1b[0m', 'ngrock-webpack started')
        console.info('\x1b[34m%s\x1b[0m', 'ngrock http {http}'.replace('{http}', self.ngrock.http))
        console.info('\x1b[34m%s\x1b[0m', 'ngrock https {https}'.replace('{https}', self.ngrock.https))
    })

    compiler.plugin('emit', function onEmit (compilation, done) {
        if (self.ngrock.connected) {
            done()
        }
    })
}

module.exports = NgrockWebpackPlugin
