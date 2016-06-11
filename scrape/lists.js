module.exports = {
    appendAll: function(listA, listB) {
        Array.prototype.push.apply(listA, listB);
        return listA;
    }
};
