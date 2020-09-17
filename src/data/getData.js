const url = "https://api.rss2json.com/v1/api.json?rss_url=";

const getData = async (site) => {
  const urls = [
    "https%3A%2F%2Ftjournal.ru%2Frss%2F",
    "https%3A%2F%2Fvc.ru%2Frss%2F",
    "https%3A%2F%2Fdtf.ru%2Frss%2F",
  ];
  const currentSite = urls[+site];
  const res = await fetch(`${url}${currentSite}`);
  const json = await res.json();
  return json;
};

export default getData;
