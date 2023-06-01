export function FormatarData(data){
    const brasilDateTime = formatDateTime(data)
    return brasilDateTime
  }
  
  function formatDateTime(data){
    const dateObj = new Date(data);
    const day = dateObj.getUTCDate().toString().padStart(2,"0");
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2,"0");
    const year = dateObj.getUTCFullYear().toString();
    return `${day}/${month}/${year}`;
  }