async function postRequest(url: string, body: {[key: string]: string})
{
    try
    {
        const res = await fetch(url,{
    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        })
        const json = await res.json();

        return json;
    }
    catch(error)
    {
        console.log(error)
    }
}

export default postRequest;