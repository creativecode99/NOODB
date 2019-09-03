import React, { Component } from "react";
import Axios from "axios";

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
name: "",
image: "",
error: ""
        };
        this.handleChange = this.handleChange
    }
}

>
<input
name="name"
onChange={this.handleChange}
value={this.state.name}
placeholder="name"
/>