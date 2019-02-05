const subscribers = {};

const pubSub = {
  publish: event => {
    if (subscribers[event]) {
      subscribers[event].forEach(sub => sub());
    }
  },
  subscribe: (event, fn) => {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    subscribers[event].push(fn);
  },
};


pubSub.subscribe('increment', () => console.log('incrementing'));
pubSub.subscribe('increment', () => console.log('some other increment subscription'));
pubSub.subscribe('decrement', () => console.log('decrementing'));


pubSub.publish('increment');
// incrementing
// some other increment subscription

pubSub.publish('decrement');
// decrementing
