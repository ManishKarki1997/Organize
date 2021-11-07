const icons = [
  {
    label: "PDF",
    extensions: ["pdf"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M30 18v-2h-6v10h2v-4h3v-2h-3v-2h4z" fill="currentColor"></path><path d="M19 26h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-2-2h2a1.001 1.001 0 0 0 1-1v-4a1.001 1.001 0 0 0-1-1h-2z" fill="currentColor"></path><path d="M11 16H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2.002 2.002 0 0 0-2-2zm-3 5v-3h3l.001 3z" fill="currentColor"></path><path d="M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2zm-8-4V4.4l5.6 5.6z" fill="currentColor"></path></svg>`,
  },
  {
    label: "Images",
    extensions: ["jpeg", "jpg", "png"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M19 14a3 3 0 1 0-3-3a3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1z" fill="currentColor"></path><path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H6v-6l5-5l5.59 5.59a2 2 0 0 0 2.82 0L21 19l5 5zm0-4.83l-3.59-3.59a2 2 0 0 0-2.82 0L18 19.17l-5.59-5.59a2 2 0 0 0-2.82 0L6 17.17V6h20z" fill="currentColor"></path></svg>`,
  },
  {
    label: "Videos",
    extensions: ["mp4", "3gp", "mov", "mkv"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z" fill="currentColor"></path></svg>`,
  },
  {
    label: "Documents",
    extensions: ["epub", "rtf", "txt", "docx"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4a12.02 12.02 0 0 0-11.6 15.1l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197l52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276a12.04 12.04 0 0 0-11.6-15.1H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1l-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z" fill="currentColor"></path></svg>`,
  },
  {
    label: "Music",
    extensions: ["mp3"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path><circle cx="11" cy="16" r="1"></circle><path d="M12 16v-5l2 1"></path></g></svg>`,
  },
  {
    label: "Compressed",
    extensions: ["zip", "rar"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 20.735A2 2 0 0 1 5 19V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-1"></path><path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2z"></path><path d="M11 5h-1"></path><path d="M13 7h-1"></path><path d="M11 9h-1"></path><path d="M13 11h-1"></path><path d="M11 13h-1"></path><path d="M13 15h-1"></path></g></svg>`,
  },
  {
    label: "Executables",
    extensions: ["zip", "rar"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.58 120" style="enable-background:new 0 0 112.58 120" xml:space="preserve"><path d="M24.78 55.66h63.36v-19.2H67.96c-2.11 0-5.07-1.15-6.46-2.54-1.39-1.39-2.25-3.91-2.25-6.03V7.46H7.96c-.18 0-.31.09-.41.18-.13.09-.18.22-.18.4V112c0 .13.09.31.18.41.09.13.27.18.41.18h79.6c.18 0 .17-.09.26-.18.13-.09.33-.27.33-.41v-10.9H24.78c-4.05 0-7.38-3.32-7.38-7.38V63.04c0-4.06 3.32-7.38 7.38-7.38zm4.02 10.47h19.63v5.07H36.16v3.78h11.37v4.84H36.16v4.68h12.63v5.37h-20V66.13h.01zm22.93 0h8.09l4.21 7.31 4.08-7.31h7.99l-7.38 11.5 8.07 12.24h-8.26l-4.66-7.63-4.69 7.63H51l8.19-12.37-7.46-11.37zm28.03 0h19.63v5.07H87.12v3.78H98.5v4.84H87.12v4.68h12.63v5.37h-20V66.13h.01zM95.5 55.66h9.7c4.06 0 7.38 3.33 7.38 7.38v30.68c0 4.05-3.33 7.38-7.38 7.38h-9.7v13.23c0 1.57-.63 2.97-1.66 4a5.613 5.613 0 0 1-4 1.66H5.68c-1.57 0-2.97-.63-4-1.66a5.613 5.613 0 0 1-1.66-4V5.71c0-1.57.63-2.97 1.66-4a5.683 5.683 0 0 1 4-1.66h57.34c.13-.05.26-.05.4-.05.63 0 1.26.27 1.71.67h.09c.09.05.13.09.23.18L94.74 30.5c.49.49.85 1.17.85 1.93 0 .23-.05.41-.09.63v22.6zM65.94 27.31V8.73l20.92 21.19H68.55c-.72 0-1.35-.31-1.85-.76-.45-.45-.76-1.13-.76-1.85z" style="fill-rule:evenodd;clip-rule:evenodd"/></svg>`,
  },
  {
    label: "Powerpoint",
    extensions: ["pptx", "odx"],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M10 8v8l5-4l-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"></path></svg>`,
  },
];

export default icons;
