import Image from 'next/image';
import { FSImage } from '~/components';
import { aHref, Heading1, Heading2, Paragraph } from '~/components/typography';

const MdxComponents = {
  FSImage,
  Image,
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  a: aHref,
};

export default MdxComponents;
