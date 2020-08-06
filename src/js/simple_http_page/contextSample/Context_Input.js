import React from 'react';
import { StateContext } from '../Layout';

export default (props) => {
  const resourceName = React.useContext(StateContext);

  const handleChange = (e) => {
    resourceName.namehandler(e.target.value);
  };

  return (
    <>
        <input id="itemC"value={resourceName.name} onChange={handleChange} />
    </>
  );
};


