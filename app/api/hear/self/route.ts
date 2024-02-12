import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  superHero: string;
};

const heros = [
  "Iron Man",
  "Spider Man",
  "Captain America",
  "Hulk",
  "Black Widow",
  "Iron Man",
];

const getHero = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * heros.length);
      res(heros[randomIndex]);
    }, 4000);
  });
};

export async function POST(req: Request) {
  const emotion = await getHero();
  return Response.json({
    success: true,
    superHero: emotion,
  } as ResponseData);
}

export const revalidate = 0;
