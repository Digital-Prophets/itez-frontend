import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../config/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { first_name, last_name, email, password, userRole } = req.body;

    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      userRole,
    });

    try {
      const apiRes = await fetch(`${API_URL}/api/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        //@todo - SetCookie
        return res.status(200).json({ success: data.success });
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
