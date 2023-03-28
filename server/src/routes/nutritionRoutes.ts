import express from "express"
import { getNutrition, getNutritions, postNutrition, updateNutrition, deleteNutrition } from '../controllers/nutritionControllers'


const router = express.Router();


router.get('/findOne', getNutrition)
router.get('/', getNutritions)
router.post('/', postNutrition)
router.put('/:id', updateNutrition)
router.delete('/:id', deleteNutrition)

export const routes = router