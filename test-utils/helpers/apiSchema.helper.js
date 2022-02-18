const Ajv = require("ajv")

const ajv = new Ajv();

module.exports = {
  async validateSchema(schema, body) {
    const validate = ajv.compile(schema)
    const valid = validate(body)
    if (!valid) {
      console.log(validate.errors)
      return valid
    }
    else {
      return valid
    }
  },
}