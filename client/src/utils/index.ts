export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatNumber = (num: number) => {
  const numbers = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
  ];
  return numbers[num] || num.toString();
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const containsEmojis = (text: string): boolean => {
  const emojiRegex =
    // eslint-disable-next-line no-misleading-character-class
    /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e0}-\u{1f1ff}\u{fe00}-\u{fe0f}\u{1f018}-\u{1f270}\u{238c}-\u{2454}\u{20d0}-\u{20ff}]/gu;
  return emojiRegex.test(text);
};
