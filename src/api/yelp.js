import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer H3HT9YzcfPVbQ8GZPOWl0e_gKCMvUOdOAXtsQ6iYzjOAzen0CzDwYxjz4FGg1nMOMYfXoLmQxWZHpW0XZHshW3Z3nlIqsGlYbr8p_dwMYYQKflud9gh84CQWHGVXZHYx",
  },
});
