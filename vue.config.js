module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Organize",
        appId: "com.starscream.organize",
        win: {
          target: ["nsis"],
          icon: "./icon.ico",
        },
        nsis: {
          installerIcon: "./icon.ico",
          uninstallerIcon: "./icon.ico",
        },
      },
    },
  },
};
