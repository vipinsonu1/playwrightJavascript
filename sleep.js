const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  sleep(5000).then(() => process.exit(0));