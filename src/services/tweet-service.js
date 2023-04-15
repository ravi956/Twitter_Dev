const { TweetRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g); // regex for extracting hashtags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // todo create hashtags and add here
    return tweet;
  }
}

module.exports = TweetService;

/**
 * this is my #first #tweet . I am really #excited
 */
