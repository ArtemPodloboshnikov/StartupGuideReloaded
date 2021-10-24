import { nanoid } from "nanoid";

function generateId(name: string)
{
    return `${nanoid(5)}_${name}_${nanoid(5)}`
}   

export default generateId;