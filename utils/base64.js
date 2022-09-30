const unbase64 = (str) => Buffer.from(str, 'base64').toString('utf8')

const base64 = (str) => Buffer.from(str, 'utf8').toString('base64')

module.exports = { base64, unbase64 }
