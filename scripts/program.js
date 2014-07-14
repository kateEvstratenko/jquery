var inViewElements = $('.mainContent .section:inView');

console.log('count: ' + inViewElements.length);
for (var i = 0; i < inViewElements.length; i++) {
    console.log(inViewElements[i]);
}