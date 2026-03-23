import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send an email to Tae',
};

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/tae0822' },
  { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/tae0822/' },
  { icon: <FaDev />, url: 'https://dev.to/_988ff44817442e0deb654' },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p className="text-lg">jopd456@gmail.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-yellow-400'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
