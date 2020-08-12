require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove response misery attitude hope praise army genius'; 
let testAccounts = [
"0xdefe279935f728c39859aabe4c9b38ad775d205407bafa6ebabc1f1c047c88d9",
"0x048f253405617589d8da475a00baabbd3507df5aa869ee66c0ea62241defce46",
"0xf0f0b6c7c2765dd556c0c8af6143901755c2e32a3daa088470f5e91e65256e0a",
"0x6c9dfef348f23e254b1745b4ee601b2f8415578909df943e5082b1e9f7ca29c8",
"0xe4c144677f8379d24148e46381255266abddf9ae951bd7c11611e208c02d97fc",
"0xeefcf7338e3e26e902ebc592d1f25f07a5e1f73089450a1daff6554d4b4484b2",
"0xec99c268bfbbd6ea9209cc2d7644477df83c2fe0522ee262565d6fc8db9569c9",
"0xc6942331fc01ab8ba1538105c8592feefcb58282a507a89772e7a5f85ef8e9a3",
"0x453527eb4d532f83fb5587a5569b33d94dda798bc01ccc11c41268fbecde0e98",
"0x9ddf9518cef955471ffebeee3f2f3ffd12acde91344a7056f107d37dc6e03d71"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
