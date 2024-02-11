export abstract class Stats {
    maxHp: number;
    /**Hp stat for health*/
    hp: number;
    /**Attack stat*/
    atk: number;


    protected constructor(hp: number, atk: number) {
        this.hp = hp;
        this.maxHp = hp;
        this.atk = atk;
    }
}