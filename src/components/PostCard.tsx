import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import BadgeList from './UI/BadgeList';

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden  shadow-md hover:shadow-xl hover:scale-95 transition-all border-transparent dark:bg-slate-800 dark:border-gray-700 dark:hover:bg-slate-700'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4 border-t-2'>
          <time className='self-end text-gray-700 dark:text-gray-400'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center mb-2'>{description}</p>
          <BadgeList
            items={category}
            size="small"
          />
        </div>
      </article>
    </Link>
  );
}
