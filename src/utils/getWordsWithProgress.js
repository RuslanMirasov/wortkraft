const getWordsWithProgress = (user, worsd) => {
  const wordsWithProgress = worsd
    .map(word => {
      const userProgress = user ? user.progress.find(progress => progress.id === word._id) : null;
      return userProgress ? { ...word, points: userProgress.points } : { ...word, points: 0 };
    })
    .sort((a, b) => b.points - a.points);

  return wordsWithProgress;
};

export default getWordsWithProgress;
