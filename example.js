'use strict';

var i18n = require('./i18n');
var locales = ['en-gb', 'fr'];

i18n.setPath('./locales/');
i18n.loadLocales(locales);

function translateTitle() {
  console.log(i18n.t('title'));
}

function setLocale(id) {
  i18n.setLocale(locales[id]);
  translateTitle();
}

console.log("*****************");
console.log("i18n.t('title')");
console.log("*****************");
console.log("Translate 'title' to English");

setLocale(0);

console.log("*****************");
console.log("Translate 'title' to French");

setLocale(1);

console.log("*****************");
