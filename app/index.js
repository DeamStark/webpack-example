/**
 * Created by CDJ on 2016/12/14.
 */
/*CommonJS风格
var sub = require('./sub');
//require('./scss/main.scss');
var $ = require('jquery');
var moment = require('moment');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World it</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me! now is ' + moment().format() + '</p>');*/
/*ES6风格*/
import './scss/main.scss';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');
const myPromise =Promise.resolve(42);
myPromise.then((number)=>{
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
