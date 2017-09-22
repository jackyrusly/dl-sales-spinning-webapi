// SALES CONTRACT
var v1SalesContractRouter = require('../src/routers/v1/sales-contract-router');
var v1SalesContractReportRouter = require('../src/routers/v1/reports/sales-contract-report-router');

module.exports = function(server) {
    v1SalesContractRouter().applyRoutes(server,                         "/v1/sales-contracts");
    v1SalesContractReportRouter().applyRoutes(server,                   "/v1/reports/sales-contract-reports");
};