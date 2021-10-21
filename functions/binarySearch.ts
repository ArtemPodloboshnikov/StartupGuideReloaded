function binarySearch(value: string|number, list: Array<string|number>): number {
    let first: number = 0;
    let last: number = list.length - 1;
    let position: number = -1;
    let found: boolean = false;
    let middle: number;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] == value) 
        {
            found = true;
            position = middle;
        } 
        else if (list[middle] > value) 
        {
            last = middle - 1;
        } 
        else 
        {
            first = middle + 1;
        }
    }
    return position;
}

export default binarySearch;