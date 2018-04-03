import React from 'react';

class FilterBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className={"filter-bar"}>
              <a href={""} onClick={this.props.onAddFilterButtonClick}>
                  Add Filter
              </a>
          </div>
        );
    }
}

export default FilterBar;