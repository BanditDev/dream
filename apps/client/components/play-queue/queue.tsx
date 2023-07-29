import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Bars4Icon } from '@heroicons/react/20/solid';

type Props = PropsWithChildren & {
  hidden?: boolean;
  addActionAccent?: boolean;
  addActionLabel: string;
  addActionModalLink: string;
  onSelect?: () => void;
};

export const Queue = ({
  hidden = false,
  children,
  addActionModalLink,
  addActionAccent,
  addActionLabel,
  onSelect = () => null,
}: Props) => (
  <div
    className={clsx(
      'flex flex-col shrink-0 justify-start py-2 overflow-hidden',
      !hidden && 'flex-1',
    )}
  >
    <div className="flex text-xs text-accent font-medium px-4 py-2 items-center">
      <Bars4Icon className="h-4 text-accent mr-2 opacity-50" />
      <span onClick={onSelect}>Queue</span>
      <Link href={addActionModalLink} passHref>
        <button
          className={clsx(
            'btn text-xs h-6 ml-auto',
            addActionAccent ? 'btn-primary' : 'btn-secondary bg-surface',
          )}
        >
          {addActionLabel}
        </button>
      </Link>
    </div>
    {!hidden && children}
  </div>
);
