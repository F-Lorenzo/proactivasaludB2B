import type { Dictionary } from './es'

export const en: Dictionary = {
  skipLink: 'Skip to content',

  nav: {
    mainSite: 'Main site',
    home: 'Home',
    problema: 'Care Costs',
    solucion: 'Preventive Model',
    impacto: 'Economic Impact',
    servicios: 'Services',
    cta: 'Request a meeting',
  },

  hero: {
    eyebrow: 'Digital Preventive Health Platform',
    imageAlt: 'B2B financial diagram of preventive health',
    headline: {
      line1: 'More than 45% of the total revenue',
      line2: 'of health companies is',
      line3: 'absorbed by the 50+ population.',
    },
    bodyPrefix: 'Proactiva Salud combines ',
    bodyStrong: 'technology, human follow-up and comprehensive wellness programs',
    bodySuffix:
      ' that improve adherence, streamline care demand and generate real economic impact on annual medical spend.',
    ctaPrimary: 'Request a presentation',
    ctaSecondary: 'See the impact',
    diagram: {
      centerBrand: 'Proactiva Salud',
      centerTitleLine1: 'Active management,',
      centerTitleLine2: 'not just coverage',
      centerSub: 'B2B preventive platform for the Silver Generation',
      nodes: {
        a: { label: 'COST REDUCTION', value: '−12%', sub: 'chronic claims' },
        b: { label: 'ACTIVE PREVENTION', value: '5 pillars', sub: 'comprehensive health' },
        c: { label: 'SILVER GEN.', value: '+50/+60', sub: 'your key segment' },
        d: { label: 'CLINICAL IMPACT', value: 'Measurable', sub: 'on health indicators' },
      },
    },
  },

  painPoints: {
    eyebrow: 'Care Costs',
    headline1: 'The biggest economic impact',
    headline2: 'lies in chronic conditions.',
    items: [
      {
        stat: '60–80%',
        title: 'of spend comes from chronic diseases',
        description:
          'Diabetes, hypertension, obesity and other chronic conditions account for most of the care cost. They are preventable with active prevention.',
      },
      {
        stat: 'Reactive Model',
        title: 'current care system',
        description:
          'Most health companies act once the member is already sick. Systematic prevention is still the exception, not the rule.',
      },
      {
        stat: '+50/+60',
        title: 'the fastest-growing, highest-consuming segment',
        description:
          'The Silver Generation is the fastest-growing segment in portfolios. Without preventive intervention, their care demand keeps scaling.',
      },
    ],
    calloutStrong: 'The equation is simple:',
    calloutRest:
      ' without active prevention, older members consume increasingly costly services. The question is not whether it will happen, but when.',
  },

  solution: {
    eyebrow: 'Preventive Model',
    headline1: 'Active health management,',
    headline2: 'not just coverage.',
    bodyStrong: 'before the problem appears',
    bodySuffix:
      '. A comprehensive prevention program for the Silver Generation that reduces care spend in a sustained, measurable way.',
    differentials: [
      { yes: 'Active health management', no: 'Not reactive telemedicine' },
      { yes: 'Real prevention, not content', no: 'Not just information or an app' },
      { yes: 'Continuous professional follow-up', no: 'Not one-off care' },
      { yes: 'Comprehensive program (5 pillars)', no: 'Not a standalone service' },
    ],
    howItWorks: 'How it works',
    steps: [
      {
        number: '01',
        title: 'Portfolio diagnosis',
        body: 'We identify the Silver segment (50+/60+) and its current risk profile.',
      },
      {
        number: '02',
        title: 'Personalized program',
        body: 'Each member receives a 5-pillar plan: nutrition, physical activity, psychology, wellness and coaching.',
      },
      {
        number: '03',
        title: 'Continuous follow-up',
        body: 'Scheduled teleconsultations, no travel required. The professional comes to the member, not the other way around.',
      },
      {
        number: '04',
        title: 'Impact reports',
        body: 'Adherence data, indicator progress and estimated avoided costs for your company.',
      },
    ],
  },

  impact: {
    eyebrow: 'Economic Impact',
    headline1: 'What changes when you',
    headlineColored: 'act before the problem.',
    imageAlt: 'Older woman walking, active and healthy thanks to preventive management',
    quote: 'Prevention costs less than treatment. Always.',
    quoteSub: 'Preventive health principle in 50+ populations',
    stats: [
      {
        value: '5%–15%',
        label: 'avoidable medical costs',
        description: 'Projected reduction in care spend with active preventive management',
      },
      {
        value: '↓',
        label: 'chronic treatments',
        description: 'Lower incidence of preventable chronic diseases in the portfolio',
      },
      {
        value: '↑',
        label: 'retention and loyalty',
        description: 'Stronger bond and engagement between the member and the company',
      },
      {
        value: '↑',
        label: 'member quality of life',
        description: 'Healthier, more active members who are more satisfied with their coverage',
      },
    ],
    disclaimer:
      'Projections based on preventive health studies in 50+ populations. Actual results depend on portfolio size and profile. The pilot will generate company-specific data.',
  },

  services: {
    eyebrow: 'Services',
    headline1: 'Five pillars working',
    headline2: 'together.',
    featuredImageAlt: 'Organic avocado and spinach salad, healthy eating',
    items: [
      {
        number: '01',
        title: 'Healthy Nutrition +50',
        b2bValue: 'Reduces hospitalization from diabetes, hypertension and obesity',
        description:
          'Personalized meal plan for people over 50. Continuous follow-up via teleconsultation.',
        imageAlt: '',
        includes: [
          '2 monthly teleconsultations with a nutritionist',
          'Personalized +50/+60 meal plan',
          'Follow-up for chronic disease management',
        ],
      },
      {
        number: '02',
        title: 'Physical Activity and Mobility',
        b2bValue: 'Reduces falls, fractures and rehabilitation costs',
        description:
          'Monthly physical activity plan adapted to young, mid and older Silver members. Virtual follow-up.',
        imageAlt: 'Person over 50 doing supervised physical activity',
        includes: [
          'Personalized monthly planning',
          'Follow-up and monitoring via teleconsultation',
          'Mobility, balance, strength and preventive rehabilitation',
        ],
      },
      {
        number: '03',
        title: 'High-Impact Psychology',
        b2bValue: 'Prevents depression, isolation and escalating service use',
        description:
          'Behavioral psychological care. Emotional coaching, stress and anxiety management for members.',
        imageAlt: 'Older person in a psychological wellness session',
        includes: [
          '1 monthly consultation prior to admission',
          'Behavioral psychology and emotional coaching',
          'Stress and anxiety disorder management',
        ],
      },
      {
        number: '04',
        title: 'Scheduled Teleconsultations',
        b2bValue: 'Reduces in-person visits and operating care costs',
        description:
          'All program care is delivered via teleconsultation at set times. No travel required.',
        imageAlt: 'Older adult in a medical teleconsultation from home',
        includes: [
          '2 nutrition + 1 psychology + 1 physical wellness consultations per month',
          'Professional care delivered to the member at home',
          'Continuous follow-up across all programs',
        ],
      },
      {
        number: '05',
        title: 'Virtual Ontological Coaching Talks',
        b2bValue: 'Increases program adherence and member satisfaction',
        description: 'Redefine your purpose at this stage to live in full fulfillment.',
        imageAlt: 'Group of older adults in a longevity coaching workshop',
        includes: [
          'Monthly talks by age group',
          'Personal development and wellness tools',
          'Strengthens the member–company bond',
        ],
      },
    ],
  },

  businessValue: {
    headline1: 'A comprehensive Wellness program,',
    headline2: 'with measurable economic impact.',
    items: [
      {
        title: 'Reduces long-term medical costs',
        description:
          'Active prevention turns reactive care spend into controlled investment. Fewer hospitalizations, fewer avoidable chronic treatments.',
      },
      {
        title: 'Increases member retention',
        description:
          'Members who perceive concrete value in their coverage stay longer and are more satisfied.',
      },
      {
        title: 'Stands out from the competition',
        description:
          'A comprehensive prevention program for the Silver Generation is a real product differentiator, not a cosmetic one.',
      },
      {
        title: 'Builds member loyalty',
        description:
          'Continuous professional support builds a relationship of trust with the member that goes beyond base coverage.',
      },
      {
        title: 'Generates new enrollments',
        description:
          'The preventive program becomes an acquisition argument for the 50+ segment, the fastest-growing one.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    headline1: 'Less reactive spend,',
    headline2: 'more quantifiable prevention.',
    body: 'If your Company provides health services to the 50+ Silver population, discover how Proactiva Salud can integrate into your operation to reduce care pressure, improve adherence and generate proven economic impact.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    form: {
      title: 'Request a presentation',
      subtitle: 'Fill out the form and a specialist will contact you.',
      empresaLabel: 'Company *',
      empresaPlaceholder: 'Company name',
      tipoLabel: 'Type *',
      tipoPlaceholder: 'Select type',
      tipoOptions: {
        prepaga: 'Prepaid health plan',
        aseguradora: 'Life insurer',
        mutual: 'Mutual / Social security fund',
        otro: 'Other',
      },
      nombreLabel: 'Name *',
      nombrePlaceholder: 'Your name',
      telefonoLabel: 'Phone',
      telefonoPlaceholder: '+54 11 ...',
      emailLabel: 'Corporate email *',
      emailPlaceholder: 'you@company.com',
      mensajeLabel: 'Message (optional)',
      mensajePlaceholder: 'Tell us about your portfolio or specific question',
      submit: 'Request a presentation',
      successTitle: 'We received your inquiry',
      successBody: 'We will contact you shortly to schedule a presentation.',
    },
  },

  footer: {
    brandDescription:
      'A wellness and human support platform for people in the Silver Generation, integrated within insurers and health companies.',
    seccionesLabel: 'Sections',
    contactoLabel: 'Contact',
    copyrightPrefix: '© 2026 Proactiva Salud — ',
    rights: 'All rights reserved',
  },

  common: {
    companyTagline: 'ProactivaSalud — comprehensive health management',
    logoAlt: 'ProActiva Salud',
  },

  languageSwitcher: {
    es: 'Spanish',
    en: 'English',
    pt: 'Portuguese',
  },
}
