import Image from 'next/image';
import { Avatar } from '@/src/shared/components';
import { AboutContent } from './styles/About.styled';

export default function About() {
  return (
    <AboutContent flex center direction="column">
      <Avatar src="/stranger-codes.jpeg" alt="Stranger codes mug" priority variant="large" />
    </AboutContent>
  );
}
