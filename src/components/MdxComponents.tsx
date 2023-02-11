// import Image from 'next/image';
// import { FSImage } from '~/components';
import { aHref } from '~/components/typography/aHref';
import { Heading1 } from '~/components/typography/Heading1';
import { Heading2 } from '~/components/typography/Heading2';
import { Paragraph } from '~/components/typography/Paragraph';

const MdxComponents = {
  // FSImage,
  // Image,
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  a: aHref,
};

export default MdxComponents;
