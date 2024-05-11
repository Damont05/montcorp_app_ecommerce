
import { Response } from  'express';

const handleHttp = (res:Response, error:string, status:number) => {
    res.status(status);
    res.send({error});
}

export {handleHttp}