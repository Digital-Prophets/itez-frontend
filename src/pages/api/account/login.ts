import cookie from "cookie";
import { ITEZ_API_URI } from "../../../config";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Async Hit in Login");
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log("Body from API" + JSON.stringify(req.body));
    const body = JSON.stringify({
      email: username,
      password,
    });
    // console.log("Body after stringy" + body);
    try {
      console.log(body);
      let apiRes = await axios.post(`http://0.0.0.0:8000/login/`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      /*  let apiRes = await fetch("http://pm-user-api.herokuapp.com/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiRes.data.access}`,
        },
        body: body,
      }); */

      // console.log("Api Res Data" + JSON.stringify(apiRes.data));
      // console.log("Body being parsed" + JSON.stringify(body));
      // console.log("Response brought back" + JSON.stringify(apiRes.status));

      const data = await apiRes.data;

      console.log(data);

      // if (apiRes.status === 200) {
      //   //@todo - SetCookie
      //   res.setHeader("Set-Cookie", [
      //     cookie.serialize("access", data.access, {
      //       httpOnly: true,
      //       secure: process.env.NODE_ENV !== "development",
      //       maxAge: 60 * 60, // 1 hour
      //       path: "/api/",
      //     }),
      //     cookie.serialize("refresh", data.refresh, {
      //       httpOnly: true,
      //       secure: process.env.NODE_ENV !== "development",
      //       maxAge: 60 * 60 * 24, // 1 day
      //       sameSite: "strict",
      //       path: "/api/",
      //     }),
      //   ]);
      //   console.log("Cookie" + data.access);
      //   return res.status(200).json({ success: "User Logged in successfully" });
      // } else {
      //   return res
      //     .status(apiRes.status)
      //     .json({ error: "Authentication failed" });
      // }
    } catch (error) {
      return error;
      // return res.status(500).json({
      //   error: "Something went wrong when authenticating",
      // });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
