let titleOrient = 'bottom';
let subtitlePadding;

if (['right', 'bottom'].includes(titleOrient)) {
    subtitlePadding = '10px 20px'; // More padding for 'right' or 'bottom'
} else {
    subtitlePadding = '5px 10px'; // Less padding for 'left' or 'top'
}

console.log(`Subtitle padding set to: ${subtitlePadding}`);
