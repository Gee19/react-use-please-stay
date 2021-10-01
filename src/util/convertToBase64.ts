export const convertToBase64 = (url: string) =>

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      return reader.readAsDataURL(blob);
    });
