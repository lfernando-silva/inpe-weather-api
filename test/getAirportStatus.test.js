const chai = require('chai')

const {getAirportStatus} = require('../lib/index.js')
const expect = chai.expect

describe('List cities using API', ()=>{
    it("Should return an object to code SBBQ", () => {
        return getAirportStatus('SBBQ').then(res => {
            expect(Object.keys(res).length).to.be.greaterThan(0)
            expect(res).to.have.property('codigo','SBBQ')
        })
    })

    it("Should throw error if an invalid code is passed", ()=>{
       return getAirportStatus('XYZ').catch(err => {
            expect(err.response.status).to.be.equal(500)
        })
    })

    it("Should throw error if code is empty", ()=>{
        return getAirportStatus().catch(err => {
            console.log(err)
            expect(err.response.status).to.be.equal(500)
        })
    })
})