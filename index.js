module.exports = function(content, file, settings) {
    return require('./lib/parser')(content, file, settings).renderTpl();
};