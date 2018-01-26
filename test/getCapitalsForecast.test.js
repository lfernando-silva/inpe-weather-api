const chai = require('chai')

const {getCapitalsForecast} = require('../lib/index.js')
const expect = chai.expect

describe('List cities using API', ()=>{
    it("Should return a list of capitals status", () => {
        return getCapitalsForecast().then(res => {
            expect(Array.isArray(res)).to.be.true
            expect(res.length).to.be.greaterThan(0)
        })
    })
})