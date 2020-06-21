import { prompt, Question } from 'inquirer'

const GETH_VERSIONS = ['1.9.15', '1.9.14', '1.9.7', '1.8.27']

export class EthNetGen {
  // private prompts = new Subject<Question[]>()

  constructor() {
    prompt(this.start()).then(answers => {
      console.log(answers)
    })
  }

  start() {
    return [
      {
        type: 'list',
        name: 'consensus',
        message: 'Which consensus algorithm would you like to use?',
        choices: [
          {
            key: 'ethash',
            value: 'ethash',
            name: 'Ethash'
          }, {
            key: 'clique',
            value: 'clique',
            name: 'Clique'
          }, {
            key: 'ibft2',
            value: 'ibft2',
            name: 'IBFT 2.0'
          }
        ]
      },{
        type: 'list',
        name: 'client',
        message: 'Which client would you like to use?',
        choices: [
          {
            key: 'geth',
            value: 'geth',
            name: 'Geth'
          }, {
            key: 'openethereum',
            value: 'openethereum',
            name: 'OpenEthereum'
          }, {
            key: 'besu',
            value: 'besu',
            name: 'Hyperledger Besu'
          }, {
            key: 'nethermind',
            value: 'nethermind',
            name: 'Nethermind'
          }, {
            key: 'quorum',
            value: 'quorum',
            name: 'Quorum'
          }
        ]
      }
    ]
  }


}

new EthNetGen()
