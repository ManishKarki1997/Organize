/* eslint-disable no-unreachable */
import fs from "fs";
import path from "path";

import { ref, computed } from "vue";
import { app, dialog } from "@electron/remote";

import formatFileSize from "@/utils/formatFileSize.js";
import {
  getExtension,
  moveFileToAnotherDirectory,
  folderExists,
  createFolder,
} from "@/utils/files.js";
import { getFileIcon } from "../utils/files";
import { settings } from "@/composables/useSettings";

app;
const fileNameLength = 150;
const isProcessing = ref(false);
// const appPath = ref(app.getAppPath());
const appPath = ref(`C:\\Users\\manis\\Desktop\\test\\first`);
let appPathCopy = `C:\\Users\\manis\\Desktop\\test\\first`;

const files = computed(() => {
  const fileNames = fs.readdirSync(appPath.value);
  const detailedFilesInfo = fileNames.map((file) => {
    const stats = fs.statSync(path.join(appPath.value, file));

    return {
      name:
        file.length > fileNameLength
          ? file.slice(0, fileNameLength) + "..."
          : file,
      isDirectory: stats.isDirectory(),
      extension: getExtension(file),
      icon: stats.isDirectory()
        ? '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        : getFileIcon(getExtension(file)),
      size: stats.isFile() ? formatFileSize(stats.size ?? 0) : null,
    };
  });

  const sortedByDirectory = detailedFilesInfo.sort((a, b) => {
    if (a.isDirectory === b.isDirectory) {
      return a.name.localeCompare(b.name);
    }
    return a.isDirectory ? -1 : 1;
  });
  return sortedByDirectory;
});

const chooseDirectory = async () => {
  const selectedDirRes = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (selectedDirRes.canceled) return;

  appPath.value = selectedDirRes.filePaths[0];
  appPathCopy = appPath.value;
};

const organize = () => {
  try {
    isProcessing.value = true;

    const fileTypes = JSON.parse(JSON.stringify(settings.value)).fileTypes;

    files.value.forEach((file) => {
      if (!file.isDirectory) {
        const fileType = fileTypes.find((t) =>
          t.extensions.includes(file.extension)
        );

        if (!fileType) return;

        const destinationFolderName = fileType?.folderName;

        if (!destinationFolderName) return;

        const folderPath = path.join(appPath.value, destinationFolderName);
        const oldPath = path.join(appPath.value, file.name);
        const destinationPath = path.join(
          appPath.value,
          destinationFolderName,
          file.name
        );

        if (!folderExists(folderPath)) {
          createFolder(appPath.value, destinationFolderName);
        }

        moveFileToAnotherDirectory(oldPath, destinationPath);
      }
    });

    // just to refresh the folder after the files are moved :(
    // just a hack, need to think of a proper way
    appPath.value = "";
    appPath.value = appPathCopy;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  } finally {
    isProcessing.value = false;
  }
};

export { files, appPath, chooseDirectory, organize, isProcessing };
