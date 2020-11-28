/*eslint-disable*/
import React, { Fragment } from "react";
import Modal from '@material-ui/core/Modal';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";

const useStyles = makeStyles(styles);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function HeaderLinks(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={classes.paper}>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Cancelar Reserva</h2>
            <hr />
            <br />
            <form>
              <GridContainer>
                <GridItem xs={30} sm={20} md={6}>
                  <CustomInput
                    labelText="ID Reserva"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem>
                  <Button color="primary">Confirmar</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )

  return (
    <Fragment>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          {/* <Button
          href="/about"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <InfoIcon className={classes.icons} /> Nosotros
        </Button> */}
          <Link to={'/about'} style={{ color: 'white', display: 'flex', marginTop: 11 + 'px' }}>
            <InfoIcon className={classes.icons} /> Nosotros
        </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim?ref=creativetim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link onClick={handleOpen} style={{ color: 'white', display: 'flex', marginTop: 11 + 'px' }}>
            <CancelScheduleSendIcon className={classes.icons} /> Cancelar Reserva
        </Link>
        </ListItem>
      </List>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}
      >
        {body}
      </Modal>
      
    </Fragment>
  );
}
