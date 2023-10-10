import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { Goal } from '@interfaces/goals.interface';

@Service()
export class GoalService {
  public goal = new PrismaClient().goal;

  public async findAllGoalByPlayerId({
    limit,
    playerId,
    cursor,
  }: {
    limit: number;
    playerId: number;
    cursor?: number | null;
  }): Promise<{ playerGoals: Goal[]; nextCursor: number }> {
    const playerGoals: Goal[] = await this.goal.findMany({
      take: limit || undefined,
      skip: cursor ? 1 : undefined,
      cursor: cursor ? { id: cursor } : undefined,
      where: { playerId },
      orderBy: { goal: 'asc' },
    });
    let nextCursor: typeof cursor | undefined = undefined;
    if (playerGoals.length >= (limit || undefined)) {
      const lastGoalInResult = playerGoals.at(-1);
      nextCursor = lastGoalInResult?.id;
    }

    return { playerGoals, nextCursor };
  }

  public async findLastGoalByPlayerId(playerId: number): Promise<Goal> {
    const lastGoal: Goal = await this.goal.findFirst({
      where: { playerId },
      orderBy: {
        goal: 'desc',
      },
    });
    return lastGoal;
  }
}
