console.log('App.js is running!');

//JSX - Javascript XML


const app = {
    title:'Indecision App',
    subtitle:'Awesome Application',
    options: ['One', 'Two  ']

};

const template = (
    <div>
        <h1> {app.title} </h1>
        {app.subtitle && <p> {app.subtitle} </p>}
        <p>{app.options.length > 0 ? 'Here are your options':'No Options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
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

let count =0;
const addOne = () =>{
    count++;
    // console.log('addOne', count);
    renderCounterApp();
};
const minusOne =() =>{
    count = count -1;
    // console.log('Minus One')
    renderCounterApp();
};
const reset = () =>{
    // console.log('Reset');
    count =0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = ()=>{
    const templatetwo = (
        <div>
            <h1>count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    
    );
    ReactDOM.render(templatetwo, appRoot);
};

renderCounterApp();
