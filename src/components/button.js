import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
    const {title, themeSetter, id} = props;
  return (
    <Button id={id} className="themeButtons" onClick={themeSetter}></Button>
  );
};
