import Image from "next/image";
import { SiReact, SiNextdotjs, SiRedux, SiExpress, SiNestjs, SiNodedotjs, SiGraphql, SiJavascript, SiTypescript, SiMongodb, SiHtml5, SiCss3, SiBootstrap, SiJquery, SiPhp, SiMysql, SiRedis, SiDocker, SiGitlab, SiAwslambda, SiAmazons3, SiAmazonec2, SiPostman, SiNpm } from "react-icons/si";
import { FaGithub, FaMicrosoft, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiCheckCircle, HiArrowRight, HiDownload, HiOutlineCalendar, HiOutlineFolder, HiOutlineUserGroup, HiServer } from "react-icons/hi";
import { TbSparkles, TbApi, TbApps, TbExternalLink, TbBrandReact, TbDeviceDesktop, TbCloud, TbRocket, TbShieldCheck, TbMail, TbPhone, TbMapPin } from "react-icons/tb";
import CountComponent from "./count.component";
import ContactComponent from "./contact.component";

export const Home = () => {

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">

      <div id="home" className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
              <span className="block">HI I'M</span>
              <span className="relative block text-brand-primary">
                Software Developer
                {" "}
                <span className="absolute">
                  {/* <span className="absolute right-12 top-1"> */}
                  <span className="text-2xl bg-brand-accent text-white rounded-full h-8 w-8 flex items-center justify-center">
                    😊
                  </span>
                </span>
              </span>
            </h1>
          </div>

          <p className="text-lg text-brand-muted">
            Lorem ipsum dolor sit amet consectetur. Vitae dolor ipsum et nulla
            non sit ipsum et. Ut porttitor aliquam blandit consequat at diam.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition">
              CONNECT WITH ME
            </button>
            <button className="px-6 py-3 border-2 border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition">
              START A PROJECT
            </button>
          </div>

          <div className="pt-8">
            <div className="flex flex-wrap items-center gap-5">
              <CountComponent />

              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  ></div>
                ))}
              </div>

              <div className="text-brand-muted">10+ Certified Clients</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative flex justify-center items-center p-2 rounded-full shadow-glow">
            <Image
              src="/61230727.png"
              alt="Kishor Gupta portrait"
              width={400}
              height={400}
              className="rounded-full w-full h-auto object-cover border overflow-hidden"
            />

            <div className="absolute -right-4 top-10 bg-brand-secondary text-white p-3 rounded-xl transform rotate-3 shadow-glow">
              <div className="text-center">
                <p className="font-heading font-bold text-xl">Kishor Gupta</p>
                <p className="text-sm">❤️ JavaScript Wizard</p>
              </div>
            </div>

            <div className="absolute -right-12 top-1/2 flex flex-col gap-3">
              {[
                // { href: "#facebook", label: "Facebook", icon: <FaFacebookF aria-hidden className="w-4 h-4" /> },
                { href: "https://x.com/KishorG0102", label: "Twitter", icon: <FaTwitter aria-hidden className="w-4 h-4" /> },
                { href: "https://www.linkedin.com/in/kishor-gupta202", label: "LinkedIn", icon: <FaLinkedinIn aria-hidden className="w-4 h-4" /> },
                { href: "https://github.com/kishor-gupta", label: "GitHub", icon: <FaGithub aria-hidden className="w-4 h-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      { /* About + Skills Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> About me
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Turning ideas into delightful digital products
            </h2>
            <p className="mt-3 md:mt-4 text-brand-muted max-w-3xl mx-auto">
              I craft performant, accessible, and visually engaging web experiences.
              From rapid prototypes to production-grade apps, I love shipping things
              that users enjoy and teams can maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* About content */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg p-6 md:p-8 overflow-hidden ring-1 ring-black/5">
              {/* decorative glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-sky-100 blur-3xl opacity-70" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                A bit about me
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                I’m a developer who enjoys close collaboration with designers and
                product teams. My focus is on clean architecture, reusable components,
                and smooth UX. I care about code quality, documentation, and the tiny
                details that make an interface feel alive.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Pixel-perfect UI with component-driven development",
                  "Type-safe code, linted and tested for confidence",
                  "Performance and accessibility baked in by default",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                      <HiCheckCircle className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition shadow-sm"
                >
                  Let’s work together
                  <HiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 font-semibold hover:bg-gray-50 transition"
                >
                  <HiDownload className="h-5 w-5" /> Download CV
                </a>
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  {
                    label: "Years",
                    value: "5+",
                    Icon: HiOutlineCalendar,
                  },
                  {
                    label: "Projects",
                    value: "25+",
                    Icon: HiOutlineFolder,
                  },
                  {
                    label: "Clients",
                    value: "10+",
                    Icon: HiOutlineUserGroup,
                  },
                ].map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-gray-100 p-4 hover:shadow-sm transition bg-white"
                  >
                    <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 text-gray-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-2xl font-extrabold text-sky-500">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills: grouped categories with icon chips (based on your list) */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <TbSparkles className="text-sky-500" />
                  <h3 className="text-xl md:text-2xl font-heading font-semibold">
                    Tech Skills
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      label: "JavaScript",
                      icon: <SiJavascript className="text-yellow-500" />,
                    },
                    {
                      label: "TypeScript",
                      icon: <SiTypescript className="text-blue-600" />,
                    },
                    {
                      label: "REST API",
                      icon: <TbApi className="text-emerald-600" />,
                    },
                    {
                      label: "GraphQL",
                      icon: <SiGraphql className="text-pink-600" />,
                    },
                    {
                      label: "Microservice",
                      icon: <TbApps className="text-indigo-600" />,
                    },
                    { label: "Redux", icon: <SiRedux className="text-purple-600" /> },
                    { label: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
                    { label: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
                    {
                      label: "Bootstrap",
                      icon: <SiBootstrap className="text-violet-700" />,
                    },
                    { label: "jQuery", icon: <SiJquery className="text-sky-600" /> },
                    { label: "PHP", icon: <SiPhp className="text-indigo-600" /> },
                    {
                      label: "Node.js",
                      icon: <SiNodedotjs className="text-green-600" />,
                    },
                    { label: "React.js", icon: <SiReact className="text-sky-500" /> },
                    {
                      label: "React Native",
                      icon: <SiReact className="text-cyan-500" />,
                    },
                    {
                      label: "Express.js",
                      icon: <SiExpress className="text-gray-700" />,
                    },
                    { label: "NestJS", icon: <SiNestjs className="text-red-600" /> },
                    {
                      label: "Next.js",
                      icon: <SiNextdotjs className="text-black" />,
                    },
                    {
                      label: "SQL (MySQL)",
                      icon: <SiMysql className="text-sky-700" />,
                    },
                    {
                      label: "No‑SQL (MongoDB)",
                      icon: <SiMongodb className="text-green-700" />,
                    },
                    { label: "Redis", icon: <SiRedis className="text-red-600" /> },
                    { label: "Docker", icon: <SiDocker className="text-sky-600" /> },
                    {
                      label: "DevOps",
                      icon: <FaMicrosoft className="text-blue-600" />,
                    },
                    { label: "GitHub", icon: <FaGithub className="text-gray-900" /> },
                    {
                      label: "GitLab",
                      icon: <SiGitlab className="text-orange-600" />,
                    },
                    {
                      label: "AWS Lambda",
                      icon: <SiAwslambda className="text-orange-500" />,
                    },
                    {
                      label: "AWS EC2",
                      icon: <SiAmazonec2 className="text-orange-600" />,
                    },
                    {
                      label: "AWS S3",
                      icon: <SiAmazons3 className="text-orange-500" />,
                    },
                    {
                      label: "Azure Blob",
                      icon: <FaMicrosoft className="text-blue-600" />,
                    },
                    {
                      label: "Azure Key Vault",
                      icon: <FaMicrosoft className="text-blue-600" />,
                    },
                    {
                      label: "Azure Queue",
                      icon: <FaMicrosoft className="text-blue-600" />,
                    },
                    { label: "NPM", icon: <SiNpm className="text-red-600" /> },
                    {
                      label: "NPM packages",
                      icon: <SiNpm className="text-red-600" />,
                    },
                    {
                      label: "Postman",
                      icon: <SiPostman className="text-orange-500" />,
                    },
                    {
                      label: "Virtual Machine",
                      icon: <HiServer className="text-gray-700" />,
                    },
                  ].map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200 bg-gray-50 hover:bg-white hover:border-sky-300 hover:shadow-sm transition"
                    >
                      <span className="text-lg">{t.icon}</span>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>;

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Services
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold tracking-tight">
              What I can do for you
            </h2>
            <p className="mt-3 md:mt-4 text-brand-muted max-w-3xl mx-auto">
              From UI to infrastructure, I help teams ship fast, maintainable, and delightful products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Frontend Engineering",
                Icon: TbBrandReact,
                desc: "Modern, responsive, and accessible interfaces with React and TypeScript.",
                bullets: ["Component-driven", "Design systems / Tailwind", "Animations & micro‑interactions"],
              },
              {
                title: "Backend & APIs",
                Icon: TbApi,
                desc: "Robust REST/GraphQL APIs with Node.js, Express/Nest, and MongoDB/SQL.",
                bullets: ["Auth & RBAC", "Validation & testing", "Observability"],
              },
              {
                title: "Responsive UI & UX",
                Icon: TbDeviceDesktop,
                desc: "Mobile‑first layouts and product UX that feels fast and intuitive.",
                bullets: ["WCAG compliance", "Design handoff", "Prototyping"],
              },
              {
                title: "DevOps & Cloud",
                Icon: TbCloud,
                desc: "CI/CD, Docker, and cloud primitives on AWS/Azure for reliable delivery.",
                bullets: ["Pipelines", "Containers", "Infra basics"],
              },
              {
                title: "Performance & SEO",
                Icon: TbRocket,
                desc: "Profiling, code‑splitting, and Core Web Vitals for fast experiences.",
                bullets: ["Lighthouse", "Bundle analysis", "Caching"],
              },
              {
                title: "Consulting & Support",
                Icon: TbShieldCheck,
                desc: "Code reviews, audits, and ongoing maintenance to keep things healthy.",
                bullets: ["Audits", "Roadmaps", "Mentoring"],
              },
            ].map(({ title, Icon, desc, bullets }) => (
              <div
                key={title}
                className="group rounded-3xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow ring-1 ring-black/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-sky-600 border border-gray-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {bullets.map((b: string) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                        <HiCheckCircle className="h-3.5 w-3.5" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-semibold">
                    Let's talk <HiArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Projects
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Selected work I’m proud of
            </h2>
            <p className="mt-3 md:mt-4 text-brand-muted max-w-3xl mx-auto">
              A snapshot of products and experiments. I focus on clean code, performance,
              and delightful user experience.
            </p>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Desi Tesi",
                description:
                  "My personal site built with React, Vite, Tailwind, and TypeScript with attention to accessibility and motion.",
                tags: ["WordPress", "JavaScript"],
                live: "https://desitesi.com/",
                repo: "#",
                image: "/images/desitesi.png",
                colorFrom: "from-sky-100",
                colorTo: "to-indigo-100",
              },
              {
                title: "E‑commerce API",
                description:
                  "A RESTful backend with authentication, products, carts, and orders with robust validation and testing.",
                tags: ["Node", "Express", "MongoDB", "JWT"],
                live: "#",
                repo: "#",
                image: "/images/desitesi.png",
                colorFrom: "from-emerald-100",
                colorTo: "to-teal-100",
              },
              {
                title: "Realtime Chat",
                description:
                  "A modern chat app with rooms, presence, and message persistence. Optimized for low-latency updates.",
                tags: ["Next.js", "Socket.io", "Redis"],
                live: "#",
                repo: "#",
                image: "/images/desitesi.png",
                colorFrom: "from-fuchsia-100",
                colorTo: "to-pink-100",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group rounded-3xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow ring-1 ring-black/5"
              >
                <div
                  className={`relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.colorFrom} ${p.colorTo}`}
                >
                  {/* <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  /> */}
                  <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.08),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.06),transparent_45%)]" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">
                      {p.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-md bg-white/70 text-gray-600 border border-white/60 backdrop-blur">
                      case study
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 text-sm md:text-[15px] leading-relaxed">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 bg-gray-50 text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-semibold"
                  >
                    <TbExternalLink className="h-4 w-4" /> Live demo
                  </a>
                  <span className="h-4 w-px bg-gray-200" aria-hidden />
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-gray-800 hover:text-gray-900 font-semibold"
                  >
                    <FaGithub className="h-4 w-4" /> Source
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* View all */}
          <div className="mt-10 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              View all projects <HiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" /> Contact
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold tracking-tight">
              Let’s build something together
            </h2>
            <p className="mt-3 md:mt-4 text-brand-muted max-w-3xl mx-auto">
              Have an idea or a project in mind? Drop a message and I’ll get back within 1–2 days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact details */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 ring-1 ring-black/5">
              <h3 className="text-xl font-semibold text-gray-900">Reach me directly</h3>
              <p className="mt-2 text-gray-600">Prefer email or a quick call? I’m happy to connect.</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-sky-600 border border-gray-100">
                    <TbMail className="h-5 w-5" />
                  </span>
                  <a href="mailto:kishornathgupta1999@gmail.com" className="text-gray-800 hover:underline">kishornathgupta1999@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-sky-600 border border-gray-100">
                    <TbPhone className="h-5 w-5" />
                  </span>
                  <a href="tel:+918076542531" className="text-gray-800 hover:underline">+91 80765 42531</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-sky-600 border border-gray-100">
                    <TbMapPin className="h-5 w-5" />
                  </span>
                  <span className="text-gray-800">Remote • Open to worldwide</span>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600">
                Tip: Share timelines, budget range, and goals—this helps me reply with a precise plan.
              </div>
            </div>

            <ContactComponent />
          </div>
        </div>
      </section>
    </div>
  );
};
