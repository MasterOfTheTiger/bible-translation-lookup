const _ = require('lodash')
const translations = require('../bible-translations')

const getTranslation = q => {

  let translation = _.find(translations, {abbr: q.toUpperCase()})

  if (!translation) {
    translation = _.find(translations, t => {
      return t.name.toUpperCase() === q.toUpperCase()
    })
  }

  if (!translation) {
    translation = _.find(translations, {gAbbr: q.toUpperCase()})
  }

  if (!translation) {
    translation = _.find(translations, t => {
      return t.gName.toUpperCase() === q.toUpperCase()
    })
  }

  if (!translation) {
    translation = _.find(translations, t => {
      return _.map(t.aliases, _.upperCase).includes(q.toUpperCase())
    })
  }

  return translation
}

module.exports = getTranslation
