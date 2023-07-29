import { toSeconds } from 'apps/client/helpers/to-seconds';

export const getYoutubeVideo = async (
  videoId: string,
): Promise<{
  id: string;
  title: string;
  cover: string;
  duration_ms: number;
}> => {
  const params = new URLSearchParams();
  params.set('key', process.env.YOUTUBE_KEY as string);
  params.set('part', 'snippet, contentDetails');
  params.set('id', videoId);

  const query = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?${params.toString()}`,
  );

  const res = await query.json();

  return res.items.map(({ id, snippet, contentDetails }: any) => ({
    id,
    title: snippet.title,
    cover: snippet.thumbnails.default.url,
    duration_ms: toSeconds(contentDetails.duration) * 1000,
  }))?.[0];
};
