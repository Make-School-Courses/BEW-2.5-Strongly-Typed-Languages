var schema_obj = new Schema({
  data: {
    type: String,
    get: function(data) {
      try {
        return JSON.parse(data);
      } catch() {
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  }
  }
