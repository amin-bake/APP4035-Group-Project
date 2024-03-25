import { getServerSession, getServerSideProps } from "next-auth";
import { authOptions } from "../../lib/nextAuth";
import { NextResponse } from "next/server";


const session = await getServerSession(authOptions);

export default async function GET(req){
    console.log(session)
    return NextResponse.json({id: 1})
}