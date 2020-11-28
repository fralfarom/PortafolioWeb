import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import customInputStyle from './stylesCustom';


const URL = 'http://localhost:3300/';

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      extraServices: [],
      extraServicesList: [],
      departments: [],
      departmentsList: [],
      regions: [],
      communes: [],
      provinces: [],
      checked: 0,

      department: '',
      names: '',
      surnames: '',
      email: '',
      phone: '',
      rut: '',
      region: '',
      commune: '',
      province: '',
      dateFrom: '',
      dateUntil: '',
      advancePayment: 0,
      numberGuests: 0,
    }

    this.handleNamesChange = this.handleNamesChange.bind(this);
    this.handleSurnamesChange = this.handleSurnamesChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleRutChange = this.handleRutChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNumberGuestsChange = this.handleNumberGuestsChange.bind(this);
    this.handleAdvancePaymentChange = this.handleAdvancePaymentChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.handleCommuneChange = this.handleCommuneChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
  }


  componentDidMount() {
    this.getExtraServices();
    this.getDepartments();
    this.getRegions();
  }

  getExtraServices() {
    let endpoint = `${URL}serviciosextras`;
    console.log(endpoint);

    fetch(endpoint, { method: 'POST' })
      .then((res) => res.json())
      .then(data => {
        console.log('here');
        console.log(data);
        this.setState({ extraServicesList: data });
      })
      .catch(err => {
        console.log('ERROR');
        console.log(err);
      })
  }

  getDepartments() {
    let endpoint = `${URL}departamentos`;

    fetch(endpoint, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ departmentsList: data });
      });
  }

  getRegions() {
    let endpoint = `${URL}regiones`;

    fetch(endpoint, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ regions: data });
      });
  }

  getCommunes(idProvincia) {
    let endpoint = `${URL}comunas`;

    let json = JSON.stringify(`{"id": ${idProvincia}}`);
    console.log(json);

    fetch(endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.parse(json) })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ communes: data });
      });
  }

  getProvinces(idRegion) {
    let endpoint = `${URL}provincias`;

    let json = JSON.stringify(`{"id": ${idRegion}}`);
    console.log(json);
    fetch(endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.parse(json) })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ provinces: data });
      });
  }

  searchDepartmentByCommune(idCommune) {
    let endpoint = `${URL}departamento/comuna`

    let json = JSON.stringify(`{"id": ${idCommune}}`);
    console.log(json);

    fetch(endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.parse(json) })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ departmentsList: data })
      })
  }

  handleNamesChange(e) {
    this.setState({ names: e.target.value });
  };
  handleRutChange(e) {
    this.setState({ rut: e.target.value });
  };
  handleSurnamesChange(e) {
    this.setState({ surnames: e.target.value });
  };
  handleAdvancePaymentChange(e) {
    this.setState({ advancePayment: e.target.value });
  };
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  };
  handleNumberGuestsChange(e) {
    this.setState({ numberGuests: e.target.value });
  };
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  };
  handleDepartmentChange(e) {
    this.setState({ department: e.target.value });
  }
  handleRegionChange(e) {
    this.setState({ region: e.target.value, communes: [] }, ()=>{
      this.getProvinces(this.state.region);
    });
  }
  handleProvinceChange(e) {
    this.setState({ province: e.target.value }, ()=>{
      this.getCommunes(this.state.province);
    });
  }
  handleCommuneChange(e) {
    this.setState({ commune: e.target.value });
  }
  handleDateFromChange(e) {
    console.log(e._d);
    let date = new Date(e._d);
    let formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    this.setState({ dateFrom: formatDate })
  }
  handleDateUntilChange(e) {
    console.log(e._d);
    let date = new Date(e._d);
    let formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    this.setState({ dateUntil: formatDate })
  }


  render() {
    return (
      <div style={{ padding: 70 + 'px 0' }}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 style={{ color: 'black', textAlign: 'center' }}>Reservemos</h2>
            <hr />
            <br />
            <h4 style={{ color: 'gray', textAlign: 'center' }}>
              Realiza tu reserva
          </h4>
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('OLAAAAAAAAAA');
            }}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="Nombres" onChange={this.handleNamesChange} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="Apellidos" onChange={this.handleSurnamesChange} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="RUT" onChange={this.handleRutChange} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="Telefono" onChange={this.handlePhoneChange} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="Correo" onChange={this.handleEmailChange} />
                  <br />
                  <br />
                </GridItem>
                <GridItem>
                  <InputLabel style={{
                    cursor: "pointer",
                    paddingLeft: "0",
                    color: "rgba(0, 0, 0, 0.26)",
                    fontSize: "14px",
                    lineHeight: "1.428571429",
                    fontWeight: "400",
                    display: "inline-flex",
                    
                  }}>
                    Fecha y Hora Llegada
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      styles={{ color: 'black' }}
                      inputProps={{ placeholder: "Selecciona Fecha y Hora" }}
                      onChange={this.handleDateFromChange}
                    />
                  </FormControl>
                  <br />
                  <br />
                </GridItem>
                <GridItem>
                  <InputLabel style={{
                    cursor: "pointer",
                    paddingLeft: "0",
                    color: "rgba(0, 0, 0, 0.26)",
                    fontSize: "14px",
                    lineHeight: "1.428571429",
                    fontWeight: "400",
                    display: "inline-flex"
                  }}>
                    Fecha y Hora Salida
                </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      styles={{ color: 'black' }}
                      inputProps={{ placeholder: "Selecciona Fecha y Hora" }}
                      onChange={this.handleDateUntilChange}
                    />
                  </FormControl>
                  <br />
                  <br />
                </GridItem>
                <GridItem>
                  <FormControl style={{ margin: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="age-native-helper">Departamentos</InputLabel>
                    <Select onChange={this.handleDepartmentChange} ref="departmentBox">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {this.state.departmentsList.map(department => (
                        <MenuItem value={department}>{department.nombre_departamento}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Selecciona Departamento o Busca mas abajo</FormHelperText>
                  </FormControl>
                  <br/>
                      <label>Dirección: { this.state.department.direccion }</label>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="Cantidad Alojados" onChange={this.handleNumberGuestsChange} />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <TextField id="standard-basic" label="$ Monto Adelanto" onChange={this.handleAdvancePaymentChange} />
                </GridItem>

                {/* BUSCAR DEPTO */}
                <GridItem style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <h4 style={{ color: '#999', textAlign: 'center' }}>O Busca Uno Para Tí</h4>
                </GridItem>
                <GridItem style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <FormControl style={{
                    margin: 1,
                    minWidth: 120,
                  }}>
                    <InputLabel htmlFor="age-native-helper">Region</InputLabel>
                    <Select onChange={this.handleRegionChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {this.state.regions.map(region => (
                        <MenuItem value={region.id_region}>{region.nombre_region}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Selecciona Region</FormHelperText>
                  </FormControl>
                  <FormControl style={{
                    margin: 1,
                    minWidth: 120,
                  }}>
                    <InputLabel htmlFor="age-native-helper">Provincia</InputLabel>
                    <Select onChange={this.handleProvinceChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {this.state.provinces.map(province => (
                        <MenuItem value={province.id_provincia}>{province.nombre_provincia}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Selecciona Provincia</FormHelperText>
                  </FormControl>
                  <FormControl style={{
                    margin: 1,
                    minWidth: 120,
                  }}>
                    <InputLabel htmlFor="age-native-helper">Comuna</InputLabel>
                    <Select onChange={this.handleCommuneChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {this.state.communes.map(commune => (
                        <MenuItem value={commune.id_comuna}>{commune.nombre_comuna}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Selecciona Comuna</FormHelperText>
                  </FormControl>
                  <Fab style={{ marginLeft: 2+'%'}}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(this.state);
                    this.setState({ department: '' })
                    this.searchDepartmentByCommune(this.state.commune);
                  }} variant="extended">
                    <NavigationIcon />
                    Buscar
                </Fab>
                </GridItem>

                <br /><br />

                <h4 style={{ color: '#999', textAlign: 'center' }} style={{ marginLeft: 40 + '%' }}>
                  Servicios Extra
              </h4>

                <GridItem>
                  <div style={{ marginLeft: 170 }}>
                    <List style={{
                      width: '100%',
                      maxWidth: 360,
                      backgroundColor: '#ffffff',
                    }}>
                    </List>
                  </div>
                </GridItem>

                <GridItem xs={12} sm={12} md={4} style={{ marginLeft: 30 + '%' }}>
                  <h3 style={{ color: '#999', textAlign: 'center' }}>Total: ${this.state.total}</h3>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{ marginLeft: 40 + '%' }}>
                  <Fab onClick={(e) => {
                    e.preventDefault();
                    console.log(this.state);
                  }} variant="extended">
                    <NavigationIcon style={{ marginRight: 'theme.spacing(1)' }} />
                    Reservar
                </Fab>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default WorkSection;
