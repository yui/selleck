var vows = require('vows'),
    path = require('path'),
    assert = require('assert');

var tests = {
    "require selleck": {
        topic: function() {
            return require('../');
        },
        "should have Higgins": function(topic) {
            assert.ok(topic.Higgins);
        },
        "should have View": function(topic) {
            assert.ok(topic.View);
        },
        "should have default theme": function(topic) {
            assert.ok(topic.defaultTheme);
            var theme = path.join(__dirname, '../', 'themes', 'default');
            assert.equal(topic.defaultTheme, theme);
        },
        'should have log method': function(topic) {
            assert.ok(topic.log);
        },
        'should have render method': function(topic) {
            assert.ok(topic.render);
        },
        'should have prepare method': function(topic) {
            assert.ok(topic.prepare);
        }
    }
};

vows.describe('Selleck').addBatch(tests).export(module);
