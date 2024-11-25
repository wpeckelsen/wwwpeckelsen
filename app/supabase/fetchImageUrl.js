import { supabase } from "./supabaseClient";



export async function fetchImageUrl(bucketName, filePath){
    const {data, error} = supabase.storage.from(bucketName).getPublicUrl(filePath);

    if (error){
        return null
    } else 
    console.log("+fetchImageUrl+ " + data.publicUrl + " +fetchImageUrl+");
    return data.publicUrl;
    
}


        // https://[project_id].supabase.co/storage/v1/object/public/[bucket]/[asset-name]
// https://mvaeqayvhighbhnkrydl.supabase.co/storage/v1/object/public/images/zArHI7A.png
// 
// https://mvaeqayvhighbhnkrydl.supabase.co/storage/v1/object/sign/images/d25tadtiyyw41.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZDI1dGFkdGl5eXc0MS5wbmciLCJpYXQiOjE3MzIxMDU4MjYsImV4cCI6MTg4OTc4NTgyNn0.hy5b894Wnck_MAPMA1cy6KB_EvzHY6QguaFbmphYrCY&t=2024-11-20T12%3A30%3A27.024Z
// https://mvaeqayvhighbhnkrydl.supabase.co/storage/v1/object/sign/images/flags/d25tadtiyyw41.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZmxhZ3MvZDI1dGFkdGl5eXc0MS5wbmciLCJpYXQiOjE3MzIxMDkzNDcsImV4cCI6MTczMjcxNDE0N30.3oLGvuMZsmIcEgHFy6D3X4ATqNVwxC7YFPjBdK0r2S4&t=2024-11-20T13%3A29%3A07.287Z