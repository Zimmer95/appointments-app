
export const sortActiveFirst = (appointments) => {
    const objetosActive = [];
    const objetosCanceled = [];
  
    for (let i = 0; i < appointments.length; i++) {
      const obj = appointments[i];
  
      if (obj.status === "active") {
        objetosActive.push(obj);
      }
      if (obj.status === "canceled") {
        objetosCanceled.push(obj);
      }
    }
  
    const objetosConcatenados = objetosActive.concat(objetosCanceled);
    return objetosConcatenados;
  };
  