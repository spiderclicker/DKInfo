
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, BarChart, Share, Music, User, Mic, Scissors, Wand2, Play } from 'lucide-react';

export const FeatureSection = () => {
    return null; // Implemented in App.tsx
};

export const SurfaceCodeDiagram = () => null;
export const TransformerDecoderDiagram = () => null;
export const PerformanceMetricDiagram = () => null;

export const VideoFeedDemo = () => {
  return (
    <div className="relative flex justify-center items-center h-[550px] w-full max-w-[400px]">
      {/* Background/Blur effects */}
      <div className="absolute w-[250px] h-[250px] bg-purple-500/30 rounded-full blur-3xl -top-10 -right-10 pointer-events-none"></div>
      <div className="absolute w-[250px] h-[250px] bg-blue-500/30 rounded-full blur-3xl -bottom-10 -left-10 pointer-events-none"></div>

      {/* Center Card (Main Phone Interface) */}
      <motion.div 
        className="relative w-[280px] h-[520px] rounded-[2.5rem] bg-black shadow-2xl border-[6px] border-gray-900 overflow-hidden z-20"
      >
        {/* Dynamic Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30"></div>

        {/* Scrolling Content Container */}
        <motion.div
           animate={{ y: ["0%", "-100%", "-200%", "0%"] }}
           transition={{ 
             duration: 12, 
             ease: "easeInOut", 
             times: [0, 0.33, 0.66, 1],
             repeat: Infinity,
             repeatDelay: 1
           }}
           className="h-[300%] w-full flex flex-col"
        >
            {/* Video Item 1 */}
            <div className="h-[33.33%] w-full relative bg-gray-900">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-[pulse_4s_ease_infinite]"></div>
               <VideoOverlay likes="4.2k" comments="284" user="@dksocial_beta" desc="Testing the new infinite scroll physics engine! 🚀 #beta" />
            </div>

             {/* Video Item 2 */}
             <div className="h-[33.33%] w-full relative bg-gray-900">
               <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 via-teal-500 to-emerald-400"></div>
               <VideoOverlay likes="12.5k" comments="892" user="@creative_minds" desc="The new creator tools are insane. Multi-track audio ftw 🎵" />
            </div>

             {/* Video Item 3 */}
             <div className="h-[33.33%] w-full relative bg-gray-900">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-red-500 to-yellow-500"></div>
               <VideoOverlay likes="1.1k" comments="56" user="@beta_tester_01" desc="Just joined the waitlist. Can't wait for full release! 🔥" />
            </div>
        </motion.div>

        {/* Static UI Overlay (Top/Bottom bars) */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-30"></div>
      </motion.div>

      {/* Decorative Cards Behind */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [-6, -8, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-10 w-[240px] h-[450px] rounded-3xl bg-gray-800 dark:bg-gray-800 border-2 border-white/5 opacity-40 -z-10"
      />
       <motion.div 
        animate={{ y: [0, 15, 0], rotate: [6, 8, 6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-16 w-[240px] h-[450px] rounded-3xl bg-gray-800 dark:bg-gray-800 border-2 border-white/5 opacity-40 -z-10"
      />
    </div>
  );
}

const VideoOverlay = ({ likes, comments, user, desc }: { likes: string, comments: string, user: string, desc: string }) => (
    <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-b from-transparent via-black/10 to-black/80">
        <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform cursor-pointer">
                    <Heart size={20} fill="rgba(255,255,255,0.2)" />
                </div>
                <span className="text-xs font-medium text-white">{likes}</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform cursor-pointer">
                    <MessageCircle size={20} />
                </div>
                <span className="text-xs font-medium text-white">{comments}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                <Share size={20} />
            </div>
             <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-white/20 flex items-center justify-center overflow-hidden animate-[spin_4s_linear_infinite]">
                <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
            </div>
        </div>

        <div className="pr-16 space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border border-white flex items-center justify-center">
                    <User size={14} className="text-white" />
                </div>
                <span className="text-white font-bold text-sm">{user}</span>
                <div className="px-1.5 py-0.5 rounded bg-blue-500 text-[10px] font-bold text-white">FOLLOW</div>
            </div>
            <p className="text-white/90 text-sm leading-snug font-medium shadow-black drop-shadow-md">
                {desc}
            </p>
             <div className="flex items-center gap-2 text-white/70 text-xs">
                <Music size={12} />
                <div className="overflow-hidden w-24">
                   <p className="whitespace-nowrap animate-[marquee_5s_linear_infinite]">Original Sound - DK Social • Original Sound</p> 
                </div>
            </div>
        </div>
    </div>
);

export const CreatorInterface = () => {
    return (
        <div className="relative w-[320px] h-[580px] bg-md-sys-light-surfaceContainerHigh dark:bg-md-sys-dark-surfaceContainerHigh rounded-[2rem] border-4 border-md-sys-light-outline/20 dark:border-md-sys-dark-outline/20 shadow-2xl flex flex-col overflow-hidden">
             {/* Header */}
             <div className="h-14 flex items-center justify-between px-4 border-b border-md-sys-light-outline/10 dark:border-md-sys-dark-outline/10 bg-md-sys-light-surface/50 dark:bg-md-sys-dark-surface/50 backdrop-blur-sm z-10">
                 <div className="w-8 h-8 rounded-full bg-md-sys-light-surfaceContainerHighest dark:bg-md-sys-dark-surfaceContainerHighest"></div>
                 <div className="px-3 py-1 bg-md-sys-light-primaryContainer dark:bg-md-sys-dark-primaryContainer rounded-full text-xs font-bold text-md-sys-light-onPrimaryContainer dark:text-md-sys-dark-onPrimaryContainer">
                     DRAFT
                 </div>
                 <div className="w-8 h-8 rounded-full bg-md-sys-light-surfaceContainerHighest dark:bg-md-sys-dark-surfaceContainerHighest"></div>
             </div>

             {/* Preview Area */}
             <div className="flex-grow bg-black relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={48} className="text-white/50" fill="currentColor" />
                  </div>
                  {/* Timeline overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-1 h-12">
                      <div className="flex-1 bg-purple-500/80 rounded-lg border border-white/20"></div>
                      <div className="w-16 bg-blue-500/80 rounded-lg border border-white/20"></div>
                      <div className="w-8 bg-pink-500/80 rounded-lg border border-white/20"></div>
                  </div>
             </div>

             {/* Tools Panel */}
             <div className="h-[200px] bg-md-sys-light-surface dark:bg-md-sys-dark-surface p-6 flex flex-col gap-6">
                 {/* Waveform Visualization */}
                 <div className="flex items-center gap-1 h-8 justify-center opacity-50">
                     {[...Array(20)].map((_,i) => (
                         <motion.div 
                            key={i}
                            animate={{ height: [10, 24, 8, 16, 10] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                            className="w-1 bg-md-sys-light-primary dark:bg-md-sys-dark-primary rounded-full"
                         />
                     ))}
                 </div>

                 {/* Action Buttons */}
                 <div className="flex justify-between items-center px-2">
                     <div className="flex flex-col items-center gap-1 text-xs font-medium text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant">
                         <div className="w-12 h-12 rounded-2xl bg-md-sys-light-secondaryContainer dark:bg-md-sys-dark-secondaryContainer flex items-center justify-center mb-1 text-md-sys-light-onSecondaryContainer dark:text-md-sys-dark-onSecondaryContainer hover:scale-110 transition-transform cursor-pointer">
                             <Scissors size={20} />
                         </div>
                         Split
                     </div>
                      <div className="flex flex-col items-center gap-1 text-xs font-medium text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant">
                         <div className="w-14 h-14 rounded-full bg-md-sys-light-primary dark:bg-md-sys-dark-primary flex items-center justify-center mb-1 text-md-sys-light-onPrimary dark:text-md-sys-dark-onPrimary shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform cursor-pointer">
                             <Mic size={24} />
                         </div>
                         Record
                     </div>
                      <div className="flex flex-col items-center gap-1 text-xs font-medium text-md-sys-light-onSurfaceVariant dark:text-md-sys-dark-onSurfaceVariant">
                         <div className="w-12 h-12 rounded-2xl bg-md-sys-light-secondaryContainer dark:bg-md-sys-dark-secondaryContainer flex items-center justify-center mb-1 text-md-sys-light-onSecondaryContainer dark:text-md-sys-dark-onSecondaryContainer hover:scale-110 transition-transform cursor-pointer">
                             <Wand2 size={20} />
                         </div>
                         Effects
                     </div>
                 </div>
             </div>
        </div>
    );
}

export const CommunityCard = ({ lang }: { lang: 'en' | 'pt' }) => {
    
    const stats = [
        { label: lang === 'en' ? 'Active Nodes' : 'Nós Ativos', val: '8.4k', icon: <Users size={16} /> },
        { label: lang === 'en' ? 'Messages/s' : 'Msgs/s', val: '124k', icon: <MessageCircle size={16} /> },
        { label: lang === 'en' ? 'Uptime' : 'Tempo Ativo', val: '99.9%', icon: <BarChart size={16} /> },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, rotateX: 10, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            {/* Main Card */}
            <div className="relative z-10 bg-md-sys-light-surface dark:bg-md-sys-dark-surface p-8 rounded-[2.5rem] shadow-xl border border-md-sys-light-outline/10 dark:border-md-sys-dark-outline/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Heart size={120} className="text-md-sys-light-primary dark:text-md-sys-dark-primary rotate-12" />
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-md-sys-light-primary to-md-sys-light-tertiary dark:from-md-sys-dark-primary dark:to-md-sys-dark-tertiary flex items-center justify-center text-white text-2xl font-bold">
                        DK
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">DK Community</h3>
                        <p className="text-sm text-md-sys-light-primary dark:text-md-sys-dark-primary font-medium">@dksocial_official</p>
                    </div>
                    <button className="ml-auto px-4 py-2 rounded-full bg-md-sys-light-surfaceVariant dark:bg-md-sys-dark-surfaceVariant text-sm font-semibold hover:bg-md-sys-light-outline/20 transition-colors">
                        {lang === 'en' ? 'Follow' : 'Seguir'}
                    </button>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="h-4 w-3/4 bg-md-sys-light-surfaceVariant dark:bg-md-sys-dark-surfaceVariant rounded-full"></div>
                    <div className="h-4 w-1/2 bg-md-sys-light-surfaceVariant dark:bg-md-sys-dark-surfaceVariant rounded-full"></div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-md-sys-light-surfaceContainerLow dark:bg-md-sys-dark-surfaceContainerLow">
                             <div className="text-md-sys-light-primary dark:text-md-sys-dark-primary mb-1">{s.icon}</div>
                             <span className="text-lg font-bold">{s.val}</span>
                             <span className="text-[10px] uppercase tracking-wide opacity-60">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-md-sys-light-primaryContainer dark:bg-md-sys-dark-primaryContainer rounded-full blur-2xl opacity-50 z-0"
            />
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 w-48 h-48 bg-md-sys-light-secondaryContainer dark:bg-md-sys-dark-secondaryContainer rounded-full blur-3xl opacity-50 z-0"
            />
        </motion.div>
    );
};
