import Image from 'next/image';
import { Avatar } from '@/src/shared/components';
import { AboutContent } from './styles/About.styled';

export default function About() {
  return (
    <AboutContent flex center>
      <Avatar
        src="/stranger-codes.jpeg"
        alt="Stranger codes mug"
        width={180}
        height={37}
        priority
        variant="large"
      />
    </AboutContent>
  );
}
