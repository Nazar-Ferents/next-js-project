export async function GET(req: Request, res: Response) {
    console.log('GET request route handler');

    req.headers.set('Accept', 'application/json');

    const users = await fetch('http://jsonplaceholder.typicode.com/users/')
    .then((res) => res.json())
    return Response.json(users);
}

export const POST = ()=>{
    console.log('POST request route handler');
    return Response.json({message:"Hello World!"});
}