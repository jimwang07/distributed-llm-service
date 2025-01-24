# distributed-llm-service
Fault-tolerant distributed LLM service with Next.js frontend

A passion project of mine that I've wanted to create for a long time.

Getting the best answer to a question often involves prompting multiple AI chat bots and comparing answer quality. However, this approach isn't efficient with continuous chats with longer contexts.

This project aims to solve this issue by allowing users to prompt multiple chat bots and guaranteeing that they have the same contexts using a multi-paxos consensus protocol. Each user can manage 3 clients at a time that each query their own LLM api and share contexts by communicating with TCP socket programming.
