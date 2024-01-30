const dir = [
    //directions
    [-1, 0], //left
    [1, 0], //right
    [0, -1], //down
    [0, 1], //up
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    //1. base case - off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }
    //2. base case - if we are on the wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    //3. base case - if its end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    if (seen[curr.y][curr.x]) {
        return false;
    }

    //3 Recurse

    //pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    //Recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x, //new curr
                    y: curr.y + y, //new curr
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    //post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false)); //created pathing array and seen matrix that is set to false at the start
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
