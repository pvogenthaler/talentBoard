const PubSub = {
  topics: {},

  subscribe: function(topic, listener) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(listener);
  },

  publish: function(topic, data) {
    if (!this.topics[topic] || this.topics[topic].length < 1) {
      return;
    }
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
};

module.exports.PubSub = PubSub;
