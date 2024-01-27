export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmmout = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmmout; //start at first jump
    for (; i < breaks.length; i += jumpAmmout) {
        if (breaks[i]) {
            break;
        }
    }

    //find the point where it breaks, we jump back sqrt(n) then we walk forward sqrt(n)
    i -= jumpAmmout; // jumped back sqrt(n)

    //walk forward sqrt(n)
    for (let j = 0; j <= jumpAmmout && i < breaks.length; j++, ++i) {
        if (breaks[i]) {
            return i; //index where it breaks
        }
    }
    return -1;
}
