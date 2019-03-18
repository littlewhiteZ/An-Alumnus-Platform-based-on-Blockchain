const routes = require('next-routes')();

routes
    .add('/departments/new', 'departments/new')
    .add('/departments/index', 'departments/index')
    .add('/departments/:address', '/departments/show')
    .add('/manage/index', 'manage/index')
    .add('/manage/:address','/manage/show')
    .add('/departments/:address/persons/new','departments/persons/new');

module.exports = routes;