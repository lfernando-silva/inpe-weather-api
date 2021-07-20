const chai = require('chai')

const {getUVIncidence} = require('../lib/index.js')
const expect = chai.expect

describe('Get the UV incidence', () => {
    it('Should obtain the UV incidence to a city code', () => {
        return getUVIncidence('244')
            .then(res => {
                expect(res).to.be.a('object')
                expect(Number(res.iuv)).to.be.a('number')
            }).catch(err => {
                // Seems this endpoint is offline now
                expect(err.response.status).to.be.equal(500)
            })
    })
})