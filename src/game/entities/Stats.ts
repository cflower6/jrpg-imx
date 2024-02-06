export abstract class Stats {
    /**Hp stat for health*/
    hp: number;
    /**Attack stat*/
    atk: number;

    protected constructor(hp: number, atk: number) {
        this.hp = hp;
        this.atk = atk;
    }
}