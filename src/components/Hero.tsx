import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../public/images/profile.jpg';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Picture of the author'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Tae"}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>Building modern web apps & experiences</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
