# YouTube Video Summarizer

[![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Flask](https://img.shields.io/badge/Flask-API-000?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT-412991?logo=openai&logoColor=white)](https://platform.openai.com/)

Turn long YouTube videos into structured summaries — title, bullet points, and conclusion — using transcript extraction and GPT.

## Features

- YouTube transcript extraction
- GPT-powered structured summaries
- Responsive React UI with section-based output
- Bring-your-own OpenAI API key

## Tech stack

| Layer | Stack |
|-------|-------|
| Frontend | React, Vite, CSS |
| Backend | Python, Flask |
| AI | OpenAI GPT API |

## Setup

```bash
git clone https://github.com/BPrakhar30/youtube-video-summarizer.git
cd youtube-video-summarizer
```

**Backend**

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python run.py
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

## Usage

1. Enter your OpenAI API key in settings
2. Paste a YouTube URL
3. Click **Generate Summary**

## Topics

`youtube` `summarization` `openai` `llm` `react` `flask` `transcript`
