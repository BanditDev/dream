import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const ChannelItem: React.FC<{
  title: string;
  name?: string;
  state?: string;
  online?: number;
}> = ({ name, title, state, online }) => {
  const router = useRouter();
  const community = router.query?.community;
  const channel = router.query?.channel;

  return (
    <div className="mx-2 my-1">
      <Link href={name ? `/${community}/${name}` : `/${community}`}>
        <div
          className={clsx(
            'flex items-center flex-1 w-full h-11',
            'px-4 py-1',
            'cursor-pointer',
            'hover:bg-surface-light',
            'rounded',
            name === channel && 'bg-surface-light'
          )}
        >
          <div className="flex flex-col flex-1">
            <div className="flex flex-1">
              <span className="text-white text-sm">{title}</span>
            </div>
            <div className="flex flex-1">
              <span className="text-accent text-xs">{state}</span>
            </div>
          </div>

          {typeof online === 'number' && (
            <div>
              <span className="text-accent text-xs rounded bg-backgorud px-2 py-1">
                {online}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
