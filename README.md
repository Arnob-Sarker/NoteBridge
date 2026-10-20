# NoteBridge

A full-stack **MERN** social platform where users write Markdown posts, comment in threads,
like and follow each other, and chat in real time.

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socketdotio&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)

## Features

- **Accounts and auth**: sign up and log in with passwords hashed by **bcrypt**. Sessions use **JWT**,
  and protected routes check the token in middleware.
- **Markdown posts**: create, edit and delete posts, rendered with `react-markdown`.
- **Threaded comments**: replies nest under their parent comment and can be edited or deleted.
- **Likes and follows**: like or unlike posts, see who liked a post, follow and unfollow users,
  and view follower and following lists.
- **Explore and search**: sort posts by latest, earliest, most liked or most commented, search posts, and
  filter by author or liked posts, with server-side pagination.
- **Real-time messenger**: private one-to-one conversations over **Socket.IO**. The socket
  connection is authenticated with the same JWT.
- **Profiles**: user pages with the user's posts, liked posts and comments, plus a responsive
  Material UI layout for mobile.

## Tech stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, React Router 6, Material UI, Formik, Axios, socket.io-client, react-markdown |
| Backend | Node.js, Express, Socket.IO, express-validator |
| Database | MongoDB with Mongoose |
| Security | bcrypt password hashing, JSON Web Tokens, authenticated WebSocket handshake |

## Project structure

```
server.js            Express + Socket.IO entry point
socketServer.js      JWT-authenticated socket handling for live messages
routes/              /api/posts, /api/users, /api/comments, /api/messages
controllers/         Request handlers
models/              User, Post, Comment, PostLike, Follow, Conversation, Message
middleware/auth.js   JWT verification
util/                Pagination and filtering helpers
client/              React front end
```

## API overview

| Resource | Endpoints |
|---|---|
| Users | `POST /api/users/register` · `POST /api/users/login` · `GET /api/users/:username` · `PATCH /api/users/:id` · `POST /api/users/follow/:id` · `DELETE /api/users/unfollow/:id` · `GET /api/users/followers/:id` · `GET /api/users/following/:id` |
| Posts | `GET /api/posts` · `POST /api/posts` · `GET/PATCH/DELETE /api/posts/:id` · `POST/DELETE /api/posts/like/:id` · `GET /api/posts/like/:postId/users` |
| Comments | `POST/PATCH/DELETE /api/comments/:id` · `GET /api/comments/post/:id` · `GET /api/comments/user/:id` |
| Messages | `GET /api/messages` · `GET /api/messages/:id` · `POST /api/messages/:id` |

## Running locally

Prerequisites: Node.js 16+ and a MongoDB instance (local or Atlas).

```bash
# 1. Install dependencies
npm install
npm install --prefix client

# 2. Configure the server
cp .env.example .env      # then set MONGO_URI and TOKEN_KEY

# 3. Start the API (port 4000) and the React app (port 3000) in two terminals
npm run server
npm run client
```

For a production build, run `npm run build --prefix client`, set `NODE_ENV=production` and run
`npm start`. Express then serves the React build and the API from the same port.

## Author

**Arnob Sarker Partho** · [GitHub](https://github.com/Arnob-Sarker)
