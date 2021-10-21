function dictionaryArray(arr: Array<string>): {[key: string]: string[]}
{
    let res: {[key: string]: string[]} = {}
    for (let el of arr)
    {
        const char = el[0].toUpperCase();
        if (res[char] === undefined)
        {
            res[char] = [];
        }
     
        res[char].push(el);
        res[char].sort();
    }
    
    res[''] = [''];
    return res;
}

export default dictionaryArray;