//live-server public
//babel src\app.js --out-file=public\scripts\app.js --presets=env,react --watch

console.log('app.js running');

//JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Time to random pick and make a decision!!',
    options: ['One','Two']
};
const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
	</div>
);


const user = {
    name: 'Billy',
    age: 26,
    location: 'Stockholm'
};
function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    } 
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
