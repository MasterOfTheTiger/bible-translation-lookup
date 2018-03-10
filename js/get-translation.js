const _ = require('lodash')
const lookup = require('./lookup')
const pkg = require('../package')

const getTranslation = q => {

  if (typeof q !== 'string') throw TypeError(`${pkg.name} expects a string`)

  const translations = lookup.getTranslations()
  q = q.toUpperCase()

  let translation = _.find(translations, {abbr: q})

  if (!translation) {
    translation = _.find(translations, t => {
      return t.name.toUpperCase() === q
    })
  }

  if (!translation) {
    translation = _.find(translations, {gAbbr: q})
  }

  if (!translation) {
    translation = _.find(translations, t => {
      if (t.gName == null) return false
      return t.gName.toUpperCase() === q
    })
  }

  if (!translation) {
    translation = _.find(translations, t => {
      return _.map(t.aliases, _.upperCase).includes(q)
    })
  }

  return translation
}

module.exports = getTranslation
