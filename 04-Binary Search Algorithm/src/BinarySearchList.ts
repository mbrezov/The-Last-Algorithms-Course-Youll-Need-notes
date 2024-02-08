export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2); // middle point of array
        const v = haystack[m]; // setting pointer to the middle of the array

        if (v === needle) {
            return true;
        } else if (v > needle) {
            // right-hand side is greater than the needle, so reducing the high side to that point and excluding the middle
            hi = m;
        } else {
            lo = m + 1; // +1 as we don't need to consider the midpoint as we know that it's not the right value
        }
    } while (lo < hi); // do it till pointers get to the same point (collapse)

    return false;
}
