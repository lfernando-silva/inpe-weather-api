const chai = require('chai')

const {getWavesForecast} = require('../lib/index.js')
const expect = chai.expect

describe('Get the waves forecast to some seaside town', () => {
    it('Should get waves forecast by day (0 = today) in morning, afternoon and night', () => {
        return getWavesForecast('241','0')
            .then(res => {
                expect(res).to.be.an('object')
                expect(res.manha).to.be.an('object')
                expect(res.tarde).to.be.an('object')
                expect(res.noite).to.be.an('object')
            })
    })
    it('Should waves forecast for next days', () => {
        return getWavesForecast('241')
            .then(res => {
                expect(res).to.be.an('object')
                expect(res.previsao).to.be.an('array')
            })
    })

    it('Should throw error when the city is not a seaside town', () => {
        return getWavesForecast('244','0')
            .catch(res => {
                expect(res).instanceOf(Error)
                expect(res.message).to.be.a('string')
                expect(res.message).to.be.equal('Invalid city')
            })
    })

    it('Should throw error when the city is not a seaside town', () => {
        return getWavesForecast('244')
            .catch(res => {
                expect(res).instanceOf(Error)
                expect(res.response.status).to.equal(500)
            })
    })
})

