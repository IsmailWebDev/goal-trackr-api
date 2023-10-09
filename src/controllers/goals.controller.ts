import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Goal } from '@/interfaces/goals.interface';
import { GoalService } from '@/services/goals.service';

export class GoalController {
  public goal = Container.get(GoalService);

  public getGoalsByPlayerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const playerId = req.params.id;
      const { limit, cursor } = req.query;
      const findAllGoalsByPlayerIdData: { playerGoals: Goal[]; nextCursor: number } = await this.goal.findAllGoalByPlayerId({
        limit: Number(limit),
        playerId: Number(playerId),
        cursor: Number(cursor),
      });

      res.status(200).json({ data: findAllGoalsByPlayerIdData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getLastGoalByPlayerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const playerId = Number(req.params.id);
      const findLastGoalData: Goal = await this.goal.findLastGoalByPlayerId(playerId);

      res.status(200).json({ data: findLastGoalData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}
