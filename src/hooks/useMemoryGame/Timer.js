
const Timer = (cb, timeLimitInMs) => {
  let startTime = Date.now();
  let stopID = null;

  let timeElapsed = 0;
  const timeLimit = timeLimitInMs;

  const parseMsToTimestring = (s) => {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;

    return `${mins}:${secs}`;
  };

  const update = () => {
    const deltaInMs = Date.now() - startTime;
    timeElapsed = deltaInMs;
    cb(parseMsToTimestring(deltaInMs));
    stopID = requestAnimationFrame(update);
  };

  const start = () => {
    update();
  };
  const stop = () => {
    cancelAnimationFrame(stopID);
    stopID = null;
  };
  const reset = () => {
    startTime = Date.now();
    stopID = null;
  };
  const getTime = () => timeElapsed;

  return {
    start,
    stop,
    reset,
    parseMsToTimestring,
    getTime,
    timeLimit,
    setTimelimit(timelimit) {
      this.timeLimit = timelimit;
    },
  };
};

export default Timer;
// TO FINISH!
