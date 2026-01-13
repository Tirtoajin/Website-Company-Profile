// src/data/content.js
import { Building2, Factory, HardHat } from "lucide-react";

export const solutions = [
  {
    id: 1,
    title: "Dinding Retak",
    image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=600",
    desc: "Solusi Plester & Acian",
    linkTarget: "?masalah=dinding-retak",
  },
  {
    id: 2,
    title: "Keramik Copot",
    image: "https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=600",
    desc: "Perekat High-Bond",
    linkTarget: "?masalah=keramik-copot",
  },
  {
    id: 3,
    title: "Lantai Rusak",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
    desc: "Floor Hardener",
    linkTarget: "?masalah=lantai-rusak",
  },
  {
    id: 4,
    title: "Dak Bocor",
    image: "https://images.unsplash.com/photo-1657280952483-1a3f4940f892?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Waterproofing",
    linkTarget: "?masalah=dak-bocor",
  },
];

export const projects = [
  { id: 1, icon: <Building2 size={28} />, title: "Bekasi Mixed Use", location: "Bekasi" },
  { id: 2, icon: <Building2 size={28} />, title: "OCD Tower", location: "Jakarta" },
  { id: 3, icon: <Factory size={28} />, title: "HBR Girder", location: "Jakut" },
  { id: 4, icon: <Building2 size={28} />, title: "Summarecon", location: "Bogor" },
  { id: 5, icon: <Factory size={28} />, title: "MRT Fase 202", location: "Jakarta" },
  { id: 6, icon: <HardHat size={28} />, title: "ADR PIK", location: "Jakut" },
];
