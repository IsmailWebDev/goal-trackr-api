import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { Player } from '@/interfaces/players.interface';
import { PlayerService } from '@/services/players.service';

export class PlayerController {
  public player = Container.get(PlayerService);

  public getPlayers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPlayersData: Player[] = await this.player.findAllPlayer();

      res.status(200).json({ data: findAllPlayersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPlayerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const playerId = Number(req.params.id);
      const findOnePlayerData: Player = await this.player.findPlayerById(playerId);

      res.status(200).json({ data: findOnePlayerData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}
