const Addresses = require("./Addresses.js")
const Granary = require("./GranaryParser")
const Web3 = require("web3")
require('dotenv').config()

class ParseGranary extends Granary {
  constructor() {
    const network = 'FTM'
    const web3 = new Web3(process.env.FTM_NODE_URL)
    super(Addresses.granaryAddress, network, web3)
  }
}

module.exports = { Parser: ParseGranary }