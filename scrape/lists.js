"use strict";

/**
 * Tiny module with a method to append two lists
 * @param { Array } listA - The first list
 * @param { Array } listB - The second list
 */

module.exports = {
    appendAll: function(listA, listB) {
        Array.prototype.push.apply(listA, listB);
        return listA;
    }
};
