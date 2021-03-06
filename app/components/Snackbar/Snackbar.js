import React from 'react';
import PropTypes from 'prop-types';
import MUISnackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import IconButton from '../IconButton/IconButton';

Snackbar.propTypes = {
  vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node
};

Snackbar.defaultProps = {
  vertical: 'bottom',
  horizontal: 'left',
  children: <CloseAction />
};

export function Snackbar(props) {
  const { vertical, horizontal } = props;

  return (
    <MUISnackbar
      {...props}
      anchorOrigin={{ vertical, horizontal }}
      action={[props.children]}
    />
  );
}

function CloseAction() {
  return (
    <IconButton key="close" color="inherit">
      <CloseIcon />
    </IconButton>
  );
}

export default Snackbar;
