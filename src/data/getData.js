const url = "https://api.rss2json.com/v1/api.json?rss_url=";
const urls = [
  "https%3A%2F%2Ftjournal.ru%2Frss%2F",
  "https%3A%2F%2Fvc.ru%2Frss%2F",
  "https%3A%2F%2Fdtf.ru%2Frss%2F",
];

const fetchData = (site = 0) => {
  return fetch(`${url}${urls[site]}`)
    .then((res) => res.json())
    .then((json) => json);
};

export default fetchData;
