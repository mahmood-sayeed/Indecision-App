//might contain some bugs.

let visible = false;

const showDetails = () => {
    visible = !visible;
    render();
};




const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>

            <button onClick={showDetails}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && (
                <div>
                    <p>these are details</p>
                </div>
            )}
        </div>
    );


    ReactDOM.render(template, document.getElementById('app'));
};

render();
