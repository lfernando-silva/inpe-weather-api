const chai = require('chai')

const {getForecast} = require('../lib/index.js')
const expect = chai.expect

describe('Get cities forecast to next 7 or 4 days using API', () => {
    it('Should obtain the 4 days next forecast to a city code', () => {
        return getForecast('244')
            .then(res => {
                expect(res).to.be.a('object')
                expect(res.previsao).to.be.an('array')
                expect(res.previsao.length).to.equal(4)
            })
    })
    it('Should obtain the 7 days next forecast to a city code ', () => {
        return getForecast('244', true)
            .then(res => {
                expect(res).to.be.a('object')
                expect(res.previsao).to.be.an('array')
                // Depending on the time, may have 6 forecasts instead 7
                expect(res.previsao.length).greaterThanOrEqual(6)
                expect(res.previsao.length).lessThanOrEqual(7)
            })
    })

    it('Should obtain the 7 days next forecast to a city lat/long slash separated', () => {
        return getForecast('-22.90/-47.06', true, true)
            .then(res => {
                expect(res).to.be.a('object')
                expect(res.previsao).to.be.an('array')
                // Depending on the time, may have 6 forecasts instead 7
                expect(res.previsao.length).greaterThanOrEqual(6)
                expect(res.previsao.length).lessThanOrEqual(7)

            })
    })
    it('Should throw error code 404 when passing lat/long and not passing isLatLong = true param', () => {
        return getForecast('-22.90/-47.06', true)
            .catch(res => {
                expect(res).instanceOf(Error)
                expect(res.response.status).to.equal(404)
            })
    })

    it('Should obtain an extended forecast when nextSevenDays = false', () => {
        return getForecast('-22.90/-47.06', true, true, true)
            .then(res => {
                expect(res).to.be.a('object')
                expect(res.previsao).to.be.an('array')
                expect(res.previsao.length).to.equal(7)
            })
            .catch(res => {
                //This webservice endpoint is currently down
                //E.g. http://servicos.cptec.inpe.br/XML/cidade/-22.90/-47.06/estendidaLatLon.xml
                expect(res).instanceOf(Error)
            })
    })
})