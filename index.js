function resolve(module) {
  return require.resolve(module).split('\\').join('/');
}

exports.emptyShims = [
  'child_process', 'cluster', 'dgram', 'dns', 'fs', 'net', 'readline', 'repl', 'tls', 'tty'
];

exports.fileShims = {
  assert:               resolve('assert/'),
  buffer:               resolve('buffer/'),
  crypto:               resolve('crypto-browserify'),
  domain:               resolve('domain-browser'),
  events:               resolve('events/'),
  http:                 resolve('stream-http'),
  https:                resolve('https-browserify'),
  os:                   resolve('os-browserify/browser'),
  path:                 resolve('path-browserify'),
  process:              resolve('process/browser'),
  punycode:             resolve('punycode/'),
  querystring:          resolve('querystring-es3/'),
  stream:               resolve('stream-browserify'),
  string_decoder:       resolve('string_decoder/'),
  sys:                  resolve('util/'),
  timers:               resolve('timers-browserify'),
  tty:                  resolve('tty-browserify'),
  url:                  resolve('url/'),
  util:                 resolve('util/'),
  vm:                   resolve('vm-browserify'),

  _stream_duplex:       resolve('readable-stream/duplex'),
  _stream_passthrough:  resolve('readable-stream/passthrough'),
  _stream_readable:     resolve('readable-stream/readable'),
  _stream_writable:     resolve('readable-stream/writable'),
  _stream_transform:    resolve('readable-stream/transform')
};
