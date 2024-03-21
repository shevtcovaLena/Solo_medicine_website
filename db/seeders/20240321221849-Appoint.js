/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Appoints',
      [
        {
          user_id: null,
          doctor: 'Кулешова С.В.',
          time: '8:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Кулешова С.В.',
          time: '9:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Кулешова С.В.',
          time: '10:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Кулешова С.В.',
          time: '11:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Кулешова С.В.',
          time: '12:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Фетисов Н.П.',
          time: '14:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Фетисов Н.П.',
          time: '15:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Фетисов Н.П.',
          time: '16:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Фетисов Н.П.',
          time: '17:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Фетисов Н.П.',
          time: '18:00',
          service_id: 1,
        },
        {
          user_id: null,
          doctor: 'Коровина М.Л.',
          time: '8:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Коровина М.Л.',
          time: '9:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Коровина М.Л.',
          time: '10:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Коровина М.Л.',
          time: '11:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Коровина М.Л.',
          time: '12:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Марченко И.Ю.',
          time: '14:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Марченко И.Ю.',
          time: '15:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Марченко И.Ю.',
          time: '16:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Марченко И.Ю.',
          time: '17:00',
          service_id: 2,
        },
        {
          user_id: null,
          doctor: 'Марченко И.Ю.',
          time: '18:00',
          service_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
