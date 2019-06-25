const measure = async function measure(title, fn) {
    console.log('===Measure===', title);
    let start = performance.now();
    const res = await fn();
    console.log('===Done===',performance.now() - start);
    return res;
  }
  
  export default measure;