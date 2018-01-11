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
