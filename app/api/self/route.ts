import type { NextApiRequest, NextApiResponse } from "next";

enum Emotions {
  happy = "happy",
  excited = "excited",
  sad = "sad",
  surprised = "surprised",
  tired = "tired",
  angry = "angry",
  bored = "bored",
  default = "default",
}

type ResponseData = {
  success: boolean;
  emotion: Emotions;
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

export async function POST(req: Request) {
  const emotion = await getEmotion();
  return Response.json({
    success: true,
    emotion: emotion,
  } as ResponseData);
}

export const revalidate = 0;
