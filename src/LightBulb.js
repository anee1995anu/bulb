import React, { useState } from 'react';

const LightBulb = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <div className={`bulb ${isOn ? 'on' : 'off'}`}></div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default LightBulb;