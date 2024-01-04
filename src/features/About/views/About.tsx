import Image from 'next/image';
import { Avatar } from '@/src/shared/components';
import { AboutContent } from '../styles/About.styled';

export default function About() {
  return (
    <AboutContent flex center direction="column">
      <Avatar src="/profile.jpg" alt="Ramon's funko" priority variant="large" />
    </AboutContent>
  );
}
