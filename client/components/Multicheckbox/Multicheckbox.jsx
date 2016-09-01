import React, { Component, PropTypes } from 'react';
import MulticheckboxElement from "./MulticheckboxElement";


class Multicheckbox extends Component {

  constructor(props) {
    super(props);
    this.state = {items: props.items, selectedIds: []}

    this.onToogle = this.onToogle.bind(this);
  }

  onToogle(value) {
    if(!this.isValueDisabled(value)){
      let selectedIds = this.state.selectedIds;
      let index = this.state.selectedIds.indexOf(value)
      if(index != -1){
        selectedIds.splice(index, 1);
      } else {
        if(selectedIds.length < this.props.limit)
          selectedIds.push(value);
      }
      this.setState({selectedIds: selectedIds})
    }
  }

  isValueChecked(value) {
    return (this.state.selectedIds.indexOf(value) != -1)
  }


  isSomethigBlocks(value) {
    let somethigBlocks = false
    let tmpBlockingPairs = JSON.parse(JSON.stringify(this.props.blockingPairs));
    tmpBlockingPairs.forEach((pair)=> {
      let indexOfValue = pair.indexOf(parseInt(value))
      let valueIsInPair = indexOfValue >= 0
      if(valueIsInPair){
        pair.splice(indexOfValue, 1)
        pair.forEach((blocking_value)=>{
          if(this.state.selectedIds.indexOf(parseInt(blocking_value)) >= 0){
            somethigBlocks = true
          }
        }, this)
      }
    })
    return somethigBlocks
  }

  isValueDisabled(value) {
    if(this.isSomethigBlocks(value)){
      return true
    }
    return (this.state.selectedIds.indexOf(value) == -1 && this.state.selectedIds.length == this.props.limit)
  }

  render() {
    return (
      <div>
        {this.state.items.map((item, index) => {
          return <this.props.customTemplate {...item} 
          onClick={this.onToogle} 
          key={index} 
          checked={this.isValueChecked(item.value)}
          disabled={this.isValueDisabled(item.value)}/>
        })} 
        <hr/>
        Limit: {this.props.limit} <br/>
        Selected: {this.state.selectedIds.join(", ")}
      </div>
    );
  }
}

Multicheckbox.defaultProps = {
  items: [],
  customTemplate: MulticheckboxElement,
  blockingPairs: [],
  limit: 3
};

Multicheckbox.propTypes = {
  items: PropTypes.array.isRequired,
  customTemplate: React.PropTypes.element,
  blockingPairs: React.PropTypes.array,
  limit: React.PropTypes.number
}


export default Multicheckbox;
