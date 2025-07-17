import cors from "cors";

export const corsMiddleware = cors({
  origin: ['http://localhost:3001', 'http://localhost:3000'], // Permitir frontend e backend
  credentials: true, // Permitir cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
});

