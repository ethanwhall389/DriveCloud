const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function uploadFile(bucketName, filePath, fileData, contentType) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, fileData, {
      contentType: contentType,
      upsert: true,
    });

  if (error) {
    console.error("Upload error: ", error);
    return null;
  }

  console.log("File uploaded successfully: ", data);
  return data;
}

module.exports = uploadFile;
