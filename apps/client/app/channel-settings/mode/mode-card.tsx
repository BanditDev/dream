import React from 'react';
import clsx from 'clsx';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';

type Props = {
  mode: any;
  active: boolean;
  openSettings: () => void;
  makeCurrent: () => void;
};

export const ChannelSettingsModeCard = ({
  mode,
  active,
  openSettings,
  makeCurrent,
}: Props) => {
  return (
    <div
      className={clsx(
        'flex overflow-hidden items-center justify-center cursor-pointer',
        'bg-background rounded-md',
        'border-x-4',
        active ? mode?.borderColor : ' border-transparent',
      )}
      onClick={makeCurrent}
    >
      <div className="w-full bg-background flex items-center relative">
        <div className="flex flex-col px-2">
          <span className="text-sm text-white font-medium">{mode?.title}</span>
          <span className="text-xs text-accent">{mode?.description}</span>
        </div>
      </div>
      <div className="flex items-center justify-end w-full p-2">
        {active && (
          <CheckCircleIcon
            className={clsx('h-5 absolute right-24', mode?.color)}
          />
        )}
        <button
          className="btn mr-2"
          onClick={(e) => {
            e.stopPropagation();
            openSettings();
          }}
        >
          <Cog6ToothIcon className="h-4 text-accent" />
        </button>
      </div>
    </div>
  );
};