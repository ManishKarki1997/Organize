import { ref } from "vue";
import { setLocalStorage } from "./useLocalStorage";
import constants from "@/data/constants.js";

const APP_KEY = constants.APP_LOCAL_STORAGE_KEY_NAME;

const fileTypes = ref([
  {
    key: "texts-123123",
    extensions: ["txt", "rtf", "doc", "docx"],
    name: "Texts",
    folderName: "Y_Texts",
  },
  {
    key: "images-2123123",
    extensions: ["png", "jpg", "jpeg"],
    name: "Images",
    folderName: "Y_Images",
  },
  {
    key: "videos-24123123",
    extensions: ["mp4", "mov", "3gp", "mkv"],
    name: "Videos",
    folderName: "Y_Videos",
  },
]);

const settings = ref({
  isThemeDarkMode: true,
  isFirstLoad: false,
  fileTypes: JSON.parse(JSON.stringify(fileTypes.value)),
});

const saveSettings = (payload) => {
  setLocalStorage(APP_KEY, payload);
};

export { fileTypes, settings, saveSettings };
