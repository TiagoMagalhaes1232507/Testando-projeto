import request from "supertest";
import { app } from "../shared/infra/http/app";;
import { CreatePostDTO } from "../modules/forum/useCases/post/createPost/CreatePostDTO";


let authToken = ''; // Variável para armazenar o token de autenticação

describe('POST /api/v1/posts', () => {
  beforeAll(async () => {
    console.log('Before ALL');
    // Aqui você pode configurar alguma inicialização global, se necessário
  });

  beforeEach(async () => {
    console.log('Before EACH');
    // Simular o login para obter o token de autenticação
    const loginCredentials = {
      username: 'string3',
      password: 'string3',
    };

    const loginResponse = await request(app)
      .post('/api/v1/users/') // Endpoint de login da sua aplicação
      .send(loginCredentials);

    authToken = loginResponse.body.token; // Assume que o token está sendo retornado no corpo da resposta
  });

  afterEach(() => {
    console.log('After EACH');
    // Aqui você pode limpar ou redefinir qualquer estado após cada teste, se necessário
  });

  it('should create a new text post successfully with authentication', async () => {
    const createPostDTO = {
      userId: 'string3',
      title: 'abcs',
      text: 'This is a test text post.',
      postType: 'text',
    };

    const response = await request(app)
      .post('/api/v1/posts')
      .send(createPostDTO)
      .set('Authorization', `Bearer ${authToken}`); // Enviar o token de autenticação

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Post created successfully' });
    // Adicione outras asserções conforme necessário para verificar a resposta
  });

  it('should create a new link post successfully with authentication', async () => {
    const createPostDTO = {
      userId: 'user123',
      title: 'Test Link Post',
      link: 'https://example.com',
      postType: 'link',
    };

    const response = await request(app)
      .post('/api/v1/posts')
      .send(createPostDTO)
      .set('Authorization', `Bearer ${authToken}`); // Enviar o token de autenticação

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Post created successfully' });
    // Adicione outras asserções conforme necessário para verificar a resposta
  });

  it('should return 403 without authentication', async () => {
    const createPostDTO = {
      userId: 'user123',
      title: 'Test Text Post',
      text: 'This is a test text post.',
      postType: 'text',
    };

    const response = await request(app)
      .post('/api/v1/posts')
      .send(createPostDTO);

    expect(response.status).toBe(403);
    expect(response.body).toEqual({ message: 'No access token provided' });
    // Adicione outras asserções conforme necessário para verificar a resposta
  });
});
