import Image from 'next/image';
import { Heading1, Heading2, Paragraph, aHref } from '~/components';

const MdxComponents = {
  Image,
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  a: aHref,
};

export default MdxComponents;
