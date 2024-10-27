import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.json({ hello: "There" });
});

export default {
	port: 3001,
	fetch: app.fetch,
};
