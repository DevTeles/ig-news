import { NextApiRequest, NextApiResponse } from 'next'

// JWT (Storage)
// Next Auth (Social, google, facebook etc...)
// Cognito, Auth0 (Serviço de autenticação)

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;

  const users = [
    { id: 1, name: 'Rafa' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'André' },
  ].filter(user => user.id === Number(id));

  return response.json(users);
}