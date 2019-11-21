const wrap = (line, maxLength) => {
  if (line === "") {
    return line;
  } else if (line.length <= maxLength) {
    return line;
  } else if (line.length > maxLength) {
      const finalArr = []
      const lineArr = line.split('')
      
      lineArr.forEach(word => {
        
      })
    
    
    
    
    //     let finalString = "";

    // for (let i = 0; i < line.length; i++) {
    //   if (i < maxLength) {
    //     finalString = finalString + line[i];
    //   } else if (i === maxLength) {
    //     finalString = finalString + "\n" + line[i];
    //   } else {
    //     finalString = finalString + line[i];
    //   }
    // }

    // console.log(finalString);
    // return finalString;
    
    
  }
};
module.exports = wrap;
