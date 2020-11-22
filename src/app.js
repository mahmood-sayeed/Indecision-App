//live-server public
//babel src\app.js --out-file=public\scripts\app.js --presets=env,react --watch
//two different terminals on path react\indecision-app

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}
	//some Lifecycle Methods of class components
	componentDidMount() {
		//fires when component is mounted, fetching data
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			//Do nothing
		}
	}
	componentDidUpdate(prevProps, prevState) {
		//when component updates, saving data
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('options saved in local storage');
		}
	}
	componentWillUnmount() {
		console.log('when component un-mounted aka disappears');
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] })); //since arrow shorthand function treats {} as body instead of object, we have to put round brackets before it ({})

		// this.setState(() => {
		// 	return {
		// 		options: []
		// 	};
		// });
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option),
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add option';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option),
		}));
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}


//stateless functional components

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision',
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				What should i do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			{
				props.options.map((option) => (
				<Option 
				key={option} 
				optionText={option} 
				handleDeleteOption={props.handleDeleteOption} 
				/>
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
		};
	}
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		e.target.elements.option.value = '';

		this.setState(() => ({ error })); //similar to error:error

		if (!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

//stateless functional components

// const User = (props) => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	);
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
