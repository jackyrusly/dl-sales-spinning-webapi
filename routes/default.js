// SALES CONTRACT
var salesContractRouter = require('../src/routers/v1/sales-contract-router');
var salesContractReportRouter = require('../src/routers/v1/reports/sales-contract-report-router');

module.exports = function(server) {
    salesContractRouter().applyRoutes(server,                         "/sales-contracts");
    salesContractReportRouter().applyRoutes(server,                   "/reports/sales-contract-reports");
};