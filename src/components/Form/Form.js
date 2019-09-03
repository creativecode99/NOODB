import React, { Component } from "react";
import './Form.css';
import axios from "axios";
class Form extends Component {
    constructor() {
        super();
        this.state = {
            salesletter: "",
            didSubmit: false,
            headline: "",
            openingSentence: "",
            firstPara: "",
            selfIntro: "",
            advStory: "",
            bodyCopy: "",
            solution: "",
            offerIntro: "",
            offer: "",
            bonuses: "",
            price: "",
            guarantee: "",
            overview: "",
            cta: "",
            ps: "",
            pps: "",
            ppps: "",

        };
    }
    handleChange = e => {
        console.log('blop');
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClick = () => {
        console.log('hello')
        this.setState({ didSubmit: true })
        axios.post("/api/create", this.state)

            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ salesletter: res.data })
            })
            .catch(error => {
                this.setState({ error: "an error occured" })
            })
    };

    handleDelete = () => {

        axios.delete("/api/delete").then(res => {
            this.setState({
                didSubmit: false,
                headline: "",
                openingSentence: "",
                firstPara: "",
                selfIntro: "",
                advStory: "",
                bodyCopy: "",
                solution: "",
                offerIntro: "",
                offer: "",
                bonuses: "",
                price: "",
                guarantee: "",
                overview: "",
                cta: "",
                ps: "",
                pps: "",
                ppps: ""
            })
        })
            .catch(error => {
                this.setState({ error: "an error occured while deleting" })
            })
    };

    render() {

        let { headline, didSubmit, openingSentence, firstPara, selfIntro, advStory, bodyCopy, solution,
            offerIntro, offer, bonuses, price, guarantee, overview, cta, ps, pps, ppps } = this.state
        console.log(this.state.headline);
        console.log(this.state.openingSentence + "opening sentence");
        return (<div className="flex">
            {this.state.salesletter ? <p>{this.state.salesletter}</p> : null}

            {this.state.price}


            {didSubmit ? <p>{headline}</p> : <div className="first" ><label>Headline</label><br></br>
                <p className="yuh">hfjhgjhgj</p>
                <textarea placeholder="Write here" value={headline} name="headline" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{openingSentence}</p> : <div><label>Opening Sentence</label><br></br>
                <textarea placeholder="Write here" name="openingSentence" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{firstPara}</p> : <div><label>The First Paragraph</label><br></br>
                <textarea placeholder="Write here" name="firstPara" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{selfIntro}</p> : <div><label>Introduce Yourself Or The Company</label><br></br>
                <textarea placeholder="Write here" name="selfIntro" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{advStory}</p> : <div><label>Advanced Story Telling</label><br></br>
                <p>ecrfc</p>
                <textarea placeholder="Write here" name="advStory" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{bodyCopy}</p> : <div><label>Body Copy</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="bodyCopy" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{solution}</p> : <div><label>The Untried Solution</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="solution" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{offerIntro}</p> : <div><label>Offer Introduction</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="offerIntro" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{offer}</p> : <div><label>Your Offer</label><br></br>
                <p>When writing out your benefits, be sure to write out a captivating bullet point list. Example:</p> <ul>
                    <li>You'll find out how to make a gallon of gas last you a whole month</li>
                    <li>On page 3 you'll discover the secrets of youth</li>
                    <li>You'll discover the quickest path to getting more done in less time</li>
                </ul>
                <textarea placeholder="Write here" name="offer" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{bonuses}</p> : <div><label>Bonuses</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="bonuses" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{price}</p> : <div><label>Price</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="price" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{guarantee}</p> : <div><label>Guarantee</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="guarantee" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{overview}</p> : <div><label>Overview</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="overview" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{cta}</p> : <div><label>CTA</label><br></br>
                <p>Use this box to close the sale</p>
                <textarea placeholder="Write here" name="cta" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{ps}</p> : <div><label>P.S.</label><br></br>
                <p>In each of the following sections, you have the chance to go on about the strong points of the sale.
                    Where you can get into: Guarantees, scarcity, pain points, the consequences of not buying your offer and alot more.
                    Just remember to keep each one from 2-5 sentences max. The focus is short and impactful because therye at the end of
                the letter and theyre just looking for reasons to purchase your offer.</p>
                <textarea placeholder="Write here" name="ps" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{pps}</p> : <div><label>P.P.S.</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="pps" onChange={this.handleChange}></textarea></div>}

            {didSubmit ? <p>{ppps}</p> : <div><label>P.P.P.S.</label><br></br>
                <p></p>
                <textarea placeholder="Write here" name="ppps" onChange={this.handleChange}></textarea></div>}

            <br></br>

            <button
           /* className=
            onClick={e=>
            props.myformdata(e,{
            didSubmit: false,
            headline: props.headline,
            openingSentence: props.openingSentence,
            firstPara: props.firstPara,
            selfIntro: props.selfIntro,
            advStory: props.advStory,
            bodyCopy: props.bodyCopy,
            solution: props.solution,
            offerIntro: props.offerIntro,
            offer: props.offer,
            bonuses: props.bonuses,
            price: props.price,
            guarantee: props.guarantee,
            overview: props.overview,
            cta: props.cta,
            ps: props.ps,
            pps: props.pps,
            ppps: props.ppps,
            })
        
        }
            */onClick={this.handleClick}>Submit</button>
            <button onClick={this.handleDelete}>Delete</button>

        </div>

        )
    }
}

export default Form;