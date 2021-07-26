"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Artifacts",
      [
        {
          idKey: "John Doe",
          description: false,
          embed: "embed",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idKey: "John Doe1",
          description: "ddasds",
          embed: "embed",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete("Artifacts", null, {});
  },
};
