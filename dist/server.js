"use strict";
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 8000;
// const prisma = new PrismaClient();
// // Middleware
// app.use(cors());
// app.use(express.json());
// // Basic check
// app.get('/', (req, res) => {
//   res.send('Rivercape Backend is running!');
// });
// // ========================
// // BLOGS API
// // ========================
// app.get('/blogs', async (req, res) => {
//   try {
//     const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// });
// app.post('/blogs', async (req, res) => {
//   try {
//     const { title, type, content, imageUrl } = req.body;
//     const newBlog = await prisma.blog.create({
//       data: { title, type, content, imageUrl },
//     });
//     res.status(201).json(newBlog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create blog' });
//   }
// });
// app.put('/blogs/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, type, content, imageUrl } = req.body;
//     const updatedBlog = await prisma.blog.update({
//       where: { id: Number(id) },
//       data: { title, type, content, imageUrl },
//     });
//     res.json(updatedBlog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update blog' });
//   }
// });
// app.delete('/blogs/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.blog.delete({ where: { id: Number(id) } });
//     res.json({ message: 'Blog deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete blog' });
//   }
// });
// // ========================
// // GALLERY API
// // ========================
// app.get('/gallery', async (req, res) => {
//   try {
//     const gallery = await prisma.gallery.findMany({ orderBy: { createdAt: 'desc' } });
//     res.json(gallery);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch gallery' });
//   }
// });
// app.post('/gallery', async (req, res) => {
//   try {
//     const { title, category, imageUrl } = req.body;
//     const newItem = await prisma.gallery.create({
//       data: { title, category, imageUrl },
//     });
//     res.status(201).json(newItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create gallery item' });
//   }
// });
// app.delete('/gallery/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.gallery.delete({ where: { id: Number(id) } });
//     res.json({ message: 'Gallery item deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete gallery item' });
//   }
// });
// // ========================
// // SPORTS API
// // ========================
// app.get('/sports', async (req, res) => {
//   try {
//     const sports = await prisma.sport.findMany({ orderBy: { createdAt: 'desc' } });
//     res.json(sports);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch sports' });
//   }
// });
// app.post('/sports', async (req, res) => {
//   try {
//     const { title, type, content, imageUrl } = req.body;
//     const newSport = await prisma.sport.create({
//       data: { title, type, content, imageUrl },
//     });
//     res.status(201).json(newSport);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create sport' });
//   }
// });
// app.put('/sports/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, type, content, imageUrl } = req.body;
//     const updatedSport = await prisma.sport.update({
//       where: { id: Number(id) },
//       data: { title, type, content, imageUrl },
//     });
//     res.json(updatedSport);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update sport' });
//   }
// });
// app.delete('/sports/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.sport.delete({ where: { id: Number(id) } });
//     res.json({ message: 'Sport deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete sport' });
//   }
// });
// // ========================
// // LEADS API
// // ========================
// app.get('/leads', async (req, res) => {
//   try {
//     const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
//     res.json(leads);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch leads' });
//   }
// });
// app.post('/leads', async (req, res) => {
//   try {
//     const { name, email, phone, message, type } = req.body;
//     const newLead = await prisma.lead.create({
//       data: { name, email, phone, message, type },
//     });
//     res.status(201).json(newLead);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create lead' });
//   }
// });
// app.delete('/leads/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.lead.delete({ where: { id: Number(id) } });
//     res.json({ message: 'Lead deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete lead' });
//   }
// });
// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
const prisma = new client_1.PrismaClient();
// ── CORS: accept ALL origins ──
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options(/(.*)/, (0, cors_1.default)()); // handle preflight for all routes (Express v5)
app.use(express_1.default.json());
// Basic check
app.get('/', (req, res) => {
    res.send('Rivercape Backend is running!');
});
// ========================
// BLOGS API
// ========================
app.get('/blogs', async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
        res.json(blogs);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});
app.post('/blogs', async (req, res) => {
    try {
        const { title, type, content, imageUrl } = req.body;
        const newBlog = await prisma.blog.create({
            data: { title, type, content, imageUrl },
        });
        res.status(201).json(newBlog);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create blog' });
    }
});
app.put('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, type, content, imageUrl } = req.body;
        const updatedBlog = await prisma.blog.update({
            where: { id: Number(id) },
            data: { title, type, content, imageUrl },
        });
        res.json(updatedBlog);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update blog' });
    }
});
app.delete('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.blog.delete({ where: { id: Number(id) } });
        res.json({ message: 'Blog deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete blog' });
    }
});
// ========================
// GALLERY API
// ========================
app.get('/gallery', async (req, res) => {
    try {
        const gallery = await prisma.gallery.findMany({ orderBy: { createdAt: 'desc' } });
        res.json(gallery);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
});
app.post('/gallery', async (req, res) => {
    try {
        const { title, category, imageUrl } = req.body;
        const newItem = await prisma.gallery.create({
            data: { title, category, imageUrl },
        });
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create gallery item' });
    }
});
app.put('/gallery/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, category, imageUrl } = req.body;
        const updatedItem = await prisma.gallery.update({
            where: { id: Number(id) },
            data: { title, category, imageUrl },
        });
        res.json(updatedItem);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update gallery item' });
    }
});
app.delete('/gallery/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.gallery.delete({ where: { id: Number(id) } });
        res.json({ message: 'Gallery item deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete gallery item' });
    }
});
// ========================
// SPORTS API
// ========================
app.get('/sports', async (req, res) => {
    try {
        const sports = await prisma.sport.findMany({ orderBy: { createdAt: 'desc' } });
        res.json(sports);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch sports' });
    }
});
app.post('/sports', async (req, res) => {
    try {
        const { title, type, content, imageUrl } = req.body;
        const newSport = await prisma.sport.create({
            data: { title, type, content, imageUrl },
        });
        res.status(201).json(newSport);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create sport' });
    }
});
app.put('/sports/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, type, content, imageUrl } = req.body;
        const updatedSport = await prisma.sport.update({
            where: { id: Number(id) },
            data: { title, type, content, imageUrl },
        });
        res.json(updatedSport);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update sport' });
    }
});
app.delete('/sports/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.sport.delete({ where: { id: Number(id) } });
        res.json({ message: 'Sport deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete sport' });
    }
});
// ========================
// LEADS API
// ========================
app.get('/leads', async (req, res) => {
    try {
        const leads = await prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
        res.json(leads);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});
app.post('/leads', async (req, res) => {
    try {
        const { name, email, phone, message, type } = req.body;
        const newLead = await prisma.lead.create({
            data: { name, email, phone, message, type },
        });
        res.status(201).json(newLead);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create lead' });
    }
});
app.delete('/leads/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.lead.delete({ where: { id: Number(id) } });
        res.json({ message: 'Lead deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete lead' });
    }
});
// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
