import { useState } from 'react';

export function useImport() {
  const [importedData, setImportedData] = useState(null);

  const importDataFromJson = (file, onDataImported) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const importedData = JSON.parse(event.target.result);
      onDataImported(importedData);
    };
    reader.readAsText(file);
  };

  const saveFileToDataFolder = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch('/api/save-file', {
      method: 'POST',
      body: formData,
    });
  };

  const readDataFromDataFolder = async () => {
    const response = await fetch('/api/read-data');
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  };

  return { importedData, importDataFromJson }; 
}
