import { Global } from '@emotion/react';

export function GridItemStyle () {
  return (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  );
}
