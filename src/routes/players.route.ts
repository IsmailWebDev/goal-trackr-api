import { Router } from 'express';
import { PlayerController } from '../controllers/players.controller';
import { Routes } from '@interfaces/routes.interface';

export class PlayerRoute implements Routes {
  public path = '/players';
  public router = Router();
  public player = new PlayerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.player.getPlayers);
    this.router.get(`${this.path}/:id(\\d+)`, this.player.getPlayerById);
  }
}
