import { getCryptoData } from "../utils/cryptoLogic";

export default async function MarketTrends() {
  let rate = null;
  let error = null;

  try {
    const data = await getCryptoData("BTC", "USD");
    rate = data.rate;
  } catch (err) {
    error = "Failed to fetch crypto rate.";
  }

  return (
    <div>
      <h2>Market Trends</h2>
      {rate ? (
        <p>BTC to USD: ${rate.toFixed(2)}</p>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
}