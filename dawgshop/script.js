document.getElementById('go').onclick = function() {
var inputText = $('#text-input').val ();
var dawgifiedText = inputText + ' is reading this and is wasting their time.';
document.getElementById('output').innerHTML = dawgifiedText;
}