import fs from "fs";
import path from "path";

import { ref, computed } from "vue";
import { app, dialog } from "@electron/remote";

import formatFileSize from "@/utils/formatFileSize.js";
import { getExtension } from "@/utils/files.js";
import { getFileIcon } from "../utils/files";

app;
const fileNameLength = 150;
const appPath = ref(app.getAppPath());
// const appPath = ref(`C:\\Users\\manis\\Desktop\\test\\first`);

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
      icon: getFileIcon(getExtension(file)),
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
};

export { files, appPath, chooseDirectory };
