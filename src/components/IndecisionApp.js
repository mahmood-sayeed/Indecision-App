import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOptions = () => {
		this.setState(() => ({ options: [] })); //since arrow shorthand function treats {} as body instead of object, we have to put round brackets before it ({})

		// this.setState(() => {
		// 	return {
		// 		options: []
		// 	};
		// });
    };
    
    handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option),
		}));
    };
    
    handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({
            selectedOption: option
        }));
    };
    
    handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add option';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
    };
    
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
			</div>
		);
	}
}