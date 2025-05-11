'use client';

import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const RevealClient = (props) => {
  const { children, threshold = 0.4, pos, zIndex } = props;
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Box
      ref={ref}
      pos={pos}
      zIndex={zIndex}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      {children}
    </Box>
  );
};

export default RevealClient;
