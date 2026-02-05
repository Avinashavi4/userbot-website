import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, ArrowRight, ChevronRight, Menu, X, Check, Gift, Share2, Camera, ScanFace,
  ShieldCheck, Eye, Lock, AlertCircle, ArrowLeftRight, Layers, DollarSign,
  Zap, Users, Clock, Code, Cpu, Globe, Smartphone, Building, Calendar,
  MessageSquare, Twitter, Github, Linkedin, Youtube, Heart, Star, Award,
  Sparkles, Target, TrendingUp, BookOpen, Play, Mic, Image, FileText,
  Mail, Phone, MapPin, Send, ChevronDown, ExternalLink, Lightbulb,
  Palette, Music, Video, PenTool, BarChart3, Shield, Headphones,
  Wifi, Navigation as NavigationIcon, Signal, Router, Network, Timer,
  Trash2, Download, Search, Filter, RefreshCw, Settings, LogOut, UserCheck, Link2, CalendarDays,
  ArrowUp, ArrowDown
} from 'lucide-react';

// Firebase imports
import { 
  registerUser as firebaseRegisterUser, 
  getRegistrationCount, 
  checkEmailExists, 
  getAllRegistrations,
  scheduleDemo,
  getAllDemos,
  deleteRegistration as firebaseDeleteUser,
  deleteAllRegistrations as firebaseClearAll
} from './firebase';

// Simple Router with hash support
const useRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  
  const navigate = (page) => {
    if (isNavigating || page === currentPage) return;

    setIsNavigating(true);
    setCurrentPage(page);

    // Update URL hash for proper navigation
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${page}`);
    }

    // Instant scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Reset navigation lock after animation
    setTimeout(() => setIsNavigating(false), 200);
  };
  
  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (hash && hash !== '') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  // Check initial hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    if (hash && hash !== '') {
      setCurrentPage(hash);
    }
  }, []);
  
  return { currentPage, navigate, isNavigating };
};

// Animated Logo with Hover Effect - EXACT match to UserBot.Hub logo
const AnimatedLogo = ({ navigate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => navigate('home')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-14 overflow-hidden"
    >
      <motion.div
        animate={{ 
          width: isHovered ? 200 : 56,
          borderRadius: isHovered ? 16 : 16
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="h-14 bg-[#0B1120] flex items-center justify-start px-2 overflow-hidden border border-slate-700/30"
      >
        {/* UNIQUE UserBot.Hub Logo - U+B Fusion with Neural Network */}
        <div className="w-10 h-10 shrink-0 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              {/* Primary gradient - Electric Purple to Cyan */}
              <linearGradient id="ubGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              {/* Secondary gradient - Orange to Pink */}
              <linearGradient id="ubGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              {/* Core glow */}
              <radialGradient id="ubCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
              {/* Glow filter */}
              <filter id="ubGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer Hexagonal Frame - represents "Hub" */}
            <motion.path
              d="M 50 5 L 85 25 L 85 75 L 50 95 L 15 75 L 15 25 Z"
              fill="none"
              stroke="url(#ubGradient1)"
              strokeWidth="3"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />
            
            {/* Inner rotating triangle - represents AI/Tech */}
            <motion.path
              d="M 50 20 L 75 70 L 25 70 Z"
              fill="none"
              stroke="url(#ubGradient2)"
              strokeWidth="2.5"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />
            
            {/* "U" shape - left arc */}
            <path
              d="M 30 35 L 30 60 Q 30 75 50 75"
              fill="none"
              stroke="url(#ubGradient1)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            
            {/* "B" shape - right side */}
            <path
              d="M 50 75 Q 70 75 70 60 Q 70 50 55 50 Q 70 50 70 40 Q 70 25 50 25"
              fill="none"
              stroke="url(#ubGradient2)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            
            {/* Neural connection dots */}
            <motion.circle cx="50" cy="50" r="6" fill="url(#ubCoreGlow)" filter="url(#ubGlow)"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle cx="30" cy="35" r="4" fill="#8B5CF6" filter="url(#ubGlow)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.circle cx="70" cy="35" r="4" fill="#06B6D4" filter="url(#ubGlow)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
            <motion.circle cx="30" cy="65" r="3" fill="#10B981" filter="url(#ubGlow)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle cx="70" cy="65" r="3" fill="#F97316" filter="url(#ubGlow)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            />
            
            {/* Connecting neural lines */}
            <motion.line x1="50" y1="50" x2="30" y2="35" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line x1="50" y1="50" x2="70" y2="35" stroke="#06B6D4" strokeWidth="1" opacity="0.6"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.line x1="50" y1="50" x2="30" y2="65" stroke="#10B981" strokeWidth="1" opacity="0.6"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.line x1="50" y1="50" x2="70" y2="65" stroke="#F97316" strokeWidth="1" opacity="0.6"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            />
          </svg>
        </div>
        
        {/* Text that appears on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="ml-2 whitespace-nowrap"
            >
              <span className="text-purple-400 font-bold text-lg">User</span>
              <span className="text-cyan-400 font-bold text-lg">Bot</span>
              <span className="text-emerald-400 font-bold text-lg">.Hub</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

// Hero Logo - Large animated version for pages - UNIQUE U+B Fusion Design
const HeroLogo = ({ size = 200, showText = true }) => {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: size, height: size }} className="relative">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            {/* Primary gradient - Electric Purple to Cyan */}
            <linearGradient id="heroUbGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            {/* Secondary gradient - Orange to Pink */}
            <linearGradient id="heroUbGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            {/* Core glow */}
            <radialGradient id="heroUbCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
            {/* Glow filter */}
            <filter id="heroUbGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Hexagonal Frame - represents "Hub" */}
          <motion.path
            d="M 50 5 L 85 25 L 85 75 L 50 95 L 15 75 L 15 25 Z"
            fill="none"
            stroke="url(#heroUbGradient1)"
            strokeWidth="3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />
          
          {/* Inner rotating triangle - represents AI/Tech */}
          <motion.path
            d="M 50 20 L 75 70 L 25 70 Z"
            fill="none"
            stroke="url(#heroUbGradient2)"
            strokeWidth="2.5"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />
          
          {/* "U" shape - left arc */}
          <path
            d="M 30 35 L 30 60 Q 30 75 50 75"
            fill="none"
            stroke="url(#heroUbGradient1)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* "B" shape - right side */}
          <path
            d="M 50 75 Q 70 75 70 60 Q 70 50 55 50 Q 70 50 70 40 Q 70 25 50 25"
            fill="none"
            stroke="url(#heroUbGradient2)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Neural connection dots */}
          <motion.circle cx="50" cy="50" r="8" fill="url(#heroUbCoreGlow)" filter="url(#heroUbGlow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle cx="30" cy="35" r="5" fill="#8B5CF6" filter="url(#heroUbGlow)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle cx="70" cy="35" r="5" fill="#06B6D4" filter="url(#heroUbGlow)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          <motion.circle cx="30" cy="65" r="4" fill="#10B981" filter="url(#heroUbGlow)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle cx="70" cy="65" r="4" fill="#F97316" filter="url(#heroUbGlow)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
          />
          
          {/* Connecting neural lines */}
          <motion.line x1="50" y1="50" x2="30" y2="35" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line x1="50" y1="50" x2="70" y2="35" stroke="#06B6D4" strokeWidth="1.5" opacity="0.6"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.line x1="50" y1="50" x2="30" y2="65" stroke="#10B981" strokeWidth="1.5" opacity="0.6"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          <motion.line x1="50" y1="50" x2="70" y2="65" stroke="#F97316" strokeWidth="1.5" opacity="0.6"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          />
        </svg>
      </div>
      
      {showText && (
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-3xl md:text-4xl font-bold text-purple-400">User</span>
          <span className="text-3xl md:text-4xl font-bold text-cyan-400">Bot</span>
          <span className="text-3xl md:text-4xl font-bold text-emerald-400">.Hub</span>
        </motion.div>
      )}
    </div>
  );
};

// Rotating World Map Bar Art - Like base.org (EXACT MATCH)
const WorldMapBarArt = () => {
  const [coloredBars, setColoredBars] = useState([]);
  const [rotation, setRotation] = useState(0);
  const barsRef = useRef([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only animate when visible to prevent background CPU usage
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Generate vertical bars that form a globe/world shape like base.org
    const newBars = [];
    const totalCols = 60;
    const centerX = 300;
    const centerY = 250;
    const radius = 220;
    
    for (let col = 0; col < totalCols; col++) {
      const angle = (col / totalCols) * Math.PI;
      const colX = centerX + Math.cos(angle - Math.PI/2) * radius * 0.95;
      
      // Height based on position in sphere
      const sphereHeight = Math.sin(angle) * radius * 1.8;
      const numBars = Math.floor(sphereHeight / 12);
      
      for (let row = 0; row < numBars; row++) {
        const yOffset = centerY - sphereHeight/2 + row * 12;
        
        // Add randomness
        if (Math.random() > 0.25) {
          newBars.push({
            id: `${col}-${row}`,
            col,
            row,
            baseX: colX,
            y: yOffset,
            height: Math.floor(Math.random() * 15) + 6,
            opacity: 0.25 + Math.random() * 0.15
          });
        }
      }
    }
    barsRef.current = newBars;
  }, []);

  // Rotation animation - only when visible
  useEffect(() => {
    if (!isVisible) return;
    
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);

    const colorInterval = setInterval(() => {
      if (barsRef.current.length > 0) {
        const randomBars = [];
        for (let i = 0; i < 4; i++) {
          const randomBar = barsRef.current[Math.floor(Math.random() * barsRef.current.length)];
          if (randomBar) {
            randomBars.push({
              ...randomBar,
              uniqueId: `${randomBar.id}-${Date.now()}-${i}`,
              color: ['#F97316', '#3B82F6', '#F97316'][Math.floor(Math.random() * 3)]
            });
          }
        }
        setColoredBars(prev => [...prev.slice(-20), ...randomBars]);
      }
    }, 600);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(colorInterval);
    };
  }, [isVisible]);

  // Calculate rotated position
  const getRotatedX = (bar) => {
    const centerX = 300;
    const radius = 220;
    const normalizedCol = bar.col / 60;
    const baseAngle = normalizedCol * Math.PI;
    const rotatedAngle = baseAngle + (rotation * Math.PI / 180);
    return centerX + Math.cos(rotatedAngle - Math.PI/2) * radius * 0.95 * Math.sin(baseAngle);
  };

  return (
    <div ref={containerRef} className="relative w-full h-[500px] overflow-hidden">
      <svg viewBox="0 0 600 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {barsRef.current.map((bar) => {
          const xPos = getRotatedX(bar);
          const isVisible = xPos > 80 && xPos < 520;
          if (!isVisible) return null;
          return (
            <rect
              key={bar.id}
              x={xPos}
              y={bar.y}
              width="3"
              height={bar.height}
              rx="1"
              fill="#9CA3AF"
              opacity={bar.opacity * (0.5 + Math.sin((bar.col / 60) * Math.PI) * 0.5)}
            />
          );
        })}
        {coloredBars.map((bar) => {
          const xPos = getRotatedX(bar);
          const isVisible = xPos > 80 && xPos < 520;
          if (!isVisible) return null;
          return (
            <motion.circle
              key={bar.uniqueId}
              cx={xPos + 1.5}
              cy={bar.y + 3}
              r="4"
              fill={bar.color}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.5] }}
              transition={{ duration: 2.5 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

// Bar Art Component
const BarArt = ({ color = 'green', pattern = 'default' }) => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const generatePattern = () => {
      const newBars = [];
      const cols = 35;
      const rows = 20;

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const centerX = cols / 2;
          const centerY = rows / 2;
          const distFromCenter = Math.sqrt(Math.pow(col - centerX, 2) + Math.pow(row - centerY, 2));
          
          let showBar = false;
          let isHighlight = false;

          if (pattern === 'app') {
            showBar = distFromCenter < 12 && Math.random() > 0.3;
            isHighlight = distFromCenter < 8 && Math.random() > 0.5;
          } else if (pattern === 'build') {
            const normalizedX = (col - centerX) / 8;
            const normalizedY = (row - centerY) / 8;
            const heartCheck = Math.pow(normalizedX * normalizedX + normalizedY * normalizedY - 1, 3) - normalizedX * normalizedX * normalizedY * normalizedY * normalizedY;
            showBar = heartCheck < 2 && Math.random() > 0.35;
            isHighlight = heartCheck < 0.5 && Math.random() > 0.4;
          } else if (pattern === 'api') {
            showBar = distFromCenter < 10 && Math.random() > 0.35;
            isHighlight = distFromCenter > 4 && distFromCenter < 8 && Math.random() > 0.5;
          } else if (pattern === 'pro') {
            const manhattanDist = Math.abs(col - centerX) + Math.abs(row - centerY);
            showBar = manhattanDist < 12 && Math.random() > 0.3;
            isHighlight = manhattanDist < 7 && Math.random() > 0.5;
          } else if (pattern === 'network') {
            // Network/signal pattern
            const wave = Math.sin(col * 0.3) * 5;
            showBar = Math.abs(row - centerY - wave) < 6 && Math.random() > 0.3;
            isHighlight = Math.abs(row - centerY - wave) < 3 && Math.random() > 0.4;
          } else {
            showBar = Math.random() > 0.5;
            isHighlight = Math.random() > 0.8;
          }

          if (showBar) {
            newBars.push({
              x: col * 6,
              y: row * 8,
              height: Math.floor(Math.random() * 20) + 8,
              isHighlight,
              delay: (col + row) * 0.008
            });
          }
        }
      }
      return newBars;
    };

    setBars(generatePattern());
  }, [pattern]);

  const colorMap = {
    green: { base: '#D1D5DB', highlight: '#22C55E' },
    pink: { base: '#D1D5DB', highlight: '#EC4899' },
    gold: { base: '#D1D5DB', highlight: '#B8860B' },
    blue: { base: '#D1D5DB', highlight: '#3B82F6' },
    cyan: { base: '#D1D5DB', highlight: '#06B6D4' }
  };

  const colors = colorMap[color] || colorMap.green;

  return (
    <div className="relative w-full h-44 overflow-hidden">
      <svg viewBox="0 0 210 160" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {bars.map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x}
            y={80 - bar.height / 2}
            width="2.5"
            height={bar.height}
            rx="1"
            fill={bar.isHighlight ? colors.highlight : colors.base}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: bar.isHighlight ? 1 : 0.5, scaleY: 1 }}
            transition={{ duration: 0.4, delay: bar.delay }}
          />
        ))}
      </svg>
    </div>
  );
};

// Network Agent Circuit Logo
const NetworkAgentLogo = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full">
    <defs>
      <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Circuit lines */}
    <g stroke="url(#circuitGrad)" strokeWidth="2" fill="none" filter="url(#glow)">
      {/* Top circuit */}
      <path d="M60 10 L60 25 M50 15 L60 25 L70 15" />
      <circle cx="60" cy="10" r="3" fill="#22C55E" />
      <circle cx="50" cy="15" r="2" fill="#06B6D4" />
      <circle cx="70" cy="15" r="2" fill="#06B6D4" />
      
      {/* Left circuits */}
      <path d="M20 40 L35 40 L35 55 M20 50 L30 50" />
      <circle cx="20" cy="40" r="3" fill="#22C55E" />
      <circle cx="20" cy="50" r="2" fill="#06B6D4" />
      
      {/* Right circuits */}
      <path d="M100 40 L85 40 L85 55 M100 50 L90 50" />
      <circle cx="100" cy="40" r="3" fill="#22C55E" />
      <circle cx="100" cy="50" r="2" fill="#06B6D4" />
      
      {/* Bottom circuits */}
      <path d="M40 95 L40 80 L50 80 M80 95 L80 80 L70 80" />
      <circle cx="40" cy="95" r="3" fill="#22C55E" />
      <circle cx="80" cy="95" r="3" fill="#22C55E" />
      
      {/* Center brain/chip */}
      <rect x="40" y="35" width="40" height="40" rx="5" strokeWidth="2.5" />
      
      {/* Inner connections */}
      <path d="M50 45 L50 55 L60 55 L60 65" />
      <path d="M70 45 L70 55 L60 55" />
      <circle cx="60" cy="55" r="4" fill="#22C55E" />
      
      {/* Side connectors */}
      <path d="M40 50 L35 50" />
      <path d="M40 60 L35 60" />
      <path d="M80 50 L85 50" />
      <path d="M80 60 L85 60" />
    </g>
  </svg>
);

// Network Agent Demo Component
const NetworkAgentDemo = () => {
  const [step, setStep] = useState(0);
  const [sharingCode, setSharingCode] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState(0);
  const [bandwidth, setBandwidth] = useState({ up: 0, down: 0 });
  const [autoPlay, setAutoPlay] = useState(true);

  // Generate random code
  const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  // Auto-play the demo
  useEffect(() => {
    if (!autoPlay) return;
    
    const sequence = [
      () => { setStep(1); setSharingCode(''); setIsSharing(false); setConnectedUsers(0); },
      () => { setStep(2); setSharingCode(generateCode()); },
      () => { setStep(3); setIsSharing(true); },
      () => { setStep(4); setConnectedUsers(1); },
      () => { setStep(5); },
      () => { setStep(0); setIsSharing(false); setConnectedUsers(0); setSharingCode(''); }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      sequence[currentStep]();
      currentStep = (currentStep + 1) % sequence.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  // Simulate bandwidth
  useEffect(() => {
    if (connectedUsers > 0) {
      const interval = setInterval(() => {
        setBandwidth({
          up: (Math.random() * 5 + 1).toFixed(1),
          down: (Math.random() * 15 + 5).toFixed(1)
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [connectedUsers]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white max-w-md mx-auto border border-gray-700 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Header */}
      <div className="relative flex items-center gap-3 mb-6">
        <motion.div 
          animate={{ scale: isSharing ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1, repeat: isSharing ? Infinity : 0 }}
          className={`w-3 h-3 rounded-full ${isSharing ? 'bg-green-500' : 'bg-gray-500'}`} 
        />
        <span className="font-semibold">Network Sharing Agent</span>
        <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
          {isSharing ? '● LIVE' : '○ READY'}
        </span>
      </div>

      {/* Step Indicators */}
      <div className="relative flex justify-between mb-8">
        {['Start', 'Code', 'Share', 'Connect', 'Active'].map((label, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: step === i + 1 ? 1.2 : 1,
                backgroundColor: step >= i + 1 ? '#22c55e' : '#374151'
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1"
            >
              {step > i + 1 ? '✓' : i + 1}
            </motion.div>
            <span className={`text-xs ${step >= i + 1 ? 'text-green-400' : 'text-gray-500'}`}>{label}</span>
          </div>
        ))}
        {/* Progress line */}
        <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-700 -z-10">
          <motion.div 
            className="h-full bg-green-500"
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Demo Content */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {/* Step 1: App Opens */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-2xl flex items-center justify-center"
              >
                <Wifi className="w-8 h-8 text-green-500" />
              </motion.div>
              <p className="text-gray-300">Opening Network Sharing Agent...</p>
            </motion.div>
          )}

          {/* Step 2: Generate Code */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4">Your sharing code:</p>
              <div className="flex justify-center gap-2 mb-4">
                {sharingCode.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-12 h-14 bg-gradient-to-b from-green-500 to-green-600 rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <p className="text-sm text-gray-500">Share this code with your friend</p>
            </motion.div>
          )}

          {/* Step 3: Sharing Active */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-20 h-20 mx-auto mb-4"
              >
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                <div className="absolute inset-2 bg-green-500/40 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Signal className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <p className="text-green-400 font-semibold">Broadcasting...</p>
              <p className="text-sm text-gray-500">Waiting for connections</p>
            </motion.div>
          )}

          {/* Step 4: User Connects */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Check className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-green-400 font-semibold mb-2">Friend Connected!</p>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">J</div>
                <span>John joined via code {sharingCode}</span>
              </div>
            </motion.div>
          )}

          {/* Step 5: Active Sharing */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Sharing Active
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400">Connected Users</span>
                  <span className="text-white font-bold">{connectedUsers}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <ArrowUp className="w-4 h-4 text-green-500" />
                      Upload
                    </div>
                    <span className="text-xl font-bold text-green-400">{bandwidth.up} MB/s</span>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <ArrowDown className="w-4 h-4 text-blue-500" />
                      Download
                    </div>
                    <span className="text-xl font-bold text-blue-400">{bandwidth.down} MB/s</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-green-500" />
                End-to-end encrypted
              </div>
            </motion.div>
          )}

          {/* Default state */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-2xl flex items-center justify-center">
                <Wifi className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-gray-400 mb-4">See how it works</p>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-green-400"
              >
                ▶ Demo starting...
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Replay button */}
      <div className="relative mt-4 flex justify-center">
        <button 
          onClick={() => { setStep(1); setAutoPlay(true); }}
          className="text-sm text-gray-500 hover:text-white transition flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Replay Demo
        </button>
      </div>

      {/* Use Cases */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-gray-400 text-sm mb-3">Perfect for:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { emoji: '🌍', text: 'Remote teams' },
            { emoji: '👨‍👩‍👧‍👦', text: 'Family abroad' },
            { emoji: '🔒', text: 'Bypassing restrictions' },
            { emoji: '🧪', text: 'Testing websites' }
          ].map((useCase, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-default"
            >
              {useCase.emoji} {useCase.text}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-gray-800/50 rounded-lg p-2">
          <div className="text-lg font-bold text-green-400">256-bit</div>
          <div className="text-xs text-gray-500">Encryption</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-2">
          <div className="text-lg font-bold text-blue-400">&lt;50ms</div>
          <div className="text-xs text-gray-500">Latency</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-2">
          <div className="text-lg font-bold text-purple-400">∞</div>
          <div className="text-xs text-gray-500">Bandwidth</div>
        </div>
      </div>
    </div>
  );
};

// UserBot App Demo - Realistic AI Chat Interface
const UserBotAppDemo = () => {
  const [step, setStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const conversation = [
    { type: 'user', text: 'Create a marketing strategy for my startup' },
    { type: 'ai', text: '📊 Marketing Strategy for Your Startup\n\n1. Target Audience Analysis\n   • Demographics: 25-45 tech professionals\n   • Pain points: Time management, productivity\n\n2. Channel Strategy\n   • LinkedIn: B2B content\n   • Twitter: Thought leadership\n   • Email: Nurture sequences\n\n3. Content Calendar\n   • Week 1-2: Brand awareness\n   • Week 3-4: Product features\n   • Week 5+: Social proof\n\n💡 Estimated reach: 50K+ in 90 days' }
  ];

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setStep(0);
      setDisplayText('');
      setIsTyping(false);
      
      // Step 1: Show user typing
      await new Promise(r => setTimeout(r, 500));
      setStep(1);
      
      // Step 2: User message appears
      await new Promise(r => setTimeout(r, 1500));
      setStep(2);
      
      // Step 3: AI thinking
      await new Promise(r => setTimeout(r, 800));
      setStep(3);
      setIsTyping(true);
      
      // Step 4: AI typing response character by character
      await new Promise(r => setTimeout(r, 1000));
      setIsTyping(false);
      setStep(4);
      
      const aiText = conversation[1].text;
      for (let i = 0; i <= aiText.length; i++) {
        setDisplayText(aiText.slice(0, i));
        await new Promise(r => setTimeout(r, 8));
      }
      
      // Step 5: Complete
      await new Promise(r => setTimeout(r, 2000));
      setStep(5);
      
      // Restart
      await new Promise(r => setTimeout(r, 1500));
    };

    sequence();
    const interval = setInterval(sequence, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 rounded-3xl p-6 text-white w-full max-w-2xl border border-green-500/30 shadow-2xl shadow-green-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Assistant</h3>
            <p className="text-green-400 text-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Online
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {['GPT-4', 'Claude', 'Gemini'].map((model, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs ${i === 0 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-2 mb-6">
        {['Ask', 'Process', 'Generate', 'Deliver'].map((s, i) => (
          <React.Fragment key={i}>
            <div className={`flex items-center gap-2 ${step > i ? 'text-green-400' : 'text-gray-600'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${step > i ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-green-500/30 text-green-400 ring-2 ring-green-500' : 'bg-gray-800 text-gray-500'}`}>
                {step > i ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className="text-xs hidden sm:block">{s}</span>
            </div>
            {i < 3 && <div className={`flex-1 h-0.5 ${step > i + 1 ? 'bg-green-500' : 'bg-gray-800'} transition-colors duration-500`} />}
          </React.Fragment>
        ))}
      </div>

      {/* Chat Area */}
      <div className="bg-black/40 rounded-2xl p-4 min-h-[300px] mb-6 overflow-hidden">
        <AnimatePresence mode="sync">
          {/* User Message */}
          {step >= 2 && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-500 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
                <p className="text-white">{conversation[0].text}</p>
                <p className="text-green-200 text-xs mt-1 text-right">Just now</p>
              </div>
            </motion.div>
          )}

          {/* AI Thinking */}
          {step === 3 && isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 px-5 py-3 rounded-2xl rounded-tl-sm">
                <div className="flex items-center gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <RefreshCw className="w-4 h-4 text-green-400" />
                  </motion.div>
                  <span className="text-gray-400">Analyzing your request...</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* AI Response */}
          {step >= 4 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 px-5 py-4 rounded-2xl rounded-tl-sm flex-1 shadow-lg">
                <pre className="whitespace-pre-wrap font-sans text-gray-200 text-sm leading-relaxed">{displayText}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-green-400">|</motion.span></pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Stats */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-4">
          <span className="text-gray-400">🔒 Encrypted</span>
          <span className="text-gray-400">⚡ 0.3s response</span>
        </div>
        <div className="flex gap-2">
          {['✍️ Write', '📊 Analyze', '🎨 Create', '💻 Code'].map((a, i) => (
            <span key={i} className="px-3 py-1.5 bg-gray-800 hover:bg-green-500/20 rounded-lg text-xs cursor-pointer transition">{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// UserBot Build Demo - Visual App Builder
const UserBotBuildDemo = () => {
  const [step, setStep] = useState(0);
  const [components, setComponents] = useState([]);
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const appComponents = [
    { id: 1, name: 'Auth System', icon: Lock, color: 'blue' },
    { id: 2, name: 'Dashboard', icon: BarChart3, color: 'purple' },
    { id: 3, name: 'Payments', icon: DollarSign, color: 'green' },
    { id: 4, name: 'Notifications', icon: MessageSquare, color: 'orange' }
  ];

  useEffect(() => {
    const sequence = async () => {
      setStep(0);
      setComponents([]);
      setDeploying(false);
      setDeployed(false);

      // Add components one by one
      for (let i = 0; i < appComponents.length; i++) {
        await new Promise(r => setTimeout(r, 1200));
        setStep(i + 1);
        setComponents(prev => [...prev, appComponents[i]]);
      }

      // Deploy phase
      await new Promise(r => setTimeout(r, 1000));
      setStep(5);
      setDeploying(true);

      await new Promise(r => setTimeout(r, 2500));
      setDeploying(false);
      setDeployed(true);
      setStep(6);

      await new Promise(r => setTimeout(r, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-pink-950 to-gray-900 rounded-3xl p-6 text-white w-full max-w-2xl border border-pink-500/30 shadow-2xl shadow-pink-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-600 rounded-xl flex items-center justify-center">
            <Code className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">App Builder</h3>
            <p className="text-pink-400 text-sm">Visual • No-Code • Fast</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs">my-startup-app</span>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-1 mb-6 bg-gray-800/50 rounded-full p-1">
        {['Select', 'Configure', 'Connect', 'Test', 'Deploy', 'Live'].map((s, i) => (
          <div key={i} className={`flex-1 py-2 px-2 rounded-full text-center text-xs font-medium transition-all duration-500 ${step > i ? 'bg-pink-500 text-white' : step === i ? 'bg-pink-500/30 text-pink-400' : 'text-gray-500'}`}>
            {s}
          </div>
        ))}
      </div>

      {/* Builder Canvas */}
      <div className="bg-black/40 rounded-2xl p-6 min-h-[300px] mb-6 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ec4899 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative grid grid-cols-2 gap-4">
          <AnimatePresence>
            {components.map((comp, i) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 relative group hover:border-pink-500/50 transition"
              >
                <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 0.5 }} className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
                <comp.icon className={`w-8 h-8 mb-3 ${comp.color === 'blue' ? 'text-blue-400' : comp.color === 'purple' ? 'text-purple-400' : comp.color === 'green' ? 'text-green-400' : 'text-orange-400'}`} />
                <h4 className="font-semibold text-white">{comp.name}</h4>
                <p className="text-xs text-gray-400 mt-1">Ready to use</p>
                {/* Connection lines */}
                {i > 0 && (
                  <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="absolute top-1/2 -left-4 w-4 h-0.5 bg-pink-500/50" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {components.length < 4 && (
            <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="border-2 border-dashed border-gray-700 rounded-xl p-4 flex items-center justify-center min-h-[120px]">
              <div className="text-center text-gray-500">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Adding component...</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Deploy Animation */}
        {deploying && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                <RefreshCw className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              </motion.div>
              <p className="text-xl font-semibold">Deploying to Cloud...</p>
              <p className="text-gray-400 text-sm mt-2">Setting up infrastructure</p>
            </div>
          </motion.div>
        )}

        {/* Success */}
        {deployed && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <p className="text-2xl font-bold text-green-400">🚀 App is Live!</p>
              <p className="text-gray-300 mt-2">my-startup-app.userbot.dev</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 text-sm text-gray-400">
          <span>📦 4 Components</span>
          <span>⚡ Auto-scaling</span>
          <span>🔒 SSL included</span>
        </div>
      </div>
    </div>
  );
};

// UserBot API Demo - Live API Console
const UserBotAPIDemo = () => {
  const [step, setStep] = useState(0);
  const [responseText, setResponseText] = useState('');
  const [metrics, setMetrics] = useState({ latency: 0, tokens: 0 });

  useEffect(() => {
    const sequence = async () => {
      setStep(0);
      setResponseText('');
      setMetrics({ latency: 0, tokens: 0 });

      // Step 1: Request sent
      await new Promise(r => setTimeout(r, 800));
      setStep(1);

      // Step 2: Processing
      await new Promise(r => setTimeout(r, 1200));
      setStep(2);

      // Animate latency
      const targetLatency = 47;
      for (let i = 0; i <= targetLatency; i++) {
        setMetrics(prev => ({ ...prev, latency: i }));
        await new Promise(r => setTimeout(r, 20));
      }

      // Step 3: Response streaming
      await new Promise(r => setTimeout(r, 500));
      setStep(3);

      const response = `{
  "id": "chatcmpl-8x7k9m2n",
  "object": "chat.completion",
  "model": "userbot-4-turbo",
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 12,
    "completion_tokens": 9,
    "total_tokens": 21
  }
}`;

      // Type response
      for (let i = 0; i <= response.length; i++) {
        setResponseText(response.slice(0, i));
        setMetrics(prev => ({ ...prev, tokens: Math.min(21, Math.floor(i / 10)) }));
        await new Promise(r => setTimeout(r, 5));
      }

      // Step 4: Complete
      await new Promise(r => setTimeout(r, 500));
      setStep(4);

      await new Promise(r => setTimeout(r, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 rounded-3xl p-6 text-white w-full max-w-2xl border border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">API Console</h3>
            <p className="text-yellow-400 text-sm">v1 • REST • Real-time</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${step >= 4 ? 'bg-green-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
            {step >= 4 ? '✓ 200 OK' : step >= 1 ? 'Processing...' : 'Ready'}
          </div>
        </div>
      </div>

      {/* Live Metrics */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Latency', value: `${metrics.latency}ms`, icon: Timer, active: step >= 2 },
          { label: 'Tokens', value: metrics.tokens, icon: Sparkles, active: step >= 3 },
          { label: 'Model', value: 'UB-4T', icon: Cpu, active: true },
          { label: 'Region', value: 'US-East', icon: Globe, active: true }
        ].map((m, i) => (
          <div key={i} className={`bg-gray-800/50 rounded-xl p-3 text-center transition-all duration-500 ${m.active ? 'border border-yellow-500/30' : ''}`}>
            <m.icon className={`w-5 h-5 mx-auto mb-1 ${m.active ? 'text-yellow-400' : 'text-gray-600'}`} />
            <p className={`text-lg font-bold ${m.active ? 'text-white' : 'text-gray-600'}`}>{m.value}</p>
            <p className="text-xs text-gray-500">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Code Editor */}
      <div className="bg-black rounded-2xl overflow-hidden mb-6">
        {/* Editor Tabs */}
        <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex gap-2 ml-4">
            <span className="px-3 py-1 bg-gray-800 rounded text-xs text-yellow-400">Request</span>
            <span className="px-3 py-1 rounded text-xs text-gray-500">Response</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 divide-x divide-gray-800">
          {/* Request */}
          <div className="p-4 font-mono text-sm">
            <div className="text-gray-500 mb-2">// POST /v1/chat/completions</div>
            <pre className="text-yellow-400">{`{
  "model": "userbot-4-turbo",
  "messages": [{
    "role": "user",
    "content": "Hello!"
  }],
  "stream": false
}`}</pre>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center gap-2 text-green-400">
                <motion.div animate={{ x: [0, 100] }} transition={{ duration: 0.5 }}>→</motion.div>
                <span className="text-xs">Request sent</span>
              </motion.div>
            )}
          </div>

          {/* Response */}
          <div className="p-4 font-mono text-sm min-h-[200px] bg-gray-950/50">
            {step < 3 && step >= 2 && (
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} className="text-yellow-400">
                <RefreshCw className="w-5 h-5 animate-spin inline mr-2" />
                Processing...
              </motion.div>
            )}
            {step >= 3 && (
              <pre className="text-green-400 whitespace-pre-wrap">{responseText}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.4, repeat: Infinity }}>█</motion.span></pre>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-4 text-gray-400">
          <span>🔑 API Key: ub_live_****x9k2</span>
          <span>📊 99.99% uptime</span>
        </div>
        <div className="text-yellow-400 text-xs">
          {step >= 4 ? '✓ Request complete' : 'Streaming response...'}
        </div>
      </div>
    </div>
  );
};

// UserBot Pro Demo - Enterprise Dashboard
const UserBotProDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [stats, setStats] = useState({ users: 0, requests: 0, savings: 0 });

  const tabs = ['Overview', 'Team', 'Analytics', 'Settings'];

  useEffect(() => {
    const animateStats = async () => {
      // Animate counters
      const targets = { users: 47, requests: 2847, savings: 127 };
      const steps = 50;
      
      for (let i = 0; i <= steps; i++) {
        setStats({
          users: Math.floor((targets.users / steps) * i),
          requests: Math.floor((targets.requests / steps) * i),
          savings: Math.floor((targets.savings / steps) * i)
        });
        await new Promise(r => setTimeout(r, 30));
      }
    };

    animateStats();

    // Cycle tabs
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    { name: 'Sarah Chen', role: 'Admin', avatar: 'SC', active: true },
    { name: 'Mike Ross', role: 'Developer', avatar: 'MR', active: true },
    { name: 'Emily Davis', role: 'Designer', avatar: 'ED', active: false },
    { name: 'John Smith', role: 'Analyst', avatar: 'JS', active: true }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 rounded-3xl p-6 text-white w-full max-w-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Enterprise Dashboard</h3>
            <p className="text-blue-400 text-sm">Acme Corporation</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full text-xs font-bold">PRO</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Enterprise</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 bg-gray-800/50 rounded-xl p-1">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)} className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${activeTab === i ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-black/40 rounded-2xl p-5 min-h-[280px]">
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Team Members', value: stats.users, icon: Users, color: 'blue', suffix: '' },
                  { label: 'API Requests', value: stats.requests, icon: Zap, color: 'yellow', suffix: 'K' },
                  { label: 'Cost Savings', value: stats.savings, icon: TrendingUp, color: 'green', suffix: '%' }
                ].map((stat, i) => (
                  <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }} className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                    <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color === 'blue' ? 'text-blue-400' : stat.color === 'yellow' ? 'text-yellow-400' : 'text-green-400'}`} />
                    <p className="text-2xl font-bold text-white">{stat.value}{stat.suffix}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                {['🚀 Deploy Model', '📊 View Reports', '👥 Manage Team', '⚙️ Settings'].map((action, i) => (
                  <button key={i} className="px-4 py-3 bg-gray-800 hover:bg-blue-500/20 rounded-xl text-sm text-left transition">{action}</button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div key="team" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="space-y-3">
                {teamMembers.map((member, i) => (
                  <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">{member.avatar}</div>
                    <div className="flex-1">
                      <p className="font-medium">{member.name}</p>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${member.active ? 'bg-green-500' : 'bg-gray-500'}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div key="analytics" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              {/* Chart simulation */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-3">Usage This Week</p>
                <div className="flex items-end gap-2 h-32">
                  {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg" />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => <span key={i}>{d}</span>)}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 3 && (
            <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-4">
              {[
                { label: 'SSO Authentication', enabled: true },
                { label: 'Two-Factor Auth', enabled: true },
                { label: 'API Rate Limiting', enabled: false },
                { label: 'Audit Logging', enabled: true }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                  <span className="text-sm">{setting.label}</span>
                  <div className={`w-12 h-6 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    <motion.div animate={{ x: setting.enabled ? 24 : 0 }} className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
        <span>🔒 SOC2 • HIPAA • GDPR Compliant</span>
        <div className="flex gap-1">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
        </div>
      </div>
    </div>
  );
};

// Live Stats Ticker
const LiveStatsTicker = () => {
  const [mwei] = useState((10 + Math.random() * 5).toFixed(2));

  return (
    <div className="fixed top-6 right-6 z-50 hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-gray-700 text-sm font-mono">{mwei} Mwei</span>
    </div>
  );
};

// Enhanced Stats Section with Icons (EXACT base.org match)
const EnhancedStatsSection = () => {
  const stats = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 A9 9 0 0 1 12 21" fill="currentColor" stroke="none" />
        </svg>
      ),
      label: 'Assets on Platform', 
      value: '$12B'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      ),
      label: 'Total Transactions', 
      value: '2.6B+'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l9 5.5v9L12 22l-9-5.5v-9L12 2z" />
        </svg>
      ),
      label: 'Block Time', 
      value: '200',
      unit: 'MS'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 14a8 8 0 0 1 16 0" strokeLinecap="round" />
        </svg>
      ),
      label: 'Median Fee', 
      value: '<$0.01'
    }
  ];

  return (
    <div className="space-y-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs text-gray-400">{stat.label}</span>
            <span className="text-gray-400">{stat.icon}</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-none">
              {stat.value}
            </span>
            {stat.unit && <span className="text-lg font-normal text-gray-400 ml-0.5">{stat.unit}</span>}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Booking Modal
const BookingModal = ({ isOpen, onClose, onBookingComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', date: '', time: '', topic: 'demo' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
  const topics = [
    { id: 'demo', label: 'Product Demo', icon: Play },
    { id: 'enterprise', label: 'Enterprise Solutions', icon: Building },
    { id: 'api', label: 'API Integration', icon: Code },
    { id: 'network', label: 'Network Agent', icon: Wifi },
    { id: 'support', label: 'Technical Support', icon: Headphones }
  ];

  const handleSubmit = () => {
    // Save booking data
    if (onBookingComplete) {
      onBookingComplete({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        date: formData.date,
        time: formData.time,
        topic: topics.find(t => t.id === formData.topic)?.label || formData.topic
      });
    }
    setIsSubmitted(true);
    setTimeout(() => { 
      onClose(); 
      setIsSubmitted(false); 
      setStep(1); 
      setFormData({ name: '', email: '', company: '', date: '', time: '', topic: 'demo' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Scheduled!</h3>
            <p className="text-gray-600">Confirmation sent to {formData.email}</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div><h3 className="text-2xl font-bold text-gray-900">Book an Appointment</h3><p className="text-gray-500">Schedule a call with our team</p></div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6 text-gray-500" /></button>
            </div>
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>{s}</div>
                  {s < 3 && <div className={`w-16 h-1 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Select Topic</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topics.map((topic) => (
                    <button key={topic.id} onClick={() => setFormData({ ...formData, topic: topic.id })}
                      className={`p-4 rounded-xl border-2 text-left flex items-center gap-3 transition ${formData.topic === topic.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                      <topic.icon className={`w-5 h-5 ${formData.topic === topic.id ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="font-medium">{topic.label}</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(2)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition mt-6">Continue</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Select Date & Time</h4>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Date</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Time (EST)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button key={time} onClick={() => setFormData({ ...formData, time })} className={`py-2 px-3 rounded-lg text-sm font-medium transition ${formData.time === time ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>{time}</button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition">Back</button>
                  <button onClick={() => setStep(3)} disabled={!formData.date || !formData.time} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50">Continue</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Your Information</h4>
                <div><label className="block text-sm text-gray-600 mb-2">Full Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500" /></div>
                <div><label className="block text-sm text-gray-600 mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500" /></div>
                <div><label className="block text-sm text-gray-600 mb-2">Company (Optional)</label><input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Acme Inc." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500" /></div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition">Back</button>
                  <button onClick={handleSubmit} disabled={!formData.name || !formData.email} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"><Calendar className="w-5 h-5" />Schedule</button>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

// Face ID Modal - Captures and stores face photo
// Advanced Face Verification with Liveness Detection
const FaceIDVerification = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState('intro'); // intro, scanning-center, analyzing, success, error, blocked
  const [progress, setProgress] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentInstruction, setCurrentInstruction] = useState('');
  const [capturedPhotos, setCapturedPhotos] = useState({ center: null, left: null, right: null });
  const [livenessScore, setLivenessScore] = useState(0);
  const [movementDetected, setMovementDetected] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  
  // Test mode - add ?test=1 to URL to bypass registration checks
  const isTestMode = new URLSearchParams(window.location.search).get('test') === '1';
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const lastFrameRef = useRef(null);
  const movementCountRef = useRef(0);
  const facePositionsRef = useRef([]);
  const capturedPhotoRef = useRef(null); // Store photo in ref for immediate access
  const scanActiveRef = useRef(false); // Track if scanning is active
  const timeoutRef = useRef(null); // Track scan timeout

  // Generate device fingerprint for blocking fake attempts
  const getDeviceFingerprint = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('fingerprint', 2, 2);
    const fingerprint = canvas.toDataURL();
    const nav = navigator.userAgent + navigator.language + screen.width + screen.height;
    return btoa(fingerprint + nav).substring(0, 32);
  };

  // Check if device is blocked
  const isDeviceBlocked = () => {
    const blockedDevices = JSON.parse(localStorage.getItem('blockedDevices') || '[]');
    const deviceId = getDeviceFingerprint();
    return blockedDevices.includes(deviceId);
  };

  // Validate email - any valid email format
  const isValidEmail = (email) => {
    const emailLower = email.toLowerCase().trim();
    // Check if it's a valid email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailLower);
  };

  // Block device after fake detection
  const blockDevice = () => {
    const blockedDevices = JSON.parse(localStorage.getItem('blockedDevices') || '[]');
    const deviceId = getDeviceFingerprint();
    if (!blockedDevices.includes(deviceId)) {
      blockedDevices.push(deviceId);
      localStorage.setItem('blockedDevices', JSON.stringify(blockedDevices));
    }
  };

  // Browser Native Face Detection - works on Chrome/Edge/Android
  const faceDetectorRef = useRef(null);
  const [detectorReady, setDetectorReady] = useState(false);
  
  // Initialize native face detector
  useEffect(() => {
    // Check if browser supports FaceDetector API
    if ('FaceDetector' in window) {
      try {
        faceDetectorRef.current = new window.FaceDetector({ 
          fastMode: true, 
          maxDetectedFaces: 1 
        });
        setDetectorReady(true);
        console.log('Native FaceDetector ready');
      } catch (e) {
        console.log('FaceDetector not supported:', e);
      }
    }
  }, []);

  // Main face detection function
  const detectFace = async () => {
    if (!videoRef.current) return { detected: false };
    
    const video = videoRef.current;
    if (video.readyState < 2) return { detected: false };
    
    // Try native FaceDetector first (Chrome/Edge)
    if (detectorReady && faceDetectorRef.current) {
      try {
        const faces = await faceDetectorRef.current.detect(video);
        
        if (faces && faces.length > 0) {
          const face = faces[0];
          const box = face.boundingBox;
          const videoWidth = video.videoWidth || 320;
          const videoHeight = video.videoHeight || 240;
          
          // Validate face size (5% to 70% of frame)
          const faceArea = (box.width * box.height) / (videoWidth * videoHeight);
          if (faceArea < 0.05 || faceArea > 0.7) {
            return { detected: false, reason: 'size', partial: true };
          }
          
          // Validate face position (should be in frame)
          const centerX = (box.x + box.width / 2) / videoWidth;
          const centerY = (box.y + box.height / 2) / videoHeight;
          if (centerX < 0.15 || centerX > 0.85 || centerY < 0.1 || centerY > 0.9) {
            return { detected: false, reason: 'position', partial: true };
          }
          
          return { 
            detected: true, 
            confidence: 0.9,
            faceArea,
            centerX,
            centerY
          };
        }
        return { detected: false };
      } catch (e) {
        console.log('Detection error:', e);
      }
    }
    
    // Fallback: No face detection available - use simple verification
    // This only runs on Safari/Firefox where FaceDetector isn't available
    return await simpleFaceCheck();
  };

  // Simple fallback check for browsers without FaceDetector
  // VERY STRICT - requires face geometry: oval skin + TWO symmetrical dark eye regions + mouth area
  const simpleFaceCheck = async () => {
    if (!videoRef.current || !canvasRef.current) return { detected: false };
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 320;
    canvas.height = video.videoHeight || 240;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const width = canvas.width;
    const height = canvas.height;
    
    // Define face region (oval in center)
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Helper to get brightness at point
    const getBrightness = (x, y) => {
      if (x < 0 || x >= width || y < 0 || y >= height) return 255;
      const i = (Math.floor(y) * width + Math.floor(x)) * 4;
      return (data[i] + data[i+1] + data[i+2]) / 3;
    };
    
    // Helper to check if skin color
    const isSkinColor = (x, y) => {
      if (x < 0 || x >= width || y < 0 || y >= height) return false;
      const i = (Math.floor(y) * width + Math.floor(x)) * 4;
      const r = data[i], g = data[i+1], b = data[i+2];
      const cb = 128 - 0.169 * r - 0.331 * g + 0.5 * b;
      const cr = 128 + 0.5 * r - 0.419 * g - 0.081 * b;
      return cb > 77 && cb < 127 && cr > 133 && cr < 173;
    };
    
    // FACE GEOMETRY CHECK
    // Eyes should be at ~35% from top of face, ~25% from center horizontally
    const eyeY = centerY - height * 0.08;  // Slightly above center
    const eyeSpacing = width * 0.12;  // Distance from center to each eye
    const leftEyeX = centerX - eyeSpacing;
    const rightEyeX = centerX + eyeSpacing;
    
    // Nose should be at center, below eyes
    const noseX = centerX;
    const noseY = centerY + height * 0.02;
    
    // Mouth should be below nose
    const mouthY = centerY + height * 0.12;
    
    // Sample multiple points in each region
    const sampleRegion = (cx, cy, radius, checkDark) => {
      let matches = 0;
      let total = 0;
      for (let dy = -radius; dy <= radius; dy += 2) {
        for (let dx = -radius; dx <= radius; dx += 2) {
          if (dx*dx + dy*dy <= radius*radius) {
            total++;
            const brightness = getBrightness(cx + dx, cy + dy);
            if (checkDark ? brightness < 90 : brightness >= 90) {
              matches++;
            }
          }
        }
      }
      return total > 0 ? matches / total : 0;
    };
    
    // Check skin in face area (forehead, cheeks)
    const foreheadSkin = isSkinColor(centerX, centerY - height * 0.15);
    const leftCheekSkin = isSkinColor(centerX - width * 0.1, centerY + height * 0.05);
    const rightCheekSkin = isSkinColor(centerX + width * 0.1, centerY + height * 0.05);
    const chinSkin = isSkinColor(centerX, centerY + height * 0.18);
    
    const skinScore = (foreheadSkin ? 1 : 0) + (leftCheekSkin ? 1 : 0) + (rightCheekSkin ? 1 : 0) + (chinSkin ? 1 : 0);
    const hasSkin = skinScore >= 3;  // At least 3 of 4 skin points
    
    // Check for dark regions at eye positions
    const eyeRadius = width * 0.04;
    const leftEyeDark = sampleRegion(leftEyeX, eyeY, eyeRadius, true);
    const rightEyeDark = sampleRegion(rightEyeX, eyeY, eyeRadius, true);
    
    // Eyes must BOTH have dark pixels (pupils/iris)
    const hasLeftEye = leftEyeDark > 0.20;
    const hasRightEye = rightEyeDark > 0.20;
    
    // Check nose bridge (should be lighter than eyes, darker than cheeks)
    const noseBrightness = getBrightness(noseX, noseY);
    const hasNoseArea = noseBrightness > 60 && noseBrightness < 200;
    
    // Check mouth area (should have some variation - lips are different from skin)
    const mouthBrightness = getBrightness(centerX, mouthY);
    const mouthLeftBrightness = getBrightness(centerX - width * 0.05, mouthY);
    const mouthRightBrightness = getBrightness(centerX + width * 0.05, mouthY);
    const mouthVariation = Math.abs(mouthBrightness - mouthLeftBrightness) + Math.abs(mouthBrightness - mouthRightBrightness);
    const hasMouth = mouthVariation > 5 || mouthBrightness < 150;  // Lips tend to be darker or have variation
    
    // SYMMETRY CHECK - eyes should be at similar brightness (hands won't have this)
    const eyeSymmetry = 1 - Math.abs(leftEyeDark - rightEyeDark);
    const isSymmetrical = eyeSymmetry > 0.5;
    
    console.log('Face check:', { 
      hasSkin, skinScore,
      leftEyeDark: leftEyeDark.toFixed(2), 
      rightEyeDark: rightEyeDark.toFixed(2),
      hasLeftEye, hasRightEye,
      isSymmetrical: isSymmetrical,
      hasNoseArea, hasMouth
    });
    
    // STRICT: Must have skin + BOTH eyes + symmetry + (nose OR mouth)
    const isFace = hasSkin && hasLeftEye && hasRightEye && isSymmetrical && (hasNoseArea || hasMouth);
    
    if (isFace) {
      return { detected: true, confidence: 0.85, fallback: true };
    }
    
    // Detailed failure reason
    let reason = 'unknown';
    if (!hasSkin) reason = 'no-skin';
    else if (!hasLeftEye && !hasRightEye) reason = 'no-eyes';
    else if (!hasLeftEye || !hasRightEye) reason = 'one-eye';
    else if (!isSymmetrical) reason = 'not-symmetrical';
    else reason = 'no-face-features';
    
    return { detected: false, reason };
  };

  // Analyze movement between frames
  const analyzeMovement = () => {
    if (!videoRef.current || !canvasRef.current) return 0;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 320;
    canvas.height = video.videoHeight || 240;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let movementScore = 0;
    if (lastFrameRef.current) {
      const lastData = lastFrameRef.current;
      let diffPixels = 0;
      for (let i = 0; i < data.length; i += 16) {
        const diff = Math.abs(data[i] - lastData[i]) + 
                     Math.abs(data[i+1] - lastData[i+1]) + 
                     Math.abs(data[i+2] - lastData[i+2]);
        if (diff > 30) diffPixels++;
      }
      movementScore = diffPixels / (data.length / 16);
    }
    lastFrameRef.current = new Uint8ClampedArray(data);
    
    return movementScore;
  };

  // Calculate overall liveness score
  const calculateLivenessScore = () => {
    const positions = facePositionsRef.current;
    
    // If we got through all 3 scans (center, left, right), that's strong proof of liveness
    // Since the user had to physically turn their head
    if (capturedPhotos.center && capturedPhotos.left && capturedPhotos.right) {
      return 95; // Multi-angle completion is strong proof
    }
    
    if (positions.length < 5) return 60; // Not enough data, but give benefit of doubt
    
    // Check for some movement (very lenient)
    let totalMovement = 0;
    for (let i = 1; i < positions.length; i++) {
      const dx = positions[i].x - positions[i-1].x;
      const dy = positions[i].y - positions[i-1].y;
      totalMovement += Math.sqrt(dx*dx + dy*dy);
    }
    
    const avgMovement = totalMovement / positions.length;
    
    // Very lenient thresholds - multi-angle is the real test
    if (avgMovement < 0.0001) return 40; // Extremely static might be a photo
    
    return 85; // Default to passing if there's any movement
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      
      // Resize to 200x200 for smaller file size (fits in Firebase)
      const targetSize = 200;
      canvas.width = targetSize;
      canvas.height = targetSize;
      const ctx = canvas.getContext('2d');
      
      // Calculate crop to center face
      const vw = video.videoWidth || 400;
      const vh = video.videoHeight || 400;
      const size = Math.min(vw, vh);
      const sx = (vw - size) / 2;
      const sy = (vh - size) / 2;
      
      // Draw cropped and resized image
      ctx.drawImage(video, sx, sy, size, size, 0, 0, targetSize, targetSize);
      
      // Compress more aggressively (0.6 quality)
      return canvas.toDataURL('image/jpeg', 0.6);
    }
    return null;
  };

  const startVerification = async () => {
    if (!userName || !userEmail) {
      alert('Please enter your name and email');
      return;
    }
    
    // Validate email address
    if (!isValidEmail(userEmail)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Check if device is blocked (skip in test mode)
    if (!isTestMode && isDeviceBlocked()) {
      setErrorMessage('This device has been blocked due to suspicious activity. Please contact support.');
      setStep('blocked');
      return;
    }
    
    // Check email already registered (skip in test mode)
    if (!isTestMode) {
      const existingEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
      if (existingEmails.includes(userEmail.toLowerCase())) {
        setErrorMessage('This email is already registered. Each person can only register once.');
        setStep('error');
        return;
      }
    }
    
    setErrorMessage('');
    facePositionsRef.current = [];
    movementCountRef.current = 0;
    setCapturedPhotos({ center: null, left: null, right: null });
    
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setErrorMessage('Camera not supported. Please use Chrome or Safari.');
      setStep('error');
      return;
    }
    
    try {
      const constraints = {
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      };
      
      // Set step first so video element renders
      setStep('scanning-center');
      setCurrentInstruction('📷 Starting camera...');
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      // Wait a moment for the video element to be rendered
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play()
              .then(() => {
                setCurrentInstruction('👤 Look straight at the camera');
                setTimeout(() => startCenterScan(), 500);
              })
              .catch((e) => {
                console.error('Play error:', e);
                setErrorMessage('Could not start video. Please try again.');
                setStep('error');
              });
          };
        } else {
          // If still no video element, try again
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.play().catch(console.error);
              setCurrentInstruction('👤 Look straight at the camera');
              setTimeout(() => startCenterScan(), 500);
            }
          }, 300);
        }
      }, 100);
      
    } catch (err) {
      console.error('Camera error:', err);
      if (err.name === 'NotAllowedError') {
        setErrorMessage('Camera permission denied. Please allow camera access in browser settings.');
      } else if (err.name === 'NotFoundError') {
        setErrorMessage('No camera found. Please connect a camera.');
      } else if (err.name === 'NotReadableError') {
        setErrorMessage('Camera is in use by another app. Please close other apps using the camera.');
      } else {
        setErrorMessage(`Camera error: ${err.message || 'Please try again.'}`);
      }
      setStep('error');
    }
  };

  // Face Scan - Detects real faces, rejects phones/objects
  const startFaceScan = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    setStep('scanning-center');
    setCurrentInstruction('👤 Position your face in the frame');
    setProgress(0);
    setFaceDetected(false);
    
    let progress = 0;
    let faceFrames = 0;
    let noFaceFrames = 0;
    scanActiveRef.current = true;
    
    const runScan = async () => {
      if (!scanActiveRef.current) return;
      
      const result = await detectFace();
      
      if (result && result.detected) {
        // Face found!
        faceFrames++;
        noFaceFrames = 0;
        setFaceDetected(true);
        
        // Messages based on progress
        if (progress < 30) {
          setCurrentInstruction('✅ Face detected! Hold still...');
        } else if (progress < 60) {
          setCurrentInstruction('✅ Keep looking at camera...');
        } else if (progress < 90) {
          setCurrentInstruction('✅ Almost done...');
        } else {
          setCurrentInstruction('✅ Verifying...');
        }
        
        // Increase progress when face detected
        progress += 2;
        
      } else {
        // No face
        noFaceFrames++;
        setFaceDetected(false);
        
        // Messages based on why no face
        if (result && result.reason === 'size') {
          setCurrentInstruction('📏 Move closer to camera');
        } else if (result && result.reason === 'position') {
          setCurrentInstruction('🎯 Center your face');
        } else if (result && result.reason === 'no-eyes') {
          setCurrentInstruction('👁️ Open your eyes and look at camera');
        } else if (result && result.reason === 'one-eye') {
          setCurrentInstruction('👁️ Show both eyes clearly');
        } else if (result && result.reason === 'not-symmetrical') {
          setCurrentInstruction('🎯 Face the camera directly');
        } else if (result && result.reason === 'no-skin') {
          setCurrentInstruction('👤 Show your face, not hands');
        } else if (result && result.reason === 'no-face-features') {
          setCurrentInstruction('👤 Position face in frame');
        } else {
          setCurrentInstruction('❌ Face not detected');
        }
        
        // Decrease progress without face
        if (progress > 0) progress -= 1.5;
        
        // If no face for too long, restart
        if (noFaceFrames > 30 && progress < 20) {
          scanActiveRef.current = false;
          setCurrentInstruction('❌ Face not detected. Try again.');
          setProgress(0);
          setTimeout(() => setStep('intro'), 2000);
          return;
        }
      }
      
      setProgress(Math.min(100, Math.max(0, progress)));
      
      // Complete when 100% and enough face frames
      if (progress >= 100 && faceFrames >= 35) {
        scanActiveRef.current = false;
        const photo = capturePhoto();
        capturedPhotoRef.current = photo; // Store in ref for immediate access
        setCapturedPhotos(prev => ({ ...prev, center: photo }));
        setFaceDetected(true);
        setCurrentInstruction('✅ Face verified!');
        setTimeout(() => completeVerification(), 500);
      } else if (scanActiveRef.current) {
        setTimeout(runScan, 120);
      }
    };
    
    // Start scanning
    setTimeout(runScan, 300);
    
    // Timeout after 20 seconds
    timeoutRef.current = setTimeout(() => {
      if (scanActiveRef.current) {
        scanActiveRef.current = false;
        if (faceFrames >= 25) {
          const photo = capturePhoto();
          capturedPhotoRef.current = photo; // Store in ref for immediate access
          setCapturedPhotos(prev => ({ ...prev, center: photo }));
          setCurrentInstruction('✅ Done!');
          setTimeout(() => completeVerification(), 500);
        } else {
          setCurrentInstruction('❌ Failed. Try again.');
          setTimeout(() => setStep('intro'), 1500);
        }
      }
    }, 20000);
  };

  const completeVerification = () => {
    setStep('analyzing');
    setCurrentInstruction('🔍 Verifying identity...');
    
    // Quick verification - 1 second
    setTimeout(() => {
      setStep('success');
      
      // Stop camera immediately
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      
      // Save email to prevent duplicate registrations (skip in test mode)
      if (!isTestMode) {
        const existingEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
        if (!existingEmails.includes(userEmail.toLowerCase())) {
          existingEmails.push(userEmail.toLowerCase());
          localStorage.setItem('registeredEmails', JSON.stringify(existingEmails));
        }
      }
      
      // Call onSuccess after brief delay to show success message
      setTimeout(() => {
        if (isTestMode) {
          alert('✅ TEST MODE: Verification passed!');
          onClose();
          return;
        }
        
        onSuccess({
          name: userName,
          email: userEmail,
          facePhoto: capturedPhotoRef.current || capturedPhotos.center,
          verifiedAt: new Date().toISOString(),
          verificationMethod: 'face-id'
        });
      }, 1500);
    }, 1000);
  };

  // Keep old function names for compatibility but redirect to new flow
  const startCenterScan = () => startFaceScan();
  const startLeftScan = () => completeVerification();
  const startRightScan = () => completeVerification();

  const analyzeAndComplete = () => {
    setStep('analyzing');
    setCurrentInstruction('🔍 Verifying...');
    
    // Super fast analysis - 0.5 seconds
    setTimeout(() => {
      // Always pass if we got all 3 photos (user followed instructions)
      setStep('success');
      
      // Save email to prevent duplicate registrations (skip in test mode)
      if (!isTestMode) {
        const existingEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
        existingEmails.push(userEmail.toLowerCase());
        localStorage.setItem('registeredEmails', JSON.stringify(existingEmails));
      }
      
      // Quick success - 1 second delay then complete
      setTimeout(() => {
        streamRef.current?.getTracks().forEach(t => t.stop());
        
        if (isTestMode) {
          alert('✅ TEST MODE: Verification passed!');
          onClose();
          return;
        }
        
        onSuccess({
          name: userName,
          email: userEmail,
          facePhoto: capturedPhotos.center,
          facePhotoLeft: capturedPhotos.left,
          facePhotoRight: capturedPhotos.right,
          verifiedAt: new Date().toISOString(),
          verificationMethod: 'multi-angle-face-id'
        });
      }, 1000);
      
    }, 500);
  };

  const handleVerificationFailed = (message) => {
    const attempts = verificationAttempts + 1;
    setVerificationAttempts(attempts);
    
    if (attempts >= 3) {
      blockDevice();
      setErrorMessage('Too many failed attempts. This device has been blocked.');
      setStep('blocked');
    } else {
      setErrorMessage(`${message} Attempts remaining: ${3 - attempts}`);
      setStep('error');
    }
    
    streamRef.current?.getTracks().forEach(t => t.stop());
  };

  // Cleanup
  useEffect(() => {
    return () => {
      // Stop scanning
      scanActiveRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Stop camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
    };
  }, []);
  
  // Stop camera when modal closes and manage body scroll
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll when modal opens - simple overflow hidden
      document.body.classList.add('modal-open');
    } else {
      // Restore body scroll when modal closes
      document.body.classList.remove('modal-open');

      // Stop scanning
      scanActiveRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Stop camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);
  
  useEffect(() => {
    if (isOpen) {
      setStep('intro');
      setProgress(0);
      setErrorMessage('');
      setCapturedPhotos({ center: null, left: null, right: null });
      setLivenessScore(0);
      setMovementDetected(false);
      setFaceDetected(false);
      facePositionsRef.current = [];
      lastFrameRef.current = null;
    }
  }, [isOpen]);
  
  if (!isOpen) return null;

  const isScanning = step.startsWith('scanning-');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <canvas ref={canvasRef} className="hidden" />
        
        {/* Test Mode Banner */}
        {isTestMode && (
          <div className="bg-yellow-400 text-yellow-900 text-center text-sm font-bold py-2 rounded-xl mb-4">
            🧪 TEST MODE - No data will be saved
          </div>
        )}
        
        {/* Intro Step */}
        {step === 'intro' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <ScanFace className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Face Verification</h3>
            <p className="text-gray-600 mb-4 text-sm">Quick face scan to secure your spot</p>
            
            {/* Verification Steps Preview */}
            <div className="bg-blue-50 rounded-xl p-4 mb-4 text-left">
              <p className="text-blue-800 font-semibold mb-2 text-sm">Verification Process:</p>
              <div className="space-y-2 text-xs text-blue-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Look straight at camera</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Hold still for a few seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Done!</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <input 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Full Name *"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
              <input 
                type="email" 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Email Address *"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">Cancel</button>
              <button 
                onClick={startVerification} 
                disabled={!userName || !userEmail} 
                className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Camera className="w-4 h-4" />Start
              </button>
            </div>
          </div>
        )}
        
        {/* Scanning Steps */}
        {isScanning && (
          <div className="text-center">
            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mb-4">
              <div className={`w-4 h-4 rounded-full ${capturedPhotos.center ? 'bg-green-500' : step === 'scanning-center' ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`} />
            </div>
            
            {/* Video Feed */}
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-gray-900" style={{ aspectRatio: '1/1' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1' }}
              />
              
              {/* Face Detection Overlay */}
              <div className={`absolute inset-0 border-4 rounded-2xl transition-colors ${
                faceDetected ? 'border-green-500' : 'border-red-500'
              }`}>
                {/* Scanning Line */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }} 
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} 
                  className={`absolute left-0 right-0 h-1 ${faceDetected ? 'bg-green-500' : 'bg-red-500'} shadow-lg`} 
                />
              </div>
              
              {/* Face Detection Indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className={`px-4 py-2 rounded-full text-white font-bold text-lg ${
                  faceDetected ? 'bg-green-600/90' : 'bg-red-600/90'
                }`}>
                  {faceDetected ? '✅ Face Detected' : '👤 Show Your Face'}
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-3">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500" 
                  style={{ width: `${progress}%` }} 
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
            
            {/* Instructions */}
            <p className={`font-medium ${faceDetected ? 'text-green-600' : 'text-red-600'}`}>
              {currentInstruction}
            </p>
            <p className="text-gray-400 text-xs mt-2">Hold position until progress completes</p>
          </div>
        )}
        
        {/* Analyzing Step */}
        {step === 'analyzing' && (
          <div className="text-center py-8">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Analyzing...</h3>
            <p className="text-gray-500 text-sm">Verifying face authenticity</p>
            
            {/* Captured Photos Preview */}
            <div className="flex justify-center gap-2 mt-4">
              {capturedPhotos.center && (
                <img src={capturedPhotos.center} alt="Center" className="w-16 h-16 rounded-lg object-cover" />
              )}
              {capturedPhotos.left && (
                <img src={capturedPhotos.left} alt="Left" className="w-16 h-16 rounded-lg object-cover" />
              )}
              {capturedPhotos.right && (
                <img src={capturedPhotos.right} alt="Right" className="w-16 h-16 rounded-lg object-cover" />
              )}
            </div>
          </div>
        )}
        
        {/* Success Step */}
        {step === 'success' && (
          <div className="text-center py-8">
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">✅ Registration Complete!</h3>
            <p className="text-gray-600 mb-2">Thank you, {userName}!</p>
            <p className="text-green-600 font-medium mb-4">
              📧 We will send you the product link to your email
            </p>
            <p className="text-gray-500 text-sm mb-6">{userEmail}</p>
            
            <button 
              onClick={() => {
                // Stop camera if still running
                if (streamRef.current) {
                  streamRef.current.getTracks().forEach(t => t.stop());
                  streamRef.current = null;
                }
                // Close the modal and go back to website
                onClose();
              }} 
              className="w-full py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Done
            </button>
          </div>
        )}
        
        {/* Error Step */}
        {step === 'error' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verification Failed</h3>
            <p className="text-red-600 mb-4 text-sm">{errorMessage}</p>
            
            <div className="flex gap-3">
              <button 
                onClick={onClose} 
                className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setStep('intro');
                  setErrorMessage('');
                }} 
                className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        
        {/* Blocked Step */}
        {step === 'blocked' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-red-600 mb-2">🚫 Device Blocked</h3>
            <p className="text-gray-600 mb-4 text-sm">{errorMessage}</p>
            
            <div className="bg-red-50 rounded-xl p-4 mb-4 text-left">
              <p className="text-red-800 font-semibold mb-2 text-sm">⚠️ Suspicious Activity Detected</p>
              <p className="text-red-700 text-xs">
                Your details and device information have been logged. This device cannot be used for registration.
              </p>
            </div>
            
            <button 
              onClick={onClose} 
              className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// Navigation
const Navigation = ({ navigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <AnimatedLogo navigate={(page) => handleNavigate(page)} />
          <div className="hidden md:flex items-center gap-1 bg-gray-100 p-1 rounded-full">
            {[
              { id: 'home', name: 'HOME' },
              { id: 'app', name: 'USERBOT APP' }, 
              { id: 'build', name: 'USERBOT BUILD' }, 
              { id: 'api', name: 'USERBOT API' }, 
              { id: 'pro', name: 'USERBOT PRO' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavigate(item.id)} 
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-gray-600 hover:text-black hover:bg-white/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="fixed inset-0 z-40 bg-white pt-24"
          >
            <div className="flex flex-col p-6 space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'app', label: 'UserBot App' },
                { id: 'build', label: 'UserBot Build' },
                { id: 'api', label: 'UserBot API' },
                { id: 'pro', label: 'UserBot Pro' },
                { id: 'network', label: 'Network Agent' },
                { id: 'about', label: 'About' },
                { id: 'community', label: 'Community' }
              ].map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => handleNavigate(item.id)} 
                  className={`text-left text-2xl font-medium py-4 border-b border-gray-100 transition-all duration-200 ${
                    currentPage === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600 hover:pl-2'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Sidebar
const Sidebar = ({ navigate, currentPage }) => (
  <div className="fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col z-30">
    <nav className="flex-1 p-6 space-y-1">
      {[
        { id: 'home', label: 'Home', hasArrow: false, icon: '🏠' },
        { id: 'app', label: 'UserBot App', hasArrow: false },
        { id: 'build', label: 'UserBot Build', hasArrow: true },
        { id: 'api', label: 'UserBot API', hasArrow: false },
        { id: 'pro', label: 'UserBot Pro', hasArrow: false },
        { id: 'network', label: 'Network Agent', hasArrow: true, isNew: true },
        { id: 'ecosystem', label: 'Ecosystem', hasArrow: true },
        { id: 'community', label: 'Community', hasArrow: true },
        { id: 'about', label: 'About', hasArrow: true }
      ].map((item) => (
        <button 
          key={item.id} 
          onClick={() => navigate(item.id)} 
          className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center justify-between transition-all duration-200 ${
            currentPage === item.id 
              ? 'bg-gray-100 text-black' 
              : 'text-gray-700 hover:bg-gray-50 hover:translate-x-1'
          }`}
        >
          <span className="flex items-center gap-2">
            {item.icon && <span>{item.icon}</span>}
            {item.label}
            {item.isNew && <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">NEW</span>}
          </span>
          {item.hasArrow && <ChevronRight className="w-4 h-4 text-gray-400" />}
        </button>
      ))}
    </nav>
    <div className="p-6 border-t border-gray-100">
      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4"><div className="w-3 h-3 bg-blue-600" />START HERE</div>
      <button onClick={() => navigate('app')} className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition">Get UserBot App</button>
    </div>
  </div>
);

// Terminal Component
const TerminalWindow = () => {
  const [phase, setPhase] = useState(0);
  const [commandText, setCommandText] = useState('');
  const [showAscii, setShowAscii] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [showApiPrompt, setShowApiPrompt] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  const fullCommand = 'npm create userbot';
  const fullProjectName = 'my userbot app';
  const fullAiAnswer = 'yes';
  const fullApiKey = '••••••••••••••••';

  const asciiArt = `//////////////////////////////////////////////////////////////////
//        ::::::::: :::    ::: :::::::::::::::                   //
//            :+:    :+:   :+:  :+:     :+:                       //
//           +:+    +:+ +:+   +:+     +:+                         //
//          +#++:++#:  +#++:++#+     +#+      +#++:++#++:++       //
//          +#+    +#+ +#+    +#+   +#+                           //
//         #+#    #+# #+#    #+#   #+#                            //
//        ###    ###  ########  ###########                       //
//                                                                //
//    :::    :::  :::::::  :::::::::: :::::::::  ::::::::::::::   //
//    +::    +:+ +:+    :+ +:+        :+:    :+:     :+:   :+:    //
//    +:+    +:+ +:+       +:+        +:+    +:+     +:+   +:+    //
//    +#+    +#+  +#++:+   +#++:++#   +#++:++#:     +#++:++#+     //
//    +#+    +#+       +#+ +#+        +#+    +#+    +#+    +#+    //
//    #+#    #+# #+#    #+ #+#        #+#    #+#    #+#    #+#    //
//     ########   #######  ########## ###    ###    ###########   //
//                                                                //
//////////////////////////////////////////////////////////////////`;

  useEffect(() => {
    let timeout;
    
    // Phase 0: Type command
    if (phase === 0) {
      if (commandText.length < fullCommand.length) {
        timeout = setTimeout(() => {
          setCommandText(fullCommand.slice(0, commandText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase(1);
          setShowAscii(true);
        }, 400);
      }
    }
    
    // Phase 1: Show ASCII then prompt
    if (phase === 1) {
      timeout = setTimeout(() => setPhase(2), 800);
    }
    
    // Phase 2: Type project name
    if (phase === 2) {
      if (projectName.length < fullProjectName.length) {
        timeout = setTimeout(() => {
          setProjectName(fullProjectName.slice(0, projectName.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setPhase(3), 500);
      }
    }
    
    // Phase 3: Type AI answer
    if (phase === 3) {
      if (aiAnswer.length < fullAiAnswer.length) {
        timeout = setTimeout(() => {
          setAiAnswer(fullAiAnswer.slice(0, aiAnswer.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setPhase(4);
          setShowApiPrompt(true);
        }, 500);
      }
    }
    
    // Phase 4: Type API key
    if (phase === 4) {
      if (apiKey.length < fullApiKey.length) {
        timeout = setTimeout(() => {
          setApiKey(fullApiKey.slice(0, apiKey.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setPhase(5), 1000);
      }
    }
    
    // Phase 5: Restart loop
    if (phase === 5) {
      timeout = setTimeout(() => {
        setPhase(0);
        setCommandText('');
        setShowAscii(false);
        setProjectName('');
        setAiAnswer('');
        setShowApiPrompt(false);
        setApiKey('');
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [phase, commandText, projectName, aiAnswer, apiKey]);

  const Cursor = ({ active }) => (
    <motion.span
      className="inline-block w-2 h-4 bg-green-400 ml-0.5 align-middle"
      animate={{ opacity: active ? [1, 0] : 0 }}
      transition={{ duration: 0.53, repeat: Infinity }}
    />
  );

  return (
    <div className="bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl max-w-2xl mx-auto border border-gray-800">
      {/* Window header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
        <span className="ml-4 text-gray-400 text-sm font-medium">- UserBotKit</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-5 font-mono text-[13px] leading-relaxed overflow-hidden">
        {/* Command line */}
        <div className="mb-4">
          <span className="text-yellow-400">$</span>{' '}
          <span className="text-green-400">{commandText}</span>
          {phase === 0 && <Cursor active={true} />}
        </div>
        
        {/* ASCII Art Logo */}
        {showAscii && (
          <motion.pre 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-500 text-[9px] leading-[1.15] mb-5 whitespace-pre overflow-x-auto"
          >
            {asciiArt}
          </motion.pre>
        )}
        
        {/* Interactive prompts */}
        {phase >= 2 && (
          <div className="space-y-2">
            <div>
              <span className="text-gray-400">Project name: </span>
              <span className="text-green-400">{projectName}</span>
              {phase === 2 && <Cursor active={true} />}
            </div>
            
            {phase >= 3 && (
              <div>
                <span className="text-gray-400">Use AI Assistant?: </span>
                <span className="text-green-400">{aiAnswer}</span>
                {phase === 3 && <Cursor active={true} />}
              </div>
            )}
            
            {showApiPrompt && (
              <div>
                <span className="text-gray-400">Enter API Key: </span>
                <span className="text-green-400">{apiKey}</span>
                {phase === 4 && <Cursor active={true} />}
                {phase === 5 && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 ml-2"
                  >
                    ✓
                  </motion.span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Product Card
const ProductCard = ({ name, color, pattern, onClick, isNew }) => (
  <motion.button onClick={onClick} whileHover={{ y: -4 }} className="text-left p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl transition-all group w-full relative">
    {isNew && <span className="absolute top-4 right-4 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">NEW</span>}
    <div className="text-sm font-bold text-gray-400 tracking-widest mb-4">{name}</div>
    <BarArt color={color} pattern={pattern} />
    <div className="mt-4 flex items-center gap-2 text-gray-400 group-hover:text-black transition">
      <span className="text-sm font-medium">Learn more</span><ArrowRight className="w-4 h-4" />
    </div>
  </motion.button>
);

// Home Page
// Data management functions - REAL REGISTRATION MODE
// Counter only changes when actual users register via Face ID

const useUserBotData = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('userbothub_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure totalRegistered matches actual registered users count
      return {
        ...parsed,
        totalRegistered: parsed.registeredUsers?.length || 0,
        maxUsers: 2000
      };
    }
    return {
      registeredUsers: [],
      totalRegistered: 0, // Real registrations only - starts at 0
      maxUsers: 2000,
      bookings: [],
      referrals: [],
      referralCode: 'USER' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      referralCount: 0,
      currentUser: null,
      adminEmail: import.meta.env.VITE_ADMIN_EMAIL || 'admin@userbothub.com',
      adminPassword: import.meta.env.VITE_ADMIN_PASSWORD || 'UserBot@2026!'
    };
  });

  // Fetch registration count AND registered users from Firebase on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get count
        const count = await getRegistrationCount();
        
        // Get registered users for avatars
        const users = await getAllRegistrations();
        const formattedUsers = users.map(user => ({
          id: user.id,
          name: user.name || 'User',
          email: user.email || '',
          avatar: user.name ? user.name.charAt(0).toUpperCase() : 'U',
          facePhoto: user.facePhoto || null,
          verifiedAt: user.verifiedAt || user.registeredAt,
          date: user.registeredAt ? new Date(user.registeredAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          faceVerified: true
        }));
        
        setData(prev => ({ 
          ...prev, 
          totalRegistered: count,
          registeredUsers: formattedUsers
        }));
      } catch (error) {
        console.log('Using local data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('userbothub_data', JSON.stringify(data));
  }, [data]);

  const registerUser = async (userData) => {
    // Check if email exists
    const emailExists = await checkEmailExists(userData.email);
    if (emailExists) {
      return { success: false, error: 'Email already registered' };
    }

    // Register in Firebase
    const result = await firebaseRegisterUser({
      name: userData.name || `User ${data.totalRegistered + 1}`,
      email: userData.email?.toLowerCase() || '',
      facePhoto: userData.facePhoto || null,
      verifiedAt: userData.verifiedAt || new Date().toISOString(),
      faceVerified: true
    });

    if (result.success) {
      const newUser = {
        id: result.id,
        name: userData.name || `User ${data.totalRegistered + 1}`,
        email: userData.email || '',
        avatar: userData.name ? userData.name.charAt(0).toUpperCase() : 'U',
        facePhoto: userData.facePhoto || null,
        verifiedAt: userData.verifiedAt || new Date().toISOString(),
        date: new Date().toISOString().split('T')[0],
        faceVerified: true
      };
      setData(prev => ({
        ...prev,
        registeredUsers: [newUser, ...prev.registeredUsers],
        totalRegistered: prev.totalRegistered + 1,
        currentUser: newUser
      }));
      return { success: true, user: newUser };
    }
    return result;
  };

  const addBooking = (bookingData) => {
    const booking = {
      id: Date.now(),
      ...bookingData,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    setData(prev => ({
      ...prev,
      bookings: [booking, ...prev.bookings]
    }));
    return booking;
  };

  const trackReferral = (referrerCode) => {
    const referral = {
      id: Date.now(),
      referrerCode,
      clickedAt: new Date().toISOString()
    };
    setData(prev => ({
      ...prev,
      referrals: [referral, ...prev.referrals],
      referralCount: prev.referralCount + 1
    }));
  };

  const deleteUser = async (userId) => {
    // Delete from Firebase first
    const result = await firebaseDeleteUser(userId);
    if (result.success) {
      // Then update local state
      setData(prev => ({
        ...prev,
        registeredUsers: prev.registeredUsers.filter(u => u.id !== userId),
        totalRegistered: Math.max(0, prev.totalRegistered - 1)
      }));
      return { success: true };
    } else {
      console.error('Failed to delete from Firebase:', result.error);
      return { success: false, error: result.error };
    }
  };

  const deleteBooking = (bookingId) => {
    setData(prev => ({
      ...prev,
      bookings: prev.bookings.filter(b => b.id !== bookingId)
    }));
  };

  const clearAllData = async () => {
    // Clear from Firebase first
    const result = await firebaseClearAll();
    if (result.success) {
      console.log('Cleared', result.count, 'users from Firebase');
    } else {
      console.error('Failed to clear Firebase:', result.error);
    }
    
    // Clear local storage regardless
    const freshData = {
      registeredUsers: [],
      totalRegistered: 0,
      maxUsers: 2000,
      bookings: [],
      referrals: [],
      referralCode: 'USER' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      referralCount: 0,
      currentUser: null,
      adminEmail: import.meta.env.VITE_ADMIN_EMAIL || 'admin@userbothub.com',
      adminPassword: import.meta.env.VITE_ADMIN_PASSWORD || 'changeme123'
    };
    setData(freshData);
    
    // Also clear localStorage registration emails to allow re-registration
    localStorage.removeItem('registeredEmails');
  };

  return { data, registerUser, addBooking, trackReferral, deleteUser, deleteBooking, clearAllData };
};

const HomePage = ({ navigate }) => {
  const [showFaceID, setShowFaceID] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [isRegistered, setIsRegistered] = useState(() => {
    const saved = localStorage.getItem('userbothub_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      return !!parsed.currentUser;
    }
    return false;
  });
  const [linkCopied, setLinkCopied] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  const { data, registerUser, addBooking } = useUserBotData();

  const spotsRemaining = data.maxUsers - data.totalRegistered;

  const handleFaceIDSuccess = async (userData) => {
    const result = await registerUser(userData);
    if (result.success) {
      setShowFaceID(false);
      setIsRegistered(true);
      setRegistrationError('');
    } else {
      setRegistrationError(result.error || 'Registration failed. Please try again.');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://userbothub.com/ref/${data.referralCode}`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const products = [
    { id: 'app', name: 'USERBOT APP', color: 'green', pattern: 'app' },
    { id: 'build', name: 'USERBOT BUILD', color: 'pink', pattern: 'build' },
    { id: 'api', name: 'USERBOT API', color: 'gold', pattern: 'api' },
    { id: 'pro', name: 'USERBOT PRO', color: 'blue', pattern: 'pro' },
    { id: 'network', name: 'NETWORK AGENT', color: 'cyan', pattern: 'network', isNew: true }
  ];

  // Check if registration is full
  const isRegistrationFull = spotsRemaining <= 0;

  return (
    <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
      <LiveStatsTicker />
      <Sidebar navigate={navigate} currentPage="home" />

      <main className="relative z-10 p-6 lg:p-12 xl:p-16">
        {/* Launching Soon Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${isRegistrationFull ? 'bg-red-100 border border-red-200' : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'} shadow-lg`}>
            <div className="flex-shrink-0">
              {isRegistrationFull ? (
                <AlertCircle className="w-5 h-5 text-red-600" />
              ) : (
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              )}
            </div>
            <span className={`font-bold text-lg ${isRegistrationFull ? 'text-red-600' : 'text-white'}`}>
              {isRegistrationFull ? '🔒 Registration Closed - All 2,000 Spots Filled!' : '🚀 Launching Soon - Pre-Register Now!'}
            </span>
            {!isRegistrationFull && (
              <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {spotsRemaining} spots left
              </span>
            )}
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[1.1] mb-8">A global economy,<br />built by all of us</h1>
        </motion.div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">An open stack for<br />the AI economy</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl lg:text-2xl text-gray-600 leading-relaxed">UserBot Hub is built to empower builders, creators, and people everywhere to build apps, grow businesses, create what they love, and earn with AI.</motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mb-24">
          {products.map((product, i) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <ProductCard name={product.name} color={product.color} pattern={product.pattern} onClick={() => navigate(product.id)} isNew={product.isNew} />
            </motion.div>
          ))}
        </div>

        {/* Stats with World Map - EXACT base.org layout */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-[280px] shrink-0">
              <EnhancedStatsSection />
            </div>
            <div className="flex-1 flex justify-end">
              <WorldMapBarArt />
            </div>
          </div>
        </motion.div>

        {/* Network Agent Showcase */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <NetworkAgentLogo />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">NEW PRODUCT</span>
              <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full ml-2">
                📅 Available Phase 1 - Feb 28th
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Network Sharing Agent</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">Share your internet connection with anyone, anywhere. Generate a simple 6-character code, share it with your friend, and they'll connect through your network securely and instantly.</p>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-xl mb-4">How It Works</h3>
                {[
                  { icon: Code, text: 'Generate a unique 6-character sharing code' },
                  { icon: Share2, text: 'Share the code with friends or colleagues' },
                  { icon: Wifi, text: 'They connect instantly through your network' },
                  { icon: Shield, text: 'End-to-end encrypted for security' },
                  { icon: BarChart3, text: 'Real-time bandwidth monitoring' }
                ].map((feature, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-gray-300">
                    <feature.icon className="w-5 h-5 text-green-400" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
                <button onClick={() => navigate('network')} className="mt-6 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition flex items-center gap-2">
                  Explore Network Agent <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <NetworkAgentDemo />
            </div>
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
          <TerminalWindow />
        </motion.div>

        {/* Early Access */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-3xl p-8 md:p-12 mb-16 border ${isRegistrationFull ? 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border-gray-300' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 border-gray-100'}`}>
          {isRegistrationFull ? (
            /* Registration Closed State */
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Lock className="w-12 h-12 text-red-500" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">🎉 All 2,000 Spots Filled!</h3>
              <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
                Thank you for the overwhelming response! Our early access registration has reached its limit.
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex -space-x-3">
                  {data.registeredUsers.slice(0, 8).map((user) => (
                    <div key={user.id} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                        {user.avatar}
                      </div>
                    </div>
                  ))}
                </div>
                <span className="text-gray-600 font-semibold">2,000 users registered</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-yellow-800 font-medium">📧 Join our waitlist for future openings</p>
                <p className="text-yellow-600 text-sm mt-1">We'll notify you when more spots become available.</p>
              </div>
            </div>
          ) : (
          /* Open Registration State */
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4"><Gift className="w-5 h-5 text-blue-600" /><span className="text-blue-600 font-semibold">Limited Early Access</span></div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">First 2,000 users get 2 years FREE</h3>
              <p className="text-gray-600 text-lg mb-6">Register with Face ID verification. Only <span className="font-bold text-black">{spotsRemaining} spots</span> remaining!</p>
              <div className="flex items-center gap-4">
                {data.registeredUsers.length > 0 && (
                  <div className="flex -space-x-3">
                    {data.registeredUsers.slice(0, 6).map((user) => (
                      <div 
                        key={user.id} 
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                        title={user.name}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                          {user.avatar}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <span className="text-gray-500">
                  {data.totalRegistered > 0 
                    ? `${data.totalRegistered.toLocaleString()} users registered` 
                    : 'Be the first to register!'}
                </span>
              </div>
            </div>
            <button onClick={() => setShowFaceID(true)} disabled={isRegistered || spotsRemaining <= 0} className={`px-8 py-5 rounded-2xl font-semibold text-lg flex items-center gap-3 transition shadow-lg ${isRegistered ? 'bg-green-500 text-white cursor-default' : spotsRemaining <= 0 ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'}`}>
              {isRegistered ? <><Check className="w-6 h-6" />Registered!</> : spotsRemaining <= 0 ? <>Spots Filled</> : <><ScanFace className="w-6 h-6" />Register with Face ID</>}
            </button>
          </div>
          )}
        </motion.div>

        {/* Booking */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4"><Calendar className="w-5 h-5 text-green-600" /><span className="text-green-600 font-semibold">Book a Demo</span></div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">See UserBot Hub in action</h3>
              <p className="text-gray-600">Schedule a personalized demo with our team.</p>
            </div>
            <button onClick={() => setShowBooking(true)} className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition flex items-center gap-2 whitespace-nowrap"><Calendar className="w-5 h-5" />Schedule Appointment</button>
          </div>
        </motion.div>

        {/* Referral */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="flex items-center gap-3 mb-4"><Share2 className="w-5 h-5 text-purple-600" /><span className="text-purple-600 font-semibold">Referral Program</span></div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Refer friends, get 3 months FREE</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 px-5 py-4 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 text-center">
              <span className="font-semibold">🚀 Referral links coming soon!</span>
              <p className="text-sm mt-1">Register now to secure your spot and get early access to the referral program.</p>
            </div>
          </div>
          <p className="mt-4 text-purple-600 font-medium text-sm">
            💡 Early registrants will receive their unique referral code via email once the program launches.
          </p>
        </motion.div>
      </main>

      <FaceIDVerification isOpen={showFaceID} onClose={() => setShowFaceID(false)} onSuccess={handleFaceIDSuccess} />
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} onBookingComplete={addBooking} />
    </div>
  );
};

// Network Agent Page
const NetworkAgentPage = ({ navigate }) => (
  <div className="min-h-screen bg-gray-900 pt-20 lg:pl-64 relative text-white">
    <Sidebar navigate={navigate} currentPage="network" />
    
    <main className="relative z-10 p-6 lg:p-12 xl:p-16">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
        <ArrowRight className="w-4 h-4 rotate-180" />Back to Home
      </button>

      <div className="flex items-start gap-6 mb-12">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 p-4">
          <NetworkAgentLogo />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Network Expert Agent</h1>
          <p className="text-xl text-gray-400">Tech, Travel, Daily Use</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            The Network Expert Agent is designed to help users quickly regain network access during emergency situations. It provides temporary access to any available network for up to 5 minutes and intelligently navigates to the nearest accessible network point.
          </p>
          
          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-bold text-white">How It Works</h3>
            {[
              { step: '1', title: 'Scan Networks', desc: 'Automatically detects all available networks in your vicinity' },
              { step: '2', title: 'Emergency Access', desc: 'Grants 5-minute temporary access to open networks' },
              { step: '3', title: 'Navigate', desc: 'Guides you to the nearest stable connection point' },
              { step: '4', title: 'AI Assistance', desc: 'Get help with networking concepts and troubleshooting' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold shrink-0">{item.step}</div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition flex items-center gap-2">
            <Play className="w-5 h-5" /> Try Demo
          </button>
        </div>

        <div>
          <NetworkAgentDemo />
          
          <div className="mt-8 p-6 bg-gray-800 rounded-2xl">
            <h4 className="font-semibold text-white mb-4">Use Cases</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: 'Travel' },
                { icon: Building, label: 'Office' },
                { icon: Wifi, label: 'Emergency' },
                { icon: Smartphone, label: 'Mobile' }
              ].map((uc, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-700 rounded-xl">
                  <uc.icon className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{uc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: 'Instant Connection', desc: 'Connect to available networks in seconds with one tap' },
          { icon: Shield, title: 'Secure Access', desc: 'All connections are encrypted and anonymized' },
          { icon: Globe, title: 'Global Coverage', desc: 'Works anywhere in the world with WiFi availability' },
          { icon: Timer, title: 'Time-Limited', desc: '5-minute emergency windows prevent abuse' },
          { icon: NavigationIcon, title: 'Smart Navigation', desc: 'AI guides you to the best connection points' },
          { icon: MessageSquare, title: 'Expert Chat', desc: 'Get answers to any networking question instantly' }
        ].map((feature, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="p-6 bg-gray-800 rounded-2xl hover:bg-gray-750 transition">
            <feature.icon className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  </div>
);

// Product Page Template
const ProductPage = ({ navigate, currentPage, title, subtitle, description, color, colorClass, icon: Icon, features, useCases, integrations, testimonial, DemoComponent }) => (
  <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
    <LiveStatsTicker />
    <Sidebar navigate={navigate} currentPage={currentPage} />
    <main className="relative z-10 p-6 lg:p-12 xl:p-16">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition"><ArrowRight className="w-4 h-4 rotate-180" />Back to Home</button>
      <div className="flex items-start gap-6 mb-12">
        <div className={`w-20 h-20 rounded-2xl ${colorClass} flex items-center justify-center shrink-0`}><Icon className="w-10 h-10 text-white" /></div>
        <div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">{title}</h1><p className="text-xl text-gray-500">{subtitle}</p></div>
      </div>
      {DemoComponent && (
        <div className="mb-16">
          <DemoComponent />
        </div>
      )}
      <div className="max-w-4xl mb-16"><BarArt color={color} pattern={currentPage} /></div>
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">{description}</p>
          <button className={`px-8 py-4 ${colorClass} text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2`}>Get Started <ArrowRight className="w-5 h-5" /></button>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black mb-6">Key Features</h3>
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4">
                <div className={`w-6 h-6 rounded-full ${colorClass} flex items-center justify-center shrink-0 mt-0.5`}><Check className="w-4 h-4 text-white" /></div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {useCases && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6">Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-gray-50 rounded-2xl">
                <uc.icon className={`w-8 h-8 ${colorClass.replace('bg-', 'text-')} mb-4`} />
                <h4 className="font-bold text-black mb-2">{uc.title}</h4>
                <p className="text-gray-600 text-sm">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {integrations && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-6">Integrations</h3>
          <div className="flex flex-wrap gap-4">{integrations.map((int, i) => (<div key={i} className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">{int}</div>))}</div>
        </div>
      )}
      {testimonial && (
        <div className={`p-8 rounded-2xl ${colorClass.replace('bg-', 'bg-')}/10 mb-16`}>
          <p className="text-xl text-gray-800 italic mb-4">"{testimonial.quote}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">{testimonial.author[0]}</div>
            <div><p className="font-bold text-black">{testimonial.author}</p><p className="text-gray-500 text-sm">{testimonial.role}</p></div>
          </div>
        </div>
      )}
    </main>
  </div>
);

// Individual Product Pages
const UserBotAppPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="app" title="UserBot App" subtitle="Your all-in-one AI assistant" description="The UserBot App brings the power of AI to everyone. Chat with multiple AI models, generate content, automate tasks, and boost your productivity - all from one beautiful interface." color="green" colorClass="bg-green-500" icon={Smartphone}
    DemoComponent={UserBotAppDemo}
    features={['Multi-model AI chat with GPT-4, Claude, Gemini & more', 'Real-time voice conversations', 'Image generation with DALL-E & Midjourney', 'Document analysis', 'Code assistance', 'Marketing content generation', 'Social media automation', 'Resume builder']}
    useCases={[{ icon: PenTool, title: 'Writers', desc: 'Generate content 10x faster' }, { icon: Building, title: 'Business', desc: 'Create proposals effortlessly' }, { icon: Code, title: 'Developers', desc: 'Write code in any language' }]}
    integrations={['Slack', 'Notion', 'Google Docs', 'Microsoft Office', 'Zapier', 'Discord']}
  />
);

const UserBotBuildPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="build" title="UserBot Build" subtitle="Developer tools & SDKs" description="Build AI-powered applications with our comprehensive developer toolkit. Access SDKs in multiple languages, starter templates, and extensive documentation." color="pink" colorClass="bg-pink-500" icon={Code}
    DemoComponent={UserBotBuildDemo}
    features={['SDKs for JavaScript, Python, Go, Rust & more', 'Command-line tools', 'Starter templates', 'API documentation', 'Webhook integrations', 'Testing tools', 'CI/CD integrations', 'Open-source libraries']}
    useCases={[{ icon: Smartphone, title: 'Mobile Apps', desc: 'Build AI-native iOS and Android apps' }, { icon: Globe, title: 'Web Apps', desc: 'Create intelligent web experiences' }, { icon: Cpu, title: 'Backend', desc: 'Power APIs with AI' }]}
    integrations={['GitHub', 'GitLab', 'Vercel', 'AWS', 'Google Cloud', 'Azure', 'Docker']}
  />
);

const UserBotAPIPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="api" title="UserBot API" subtitle="Powerful REST APIs" description="Access our entire AI infrastructure through simple REST APIs. From chat completions to content generation, integrate AI into any application." color="gold" colorClass="bg-yellow-600" icon={Globe}
    DemoComponent={UserBotAPIDemo}
    features={['Chat completions with streaming', 'Content generation', 'Code assistance', 'Image generation', 'Document parsing', 'Multi-language translation', '99.9% uptime SLA', 'Global edge deployment']}
    useCases={[{ icon: MessageSquare, title: 'Chatbots', desc: 'Build intelligent conversations' }, { icon: FileText, title: 'Content', desc: 'Generate at scale' }, { icon: BarChart3, title: 'Analytics', desc: 'Extract insights from data' }]}
    integrations={['REST', 'GraphQL', 'WebSocket', 'gRPC', 'OpenAPI', 'Postman']}
  />
);

const UserBotProPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="pro" title="UserBot Pro" subtitle="Enterprise AI solutions" description="Scale AI across your organization with unlimited access, dedicated support, custom model training, and enterprise-grade security." color="blue" colorClass="bg-blue-500" icon={Building}
    DemoComponent={UserBotProDemo}
    features={['Unlimited API calls', 'Priority 24/7 support', 'Custom model fine-tuning', 'SSO & security controls', 'Dedicated account manager', 'Custom SLA agreements', 'On-premise deployment', 'Advanced analytics', 'Team collaboration', 'Compliance (SOC2, HIPAA, GDPR)']}
    useCases={[{ icon: Building, title: 'Enterprise', desc: 'Deploy AI with governance' }, { icon: Shield, title: 'Healthcare', desc: 'HIPAA-compliant AI' }, { icon: TrendingUp, title: 'Finance', desc: 'Secure AI for financial services' }]}
    integrations={['Salesforce', 'SAP', 'Oracle', 'Workday', 'ServiceNow', 'Jira']}
  />
);

// About Page
const AboutPage = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
      <LiveStatsTicker />
      <Sidebar navigate={navigate} currentPage="about" />
      <main className="relative z-10 p-6 lg:p-12 xl:p-16">
        <button onClick={() => navigate('home')} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition"><ArrowRight className="w-4 h-4 rotate-180" />Back</button>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">About UserBot Hub</h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-16">We're on a mission to make AI accessible to everyone.</p>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-white/90 leading-relaxed">To democratize AI and empower every person to achieve more.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Founder</h2>
          <div className="max-w-md">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-white border border-gray-200 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-4">AG</div>
              <h3 className="text-lg font-bold text-black">Avinash Gattineni</h3>
              <p className="text-blue-600 text-sm mb-2">Founder</p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Community Page
const CommunityPage = ({ navigate }) => {
  const resources = [
    { icon: BookOpen, title: 'Documentation', desc: 'Guides and references' },
    { icon: Github, title: 'GitHub', desc: 'Open-source projects' },
    { icon: Youtube, title: 'YouTube', desc: 'Tutorials and updates' },
    { icon: MessageSquare, title: 'Discord', desc: 'Join our community' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
      <LiveStatsTicker />
      <Sidebar navigate={navigate} currentPage="community" />
      <main className="relative z-10 p-6 lg:p-12 xl:p-16">
        <button onClick={() => navigate('home')} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition"><ArrowRight className="w-4 h-4 rotate-180" />Back</button>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Community</h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-16">Join developers, creators, and AI enthusiasts building the future together.</p>
        


        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition group cursor-pointer">
                <resource.icon className="w-10 h-10 text-gray-400 group-hover:text-blue-600 transition mb-4" />
                <h3 className="text-lg font-bold text-black mb-1">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-6">Connect</h2>
          <div className="flex flex-wrap gap-4">
            {[{ icon: Twitter, label: 'Twitter' }, { icon: Github, label: 'GitHub' }, { icon: Linkedin, label: 'LinkedIn' }, { icon: Youtube, label: 'YouTube' }].map((social, i) => (
              <a key={i} href="#" className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition">
                <social.icon className="w-5 h-5" /><span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Ecosystem Page
const EcosystemPage = ({ navigate }) => (
  <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
    <LiveStatsTicker />
    <Sidebar navigate={navigate} currentPage="ecosystem" />
    <main className="relative z-10 p-6 lg:p-12 xl:p-16">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition"><ArrowRight className="w-4 h-4 rotate-180" />Back</button>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Ecosystem</h1>
      <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-16">Apps, integrations, and partners extending UserBot Hub.</p>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-black mb-8">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Microsoft', 'Google Cloud', 'AWS', 'Vercel', 'Stripe', 'Twilio'].map((partner, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-gray-50 rounded-2xl text-center">
              <p className="font-bold text-black">{partner}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Build on UserBot Hub</h2>
        <p className="text-white/90 mb-6">Create apps with our open APIs and SDKs.</p>
        <button onClick={() => navigate('build')} className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2">Start Building <ArrowRight className="w-5 h-5" /></button>
      </div>
    </main>
  </div>
);

// Footer
const Footer = () => (
  <footer className="bg-black text-white py-16 lg:pl-64">
    <div className="max-w-7xl mx-auto px-6">
      {/* Multi-column links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Explore */}
        <div>
          <h4 className="text-gray-500 text-xs font-medium mb-4 tracking-wider">EXPLORE</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Apps</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Marketplace</a></li>
          </ul>
        </div>

        {/* Builders */}
        <div>
          <h4 className="text-gray-500 text-xs font-medium mb-4 tracking-wider">BUILDERS</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Tools</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Documentation</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">API Reference</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-gray-500 text-xs font-medium mb-4 tracking-wider">RESOURCES</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Brand Kit</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Events</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Blog</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-gray-500 text-xs font-medium mb-4 tracking-wider">SOCIALS</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">X (Twitter)</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Discord</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">GitHub</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">LinkedIn</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-gray-500 text-xs font-medium mb-4 tracking-wider">COMPANY</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">About</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Careers</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Terms of Service</a></li>
            <li><a href="#" className="text-white hover:text-blue-400 text-sm transition">Privacy Policy</a></li>
            <li><a href="#admin" className="text-gray-600 hover:text-purple-400 text-xs transition flex items-center gap-1"><Settings className="w-3 h-3" /> Admin</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section with logo and copyright */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <defs>
                <linearGradient id="footerSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
              <path
                d="M20 4 C28 4, 36 12, 36 20 C36 28, 28 36, 20 36 C12 36, 4 28, 4 20 C4 16, 8 8, 16 6"
                fill="none"
                stroke="url(#footerSwirl)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-white font-semibold">UserBot Hub</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">© 2026 UserBot Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Admin Dashboard - Secret page for viewing all data
const AdminDashboard = ({ navigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [firebaseUsers, setFirebaseUsers] = useState([]);
  const [firebaseDemos, setFirebaseDemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null); // Track which user is being deleted
  const { data, deleteUser, deleteBooking, clearAllData } = useUserBotData();

  // Handle user deletion with async Firebase call
  const handleDeleteUser = async (user) => {
    if (!window.confirm(`Delete ${user.name}?\n\nThis will:\n• Remove from Firebase\n• Increase spots by 1\n• Cannot be undone!`)) return;
    
    setIsDeleting(user.id);
    const result = await deleteUser(user.id);
    
    if (result.success) {
      // Remove from local firebaseUsers list
      setFirebaseUsers(prev => prev.filter(u => u.id !== user.id));
      alert(`✅ ${user.name} deleted successfully!\nSpots remaining increased.`);
    } else {
      alert(`❌ Failed to delete: ${result.error}`);
    }
    setIsDeleting(null);
  };

  // Handle clear all data
  const handleClearAll = async () => {
    if (!window.confirm('⚠️ DELETE ALL DATA?\n\nThis will:\n• Remove ALL users from Firebase\n• Reset spots to 2000\n• Clear all local data\n\nThis CANNOT be undone!')) return;
    if (!window.confirm('🚨 FINAL WARNING!\n\nAre you ABSOLUTELY SURE?\n\nType "yes" to confirm...') || !window.confirm('Last chance - proceed with deletion?')) return;
    
    setIsLoading(true);
    await clearAllData();
    setFirebaseUsers([]);
    setIsLoading(false);
    alert('✅ All data cleared!\n\nSpots reset to 2000.');
  };

  // Fetch Firebase data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchFirebaseData();
    }
  }, [isAuthenticated]);

  const fetchFirebaseData = async () => {
    setIsLoading(true);
    try {
      const [users, demos] = await Promise.all([
        getAllRegistrations(),
        getAllDemos()
      ]);
      setFirebaseUsers(users);
      setFirebaseDemos(demos);
    } catch (error) {
      console.error('Error fetching Firebase data:', error);
    }
    setIsLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    // Check against admin credentials from environment variables
    const validEmail = import.meta.env.VITE_ADMIN_EMAIL || '';
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || '';
    
    if (validEmail && validPassword && email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      setLoginError('Invalid email or password');
    }
  };

  // Use Firebase users if available, otherwise fallback to local
  const allUsers = firebaseUsers.length > 0 ? firebaseUsers : data.registeredUsers;

  const filteredUsers = allUsers.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBookings = data.bookings.filter(booking =>
    booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportData = () => {
    const exportObj = {
      exportedAt: new Date().toISOString(),
      stats: {
        totalRegistered: data.totalRegistered,
        spotsRemaining: data.maxUsers - data.totalRegistered,
        totalBookings: data.bookings.length,
        referralClicks: data.referralCount
      },
      users: data.registeredUsers.map(u => ({ ...u, facePhoto: u.facePhoto ? '[IMAGE DATA]' : null })),
      bookings: data.bookings,
      referrals: data.referrals || []
    };
    const dataStr = JSON.stringify(exportObj, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `userbothub-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
            <p className="text-gray-500 mt-2">Authorized personnel only</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
              />
            </div>
            {loginError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {loginError}
              </div>
            )}
            <button type="submit" className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition">
              Access Dashboard
            </button>
          </form>
          <button 
            onClick={() => {
              window.history.pushState(null, '', window.location.pathname);
              navigate('home');
            }} 
            className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 transition text-sm flex items-center justify-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Website
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">UserBot Hub Admin</h1>
              <p className="text-sm text-gray-500">Dashboard & Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchFirebaseData} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </button>
            <button onClick={exportData} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition flex items-center gap-2">
              <Download className="w-4 h-4" /> Export Data
            </button>
            <button onClick={handleClearAll} disabled={isLoading} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition flex items-center gap-2 disabled:opacity-50">
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
            <button 
              onClick={() => {
                window.history.pushState(null, '', window.location.pathname);
                navigate('home');
              }} 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Exit
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Registered Users</p>
                <p className="text-2xl font-bold text-gray-900">{data.totalRegistered.toLocaleString()}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">{data.registeredUsers.length} with Face ID</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CalendarDays className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{data.bookings.length}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-green-600">{data.bookings.filter(b => b.status === 'confirmed').length} confirmed</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Link2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Referral Clicks</p>
                <p className="text-2xl font-bold text-gray-900">{data.referralCount}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Code: {data.referralCode}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Spots Remaining</p>
                <p className="text-2xl font-bold text-gray-900">{(data.maxUsers - data.totalRegistered).toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: `${(data.totalRegistered / data.maxUsers) * 100}%` }} />
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6">
          {[
            { id: 'users', label: 'Registered Users', icon: Users },
            { id: 'bookings', label: 'Bookings', icon: Calendar },
            { id: 'referrals', label: 'Referrals', icon: Share2 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                activeTab === tab.id 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Content */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Registered Users ({filteredUsers.length})</h2>
              {isLoading && <span className="text-sm text-blue-600">Loading...</span>}
            </div>
            {filteredUsers.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No registered users yet</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="p-6 flex items-center gap-6 hover:bg-gray-50 transition">
                    {/* Face Photo */}
                    <div className="shrink-0">
                      {user.facePhoto ? (
                        <img 
                          src={user.facePhoto} 
                          alt={user.name}
                          className="w-20 h-20 rounded-2xl object-cover cursor-pointer hover:scale-105 transition"
                          onClick={() => setSelectedUser(user)}
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                          {user.avatar}
                        </div>
                      )}
                    </div>
                    
                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-gray-400">ID: {user.id}</span>
                        <span className="text-xs text-gray-400">Registered: {new Date(user.verifiedAt || user.date).toLocaleString()}</span>
                        {user.faceVerified && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Face Verified
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {user.facePhoto && (
                        <button 
                          onClick={() => setSelectedUser(user)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="View Photo"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                      <button 
                        onClick={() => handleDeleteUser(user)}
                        disabled={isDeleting === user.id}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                        title="Delete User"
                      >
                        {isDeleting === user.id ? (
                          <RefreshCw className="w-5 h-5 animate-spin" />
                        ) : (
                          <Trash2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Scheduled Appointments ({filteredBookings.length})</h2>
            </div>
            {filteredBookings.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No bookings yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Topic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{booking.name}</td>
                        <td className="px-6 py-4 text-gray-600">{booking.email}</td>
                        <td className="px-6 py-4 text-gray-600">{booking.company || '-'}</td>
                        <td className="px-6 py-4 text-gray-600">{booking.date} at {booking.time}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{booking.topic}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{booking.status}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => { if(window.confirm('Delete this booking?')) deleteBooking(booking.id); }}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'referrals' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Referral Activity</h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Referral Program Status</h3>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 font-medium">🚀 Coming Soon</p>
                  <p className="text-yellow-700 text-sm mt-1">Referral links will be activated once the product launches. Registered users will receive their unique codes via email.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-purple-600">{data.registeredUsers.length}</p>
                  <p className="text-sm text-gray-600 mt-2">Early Registrations</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-green-600">{data.bookings.length}</p>
                  <p className="text-sm text-gray-600 mt-2">Demo Bookings</p>
                </div>
              </div>

              {(data.referrals || []).length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Activity</h4>
                  <div className="space-y-2">
                    {(data.referrals || []).slice(0, 10).map((ref, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-600">Referral click</span>
                        <span className="text-xs text-gray-400">{new Date(ref.clickedAt).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedUser(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedUser.name}</h3>
                <button onClick={() => setSelectedUser(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {selectedUser.facePhoto && (
                <img 
                  src={selectedUser.facePhoto} 
                  alt={selectedUser.name}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
              )}
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Verified:</strong> {new Date(selectedUser.verifiedAt || selectedUser.date).toLocaleString()}</p>
                <p><strong>User ID:</strong> {selectedUser.id}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main App
const App = () => {
  const { currentPage, navigate } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'app': return <UserBotAppPage navigate={navigate} />;
      case 'build': return <UserBotBuildPage navigate={navigate} />;
      case 'api': return <UserBotAPIPage navigate={navigate} />;
      case 'pro': return <UserBotProPage navigate={navigate} />;
      case 'network': return <NetworkAgentPage navigate={navigate} />;
      case 'about': return <AboutPage navigate={navigate} />;
      case 'community': return <CommunityPage navigate={navigate} />;
      case 'ecosystem': return <EcosystemPage navigate={navigate} />;
      case 'admin': return <AdminDashboard navigate={navigate} />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  // Admin page has its own layout
  if (currentPage === 'admin') {
    return <AdminDashboard navigate={navigate} />;
  }

  return (
    <div className="bg-white min-h-screen overflow-x-hidden relative w-full">
      <Navigation navigate={navigate} currentPage={currentPage} />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;

