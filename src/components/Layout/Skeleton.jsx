import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={170}
    height={300}
    viewBox="0 0 180 300"
    backgroundColor="#f9cdb4"
    foregroundColor="#fe5e00"
    {...props}
  >
    <rect x="0" y="0" rx="28" ry="28" width="170" height="164" />
    <rect x="0" y="176" rx="11" ry="11" width="86" height="44" />
    <rect x="0" y="237" rx="15" ry="15" width="170" height="47" />
  </ContentLoader>
);
