const translations = require('../bible-translations.json')

const lookup = {
  getTranslations: () => {
    // istanbul ignore next
    return translations
  }
}

module.exports = lookup
