import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';
import * as actions from '../actions';

class Table extends Component {
  componentDidMount() {
    this.props.getProps();
  }
  openModal(prop) {
    document.getElementById('propID').innerText = 'Prop ID: ' + prop.propID;
    document.getElementById('subdivision').innerText = 'Subdivision: ' + prop.subdivisionCd;
    document.getElementById('geoID').innerText = 'Geo ID: ' + prop.geoID;
    document.getElementById('reconcileMarket').innerText = 'Reconciled Market: ' + prop.reconciledMarket;
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  renderTableBody() {
    if (!this.props.properties) return <tr> Loading... </tr>
    return this.props.properties.map(prop => {
      return(
        <tr key={prop.propID} style={{borderBottom: '1px solid'}} onClick={() => this.openModal(prop)} >
          <td>{prop.propID}</td>
          <td>{prop.ownerName}</td>
          <td>{prop.dbaName}</td>
          <td>{prop.legalDescription}</td>
          <td>{prop.situsStreet}</td>
        </tr>
      );
    });
  }
  render() {
    return(
      <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => this.closeModal()}>&times;</span>
          <p id="propID"></p>
          <p id="subdivision"></p>
          <p id="geoID"></p>
          <p id="reconcileMarket"></p>
        </div>
      </div>
      <table style={{width: '80%', margin: '0 auto', border: '1px solid #dddddd', borderRadius: '2px', borderCollapse:'collapse', textAlign: 'center', marginTop: '15PX'}}>
        <thead>
          <tr style={{border: '1px solid' }}>
            <th>Prop ID</th>
            <th>Owner Name</th>
            <th>DBA Name</th>
            <th>Legal Description</th>
            <th>Situs Stree</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableBody()}
        </tbody>
      </table>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { properties: state.properties }
}
export default connect(mapStateToProps, actions)(Table);