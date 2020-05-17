const Laugh = require('../model');

module.exports = {
  async selectAll(req, res) {
    const laughs = await Laugh.findAll();

    return res.json(laughs);
  },

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

  async insertLaugh(req, res) {
    const { laugh } = req.body;

    const laugh = await Laugh.create({ laugh });

    return res.json(laugh);
  },

  async deleteLaugh(req, res) {
    const { id } = req.params;
    const { laugh } = req.body;

    const laugh = await User.findByPk(id);

    if (!laugh) {
      return res.status(400).json({ error: 'Laugh not found' });
    }

    return res.json();
  }
};