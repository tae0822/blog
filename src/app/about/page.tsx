import Hero from '@/components/Hero';
import BadgeList from '@/components/UI/BadgeList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Tae's information`,
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 dark:text-gray-800 mt-2';
const SUBTITLE_CLASS = 'text-lg font-bold my-2 md:text-xl !text-gray-800'

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <div className="w-[150px] border-2 mx-auto mb-2"/>
        <p className="text-black mb-6 text-md">
          A passionate full-stack developer <br />
          Building web apps that combine people and design.<br/>
          I care deeply about both user experience and writing clean, maintainable code.
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <div className="w-[120px] border-2 mx-auto mb-2"/>
        <div className="flex flex-col items-center">
        	<div> <p className={SUBTITLE_CLASS}>- Frontend :</p> <BadgeList items="React, Next.js, TypeScript, Tailwind CSS, PostCSS, HTML5, CSS3" size="small" /></div>
          <div> <p className={SUBTITLE_CLASS}>- Backend :</p> <BadgeList items="Node.js, Express, Firebase" size="small" /> </div>
          <div> <p className={SUBTITLE_CLASS}>- Tools & Others :</p> <BadgeList items="Git, GitHub, Vite, Sanity CMS, Cloudinary" size="small" /></div>
          <div> <p className={SUBTITLE_CLASS}>- Soft Skills :</p> <BadgeList items="Problem-solving, UI/UX Sense, Fast Learning" size="small" /></div>
        </div>
      </section>
    </>
  );
}
