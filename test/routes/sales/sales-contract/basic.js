 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/sales-contracts",
     model: require("dl-models").sales.SpinningSalesContract,
     validate: require("dl-models").validator.sales.spinningSalesContract,
     util: require("dl-module").test.data.sales.spinningSalesContract,
     keyword: null
 });