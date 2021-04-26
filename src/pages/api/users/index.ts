import { NextApiRequest, NextApiResponse } from 'next'

// JWT (Storage)
// Next Auth (Social, google, facebook etc...)
// Cognito, Auth0 (Serviço de autenticação)

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Rafa' },
    { id: 2, name: 'Diego' },
    { id: 3, name: 'André' },
  ]

  return response.json(users);
}