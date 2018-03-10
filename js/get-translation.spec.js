const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect

const lookup = require('./lookup')
const mockTranslations = require('./mock-translations')
const getTranslation = require('./get-translation')

describe('getTranslation', () => {

  let sandbox, translation

  beforeEach(function() {
    sandbox = sinon.sandbox.create()
    sandbox.stub(lookup, 'getTranslations').returns(mockTranslations)
  })

  afterEach(function() {
    sandbox.restore()
  })

  describe('success', () => {

    it('abbr', () => {
      translation = getTranslation('mock')
      expect(translation.abbr).to.equal('MOCK')
    })

    it('name', () => {
      translation = getTranslation('american standard version')
      expect(translation.abbr).to.equal('ASV')
    })

    it('gAbbr', () => {
      translation = getTranslation('amp')
      expect(translation.abbr).to.equal('AMPC')
    })

    it('gName', () => {
      translation = getTranslation('new international version')
      expect(translation.abbr).to.equal('NIV1984')
    })

    it('aliases', () => {
      translation = getTranslation('darby bible translation')
      expect(translation.abbr).to.equal('DARBY')
    })
  })

  describe('failure', () => {

    it('not found', () => {
      translation = getTranslation('')
      expect(translation).to.be.undefined
    })

    it('invalid input', () => {
      expect(() => getTranslation({})).to.throw(TypeError)
    })
  })
})
