export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  if (minutes < 1) {
    return "Less than 1 min read";
  } else if (minutes === 1) {
    return "1 min read";
  } else {
    return `${minutes} min read`;
  }
};
