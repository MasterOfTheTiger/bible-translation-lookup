const {find, map, upperCase} = require('lodash')
const lookup = require('./lookup')
const {name} = require('../package.json')

const getTranslation = q => {

  if (typeof q !== 'string') throw TypeError(`${name} expects a string`)
  q = q.toUpperCase()

  const translations = lookup.getTranslations()

  // find by abbr
  let translation = find(translations, {abbr: q})

  // find by name
  if (!translation) {
    translation = find(translations, t => {
      return t.name.toUpperCase() === q
    })
  }

  // find by alias
  if (!translation) {
    translation = find(translations, t => {
      return map(t.aliases, upperCase).includes(q)
    })
  }

  // find by gAbbr
  if (!translation) {
    translation = find(translations, {gAbbr: q})
  }

  // find by gName
  if (!translation) {
    translation = find(translations, t => {
      if (t.gName == null) return false
      return t.gName.toUpperCase() === q
    })
  }

  return translation
}

module.exports = getTranslation
