import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const url =
      "https://publish.twitter.com/oembed?url=https://twitter.com/SaudiBanks";
    const response = await axios.get(url);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    // res.status(500).send("Error fetching Twitter data");
  }

  //   return NextResponse.json({ revalidated: true, now: Date.now() });
}
