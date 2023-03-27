// function that convert file to base64 string
export const fileToB64 = (file: File | Blob) => {
  return new Promise((resolve: (a: string) => void, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (!reader.result) {
          reject();
        }
        // check if is buffer or string and return as base64
        const result = typeof reader.result === 'string' 
          ? reader.result 
          : reader?.result?.toString();
        if (!result) {
          reject();
        }
        resolve(result as string);
      }
      reader.onerror = (error) => reject(error);
    }
  );
}

// function that conver base64 to file
export const b64ToFile = (b64: string, fileName: string = 'file') => {
  const arr = b64.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
}