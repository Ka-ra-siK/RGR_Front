const process = require('process');
export const env = {
    endpoint: window.location.protocol,
    debug: process.env.debug,
};