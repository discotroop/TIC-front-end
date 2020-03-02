import Rung from './rung.js';

function Logic () {
    const items = [];

    return {
        laader: items,
        createRung: function(string) {
            this.laader.push(new Rung(string))
        },
    }
}


export default Logic;