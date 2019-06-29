

function stopWatch() {

    let startTime, endTime, running;
    let duration = 0;

    return {
    start: function() {
        if (running == true)
            throw new Error('Stopwatch is already running');
        
        running = true;
        
        startTime = new Date();

    },

    stop: function() {
        if (running == false)
            throw new Error('Stopwatch has already stopped');
        
        running = false;
        
        endTime = new Date();

        const sec = (endTime.getTime() - startTime.getTime())/1000;
        
        duration += sec;
    },

    getDuration: function() {
        return duration;
    },

    reset: function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    },
};
}
const sw = stopWatch();
