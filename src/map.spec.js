const map = require('./map');

describe('Map', () => {

    it('map([], cube) is []', () => {
        expect(map([], (i) => i**3)).toEqual([]);
    });


    it('map([1,2,3], identity) is [1,2,3]', () => {
        expect(map([1,2,3], (i) => i)).toEqual([1, 2,3]);
    });


    it('map([], cube) is [1,8,27]', () => {
        expect(map([1,2,3], (i) => i**3)).toEqual([1,8,27]);
    });


    it('map([a{x : 10}],i => i.x + 1) -> [11]', () => {
        expect(map([{x : 10}],i => i.x + 1)).toEqual([11]);
    });

})