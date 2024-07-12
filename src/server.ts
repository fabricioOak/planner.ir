import { app } from "./config/fastify";

const PORT = 3333;

app.get("/", async (request, reply) => {
	return { hello: "world" };
});

app.listen({ port: PORT }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
