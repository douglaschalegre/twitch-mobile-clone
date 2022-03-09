import { ReactNode } from 'react';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
  StreamerViewers,
  RedCircle,
  Info,
  RightSide,
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

function StreamList() {
  const StreamItem: React.FC<ItemProps> = ({ item }) => (
    <StreamContainer>
      <RightSide>
        <StreamThumbnail source={item.source} />
        <StreamerViewers>
          <RedCircle />
          <Info>{item.viewers}</Info>
        </StreamerViewers>
      </RightSide>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>{item.name}</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            {item.description}
          </StreamDescription>
          <StreamCategory>{item.category}</StreamCategory>
        </StreamRow>

        <TagRow>
          {item.tags.map((tagName) => (
            <TagView>
              <TagText>{tagName}</TagText>
            </TagView>
          ))}
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      {data.map((item) => (
        <StreamItem key={item.name} item={item} />
      ))}
    </List>
  );
}

export default StreamList;
