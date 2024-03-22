/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors', [{
      name: 'Кулешова С.В.',
      profession: 'Рентгенолог',
      text: 'Врач со стажем работы более 15 лет, к.м.н.',
      service_id: 1,
      photo: './img/doctor_0000.jpg',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
