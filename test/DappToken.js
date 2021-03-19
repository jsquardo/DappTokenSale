var DappToken = artifacts.require("../contracts/DappToken");

contract("DappToken", function (accounts) {
  it("sets the total supply upon deployment", function () {
    return DappToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.totalSupply();
      })
      .then(function (totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          1000000,
          "sets the total sypply to 1,000,000"
        );
      });
  });
});
