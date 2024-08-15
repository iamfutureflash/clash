import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: ["error", "query", "warn", "info"],
    errorFormat: "pretty"
});
export default prisma;
