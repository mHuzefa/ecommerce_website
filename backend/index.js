const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = 8080

routes.use(bodyParser.json())
routes.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });