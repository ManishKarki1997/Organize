import fs from "fs";
import path from "path";

import fileIcons from "@/data/fileTypeIcons.js";

export const folderExists = (location) => {
  return fs.existsSync(location);
};

export const getExtension = (fullFileName, stripDot = true) => {
  if (!fullFileName) return "";
  const ext = path.extname(fullFileName);
  return stripDot ? ext.split(".")[1] : ext;
};

export const createFolder = (location, folderName) => {
  try {
    const fullPath = path.join(location, folderName);

    if (!folderExists(fullPath)) {
      fs.mkdirSync(fullPath);
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

export const moveFileToAnotherDirectory = (oldPath, newPath) => {
  try {
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
        console.log(err);
        if (err.code === "EXDEV") {
          copy();
        }
        return;
      }
    });

    const copy = () => {
      const readStream = fs.createReadStream(oldPath);
      const writeStream = fs.createWriteStream(newPath);

      readStream.on("close", function () {
        fs.unlink(oldPath);
      });

      readStream.pipe(writeStream);
    };
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

export const getFileIcon = (extension) => {
  if (!extension) return null;

  const iconObj = fileIcons.find((i) => i.extensions.includes(extension));
  if (!iconObj)
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path></g></svg>`;

  return iconObj?.icon;
};
