import { useRouter } from 'next/router';
import { useCommunitySettingsQuery } from './types';

export const useCommunity = () => {
  const router = useRouter();

  const communityName =
    typeof router.query?.['community'] === 'string'
      ? router.query?.['community']
      : '';

  const communityQuery = useCommunitySettingsQuery({
    variables: { name: communityName },
    skip: !communityName,
  });
  const communitySettings = communityQuery?.data?.communitySettings;
  const communityId = communitySettings?.id || '';

  return { communitySettings, communityId };
};
