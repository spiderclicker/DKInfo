
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef } from 'react';
import { NetworkScene } from './components/QuantumScene';
import { FeatureSection, CommunityCard, VideoFeedDemo, CreatorInterface } from './components/Diagrams';
import { Menu, Globe, ArrowRight, Check, Share2, Shield, Zap, Play, Wand2, Mic, Layers } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

type Language = 'en' | 'pt';

const content = {
  en: {
    nav: {
      about: "About",
      features: "Features",
      feed: "Feed",
      create: "Create",
      community: "Community",
      login: "Login"
    },
    hero: {
      tagline: "The Future of Connection",
      title: "DK Social Space",
      subtitle: "A decentralized, private, and intuitive social layer for the new web. Join the beta and shape the future of digital interaction.",
      cta: "Join Beta Access",
      secondary: "Learn More"
    },
    features: {
      title: "Why DK Space?",
      f1_title: "Privacy First",
      f1_desc: "Your data remains yours. End-to-end encryption by default for all direct messages.",
      f2_title: "Open Protocols",
      f2_desc: "Built on open standards, ensuring you're never locked into a single platform.",
      f3_title: "Lightning Fast",
      f3_desc: "Optimized for real-time interaction with zero latency using edge computing."
    },
    feed: {
      title: "Immersive Short Feed",
      subtitle: "Experience content in a seamless flow. A vertical video interface designed for maximum engagement and discovery.",
      action: "Watch Demo"
    },
    creators: {
      title: "Creator Studio",
      subtitle: "Powerful tools built right into the app. Remix, edit, and enhance your moments with AI-powered features.",
      f1: "Smart Filters",
      f2: "Multi-track Audio",
      f3: "Layered Editing",
      action: "Start Creating"
    },
    beta: {
      title: "Beta Access",
      desc: "We are currently inviting early adopters to test the platform.",
      placeholder: "Enter your email",
      button: "Request Invite",
      disclaimer: "Limited spots available for Phase 1."
    },
    footer: {
      rights: "© 2024 DK Social Space. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  pt: {
    nav: {
      about: "Sobre",
      features: "Recursos",
      feed: "Feed",
      create: "Criar",
      community: "Comunidade",
      login: "Entrar"
    },
    hero: {
      tagline: "O Futuro da Conexão",
      title: "DK Social Space",
      subtitle: "Uma camada social descentralizada, privada e intuitiva para a nova web. Junte-se ao beta e molde o futuro da interação digital.",
      cta: "Acessar Beta",
      secondary: "Saiba Mais"
    },
    features: {
      title: "Por que DK Space?",
      f1_title: "Privacidade Primeiro",
      f1_desc: "Seus dados permanecem seus. Criptografia de ponta a ponta por padrão em todas as mensagens.",
      f2_title: "Protocolos Abertos",
      f2_desc: "Construído sobre padrões abertos, garantindo que você nunca fique preso a uma única plataforma.",
      f3_title: "Ultra Rápido",
      f3_desc: "Otimizado para interação em tempo real com latência zero usando computação de borda."
    },
    feed: {
      title: "Feed Curto Imersivo",
      subtitle: "Experimente conteúdo em um fluxo contínuo. Uma interface de vídeo vertical projetada para máximo engajamento e descoberta.",
      action: "Ver Demo"
    },
    creators: {
      title: "Estúdio de Criação",
      subtitle: "Ferramentas poderosas integradas ao app. Remix, edite e melhore seus momentos com recursos de IA.",
      f1: "Filtros Inteligentes",
      f2: "Áudio Multi-faixa",
      f3: "Edição em Camadas",
      action: "Comece a Criar"
    },
    beta: {
      title: "Acesso Beta",
      desc: "Estamos convidando os primeiros usuários para testar a plataforma.",
      placeholder: "Digite seu email",
      button: "Pedir Convite",
      disclaimer: "Vagas limitadas para a Fase 1."
    },
    footer: {
      rights: "© 2024 DK Social Space. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso"
    }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const scrollRef = useRef(null);

  const toggleLang = () => setLang(l => l === 'en' ? 'pt' : 'en');

  // Global scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={scrollRef} className="min-h-screen font-sans bg-md-sys-light-background dark:bg-md-sys-dark-background text-md-sys-light-onSurface dark:text-md-sys-dark-onSurface transition-colors duration-300 overflow-x-hidden selection:bg-md-sys-light-primary selection:text-white dark:selection:bg-md-sys-dark-primary dark:selection:text-black">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-md-sys-light-primary dark:bg-md-sys-dark-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Top App Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-md-sys-light-surface/80 dark:bg-md-sys-dark-surface/80 backdrop-blur-md border-b border-md-sys-light-outline/10 dark:border-md-sys-dark-outline/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-md-sys-light-primaryContainer dark:bg-md-sys-dark-primaryContainer flex items-center justify-center text-md-sys-light-onPrimaryContainer dark:text-md-sys-dark-onPrimaryContainer font-display font-bold text-xl">
              DK
            </div>
            <span className="font-display font-semibold text-lg hidden md:block tracking-tight">beta.dksocial.space</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            <NavButton label={t.nav.about} delay={0.1} />
            <NavButton label={t.nav.features} delay={0.2} />
            <NavButton label={t.nav.feed} delay={0.3} />
            <NavButton label={t.nav.create} delay={0.35} />
            <NavButton label={t.nav.community} delay={0.4} />
            <div className="h-6 w-px bg-md-sys-light-outline/20 dark:bg-md-sys-dark-outline/20 mx-2"></div>
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-md-sys-light-surfaceVariant dark:hover:bg-md-sys-dark-surfaceVariant transition-colors text-sm font-medium"
            >
              <Globe size={18} />
              <span className="uppercase">{lang}</span>
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-2 px-6 py-2.5 rounded-full bg-md-sys-light-primary dark:bg-md-sys-dark-primary text-md-sys-light-onPrimary dark:text-md-sys-dark-onPrimary font-medium text-sm hover:shadow-lg transition-all active:scale-95"
            >
              {t.nav.login}
            </motion.button>
          </div>

          <button className="md:hidden p-2 text-md-sys-light-onSurface dark:text-md-sys-dark-onSurface" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-md-sys-light-surface dark:bg-md-sys-dark-surface pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            <NavButton label={t.nav.about} onClick={() => setMenuOpen(false)} />
            <NavButton label={t.nav.features} onClick={() => setMenuOpen(false)} />
            <NavButton label={t.nav.feed} onClick={() => setMenuOpen(false)} />
            <NavButton label={t.nav.create} onClick={() => setMenuOpen(false)} />
            <NavButton label={t.nav.community} onClick={() => setMenuOpen(false)} />
            <hr className="border-md-sys-light-outline/20 dark:border-md-sys-dark-outline/20" />
            <div className="flex items-center justify-between" onClick={toggleLang}>
               <span className="text-lg font-medium">Language</span>
               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-md-sys-light-secondaryContainer dark:bg-md-sys-dark-secondaryContainer text-md-sys-light-onSecondaryContainer dark:text-md-sys-dark-onSecondaryContainer">
                 <Globe size={18} /> {lang.toUpperCase()}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col pt-32 pb-12 overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
             <NetworkScene />
             <div className="absolute inset-0 bg-gradient-to-b from-md-sys-light-background/0 via-md-sys-light-background/50 to-md-sys-light-background dark:from-md-sys-dark-background/0 dark:via-md-sys-dark-background/50 dark:to-md-sys-dark-background pointer-events-none"></div>
          </div>

          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow"
          >
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-md-sys-light-outline/30 dark:border-md-sys-dark-outline/30 bg-md-sys-light-surface/50 dark:bg-md-sys-dark-surface/50 backdrop-blur-sm text-sm font-medium text-md-sys-light-primary dark:text-md-sys-dark-primary"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-md-sys-light-primary dark:bg-md-sys-dark-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-md-sys-light-primary dark:bg-md-sys-dark-primary"></span>
                </span>
                v0.8.2 Beta Live
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-md-sys-light-onSurface to-md-sys-light-onSurfaceVariant dark:from-md-sys-dark-onSurface dark:to-md-sys-dark-onSurfaceVariant"
              >
                {t.hero.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant max-w-lg leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-8 py-4 rounded-full bg-md-sys-light-primary dark:bg-md-sys-dark-primary text-md-sys-light-onPrimary dark:text-md-sys-dark-onPrimary font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  {t.hero.cta} <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-full border border-md-sys-light-outline dark:border-md-sys-dark-outline text-md-sys-light-onSurface dark:text-md-sys-dark-onSurface font-medium text-lg hover:bg-md-sys-light-surfaceVariant dark:hover:bg-md-sys-dark-surfaceVariant transition-all">
                  {t.hero.secondary}
                </button>
              </motion.div>
            </div>
            
            <div className="hidden lg:block relative h-96 w-full pointer-events-none select-none">
              {/* The 3D scene handles the visual, this space reserves layout flow */}
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-md-sys-light-surfaceVariant/30 dark:bg-md-sys-dark-surfaceVariant/10 rounded-t-[3rem] -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t.features.title}</h2>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <FeatureCard 
                icon={<Shield size={32} />}
                title={t.features.f1_title}
                desc={t.features.f1_desc}
              />
              <FeatureCard 
                icon={<Share2 size={32} />}
                title={t.features.f2_title}
                desc={t.features.f2_desc}
              />
              <FeatureCard 
                icon={<Zap size={32} />}
                title={t.features.f3_title}
                desc={t.features.f3_desc}
              />
            </motion.div>
          </div>
        </section>

        {/* Short Video Feed Section */}
        <section className="py-24 overflow-hidden relative">
          {/* Ambient Background Spot */}
          <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-md-sys-light-primary/10 dark:bg-md-sys-dark-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ duration: 0.8 }}
                 className="space-y-6"
               >
                 <div className="inline-flex items-center gap-2 text-md-sys-light-primary dark:text-md-sys-dark-primary font-semibold uppercase tracking-wider text-sm">
                   <Play size={16} fill="currentColor" /> {t.nav.feed}
                 </div>
                 <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">{t.feed.title}</h2>
                 <p className="text-xl text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant leading-relaxed">
                   {t.feed.subtitle}
                 </p>
                 <button className="px-8 py-3 rounded-full border-2 border-md-sys-light-primary dark:border-md-sys-dark-primary text-md-sys-light-primary dark:text-md-sys-dark-primary font-bold hover:bg-md-sys-light-primary hover:text-white dark:hover:bg-md-sys-dark-primary dark:hover:text-black transition-all">
                    {t.feed.action}
                 </button>
               </motion.div>
               
               <motion.div
                 initial={{ opacity: 0, x: 50, rotate: 3 }}
                 whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                 className="flex justify-center lg:justify-end"
               >
                 <VideoFeedDemo />
               </motion.div>
            </div>
          </div>
        </section>

        {/* Creator Studio Section (New) */}
        <section className="py-24 bg-md-sys-light-surfaceContainerLow dark:bg-md-sys-dark-surfaceContainerLow rounded-[3rem] mx-4 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="order-2 lg:order-1 flex justify-center"
                 >
                   <CreatorInterface />
                 </motion.div>

                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="order-1 lg:order-2 space-y-8"
                 >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-md-sys-light-secondaryContainer dark:bg-md-sys-dark-secondaryContainer text-md-sys-light-onSecondaryContainer dark:text-md-sys-dark-onSecondaryContainer text-sm font-medium">
                       <Wand2 size={14} /> <span>Beta Feature</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">{t.creators.title}</h2>
                    <p className="text-lg text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant leading-relaxed">
                      {t.creators.subtitle}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-md-sys-light-surface/50 dark:bg-md-sys-dark-surface/50 border border-md-sys-light-outline/10 dark:border-md-sys-dark-outline/10">
                        <div className="p-3 rounded-full bg-md-sys-light-primary/10 dark:bg-md-sys-dark-primary/10 text-md-sys-light-primary dark:text-md-sys-dark-primary">
                          <Wand2 size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold">{t.creators.f1}</h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-md-sys-light-surface/50 dark:bg-md-sys-dark-surface/50 border border-md-sys-light-outline/10 dark:border-md-sys-dark-outline/10">
                        <div className="p-3 rounded-full bg-md-sys-light-primary/10 dark:bg-md-sys-dark-primary/10 text-md-sys-light-primary dark:text-md-sys-dark-primary">
                          <Mic size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold">{t.creators.f2}</h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-md-sys-light-surface/50 dark:bg-md-sys-dark-surface/50 border border-md-sys-light-outline/10 dark:border-md-sys-dark-outline/10">
                        <div className="p-3 rounded-full bg-md-sys-light-primary/10 dark:bg-md-sys-dark-primary/10 text-md-sys-light-primary dark:text-md-sys-dark-primary">
                          <Layers size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold">{t.creators.f3}</h4>
                        </div>
                      </div>
                    </div>
                    
                    <button className="px-8 py-3 bg-md-sys-light-onSurface dark:bg-md-sys-dark-onSurface text-md-sys-light-surface dark:text-md-sys-dark-surface rounded-full font-bold hover:scale-105 transition-transform">
                      {t.creators.action}
                    </button>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Community & Beta Signup */}
        <section className="py-24 max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <CommunityCard lang={lang} />
             </div>
             
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2 space-y-8 bg-md-sys-light-surfaceContainerHigh dark:bg-md-sys-dark-surfaceContainerHigh p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
             >
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-md-sys-light-tertiaryContainer/20 dark:bg-md-sys-dark-tertiaryContainer/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <h3 className="text-3xl font-display font-bold relative z-10">{t.beta.title}</h3>
                <p className="text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant text-lg relative z-10">
                  {t.beta.desc}
                </p>
                
                <div className="space-y-4 relative z-10">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder={t.beta.placeholder}
                      className="w-full px-6 py-4 rounded-xl bg-md-sys-light-surface dark:bg-md-sys-dark-surface border border-md-sys-light-outline/20 dark:border-md-sys-dark-outline/20 focus:border-md-sys-light-primary dark:focus:border-md-sys-dark-primary focus:ring-2 focus:ring-md-sys-light-primary/20 dark:focus:ring-md-sys-dark-primary/20 outline-none transition-all"
                    />
                  </div>
                  <button className="w-full py-4 rounded-xl bg-md-sys-light-primaryContainer dark:bg-md-sys-dark-primaryContainer text-md-sys-light-onPrimaryContainer dark:text-md-sys-dark-onPrimaryContainer font-bold text-lg hover:opacity-90 transition-opacity">
                    {t.beta.button}
                  </button>
                  <p className="text-xs text-center text-md-sys-light-onSurfaceVariant/70 dark:text-md-sys-dark-onSurfaceVariant/70">
                    {t.beta.disclaimer}
                  </p>
                </div>
             </motion.div>
           </div>
        </section>
      </main>

      <footer className="bg-md-sys-light-surfaceContainer dark:bg-md-sys-dark-surfaceContainer py-12 mt-12 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <h4 className="font-display font-bold text-xl mb-2">DK Social Space</h4>
             <p className="text-sm text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant">
               {t.footer.rights}
             </p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant">
            <a href="#" className="hover:text-md-sys-light-primary dark:hover:text-md-sys-dark-primary transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-md-sys-light-primary dark:hover:text-md-sys-dark-primary transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavButton = ({ label, onClick, delay = 0 }: { label: string, onClick?: () => void, delay?: number }) => (
  <motion.button 
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    onClick={onClick}
    className="px-4 py-2 rounded-full text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant hover:bg-md-sys-light-surfaceVariant/50 dark:hover:bg-md-sys-dark-surfaceVariant/50 font-medium transition-colors"
  >
    {label}
  </motion.button>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    }}
    className="p-8 rounded-[2rem] bg-md-sys-light-surface dark:bg-md-sys-dark-surface hover:bg-md-sys-light-primaryContainer/30 dark:hover:bg-md-sys-dark-primaryContainer/30 transition-colors group cursor-default border border-transparent hover:border-md-sys-light-primary/10 dark:hover:border-md-sys-dark-primary/10"
  >
    <div className="w-16 h-16 rounded-2xl bg-md-sys-light-secondaryContainer dark:bg-md-sys-dark-secondaryContainer text-md-sys-light-onSecondaryContainer dark:text-md-sys-dark-onSecondaryContainer flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default App;
