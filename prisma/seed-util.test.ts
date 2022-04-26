import { prismaMock } from "../lib/prisma-mock";
import { getSeedUsernames, userData } from "./seed-util";

describe('Seed', () => {
  it('should return the names of the users to seed', () => {
    expect(getSeedUsernames(userData)).toStrictEqual(['Alice', 'Nilu', 'Mahmoud'])
  });
});
