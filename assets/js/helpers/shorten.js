function shorten(text, length) {
    return !text || text.length <= length ? text : '' + text.slice(0, length - 2) + '[…]'
}
module.exports = shorten
