'use strict';

var i18n = require('./i18n');
var locales = ['en-gb', 'fr'];

i18n.setPath('./locales/').loadLocales(locales);

function translateTitle() {
  console.log(i18n.t('title'));
}

function translateGreeting(name) {
  console.log(i18n.t('greeting', {name: name}));
}

function setLocale(id) {
  i18n.setLocale(locales[id]);
}

console.log("*****************");
console.log("i18n.t('title')");
console.log("i18n.t('greeting', {name: '<variable>'})");
console.log("*****************");
console.log("Translate to English");

setLocale(0);
translateTitle();
translateGreeting("Peter");

console.log("*****************");
console.log("Translate to French");

setLocale(1);
translateTitle();
translateGreeting("Pierre");

console.log("*****************");
