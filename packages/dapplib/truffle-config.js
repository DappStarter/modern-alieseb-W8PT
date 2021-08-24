require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue radar random coach inflict climb metal giant'; 
let testAccounts = [
"0x85ffb6a88ec5db2a25418dc60e8591bf243e087aa0e8ac4d1bfc3e2118843ca5",
"0xa2ee8e0bd193cf1a5e25550245e49fd4801c8f97f12e05e6b4f96f25fc84d8f9",
"0x390d73904c0149c8958d9183f290fa7d3d1bc3afd30a8443d21ed967bca90dde",
"0x4615ded4c85f39b4526b1a6d0264eb9665219d86b0a4a58b0a3c5604e0416632",
"0xf57a7215678d72c8bbd1d3a33afc7f348dc6a5a4ff65c6327a7d8bd74b18e625",
"0x696fa74284461c8a43568766fae6a2db67cd18234c3b4049f4582f05de55b4b2",
"0x25d539cbf638cbd355cb68819b5ca6a25a1c7b7c965836f32aaeac7195c2f02b",
"0x839cb71863a36b82f27179a69e799d9484e27dcd13fd1e631f48f9ba98c2101e",
"0xf25973f1dc098edc6e38798fd30c29f7f380c0c6e23b1df28ef140f499be93c8",
"0x41b376582ec91ea1cdb6a4b6bce930c1d89563be04f097a4afe8620f62d9c626"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


