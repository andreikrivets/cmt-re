const getFull = async (site, entry) => {
  const urls = [
    "https://api.tjournal.ru/v1.9/entry/",
    "https://api.vc.ru/v1.9/entry/",
    "https://api.dtf.ru/v1.9/entry/",
  ];
  const currentSite = urls[+site];
  const res = await fetch(`${currentSite}${entry}`);
  const json = await res.json();
  return json.result;
};

export default getFull;
