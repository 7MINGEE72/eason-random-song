export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const target = `https://meting-api.vercel.app/api?${params.toString()}`;
  const res = await fetch(target, {
    headers: { "User-Agent": "MetingJS" }
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
