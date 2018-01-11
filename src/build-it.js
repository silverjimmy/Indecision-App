let Visibility =false;
const showMe = () => {
    Visibility = !Visibility;
    renderthis();
}
const renderthis = ()=>{
    const temp=(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showMe}>
                {Visibility ? 'Hide Details':'show Details'}
            </button>
            {Visibility &&(
                <div>
                    <p> Hello this is Bruno</p>
                </div>
            ) }
        </div>
    );
    ReactDOM.render(temp,document.getElementById('app'))
};
renderthis();