import React, { Component } from "react";
import { TextField, AppBar } from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
export class FormUserDetails extends Component {

  render() {
    const { values, handleChange ,continues} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" iconClassNameLeft />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your last Name"
            floatingLabelText="last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <ArrowForwardIcon
            onClick={continues}
            fontSize='large'
            className='nextMenu'
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;