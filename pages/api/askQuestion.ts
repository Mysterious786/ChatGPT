// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//communicating to chatgpt created this file

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    //destructuring 
    const {prompt,chatId,model,session} = req.body;
    //if prompt and chatid not passed
    if(!prompt){
        res.status(400).json({answer:"Please provide a prompt!"})
        return ;
    }
    if(!chatId){
        res.status(400).json({answer:"Please provide a valid chat ID!"})
        return;
    }

    //if not then ChatGPT QUERY
    //CREATING QUERY FUNCTION
        const response = await query(prompt,chatId,model);
        //created lib folder
  res.status(200).json({ name: 'John Doe' })
}
