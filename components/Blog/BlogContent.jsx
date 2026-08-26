import Image from 'next/image';

import styles from './BlogContent.module.css';
import { getImageUrl } from '../../lib/utils';
import { renderInlineText } from '../../lib/inline-text';

const ListItem = ({ item }) => {
  if (typeof item === 'string') {
    return <li>{renderInlineText(item)}</li>;
  }
  return (
    <li>
      {renderInlineText(item.text)}
      {item.sublist && (
        <ul className={styles.sublist}>
          {item.sublist.map((sub, index) => (
            <li key={index}>{renderInlineText(sub)}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export const BlogContent = ({ content }) => {
  return (
    <div className={styles.prose}>
      {content.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2 key={index} className={styles.heading}>
              {renderInlineText(block.text)}
            </h2>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p key={index} className={styles.paragraph}>
              {renderInlineText(block.text)}
            </p>
          );
        }

        if (block.type === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul';
          return (
            <ListTag
              key={index}
              className={styles.list}
              data-ordered={block.ordered || undefined}>
              {block.items.map((item, itemIndex) => (
                <ListItem key={itemIndex} item={item} />
              ))}
            </ListTag>
          );
        }

        if (block.type === 'code') {
          return (
            <pre key={index} className={styles.code}>
              <code>{block.code}</code>
            </pre>
          );
        }

        if (block.type === 'image') {
          return (
            <figure key={index} className={styles.figure}>
              <Image
                className={styles.image}
                src={getImageUrl(block.src)}
                alt={block.alt}
                width={block.width}
                height={block.height}
                sizes='(max-width: 760px) 100vw, 720px'
              />
              {block.caption && (
                <figcaption className={styles.caption}>
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
};
