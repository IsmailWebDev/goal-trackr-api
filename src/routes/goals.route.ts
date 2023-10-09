import { Router } from 'express';
import { GoalController } from '@/controllers/goals.controller';
import { Routes } from '@interfaces/routes.interface';

export class GoalRoute implements Routes {
  public path = '/goals';
  public router = Router();
  public player = new GoalController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/:id(\\d+)`, this.player.getGoalsByPlayerId);
    this.router.get(`${this.path}/:id(\\d+)/latest`, this.player.getLastGoalByPlayerId);
  }
}
