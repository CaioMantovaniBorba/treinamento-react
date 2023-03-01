import React, { Component } from 'react';
import SpecialtyItem from './SpecialtyItem';
import { MdAssignment } from 'react-icons/md';
import axios from 'axios';

export default class SpecialtyList extends Component {
  state = {
    specialties: [],
  }

  url = 'https://telepephc2.famema.br:6868/api/especialidades';

  componentDidMount() {
    this.updateSpecialty();
  }

  updateSpecialty() {
    axios.get(this.url)
      .then(response => {
        this.setState({
          specialties: response.data
        });
      })
  }

  handleSubmit = (e) => {
    const nameSpecialty = document.getElementById('nome').value;
    const data = new FormData();
    data.append('nome', nameSpecialty);
    data.append('idLegado', '2');
    data.append('id_ambiente', '2');

    axios.post(this.url, data)
      .then(() => {
        this.updateSpecialty();
      })
  }

  handleDelete = (item) => {
    this.setState({
      specialties: this.state.specialties.filter(specialty => specialty.id != item.id)
    })
  }

  render() {
    return (
      <>
        <div className='row'>
          <MdAssignment color='#111' size={40} />
          <h2>ESPECIALIDADES</h2>
        </div>

        <div className="row">
          <input type="text" id='nome'></input>
          <button type='submit' onClick={this.handleSubmit}>GRAVAR</button>
        </div>

        <ul>

          {this.state.specialties.map(specialty =>
            <SpecialtyItem
              key={specialty.id}
              item={specialty.nome}
              onDelete={() => this.handleDelete(specialty)}
            />
          )}
        </ul>

      </>
    );
  }
}