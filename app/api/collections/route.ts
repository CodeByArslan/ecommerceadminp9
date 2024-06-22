// app/api/collections/route.js
import { connectToDB } from "@/lib/MongoDB";
import { auth } from "@clerk/nextjs/server";
import Collection from "@/lib/models/Collection";
import { NextRequest, NextResponse } from "next/server";
import { Asul } from "next/font/google";

export const POST = async (req: NextRequest) => {
  try {
   const { userId } = auth();
    if (!userId) {
      console.error("[collections_POST] Unauthorized access attempt");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const { title, description, image } = await req.json();

    if (!title || !image) {
      console.error("[collections_POST] Missing required fields: title, image");
      return new NextResponse("Title and Image are required", { status: 400 });
    }

    const existingCollection = await Collection.findOne({ title });

    if (existingCollection) {
      console.warn("[collections_POST] Collection already exists:", title);
      return new NextResponse("Collection already exists", { status: 400 });
    }

    const newCollection = new Collection({
      title,
      description,
      image,
    });

    await newCollection.save();
    console.log("[collections_POST] New collection created:", newCollection);

    return NextResponse.json(newCollection, { status: 200 });
  } catch (err) {
    console.error("[collections_POST] Internal Server Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest)=>{
  try {
    await connectToDB()
    const collections = await Collection.find().sort({createdAt:"desc"})
    return NextResponse.json(collections,{status:200})
    
  } catch (error) {
    console.log("[collections_GET]",error)
    return new NextResponse("Internal Server Error",{status:500})
  }
}


