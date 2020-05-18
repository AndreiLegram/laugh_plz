const Laugh = require('./model.js');

module.exports = {
  
  async insertAll(req, res) {
    const laughs = await Laugh.bulkCreate([
        { laugh: 'KKKKKKKKKK' },
        { laugh: 'ESSA FOI DE FUDE EMKKKKKKKKKKKKK' },
        { laugh: 'KARALHOPERDIKKKKKKKKKKKKKKKKKKKK' },
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

    return res.json(laughs);
  },

  async selectAll(req, res) {
    const laughs = await Laugh.findAll();

    return res.json(laughs);
  },

  async deleteAll(req, res) {
    const laughs = await Laugh.destroy({ truncate: true });

    return res.json(laughs);
  }

};