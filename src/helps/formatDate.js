export const formatDate = date => {
    const options = {weekDay: 'long', year: 'numeric', month: 'long', day:'numeric'};
    const formatedDate = date.toLocaleTimeString('es-ES',options);
    return formatedDate;
}