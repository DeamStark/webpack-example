/**
 * Created by CDJ on 2016/12/14.
 */
/*CommonJS风格
function generateText(){
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}
module.exports=generateText;*/
/*ES6风格*/
export default function(){
    var element =document.createElement('h2');
    element.innerHTML = "Hello h2 world hahaha es6";
    return element;
}
