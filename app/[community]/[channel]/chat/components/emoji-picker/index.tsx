import React from 'react';

export const EmojiPicker: React.FC<{ onSelect: (alias: string) => void }> = ({
  onSelect,
}) => {
  //   const { communityId } = useCommunityChannel();

  //   const emojisQuery = useEmojisQuery({
  //     variables: { communityId },
  //     skip: !communityId,
  //   });

  //   const emojis = emojisQuery?.data?.emojis || [];
  const emojis: any[] = [];

  return (
    <div className="flex px-1">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          onClick={() => onSelect(emoji.alias)}
          className="p-1 m-1 hover:bg-zinc-900 rounded cursor-pointer"
        >
          <img
            className="w-6 h-6 object-contain"
            alt=""
            src={`https://cdn.sgmn.dev/emojis/${emoji.id}.${
              emoji.type.split('/')[1]
            }`}
          />
        </div>
      ))}
    </div>
  );
};
