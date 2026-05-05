import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { Link } from "react-router-dom";
import pdfCinemaCover from "@/assets/projects/pdf-cinema/capa1.png";
import cscCover from "@/assets/projects/csc-digital/capa-csc.png";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  behanceLink?: string;
  caseLink?: string;
  coverImage?: string;
  coverNative?: ReactNode;
  bgColor: string;
  accentColor: string;
  isComingSoon?: boolean;
  coverPosition?: string;
  caseButtonBg?: string;
  caseButtonFg?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "PDF Cinema",
    subtitle: "Portfolio Website",
    description:
      "Conceito e product design para o site-portfólio do Assistente de Direção e Videomaker Pedro Ferreira. Uma plataforma digital com estética cinematográfica, rolagem suave e transições sutis.",
    tags: ["Product Design", "Web Design", "Figma", "Responsivo"],
    link: "https://pdfcinema.com/",
    behanceLink: "https://www.behance.net/gallery/219074537/PDF-Pedro-Ferreira-Site-de-Portfolio",
    caseLink: "/projetos/pdf-cinema",
    coverImage: pdfCinemaCover,
    bgColor: "from-[hsl(270,30%,12%)] to-[hsl(330,40%,15%)]",
    accentColor: "text-primary",
    caseButtonBg: "hsl(var(--primary))",
    caseButtonFg: "hsl(var(--primary-foreground))",
  },
  {
    number: "02",
    title: "CSC Digital",
    subtitle: "Caderneta de Saúde da Criança",
    description:
      "App mobile para digitalização da Caderneta de Saúde da Criança. Pesquisa com usuários, mapeamento de jornada, arquitetura da informação e design de interfaces acessíveis para famílias brasileiras.",
    tags: ["Product Design", "Mobile App", "UX Research", "Figma"],
    behanceLink: "https://www.behance.net/gallery/219069437/CSC-Digital-Caderneta-de-Saude-da-Crianca",
    caseLink: "/projetos/csc-digital",
    coverImage: cscCover,
    coverPosition: "left center",
    bgColor: "from-[hsl(210,60%,12%)] to-[hsl(210,40%,18%)]",
    accentColor: "text-[hsl(210,80%,60%)]",
    caseButtonBg: "hsl(210,80%,60%)",
    caseButtonFg: "#ffffff",
  },
  {
    number: "03",
    title: "Filmes Desmontados",
    subtitle: "Portfolio Website",
    description:
      "Conceito e design do site da produtora Filmes Desmontados. Design minimalista e funcional com foco no portfólio, usando laranja como accent color e navegação intuitiva.",
    tags: ["Product Design", "Web Design", "Minimalismo", "Responsivo"],
    link: "https://filmesdesmontados.com/",
    behanceLink: "https://www.behance.net/gallery/219143529/Filmes-Desmontados-Portfolio-Website",
    caseLink: "/projetos/filmes-desmontados",
    coverNative: (
      <div className="w-full h-full flex flex-col" style={{ background: "#F0EAD6" }}>
        <div className="h-[10%] bg-[#1A1612]" />
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10">
          <span className="font-mono-alt text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#1A1612]/60 mb-3">
            Scene 03 · Take 01
          </span>
          <h3 className="font-display text-2xl md:text-4xl font-extrabold leading-[0.95] text-[#1A1612]">
            FILMES
            <br />
            DESMONTADOS
          </h3>
          <div className="w-12 h-[3px] bg-[#F26B1F] my-4" />
          <span className="font-mono-alt text-xs uppercase tracking-[0.25em] text-[#F26B1F]">
            portfólio · 2025
          </span>
        </div>
        <div className="h-[10%] bg-[#1A1612]" />
      </div>
    ),
    bgColor: "from-[hsl(25,50%,10%)] to-[hsl(25,40%,16%)]",
    accentColor: "text-secondary",
    caseButtonBg: "#F26B1F",
    caseButtonFg: "#ffffff",
  },
  {
    number: "04",
    title: ".navi",
    subtitle: "Sociedade · Design × Dev",
    description:
      "Sociedade fundada com Luciana Vivarelli (dev). Uma dupla pequena que oferece UX/UI e desenvolvimento sem o vai-e-vem clássico entre quem desenha e quem implementa.",
    tags: ["Sociedade", "UX/UI", "Full-Stack", "Em construção"],
    link: "https://navy-portfolio.vercel.app/",
    caseLink: "/projetos/navi",
    coverNative: (
      <div className="w-full h-full flex flex-col justify-center px-8 md:px-12" style={{ background: "#0A0F1F" }}>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl md:text-4xl font-display font-bold" style={{ color: "#E940A8" }}>.</span>
          <span className="text-3xl md:text-4xl font-display font-bold text-white">nav</span>
          <span className="text-3xl md:text-4xl font-display font-bold" style={{ color: "#3DFF8C" }}>i</span>
        </div>
        <div className="w-12 h-[2px] bg-white/30 mb-3" />
        <span className="font-mono-alt text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
          sociedade · em construção
        </span>
        <span className="font-display text-lg md:text-xl text-white/90">
          design <span style={{ color: "#3DFF8C" }}>×</span> dev
        </span>
      </div>
    ),
    bgColor: "from-[hsl(220,50%,8%)] to-[hsl(220,40%,14%)]",
    accentColor: "text-[hsl(150,100%,62%)]",
    caseButtonBg: "#3DFF8C",
    caseButtonFg: "#0A0F1F",
  },
  {
    number: "05",
    title: "Em breve",
    subtitle: "Em andamento",
    description:
      "Sempre tem algo novo no forno. Spoiler: vai ser bom.",
    tags: ["Em andamento", "✦"],
    bgColor: "from-[hsl(160,30%,10%)] to-[hsl(270,20%,14%)]",
    accentColor: "text-accent",
    isComingSoon: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`min-h-screen flex items-center py-20 bg-gradient-to-br ${project.bgColor} relative`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative number */}
      <div className="absolute top-8 right-8 md:top-16 md:right-16">
        <span className="font-mono-alt text-[8rem] md:text-[12rem] font-bold text-foreground/[0.03] leading-none select-none">
          {project.number}
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className={`font-mono-alt text-sm uppercase tracking-[0.3em] ${project.accentColor}`}>
              [{project.number}]
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-2">
              {project.title}
            </h2>
            <p className={`font-mono-alt text-base uppercase tracking-wider ${project.accentColor} mb-6`}>
              {project.subtitle}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-alt text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {!project.isComingSoon && (
              <div className="flex gap-4 flex-wrap">
                {project.caseLink && (
                  <Link
                    to={project.caseLink}
                    data-hover
                    className="font-mono-alt text-sm uppercase tracking-wider px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                    style={{
                      background: project.caseButtonBg ?? "hsl(var(--foreground))",
                      color: project.caseButtonFg ?? "hsl(var(--background))",
                    }}
                  >
                    Ver case →
                  </Link>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    className={`font-mono-alt text-sm uppercase tracking-wider border ${project.accentColor} border-current px-5 py-2.5 rounded-full hover:bg-foreground/5 transition-colors`}
                  >
                    Ver site →
                  </a>
                )}
                {project.behanceLink && (
                  <a
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-hover
                    className="font-mono-alt text-sm uppercase tracking-wider text-foreground/50 border border-foreground/15 px-5 py-2.5 rounded-full hover:border-foreground/40 hover:text-foreground/80 transition-colors"
                  >
                    Case no Behance
                  </a>
                )}
              </div>
            )}

            {project.isComingSoon && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono-alt text-sm text-accent uppercase tracking-wider">
                  Em desenvolvimento
                </span>
              </div>
            )}
          </motion.div>

          {/* Right: Visual placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div
              data-hover
              className={`aspect-[4/3] rounded-2xl border border-foreground/5 overflow-hidden relative group ${
                project.isComingSoon ? "flex items-center justify-center" : ""
              }`}
              style={{
                background: project.isComingSoon
                  ? "linear-gradient(135deg, hsl(160,30%,15%), hsl(270,25%,18%))"
                  : `linear-gradient(135deg, hsl(var(--muted)), hsl(var(--card)))`,
              }}
            >
              {project.isComingSoon ? (
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground/10">
                  ✦ ✦ ✦
                </span>
              ) : project.coverNative ? (
                project.caseLink ? (
                  <Link to={project.caseLink} className="block w-full h-full group-hover:scale-105 transition-transform duration-500">
                    {project.coverNative}
                  </Link>
                ) : (
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                    {project.coverNative}
                  </div>
                )
              ) : project.coverImage ? (
                project.caseLink ? (
                  <Link to={project.caseLink} className="block w-full h-full">
                    <img
                      src={project.coverImage}
                      alt={`Capa do projeto ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <img
                    src={project.coverImage}
                    alt={`Capa do projeto ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
                    loading="lazy"
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                  <span className={`font-display text-4xl md:text-5xl font-bold ${project.accentColor} opacity-30`}>
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            {/* Floating badge */}
            {!project.isComingSoon && (
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-border/30 px-4 py-2 rounded-xl shadow-lg">
                <span className="font-mono-alt text-xs text-muted-foreground uppercase">
                  Lead Designer
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projetos">
      {/* Section header */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="font-mono-alt text-sm uppercase tracking-[0.3em] text-primary">
            Trabalhos
          </span>
          <div className="flex-1 h-px bg-border/30" />
          <span className="font-mono-alt text-sm text-muted-foreground">
            05 cases
          </span>
        </motion.div>
      </div>

      {projects.map((project, index) => (
        <ProjectCard key={project.number} project={project} index={index} />
      ))}
    </section>
  );
};

export default ProjectSection;