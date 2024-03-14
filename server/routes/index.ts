import {Router} from "express";

// export const router = new (Router as any)();
export const router = Router();

router.use('/user');
router.use('/type');
router.use('/brand');
router.use('/device');
