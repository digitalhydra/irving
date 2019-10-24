# VIP Go node server setup
This package contains implementations of WordPress VIP's helpers for caching, logging, and monitoring with Newrelic.

## Installation
1. `npm install @irvingjs/vip-go`
2. Import and add the vip go server configuration file to your project's `irving.config.server.js` file:
```javascript
const config = require('@irvingjs/vip-go/irving.config.server.js')

module.exports = {
    packages: [
        config,
    ],
    ...
};
```