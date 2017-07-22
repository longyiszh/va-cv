import { Router, Request, Response } from 'express';


const router = Router();

//const { mgInstance, mimConstr } = require('../dataAccess');


/* GET api listing. */
router.get('/', (req: Request, res: Response) => {
  res.send('api works');
});


export const api = router;

