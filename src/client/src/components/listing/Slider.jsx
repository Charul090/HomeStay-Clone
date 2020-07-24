import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 10px;
  height: 10px;
  background: ${props.color};
  cursor: pointer;
  outline: 2px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .1s;
`);

const Styles = styled.div`
  display: flex;
  
  align-items: center;
  color: white;
  .value {
    flex: 1;
    font-size: 20px;
  }
  .slider {
    flex: 4;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 50
  }

  handleOnChange = (e) => this.setState({ value: e.target.value },
    console.log(e.target.value))

  render() {
    return (
      <Styles opacity={this.state.value > 10 ? (this.state.value / 255) : .1} color={this.props.color}>
        <label className="font-weight-bold">Price:0</label>
        <input type="range" min={0} max={1000} value={this.state.value} className="slider ml-1" onChange={this.handleOnChange} />
        <p className="value">{this.state.value}</p>
      </Styles>
    )
  }
}