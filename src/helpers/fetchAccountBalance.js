export const fetchAccountBalance = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: 'GET',
    headers: {
      'X-Token': import.meta.env.VITE_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  const balance = Math.floor(data.jars[0].balance / 100);
  return balance;
};
