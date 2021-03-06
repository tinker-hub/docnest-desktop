import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './';

const placeholderText = 'Button';

storiesOf('Button/Text', module)
  .add('default', () => <Button>{placeholderText}</Button>)
  .add('primary', () => <Button color="primary">{placeholderText}</Button>)
  .add('secondary', () => <Button color="secondary">{placeholderText}</Button>)
  .add('disabled', () => <Button disabled>{placeholderText}</Button>);

storiesOf('Button/Contained', module)
  .add('default', () => <Button variant="contained">{placeholderText}</Button>)
  .add('primary', () => (
    <Button variant="contained" color="primary">
      {placeholderText}
    </Button>
  ))
  .add('secondary', () => (
    <Button variant="contained" color="secondary">
      {placeholderText}
    </Button>
  ))
  .add('disabled', () => (
    <Button variant="contained" disabled>
      {placeholderText}
    </Button>
  ));

storiesOf('Button/Fab', module)
  .add('default', () => <Button variant="fab"> {placeholderText} </Button>)
  .add('primary', () => (
    <Button variant="fab" color="primary">
      {' '}
      {placeholderText}{' '}
    </Button>
  ))
  .add('secondary', () => (
    <Button variant="fab" color="secondary">
      {' '}
      {placeholderText}{' '}
    </Button>
  ))
  .add('disabled', () => (
    <Button variant="fab" disabled>
      {' '}
      {placeholderText}{' '}
    </Button>
  ));
