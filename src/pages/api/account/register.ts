import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../../config/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, username, name, password, roles } = req.body;

    const body = JSON.stringify({
      email,
      username,
      name,
      password,
      roles,
    });

    try {
      const apiRes = await axios.post(`${config.ITEZ_API_URI}/api/users/`, {
        method: "POST",
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.data();

      if (apiRes.status === 201) {
        //@todo - SetCookie
        return res.status(201).json({ success: data.success });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (error) {
      return res.status(500).json({
        error: "Something went wrong when registering a user",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
