import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  emotion: string;
};

const emotions = [
  "happy",
  "excited",
  "sad",
  "surprised",
  "tired",
  "angry",
  "bored",
  "default",
];

const getEmotion = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * emotions.length);
      res(emotions[randomIndex]);
    }, 4000);
  });
};

export async function GET(req: Request) {
  const emotion = await getEmotion();
  return Response.json({
    success: true,
    emotion: emotion,
  });
}

export const revalidate = 0;
