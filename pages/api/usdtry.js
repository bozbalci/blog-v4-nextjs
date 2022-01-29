// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const usdToTry = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=USD&symbols=TRY"
    );

    const data = await response.json();

    res.status(200).json({ usdtry: data.rates.TRY });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default usdToTry;
