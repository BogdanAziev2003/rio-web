import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    backgroundColor="#ffffff"
    foregroundColor="#d4d3d3"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="162" height="110" />
    <rect x="10" y="120" rx="0" ry="0" width="57" height="13" />
    <rect x="10" y="140" rx="0" ry="0" width="82" height="15" />
    <rect x="5" y="170" rx="0" ry="0" width="142" height="28" />
  </ContentLoader>
);
