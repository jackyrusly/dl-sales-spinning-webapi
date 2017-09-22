require("should");
const host = `${process.env.IP}:${process.env.PORT}`;
var Request = require("supertest");

var uri = "/reports/sales-contract-reports";

var request = Request(host);
var jwt;

before("#00. get security token", function (done) {
    var getToken = require("../../../token");
    getToken()
        .then((token) => {
            jwt = token;
            done();
        })
        .catch((e) => {
            done(e);
        });
});

it(`#01. get list of data - [GET]${uri}`, function (done) {
    request
        .get(uri)
        .set("authorization", `JWT ${jwt}`)
        .set("Accept", "application/json")
        .expect(200)
        .expect("Content-Type", "application/json")
        .end(function (err, response) {
            if (err)
                done(err);
            else {
                var result = response.body;
                result.should.have.property("apiVersion");
                result.should.have.property("data");
                result.data.should.instanceOf(Array);
                done();
            }
        });
});