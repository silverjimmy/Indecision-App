'use strict';

console.log('App.js is running!');

//JSX - Javascript XML


var app = {
    title: 'Indecision App',
    subtitle: 'Awesome Application',
    options: ['One', 'Two  ']

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// const user = {
//     name: '',
//     age: '23',
//     location: 'Kenya'
// };
// function getLocation(location){
//     if (location){
//         return <p>Location: {location}</p>;
//     }
// }
// const templatetwo = (
//     <div>
//        <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//        {getLocation(user.location)}
//     </div>
// );

var count = 0;
var addOne = function addOne() {
    count++;
    // console.log('addOne', count);
    renderCounterApp();
};
var minusOne = function minusOne() {
    count = count - 1;
    // console.log('Minus One')
    renderCounterApp();
};
var reset = function reset() {
    // console.log('Reset');
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templatetwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templatetwo, appRoot);
};

renderCounterApp();
