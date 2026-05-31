import React, { useState, useEffect } from 'react';

import { Animate } from 'react-move';

const AnimatedProgressProvider = (props) => {
  const { duration, valueStart, valueEnd, easingFunction, children } = props;

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: isAnimated ? valueEnd : valueStart,
        timing: {
          duration: duration * 10,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
