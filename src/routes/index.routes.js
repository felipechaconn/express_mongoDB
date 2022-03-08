//This import is a function to avoid call app again.
import {Router} from 'express'

//Execute Router
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello Mundo");
  });



//Export this routes
export default router;