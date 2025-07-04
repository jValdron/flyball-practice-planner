import { Resolver, Query, Mutation, Arg, Ctx, UseMiddleware } from 'type-graphql';
import { Club } from '../models/Club';
import { AppDataSource } from '../db';
import { In } from 'typeorm';
import { PubSubService, SubscriptionEvents } from '../services/PubSubService';
import { AuthContext, isAuth, hasClubAccess, createClubFilter } from '../middleware/auth';

@Resolver(Club)
export class ClubResolver {
  private clubRepository = AppDataSource.getRepository(Club);

  @Query(() => [Club])
  @UseMiddleware(isAuth)
  async clubs(@Ctx() { user }: AuthContext): Promise<Club[]> {
    if (!user || user.clubIds.length === 0) {
      throw new Error('Access denied: You are not a member of any clubs');
    }

    return await this.clubRepository.find({
      where: { id: In(user.clubIds) },
      relations: ['dogs', 'handlers', 'locations']
    });
  }

  @Query(() => Club, { nullable: true })
  @UseMiddleware(isAuth, hasClubAccess)
  async club(@Arg('id') id: string): Promise<Club | null> {
    return await this.clubRepository.findOne({
      where: { id },
      relations: ['dogs', 'handlers', 'locations']
    });
  }

  @Mutation(() => Club, { nullable: true })
  @UseMiddleware(isAuth, hasClubAccess)
  async updateClub(
    @Arg('id') id: string,
    @Arg('name', { nullable: true }) name?: string,
    @Arg('nafaClubNumber', { nullable: true }) nafaClubNumber?: string,
    @Arg('defaultPracticeTime', { nullable: true }) defaultPracticeTime?: string
  ): Promise<Club | null> {
    const club = await this.clubRepository.findOneBy({ id });
    if (!club) return null;

    Object.assign(club, {
      name: name ?? club.name,
      nafaClubNumber: nafaClubNumber ?? club.nafaClubNumber,
      defaultPracticeTime: defaultPracticeTime ?? club.defaultPracticeTime
    });

    const updatedClub = await this.clubRepository.save(club);

    await PubSubService.publishClubEvent(SubscriptionEvents.CLUB_UPDATED, updatedClub);

    return updatedClub;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth, hasClubAccess)
  async deleteClub(@Arg('id') id: string): Promise<boolean> {
    const club = await this.clubRepository.findOneBy({ id });
    if (!club) return false;

    const result = await this.clubRepository.delete(id);
    const deleted = result.affected !== 0;

    if (deleted) {
      await PubSubService.publishClubEvent(SubscriptionEvents.CLUB_DELETED, club);
    }

    return deleted;
  }
}
