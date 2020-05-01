import React from 'react';
import { StateContext } from '../Layout';

const Context_Input = (props) => {
  const resourceName = React.useContext(StateContext);

  const handleChange = (e) => {
    resourceName.namehandler(e.target.value);
  };

  return (
    <div>
        <input value={resourceName.name} onChange={handleChange} />
    </div>
  );
};

export default Context_Input;
