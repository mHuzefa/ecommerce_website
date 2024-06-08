const routes = require('./routes')
const PORT = 8080

routes.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });