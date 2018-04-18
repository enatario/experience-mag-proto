// Changes a string to lowercase and replaces spaces with hyphens

module.exports = function() {
    return String(text).replace(/\s+/g, '-').toLowerCase()
}