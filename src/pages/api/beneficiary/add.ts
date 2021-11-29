import axios from "axios";

import { API_URL } from "../../../config";
import type { NextApiRequest, NextApiResponse } from "next";

// request method to add a beneficiary
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { firstName, lastName, email } = req.body;

    const body = JSON.stringify({
      firstName,
      lastName,
      email,
    });

    try {
      const apiRes = await axios.post(
        `${API_URL}/api/beneficiaries/create`,
        body
      );

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
        error: "Something went wrong when adding a beneficiary",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
