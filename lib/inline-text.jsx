// Tiny inline-markdown renderer: turns **bold** and `code` spans inside a
// plain string into React nodes, without pulling in a full markdown parser.
const INLINE_PATTERN = /(\*\*.+?\*\*|`.+?`)/g;

export const renderInlineText = (text) => {
  return text.split(INLINE_PATTERN).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
};
