function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity); //Unvisited, we will visit every single seen and see if there is something that is false and its distance is less than infinity
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    //We will walk through all of our distances and see what its lowest distance and what has to be unseen node

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > dists[i]) {
            //found distance that is smaller
            lowestDistance = dists[i];
            idx = i; //lowest index
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false); //seen array, adj list, represents each one of nodes and their connection to other nodes
    const prev = new Array(arr.length).fill(-1); //for our way back
    const dists = new Array(arr.length).fill(Infinity); //distance array

    dists[source] = 0; //smallest distance possible, we are already at source, always is 0

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        //go through evey single edge
        const adjs = arr[curr]; //gives us list of our edges
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }
            //we need to calculate distance, it is the weight of the edge + my distance
            const dist = dists[curr] + edge.weight; //dists to this node from the node where we are at

            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    //walk our distance backward
    const out: number[] = [];
    let curr = sink; //sink = needle = where we want to go to

    while (prev[curr] !== -1) {
        out.push(curr); //push current to the path
        curr = prev[curr]; //update current to the parent that has got us to this point
        //the previous is who was the last person to update our distance to the shortest known path.
    }

    out.push(source);
    return out.reverse();
}
