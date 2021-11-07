import { ref } from "vue";

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

export { fileTypes };
