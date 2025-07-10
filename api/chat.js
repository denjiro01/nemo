export default async function handler(req, res) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data });
  }

  res.status(200).json(data);
}
