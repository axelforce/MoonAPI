const proxy = require('../proxy.helper');
const routes = require('../../../test-data/resourses/routes');
const loggerHelper = require('../logger.helper');

module.exports = {
  async addNewPet(agent, body) {
    return await agent
      .post(routes.pet)
      .proxy(proxy)
      .send(body)
      .then((res) => {
        console.info(`addNewPet res: ${JSON.stringify(res.body)}`);
        return res;
      })
      .catch((err) => {
        loggerHelper.logInfo(`addNewPet err: ${JSON.stringify(err)}`);
      });
  },

  async getPetById(agent, petId) {
    return await agent
      .get(routes.pet + `${petId}`)
      .proxy(proxy)
      .then((res) => {
        console.info(`getPetById res: ${JSON.stringify(res.body)}`);
        return res;
      })
      .catch((err) => {
        loggerHelper.logInfo(`getPetById err: ${JSON.stringify(err)}`);
      });
  },
};