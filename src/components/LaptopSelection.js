import React, { Component } from 'react';
// import InventoryItem from './components/InventoryItem';

class LaptopSelection extends Component {
    render() {

      return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
          {this.props.features}
          {/* <InventoryItem 
            features={this.props.features} 
            selected={this.props.selected}
            onSelected={this.props.updateFeature} /> */}
      </form>
    )
  }
}

export default LaptopSelection;