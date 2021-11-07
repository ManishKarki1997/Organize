import { ref } from "vue";

const fileTypes = ref({
  Texts: {
    extensions: ["txt", "rtf", "doc", "docx"],
    name: "Texts",
    folderName: "Y_Texts",
  },
  Images: {
    extensions: ["png", "jpg", "jpeg"],
    name: "Images",
    folderName: "Y_Images",
  },
  Videos: {
    extensions: ["mp4", "mov", "3gp"],
    name: "Videos",
    folderName: "Y_Videos",
  },
});

export { fileTypes };
