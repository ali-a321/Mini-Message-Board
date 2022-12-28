const day = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const messages = [
    {
      author: "Amando",
      message: "Hi there!",
      time:  day.toLocaleTimeString("en-US"),
      date: day.toLocaleDateString("en-US", options)
    },
    {
      author: "Charles",
      message: "Hello World!",
      time:  day.toLocaleTimeString("en-US"),
      date: day.toLocaleDateString("en-US", options)
    }
 ];


 module.exports = messages