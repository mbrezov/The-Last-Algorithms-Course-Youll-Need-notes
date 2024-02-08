export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; i < arr.length - 1 - i; ++j) {
            // - 1 because we gotta up too but not include also the last element at the first iteration because we're gonna do a plus 1
            // - i every single time we execute the last element becomes the largest element we don't need to redo that
            if (arr[j] > arr[j + 1]) {
                // swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
