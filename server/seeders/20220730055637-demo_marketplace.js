'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('marketplaces', [{
      title: "Banana",
      photo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/3_Bananas.jpg",
      description: "Very Taste",
      vendor_info:  "Very reliable",
      price: "1000",
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      title: "Strawberry",
      photo: "https://post.healthline.com/wp-content/uploads/2020/08/strawberries-1200x628-facebook.20180419205234528-1200x628.jpg",
      description: "Not that tasty",
      vendor_info: "Good person",
      price: "13232",
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
    await queryInterface.bulkInsert('marketplaces', [{
      title: "Chocolate",
      photo: "https://tse3.mm.bing.net/th?id=OIP.bl-P0UBDg2qk4UdCYJemKAHaEL&pid=Api&P=0",
      description: "Very bit",
      vendor_info: "bad person",
      price: "35345",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('marketplaces', null, {});
  }
};

