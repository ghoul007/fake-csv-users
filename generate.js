const faker = require('faker');
const { domain: DOMAIN } = require('./config');


const rnd= () => Math.random() >.5

const generate = (domain = null) => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = `${firstName}${lastName}@${domain || DOMAIN}`
    const status = "Active"
    const securityRole1 = rnd() ? "IPD-USER" : "IPD-Administrator"

    return {
        FirstName: firstName,
        LastName: lastName,
        EmailId: email,
        Status: status,
        SecurityRole1: securityRole1,
    }
}

module.exports = generate