'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createModuleViewFiles = function createModeleViewFiles() {
  this.view = this.name.toLowerCase();
  this.module = this.scriptAppName +'.views.' + this.name.toLowerCase();
  this.controller = this._.classify(this.name) + 'ViewController';
  
  var dst = path.join(this.env.options.appPath, 'scripts/views/' + this.view, this.view);

  yeoman.generators.Base.prototype.template.apply(this, ['module/view/view.html', dst + '.html']);
  yeoman.generators.Base.prototype.template.apply(this, ['module/view/module.js', dst + '.module.js']);
  yeoman.generators.Base.prototype.template.apply(this, ['module/view/controller.js', dst + '.controller.js']);
  yeoman.generators.Base.prototype.template.apply(this, ['module/view/controller.test.js', dst + '.controller.test.js']);
  yeoman.generators.Base.prototype.template.apply(this, ['module/view/routes.js', dst + '.routes.js']);

  
};
