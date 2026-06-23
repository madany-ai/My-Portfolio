# AI Automation Portfolio — Projects

---

## 01 · AI Restaurant Ordering & Customer Service Automation System

> *Turning menu inquiries into automated orders — 24/7, zero human intervention.*

A fully custom AI-powered ordering and customer support system built for a restaurant business. The system handles customer conversations, understands budget constraints, searches the live menu dynamically, captures orders, and triggers instant staff notifications — all without a single human touchpoint.

**The Problem**
Restaurants receive dozens of daily inquiries about menu items, pricing, availability, and delivery options. Staff time is wasted answering repetitive questions instead of focusing on operations.

**The Solution**
An end-to-end AI Agent connected to real-time menu data, a RAG knowledge base for policy & FAQ questions, and a full order capture pipeline that syncs directly to a CRM and notifies staff via Telegram the moment an order is placed.

**Key Features**
- Conversational AI Agent with natural Arabic UI
- Dynamic food search with budget-based recommendations
- RAG (Retrieval-Augmented Generation) for FAQ & policy questions
- Automated order capture with unique Order ID generation
- Google Sheets CRM integration
- Real-time Telegram notifications to staff
- Secure API key authentication

**Tech Stack**
`n8n` · `OpenAI` · `Pinecone` · `REST APIs` · `Google Sheets` · `Telegram` 

**Business Value**
- Eliminates repetitive customer support load on staff
- Captures orders automatically with zero drop-off
- Improves customer experience with instant, accurate responses
- Centralizes all customer & order data in one place

---

## 02 · BookyIN — AI-Powered Bookstore Sales & Lead Generation Assistant

> *Transforming a static bookstore into an intelligent sales engine.*

BookyIN is an AI-powered bookstore assistant that enhances the customer shopping experience and automates lead generation. The system combines a responsive e-commerce storefront with an intelligent AI sales agent that understands customer interests, searches products in real-time, and guides visitors toward a purchase decision.

**The Problem**
Online bookstores lose potential buyers because they cannot provide personalized recommendations at scale. Visitors browse, get overwhelmed, and leave without buying.

**The Solution**
An AI sales agent embedded in the storefront that converses with visitors, understands their interests (AI, productivity, business, self-development), recommends relevant books, qualifies them as leads, collects their contact info, and triggers an automated follow-up email — all without human involvement.

**Key Features**
- AI-powered personalized book recommendations
- Real-time product search via custom REST APIs
- Conversational customer support
- Automated lead qualification & unique Lead ID generation
- Google Sheets CRM integration
- Gmail automated follow-up email
- Responsive web storefront

**Workflow**
```
Customer → Website Chat Widget → AI Agent → Product APIs
→ Lead Qualification → Google Sheets CRM → Gmail Follow-up
```

**Tech Stack**
`n8n` · `OpenAI` · `REST APIs` · `Google Sheets` · `Gmail` 

**Business Value**
- Converts passive visitors into qualified leads automatically
- Personalizes the shopping experience at scale
- Creates a scalable, zero-touch customer acquisition pipeline
- Reduces manual support work entirely

---

## 03 · AI SDR & Sales Automation Platform

> *Outbound sales on autopilot — research, personalize, send, follow up.*

A fully automated outbound sales system that researches leads, generates hyper-personalized outreach emails using AI, syncs contacts to CRM, and runs automated follow-up sequences — streamlining the entire SDR workflow.

**The Problem**
Sales teams spend hours manually researching prospects and writing personalized emails. Most follow-ups are forgotten. Leads go cold because the process is too slow and too manual.

**The Solution**
An AI-powered SDR platform that handles prospect research, generates tailored email copy for each lead based on their profile, syncs everything to the CRM automatically, and runs timed follow-up sequences without any manual input.

**Key Features**
- Automated lead research and qualification
- AI-generated personalized outreach emails per lead
- CRM sync and contact management
- Automated multi-step follow-up sequences
- Campaign performance tracking

**Tech Stack**
`n8n` · `OpenAI` · `REST APIs` · `Google Sheets` · `Gmail / SMTP`

**Business Value**
- Replaces hours of manual SDR work with an automated pipeline
- Increases reply rates through genuine personalization at scale
- Ensures zero leads fall through the cracks
- Scales outbound efforts without scaling headcount

---

## 04 · Enterprise RAG System — AI Knowledge Base & Customer Support Agent for Home Services Companies "TechnoHome"

> *Your company's entire knowledge, instantly accessible through AI.*

A production-grade, end-to-end Retrieval-Augmented Generation (RAG) system built for a home services company. The solution ingests company documentation, processes it with AI-powered semantic chunking, generates embeddings, stores them in a vector database, and powers an AI agent that answers customer and staff questions with pinpoint accuracy.

**The Problem**
Large service companies have extensive documentation — service catalogs, pricing sheets, operational procedures, maintenance protocols, and FAQs. This knowledge is scattered, hard to search, and impossible to surface instantly in a customer conversation.

**The Solution**
A complete RAG pipeline that turns static company documents into a living, queryable knowledge base. The AI agent retrieves only the most relevant information before generating a response, eliminating hallucinations and ensuring every answer is grounded in real company data.

**RAG Pipeline**
```
Company Documents → AI Semantic Chunking → Metadata Enrichment
→ Embedding Generation → Pinecone Vector Store
→ Retrieval Engine → AI Customer & Sales Agent
```

**Key Features**
- End-to-end document ingestion and preprocessing
- AI-powered semantic chunking (LLM-based, not rule-based)
- Metadata enrichment for precise retrieval
- Embeddings via Google Gemini
- Pinecone vector database storage
- Accurate retrieval-based Q&A on services, pricing, policies & procedures
- AI customer support and sales agent layer

**Tech Stack**
`n8n` · `OpenRouter LLM` · `Google Gemini Embeddings` · `Pinecone` · `Ollama` · `RAG Architecture`

**Business Value**
- Transforms static documentation into an intelligent support system
- Reduces hallucinations dramatically through grounded retrieval
- Answers complex operational questions instantly
- Qualifies leads and supports service booking workflows

---

## 05 · WhatsApp AI Agent Using EvolutionAPI — Appointment Setting & Customer Support

> *Your business, always available on the channel your customers already use.*

A WhatsApp-native AI Agent that handles customer conversations, books appointments, answers common questions, and sends automated reminders — directly inside WhatsApp, the most-used messaging app in the Arab world.

**The Problem**
Service businesses (clinics, salons, consultants, repair services) receive booking requests and customer questions around the clock. Missed messages mean missed revenue. Manual scheduling is slow and error-prone.

**The Solution**
An intelligent AI agent deployed on WhatsApp that engages customers in natural conversation, collects the information needed to book an appointment, confirms it automatically, and sends timely reminders — with a smooth handoff to a human agent when needed.

**Key Features**
- AI-powered conversational agent on WhatsApp
- Automated appointment booking and confirmation
- FAQ handling and customer support
- Automated reminder messages
- Escalation to human agent when required
- CRM logging of all interactions

**Tech Stack**
`n8n` · `OpenAI` · `WhatsApp Business API` · `Google Sheets` · `REST APIs`

**Business Value**
- Captures bookings 24/7 with zero staff involvement
- Reduces no-shows through automated reminders
- Operates on the channel customers already prefer
- Scales customer support without scaling headcount

---

## 06 · AI-Powered Lead Generation & Personalized Email Outreach System

> *Find the right people. Say the right thing. Automatically.*

An automated system that identifies qualified leads, enriches their profiles using AI, and sends fully personalized outreach emails at scale — with automated follow-ups that adapt based on engagement.

**Key Features**
- Automated lead discovery and qualification
- AI-generated personalized email copy per prospect
- Multi-step follow-up automation
- Engagement tracking and CRM sync
- Gmail integration for sending at scale

**Tech Stack**
`n8n` · `OpenAI` · `Google Sheets` · `Gmail` · `REST APIs`

**Business Value**
- Builds a consistent, automated top-of-funnel pipeline
- Personalizes outreach without manual effort
- Keeps follow-up sequences running in the background

---

## 07 · AI Resume Analyzer

> *Instant, intelligent feedback on every resume — in seconds.*

An AI-powered resume analysis tool that evaluates candidate resumes against job descriptions, scores them on key criteria, and generates actionable feedback — automating a process that typically takes HR teams hours per batch.

**Key Features**
- Resume parsing and structured extraction
- AI scoring against job description criteria
- Detailed improvement recommendations
- Batch processing support
- Output to Google Sheets or CRM

**Tech Stack**
`n8n` · `OpenAI` · `REST APIs` · `Google Sheets`

**Business Value**
- Cuts resume screening time from hours to seconds
- Ensures consistent, unbiased evaluation criteria
- Helps candidates improve their applications with clear feedback

---

## 08 · Landing Page Auditor AI & Competitor Intelligence Platform

> *Enterprise-grade CRO auditing and competitive benchmarking — fully automated.*

An enterprise-grade, AI-powered Conversion Rate Optimization (CRO) auditor that scrapes any landing page, parses its marketing structure, evaluates it against rigorous CRO frameworks using advanced LLMs, and deploys autonomous agents to discover and benchmark direct competitors across local and global markets.

**The Problem**
Manual CRO audits take hours and are highly subjective. Standard LLMs struggle with raw HTML — they get lost in scripts, CSS, and SVG noise and miss the actual marketing copy. Most competitor tools compare scores without telling you *what* to fix or *how* to close the gap. And global tools don't understand regional market context.

**The Solution**
A modular, agentic pipeline that solves each problem independently:

- **Stealth Scraping:** Uses `Scrapling` and Playwright headless browsers to bypass Cloudflare and render JavaScript-heavy SPAs automatically.
- **Smart Extraction:** Parses raw HTML into structured CRO elements (CTAs, benefits, testimonials, trust signals) *before* the AI sees it — eliminating noise and dramatically improving output quality.
- **Autonomous Competitor Discovery:** A ReAct-style agent uses DuckDuckGo to find exact product or e-commerce competitors in a specific regional market, explicitly rejecting blogs, review sites, and login pages.
- **Deep Gap Analysis:** Audits the target page alongside 3–5 competitors simultaneously, then generates a strategic gap analysis, missing elements list, and prioritized action plan.
- **Client-Ready Reporting:** Produces interactive HTML and print-ready PDF reports with the full CRO audit and competitor benchmark included.

**Project Architecture**
```
landing-page-auditor/
├── scraper/        → Fetch layer (Fast HTTP + Stealth Browser fallback)
├── extractor/      → Parses raw HTML into structured CRO elements
├── llm/            → Prompts, Instructor integration, AI logic
├── scoring/        → Mathematical weighting and grading logic
├── competitors/    → Agentic Competitor Discovery & Comparator pipelines
├── reports/        → HTML, PDF, and Markdown report generators
└── server.py       → Gradio Web UI entry point
```

**Key Features**
- Stealth scraping with Cloudflare bypass (Scrapling + Playwright)
- AI-structured CRO element extraction before LLM analysis
- Autonomous competitor discovery agent (ReAct + DuckDuckGo)
- Simultaneous multi-page audit and gap analysis
- Multilingual & market-aware (Arabic output for MENA clients)
- Interactive HTML + print-ready PDF report generation
- Premium Gradio Web UI with dark-mode support
- CLI interface for batch processing

**Tech Stack**
`Python` · `Scrapling` · `Playwright` · `LiteLLM` · `OpenRouter / OpenAI / Gemini` · `Instructor` · `Pydantic v2` · `DuckDuckGo Search` · `Jinja2` · `Gradio`

**Business Value**
- Reduces CRO audit time from hours to minutes
- Delivers objective, structured analysis free from human bias
- Provides regional competitor intelligence unavailable in standard tools
- Outputs client-ready reports with zero manual formatting
- Supports Arabic-speaking markets with native-language findings

---

## 09 · AI-Powered Lead Capture & Booking Funnel for Home Services Businesses

> *Losing leads after hours? Our AI books them while you sleep.*

A full-stack AI sales funnel built specifically for home services businesses (plumbers, HVAC, electricians, cleaning, maintenance). The system combines targeted paid advertising with an AI WhatsApp agent that instantly responds to every inquiry, qualifies the lead, and books a confirmed appointment into the client's calendar — automatically, around the clock.

**The Problem**
Every missed call or unanswered WhatsApp message after hours is a job given directly to a competitor. Home services clients need an answer within minutes — not the next morning. Manual follow-up is too slow, and most businesses have no system to capture leads outside working hours.

**The Solution**
A 6-step end-to-end AI lead machine that runs without human involvement from the moment a potential client sees an ad to the moment a confirmed appointment lands in the calendar.

**The 6-Step Workflow**
```
01 Targeted Ads (Meta / Google / YouTube)
        ↓
02 Optimized Landing Page (high-conversion design)
        ↓
03 Lead Comes In (form fill or WhatsApp message)
        ↓
04 AI Qualifies the Lead (WhatsApp — instant diagnostic questions)
        ↓
05 AI Books the Appointment (directly into Google Calendar)
        ↓
06 Client Shows Up → You Close the Deal
```

**Key Features**
- Meta, Google, and YouTube ad campaign management
- High-conversion landing page design and copywriting
- AI WhatsApp agent for instant lead response and qualification
- Automated appointment booking into Google Calendar
- Multi-channel follow-up sequences
- Custom AI voice agent (Pro tier)
- Custom workflow automation and analytics dashboard

**Tech Stack**
`n8n` · `OpenAI` · `WhatsApp Business API` · `Google Calendar API` · `Meta Ads`  · `REST APIs` · `Google Sheets` 

**Business Value**
- Captures and qualifies leads 24/7 with zero staff involvement
- Eliminates revenue lost to after-hours silence
- Delivers a full booked calendar without a manual sales process
- Scales lead intake without scaling headcount
- Works across all major home service verticals

---

*All projects are available for live demonstration upon request.*