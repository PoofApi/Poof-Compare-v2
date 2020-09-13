import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class MultiSelectComponent extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      elems.onchange = selectThem;

      var instances = M.FormSelect.init(elems, {});

      function selectThem() {
        var selectedOne = instances.getSelectedValues();
        console.log(selectedOne);
    }
    });
    
}

  render() {

    

    return (
      <div
          ref={FormSelect => {
            this.FormSelect = FormSelect;
          }}
          id="select"
          className="select"
      >

          <div className="input-field col s12">
            <select multiple>
              <option value="" disabled selected>Filter stores</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Multiple Select</label>
          </div>


    </div>
    );
  }
}

export default MultiSelectComponent;
