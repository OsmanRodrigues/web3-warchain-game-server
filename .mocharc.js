'use-strict'

module.exports = {
    'allow-uncaught': false,
    'async-only': false,
    color: true,
    diff: true,
    exit: true,
    extension: ['ts'],
    'forbid-only': false,
    'forbid-pending': false,
    'full-trace': false,
    growl: false,
    recursive: false,
    reporter: 'spec',
    retries: 0,
    slow: 100,
    sort: false,
    spec: ['./src/**/*.spec.ts'],
    timeout: 5000,
    'trace-warnings': true,
    watch: false,
    require: ['ts-node/register', 'tsconfig-paths/register'],
}
