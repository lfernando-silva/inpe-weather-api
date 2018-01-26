const chai = require('chai')

const {getCities} = require('../lib/index.js')
const expect = chai.expect

describe('List cities using API', ()=>{
    it("Should return a default list of cities", () => {
        return getCities().then(res => {
            expect(Array.isArray(res)).to.be.true
            expect(res.length).to.be.greaterThan(0)
        })
    })

    it("Should return an object to complete name of 'Juiz de Fora' city", ()=>{
        let cityName = 'Juiz de Fora'
       return getCities(cityName).then(res => {
            expect(res).to.be.a('object')
            expect(Object.keys(res).length).to.be.greaterThan(0)
            expect(res.nome).to.be.equal(cityName)
        })
    })

    it("Should return an list of cities that match with 'São Paulo' prefix", ()=>{
        let prefix = "São Paulo"
        return getCities(prefix).then(res => {
            expect(Array.isArray(res)).to.be.true
            expect(res.length).to.be.greaterThan(0)
            expect(res.filter(r => r.nome.match(prefix)).length).to.be.equal(res.length)
        })
    })
})