"use client";
import { columns } from "@/Components/collection/CollectionColumn";
import { DataTable } from "@/Components/custom ui/DataTable";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Collections = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [collections, setcollections] = useState([]);
  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });

      const data = await res.json();
      setcollections(data);
      setLoading(false);
    } catch (error) {
      console.log("[collectons_GET]", error);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);
  const Move=()=>{
    router.push("/collections/new")
  }
 

  return (
    <div className=" px-10 py-5">
      <div className="flex items-center justify-between ">
        <p className=" text-heading2-bold">Collections</p>
        <Button onClick={Move} className=" bg-blue-1 text-white">
          <Plus className=" h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className=" bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  ); 
};

export default Collections;
