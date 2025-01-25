# distributed-llm-service
High level overview: Distributed AI chat system where the user can query three different AI chat servers, choose the best answer, and have the conversation context saved across all three servers using socket programming and a communication protocol called Multi Paxos.

Each user can manage 3 clients at a time that each query their own LLM API and share contexts by communicating with TCP socket programming. 

This system is fault tolerant and the users can test failing the links between servers. When a failed server comes back online, it can recover the existing context through multipaxos messages from other servers.

This is an exercise in communication protocols and distributed systems and is not meant to be a user facing app, but I might try to refactor it into one some day!

# Run in terminal
Go to backend folder
Run ./dev.sh


![term](term.png)


# Run locally (still testing)
Run uvicorn app.main:app --reload in backend folder
Run npm run dev in frontend folder

![ui test](uitest.png)
