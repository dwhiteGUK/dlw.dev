import Image from 'next/image';
import { Heading1, Heading2, Paragraph, aHref, FSImage } from '~/components';

const MdxComponents = {
  FSImage,
  Image,
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  a: aHref,
};

export default MdxComponents;
