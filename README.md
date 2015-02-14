# Node Translate

A translation library for NodeJS that wraps [node-polyglot](https://www.npmjs.com/package/node-polyglot)

## Installation

To build a local version for use or development:
```
git clone git@github.com:thestonefox/node-translate.git
cd node-translate
npm install
```

Installing as a node module:

```
npm install node-translate --save
```

## Example

Look at the `example.js` file to see a simple example of the library.

Run it with `npm start`

For more examples of the format of the locale files, look in `./locales/`

```
module.exports = {
  "title": "Hello, World"
}
```

## Usage

Create a new instance of the i18n library.

```
var i18n = require('node-translate');
```

Set the path where to locate the locale files.
This is the directory where you store the language translation.

```
i18n.setPath('./locales/');
```

Load in the appropriate locales, each locale entry must match the filename
of the locale file in the locales directory (specified above).

e.g. en-gb would reference a file located at `./locales/en-gb.js`

```
i18n.loadLocales(['en-gb']);
```

Set the initial locale to use by providing the locale name.

```
i18n.setLocale('en-gb');
```

Now simply call the translation method with the key to translate.

```
i18n.t('title');
```

The t method is compatible with polyglot so takes an optional second parameter
for parsing variables into the translation string.

```
i18n.t('title', {name: "string"})
```

Chaining setters is also permitted.

```
i18n.setPath('./locales/').loadLocales(['en-gb', 'fr']).setLocale('en-gb');
```

## Known Issues

Does not work with WebPack, due to the dynamic loading of the locale files
and the path being a variable in the require statement. This causes WebPack
to error as it cannot parse the require string into the relevant webpack include.
