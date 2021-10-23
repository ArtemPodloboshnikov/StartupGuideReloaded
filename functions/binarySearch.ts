function binarySearch(value: string|number, list: Array<string|number>, length=-1): number {
    let first: number = 0;
    let last: number = list.length - 1;
    let position: number = -1;
    let found: boolean = false;
    let middle: number;
    if (length == -1 && typeof value == 'string') length = value.length;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        let middle_res = list[middle];
        if (typeof value == 'string' && typeof middle_res == 'string')
        {
            middle_res = middle_res.slice(0, length);
            if (middle_res.toLocaleLowerCase() == value.toLocaleLowerCase()) 
            {
                found = true;
                position = middle;
            } 
            else if (middle_res > value) 
            {
                last = middle - 1;
            } 
            else 
            {
                first = middle + 1;
            }
        }
        else
        {

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
    }
    return position;
}

export default binarySearch;