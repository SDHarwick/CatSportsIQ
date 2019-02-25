import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cyan, pink, purple, orange} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {AddShoppingCart, ThumbUp, Assessment, Face} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import theme from '../../index';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  wholeBody: {
    margin: "auto",
    fontFamily: "sans-serif",
    fontSize: 17,
    color: theme.palette.primary.dark,
  },
  introSection: {
    padding: '200px 0px 50px 0px',
  },
  businessByModel:{
    backgroundColor:'#FFFFFF',
    paddingBottom: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6
  },
  lightBgSection: {
    backgroundColor: "#F8F8F8",
    color: theme.palette.primary.main,
    padding: theme.spacing.unit * 6
  },
  darkBgSection: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 6
  },
  darkBGSectionHeader: {
    color: "#f8f8f8",
    paddingTop: 40,
    paddingBottom: 15
  },
  sectionHeader: {
    paddingTop: 40,
    paddingBottom: 15
  },
  autoMargin: {
    margin: "auto"
  },
  button: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  bottomBorder:{
    borderBottom:'5px solid `${theme.palette.primary.dark}`',
    margin:'auto'
  },
  paddingBottom: {
    paddingBottom: theme.spacing.unit * 6
  },
  card: {
    minWidth: 275,
    margin: 5
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: '{theme.spacing.unit * 3}px'
  },
  paper: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.primary.dark,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
});


const Dashboard = props => {

    const classes = props.classes;
    const bullet = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.wholeBody}>
        <section className={classes.lightBgSection}>
          <Grid
            container
            spacing={40}
            align="center"
            className={classes.introSection}
          >
            <Grid item xs={12}>
              <Typography variant="display4" color="secondary">
                Sign Up, Login, or Manage Users
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" color="primary.dark">
                Sign Up, Login, and then Manage Users
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.autoMargin}>
              <Link to={'/login'}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
              </Link>
              
              
              <Link to={'/signup'}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  Sign Up
                </Button>
              </Link>
              
              
              <Link to={'/usermanagement'}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  User Management
                </Button>
              </Link>
              
            </Grid>
            <Grid item xs={12} sm={9} className={classes.bottomBorder}>
              <Typography variant="p" color="secondary">
                Welcome to the App!
              </Typography>
            </Grid>
          </Grid>
        </section>
    </div>
)};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard); 

