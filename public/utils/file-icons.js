function getIcon(fileType) {
  let icon = "";
  switch (fileType) {
    case "file":
      icon = "/assets/icons/icon-file.svg";
      break;
    case "image":
      icon = "/assets/icons/icon-image.svg";
      break;
    case "video":
      icon = "/assets/icons/icon-video.svg";
      break;
    default:
      icon = "/assets/icons/icon-file.svg";
  }
  return icon;
}
