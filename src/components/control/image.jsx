import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import { memo } from 'react';

const Image = (props) => {
  const websiteName = 'Thảo Nguyên Store';

  const {
    w,
    h,
    fit = 'cover',
    src,
    alt,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority,
    title,
    ...rest
  } = props;

  return (
    <Box pos="relative" w={w} h={h} overflow="hidden" title={title} {...rest}>
      <NextImage
        src={src}
        fill
        quality={100}
        priority={priority}
        alt={alt ? `${alt} ${websiteName}` : websiteName}
        style={{ objectFit: fit }}
        sizes={sizes}
      />
    </Box>
  );
};

export default memo(Image);
