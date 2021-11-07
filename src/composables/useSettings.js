import { ref } from "vue";

const fileTypes = ref([
  {
    extensions: ["txt", "rtf", "doc", "docx"],
    name: "Texts",
    folderName: "Y_Texts",
  },
  {
    extensions: ["png", "jpg", "jpeg"],
    name: "Images",
    folderName: "Y_Images",
  },
  {
    extensions: ["mp4", "mov", "3gp", "mkv"],
    name: "Videos",
    folderName: "Y_Videos",
  },
]);

export { fileTypes };
