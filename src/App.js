import "./App.css";
import "h8k-components";
import Slides from "./components/Slides";

import React, { Component } from "react";

const title = "Slideshow App";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        };
    }

    prevSlide = () => {
        this.setState({ index: (this.state.index - 1) });
    };

    nextSlide = () => {
        this.setState({ index: (this.state.index + 1) });
    };

    resetSlides = () => [this.setState({ index: 0 })];

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="App">
                    <Slides
                            prevSlide={this.prevSlide}
                            nextSlide={this.nextSlide}
                            resetSlides={this.resetSlides}
                            slides={this.props.slides}
                            index={this.state.index}
                        />
                </div>
            </div>
        );
    }
}
