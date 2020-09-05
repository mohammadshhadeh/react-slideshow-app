import React, { Component } from "react";

export default class Slides extends Component {
    render() {
        const item = this.props.slides[this.props.index];
        const index = this.props.index;

        return (
            <div>
                <div id="navigation" className="text-center">
                    <button
                        data-testid="button-restart"
                        onClick={this.props.resetSlides}
                        className="small outlined"
                        disabled={index === 0}
                    >
                        Restart
                    </button>
                    <button
                        data-testid="button-prev"
                        onClick={this.props.prevSlide}
                        disabled={index === 0}
                        className="small"
                    >
                        Prev
                    </button>
                    <button
                        data-testid="button-next"
                        onClick={this.props.nextSlide}
                        disabled={index === this.props.slides.length - 1}
                        className="small"
                    >
                        Next
                    </button>
                </div>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{item.title}</h1>
                    <p data-testid="text">{item.text}</p>
                </div>
            </div>
        );
    }
}
