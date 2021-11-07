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
  return iconObj.icon;
};
