import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { HttpException } from '@/exceptions/httpException';
import { Player } from '@/interfaces/players.interface';

@Service()
export class PlayerService {
  public player = new PrismaClient().player;

  public async findAllPlayer(): Promise<Player[]> {
    const allPlayer: Player[] = await this.player.findMany();
    return allPlayer;
  }

  public async findPlayerById(playerId: number): Promise<Player> {
    const findPlayer: Player = await this.player.findUnique({ where: { id: playerId } });
    if (!findPlayer) throw new HttpException(409, "Player doesn't exist");

    return findPlayer;
  }
}
