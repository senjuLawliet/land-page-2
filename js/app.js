/* ═══════════════════════════════════════════════════════════════
   SoulBits AI — Landing Page 2 · Application Logic
   Translation Engine · Tab System · Modal · Controller Mockups
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Complete Translation Dictionary ── */
  const translations = {
    en: {
      brandTitle: 'SoulBits AI',
      brandSlogan: 'Next-Gen AI Companion',
      tabHome: 'Home',
      tabFeatures: 'Features',
      tabCompanions: 'Companions',
      tabPricing: 'Pricing',
      tabDeveloper: 'Developer Hub',
      signIn: 'Sign In',
      heroTitle: 'Where Soul Meets Code',
      heroDescription: 'Experience the next generation of AI companionship. SoulBits AI fuses emotional intelligence with cutting-edge neural architecture to create truly meaningful digital connections.',
      heroCta: 'Start Chatting',
      storeDownload: 'Download on the',
      storeApple: 'App Store',
      storeGet: 'Get it on',
      storeGoogle: 'Google Play',
      ctrlChatTitle: 'Neural Chat Interface',
      ctrlChatDesc: 'Engage in fluid, context-aware conversations powered by SoulBits\' adaptive language model.',
      ctrlCallTitle: 'Voice Channel',
      ctrlCallDesc: 'Crystal-clear neural TTS with real-time audio visualization and sub-200ms latency.',
      ctrlPostTitle: 'Social Feed Engine',
      ctrlPostDesc: 'Publish and discover AI-curated content with intelligent sentiment routing.',
      ctrlSyncTitle: 'Cross-Device Sync',
      ctrlSyncDesc: 'End-to-end encrypted synchronization of neural state across all your devices.',
      ctrlCreateTitle: 'Creative Studio',
      ctrlCreateDesc: 'Design geometric mandalas and structural compositions with AI-assisted tools.',
      ctrlSecurityTitle: 'Quantum Vault',
      ctrlSecurityDesc: 'AES-256 encryption with quantum-resistant key exchange and integrity loops.',
      simChatAi1: 'Hello! I\'m your SoulBits companion. How can I assist you today?',
      simChatUser1: 'Tell me about your neural architecture.',
      simChatAi2: 'I run on a hybrid transformer-SSM stack with 128K context window and real-time emotional inference.',
      simChatPlaceholder: 'Type a message…',
      simCallStatus: 'Voice channel active — Neural TTS engaged',
      simPostAuthor: 'SoulBits AI',
      simPostContent: 'Just deployed v2.4 with enhanced empathy mapping. The future of AI companionship is here.',
      simPostAuthor2: 'Community',
      simPostContent2: 'Amazing update! The new voice synthesis feels incredibly natural.',
      simPostPlaceholder: 'Share an update…',
      simSync1: 'Neural weights synchronized',
      simSync2: 'Memory embeddings merged',
      simSync3: 'Cross-device state propagating…',
      simSync4: 'Cloud backup complete',
      simCreateGrid: 'Grid',
      simCreateShape: 'Shape',
      simCreateExport: 'Export',
      simSecGen: 'Generating 256-bit quantum-resistant keypair…',
      simSecOk: '✓ Encryption handshake verified',
      simSecLoop: 'Running integrity check loop… [████████░░] 82%',
      featuresTitle: 'Core Services',
      featuresSubtitle: 'Six pillars of intelligent companionship, engineered for seamless human-AI interaction.',
      featChatTitle: 'Neural Chat',
      featChatDesc: 'Context-aware conversational AI with 128K token memory, emotional tone detection, and multi-turn reasoning across 40+ languages.',
      featCallTitle: 'Voice Synthesis',
      featCallDesc: 'Real-time neural TTS with adaptive prosody, sub-200ms latency, and biometric voice cloning for personalized audio companionship.',
      featPostTitle: 'Social Feed',
      featPostDesc: 'AI-curated content streams with sentiment analysis, community engagement metrics, and intelligent post scheduling.',
      featSyncTitle: 'Cross-Device Sync',
      featSyncDesc: 'End-to-end encrypted state synchronization across mobile, desktop, and web with conflict-free replicated data types.',
      featCreateTitle: 'Creative Studio',
      featCreateDesc: 'Generative design tools with mandala grids, vector export, and AI-assisted composition for visual and structural creation.',
      featSecurityTitle: 'Quantum Vault',
      featSecurityDesc: 'AES-256 encryption with quantum-resistant key exchange, zero-knowledge architecture, and hardware security module integration.',
      companionsTitle: 'AI Companions',
      companionsSubtitle: 'Meet your specialized AI partners — each crafted with unique expertise and personality.',
      compDavidName: 'David Lin',
      compDavidRole: 'Systems Advisor',
      compDavidBackstory: 'Former MIT systems architect with 15 years in distributed computing. David specializes in infrastructure optimization, cloud migration strategies, and real-time performance tuning for enterprise AI deployments.',
      compElenaName: 'Dr. Elena Vasquez',
      compElenaRole: 'Clinical Liaison',
      compElenaBackstory: 'Board-certified psychiatrist and AI ethics researcher. Dr. Elena bridges clinical psychology with compassionate AI design, ensuring every interaction prioritizes emotional wellbeing and ethical boundaries.',
      compConnect: 'Connect',
      pricingTitle: 'Subscription Plans',
      pricingSubtitle: 'Choose the plan that matches your journey. All plans billed monthly.',
      planLightName: 'Soul Light',
      planCoreName: 'Soul Core',
      planInfiniteName: 'Soul Infinite',
      planPeriod: 'per month',
      planLightF1: 'Basic neural chat (50 messages/day)',
      planLightF2: '1 AI companion',
      planLightF3: 'Community feed access',
      planLightF4: 'Standard encryption',
      planLightCta: 'Get Started Free',
      planCoreF1: 'Unlimited neural chat',
      planCoreF2: '3 AI companions',
      planCoreF3: 'Voice synthesis & calls',
      planCoreF4: 'Cross-device sync',
      planCoreF5: 'Creative studio access',
      planCoreCta: 'Subscribe Now',
      planInfiniteF1: 'Everything in Soul Core',
      planInfiniteF2: 'Unlimited AI companions',
      planInfiniteF3: 'Quantum vault security',
      planInfiniteF4: 'Priority neural processing',
      planInfiniteF5: 'API access & developer tools',
      planInfiniteCta: 'Go Infinite',
      devTitle: 'Developer Hub',
      devSubtitle: 'Integrate SoulBits AI into your applications with our open SDK and Docker-ready infrastructure.',
      devTabInstall: 'Installation',
      devTabConfig: 'Configuration',
      devTabApi: 'API Reference',
      devTermInstall: 'soulbits — docker install',
      devTermConfig: 'soulbits — config.yaml',
      devTermApi: 'soulbits — api test',
      devInstallTitle: 'Quick Start Installation',
      devInstallDesc: 'The SoulBits AI Docker image includes the full neural inference stack, REST API gateway, and WebSocket event stream. Requires Docker 24+ and 8GB RAM minimum.',
      devConfigTitle: 'Environment Configuration',
      devConfigDesc: 'Mount your config file with -v ./config.yaml:/app/config.yaml or set environment variables SOULBITS_API_KEY, SOULBITS_MODEL, and SOULBITS_PORT for containerized deployments.',
      devApiTitle: 'REST API Endpoints',
      devApiDesc: 'The v1 API supports /chat, /voice, /sync, and /companions endpoints. WebSocket streaming is available at ws://localhost:8080/v1/stream for real-time token generation.',
      devGithub: 'View on GitHub',
      footerCopy: '© 2026 SoulBits AI. All rights reserved.',
      authWelcome: 'Welcome to SoulBits',
      authSubtitle: 'Sign in to access your AI companions and sync across devices.',
      authSignIn: 'Sign In',
      authSignUp: 'Sign Up',
      authGoogle: 'Continue with Google',
      authApple: 'Continue with Apple',
      authOr: 'or continue with email',
      authEmailLabel: 'Email',
      authPasswordLabel: 'Password',
      authEmailPlaceholder: 'you@example.com',
      authPasswordPlaceholder: 'Enter your password',
      authSubmitSignIn: 'Sign In',
      authSubmitSignUp: 'Create Account',
      authOtpTitle: 'Enter the verification code sent to your email',
      authOtpVerify: 'Verify Code',
      sandboxPlaceholder: 'Type a message…',
      sandboxSend: 'Send',
      sandboxDavidGreeting: 'Hello! I\'m David Lin, your Systems Advisor. What infrastructure challenge can I help you solve today?',
      sandboxDavidReply: 'Based on your architecture, I\'d recommend a distributed caching layer with Redis Cluster for sub-millisecond latency.',
      sandboxElenaGreeting: 'Hi there! I\'m Dr. Elena Vasquez. I\'m here to support your emotional wellbeing. How are you feeling today?',
      sandboxElenaReply: 'That\'s a valid feeling. Let\'s explore some grounding techniques that can help you process this constructively.'
    },

    ar: {
      brandTitle: 'SoulBits AI',
      brandSlogan: 'رفيق ذكاء اصطناعي الجيل القادم',
      tabHome: 'الرئيسية',
      tabFeatures: 'الميزات',
      tabCompanions: 'الرفقاء',
      tabPricing: 'الأسعار',
      tabDeveloper: 'مركز المطورين',
      signIn: 'تسجيل الدخول',
      heroTitle: 'حيث يلتقي الروح بالكود',
      heroDescription: 'اختبر الجيل القادم من رفقة الذكاء الاصطناعي. يدمج SoulBits AI الذكاء العاطفي مع الهندسة العصبية المتطورة لخلق روابط رقمية ذات معنى حقيقي.',
      heroCta: 'ابدأ المحادثة',
      storeDownload: 'حمّل من',
      storeApple: 'App Store',
      storeGet: 'احصل عليه من',
      storeGoogle: 'Google Play',
      ctrlChatTitle: 'واجهة الدردشة العصبية',
      ctrlChatDesc: 'انخرط في محادثات سلسة وواعية بالسياق مدعومة بنموذج SoulBits اللغوي التكيفي.',
      ctrlCallTitle: 'قناة الصوت',
      ctrlCallDesc: 'تحويل نص إلى كلام عصبي واضح مع تصور صوتي في الوقت الفعلي وزمن استجابة أقل من 200 مللي ثانية.',
      ctrlPostTitle: 'محرك التغذية الاجتماعية',
      ctrlPostDesc: 'انشر واكتشف محتوى منسقاً بالذكاء الاصطناعي مع توجيه ذكي للمشاعر.',
      ctrlSyncTitle: 'مزامنة الأجهزة',
      ctrlSyncDesc: 'مزامنة مشفرة من طرف إلى طرف للحالة العصبية عبر جميع أجهزتك.',
      ctrlCreateTitle: 'استوديو الإبداع',
      ctrlCreateDesc: 'صمم ماندala هندسية وتركيبات هيكلية بأدوات مدعومة بالذكاء الاصطناعي.',
      ctrlSecurityTitle: 'الخزنة الكمية',
      ctrlSecurityDesc: 'تشفير AES-256 مع تبادل مفاتيح مقاوم للكم وحلقات سلامة.',
      simChatAi1: 'مرحباً! أنا رفيق SoulBits الخاص بك. كيف يمكنني مساعدتك اليوم؟',
      simChatUser1: 'أخبرني عن بنيتك العصبية.',
      simChatAi2: 'أعمل على مكدس transformer-SSM هجين مع نافذة سياق 128K واستنتاج عاطفي في الوقت الفعلي.',
      simChatPlaceholder: 'اكتب رسالة…',
      simCallStatus: 'قناة الصوت نشطة — TTS العصبي مفعّل',
      simPostAuthor: 'SoulBits AI',
      simPostContent: 'تم نشر الإصدار v2.4 مع تحسين رسم خرائط التعاطف. مستقبل رفقة الذكاء الاصطناعي هنا.',
      simPostAuthor2: 'المجتمع',
      simPostContent2: 'تحديث رائع! تركيب الصوت الجديد يبدو طبيعياً بشكل لا يصدق.',
      simPostPlaceholder: 'شارك تحديثاً…',
      simSync1: 'تمت مزامنة الأوزان العصبية',
      simSync2: 'تم دمج تضمينات الذاكرة',
      simSync3: 'حالة الأجهزة المتعددة قيد الانتشار…',
      simSync4: 'اكتمل النسخ الاحتياطي السحابي',
      simCreateGrid: 'شبكة',
      simCreateShape: 'شكل',
      simCreateExport: 'تصدير',
      simSecGen: 'جاري إنشاء زوج مفاتيح مقاوم للكم 256 بت…',
      simSecOk: '✓ تم التحقق من مصافحة التشفير',
      simSecLoop: 'تشغيل حلقة فحص السلامة… [████████░░] 82%',
      featuresTitle: 'الخدمات الأساسية',
      featuresSubtitle: 'ستة أركان للرفقة الذكية، مصممة لتفاعل سلس بين الإنسان والذكاء الاصطناعي.',
      featChatTitle: 'الدردشة العصبية',
      featChatDesc: 'ذكاء اصطناعي محادثة واعٍ بالسياق مع ذاكرة 128K رمز، كشف النبرة العاطفية، واستدلال متعدد الأدوار عبر أكثر من 40 لغة.',
      featCallTitle: 'تركيب الصوت',
      featCallDesc: 'TTS عصبي في الوقت الفعلي مع إيقاع تكيفي، زمن استجابة أقل من 200 مللي ثانية، واستنساخ صوتي بيومتري.',
      featPostTitle: 'التغذية الاجتماعية',
      featPostDesc: 'تدفقات محتوى منسقة بالذكاء الاصطناعي مع تحليل المشاعر ومقاييس التفاعل المجتمعي وجدولة ذكية.',
      featSyncTitle: 'مزامنة الأجهزة',
      featSyncDesc: 'مزامنة حالة مشفرة من طرف إلى طرف عبر الهاتف وسطح المكتب والويب مع أنواع بيانات CRDT.',
      featCreateTitle: 'استوديو الإبداع',
      featCreateDesc: 'أدوات تصميم توليدية مع شبكات ماندala وتصدير متجهات وتكوين بمساعدة الذكاء الاصطناعي.',
      featSecurityTitle: 'الخزنة الكمية',
      featSecurityDesc: 'تشفير AES-256 مع تبادل مفاتيح مقاوم للكم، بنية zero-knowledge، وتكامل وحدة الأمان الأجهزة.',
      companionsTitle: 'رفقاء الذكاء الاصطناعي',
      companionsSubtitle: 'تعرف على شركائك المتخصصين في الذكاء الاصطناعي — كل منهم مصمم بخبرة وشخصية فريدة.',
      compDavidName: 'ديفيد لين',
      compDavidRole: 'مستشار الأنظمة',
      compDavidBackstory: 'مهندس أنظمة سابق في MIT مع 15 عاماً في الحوسبة الموزعة. يتخصص ديفيد في تحسين البنية التحتية واستراتيجيات الهجرة السحابية وضبط الأداء في الوقت الفعلي.',
      compElenaName: 'د. إيلينا فاسكيز',
      compElenaRole: 'المستشارة السريرية',
      compElenaBackstory: 'طبيبة نفسية معتمدة وباحثة في أخلاقيات الذكاء الاصطناعي. تربط د. إيلينا علم النفس السريري بتصميم ذكاء اصطناعي رحيم.',
      compConnect: 'اتصل',
      pricingTitle: 'خطط الاشتراك',
      pricingSubtitle: 'اختر الخطة التي تناسب رحلتك. جميع الخطط تُفوتر شهرياً.',
      planLightName: 'Soul Light',
      planCoreName: 'Soul Core',
      planInfiniteName: 'Soul Infinite',
      planPeriod: 'شهرياً',
      planLightF1: 'دردشة عصبية أساسية (50 رسالة/يوم)',
      planLightF2: 'رفيق ذكاء اصطناعي واحد',
      planLightF3: 'وصول لتغذية المجتمع',
      planLightF4: 'تشفير قياسي',
      planLightCta: 'ابدأ مجاناً',
      planCoreF1: 'دردشة عصبية غير محدودة',
      planCoreF2: '3 رفقاء ذكاء اصطناعي',
      planCoreF3: 'تركيب الصوت والمكالمات',
      planCoreF4: 'مزامنة الأجهزة',
      planCoreF5: 'وصول لاستوديو الإبداع',
      planCoreCta: 'اشترك الآن',
      planInfiniteF1: 'كل ما في Soul Core',
      planInfiniteF2: 'رفقاء ذكاء اصطناعي غير محدودين',
      planInfiniteF3: 'أمان الخزنة الكمية',
      planInfiniteF4: 'معالجة عصبية ذات أولوية',
      planInfiniteF5: 'وصول API وأدوات المطورين',
      planInfiniteCta: 'انطلق لللانهائي',
      devTitle: 'مركز المطورين',
      devSubtitle: 'ادمج SoulBits AI في تطبيقاتك مع SDK المفتوح والبنية التحتية الجاهزة لـ Docker.',
      devTabInstall: 'التثبيت',
      devTabConfig: 'الإعداد',
      devTabApi: 'مرجع API',
      devTermInstall: 'soulbits — docker install',
      devTermConfig: 'soulbits — config.yaml',
      devTermApi: 'soulbits — api test',
      devInstallTitle: 'تثبيت سريع',
      devInstallDesc: 'صورة Docker لـ SoulBits AI تتضمن مكدس الاستنتاج العصبي الكامل وبوابة REST API وتدفق WebSocket. يتطلب Docker 24+ و8GB RAM كحد أدنى.',
      devConfigTitle: 'إعداد البيئة',
      devConfigDesc: 'اربط ملف الإعداد بـ -v ./config.yaml:/app/config.yaml أو عيّن متغيرات SOULBITS_API_KEY و SOULBITS_MODEL و SOULBITS_PORT.',
      devApiTitle: 'نقاط نهاية REST API',
      devApiDesc: 'يدعم API v1 نقاط /chat و /voice و /sync و /companions. البث عبر WebSocket متاح على ws://localhost:8080/v1/stream.',
      devGithub: 'عرض على GitHub',
      footerCopy: '© 2026 SoulBits AI. جميع الحقوق محفوظة.',
      authWelcome: 'مرحباً بك في SoulBits',
      authSubtitle: 'سجّل الدخول للوصول إلى رفقاء الذكاء الاصطناعي والمزامنة عبر الأجهزة.',
      authSignIn: 'تسجيل الدخول',
      authSignUp: 'إنشاء حساب',
      authGoogle: 'المتابعة مع Google',
      authApple: 'المتابعة مع Apple',
      authOr: 'أو المتابعة بالبريد الإلكتروني',
      authEmailLabel: 'البريد الإلكتروني',
      authPasswordLabel: 'كلمة المرور',
      authEmailPlaceholder: 'you@example.com',
      authPasswordPlaceholder: 'أدخل كلمة المرور',
      authSubmitSignIn: 'تسجيل الدخول',
      authSubmitSignUp: 'إنشاء حساب',
      authOtpTitle: 'أدخل رمز التحقق المرسل إلى بريدك الإلكتروني',
      authOtpVerify: 'تحقق من الرمز',
      sandboxPlaceholder: 'اكتب رسالة…',
      sandboxSend: 'إرسال',
      sandboxDavidGreeting: 'مرحباً! أنا ديفيد لين، مستشار الأنظمة. ما التحدي التقني الذي يمكنني مساعدتك فيه؟',
      sandboxDavidReply: 'بناءً على بنيتك، أوصي بطبقة تخزين مؤقت موزعة مع Redis Cluster لزمن استجابة أقل من مللي ثانية.',
      sandboxElenaGreeting: 'مرحباً! أنا د. إيلينا فاسكيز. أنا هنا لدعم رفاهيتك العاطفية. كيف تشعر اليوم؟',
      sandboxElenaReply: 'هذا شعور طبيعي. دعنا نستكشف تقنيات التأريض التي تساعدك على معالجة هذا بشكل بناء.'
    },

    fr: {
      brandTitle: 'SoulBits AI',
      brandSlogan: 'Compagnon IA Nouvelle Génération',
      tabHome: 'Accueil',
      tabFeatures: 'Fonctionnalités',
      tabCompanions: 'Compagnons',
      tabPricing: 'Tarifs',
      tabDeveloper: 'Hub Développeur',
      signIn: 'Connexion',
      heroTitle: 'Là où l\'Âme Rencontre le Code',
      heroDescription: 'Découvrez la nouvelle génération de compagnonnage IA. SoulBits AI fusionne l\'intelligence émotionnelle avec une architecture neuronale de pointe pour créer des connexions numériques authentiques.',
      heroCta: 'Commencer à Discuter',
      storeDownload: 'Télécharger sur l\'',
      storeApple: 'App Store',
      storeGet: 'Disponible sur',
      storeGoogle: 'Google Play',
      ctrlChatTitle: 'Interface de Chat Neural',
      ctrlChatDesc: 'Engagez des conversations fluides et contextuelles propulsées par le modèle linguistique adaptatif de SoulBits.',
      ctrlCallTitle: 'Canal Vocal',
      ctrlCallDesc: 'Synthèse vocale neuronale cristalline avec visualisation audio en temps réel et latence inférieure à 200 ms.',
      ctrlPostTitle: 'Moteur de Fil Social',
      ctrlPostDesc: 'Publiez et découvrez du contenu curaté par IA avec routage intelligent des sentiments.',
      ctrlSyncTitle: 'Synchronisation Multi-Appareils',
      ctrlSyncDesc: 'Synchronisation chiffrée de bout en bout de l\'état neural sur tous vos appareils.',
      ctrlCreateTitle: 'Studio Créatif',
      ctrlCreateDesc: 'Concevez des mandalas géométriques et compositions structurelles avec des outils assistés par IA.',
      ctrlSecurityTitle: 'Coffre Quantique',
      ctrlSecurityDesc: 'Chiffrement AES-256 avec échange de clés résistant aux ordinateurs quantiques et boucles d\'intégrité.',
      simChatAi1: 'Bonjour ! Je suis votre compagnon SoulBits. Comment puis-je vous aider aujourd\'hui ?',
      simChatUser1: 'Parlez-moi de votre architecture neuronale.',
      simChatAi2: 'Je fonctionne sur une pile hybride transformer-SSM avec une fenêtre de contexte de 128K et une inférence émotionnelle en temps réel.',
      simChatPlaceholder: 'Tapez un message…',
      simCallStatus: 'Canal vocal actif — TTS neural engagé',
      simPostAuthor: 'SoulBits AI',
      simPostContent: 'Version v2.4 déployée avec cartographie empathique améliorée. L\'avenir du compagnonnage IA est ici.',
      simPostAuthor2: 'Communauté',
      simPostContent2: 'Mise à jour incroyable ! La nouvelle synthèse vocale semble incroyablement naturelle.',
      simPostPlaceholder: 'Partager une mise à jour…',
      simSync1: 'Poids neuronaux synchronisés',
      simSync2: 'Embeddings mémoire fusionnés',
      simSync3: 'État multi-appareils en propagation…',
      simSync4: 'Sauvegarde cloud terminée',
      simCreateGrid: 'Grille',
      simCreateShape: 'Forme',
      simCreateExport: 'Exporter',
      simSecGen: 'Génération d\'une paire de clés résistante aux quantiques 256 bits…',
      simSecOk: '✓ Poignée de main de chiffrement vérifiée',
      simSecLoop: 'Boucle de vérification d\'intégrité… [████████░░] 82%',
      featuresTitle: 'Services Principaux',
      featuresSubtitle: 'Six piliers du compagnonnage intelligent, conçus pour une interaction humain-IA fluide.',
      featChatTitle: 'Chat Neural',
      featChatDesc: 'IA conversationnelle contextuelle avec mémoire de 128K tokens, détection du ton émotionnel et raisonnement multi-tours dans plus de 40 langues.',
      featCallTitle: 'Synthèse Vocale',
      featCallDesc: 'TTS neural en temps réel avec prosodie adaptative, latence sub-200ms et clonage vocal biométrique.',
      featPostTitle: 'Fil Social',
      featPostDesc: 'Flux de contenu curaté par IA avec analyse de sentiment, métriques d\'engagement et planification intelligente.',
      featSyncTitle: 'Sync Multi-Appareils',
      featSyncDesc: 'Synchronisation d\'état chiffrée de bout en bout sur mobile, desktop et web avec types CRDT.',
      featCreateTitle: 'Studio Créatif',
      featCreateDesc: 'Outils de design génératif avec grilles mandala, export vectoriel et composition assistée par IA.',
      featSecurityTitle: 'Coffre Quantique',
      featSecurityDesc: 'Chiffrement AES-256 avec échange de clés post-quantique, architecture zero-knowledge et intégration HSM.',
      companionsTitle: 'Compagnons IA',
      companionsSubtitle: 'Rencontrez vos partenaires IA spécialisés — chacun conçu avec une expertise et une personnalité uniques.',
      compDavidName: 'David Lin',
      compDavidRole: 'Conseiller Systèmes',
      compDavidBackstory: 'Ancien architecte systèmes du MIT avec 15 ans en informatique distribuée. David se spécialise en optimisation d\'infrastructure, migration cloud et tuning de performance temps réel.',
      compElenaName: 'Dr. Elena Vasquez',
      compElenaRole: 'Liaison Clinique',
      compElenaBackstory: 'Psychiatre certifiée et chercheuse en éthique IA. Dr. Elena relie la psychologie clinique à une conception IA compassionnelle.',
      compConnect: 'Connecter',
      pricingTitle: 'Plans d\'Abonnement',
      pricingSubtitle: 'Choisissez le plan qui correspond à votre parcours. Tous les plans facturés mensuellement.',
      planLightName: 'Soul Light',
      planCoreName: 'Soul Core',
      planInfiniteName: 'Soul Infinite',
      planPeriod: 'par mois',
      planLightF1: 'Chat neural basique (50 messages/jour)',
      planLightF2: '1 compagnon IA',
      planLightF3: 'Accès au fil communautaire',
      planLightF4: 'Chiffrement standard',
      planLightCta: 'Commencer Gratuitement',
      planCoreF1: 'Chat neural illimité',
      planCoreF2: '3 compagnons IA',
      planCoreF3: 'Synthèse vocale et appels',
      planCoreF4: 'Sync multi-appareils',
      planCoreF5: 'Accès studio créatif',
      planCoreCta: 'S\'abonner Maintenant',
      planInfiniteF1: 'Tout dans Soul Core',
      planInfiniteF2: 'Compagnons IA illimités',
      planInfiniteF3: 'Sécurité coffre quantique',
      planInfiniteF4: 'Traitement neural prioritaire',
      planInfiniteF5: 'Accès API et outils développeur',
      planInfiniteCta: 'Passer à l\'Infini',
      devTitle: 'Hub Développeur',
      devSubtitle: 'Intégrez SoulBits AI dans vos applications avec notre SDK ouvert et infrastructure Docker-ready.',
      devTabInstall: 'Installation',
      devTabConfig: 'Configuration',
      devTabApi: 'Référence API',
      devTermInstall: 'soulbits — docker install',
      devTermConfig: 'soulbits — config.yaml',
      devTermApi: 'soulbits — api test',
      devInstallTitle: 'Installation Rapide',
      devInstallDesc: 'L\'image Docker SoulBits AI inclut la pile d\'inférence neuronale complète, la passerelle REST API et le flux WebSocket. Nécessite Docker 24+ et 8 Go RAM minimum.',
      devConfigTitle: 'Configuration Environnement',
      devConfigDesc: 'Montez votre fichier config avec -v ./config.yaml:/app/config.yaml ou définissez SOULBITS_API_KEY, SOULBITS_MODEL et SOULBITS_PORT.',
      devApiTitle: 'Points de Terminaison REST API',
      devApiDesc: 'L\'API v1 supporte /chat, /voice, /sync et /companions. Le streaming WebSocket est disponible sur ws://localhost:8080/v1/stream.',
      devGithub: 'Voir sur GitHub',
      footerCopy: '© 2026 SoulBits AI. Tous droits réservés.',
      authWelcome: 'Bienvenue sur SoulBits',
      authSubtitle: 'Connectez-vous pour accéder à vos compagnons IA et synchroniser vos appareils.',
      authSignIn: 'Connexion',
      authSignUp: 'Inscription',
      authGoogle: 'Continuer avec Google',
      authApple: 'Continuer avec Apple',
      authOr: 'ou continuer avec email',
      authEmailLabel: 'Email',
      authPasswordLabel: 'Mot de passe',
      authEmailPlaceholder: 'vous@exemple.com',
      authPasswordPlaceholder: 'Entrez votre mot de passe',
      authSubmitSignIn: 'Se Connecter',
      authSubmitSignUp: 'Créer un Compte',
      authOtpTitle: 'Entrez le code de vérification envoyé à votre email',
      authOtpVerify: 'Vérifier le Code',
      sandboxPlaceholder: 'Tapez un message…',
      sandboxSend: 'Envoyer',
      sandboxDavidGreeting: 'Bonjour ! Je suis David Lin, votre Conseiller Systèmes. Quel défi d\'infrastructure puis-je vous aider à résoudre ?',
      sandboxDavidReply: 'Basé sur votre architecture, je recommande une couche de cache distribué avec Redis Cluster pour une latence sub-milliseconde.',
      sandboxElenaGreeting: 'Bonjour ! Je suis Dr. Elena Vasquez. Je suis ici pour soutenir votre bien-être émotionnel. Comment vous sentez-vous aujourd\'hui ?',
      sandboxElenaReply: 'C\'est un sentiment valide. Explorons des techniques d\'ancrage pour vous aider à le traiter constructivement.'
    },

    de: {
      brandTitle: 'SoulBits AI',
      brandSlogan: 'KI-Begleiter der nächsten Generation',
      tabHome: 'Startseite',
      tabFeatures: 'Funktionen',
      tabCompanions: 'Begleiter',
      tabPricing: 'Preise',
      tabDeveloper: 'Entwickler-Hub',
      signIn: 'Anmelden',
      heroTitle: 'Wo Seele auf Code trifft',
      heroDescription: 'Erleben Sie die nächste Generation der KI-Gesellschaft. SoulBits AI vereint emotionale Intelligenz mit modernster neuronaler Architektur für wirklich bedeutungsvolle digitale Verbindungen.',
      heroCta: 'Chat starten',
      storeDownload: 'Laden im',
      storeApple: 'App Store',
      storeGet: 'Jetzt bei',
      storeGoogle: 'Google Play',
      ctrlChatTitle: 'Neurales Chat-Interface',
      ctrlChatDesc: 'Führen Sie flüssige, kontextbewusste Gespräche mit SoulBits\' adaptivem Sprachmodell.',
      ctrlCallTitle: 'Sprachkanal',
      ctrlCallDesc: 'Kristallklare neuronale TTS mit Echtzeit-Audiovisualisierung und unter 200 ms Latenz.',
      ctrlPostTitle: 'Social-Feed-Engine',
      ctrlPostDesc: 'Veröffentlichen und entdecken Sie KI-kuratierte Inhalte mit intelligentem Sentiment-Routing.',
      ctrlSyncTitle: 'Geräteübergreifende Sync',
      ctrlSyncDesc: 'Ende-zu-Ende-verschlüsselte Synchronisation des neuronalen Zustands auf allen Geräten.',
      ctrlCreateTitle: 'Kreativ-Studio',
      ctrlCreateDesc: 'Entwerfen Sie geometrische Mandalas und Strukturkompositionen mit KI-unterstützten Werkzeugen.',
      ctrlSecurityTitle: 'Quanten-Tresor',
      ctrlSecurityDesc: 'AES-256-Verschlüsselung mit quantenresistentem Schlüsselaustausch und Integritätsschleifen.',
      simChatAi1: 'Hallo! Ich bin Ihr SoulBits-Begleiter. Wie kann ich Ihnen heute helfen?',
      simChatUser1: 'Erzählen Sie mir von Ihrer neuronalen Architektur.',
      simChatAi2: 'Ich laufe auf einem hybriden Transformer-SSM-Stack mit 128K Kontextfenster und Echtzeit-Emotionsinferenz.',
      simChatPlaceholder: 'Nachricht eingeben…',
      simCallStatus: 'Sprachkanal aktiv — Neuronale TTS eingeschaltet',
      simPostAuthor: 'SoulBits AI',
      simPostContent: 'Version v2.4 mit verbessertem Empathie-Mapping bereitgestellt. Die Zukunft der KI-Gesellschaft ist hier.',
      simPostAuthor2: 'Community',
      simPostContent2: 'Tolles Update! Die neue Sprachsynthese klingt unglaublich natürlich.',
      simPostPlaceholder: 'Update teilen…',
      simSync1: 'Neuronale Gewichte synchronisiert',
      simSync2: 'Speicher-Embeddings zusammengeführt',
      simSync3: 'Geräteübergreifender Zustand wird übertragen…',
      simSync4: 'Cloud-Backup abgeschlossen',
      simCreateGrid: 'Raster',
      simCreateShape: 'Form',
      simCreateExport: 'Exportieren',
      simSecGen: '256-Bit quantenresistentes Schlüsselpaar wird generiert…',
      simSecOk: '✓ Verschlüsselungs-Handshake verifiziert',
      simSecLoop: 'Integritätsprüfung läuft… [████████░░] 82%',
      featuresTitle: 'Kernservices',
      featuresSubtitle: 'Sechs Säulen intelligenter Gesellschaft, entwickelt für nahtlose Mensch-KI-Interaktion.',
      featChatTitle: 'Neuraler Chat',
      featChatDesc: 'Kontextbewusste Konversations-KI mit 128K Token-Speicher, emotionaler Tonerkennung und Multi-Turn-Reasoning in über 40 Sprachen.',
      featCallTitle: 'Sprachsynthese',
      featCallDesc: 'Echtzeit-neuronale TTS mit adaptiver Prosodie, unter 200 ms Latenz und biometrischem Stimmenklonen.',
      featPostTitle: 'Social Feed',
      featPostDesc: 'KI-kuratierte Inhaltsströme mit Sentiment-Analyse, Community-Engagement-Metriken und intelligenter Planung.',
      featSyncTitle: 'Geräte-Sync',
      featSyncDesc: 'Ende-zu-Ende-verschlüsselte Zustandssynchronisation über Mobil, Desktop und Web mit CRDT-Datentypen.',
      featCreateTitle: 'Kreativ-Studio',
      featCreateDesc: 'Generative Design-Tools mit Mandala-Rastern, Vektorexport und KI-unterstützter Komposition.',
      featSecurityTitle: 'Quanten-Tresor',
      featSecurityDesc: 'AES-256-Verschlüsselung mit post-quantum Schlüsselaustausch, Zero-Knowledge-Architektur und HSM-Integration.',
      companionsTitle: 'KI-Begleiter',
      companionsSubtitle: 'Lernen Sie Ihre spezialisierten KI-Partner kennen — jeder mit einzigartiger Expertise und Persönlichkeit.',
      compDavidName: 'David Lin',
      compDavidRole: 'Systemberater',
      compDavidBackstory: 'Ehemaliger MIT-Systemarchitekt mit 15 Jahren in verteiltem Rechnen. David spezialisiert sich auf Infrastrukturoptimierung, Cloud-Migration und Echtzeit-Performance-Tuning.',
      compElenaName: 'Dr. Elena Vasquez',
      compElenaRole: 'Klinische Liaison',
      compElenaBackstory: 'Zertifizierte Psychiaterin und KI-Ethik-Forscherin. Dr. Elena verbindet klinische Psychologie mit mitfühlendem KI-Design.',
      compConnect: 'Verbinden',
      pricingTitle: 'Abonnementpläne',
      pricingSubtitle: 'Wählen Sie den Plan, der zu Ihrer Reise passt. Alle Pläne monatlich abgerechnet.',
      planLightName: 'Soul Light',
      planCoreName: 'Soul Core',
      planInfiniteName: 'Soul Infinite',
      planPeriod: 'pro Monat',
      planLightF1: 'Basis-Neural-Chat (50 Nachrichten/Tag)',
      planLightF2: '1 KI-Begleiter',
      planLightF3: 'Community-Feed-Zugang',
      planLightF4: 'Standard-Verschlüsselung',
      planLightCta: 'Kostenlos starten',
      planCoreF1: 'Unbegrenzter Neural-Chat',
      planCoreF2: '3 KI-Begleiter',
      planCoreF3: 'Sprachsynthese & Anrufe',
      planCoreF4: 'Geräteübergreifende Sync',
      planCoreF5: 'Kreativ-Studio-Zugang',
      planCoreCta: 'Jetzt abonnieren',
      planInfiniteF1: 'Alles in Soul Core',
      planInfiniteF2: 'Unbegrenzte KI-Begleiter',
      planInfiniteF3: 'Quanten-Tresor-Sicherheit',
      planInfiniteF4: 'Prioritäts-Neuralverarbeitung',
      planInfiniteF5: 'API-Zugang & Entwickler-Tools',
      planInfiniteCta: 'Unendlich werden',
      devTitle: 'Entwickler-Hub',
      devSubtitle: 'Integrieren Sie SoulBits AI in Ihre Anwendungen mit unserem offenen SDK und Docker-ready Infrastruktur.',
      devTabInstall: 'Installation',
      devTabConfig: 'Konfiguration',
      devTabApi: 'API-Referenz',
      devTermInstall: 'soulbits — docker install',
      devTermConfig: 'soulbits — config.yaml',
      devTermApi: 'soulbits — api test',
      devInstallTitle: 'Schnellstart-Installation',
      devInstallDesc: 'Das SoulBits AI Docker-Image enthält den vollständigen Neural-Inferenz-Stack, REST-API-Gateway und WebSocket-Event-Stream. Erfordert Docker 24+ und mindestens 8 GB RAM.',
      devConfigTitle: 'Umgebungskonfiguration',
      devConfigDesc: 'Mounten Sie Ihre Config mit -v ./config.yaml:/app/config.yaml oder setzen Sie SOULBITS_API_KEY, SOULBITS_MODEL und SOULBITS_PORT.',
      devApiTitle: 'REST-API-Endpunkte',
      devApiDesc: 'Die v1-API unterstützt /chat, /voice, /sync und /companions. WebSocket-Streaming ist unter ws://localhost:8080/v1/stream verfügbar.',
      devGithub: 'Auf GitHub ansehen',
      footerCopy: '© 2026 SoulBits AI. Alle Rechte vorbehalten.',
      authWelcome: 'Willkommen bei SoulBits',
      authSubtitle: 'Melden Sie sich an, um auf Ihre KI-Begleiter zuzugreifen und Geräte zu synchronisieren.',
      authSignIn: 'Anmelden',
      authSignUp: 'Registrieren',
      authGoogle: 'Weiter mit Google',
      authApple: 'Weiter mit Apple',
      authOr: 'oder mit E-Mail fortfahren',
      authEmailLabel: 'E-Mail',
      authPasswordLabel: 'Passwort',
      authEmailPlaceholder: 'sie@beispiel.de',
      authPasswordPlaceholder: 'Passwort eingeben',
      authSubmitSignIn: 'Anmelden',
      authSubmitSignUp: 'Konto erstellen',
      authOtpTitle: 'Geben Sie den Bestätigungscode ein, der an Ihre E-Mail gesendet wurde',
      authOtpVerify: 'Code verifizieren',
      sandboxPlaceholder: 'Nachricht eingeben…',
      sandboxSend: 'Senden',
      sandboxDavidGreeting: 'Hallo! Ich bin David Lin, Ihr Systemberater. Welche Infrastruktur-Herausforderung kann ich Ihnen helfen zu lösen?',
      sandboxDavidReply: 'Basierend auf Ihrer Architektur empfehle ich eine verteilte Cache-Schicht mit Redis Cluster für Sub-Millisekunden-Latenz.',
      sandboxElenaGreeting: 'Hallo! Ich bin Dr. Elena Vasquez. Ich bin hier, um Ihr emotionales Wohlbefinden zu unterstützen. Wie fühlen Sie sich heute?',
      sandboxElenaReply: 'Das ist ein gültiges Gefühl. Lassen Sie uns Erdungstechniken erkunden, die Ihnen helfen, dies konstruktiv zu verarbeiten.'
    }
  };

  /* Controller panel title/desc keys mapped by controller id */
  const controllerKeys = {
    chat:    { title: 'ctrlChatTitle',    desc: 'ctrlChatDesc' },
    call:    { title: 'ctrlCallTitle',    desc: 'ctrlCallDesc' },
    post:    { title: 'ctrlPostTitle',    desc: 'ctrlPostDesc' },
    sync:    { title: 'ctrlSyncTitle',    desc: 'ctrlSyncDesc' },
    create:  { title: 'ctrlCreateTitle',  desc: 'ctrlCreateDesc' },
    security:{ title: 'ctrlSecurityTitle', desc: 'ctrlSecurityDesc' }
  };

  let currentLang = 'en';
  let currentCompanion = null;
  let authMode = 'signin';

  /* ── Translation Engine ── */
  function applyTranslation(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const dict = translations[lang];
    const html = document.documentElement;

    if (lang === 'ar') {
      html.dir = 'rtl';
      html.lang = 'ar';
    } else {
      html.dir = 'ltr';
      html.lang = lang;
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    updateAuthSubmitLabel();
    updateControllerHeader(currentController);

    if (currentCompanion) {
      updateSandboxGreeting(currentCompanion);
    }
  }

  /* ── Tab Navigation ── */
  function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    document.querySelectorAll('.tab-panel').forEach(function (panel) {
      panel.classList.remove('active');
    });

    const target = document.getElementById('tab-' + tabId);
    if (target) {
      target.classList.add('active');
    }
  }

  /* ── Controller Mockup ── */
  let currentController = 'chat';

  function switchController(controllerId) {
    currentController = controllerId;

    document.querySelectorAll('.controller-icon-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-controller') === controllerId);
    });

    document.querySelectorAll('.sim-panel').forEach(function (panel) {
      panel.classList.toggle('active', panel.getAttribute('data-sim') === controllerId);
    });

    updateControllerHeader(controllerId);
  }

  function updateControllerHeader(controllerId) {
    const keys = controllerKeys[controllerId];
    if (!keys) return;
    const dict = translations[currentLang];
    const titleEl = document.getElementById('controllerTitle');
    const descEl = document.getElementById('controllerDesc');
    if (titleEl && dict[keys.title]) titleEl.textContent = dict[keys.title];
    if (descEl && dict[keys.desc]) descEl.textContent = dict[keys.desc];
  }

  /* ── Developer Hub Sub-Tabs ── */
  function switchDevTab(tabId) {
    document.querySelectorAll('.dev-tab-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-devtab') === tabId);
    });
    document.querySelectorAll('.dev-panel').forEach(function (panel) {
      panel.classList.toggle('active', panel.getAttribute('data-devpanel') === tabId);
    });
  }

  /* ── Theme Toggle ── */
  function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('soulbits-theme', next);
  }

  function initTheme() {
    const saved = localStorage.getItem('soulbits-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    }
  }

  /* ── Auth Modal ── */
  function openAuthModal() {
    document.getElementById('authModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    document.getElementById('authModal').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('otpSection').classList.remove('active');
    document.getElementById('authForm').style.display = '';
  }

  function setAuthMode(mode) {
    authMode = mode;
    const toggle = document.getElementById('authToggle');
    toggle.classList.toggle('signup-active', mode === 'signup');

    document.querySelectorAll('.auth-toggle-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-authmode') === mode);
    });

    updateAuthSubmitLabel();
  }

  function updateAuthSubmitLabel() {
    const btn = document.getElementById('authSubmitBtn');
    const dict = translations[currentLang];
    if (btn) {
      btn.textContent = authMode === 'signup' ? dict.authSubmitSignUp : dict.authSubmitSignIn;
    }
  }

  function handleAuthSubmit(e) {
    e.preventDefault();
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('otpSection').classList.add('active');
  }

  /* ── OTP Input Navigation ── */
  function initOtpInputs() {
    const inputs = document.querySelectorAll('.otp-inputs input');
    inputs.forEach(function (input, index) {
      input.addEventListener('input', function () {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  }

  /* ── Companion Chat Sandbox ── */
  function openSandbox(companionId) {
    currentCompanion = companionId;
    const sandbox = document.getElementById('chatSandbox');
    const dict = translations[currentLang];
    const titleEl = document.getElementById('sandboxTitle');
    const messagesEl = document.getElementById('sandboxMessages');

    titleEl.textContent = companionId === 'david' ? dict.compDavidName : dict.compElenaName;
    messagesEl.innerHTML = '';

    const greeting = document.createElement('div');
    greeting.className = 'chat-bubble ai';
    greeting.textContent = companionId === 'david' ? dict.sandboxDavidGreeting : dict.sandboxElenaGreeting;
    messagesEl.appendChild(greeting);

    sandbox.classList.add('open');
  }

  function closeSandbox() {
    document.getElementById('chatSandbox').classList.remove('open');
    currentCompanion = null;
  }

  function updateSandboxGreeting(companionId) {
    const messagesEl = document.getElementById('sandboxMessages');
    if (!messagesEl || !messagesEl.firstChild) return;
    const dict = translations[currentLang];
    messagesEl.firstChild.textContent = companionId === 'david'
      ? dict.sandboxDavidGreeting
      : dict.sandboxElenaGreeting;
    document.getElementById('sandboxTitle').textContent = companionId === 'david'
      ? dict.compDavidName
      : dict.compElenaName;
  }

  function sendSandboxMessage() {
    const input = document.getElementById('sandboxInput');
    const text = input.value.trim();
    if (!text || !currentCompanion) return;

    const messagesEl = document.getElementById('sandboxMessages');
    const dict = translations[currentLang];

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = text;
    messagesEl.appendChild(userBubble);
    input.value = '';

    setTimeout(function () {
      const aiBubble = document.createElement('div');
      aiBubble.className = 'chat-bubble ai';
      aiBubble.textContent = currentCompanion === 'david'
        ? dict.sandboxDavidReply
        : dict.sandboxElenaReply;
      messagesEl.appendChild(aiBubble);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }, 800);

    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* ── Event Bindings ── */
  function init() {
    initTheme();
    applyTranslation('en');

    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchTab(btn.getAttribute('data-tab'));
      });
    });

    document.querySelectorAll('.controller-icon-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchController(btn.getAttribute('data-controller'));
      });
    });

    document.querySelectorAll('.dev-tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchDevTab(btn.getAttribute('data-devtab'));
      });
    });

    document.getElementById('langSelect').addEventListener('change', function (e) {
      applyTranslation(e.target.value);
    });

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    document.getElementById('openAuthModal').addEventListener('click', openAuthModal);
    document.getElementById('closeAuthModal').addEventListener('click', closeAuthModal);
    document.getElementById('authModal').addEventListener('click', function (e) {
      if (e.target === document.getElementById('authModal')) closeAuthModal();
    });

    document.querySelectorAll('.auth-toggle-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setAuthMode(btn.getAttribute('data-authmode'));
      });
    });

    document.getElementById('authForm').addEventListener('submit', handleAuthSubmit);

    document.getElementById('startChatting').addEventListener('click', function () {
      switchTab('home');
      switchController('chat');
    });

    document.querySelectorAll('.btn-connect').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openSandbox(btn.getAttribute('data-companion'));
      });
    });

    document.getElementById('closeSandbox').addEventListener('click', closeSandbox);
    document.getElementById('sandboxSend').addEventListener('click', sendSandboxMessage);
    document.getElementById('sandboxInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sendSandboxMessage();
    });

    initOtpInputs();

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAuthModal();
        closeSandbox();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
