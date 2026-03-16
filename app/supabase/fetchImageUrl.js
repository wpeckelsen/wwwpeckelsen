// app/supabase/fetchImageUrl.js
import { supabase } from "./supabaseClient";

// Updated bucket constants with both buckets
export const BUCKETS = {
  GENERAL_IMAGES: 'generalimages',      // For wwwessel.jpg and general site images
  BLOG_IMAGES: 'blogimages',     // For blog-specific images
  HEADER_IMAGES: 'headers',      // For future use
  CONTENT_IMAGES: 'content'      // For future use
};

// Main function to get image URL
export function getImageUrl(bucketName, filePath) {
  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  return data.publicUrl;
}

// Alias for backward compatibility
export async function fetchImageUrl(bucketName, filePath) {
  return getImageUrl(bucketName, filePath);
}

// Get hero image (from general images bucket)
export function getHeroImage(imagePath = 'print.png') {
  return getImageUrl(BUCKETS.GENERAL_IMAGES, imagePath);
}

// Get blog header image (from blogimages bucket)
export function getBlogHeaderImage(blogId, imagePath = null) {
  const bucket = BUCKETS.BLOG_IMAGES;
  
  if (imagePath) {
    return getImageUrl(bucket, imagePath);
  }
  
  // Default pattern: blog-headers/{blogId}.jpg
  const defaultPath = `blog-headers/${blogId}.jpg`;
  return getImageUrl(bucket, defaultPath);
}



// For multiple images
export function getImageUrls(bucketName, paths) {
  return paths.map(path => ({
    path,
    url: getImageUrl(bucketName, path)
  }));
}

// Helper to get images by type
export const IMAGE_HELPERS = {
  hero: (filename = 'print.png') => getImageUrl(BUCKETS.GENERAL_IMAGES, filename),
  blogHeader: (blogId, filename = null) => getBlogHeaderImage(blogId, filename),
  blogContent: (path) => getImageUrl(BUCKETS.BLOG_IMAGES, path),
  siteAsset: (path) => getImageUrl(BUCKETS.GENERAL_IMAGES, path)
};

// For future uploads
export async function uploadImage(file, bucketName, folder = '') {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const url = getImageUrl(bucketName, filePath);
    return { url, path: filePath };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}