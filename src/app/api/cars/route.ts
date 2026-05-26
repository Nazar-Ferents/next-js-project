import {carSchema} from "@/lib/schema/shema";
import {NextResponse} from "next/server";

export async function POST(req:Request) {
    const body = await req.json();
    const result = carSchema.safeParse(body);

    if(!result.success) {
        return NextResponse.json({errors:result.error})
    }

    return NextResponse.json({message:'OK', data:result.data})
}