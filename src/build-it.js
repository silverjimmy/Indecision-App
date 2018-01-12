// let Visibility =false;
// const showMe = () => {
//     Visibility = !Visibility;
//     renderthis();
// }
// const renderthis = ()=>{
//     const temp=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showMe}>
//                 {Visibility ? 'Hide Details':'show Details'}
//             </button>
//             {Visibility &&(
//                 <div>
//                     <p> Hello this is Bruno</p>
//                 </div>
//             ) }
//         </div>
//     );
//     ReactDOM.render(temp,document.getElementById('app'))
// };
// renderthis();

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);        
        this.state={
            visibility:false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
                    <div>
                        <h1>Visibility Toggle</h1>
                        <button onClick={this.handleToggleVisibility}>
                            {this.state.visibility ? 'Hide Details':'show Details'}
                        </button>
                        {this.state.Visibility &&(
                            <div>
                                <p> Hello this is Bruno</p>
                            </div>
                        ) }
                    </div>
        );}
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))