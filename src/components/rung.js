

// might not even need react for this part.

// what is the rung ?
// is it the whole session? or the simple message ?
// for now we'll do the message but I think
// it will be the session at some point.

function Rung (string) {
    let newRung = {};
    newRung.text = string;
    let time = new Date();
    newRung.time = time.toUTCString();
    return newRung
}


export default Rung;