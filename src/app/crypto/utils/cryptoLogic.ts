export const getCryptoData = async (coin: string, currency: string) => {
  const API_KEY = process.env.CRYPTO_KEY!;
  const baseUrl = "https://rest.coinapi.io/";

  const res = await fetch(`${baseUrl}v1/exchangerate/${coin}/${currency}`, {
    headers: {
      'X-CoinAPI-Key': API_KEY,
    },
    // disable cache to always fetch fresh data (optional)
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error(`CoinAPI request failed with status: ${res.status}`);
  }

  return res.json() as Promise<{ rate: number }>;
};