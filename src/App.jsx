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
  Wifi, WifiOff, Navigation as NavigationIcon, Signal, Router, Network, Timer,
  Trash2, Download, Search, Filter, RefreshCw, Settings, LogOut, UserCheck, Link2, CalendarDays
} from 'lucide-react';

// Simple Router
const useRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  return { currentPage, navigate };
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
        {/* Exact UserBot.Hub Swirl Logo */}
        <div className="w-10 h-10 shrink-0 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              {/* Blue gradient for outer swirl - dark teal to deep blue */}
              <linearGradient id="blueSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A5F" />
                <stop offset="30%" stopColor="#2563EB" />
                <stop offset="60%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              {/* Green gradient for inner swirl - lime to yellow-green */}
              <linearGradient id="greenSwirl" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#84CC16" />
                <stop offset="40%" stopColor="#A3E635" />
                <stop offset="100%" stopColor="#BEF264" />
              </linearGradient>
              {/* Glow filter for particles */}
              <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer Blue Crescent Swirl */}
            <path
              d="M 70 15 
                 C 90 25, 95 50, 85 70 
                 C 75 90, 50 95, 35 85
                 C 45 80, 55 70, 60 55
                 C 65 40, 60 25, 70 15"
              fill="url(#blueSwirl)"
            />
            
            {/* Inner Green Crescent Swirl */}
            <path
              d="M 30 85 
                 C 10 75, 5 50, 15 30 
                 C 25 10, 50 5, 65 15
                 C 55 20, 45 30, 40 45
                 C 35 60, 40 75, 30 85"
              fill="url(#greenSwirl)"
            />
            
            {/* Glowing particles - green dots */}
            <motion.circle cx="78" cy="22" r="3" fill="#84CC16" filter="url(#particleGlow)"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle cx="88" cy="45" r="2.5" fill="#84CC16" filter="url(#particleGlow)"
              animate={{ opacity: [1, 0.7, 1], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle cx="72" cy="78" r="2" fill="#84CC16" filter="url(#particleGlow)"
              animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.15, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle cx="18" cy="22" r="2.5" fill="#84CC16" filter="url(#particleGlow)"
              animate={{ opacity: [1, 0.8, 1], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.9 }}
            />
            <motion.circle cx="12" cy="55" r="2" fill="#84CC16" filter="url(#particleGlow)"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: 1.2 }}
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
              <span className="text-cyan-400 font-bold text-lg">UserBot</span>
              <span className="text-cyan-300 font-bold text-lg">.Hub</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

// Hero Logo - Large animated version for pages - EXACT match to UserBot.Hub
const HeroLogo = ({ size = 200, showText = true }) => {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: size, height: size }} className="relative">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            {/* Blue gradient for outer swirl - dark teal to deep blue */}
            <linearGradient id="heroBlueSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A5F" />
              <stop offset="30%" stopColor="#2563EB" />
              <stop offset="60%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            {/* Green gradient for inner swirl - lime to yellow-green */}
            <linearGradient id="heroGreenSwirl" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="40%" stopColor="#A3E635" />
              <stop offset="100%" stopColor="#BEF264" />
            </linearGradient>
            {/* Glow filter for particles */}
            <filter id="heroParticleGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Blue Crescent Swirl */}
          <path
            d="M 70 15 
               C 90 25, 95 50, 85 70 
               C 75 90, 50 95, 35 85
               C 45 80, 55 70, 60 55
               C 65 40, 60 25, 70 15"
            fill="url(#heroBlueSwirl)"
          />
          
          {/* Inner Green Crescent Swirl */}
          <path
            d="M 30 85 
               C 10 75, 5 50, 15 30 
               C 25 10, 50 5, 65 15
               C 55 20, 45 30, 40 45
               C 35 60, 40 75, 30 85"
            fill="url(#heroGreenSwirl)"
          />
          
          {/* Glowing particles - green dots with animation */}
          <motion.circle cx="78" cy="22" r="4" fill="#84CC16" filter="url(#heroParticleGlow)"
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle cx="90" cy="45" r="3" fill="#84CC16" filter="url(#heroParticleGlow)"
            animate={{ opacity: [1, 0.7, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle cx="75" cy="80" r="2.5" fill="#84CC16" filter="url(#heroParticleGlow)"
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle cx="18" cy="20" r="3" fill="#84CC16" filter="url(#heroParticleGlow)"
            animate={{ opacity: [1, 0.8, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.9 }}
          />
          <motion.circle cx="10" cy="55" r="2.5" fill="#84CC16" filter="url(#heroParticleGlow)"
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: 1.2 }}
          />
          <motion.circle cx="25" cy="78" r="2" fill="#84CC16" filter="url(#heroParticleGlow)"
            animate={{ opacity: [0.9, 1, 0.9], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
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
          <span className="text-3xl md:text-4xl font-bold text-cyan-400">UserBot</span>
          <span className="text-3xl md:text-4xl font-bold text-cyan-300">.Hub</span>
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

    // Rotation animation
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);

    // Animate colored dots randomly appearing
    const colorInterval = setInterval(() => {
      if (barsRef.current.length > 0) {
        const randomBars = [];
        for (let i = 0; i < 4; i++) {
          const randomBar = barsRef.current[Math.floor(Math.random() * barsRef.current.length)];
          if (randomBar) {
            randomBars.push({
              ...randomBar,
              uniqueId: `${randomBar.id}-${Date.now()}-${i}`,
              color: ['#F97316', '#3B82F6', '#F97316'][Math.floor(Math.random() * 3)] // Orange and blue
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
  }, []);

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
    <div className="relative w-full h-[500px] overflow-hidden">
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
  const [isScanning, setIsScanning] = useState(false);
  const [networks, setNetworks] = useState([]);
  const [connected, setConnected] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  const startScan = () => {
    setIsScanning(true);
    setNetworks([]);
    setConnected(false);
    
    setTimeout(() => {
      setNetworks([
        { name: 'CoffeeShop_WiFi', strength: 85, secure: false },
        { name: 'PublicLibrary', strength: 72, secure: true },
        { name: 'EmergencyNet', strength: 95, secure: false },
      ]);
      setIsScanning(false);
    }, 2000);
  };

  const connectToNetwork = (network) => {
    setConnected(true);
    setTimeLeft(300);
  };

  useEffect(() => {
    if (connected && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [connected, timeLeft]);

  return (
    <div className="bg-gray-900 rounded-2xl p-6 text-white max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        <span className="font-semibold">Network Expert Agent Chat</span>
        <span className="ml-auto text-gray-400 text-sm">Emergency API</span>
      </div>

      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <p className="text-green-400">Hi! I'm your networking assistant. Ask about OSI, TCP/IP, DNS, DHCP, routing, and more.</p>
      </div>

      {!isScanning && !connected && networks.length === 0 && (
        <div className="text-center py-8">
          <Wifi className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">Ready to find emergency network access</p>
          <button
            onClick={startScan}
            className="px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Scan for Networks
          </button>
        </div>
      )}

      {isScanning && (
        <div className="text-center py-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <Signal className="w-16 h-16 text-green-500 mx-auto" />
          </motion.div>
          <p className="text-gray-400 mt-4">Scanning for available networks...</p>
        </div>
      )}

      {networks.length > 0 && !connected && (
        <div className="space-y-3">
          {networks.map((network, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => connectToNetwork(network)}
              className="w-full p-4 bg-gray-800 rounded-xl flex items-center gap-4 hover:bg-gray-700 transition"
            >
              <Wifi className={`w-5 h-5 ${network.strength > 80 ? 'text-green-500' : 'text-yellow-500'}`} />
              <div className="flex-1 text-left">
                <p className="font-medium">{network.name}</p>
                <p className="text-gray-400 text-sm">{network.strength}% signal</p>
              </div>
              {network.secure ? <Lock className="w-4 h-4 text-gray-400" /> : <span className="text-xs text-green-400">Open</span>}
            </motion.button>
          ))}
        </div>
      )}

      {connected && (
        <div className="text-center py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-8 h-8 text-green-500" />
          </motion.div>
          <p className="text-green-400 font-semibold mb-2">Connected to EmergencyNet</p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Timer className="w-4 h-4" />
            <span>Emergency access: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      )}

      <div className="flex gap-2 mt-4">
        {['OSI model', 'TCP reliability', 'DHCP', 'DNS records'].map((tag) => (
          <button key={tag} className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-400 hover:text-white transition">
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your question and press Enter..."
          className="flex-1 px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition">
          Send
        </button>
      </div>
    </div>
  );
};

// Live Stats Ticker
const LiveStatsTicker = () => {
  const [mwei, setMwei] = useState(11.43);

  useEffect(() => {
    const interval = setInterval(() => {
      setMwei((10 + Math.random() * 5).toFixed(2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
const FaceIDVerification = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState('intro');
  const [progress, setProgress] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      return canvas.toDataURL('image/jpeg', 0.8);
    }
    return null;
  };

  const startCamera = async () => {
    if (!userName || !userEmail) {
      alert('Please enter your name and email');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 400, height: 400 } });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setStep('scanning');
      let prog = 0;
      const interval = setInterval(() => {
        prog += Math.random() * 12;
        if (prog >= 100) { 
          clearInterval(interval); 
          setProgress(100);
          // Capture photo before stopping stream
          const photoData = capturePhoto();
          setTimeout(() => { 
            setStep('success'); 
            setTimeout(() => { 
              streamRef.current?.getTracks().forEach(t => t.stop()); 
              onSuccess({ 
                name: userName, 
                email: userEmail, 
                facePhoto: photoData,
                verifiedAt: new Date().toISOString()
              }); 
            }, 2000); 
          }, 500); 
        }
        else setProgress(prog);
      }, 250);
    } catch { setStep('error'); }
  };

  useEffect(() => () => streamRef.current?.getTracks().forEach(t => t.stop()), []);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl">
        <canvas ref={canvasRef} className="hidden" />
        {step === 'intro' && (
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6"><ScanFace className="w-12 h-12 text-blue-600" /></div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Face ID Verification</h3>
            <p className="text-gray-600 mb-6 text-lg">Verify your identity to secure your spot as one of the first 2,000 users.</p>
            
            <div className="space-y-4 mb-6">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  value={userEmail} 
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4 text-left mb-8 bg-gray-50 p-6 rounded-2xl">
              {[{ icon: ShieldCheck, text: 'Secure & encrypted', color: 'text-green-500' }, { icon: Eye, text: 'Photo stored securely', color: 'text-blue-500' }, { icon: Lock, text: 'Prevents duplicates', color: 'text-purple-500' }].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-gray-700"><item.icon className={`w-6 h-6 ${item.color}`} /><span className="text-lg">{item.text}</span></div>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={onClose} className="flex-1 py-4 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition text-lg">Cancel</button>
              <button onClick={startCamera} disabled={!userName || !userEmail} className="flex-1 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"><Camera className="w-5 h-5" />Start Verification</button>
            </div>
          </div>
        )}
        {step === 'scanning' && (
          <div className="text-center">
            <div className="relative mb-6 rounded-2xl overflow-hidden"><video ref={videoRef} autoPlay playsInline muted className="w-full aspect-square object-cover" /><div className="absolute inset-0 border-4 border-blue-500 rounded-2xl"><motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute left-0 right-0 h-1 bg-blue-500 shadow-lg shadow-blue-500/50" /></div></div>
            <div className="mb-4"><div className="h-3 bg-gray-200 rounded-full overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{ width: `${progress}%` }} /></div></div>
            <p className="text-gray-500">Please keep your face centered</p>
          </div>
        )}
        {step === 'success' && (
          <div className="text-center py-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"><Check className="w-12 h-12 text-green-600" /></motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Verified!</h3>
            <p className="text-gray-600 text-lg">Welcome to UserBot Hub, {userName}!</p>
          </div>
        )}
        {step === 'error' && (
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6"><AlertCircle className="w-12 h-12 text-red-600" /></div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Camera Access Required</h3>
            <div className="flex gap-4"><button onClick={onClose} className="flex-1 py-4 rounded-xl bg-gray-100 text-gray-700 font-semibold">Cancel</button><button onClick={() => setStep('intro')} className="flex-1 py-4 rounded-xl bg-blue-600 text-white font-semibold">Try Again</button></div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// Navigation
const Navigation = ({ navigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <AnimatedLogo navigate={navigate} />
          <div className="hidden md:flex items-center gap-1 bg-gray-100 p-1 rounded-full">
            {[{ id: 'app', name: 'USERBOT APP' }, { id: 'build', name: 'USERBOT BUILD' }, { id: 'api', name: 'USERBOT API' }, { id: 'pro', name: 'USERBOT PRO' }].map((item) => (
              <button key={item.id} onClick={() => navigate(item.id)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${currentPage === item.id ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'}`}>{item.name}</button>
            ))}
          </div>
          <button className="md:hidden text-gray-700 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-white pt-24">
            <div className="flex flex-col p-6 space-y-2">
              {['app', 'build', 'api', 'pro', 'network', 'about', 'community'].map((item) => (
                <button key={item} onClick={() => { navigate(item); setMobileMenuOpen(false); }} className="text-left text-2xl font-medium py-4 border-b border-gray-100 hover:text-blue-600 transition capitalize">{item === 'network' ? 'Network Agent' : item}</button>
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
        { id: 'app', label: 'UserBot App', hasArrow: false },
        { id: 'build', label: 'UserBot Build', hasArrow: true },
        { id: 'api', label: 'UserBot API', hasArrow: false },
        { id: 'pro', label: 'UserBot Pro', hasArrow: false },
        { id: 'network', label: 'Network Agent', hasArrow: true, isNew: true },
        { id: 'ecosystem', label: 'Ecosystem', hasArrow: true },
        { id: 'community', label: 'Community', hasArrow: true },
        { id: 'about', label: 'About', hasArrow: true }
      ].map((item) => (
        <button key={item.id} onClick={() => navigate(item.id)} className={`w-full text-left px-4 py-3 rounded-lg font-medium flex items-center justify-between transition ${currentPage === item.id ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}>
          <span className="flex items-center gap-2">
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
// Data management functions
const useUserBotData = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('userbothub_data');
    if (saved) return JSON.parse(saved);
    return {
      registeredUsers: [],
      totalRegistered: 0, // Real registrations only
      maxUsers: 2000,
      bookings: [],
      referrals: [],
      referralCode: 'USER' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      referralCount: 0,
      currentUser: null,
      adminEmail: import.meta.env.VITE_ADMIN_EMAIL || 'admin@userbothub.com',
      adminPassword: import.meta.env.VITE_ADMIN_PASSWORD || 'changeme123'
    };
  });

  useEffect(() => {
    localStorage.setItem('userbothub_data', JSON.stringify(data));
  }, [data]);

  const registerUser = (userData) => {
    const newUser = {
      id: Date.now(),
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
    return newUser;
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

  const deleteUser = (userId) => {
    setData(prev => ({
      ...prev,
      registeredUsers: prev.registeredUsers.filter(u => u.id !== userId),
      totalRegistered: Math.max(0, prev.totalRegistered - 1)
    }));
  };

  const deleteBooking = (bookingId) => {
    setData(prev => ({
      ...prev,
      bookings: prev.bookings.filter(b => b.id !== bookingId)
    }));
  };

  const clearAllData = () => {
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
  const { data, registerUser, addBooking } = useUserBotData();

  const spotsRemaining = data.maxUsers - data.totalRegistered;

  const handleFaceIDSuccess = (userData) => {
    registerUser(userData);
    setShowFaceID(false);
    setIsRegistered(true);
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

  return (
    <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
      <LiveStatsTicker />
      <Sidebar navigate={navigate} currentPage="home" />

      <main className="relative z-10 p-6 lg:p-12 xl:p-16">
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
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Network Expert Agent</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">Emergency network access tool designed to help users quickly regain connectivity. Provides temporary access to available networks for up to 5 minutes and navigates to the nearest accessible point.</p>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-xl mb-4">Key Features</h3>
                {[
                  { icon: Wifi, text: 'Automatic network scanning & connection' },
                  { icon: Timer, text: '5-minute emergency access windows' },
                  { icon: MapPin, text: 'Navigate to nearest access points' },
                  { icon: Shield, text: 'Secure temporary connections' },
                  { icon: MessageSquare, text: 'AI-powered networking assistance' }
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 mb-16 border border-gray-100">
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
                        {user.facePhoto ? (
                          <img src={user.facePhoto} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                            {user.avatar}
                          </div>
                        )}
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
const ProductPage = ({ navigate, currentPage, title, subtitle, description, color, colorClass, icon: Icon, features, useCases, integrations, testimonial }) => (
  <div className="min-h-screen bg-white pt-20 lg:pl-64 relative">
    <LiveStatsTicker />
    <Sidebar navigate={navigate} currentPage={currentPage} />
    <main className="relative z-10 p-6 lg:p-12 xl:p-16">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition"><ArrowRight className="w-4 h-4 rotate-180" />Back to Home</button>
      <div className="flex items-start gap-6 mb-12">
        <div className={`w-20 h-20 rounded-2xl ${colorClass} flex items-center justify-center shrink-0`}><Icon className="w-10 h-10 text-white" /></div>
        <div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">{title}</h1><p className="text-xl text-gray-500">{subtitle}</p></div>
      </div>
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
    features={['Multi-model AI chat with GPT-4, Claude, Gemini & more', 'Real-time voice conversations', 'Image generation with DALL-E & Midjourney', 'Document analysis', 'Code assistance', 'Marketing content generation', 'Social media automation', 'Resume builder']}
    useCases={[{ icon: PenTool, title: 'Writers', desc: 'Generate content 10x faster' }, { icon: Building, title: 'Business', desc: 'Create proposals effortlessly' }, { icon: Code, title: 'Developers', desc: 'Write code in any language' }]}
    integrations={['Slack', 'Notion', 'Google Docs', 'Microsoft Office', 'Zapier', 'Discord']}
  />
);

const UserBotBuildPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="build" title="UserBot Build" subtitle="Developer tools & SDKs" description="Build AI-powered applications with our comprehensive developer toolkit. Access SDKs in multiple languages, starter templates, and extensive documentation." color="pink" colorClass="bg-pink-500" icon={Code}
    features={['SDKs for JavaScript, Python, Go, Rust & more', 'Command-line tools', 'Starter templates', 'API documentation', 'Webhook integrations', 'Testing tools', 'CI/CD integrations', 'Open-source libraries']}
    useCases={[{ icon: Smartphone, title: 'Mobile Apps', desc: 'Build AI-native iOS and Android apps' }, { icon: Globe, title: 'Web Apps', desc: 'Create intelligent web experiences' }, { icon: Cpu, title: 'Backend', desc: 'Power APIs with AI' }]}
    integrations={['GitHub', 'GitLab', 'Vercel', 'AWS', 'Google Cloud', 'Azure', 'Docker']}
  />
);

const UserBotAPIPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="api" title="UserBot API" subtitle="Powerful REST APIs" description="Access our entire AI infrastructure through simple REST APIs. From chat completions to content generation, integrate AI into any application." color="gold" colorClass="bg-yellow-600" icon={Globe}
    features={['Chat completions with streaming', 'Content generation', 'Code assistance', 'Image generation', 'Document parsing', 'Multi-language translation', '99.9% uptime SLA', 'Global edge deployment']}
    useCases={[{ icon: MessageSquare, title: 'Chatbots', desc: 'Build intelligent conversations' }, { icon: FileText, title: 'Content', desc: 'Generate at scale' }, { icon: BarChart3, title: 'Analytics', desc: 'Extract insights from data' }]}
    integrations={['REST', 'GraphQL', 'WebSocket', 'gRPC', 'OpenAPI', 'Postman']}
  />
);

const UserBotProPage = ({ navigate }) => (
  <ProductPage navigate={navigate} currentPage="pro" title="UserBot Pro" subtitle="Enterprise AI solutions" description="Scale AI across your organization with unlimited access, dedicated support, custom model training, and enterprise-grade security." color="blue" colorClass="bg-blue-500" icon={Building}
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
  const { data, deleteUser, deleteBooking, clearAllData } = useUserBotData();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    // Check against hardcoded admin credentials
    const validEmail = 'gattineniavinash4@gmail.com';
    const validPassword = 'Sambasivarao@04';
    
    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const filteredUsers = data.registeredUsers.filter(user => 
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
          <button onClick={() => navigate('home')} className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 transition text-sm">
            ← Back to Website
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
            <button onClick={exportData} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition flex items-center gap-2">
              <Download className="w-4 h-4" /> Export Data
            </button>
            <button onClick={() => { if(window.confirm('Clear ALL data? This cannot be undone!')) clearAllData(); }} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition flex items-center gap-2">
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
            <button onClick={() => navigate('home')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition flex items-center gap-2">
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
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Face ID Verified Users ({filteredUsers.length})</h2>
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
                        onClick={() => { if(window.confirm(`Delete ${user.name}?`)) deleteUser(user.id); }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete User"
                      >
                        <Trash2 className="w-5 h-5" />
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

  // Check URL for admin access (secret route)
  useEffect(() => {
    const checkAdminRoute = () => {
      const hash = window.location.hash;
      if (hash === '#admin' || hash === '#/admin') {
        navigate('admin');
      }
    };
    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    return () => window.removeEventListener('hashchange', checkAdminRoute);
  }, [navigate]);

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
    <div className="bg-white min-h-screen">
      <Navigation navigate={navigate} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
