/**
 * Projects Showcase
 * - Single source of truth for all case studies (bilingual AR/EN)
 * - Renders cards + filters, opens an in-page video modal
 * - Deep links: index.html#p=<project-id> opens the project directly
 *   (useful for sending a specific demo link in outreach messages)
 */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '201001027923';

  var CATEGORIES = {
    all:        { ar: 'كل الأنظمة',            en: 'All Systems' },
    sales:      { ar: 'المبيعات والعملاء',     en: 'Sales & Leads' },
    agents:     { ar: 'AI Agents',             en: 'AI Agents' },
    automation: { ar: 'Automation وأدوات AI',  en: 'Automation & AI Tools' }
  };

  var PROJECTS = [
    {
      id: 'home-services-funnel',
      category: 'sales',
      image: 'images/projects/booking_funnel_ai.webp',
      videos: ['EDAJnDC4m5g'],
      industry: { ar: 'الخدمات المنزلية', en: 'Home Services' },
      title: {
        ar: 'نظام جلب وحجز العملاء بالـ AI لشركات الخدمات المنزلية',
        en: 'AI Lead Capture & Booking Funnel for Home Services'
      },
      tagline: {
        ar: 'العميل اللي بيكلمك بالليل مش هيروح للمنافس — الـ AI بيرد عليه ويحجزله وانت نايم.',
        en: 'Losing leads after hours? The AI qualifies and books them while you sleep.'
      },
      result: { ar: 'حجوزات مؤكدة 24/7 بدون موظف مبيعات', en: '24/7 confirmed bookings, no sales staff needed' },
      problem: {
        ar: 'كل مكالمة أو رسالة واتساب مش بيترد عليها بعد مواعيد العمل = شغلانة راحت للمنافس. العميل محتاج رد في دقايق مش تاني يوم الصبح.',
        en: 'Every unanswered call or WhatsApp message after hours is a job handed to a competitor. Customers need an answer in minutes — not the next morning.'
      },
      solution: {
        ar: 'نظام متكامل من 6 خطوات: إعلانات مستهدفة ← Landing Page عالية التحويل ← AI Agent على واتساب يرد فوراً ويأهّل العميل بأسئلة تشخيصية ← يحجز الموعد مباشرة في Google Calendar.',
        en: 'A 6-step machine: targeted ads → high-converting landing page → an instant WhatsApp AI agent that qualifies the lead with diagnostic questions → books the appointment straight into Google Calendar.'
      },
      features: [
        { ar: 'إدارة حملات Meta و Google و YouTube', en: 'Meta, Google & YouTube campaign management' },
        { ar: 'Landing Page مصممة للتحويل', en: 'Conversion-focused landing page & copy' },
        { ar: 'AI Agent على واتساب يرد ويأهّل فوراً', en: 'Instant WhatsApp AI qualification' },
        { ar: 'حجز تلقائي في Google Calendar', en: 'Automatic booking into Google Calendar' },
        { ar: 'متابعة متعددة القنوات للعملاء', en: 'Multi-channel follow-up sequences' }
      ],
      value: [
        { ar: 'مفيش عميل بيضيع بسبب التأخير في الرد', en: 'No more revenue lost to after-hours silence' },
        { ar: 'جدول مليان مواعيد بدون عملية بيع يدوية', en: 'A full calendar without a manual sales process' },
        { ar: 'تكبير عدد العملاء بدون زيادة الموظفين', en: 'Scale lead intake without scaling headcount' }
      ],
      tech: ['n8n', 'OpenAI', 'WhatsApp API', 'Google Calendar', 'Meta Ads']
    },
    {
      id: 'whatsapp-agent',
      category: 'agents',
      image: 'images/projects/whatsapp_ai_agent.webp',
      videos: ['U_SzGpGQdeI'],
      industry: { ar: 'عيادات • صالونات • خدمات', en: 'Clinics • Salons • Services' },
      title: {
        ar: 'AI Agent على واتساب لحجز المواعيد وخدمة العملاء',
        en: 'WhatsApp AI Agent for Appointments & Support'
      },
      tagline: {
        ar: 'البيزنس بتاعك متاح دايماً على القناة اللي عملاءك بيستخدموها فعلاً.',
        en: 'Your business, always available on the channel your customers already use.'
      },
      result: { ar: 'حجوزات تلقائية + تقليل الغياب بالتذكيرات', en: 'Auto-bookings + fewer no-shows via reminders' },
      problem: {
        ar: 'العيادات والصالونات ومقدمي الخدمات بتجيلهم طلبات حجز وأسئلة طول اليوم. رسالة فايتة = فلوس فايتة، والجدولة اليدوية بطيئة ومليانة أخطاء.',
        en: 'Clinics, salons and service providers get booking requests around the clock. Missed messages mean missed revenue, and manual scheduling is slow and error-prone.'
      },
      solution: {
        ar: 'AI Agent ذكي على واتساب بيتكلم مع العميل بشكل طبيعي، يجمع بيانات الحجز، يأكد الموعد تلقائياً، ويبعت تذكيرات — مع تحويل سلس لموظف بشري وقت الحاجة.',
        en: 'An intelligent WhatsApp agent that converses naturally, collects booking details, confirms appointments automatically and sends reminders — with smooth human handoff when needed.'
      },
      features: [
        { ar: 'محادثة طبيعية بالعربي على واتساب', en: 'Natural conversations on WhatsApp' },
        { ar: 'حجز وتأكيد المواعيد تلقائياً', en: 'Automated booking & confirmation' },
        { ar: 'الرد على الأسئلة الشائعة', en: 'FAQ handling & support' },
        { ar: 'رسائل تذكير قبل الموعد', en: 'Automated reminder messages' },
        { ar: 'تحويل لموظف بشري عند الحاجة', en: 'Escalation to a human agent' },
        { ar: 'تسجيل كل المحادثات في CRM', en: 'CRM logging of every interaction' }
      ],
      value: [
        { ar: 'حجوزات 24/7 بدون أي مجهود من الموظفين', en: 'Bookings 24/7 with zero staff effort' },
        { ar: 'تقليل الغياب عن المواعيد', en: 'Fewer no-shows through reminders' },
        { ar: 'خدمة عملاء أكبر بدون موظفين أكتر', en: 'Scale support without scaling headcount' }
      ],
      tech: ['n8n', 'OpenAI', 'EvolutionAPI', 'WhatsApp', 'Google Sheets']
    },
    {
      id: 'ai-sdr',
      category: 'sales',
      image: 'images/projects/ai_sales_sdr.webp',
      videos: ['7WQ91SdPmzk', 'ccnMCRKQ7_c'],
      industry: { ar: 'فرق المبيعات B2B', en: 'B2B Sales Teams' },
      title: {
        ar: 'منصة AI SDR لأتمتة المبيعات والمتابعة',
        en: 'AI SDR & Sales Automation Platform'
      },
      tagline: {
        ar: 'المبيعات الخارجية على الطيار الآلي — بحث، تخصيص، إرسال، ومتابعة.',
        en: 'Outbound sales on autopilot — research, personalize, send, follow up.'
      },
      result: { ar: 'صفر Leads بتضيع من غير متابعة', en: 'Zero leads falling through the cracks' },
      problem: {
        ar: 'فرق المبيعات بتضيّع ساعات في البحث عن العملاء وكتابة إيميلات يدوي. معظم المتابعات بتتنسي، والعملاء بيبردوا لأن العملية بطيئة ويدوية.',
        en: 'Sales teams spend hours researching prospects and writing emails by hand. Most follow-ups are forgotten and leads go cold because the process is slow and manual.'
      },
      solution: {
        ar: 'منصة SDR بالـ AI بتبحث عن كل عميل، تكتبله رسالة مخصصة على حسب بروفايله، تحفظ كل حاجة في الـ CRM، وتشغّل متابعات مجدولة تلقائياً.',
        en: 'An AI SDR that researches each prospect, writes tailored copy from their profile, syncs everything to the CRM and runs timed follow-up sequences automatically.'
      },
      features: [
        { ar: 'بحث وتأهيل العملاء تلقائياً', en: 'Automated lead research & qualification' },
        { ar: 'إيميل مخصص لكل عميل بالـ AI', en: 'AI-personalized email per lead' },
        { ar: 'مزامنة مع الـ CRM', en: 'CRM sync & contact management' },
        { ar: 'متابعات متعددة الخطوات', en: 'Multi-step follow-up sequences' },
        { ar: 'تتبع أداء الحملات', en: 'Campaign performance tracking' }
      ],
      value: [
        { ar: 'بيستبدل ساعات من شغل الـ SDR اليدوي', en: 'Replaces hours of manual SDR work' },
        { ar: 'نسبة رد أعلى بفضل التخصيص الحقيقي', en: 'Higher reply rates through real personalization' },
        { ar: 'توسيع المبيعات بدون توظيف', en: 'Scale outbound without scaling headcount' }
      ],
      tech: ['n8n', 'OpenAI', 'REST APIs', 'Google Sheets', 'Gmail']
    },
    {
      id: 'restaurant-ordering',
      category: 'agents',
      image: 'images/projects/restaurant_ai_system.webp',
      videos: ['CKGJTuB90hY'],
      industry: { ar: 'المطاعم', en: 'Restaurants' },
      title: {
        ar: 'نظام طلبات وخدمة عملاء ذكي للمطاعم',
        en: 'AI Restaurant Ordering & Customer Service System'
      },
      tagline: {
        ar: 'بيحوّل أسئلة المنيو لطلبات مؤكدة — 24/7 بدون تدخل بشري.',
        en: 'Turning menu inquiries into confirmed orders — 24/7, zero human intervention.'
      },
      result: { ar: 'طلبات تلقائية + إشعار فوري للمطبخ', en: 'Automatic orders + instant staff alerts' },
      problem: {
        ar: 'المطاعم بتستقبل عشرات الأسئلة يومياً عن الأصناف والأسعار والتوصيل. وقت الموظفين بيضيع في ردود متكررة بدل التشغيل.',
        en: 'Restaurants receive dozens of daily questions about items, prices and delivery. Staff time is wasted on repetitive answers instead of operations.'
      },
      solution: {
        ar: 'AI Agent مربوط بالمنيو لحظياً، بيفهم ميزانية العميل ويقترح أصناف، يجاوب على السياسات من قاعدة معرفة (RAG)، يسجل الطلب برقم مميز، ويبعت إشعار فوري للموظفين على تليجرام.',
        en: 'An AI agent connected to the live menu that understands budgets, recommends items, answers policies from a RAG knowledge base, captures orders with a unique ID and alerts staff on Telegram instantly.'
      },
      features: [
        { ar: 'محادثة طبيعية بالعربي', en: 'Natural Arabic conversation' },
        { ar: 'اقتراحات حسب ميزانية العميل', en: 'Budget-based recommendations' },
        { ar: 'RAG للأسئلة والسياسات', en: 'RAG for FAQ & policies' },
        { ar: 'تسجيل الطلب برقم مميز', en: 'Order capture with unique IDs' },
        { ar: 'إشعارات تليجرام فورية للموظفين', en: 'Real-time Telegram staff alerts' }
      ],
      value: [
        { ar: 'تخفيف ضغط الأسئلة المتكررة عن الموظفين', en: 'Removes repetitive support load from staff' },
        { ar: 'استلام الطلبات بدون أي فقد', en: 'Captures orders with zero drop-off' },
        { ar: 'كل بيانات العملاء والطلبات في مكان واحد', en: 'All customer & order data in one place' }
      ],
      tech: ['n8n', 'OpenAI', 'Pinecone', 'Telegram', 'Google Sheets']
    },
    {
      id: 'enterprise-rag',
      category: 'agents',
      image: 'images/projects/rag_knowledge_base.webp',
      videos: ['zxAgNdlQ4jg'],
      industry: { ar: 'شركات الخدمات', en: 'Service Companies' },
      title: {
        ar: 'قاعدة معرفة ذكية (RAG) وموظف خدمة عملاء AI — TechnoHome',
        en: 'Enterprise RAG Knowledge Base & Support Agent — TechnoHome'
      },
      tagline: {
        ar: 'كل معرفة شركتك متاحة فوراً من خلال الـ AI — بإجابات دقيقة من بياناتك الحقيقية.',
        en: "Your company's entire knowledge, instantly accessible through AI."
      },
      result: { ar: 'إجابات دقيقة فورية من مستندات الشركة', en: 'Instant, grounded answers from company docs' },
      problem: {
        ar: 'شركات الخدمات عندها كتالوجات وأسعار وإجراءات وأسئلة شائعة كتير، بس المعلومات مشتتة وصعب توصلها بسرعة وقت المحادثة مع العميل.',
        en: 'Service companies have catalogs, pricing, procedures and FAQs — but the knowledge is scattered and impossible to surface instantly during a customer conversation.'
      },
      solution: {
        ar: 'نظام RAG متكامل: تقسيم ذكي للمستندات بالـ AI، إثراء بالـ Metadata، Embeddings في Pinecone، و Agent بيسترجع المعلومة الصح قبل ما يجاوب — فمفيش هلوسة.',
        en: 'A full RAG pipeline: LLM-based semantic chunking, metadata enrichment, embeddings in Pinecone and an agent that retrieves the right facts before answering — no hallucinations.'
      },
      features: [
        { ar: 'استيعاب ومعالجة المستندات بالكامل', en: 'End-to-end document ingestion' },
        { ar: 'تقسيم دلالي ذكي بالـ LLM', en: 'LLM-based semantic chunking' },
        { ar: 'Metadata لاسترجاع أدق', en: 'Metadata enrichment for precise retrieval' },
        { ar: 'إجابات عن الخدمات والأسعار والإجراءات', en: 'Accurate Q&A on services, pricing & procedures' },
        { ar: 'طبقة Agent للمبيعات وخدمة العملاء', en: 'AI sales & support agent layer' }
      ],
      value: [
        { ar: 'المستندات الثابتة بقت نظام دعم ذكي', en: 'Static docs become an intelligent support system' },
        { ar: 'تقليل الهلوسة بشكل جذري', en: 'Dramatically fewer hallucinations' },
        { ar: 'تأهيل العملاء ودعم الحجوزات', en: 'Qualifies leads and supports bookings' }
      ],
      tech: ['n8n', 'OpenRouter', 'Gemini Embeddings', 'Pinecone', 'RAG']
    },
    {
      id: 'bookyin',
      category: 'sales',
      image: 'images/projects/bookstore_ai_assistant.webp',
      videos: ['mReiUHoouCg'],
      industry: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
      title: {
        ar: 'BookyIN — مساعد مبيعات ذكي لمتجر كتب',
        en: 'BookyIN — AI Bookstore Sales & Lead Generation Assistant'
      },
      tagline: {
        ar: 'بيحوّل متجر ثابت لماكينة مبيعات ذكية بتفهم العميل وترشحله.',
        en: 'Transforming a static bookstore into an intelligent sales engine.'
      },
      result: { ar: 'زوار بيتحولوا لعملاء مؤهلين تلقائياً', en: 'Visitors turned into qualified leads automatically' },
      problem: {
        ar: 'المتاجر الأونلاين بتخسر مشترين لأنها مش قادرة تقدم ترشيحات شخصية. الزائر بيتوه وسط المنتجات ويمشي من غير ما يشتري.',
        en: 'Online stores lose buyers because they can’t personalize at scale. Visitors get overwhelmed and leave without buying.'
      },
      solution: {
        ar: 'AI Sales Agent داخل المتجر بيتكلم مع الزائر، يفهم اهتماماته، يرشحله كتب مناسبة، يأهّله كعميل، ياخد بياناته، ويبعتله إيميل متابعة تلقائي.',
        en: 'An embedded AI sales agent that chats with visitors, understands their interests, recommends books, qualifies them, captures contact info and triggers an automated follow-up email.'
      },
      features: [
        { ar: 'ترشيحات شخصية بالـ AI', en: 'AI-personalized recommendations' },
        { ar: 'بحث لحظي في المنتجات عبر APIs', en: 'Real-time product search via APIs' },
        { ar: 'تأهيل العملاء برقم Lead مميز', en: 'Lead qualification with unique IDs' },
        { ar: 'CRM على Google Sheets', en: 'Google Sheets CRM' },
        { ar: 'إيميل متابعة تلقائي', en: 'Automated Gmail follow-up' }
      ],
      value: [
        { ar: 'زوار سلبيين بيتحولوا لعملاء محتملين', en: 'Passive visitors become qualified leads' },
        { ar: 'تجربة شراء شخصية على نطاق واسع', en: 'Personalized shopping at scale' },
        { ar: 'جلب عملاء بدون أي تدخل يدوي', en: 'Zero-touch customer acquisition' }
      ],
      tech: ['n8n', 'OpenAI', 'REST APIs', 'Google Sheets', 'Gmail']
    },
    {
      id: 'lead-gen-outreach',
      category: 'sales',
      image: 'images/projects/email_outreach_ai.webp',
      videos: ['BURxhv2BQcQ'],
      industry: { ar: 'الشركات والوكالات', en: 'Agencies & B2B' },
      title: {
        ar: 'نظام توليد عملاء وتواصل مخصص بالإيميل بالـ AI',
        en: 'AI Lead Generation & Personalized Email Outreach'
      },
      tagline: {
        ar: 'لاقي الناس الصح، وقولهم الكلام الصح — أوتوماتيك.',
        en: 'Find the right people. Say the right thing. Automatically.'
      },
      result: { ar: 'Pipeline عملاء ثابت شغال في الخلفية', en: 'A consistent pipeline running in the background' },
      problem: {
        ar: 'إيجاد عملاء جدد بشكل مستمر بياخد وقت ومجهود كبير، والرسائل العامة مبتجيبش رد.',
        en: 'Finding new clients consistently takes huge time and effort, and generic messages get ignored.'
      },
      solution: {
        ar: 'نظام بيكتشف العملاء المؤهلين، يثري بياناتهم بالـ AI، ويبعت إيميلات مخصصة على نطاق واسع مع متابعات بتتكيف حسب التفاعل.',
        en: 'A system that discovers qualified leads, enriches them with AI and sends personalized emails at scale — with follow-ups that adapt to engagement.'
      },
      features: [
        { ar: 'اكتشاف وتأهيل العملاء تلقائياً', en: 'Automated lead discovery & qualification' },
        { ar: 'نص إيميل مخصص لكل عميل', en: 'AI-written copy per prospect' },
        { ar: 'متابعات متعددة الخطوات', en: 'Multi-step follow-ups' },
        { ar: 'تتبع التفاعل ومزامنة CRM', en: 'Engagement tracking & CRM sync' }
      ],
      value: [
        { ar: 'قمع مبيعات ثابت ومؤتمت', en: 'A consistent, automated top-of-funnel' },
        { ar: 'تخصيص بدون مجهود يدوي', en: 'Personalization without manual effort' },
        { ar: 'متابعات شغالة في الخلفية', en: 'Follow-ups running in the background' }
      ],
      tech: ['n8n', 'OpenAI', 'Google Sheets', 'Gmail', 'REST APIs']
    },
    {
      id: 'landing-page-auditor',
      category: 'automation',
      image: 'images/projects/landing_page_auditor.webp',
      embed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7467182067739492353?compact=1',
      industry: { ar: 'التسويق و CRO', en: 'Marketing & CRO' },
      title: {
        ar: 'Landing Page Auditor — تحليل صفحات الهبوط ومقارنة المنافسين بالـ AI',
        en: 'Landing Page Auditor AI & Competitor Intelligence'
      },
      tagline: {
        ar: 'تدقيق CRO احترافي ومقارنة بالمنافسين — أوتوماتيك بالكامل وبتقرير جاهز للعميل.',
        en: 'Enterprise-grade CRO auditing and competitive benchmarking — fully automated.'
      },
      result: { ar: 'تدقيق في دقائق بدل ساعات + تقرير PDF', en: 'Audits in minutes, not hours + PDF report' },
      problem: {
        ar: 'تدقيق صفحات الهبوط يدوياً بياخد ساعات وبيعتمد على رأي شخصي، وأدوات المقارنة مبتقولكش "إيه اللي تصلحه" ولا بتفهم السوق المحلي.',
        en: 'Manual CRO audits take hours and are subjective; competitor tools compare scores without telling you what to fix — and ignore regional market context.'
      },
      solution: {
        ar: 'Pipeline من Agents: Scraping متخفي يتخطى Cloudflare، استخراج عناصر التسويق قبل ما الـ AI يشوفها، Agent بيكتشف المنافسين في السوق المحدد، تحليل الفجوات، وتقرير HTML/PDF بخطة عمل.',
        en: 'An agentic pipeline: stealth scraping past Cloudflare, structured CRO extraction before the LLM, an agent that discovers regional competitors, gap analysis and HTML/PDF reports with an action plan.'
      },
      features: [
        { ar: 'Scraping متخفي (Scrapling + Playwright)', en: 'Stealth scraping (Scrapling + Playwright)' },
        { ar: 'استخراج عناصر الـ CRO بشكل منظم', en: 'Structured CRO element extraction' },
        { ar: 'Agent لاكتشاف المنافسين (ReAct)', en: 'Autonomous competitor discovery (ReAct)' },
        { ar: 'تحليل فجوات وخطة عمل بالأولويات', en: 'Gap analysis & prioritized action plan' },
        { ar: 'تقارير بالعربي لعملاء المنطقة', en: 'Arabic reports for MENA clients' }
      ],
      value: [
        { ar: 'وقت التدقيق من ساعات لدقائق', en: 'Audit time from hours to minutes' },
        { ar: 'تحليل موضوعي ومنظم', en: 'Objective, structured analysis' },
        { ar: 'تقارير جاهزة للعميل بدون تنسيق يدوي', en: 'Client-ready reports, zero formatting' }
      ],
      tech: ['Python', 'Playwright', 'LiteLLM', 'Pydantic', 'Gradio']
    },
    {
      id: 'resume-analyzer',
      category: 'automation',
      image: 'images/projects/resume_analyzer_ai.webp',
      videos: ['TQXmBMt0Fa8'],
      industry: { ar: 'الموارد البشرية', en: 'HR & Recruiting' },
      title: {
        ar: 'محلل السير الذاتية الذكي لفرق الـ HR',
        en: 'AI Resume Analyzer for HR Teams'
      },
      tagline: {
        ar: 'تقييم ذكي وفوري لكل CV — في ثواني.',
        en: 'Instant, intelligent feedback on every resume — in seconds.'
      },
      result: { ar: 'الفرز من ساعات لثواني', en: 'Screening from hours to seconds' },
      problem: {
        ar: 'فرق الـ HR بتقضي ساعات في فرز مئات السير الذاتية يدوياً لكل وظيفة.',
        en: 'HR teams spend hours manually screening hundreds of resumes per opening.'
      },
      solution: {
        ar: 'أداة بتقرأ الـ CV وتقيّمه مقابل الوصف الوظيفي، تديله درجة على معايير واضحة، وتطلع توصيات وملاحظات قابلة للتنفيذ.',
        en: 'A tool that parses resumes, scores them against the job description on clear criteria and generates actionable recommendations.'
      },
      features: [
        { ar: 'قراءة واستخراج بيانات الـ CV', en: 'Resume parsing & extraction' },
        { ar: 'تقييم بالـ AI مقابل الوظيفة', en: 'AI scoring against job criteria' },
        { ar: 'توصيات تفصيلية للتحسين', en: 'Detailed improvement recommendations' },
        { ar: 'معالجة دفعات كاملة', en: 'Batch processing' }
      ],
      value: [
        { ar: 'وقت الفرز من ساعات لثواني', en: 'Screening time from hours to seconds' },
        { ar: 'تقييم ثابت وغير متحيز', en: 'Consistent, unbiased evaluation' }
      ],
      tech: ['n8n', 'OpenAI', 'REST APIs', 'Google Sheets']
    }
  ];

  /* ---------------- Helpers ---------------- */
  function lang() {
    return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'ar';
  }
  function t(obj) { return obj ? (obj[lang()] || obj.ar) : ''; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function i18nAttrs(obj) {
    return 'data-ar="' + esc(obj.ar) + '" data-en="' + esc(obj.en) + '"';
  }
  function ytEmbed(id) {
    return 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
  }

  var ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  var ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>';

  /* ---------------- Render: filters + cards ---------------- */
  function renderFilters(container) {
    var html = Object.keys(CATEGORIES).map(function (key, i) {
      var count = key === 'all' ? PROJECTS.length : PROJECTS.filter(function (p) { return p.category === key; }).length;
      return '<button type="button" class="pf-btn' + (i === 0 ? ' active' : '') + '" data-filter="' + key + '" aria-pressed="' + (i === 0) + '">' +
        '<span ' + i18nAttrs(CATEGORIES[key]) + '>' + esc(CATEGORIES[key].ar) + '</span>' +
        '<span class="pf-count">' + count + '</span></button>';
    }).join('');
    container.innerHTML = html;

    container.addEventListener('click', function (e) {
      var btn = e.target.closest('.pf-btn');
      if (!btn) return;
      var filter = btn.getAttribute('data-filter');
      container.querySelectorAll('.pf-btn').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on);
      });
      document.querySelectorAll('.case-card').forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.hidden = !show;
      });
    });
  }

  function renderCards(grid) {
    grid.innerHTML = PROJECTS.map(function (p, i) {
      var isVideo = !!(p.videos && p.videos.length);
      var badge = isVideo
        ? { ar: 'شاهد النظام شغال', en: 'Watch it in action' }
        : { ar: 'شاهد العرض', en: 'View the demo' };
      var techChips = p.tech.slice(0, 4).map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');
      return '' +
        '<article class="case-card" data-category="' + p.category + '" data-id="' + p.id + '" tabindex="0" role="button" aria-haspopup="dialog">' +
          '<div class="case-media">' +
            '<img src="' + p.image + '" alt="' + esc(p.title.en) + '" loading="lazy" decoding="async" width="600" height="600">' +
            '<span class="case-num">' + String(i + 1).padStart(2, '0') + '</span>' +
            '<span class="case-play" aria-hidden="true">' + ICON_PLAY + '</span>' +
            (p.videos && p.videos.length > 1 ? '<span class="case-multi" ' + i18nAttrs({ ar: p.videos.length + ' فيديو', en: p.videos.length + ' videos' }) + '>' + p.videos.length + ' فيديو</span>' : '') +
          '</div>' +
          '<div class="case-body">' +
            '<div class="case-meta">' +
              '<span class="case-cat cat-' + p.category + '" ' + i18nAttrs(CATEGORIES[p.category]) + '>' + esc(CATEGORIES[p.category].ar) + '</span>' +
              '<span class="case-industry" ' + i18nAttrs(p.industry) + '>' + esc(p.industry.ar) + '</span>' +
            '</div>' +
            '<h3 class="case-title" ' + i18nAttrs(p.title) + '>' + esc(p.title.ar) + '</h3>' +
            '<p class="case-tagline" ' + i18nAttrs(p.tagline) + '>' + esc(p.tagline.ar) + '</p>' +
            '<div class="case-result">' + ICON_CHECK + '<span ' + i18nAttrs(p.result) + '>' + esc(p.result.ar) + '</span></div>' +
            '<div class="case-tech">' + techChips + '</div>' +
            '<span class="case-cta"><span ' + i18nAttrs(badge) + '>' + esc(badge.ar) + '</span>' + ICON_ARROW + '</span>' +
          '</div>' +
        '</article>';
    }).join('');

    grid.addEventListener('click', function (e) {
      var card = e.target.closest('.case-card');
      if (card) openProject(card.getAttribute('data-id'));
    });
    grid.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var card = e.target.closest('.case-card');
      if (!card) return;
      e.preventDefault();
      openProject(card.getAttribute('data-id'));
    });
  }

  /* ---------------- Modal ---------------- */
  var modal, mediaEl, bodyEl, currentId = null, currentVideo = 0, lastFocus = null;

  function waLink(p) {
    var msg = lang() === 'en'
      ? 'Hi Mohamed, I saw the "' + p.title.en + '" system on your website and I want something similar for my business.'
      : 'السلام عليكم يا محمد، شفت نظام "' + p.title.ar + '" على موقعك وعايز حاجة زيه في البيزنس بتاعي.';
    return 'https://api.whatsapp.com/send?phone=' + WHATSAPP_NUMBER + '&text=' + encodeURIComponent(msg);
  }

  function renderMedia(p) {
    if (p.embed) {
      mediaEl.className = 'pm-media is-post';
      mediaEl.innerHTML = '<iframe src="' + p.embed + '" title="' + esc(p.title.en) + '" allowfullscreen loading="lazy"></iframe>';
      return;
    }
    mediaEl.className = 'pm-media';
    mediaEl.innerHTML = '<iframe src="' + ytEmbed(p.videos[currentVideo]) + '" title="' + esc(p.title.en) +
      '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }

  function renderBody(p) {
    var L = lang();
    var labels = {
      problem:  { ar: 'المشكلة', en: 'The Problem' },
      solution: { ar: 'الحل', en: 'The Solution' },
      features: { ar: 'النظام بيعمل إيه', en: 'What the system does' },
      value:    { ar: 'القيمة للبيزنس', en: 'Business Value' },
      stack:    { ar: 'التقنيات', en: 'Tech Stack' },
      cta:      { ar: 'عايز نظام زي ده لشغلك؟ كلمني على واتساب', en: 'Want this for your business? Chat on WhatsApp' },
      prev:     { ar: 'السابق', en: 'Previous' },
      next:     { ar: 'التالي', en: 'Next' },
      video:    { ar: 'فيديو', en: 'Video' },
      copy:     { ar: 'نسخ رابط المشروع', en: 'Copy project link' }
    };
    function lb(k) { return labels[k][L]; }

    var tabs = '';
    if (p.videos && p.videos.length > 1) {
      tabs = '<div class="pm-tabs" role="tablist">' + p.videos.map(function (_, i) {
        return '<button type="button" role="tab" class="pm-tab' + (i === currentVideo ? ' active' : '') + '" data-video="' + i + '" aria-selected="' + (i === currentVideo) + '">' + lb('video') + ' ' + (i + 1) + '</button>';
      }).join('') + '</div>';
    }

    var list = function (items) {
      return '<ul class="pm-list">' + items.map(function (it) { return '<li>' + ICON_CHECK + '<span>' + esc(t(it)) + '</span></li>'; }).join('') + '</ul>';
    };

    var idx = PROJECTS.findIndex(function (x) { return x.id === p.id; });
    var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    var next = PROJECTS[(idx + 1) % PROJECTS.length];

    bodyEl.innerHTML = '' +
      tabs +
      '<div class="pm-head">' +
        '<div class="case-meta">' +
          '<span class="case-cat cat-' + p.category + '">' + esc(t(CATEGORIES[p.category])) + '</span>' +
          '<span class="case-industry">' + esc(t(p.industry)) + '</span>' +
        '</div>' +
        '<h3 id="pm-title" class="pm-title">' + esc(t(p.title)) + '</h3>' +
        '<p class="pm-tagline">' + esc(t(p.tagline)) + '</p>' +
      '</div>' +
      '<div class="pm-ps">' +
        '<div class="pm-box pm-problem"><h4>' + lb('problem') + '</h4><p>' + esc(t(p.problem)) + '</p></div>' +
        '<div class="pm-box pm-solution"><h4>' + lb('solution') + '</h4><p>' + esc(t(p.solution)) + '</p></div>' +
      '</div>' +
      '<div class="pm-cols">' +
        '<div><h4 class="pm-h">' + lb('features') + '</h4>' + list(p.features) + '</div>' +
        '<div><h4 class="pm-h">' + lb('value') + '</h4>' + list(p.value) +
          '<h4 class="pm-h" style="margin-top:1.25rem">' + lb('stack') + '</h4>' +
          '<div class="case-tech">' + p.tech.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</div>' +
      '<a class="btn btn-primary pm-cta" target="_blank" rel="noopener" href="' + waLink(p) + '">' + lb('cta') + ICON_ARROW + '</a>' +
      '<div class="pm-nav">' +
        '<button type="button" class="pm-navbtn" data-go="' + prev.id + '"><span class="pm-arrow pm-arrow-prev">' + ICON_ARROW + '</span><span><small>' + lb('prev') + '</small>' + esc(t(prev.title)) + '</span></button>' +
        '<button type="button" class="pm-copy" data-copy="' + p.id + '">' + lb('copy') + '</button>' +
        '<button type="button" class="pm-navbtn pm-navbtn-next" data-go="' + next.id + '"><span><small>' + lb('next') + '</small>' + esc(t(next.title)) + '</span><span class="pm-arrow">' + ICON_ARROW + '</span></button>' +
      '</div>';
  }

  function openProject(id, opts) {
    var p = PROJECTS.find(function (x) { return x.id === id; });
    if (!p) return;
    if (!modal.classList.contains('active')) lastFocus = document.activeElement;
    currentId = id;
    currentVideo = 0;
    renderMedia(p);
    renderBody(p);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.pm-dialog').scrollTop = 0;
    modal.querySelector('.pm-close').focus({ preventScroll: true });
    if (!(opts && opts.fromHash)) {
      history.replaceState(null, '', '#p=' + id);
    }
  }

  function closeProject() {
    if (!modal.classList.contains('active')) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    mediaEl.innerHTML = ''; // stops the video immediately
    currentId = null;
    if (location.hash.indexOf('#p=') === 0) {
      history.replaceState(null, '', location.pathname + location.search + '#projects');
    }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  function initModal() {
    modal = document.getElementById('projectModal');
    if (!modal) return;
    mediaEl = modal.querySelector('.pm-media');
    bodyEl = modal.querySelector('.pm-body');

    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) return closeProject();
      var go = e.target.closest('[data-go]');
      if (go) return openProject(go.getAttribute('data-go'));
      var tab = e.target.closest('.pm-tab');
      if (tab) {
        currentVideo = parseInt(tab.getAttribute('data-video'), 10) || 0;
        var p = PROJECTS.find(function (x) { return x.id === currentId; });
        renderMedia(p);
        modal.querySelectorAll('.pm-tab').forEach(function (b, i) {
          b.classList.toggle('active', i === currentVideo);
          b.setAttribute('aria-selected', i === currentVideo);
        });
        return;
      }
      var copy = e.target.closest('[data-copy]');
      if (copy) {
        var url = location.origin + location.pathname + '#p=' + copy.getAttribute('data-copy');
        var done = function () {
          var old = copy.textContent;
          copy.textContent = lang() === 'en' ? 'Link copied ✓' : 'تم نسخ الرابط ✓';
          setTimeout(function () { copy.textContent = old; }, 1800);
        };
        if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done); else done();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeProject();
      if (e.key === 'Tab') { // simple focus trap
        var f = modal.querySelectorAll('button, a[href], iframe, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Re-render modal text if language changes while open
    new MutationObserver(function () {
      if (currentId) {
        var p = PROJECTS.find(function (x) { return x.id === currentId; });
        renderBody(p);
      }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
  }

  function handleHash() {
    var m = location.hash.match(/^#p=([\w-]+)/);
    if (m) openProject(m[1], { fromHash: true });
  }

  /* ---------------- Platform gallery ---------------- */
  function initPlatformGallery() {
    var root = document.querySelector('.platform-showcase');
    if (!root) return;
    var main = root.querySelector('.pg-main img');
    var url = root.querySelector('.pg-url');
    var link = root.querySelector('.pg-main');
    root.querySelectorAll('.pg-thumb').forEach(function (th) {
      th.addEventListener('click', function () {
        root.querySelectorAll('.pg-thumb').forEach(function (x) { x.classList.remove('active'); });
        th.classList.add('active');
        main.style.opacity = '0';
        setTimeout(function () {
          main.src = th.getAttribute('data-src');
          main.alt = th.getAttribute('data-alt') || '';
          url.textContent = th.getAttribute('data-url');
          link.href = 'https://' + th.getAttribute('data-url').split('/')[0] + '/';
          main.style.opacity = '1';
        }, 150);
      });
    });
  }

  /* ---------------- Boot ---------------- */
  // Render immediately (script is deferred → runs before DOMContentLoaded),
  // so the global language switcher in script.js translates the new nodes too.
  var filters = document.getElementById('projectFilters');
  var grid = document.getElementById('projectsGrid');
  if (filters) renderFilters(filters);
  if (grid) renderCards(grid);
  initModal();
  initPlatformGallery();
  window.addEventListener('hashchange', handleHash);
  document.addEventListener('DOMContentLoaded', handleHash);
})();
