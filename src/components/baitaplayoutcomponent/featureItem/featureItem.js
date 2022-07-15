import React, { Component } from "react";
import './featureItem.css';

export default class FeatureItem extends Component {
  render() {
    return (
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className={ this.props.icon } />
          </div>
          <h2 className="fs-4 fw-bold">{this.props.title}</h2>
          <p className="mb-0">{this.props.content}</p>
        </div>
      </div>
    );
  }
}
