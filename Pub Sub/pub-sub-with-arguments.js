const subscribers = {};

const pubSub = {
  publish: (event, ...args) => {
    if (subscribers[event]) {
      subscribers[event].forEach(sub => sub(...args));
    }
  },
  subscribe: (event, fn) => {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    subscribers[event].push(fn);
  },
};

pubSub.subscribe('sendMessage', message => console.log(message));

pubSub.publish('sendMessage', 'Hello world');
// -> Hello world
