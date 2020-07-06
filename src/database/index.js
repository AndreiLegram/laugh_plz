const Sequelize = require('sequelize');
const dbConfig = require('../config/db.js');
const { Model, DataTypes } = require('sequelize');

class Laugh extends Model {
  static init(sequelize) {
    super.init({
      laugh: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

const connection = new Sequelize(dbConfig);
Laugh.init(connection);

module.exports = {

    connection,
    
    async insertAll(req, res) {
        const laughs = await Laugh.bulkCreate([
            { laugh: 'KKKKKKKKKK' },
            { laugh: 'ESSA FOI DE FUDE EMKKKKKKKKKKKKK' },
            { laugh: 'KARALHOPERDIKKKKKKKsKKKKKKKKKKKKK' },
            { laugh: 'TOMANOCUEMVEIOKKKKKKKKKKKKKKKKKK' },
            { laugh: 'VUEIKKKKKKKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: 'PORCAPIPAKKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: 'PUTAQUEOPARIOOKKKKKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: 'PERDI AS ESTRIBERAKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: 'AKaKAkAkKakKAkAkKAkA' },
            { laugh: 'LMAO XDXD LOLOLOL' },
            { laugh: 'KOOKKKKKKKKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: 'KEK' },
            { laugh: 'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: 'Cramenha! KKKKKKKKKKKKKKKKKKKKKKKKKK' },
            { laugh: '- Pô, que engraçado! (Kkk)  ?!?' },
            { laugh: '?%??%??%??%??%??%??%??%??%??%?' },
            { laugh: '?%??%??%??%??%??%??%??%??!??!??!??!?' },
            { laugh: 'ZAP?%??%??%??%??%??%??%??%??%??%?' },
            { laugh: 'KKKKKKKKKKKKKKK ?%??%??%??%??%??%?' },
            { laugh: '?%??!?' }
        ]);
    },
    
    async selectAll() {
        const laughs = await Laugh.findAll();
        return JSON.stringify(laughs);
    }

}