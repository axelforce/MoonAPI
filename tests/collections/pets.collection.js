const agent = require('../../test-utils/helpers/agent.helper');
const petHelper = require('../../test-utils/helpers/collections/pet.helper');
const apiSchemaHelper = require('../../test-utils/helpers/apiSchema.helper');
const petData = require('../../test-data/collections/pet.data');
const expect = require('chai').expect;

describe('NG: Customer Closing Account', async function () {

  it('Add new pet to the store', async function () {
    const res = await petHelper.addNewPet(agent, petData.jacksonCat);
    const schemaValidation = await apiSchemaHelper.validateSchema(petData.petSchema, res.body);

    expect(res.statusCode).to.equal(200);
    expect(res.body.id).to.equal(petData.jacksonCat.id);
    expect(schemaValidation).to.equal(true);
  });

  it('Find pet by ID', async function () {
    const pet = await petHelper.getPetById(agent, petData.jacksonCat.id);
    const schemaValidation = await apiSchemaHelper.validateSchema(petData.petSchema, pet.body);

    expect(pet.statusCode).to.equal(200);
    expect(pet.body.id).to.equal(petData.jacksonCat.id);
    expect(schemaValidation).to.equal(true);
  });
});