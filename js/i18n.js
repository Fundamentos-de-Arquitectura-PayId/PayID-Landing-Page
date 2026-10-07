/**
 * PayID — i18n (ES / EN)
 * Ingeniería de Software · UPC · Curso 15987 Fundamentos de Arquitectura de Software
 */
(function () {
    const STORAGE_KEY = 'kairolabs_lang';

    const TRANSLATIONS = {
        es: {
            lang_group_aria: 'Seleccionar idioma',
            meta_title: 'PayID',
            meta_desc:
                'PayID — Identidad digital, documentos y pagos en una sola plataforma. Ingeniería de Software, UPC. Curso 15987.',
            nav_inicio: 'Inicio',
            nav_tecnologia: 'Producto',
            nav_sectores: 'Segmentos',
            nav_nosotros: 'Nosotros',
            nav_equipo: 'Equipo',
            nav_planes: 'Planes',
            nav_cta: 'Ver planes',
            footer_nav_contact: 'Contacto',
            hero_tagline: 'Identidad digital · Documentos y pagos',
            hero_title: 'Tu DNI, tus tarjetas y tus trámites en un solo lugar',
            hero_desc:
                'PayID centraliza documentos, recargas de transporte y alertas para que dejes de depender de la billetera física.',
            hero_btn_login: 'Ver los planes',
            media_video: 'Espacio para video',
            media_video_hint: 'Aquí irá el video del producto',
            media_image: 'Espacio para imagen',
            media_hero: 'Espacio reservado para el video de portada',
            media_demo_hint: 'El video de demostración se cargará aquí',
            media_team_hint: 'Aquí irá el video del equipo',
            mosaic_kicker: 'Lo que buscamos validar',
            mosaic_title: 'Menos documentos físicos, menos colas y más control de lo que vence.',
            mosaic_s1v: '30 días',
            mosaic_s1l: 'Aviso antes del vencimiento de un documento',
            mosaic_s2v: 'Offline',
            mosaic_s2l: 'Acceso a documentos ya verificados sin señal',
            mosaic_s3v: '1 cuenta',
            mosaic_s3l: 'Perfiles de hijos y dependientes en premium',
            mosaic_s4v: 'Ley 29733',
            mosaic_s4l: 'Protección de datos personales en el Perú',
            mosaic_eyebrow: 'Por qué PayID',
            mosaic_h3: 'Pagos, identidad y trámites en la misma app',
            mosaic_p: 'Yape y Plin mueven dinero. ID Perú acredita identidad. Google Wallet guarda tarjetas. PayID reúne documentos, transporte y alertas para el día a día en Lima.',
            mosaic_btn: 'Ver planes',
            yt_caption: 'Mira cómo PayID ordena<br>documentos, saldo y trámites',
            yt_plus_h: '¿Listo para dejar la billetera física?',
            yt_plus_p: 'Revisa el plan gratuito y el premium para centralizar documentos, transporte y alertas.',
            yt_plus_btn: 'Ver planes',
            yt_plus_close: 'Cerrar',
            about_kicker: 'El proyecto',
            about_partners_kicker: 'Contexto peruano',
            about_partners_html: 'Pensado para conectarse con <em>entidades</em> del Perú',
            about_panel: 'PayID',
            about_cta: 'Conoce al equipo',
            about_acc3_t: 'Equipo y curso',
            about_acc3_p:
                'Equipo de Ingeniería de Software de la UPC. Curso Fundamentos de Arquitectura de Software (15987), ciclo 2620. Docente: Wilder Aurelio Vega Calero.',
            about_acc4_t: 'Seguridad y confianza',
            about_acc4_p:
                'Biometría, cifrado y modo offline para documentos verificados, alineados a la Ley N.° 29733 de Protección de Datos Personales.',
            about_h2: 'Identidad, documentos y pagos en una sola plataforma',
            about_lead_html:
                '<strong>PayID</strong> es la startup del equipo de <strong>Ingeniería de Software de la UPC</strong> (curso <strong>15987 – Fundamentos de Arquitectura de Software</strong>). Centraliza DNI, carné universitario, credenciales de pago y recargas de transporte, con acceso seguro desde el celular.',
            about_mission_t: 'Misión',
            about_mission_p:
                'Ofrecer soluciones digitales accesibles para que estudiantes, familias, profesionales y comercios gestionen de forma centralizada y segura sus documentos y operaciones.',
            about_vision_t: 'Visión',
            about_vision_p:
                'Ser la plataforma líder en gestión de identidad digital y servicios integrados en Latinoamérica, con seguridad, confianza y acceso desde cualquier dispositivo.',
            expand_intro: 'Cada fila, cada documento vencido y cada tarjeta olvidada es tiempo que no recuperas.',
            expand_caption: 'PayID reúne identidad, transporte y trámites en una sola vista para actuar antes de un vencimiento o un saldo en cero.',
            tech_wm: 'TU BÓVEDA',
            tech_kicker: 'Todo en un lugar',
            tech_h2: 'Lo que resuelve PayID',
            tech_lead:
                'Una plataforma para registrar documentos, recargar transporte, pagar servicios y recibir alertas antes de que un trámite se complique.',
            tech_f1h: 'Identidad digital',
            tech_f1p: 'DNI, pasaporte, licencia, carné universitario y carné CONADIS disponibles desde el celular.',
            tech_f2h: 'Recarga de transporte',
            tech_f2p: 'Saldo y recarga de la tarjeta del Metropolitano y de la Línea 1 sin hacer cola en estación.',
            tech_f3h: 'Alertas inteligentes',
            tech_f3p: 'Avisos de vencimiento de documentos y de saldo bajo para actuar con anticipación.',
            tech_f4h: 'Modo offline',
            tech_f4p: 'Documentos ya verificados disponibles aunque no haya señal en el trayecto.',
            tech_f5h: 'Perfiles familiares',
            tech_f5p: 'En el plan premium, documentos de hijos y dependientes en la misma cuenta.',
            tech_f6h: 'Asistente de trámites',
            tech_f6p: 'Checklist para renovar DNI, carné universitario o CONADIS sin perder un requisito.',
            tech_f7h: 'Pagos y recargas',
            tech_f7p: 'Deudas, recarga de celular e historial de movimientos desde el dashboard principal.',
            sec_wm: 'PERSONAS',
            sec_kicker: 'Segmentos objetivo',
            sec_h2: 'Para quien se mueve y para quien organiza el hogar',
            sec_lead:
                'Dos perfiles del informe: estudiantes que usan transporte público y padres o tutores que cuidan los documentos de la familia.',
            sec_b1: '18–29 años',
            sec_t1: 'Estudiantes universitarios',
            sec_p1:
                'Llevan DNI, carné universitario, tarjeta del Metropolitano y débito. PayID junta todo en el celular para consultar saldo y recargar al instante.',
            sec_tag1a: 'Transporte',
            sec_tag1b: 'Carné',
            sec_tag1c: 'Saldo bajo',
            sec_l1: 'SABER MÁS',
            sec_b2: '25–45 años',
            sec_t2: 'Padres, madres y tutores',
            sec_p2:
                'Los documentos de los hijos están dispersos: carnés escolares, vacunas, vencimientos. El plan premium los reúne en perfiles separados.',
            sec_tag2a: 'Familia',
            sec_tag2b: 'Vencimientos',
            sec_tag2c: 'Offline',
            sec_l2: 'MÁS INFO',
            connect_h2: 'Documentos, tarjetas y trámites juntos',
            connect_lead: 'PayID guarda la identidad verificada, el saldo de transporte y el historial de pagos en el mismo dashboard.',
            connect_h2b: 'Recarga antes de quedarte sin pasaje',
            connect_leadb: 'Alertas de saldo bajo y recarga del Metropolitano o la Línea 1 para no volver a la cola de la estación.',
            connect_h2c: 'La familia, en perfiles separados',
            connect_leadc: 'El plan premium administra documentos de hijos y dependientes, con acceso offline a lo ya verificado.',
            connect_c1: 'Identidad',
            connect_c2: 'Transporte',
            connect_c3: 'Familia',
            team_kicker: 'PAYID',
            team_h2: 'Integrantes del equipo',
            team_lead: 'Ingeniería de Software · UPC · Fundamentos de Arquitectura de Software',
            team_b1: 'C#, Python y JavaScript. APIs REST, Clean Code y SOLID para una arquitectura que escale.',
            team_b2: 'Angular, Vue, TypeScript, HTML y CSS. También C++, Python y SQL. 7.º ciclo.',
            team_b3: 'Enfoque en ciberseguridad para proteger identidad, documentos y acceso biométrico.',
            team_b4: 'C#, DDD, Structurizr y MySQL. Móvil con Flutter, Kotlin y Swift para que la arquitectura llegue al código.',
            team_tab_video: 'Video',
            team_tab_image: 'Imagen',
            team_img_soon: 'Foto del equipo pendiente',
            team_media_copy: 'Dhilsen, Raul, Diego y Giussepe construyen PayID en Fundamentos de Arquitectura de Software: identidad digital, pagos y documentos pensados para el Perú.',
            orbit_text: 'PayID junta identidad, transporte y trámites del día a día. Esa combinación, hecha para el Perú, es lo que la distingue de una billetera o de una app de documentos.',
            plan_wm: 'FREEMIUM',
            plan_kicker: 'Modelo freemium',
            plan_h2: 'Planes de PayID',
            plan_lead:
                'Lo básico es gratis. El premium suma alertas avanzadas y perfiles familiares. La referencia de S/ 15 sale de la disposición de pago que vimos en las entrevistas.',
            plan_pilot: 'BÁSICO',
            plan_basic: 'MOVILIDAD',
            plan_pro: 'PREMIUM',
            plan_hosp: 'FAMILIA',
            plan_prem: 'ALIANZAS',
            plan_period: '/mes',
            plan_custom: 'A medida',
            plan_rec: 'RECOMENDADO',
            plan_d0: 'Para guardar DNI, carné y pasaporte en un solo perfil, con el dashboard principal.',
            plan_d1: 'Para estudiantes que recargan Metropolitano o Línea 1 y no quieren volver a la cola.',
            plan_d2: 'Alertas avanzadas, modo offline y asistente de trámites. Referencia de las entrevistas: entre S/ 10 y S/ 15.',
            plan_d3: 'Para universidades y entidades con las que PayID busca integrarse: RENIEC, SUNEDU, CONADIS y transporte.',
            plan_d4: 'El mismo premium, con perfiles para hijos y dependientes: vacunas, carnés escolares y vencimientos.',
            plan0_f1: 'Documentos personales',
            plan0_f2: 'Dashboard principal',
            plan0_f3: '1 perfil',
            plan0_f4: 'Historial básico',
            plan0_f5: 'Modo offline',
            plan0_f6: 'Perfiles familiares',
            plan0_btn: 'Empezar gratis',
            plan1_f1: 'Todo lo del plan Básico',
            plan1_f2: 'Recarga de transporte',
            plan1_f3: 'Consulta de saldo',
            plan1_f4: 'Alerta de saldo bajo',
            plan1_f5: 'Asistente de trámites',
            plan1_f6: 'Perfiles de hijos',
            plan1_btn: 'Elegir Movilidad',
            plan2_f1: 'Todo lo de Movilidad',
            plan2_f2: 'Alertas de vencimiento',
            plan2_f3: 'Modo offline',
            plan2_f4: 'Asistente de trámites',
            plan2_f5: 'Historial completo',
            plan2_f6: 'Pagos y recarga de celular',
            plan2_btn: 'Elegir Premium',
            plan3_f1: 'Integración institucional',
            plan3_f2: 'Carné universitario',
            plan3_f3: 'Validación de identidad',
            plan3_f4: 'Transporte urbano',
            plan3_f5: 'Campañas con universidades',
            plan3_f6: 'Ley N.° 29733',
            plan3_btn: 'Conversar alianza',
            plan4_f1: 'Todo lo del Premium',
            plan4_f2: 'Perfiles de hijos',
            plan4_f3: 'Documentos por perfil',
            plan4_f4: 'Alertas por integrante',
            plan4_f5: 'Compartir documentos',
            plan4_f6: 'Offline familiar',
            plan4_btn: 'Elegir Familia',
            plan_note: 'Biometría, cifrado y tratamiento de datos alineado a la Ley N.° 29733',
            footer_terms: 'Términos y Condiciones',
            footer_legal_copy: '© 2026 PayID · UPC · Curso 15987. Docente: Wilder Aurelio Vega Calero.',
            footer_credit: 'Equipo PayID · Ingeniería de Software · UPC',
            footer_cta_lead: 'Menos documentos físicos. Menos colas. PayID ordena identidad, transporte y trámites en un solo lugar.',
            footer_cta_btn: 'Ver planes de PayID',
            footer_follow: 'Síguenos:',
            cta_v_badge: 'Empieza hoy',
            cta_v_title: 'Documentos más seguros.\nTrámites más simples.\nHecho para quien se mueve cada día.',
            cta_v_sub: 'PayID reúne identidad, transporte y pagos para estudiantes y familias en el Perú. Menos billetera física, más control.',
            cta_v_btn: 'Comenzar',
            cta_v_perk1: 'Plan básico gratis',
            cta_v_perk2: 'Alertas de vencimiento',
            cta_v_perk3: 'Ley N.° 29733',
            terms_back: 'Volver al sitio',
            terms_doc_title: 'Términos y Condiciones | PayID (UPC)',
            terms_modal_title: 'Términos y Condiciones',
            modal_ok: 'Entendido',
            terms_body_html: `<p class="terms-lead text-secondary mb-4">Última actualización: octubre de 2026 · Proyecto académico — Universidad Peruana de Ciencias Aplicadas (UPC) · Curso 15987 Fundamentos de Arquitectura de Software · Ciclo 2620 · Docente: Wilder Aurelio Vega Calero</p>
<p class="terms-section-title">1. Identificación</p>
<p>Este sitio presenta PayID, startup del equipo de Ingeniería de Software de la UPC. PayID propone una plataforma para centralizar documentos personales, identidad digital y pagos. El contenido tiene fines académicos y de demostración.</p>
<p class="terms-section-title">2. Objeto</p>
<p>Estas condiciones regulan el acceso y uso del sitio informativo. Describen la propuesta de PayID y no constituyen, por sí mismas, una oferta comercial vinculante ni una integración oficial con RENIEC, SUNEDU, CONADIS, SUNAT, ATU u otra entidad.</p>
<p class="terms-section-title">3. Uso permitido</p>
<p>El usuario se compromete a:</p>
<ul class="terms-list mb-3">
<li>Utilizar el sitio de forma lícita y respetuosa con la normativa vigente.</li>
<li>No intentar vulnerar la seguridad, la disponibilidad ni la integridad del sitio.</li>
<li>No reproducir masivamente los contenidos sin mención de autoría y fines académicos o informativos.</li>
</ul>
<p class="terms-section-title">4. Propiedad intelectual</p>
<p>Marca, textos, imágenes y diseño de la landing son obra del equipo o materiales usados con fines académicos. Queda prohibido el uso comercial no autorizado que genere confusión sobre el origen del proyecto.</p>
<p class="terms-section-title">5. Datos personales</p>
<p>PayID se plantea alineado a la Ley N.° 29733, Ley de Protección de Datos Personales. Este sitio informativo no recoge documentos de identidad. Cualquier tratamiento real de datos deberá contar con base legal y medidas de seguridad adecuadas.</p>
<p class="terms-section-title">6. Planes y precios</p>
<p>El plan básico se presenta como gratuito. La referencia de S/ 15 al mes para el plan premium proviene de la disposición de pago recogida en entrevistas del proyecto y no es una tarifa comercial vigente.</p>
<p class="terms-section-title">7. Enlaces externos</p>
<p>Los enlaces a terceros se ofrecen para contexto. No controlamos esos destinos.</p>
<p class="terms-section-title">8. Modificaciones</p>
<p>El equipo puede actualizar estos términos. La fecha de última actualización indica la versión vigente.</p>
<p class="terms-section-title">9. Legislación aplicable</p>
<p>Para controversias relacionadas con este sitio informativo aplican las leyes de la República del Perú, con sometimiento a los tribunales competentes de Lima, salvo norma imperativa en contrario.</p>
<p class="terms-section-title">10. Contacto</p>
<p>Las consultas sobre estos términos o el proyecto se canalizan por la sección de contacto de la página principal. Integrantes: Dhilsen Mallqui Vilca, Raul Hiroshi Tasayco Osorio, Diego Mora Blas y Giussepe Taquiri.</p>`
        },
        en: {
            lang_group_aria: 'Choose language',
            meta_title: 'PayID',
            meta_desc:
                'PayID — Digital identity, documents, and payments in one platform. Software Engineering, UPC. Course 15987.',
            nav_inicio: 'Home',
            nav_tecnologia: 'Product',
            nav_sectores: 'Segments',
            nav_nosotros: 'About',
            nav_equipo: 'Team',
            nav_planes: 'Plans',
            nav_cta: 'View plans',
            footer_nav_contact: 'Contact',
            hero_tagline: 'Digital identity · Documents and payments',
            hero_title: 'Your ID, cards, and paperwork in one place',
            hero_desc:
                'PayID centralizes documents, transit top-ups, and alerts so you can leave the physical wallet behind.',
            hero_btn_login: 'View plans',
            media_video: 'Space for video',
            media_video_hint: 'Product video goes here',
            media_image: 'Space for image',
            media_hero: 'Reserved space for the hero video',
            media_demo_hint: 'The demo video will load here',
            media_team_hint: 'Team video goes here',
            mosaic_kicker: 'What we want to validate',
            mosaic_title: 'Fewer physical documents, fewer lines, and more control over what expires.',
            mosaic_s1v: '30 days',
            mosaic_s1l: 'Notice before a document expires',
            mosaic_s2v: 'Offline',
            mosaic_s2l: 'Access to verified documents without signal',
            mosaic_s3v: '1 account',
            mosaic_s3l: 'Profiles for children and dependents on premium',
            mosaic_s4v: 'Law 29733',
            mosaic_s4l: 'Personal data protection in Peru',
            mosaic_eyebrow: 'Why PayID',
            mosaic_h3: 'Payments, identity, and paperwork in the same app',
            mosaic_p: 'Yape and Plin move money. ID Perú proves identity. Google Wallet stores cards. PayID brings documents, transit, and alerts together for daily life in Lima.',
            mosaic_btn: 'View plans',
            yt_caption: 'See how PayID organizes<br>documents, balance, and paperwork',
            yt_plus_h: 'Ready to leave the physical wallet behind?',
            yt_plus_p: 'Review the free plan and premium to centralize documents, transit, and alerts.',
            yt_plus_btn: 'View plans',
            yt_plus_close: 'Close',
            about_kicker: 'The project',
            about_partners_kicker: 'Peruvian context',
            about_partners_html: 'Designed to connect with <em>institutions</em> in Peru',
            about_panel: 'PayID',
            about_cta: 'Meet the team',
            about_acc3_t: 'Team and course',
            about_acc3_p:
                'Software Engineering team at UPC. Course Fundamentos de Arquitectura de Software (15987), term 2620. Instructor: Wilder Aurelio Vega Calero.',
            about_acc4_t: 'Security and trust',
            about_acc4_p:
                'Biometrics, encryption, and offline mode for verified documents, aligned with Peruvian Personal Data Protection Law No. 29733.',
            about_h2: 'Identity, documents, and payments in one platform',
            about_lead_html:
                '<strong>PayID</strong> is the startup of the <strong>UPC Software Engineering</strong> team (course <strong>15987 – Software Architecture Fundamentals</strong>). It centralizes national ID, university cards, payment credentials, and transit top-ups, with secure access from a phone.',
            about_mission_t: 'Mission',
            about_mission_p:
                'Offer accessible digital solutions so students, families, professionals, and small businesses can manage documents and operations in one secure place.',
            about_vision_t: 'Vision',
            about_vision_p:
                'Become the leading platform for digital identity and integrated services in Latin America, known for security, trust, and access from any device.',
            expand_intro: 'Every line, every expired document, and every forgotten card is time you do not get back.',
            expand_caption: 'PayID brings identity, transit, and paperwork into one view so you can act before something expires or a balance hits zero.',
            tech_wm: 'YOUR VAULT',
            tech_kicker: 'Everything in one place',
            tech_h2: 'What PayID solves',
            tech_lead:
                'A platform to register documents, top up transit, pay services, and get alerts before paperwork gets complicated.',
            tech_f1h: 'Digital identity',
            tech_f1p: 'National ID, passport, driver license, university card, and CONADIS card available from your phone.',
            tech_f2h: 'Transit top-up',
            tech_f2p: 'Balance and top-up for Metropolitano and Línea 1 cards without waiting at the station.',
            tech_f3h: 'Smart alerts',
            tech_f3p: 'Notices for expiring documents and low balance so you can act ahead of time.',
            tech_f4h: 'Offline mode',
            tech_f4p: 'Already verified documents stay available even when there is no signal on the route.',
            tech_f5h: 'Family profiles',
            tech_f5p: 'On the premium plan, documents for children and dependents live in the same account.',
            tech_f6h: 'Paperwork assistant',
            tech_f6p: 'A checklist to renew a national ID, university card, or CONADIS card without missing a requirement.',
            tech_f7h: 'Payments and top-ups',
            tech_f7p: 'Debts, phone top-up, and a history of movements from the main dashboard.',
            sec_wm: 'PEOPLE',
            sec_kicker: 'Target segments',
            sec_h2: 'For people on the move and people who run the household',
            sec_lead:
                'Two profiles from the report: students who use public transit and parents or guardians who look after family documents.',
            sec_b1: 'Ages 18–29',
            sec_t1: 'University students',
            sec_p1:
                'They carry a national ID, university card, Metropolitano card, and debit card. PayID puts them on the phone to check a balance and top up instantly.',
            sec_tag1a: 'Transit',
            sec_tag1b: 'Student ID',
            sec_tag1c: 'Low balance',
            sec_l1: 'LEARN MORE',
            sec_b2: 'Ages 25–45',
            sec_t2: 'Parents and guardians',
            sec_p2:
                'Children’s documents are scattered: school cards, vaccines, expiration dates. Premium gathers them into separate profiles.',
            sec_tag2a: 'Family',
            sec_tag2b: 'Expirations',
            sec_tag2c: 'Offline',
            sec_l2: 'MORE INFO',
            connect_h2: 'Documents, cards, and paperwork together',
            connect_lead: 'PayID keeps verified identity, transit balance, and payment history on the same dashboard.',
            connect_h2b: 'Top up before you run out of fare',
            connect_leadb: 'Low-balance alerts and Metropolitano or Línea 1 top-ups so you do not go back to the station line.',
            connect_h2c: 'Family, in separate profiles',
            connect_leadc: 'Premium manages documents for children and dependents, with offline access to what is already verified.',
            connect_c1: 'Identity',
            connect_c2: 'Transit',
            connect_c3: 'Family',
            team_kicker: 'PAYID',
            team_h2: 'Team members',
            team_lead: 'Software Engineering · UPC · Software Architecture Fundamentals',
            team_b1: 'C#, Python, and JavaScript. REST APIs, Clean Code, and SOLID for an architecture that can scale.',
            team_b2: 'Angular, Vue, TypeScript, HTML, and CSS. Also C++, Python, and SQL. 7th term.',
            team_b3: 'Focused on cybersecurity to protect identity, documents, and biometric access.',
            team_b4: 'C#, DDD, Structurizr, and MySQL. Mobile with Flutter, Kotlin, and Swift so the architecture reaches the code.',
            team_tab_video: 'Video',
            team_tab_image: 'Image',
            team_img_soon: 'Team photo pending',
            team_media_copy: 'Dhilsen, Raul, Diego, and Giussepe are building PayID in Software Architecture Fundamentals: digital identity, payments, and documents designed for Peru.',
            orbit_text: 'PayID brings together identity, transit, and everyday paperwork. That combination, built for Peru, is what sets it apart from a wallet or a documents app.',
            plan_wm: 'FREEMIUM',
            plan_kicker: 'Freemium model',
            plan_h2: 'PayID plans',
            plan_lead:
                'The basics are free. Premium adds advanced alerts and family profiles. The S/ 15 reference comes from willingness to pay in our interviews.',
            plan_pilot: 'BASIC',
            plan_basic: 'MOBILITY',
            plan_pro: 'PREMIUM',
            plan_hosp: 'FAMILY',
            plan_prem: 'PARTNERSHIPS',
            plan_period: '/mo',
            plan_custom: 'Custom',
            plan_rec: 'RECOMMENDED',
            plan_d0: 'Store national ID, university card, and passport in one profile, with the main dashboard.',
            plan_d1: 'For students who top up Metropolitano or Línea 1 and do not want to wait in line again.',
            plan_d2: 'Advanced alerts, offline mode, and a paperwork assistant. Interview reference: between S/ 10 and S/ 15.',
            plan_d3: 'For universities and institutions PayID aims to connect with: RENIEC, SUNEDU, CONADIS, and transit.',
            plan_d4: 'The same premium, with profiles for children and dependents: vaccines, school cards, and expirations.',
            plan0_f1: 'Personal documents',
            plan0_f2: 'Main dashboard',
            plan0_f3: '1 profile',
            plan0_f4: 'Basic history',
            plan0_f5: 'Offline mode',
            plan0_f6: 'Family profiles',
            plan0_btn: 'Start free',
            plan1_f1: 'Everything in Basic',
            plan1_f2: 'Transit top-up',
            plan1_f3: 'Balance lookup',
            plan1_f4: 'Low-balance alert',
            plan1_f5: 'Paperwork assistant',
            plan1_f6: 'Children’s profiles',
            plan1_btn: 'Choose Mobility',
            plan2_f1: 'Everything in Mobility',
            plan2_f2: 'Expiration alerts',
            plan2_f3: 'Offline mode',
            plan2_f4: 'Paperwork assistant',
            plan2_f5: 'Full history',
            plan2_f6: 'Payments and phone top-up',
            plan2_btn: 'Choose Premium',
            plan3_f1: 'Institutional integration',
            plan3_f2: 'University card',
            plan3_f3: 'Identity validation',
            plan3_f4: 'Urban transit',
            plan3_f5: 'University campaigns',
            plan3_f6: 'Law No. 29733',
            plan3_btn: 'Talk partnership',
            plan4_f1: 'Everything in Premium',
            plan4_f2: 'Children’s profiles',
            plan4_f3: 'Documents per profile',
            plan4_f4: 'Alerts per member',
            plan4_f5: 'Share documents',
            plan4_f6: 'Family offline access',
            plan4_btn: 'Choose Family',
            plan_note: 'Biometrics, encryption, and data handling aligned with Law No. 29733',
            footer_terms: 'Terms and Conditions',
            footer_legal_copy: '© 2026 PayID · UPC · Course 15987. Instructor: Wilder Aurelio Vega Calero.',
            footer_credit: 'PayID team · Software Engineering · UPC',
            footer_cta_lead: 'Fewer physical documents. Fewer lines. PayID organizes identity, transit, and paperwork in one place.',
            footer_cta_btn: 'View PayID plans',
            footer_follow: 'Follow us:',
            cta_v_badge: 'Start today',
            cta_v_title: 'Safer documents.\nSimpler paperwork.\nBuilt for people on the move.',
            cta_v_sub: 'PayID brings identity, transit, and payments together for students and families in Peru. Less physical wallet, more control.',
            cta_v_btn: 'Get started',
            cta_v_perk1: 'Free basic plan',
            cta_v_perk2: 'Expiration alerts',
            cta_v_perk3: 'Law No. 29733',
            terms_back: 'Return to site',
            terms_doc_title: 'Terms and Conditions | PayID (UPC)',
            terms_modal_title: 'Terms and Conditions',
            modal_ok: 'Got it',
            terms_body_html: `<p class="terms-lead text-secondary mb-4">Last updated: October 2026 · Academic project — Universidad Peruana de Ciencias Aplicadas (UPC) · Course 15987 Software Architecture Fundamentals · Term 2620 · Instructor: Wilder Aurelio Vega Calero</p>
<p class="terms-section-title">1. Identification</p>
<p>This site presents PayID, a startup from the UPC Software Engineering team. PayID proposes a platform to centralize personal documents, digital identity, and payments. The content is for academic and demonstration purposes.</p>
<p class="terms-section-title">2. Purpose</p>
<p>These terms govern access to and use of this informational site. They describe the PayID proposal and do not, by themselves, constitute a binding commercial offer or an official integration with RENIEC, SUNEDU, CONADIS, SUNAT, ATU, or any other institution.</p>
<p class="terms-section-title">3. Permitted use</p>
<p>Users agree to:</p>
<ul class="terms-list mb-3">
<li>Use the site lawfully and in compliance with applicable regulations.</li>
<li>Not attempt to compromise the security, availability, or integrity of the site.</li>
<li>Not mass-reproduce content without attribution and without academic or informational intent.</li>
</ul>
<p class="terms-section-title">4. Intellectual property</p>
<p>Branding, text, images, and landing design are the team’s work or materials used for academic purposes. Unauthorized commercial use that creates confusion about the project’s origin is prohibited.</p>
<p class="terms-section-title">5. Personal data</p>
<p>PayID is designed in line with Law No. 29733, the Peruvian Personal Data Protection Law. This informational site does not collect identity documents. Any real processing of personal data must have a lawful basis and appropriate security measures.</p>
<p class="terms-section-title">6. Plans and prices</p>
<p>The basic plan is presented as free. The S/ 15 per month premium reference comes from willingness to pay gathered in project interviews and is not a live commercial rate.</p>
<p class="terms-section-title">7. External links</p>
<p>Links to third parties are provided for context. We do not control those destinations.</p>
<p class="terms-section-title">8. Changes</p>
<p>The team may update these terms. The last-updated date indicates the current version.</p>
<p class="terms-section-title">9. Applicable law</p>
<p>For disputes related to this informational site, the laws of the Republic of Peru apply, and the parties submit to the competent courts of Lima, unless mandatory law provides otherwise.</p>
<p class="terms-section-title">10. Contact</p>
<p>Questions about these terms or the project go through the contact section on the main page. Members: Dhilsen Mallqui Vilca, Raul Hiroshi Tasayco Osorio, Diego Mora Blas, and Giussepe Taquiri.</p>`
        }
    };

    let currentLang = 'es';

    function getTable(lang) {
        return TRANSLATIONS[lang] || TRANSLATIONS.es;
    }

    function applyI18n(lang) {
        currentLang = lang === 'en' ? 'en' : 'es';
        localStorage.setItem(STORAGE_KEY, currentLang);
        document.documentElement.lang = currentLang;

        const T = getTable(currentLang);
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && T.meta_desc) metaDesc.setAttribute('content', T.meta_desc);
        if (document.body.classList.contains('page-terms') && T.terms_doc_title) {
            document.title = T.terms_doc_title;
        } else if (T.meta_title) {
            document.title = T.meta_title;
        }

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (key && T[key] !== undefined) el.textContent = T[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (key && T[key] !== undefined) el.innerHTML = T[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && T[key] !== undefined) el.setAttribute('placeholder', T[key]);
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (key && T[key] !== undefined) el.setAttribute('aria-label', T[key]);
        });

        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
            btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
        });

        window.dispatchEvent(new CustomEvent('kairolabs:i18n', { detail: { lang: currentLang } }));
    }

    function bindLangSwitcher() {
        document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                applyI18n(lang);
            });
        });
    }

    window.KAIROLABS_I18N = {
        apply: applyI18n,
        getLang: () => currentLang,
        getHero: () => {
            const T = getTable(currentLang);
            return {
                tagline: T.hero_tagline,
                title: T.hero_title,
                desc: T.hero_desc
            };
        },
        translations: TRANSLATIONS
    };

    window.MEDITRACK_I18N = window.KAIROLABS_I18N;

    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('meditrack_lang') || 'es';
        applyI18n(saved);
        bindLangSwitcher();
    });
})();
