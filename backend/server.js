import Fastify from "fastify";
import { PrismaClient } from '@prisma/client'

const app = Fastify();
const prisma = new PrismaClient()

app.get("/users", async (rep) => {
  rep(await prisma.user.findMany())
});

app.post("/users", async (req, rep) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
  }) 
});

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
