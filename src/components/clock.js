// calculateTime() {
//     let extractNumbers = /\d+/g;
//     let start = this.state.In.match( extractNumbers );
//     let end = new Date().toLocaleTimeString().match( extractNumbers );
//     console.log(start, end)


//     // need a more complicated clock -- spin out its own module!
//     let seconds = end[2] * 1 - start[2] * 1;
//     let minutes = 0;
//     let hours = 0;
//     if (seconds < 0) {
//       minutes = end[1] * 1 - (start[1] * 1) + 1; 
//     } else {
//       minutes = end[1] * 1 - start[1];
//     }

//     if (minutes < 0) {
//       hours = end[0] * 1 - (start[0] * 1) + 1;
//     } else {
//       hours = end[0] * 1 - start[0] * 1;
//     }
//     console.log("your worked for ", hours, " hours", minutes, seconds)

//   }

//  what needs to happen.

// display current time
// have button?
// get raw clock start
// get raw clock end
// subtract - format 
// maybe also get public facing to string  items