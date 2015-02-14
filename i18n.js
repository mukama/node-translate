'use strict';
var Polyglot, I18n;

Polyglot = require('node-polyglot');

I18n = (function() {
  function I18n() {
    this.polyglot = new Polyglot();
    this.localesPath = '';
    this.locales = {};
  }

  I18n.prototype.setPath = function(path) {
    this.localesPath = path;
  };

  I18n.prototype.loadLocales = function(locales) {
    if(!locales || locales.length === 0) locales = ['en-gb'];
    locales.forEach(function(locale) {
      try {
        this.locales[locale] = require(this.localesPath + locale);
      }
      catch(error) {
        console.log('Cannot load file: ' + this.localesPath + locale);
      }
    }.bind(this));
  };

  I18n.prototype.setLocale = function(locale) {
    if(!locale) locale = 'en-gb';
    this.polyglot.clear();
    try {
      this.polyglot.extend(this.locales[locale]);
    }
    catch(error) {
      console.log('Cannot find locale: ' + locale);
    }
  };

  I18n.prototype.t = function(key, options) {
    return (options) ? this.polyglot.t(key, options) : this.polyglot.t(key);
  };

  return I18n;
})();

module.exports = new I18n();
