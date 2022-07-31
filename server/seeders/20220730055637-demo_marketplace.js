'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('marketplaces', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "Ноутбук Honor MagicBook X15",
      "photo": JSON.stringify({
        "url": "https://img.mvideo.ru/Pdb/small_pic/200/30062056b.jpg",
        "urlbig": "https://img.mvideo.ru/Big/30062056bb.jpg",
        "alt": "Ноутбук"
      }),
      price: 62999

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "Смартфон Xiaomi 11 Lite 5G",
      photo: JSON.stringify({
        url: "https://img.mvideo.ru/Pdb/small_pic/200/30059673b.jpg",
        urlbig: "https://img.mvideo.ru/Big/30059673b.jpg",
        alt: "Смартфон"
      }),
      price: 62999

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "Кофемашина DeLonghi",
      photo: JSON.stringify({
        url: "https://img.mvideo.ru/Pdb/small_pic/200/4110323b.jpg",
        urlbig: "https://img.mvideo.ru/Big/4110323b.jpg",
        alt: "Кофемашина"
      }),
      price: 29999

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "Струйное МФУ Canon PIXMA",
      photo: JSON.stringify({
        url: "https://img.mvideo.ru/Pdb/small_pic/200/30054578b.jpg",
        urlbig: "https://img.mvideo.ru/Big/30054578b.jpg",
        alt: "Струйное"
      }),
      price: 18999

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "Робот-пылесос Tefal X",
      photo: JSON.stringify({
        url: "https://img.mvideo.ru/Pdb/small_pic/200/20075210b.jpg",
        urlbig: "https://img.mvideo.ru/Big/20075210b.jpg",
        alt: "Робот"
      }),
      price: 32999

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      createdAt: new Date(),
      updatedAt: new Date(),
      title: "Телевизор HEC R1 50 S 4K",
      photo: JSON.stringify({
        url: "https://img.mvideo.ru/Pdb/small_pic/200/10030698b.jpg",
        urlbig: "https://img.mvideo.ru/Big/10030698b.jpg",
        alt: "Телевизор"
      }),
      price: 26999
    }], {});
  },
  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('marketplaces', null, {});
  }
};

