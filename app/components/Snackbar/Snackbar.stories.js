import React from 'react';
import { storiesOf } from '@storybook/react';

import Snackbar from './Snackbar';

// TODO: Fix snapshot tests - https://github.com/mui-org/material-ui/issues/10679

storiesOf('Snackbar', module).add('default', () => (
  <Snackbar message="Default Snackbar" open />
));

storiesOf('Snackbar/Position', module)
  .add('top-left', () => (
    <Snackbar
      message="Default Snackbar"
      open
      vertical="top"
      horizontal="left"
    />
  ))
  .add('bottom-right', () => (
    <Snackbar
      message="Default Snackbar"
      open
      vertical="bottom"
      horizontal="right"
    />
  ))
  .add('center-center', () => (
    <Snackbar
      message="Default Snackbar"
      open
      vertical="center"
      horizontal="center"
    />
  ));
