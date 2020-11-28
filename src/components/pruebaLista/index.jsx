import Button from "components/CustomButtons/Button.js";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { Fragment } from "react";
import MediaCard from './lista';
import { FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";

const dashboardRoutes = [];

class DepartamentosComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departaments: [],
            open: false
        }
        //this.getDepartments();
        console.log(props);
    }

    getDepartments() {
        let endpoint = `${URL}departamentos`;

        fetch(endpoint, { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ departaments: data });
            });
    }
    componentDidMount() {
        console.log(this.state.open);
        console.log(this.props);
        console.log('SE MONTO DEPARTAMENTOS');
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        return (
            <Fragment>
                <Button color="danger"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({ open: true });
                    }}>
                    Reservar
                </Button>
                <div>
                    <Dialog open={this.state.open} 
                            onClose={this.handleClose} 
                            aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Departamentos</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Busca tu Departamento
                                <hr/>
                                <InputLabel htmlFor="age-native-helper">Region</InputLabel>
                                <Select>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Prueba 1'}>Prueba 1</MenuItem>
                                    <MenuItem value={'Prueba 2'}>Prueba 2</MenuItem>
                                    <MenuItem value={'Prueba 3'}>Prueba 3</MenuItem>
                                    {/* {this.state.regions.map(region => (
                                        <MenuItem value={region.id_region}>{region.nombre_region}</MenuItem>
                                    ))} */}
                                </Select>
                                <FormHelperText>Selecciona Region</FormHelperText>
                                <InputLabel htmlFor="age-native-helper">Provincia</InputLabel>
                                <Select>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Prueba 1'}>Prueba 1</MenuItem>
                                    <MenuItem value={'Prueba 2'}>Prueba 2</MenuItem>
                                    <MenuItem value={'Prueba 3'}>Prueba 3</MenuItem>
                                    {/* {this.state.regions.map(region => (
                                        <MenuItem value={region.id_region}>{region.nombre_region}</MenuItem>
                                    ))} */}
                                </Select>
                                <FormHelperText>Selecciona Pronvincia</FormHelperText>
                                <InputLabel htmlFor="age-native-helper">Comuna</InputLabel>
                                <Select>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Prueba 1'}>Prueba 1</MenuItem>
                                    <MenuItem value={'Prueba 2'}>Prueba 2</MenuItem>
                                    <MenuItem value={'Prueba 3'}>Prueba 3</MenuItem>
                                    {/* {this.state.regions.map(region => (
                                        <MenuItem value={region.id_region}>{region.nombre_region}</MenuItem>
                                    ))} */}
                                </Select>
                                <FormHelperText>Selecciona Comuna</FormHelperText>
                            </DialogContentText>
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Subscribe
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Fragment>
        );
    }
}

export default DepartamentosComponent;