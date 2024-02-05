import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={220}
    viewBox="0 0 200 300"
    backgroundColor="#f0f0f0"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="0" y="0" rx="28" ry="28" width="200" height="164" />
    <rect x="0" y="176" rx="11" ry="11" width="86" height="45" />
    <rect x="0" y="237" rx="15" ry="15" width="200" height="37" />
  </ContentLoader>
);
