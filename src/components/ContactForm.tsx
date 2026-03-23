'use client';

import { sendContactEmail } from '@/service/contact';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({
          message: 'Your email has been sent successfully.',
          state: 'success',
        });
        setForm(DEFAULT_DATA);
      })
      .catch((error) => {
        setBanner({
          message: 'Failed to send the email. Please try again.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className='w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white'
      >
        <label htmlFor='from' className='font-semibold'>
          Your Email
        </label>
        <input
          type='email'
          id='from'
          name='from'
          className="outline-none p-1 text-black dark:text-white"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject' className='font-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          className="outline-none p-1 text-black dark:text-white"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          className="outline-none p-1 text-black dark:text-white"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className='bg-yellow-300 text-black font-bold hover:bg-yellow-400 p-2 rounded-md'>
          Submit
        </button>
      </form>
    </section>
  );
}
