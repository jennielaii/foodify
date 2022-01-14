export const fetchData = (url) => {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error("Somethign went wrong");

    return res.json();
  });
};
