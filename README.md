# dynamic-profile-endpoint

**GitHub Repository:** [https://github.com/Sbtech24/dynamic-profile-endpoint](https://github.com/Sbtech24/dynamic-profile-endpoint)  
**Live URL:** [https://dynamic-profile-endpoint-production.up.railway.app/me](https://dynamic-profile-endpoint-production.up.railway.app/me)


##dependecies 
| Package | Description |
|----------|-------------|
| `express` | Web framework for Node.js/Bun |
| `axios` | HTTP client for making API requests |
| `dotenv` | Loads environment variables from `.env` |
| `@types/express` | TypeScript type definitions for Express |
| `@types/bun` | TypeScript type definitions for Bun |
| `morgan` | For proper logging |
| `express-rate-limit` | For rate limiting|
| `cors` | Handle cross-origin Resource Sharing|


---
Clone the repository:

```bash
git clone https://github.com/Sbtech24/dynamic-profile-endpoint.git
cd dynamic-profile-endpoint
```
To install dependencies:

bun install

Create .env file at the root and set port 
e.g 
PORT = 3000

To run :

bun run dev - development script 

bun run start -production script
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
