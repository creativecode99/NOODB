import React from 'react';
import './Edit.css';
import Form from './components/Form/Form'
class Edit extends Component {
    constructor() {
        super();
        this.state = {};
    }


    handleClick = e => {

        axios.post("/api/create", this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Congrats! You've completed the first draft of your Salesletter...<br />
                        Now feel free to edit your salesletter or simply copy and paste it to a word document to edit later.<br />

                    </p>
                    <label>

                    </label>
                </header>

                <div className="App-body">


                </div>
                <button onClick={this.handleClick}>Edit</button>
                <button onClick={this.handleClick}>Delete</button>
            </div>




        );
    }
}

export default Edit;