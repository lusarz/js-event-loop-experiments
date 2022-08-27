// setTimeout(() => {
//     console.log('A');
// }, 0);
//
// console.log('B');


/*
* Why B is printed before A?
* */


for (var i = 0; i < 5; i++) {
    // console.log(i);
    setTimeout(() => {
        console.log(i);
        // Q: What would be the output and why?
        // console.log('[Closure]', i + i + '' + i)
    }, i * 10);
}