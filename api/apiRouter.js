const executors = require('./executors').default;

const routes = {
  '/getBanks': { accessRequired: 0, executor: () => executors.getBanks(), contentType: 'application/json' },
  '/isUniqueBankName': { accessRequired: 0, executor: (name) => executors.isUniqueBankName(name), contentType: 'application/json' },
  '/404': { accessRequired: 0, executor: () => '404', contentType: 'application/json' },
};


const getRoute = (routeStr, access) => {
  const route = routes[routeStr];
  if (!route) return routes['/404'];
  if (access < route.access) return new Error('Not enough access level!');
  return route;
};


module.exports = {
  getRoute,
};
