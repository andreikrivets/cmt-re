const getRandomImage = async () => {
  const req = await fetch("https://picsum.photos/1000");
  return req.url;
};

export default getRandomImage;
