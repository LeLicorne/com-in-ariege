import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../config/firebase';

export default async function getAllImages(path: string): Promise<string[] | null> {
  let images: string[] = [];
  const imagesRef = ref(storage, path);

  await listAll(imagesRef)
    .then(async (res) => {
      const { items } = res;
      const urls = await Promise.all(items.map((item) => getDownloadURL(item)));
      // Array of download URLs of all files in that folder
      images = urls;
    })
    .catch(() => {
      // Uh-oh, an error occurred!
      return null;
    });
  return images;
}
