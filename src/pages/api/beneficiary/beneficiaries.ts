import axios from "axios";

import { NextApiRequest, NextApiResponse } from "next";

import { API_URL } from "../../../config/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const apiRes = await axios.get(`${API_URL}/api/beneficiaries/`);

      const data = await apiRes.data();

      if (apiRes.status === 200) {
        return res.status(200).json({ success: data.success });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (error) {
      return res.status(500).json({
        error: "Something went wrong when getting all beneficiaries",
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
