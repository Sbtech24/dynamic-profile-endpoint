import axios from "axios";
import type { Request, Response, NextFunction } from "express";

export async function AboutMe(req: Request, res: Response, next: NextFunction) {
  const date = new Date().toISOString();

  const getRandomFact = async () => {
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      const fact = res.data.fact;
      return fact;
    } catch (error) {
      throw new Error();
    }
  };

  const user = {
    email: "bajomosemilore@gmail.com",
    name: "Oluwasemilore Bajomo",
    Stack: "Node js,Typescipt, Postgresql",
  };

  res.status(200).json({
    status: "success",
    user,
    timestamp: date,
    fact: await getRandomFact(),
  });
}
