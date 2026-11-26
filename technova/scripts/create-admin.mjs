// Cria ou redefine a senha de um administrador do painel.
// Uso interativo:  npm run admin:create
// Ou por variáveis: ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run admin:create
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const prisma = new PrismaClient();
const rl = readline.createInterface({ input, output });

const email = (process.env.ADMIN_EMAIL || (await rl.question("E-mail do administrador: "))).trim().toLowerCase();
const name = process.env.ADMIN_NAME || (await rl.question("Nome (Enter para 'Administrador'): ")) || "Administrador";
const password = process.env.ADMIN_PASSWORD || (await rl.question("Senha (mín. 10 caracteres): "));
rl.close();

if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error("E-mail inválido.");
if (password.length < 10) throw new Error("A senha precisa ter pelo menos 10 caracteres.");

const passwordHash = await bcrypt.hash(password, 12);
await prisma.adminUser.upsert({ where: { email }, update: { passwordHash, name }, create: { email, name, passwordHash } });
console.log(`Administrador pronto: ${email}`);
await prisma.$disconnect();
