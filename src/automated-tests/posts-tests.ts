
import { Logger } from "tslog";
import ConfigHandler from "../api_test/config/configHandler";

import Posts from "../api_test/endpoints/Posts";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone,
});

let posts: Posts;
let accessToken:string;

describe("Posts endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    
    log.debug("1. Posts Base url: "+posts.getBaseUrl());
  });

  it("Get popular posts", async (): Promise<void> => {
    const response = await posts.getPopularPosts();
    expect(response.status).toBe(200);
    expect(response.data.posts).toBeDefined();
  });

  it("Get recent posts", async (): Promise<void> => {
    const response = await posts.getRecentPosts();
    expect(response.status).toBe(200);
    expect(response.data.posts).toBeDefined();
  });

  it("Create a new post", async (): Promise<void> => {
    const newPostData = {
      title: "Test Post",
      text: "This is a test post content.",
      link: "",
      postType:"text"
    };

    const response = await posts.createPost(newPostData,accessToken);
    expect(response.status).toBe(200); // Assuming 201 for successful creation
    expect(response.data).toHaveProperty("postId");
  });

  afterAll(() => {
    // Limpar recursos ou fazer teardown, se necessário
    // Por exemplo, fechar conexões, limpar estado, etc.
  });
});

export default {};
