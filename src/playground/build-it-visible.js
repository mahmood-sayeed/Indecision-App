//might contain some bugs.

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, These are some details!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render( <VisibilityToggle />, document.getElementById('app') );

// let visible = false;

// const showDetails = () => {
//     visible = !visible;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={showDetails}>{visible ? 'Hide Details' : 'Show Details'}</button>
//             {visible && (
//                 <div>
//                     <p>these are details</p>
//                 </div>
//             )}
//         </div>
//     );


//     ReactDOM.render(template, document.getElementById('app'));
// };

// render();
