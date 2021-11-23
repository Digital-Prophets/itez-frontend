import { API_URL } from "../../../config";
import type { NextApiRequest, NextApiResponse } from "next"; /* 
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data); */

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST ") {
    const { username, password } = req.body;

    const body = JSON.stringify({
      username,
      password,
    });

    try {
      const apiRes = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        //@todo - SetCookie
        return res.status(200).json({ user: data.user });
      } else {
        return res.status(apiRes.status).json({ error: data.error });
      }
    } catch (error) {
      return res.status(500).json({
        error: "Login invalid: check credentials",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
