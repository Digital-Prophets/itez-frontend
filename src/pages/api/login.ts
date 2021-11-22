import { config } from "../../config";
import type { NextApiRequest, NextApiResponse } from "next"; /* 
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data); */

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST ") {
    const { username, password } = req.body;

    const apiRes = await fetch(`${config.ITEZ_API_URI}/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await apiRes.json();

    if (apiRes.ok) {
      //@todo - SetCookie
      res.status(200).json({ user: data.user });
    } else {
      res.status(apiRes.status).json({ error: data.error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
