'use strict';

var Visibility = false;
var showMe = function showMe() {
    Visibility = !Visibility;
    renderthis();
};
var renderthis = function renderthis() {
    var temp = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showMe },
            Visibility ? 'Hide Details' : 'show Details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' Hello this is Bruno'
            )
        )
    );
    ReactDOM.render(temp, document.getElementById('app'));
};
renderthis();
