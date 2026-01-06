# ai-code-reviewer  
AI-powered code reviewer and fixer platform.  

## Version 1 Scope  
- Languages: Python and JavaScript/TypeScript  
- Platforms: CLI scripts and small web apps  
- Inputs: user prompt/spec and code repository or file  
- Outputs: diff patch, explanation, test results  

## Core Workflow  
1. Ingest: prompt/spec, codebase, optional logs and examples  
2. Understand: map repo structure and detect frameworks  
3. Verify: run linters, type checks, tests (generate tests if absent)  
4. Fix: use AI to propose patch, apply patch in branch and rerun checks  
5. Report: show patch, test results, and explanation  

## Development Setup  
- Use GitHub for version control and PRs  
- Coding with VS Code  
- Docker for sandbox execution  
- Install Node.js and Python  
- Use OpenAI API for AI model  

## Architecture  
- Frontend: Next.js (React)  
- Backend: FastAPI (Python)  
- Worker: background job runner  
- Sandbox: Docker containers to safely run code 
