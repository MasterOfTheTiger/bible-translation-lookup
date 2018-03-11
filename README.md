# bible-translation-lookup

[![build](https://img.shields.io/travis/danday74/bible-translation-lookup/master.svg?label=linux)](https://travis-ci.org/danday74/bible-translation-lookup "Jesus loves you")
[![coverage](https://coveralls.io/repos/github/danday74/bible-translation-lookup/badge.svg)](https://coveralls.io/github/danday74/bible-translation-lookup "Jesus loves you")
[![npm](https://img.shields.io/npm/v/bible-translation-lookup.svg)](https://www.npmjs.com/package/bible-translation-lookup "Jesus loves you")
[![dependencies](https://david-dm.org/danday74/bible-translation-lookup/status.svg)](https://david-dm.org/danday74/bible-translation-lookup "Jesus loves you")
[![downloads](https://img.shields.io/npm/dm/bible-translation-lookup.svg)](https://www.npmjs.com/package/bible-translation-lookup "Jesus loves you")

**A simple bible translation lookup**



<br>

## Introduction

`bible-translation-lookup` gets a bible translation object from its name, abbreviation or alias

It works both server side and client side



<br>

## Server side usage

`npm install --save bible-translation-lookup`

```javascript 1.7
const btl = require('bible-translation-lookup')
const translation1 = btl('KJV')
const translation2 = btl('New English Translation')
console.log(translation1.name) // King James Version
console.log(translation2.abbr) // NET
```



<br>

## Client side usage

`npm install --save bible-translation-lookup`

Add a script tag in head:

```HTML
<script src="node_modules/bible-translation-lookup/browser.js"></script>
```

Then use as follows:

```HTML
<script>
  const translation1 = bibleTranslationLookup('ASV')
  const translation2 = bibleTranslationLookup('New King James Version')
  console.log(translation1.name) // American Standard Version
  console.log(translation2.abbr) // NKJV
</script>
```



<br>

## JSON structure

JSON returned has the following structure:

```json
{
  "abbr": "DARBY",
  "name": "Darby Translation",
  "aliases": ["Darby Bible", "Darby Bible Translation", "DBY"]
}
```



<br>

## Supported translations

We support the translations listed in [bible-translations.json](bible-translations.json "Jesus loves you")

If you want support for another translation please raise an [issue](https://github.com/danday74/bible-translation-lookup/issues "Jesus loves you")



<br>

## Author says

> but his delight is in the law of the Lord, and on his law he meditates day and night.
> He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers.

[Psalm 1:2-3 ESV](https://www.bible.com/en-GB/bible/59/PSA.1.ESV "Jesus loves you")



<br><br><br>
