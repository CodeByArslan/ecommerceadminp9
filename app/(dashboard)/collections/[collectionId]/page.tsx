'use client'
import CollectionForm from '@/Components/collection/CollectionForm'
import Loader from '@/Components/custom ui/Loader'
import React, { useEffect, useState } from 'react'

const CollectionDetail = ({params}:{params:{collectionId:string}}) => {

    const [loading, setloading] = useState(true)
    const [collectionDetail, setcollectionDetail] = useState<CollectionType | null>(null)

    const getCollectionDetail = async ()=>{
        try {
            const res= await fetch(`/api/collections/${params.collectionId}`)
            const data= await res.json()
            setcollectionDetail(data)
            setloading(false)

        } catch (error) {
            console.log("[collectionId_GET]",error)
        }
    }
    useEffect(()=>{
        getCollectionDetail()
    },[])
  return loading ? <Loader/>: (
    <CollectionForm initialData={collectionDetail}/>
  )
}

export default CollectionDetail