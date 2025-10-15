import axios from "axios";
import type { Request, Response, NextFunction } from "express";

export async function AboutMe(req: Request, res: Response, next: NextFunction) {
    try{

          const date = new Date().toISOString();

  const getRandomFact = async () => {
    try {
      const res = await axios.get("https://catfact.ninja/fact",{
        timeout:5000  // 5 seconds 
      });
      const fact = res.data.fact;
      return fact;
    } catch (error) {
        console.log(error)
        const message = "Error displaying fact,Please try again Later"
        return message
      ;
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

    }catch(error){
        res.status(400).json({status:"Bad Request"})
        next()
    }


}
