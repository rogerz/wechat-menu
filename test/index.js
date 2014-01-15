var expect = require('expect.js'),
    wechatMenu = require('..');

describe('wechat-menu', function() {
  it('should say hello', function(done) {
    expect(wechatMenu()).to.equal('Hello, world');
    done();
  });
});
