import { useState } from 'react';

const Image = ({ src, alt, ...rest }) => {
  const [isError, setIsError] = useState(false);

  return (
    <img
      src={
        isError
          ? 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg'
          : src
      }
      alt={alt}
      onError={() => setIsError(true)}
      {...rest}
    />
  );
};

export default Image;
