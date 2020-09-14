import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../App.css';


class MultiSelectComponent extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  
    var filterSelect = document.getElementById("filterSelect");
    filterSelect.addEventListener("change", function() {
      let instance =  M.FormSelect.getInstance(filterSelect);
      console.log("instance value")
      console.log(instance.getSelectedValues())
    });
    
}

  handleChange(event){
    console.log(event);
    console.log(event.target.value);
  }

  render() {

    

    return (
      <div className="multiSelectComponent">
        <div
            ref={FormSelect => {
              this.FormSelect = FormSelect;
            }}
            id="select"
            className="select"
        >
          <div className="input-field col s12">
            <select id="filterSelect" className="storeOptions" multiple>
              <option value="" disabled selected>Not Selected</option>
              <option value="amazon">Amazon</option>
              <option value="bestbuy">Bestbuy</option>
              <option value="ebay">Ebay</option>
            </select>
            <label>Store Filter</label>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiSelectComponent;
