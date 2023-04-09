const app=require('../server')
const request=require('supertest')
const {expect}=require('chai')
//     "test": "mocha test/**/*.js",
describe('User Api Endpoints',()=>{

// Test GET /users
describe('GET /users',()=>{
    it('It should return all users',async(done)=>{
        const res=await request(app).get('/users')
        .end((err,res)=>{
            expect(res.status).to.equal(200)
            expect(res.body.length).to.be.an('array')
            done()
        })
    })
})

})


