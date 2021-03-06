/**
 * TODO: Reusable stand alone form with formik
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styled from 'styled-components';

import DateRangeIcon from '@material-ui/icons/DateRange';

import DatePicker from '../../../components/DatePicker/DatePicker';
import FormControl from '../../../components/FormControl/FormControl';
import FormControlLabel from '../../../components/FormControlLabel/FormControlLabel';
import FormLabel from '../../../components/FormLabel/FormLabel';
import Grid from '../../../components/Grid/Grid';
import InputAdornment from '../../../components/Input/InputAdornment';
import Radio from '../../../components/Radio/Radio';
import RadioGroup from '../../../components/RadioGroup/RadioGroup';
import TextInput from '../../../components/TextInput/TextInput';
import Typography from '../../../components/Typography/Typography';

const StyledDatePicker = styled(DatePicker)`
  > div {
    align-items: unset;
  }
`;

const StyledGenderFormLabel = styled(FormLabel)`
  margin-top: 12px;
`;

const StyledGenderRadioGroup = styled(RadioGroup)`
  && {
    flex-direction: row;
  }
`;

export function PatientDemographicsSubform(props) {
  const { formik } = props;
  const { setFieldValue } = formik;

  return (
    <React.Fragment>
      <Typography variant="title">Demographics</Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Field
            name="firstName"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="firstName"
                label="First name"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="middleName"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="middleName"
                label="Middle name"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="lastName"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="lastName"
                label="Last name"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="gender"
            render={({ field, form: { values } }) => (
              <FormControl>
                <StyledGenderFormLabel>Gender</StyledGenderFormLabel>
                <StyledGenderRadioGroup
                  {...field}
                  aria-label="Gender"
                  value={values.gender}
                  onChange={event =>
                    setFieldValue(field.name, event.target.value)
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                </StyledGenderRadioGroup>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="birthdate"
            render={({ field }) => (
              <StyledDatePicker
                {...field}
                autoOk
                id="birthdate"
                label="Date of Birth"
                margin="normal"
                onChange={date => setFieldValue(field.name, date)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DateRangeIcon />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="weight"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="weight"
                label="Weight"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="height"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="height"
                label="Height"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="healthCard"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="healthCard"
                label="Health Card"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="emergencyContact"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="emergencyContact"
                label="Emergency Contact"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="address"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="address"
                label="Address"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="phone"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="phone"
                label="Phone"
                margin="normal"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Field
            name="bloodType"
            render={({ field }) => (
              <TextInput
                {...field}
                fullWidth
                id="bloodType"
                label="Blood Type"
                margin="normal"
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

PatientDemographicsSubform.propTypes = {
  formik: PropTypes.object.isRequired
};

export default PatientDemographicsSubform;
