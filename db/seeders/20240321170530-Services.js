/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Services',
      [
        {
          title: 'МРТ',
          text: 'МРТ-исследования различных органов и систем с констультацией рентгенолога',
        },
        {
          title: 'УЗИ',
          text: 'УЗИ-исследования на современном оборудовании',
        },
        {
          title: 'Анализы',
          text: 'Широкий спектр анализов без очереди',
        },
        {
          title: 'Прием врачей',
          text: 'Прием невролога, кардиолога и других специалистов',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
