import { supabase } from "./supabaseClient";



export async function fetchImageUrl(bucketName, filePath){
    const {data, error} = supabase.storage.from(bucketName).getPublicUrl(filePath);

    if (error){
        return null
    } else 
    console.log("+fetchImageUrl+ " + data.publicUrl + " +fetchImageUrl+");
    return data.publicUrl;
    
}