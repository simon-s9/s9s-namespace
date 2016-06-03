'use strict';

/**
 * Namespace class
 */
class Namespace {

    /**
     * @param {string} [base]
     */
    constructor(base) {
        /**
         * @type {{}}
         */
        this.imports = {};

        /**
         * @type {string}
         */
        this.base = base || __dirname;
    }

    /**
     * Require a file
     * @param file
     * @returns {*}
     */
    require(file) {
        return require([this.base, file].join('/'))(this);
    }

    /**
     * Require a file only once
     * @param file
     * @returns {*}
     */
    requireOnce(file) {
        if (!(file in this.imports)) {
            this.imports[file] = this.require(file);
        }
        return this.imports[file];
    }

}

exports = module.exports = (base) => {
    return new Namespace(base);
};
