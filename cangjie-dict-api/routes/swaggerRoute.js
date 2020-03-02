const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const router = require('express').Router();

const swaggerYAMLPath = path.join(__dirname, '../docs/swagger.yml');
const swaggerDocument = YAML.load(swaggerYAMLPath);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;
