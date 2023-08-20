import fs from 'fs';

export default function getImagesPaths(directory: string) {
  const images: string[] = [];
  fs.readdirSync(directory, { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => images.push(item.path));
  return images;
}
