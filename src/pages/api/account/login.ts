import cookie from "cookie";
import { API_URL } from "../../../config";
import type { NextApiRequest, NextApiResponse } from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const body = JSON.stringify({
      username,
      password,
    });

    try {
      const apiRes = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });

      console.log("Api Res Data" + JSON.stringify(apiRes.json()));
      console.log("Body being parsed" + JSON.stringify(body));

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        //@todo - SetCookie
        res.setHeader("Set-Cookie", [
          cookie.serialize("access", data.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60, // 1 hour
            path: "/api/",
          }),
          cookie.serialize("refresh", data.refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24, // 1 day
            sameSite: "strict",
            path: "/api/",
          }),
        ]);
        return res.status(200).json({ success: "User Logged in successfully" });
      } else {
        return res
          .status(apiRes.status)
          .json({ error: "Authentication failed" });
      }
    } catch (error) {
      return res.status(500).json({
        error: "Something went wrong when authenticating",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
