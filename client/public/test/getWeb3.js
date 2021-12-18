import _regeneratorRuntime from "babel-runtime/regenerator";

var connectToWallet = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var web3, _web, provider, _web2;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!window.ethereum) {
              _context.next = 14;
              break;
            }

            web3 = new Web3(window.ethereum);
            _context.prev = 2;
            _context.next = 5;
            return window.ethereum.request({ method: 'eth_requestAccounts' });

          case 5:
            return _context.abrupt("return", web3);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);

            if (_context.t0.code === 4001) {
              //alert("Please approve wallet connection if you wish to use the application.");
            }
            throw _context.t0;

          case 12:
            _context.next = 24;
            break;

          case 14:
            if (!window.web3) {
              _context.next = 20;
              break;
            }

            // Use Mist/MetaMask's provider.
            _web = window.web3;

            console.log("Injected web3 detected.");
            return _context.abrupt("return", _web);

          case 20:
            provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
            _web2 = new Web3(provider);

            console.log("No web3 instance injected, using Local web3.");
            return _context.abrupt("return", _web2);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8]]);
  }));

  return function connectToWallet() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import Web3 from "web3";

export default connectToWallet;