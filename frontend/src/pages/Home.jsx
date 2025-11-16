import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceStrip from '../components/ServiceStrip.jsx';
import ProjectGrid from '../components/ProjectGrid.jsx';

const Home = () => (
  <div className="layout">
    <section className="hero">
      <div className="hero__bg-layer hero__bg-layer--1" />
      <div className="hero__bg-layer hero__bg-layer--2" />
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="hero__logo">CREATIVE SPACE</div>
        <h1 className="hero__title">
          We Create Digital Experiences<br />That Define Tomorrow.
        </h1>
        <p className="hero__subtitle">
          Creative Space is a high-end digital agency specializing in design, development, and brand transformation.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">Start a Project</Link>
          <Link to="/projects" className="btn btn--ghost">View Our Work</Link>
        </div>
      </motion.div>
    </section>

    <section className="section section--strip">
      <ServiceStrip />
    </section>

    <section className="section section--about">
      <div className="section__grid">
        <div>
          <SectionHeader
            eyebrow="About the Studio"
            title="Digital, but Human."
            subtitle="We build precise, conversion-driven experiences in pure black and white — no distractions, no noise."
          />
        </div>
        <div className="section__content">
          <p>
            Creative Space is a boutique digital agency that blends brutalist structures with refined details.
            Every project is engineered with clarity, scalable systems, and measurable impact.
          </p>
          <div className="pillars">
            <div className="pillar">
              <h4>Innovation</h4>
              <p>We explore what&apos;s next while obsessing over what actually works.</p>
            </div>
            <div className="pillar">
              <h4>Precision</h4>
              <p>We design and build with pixel-level care and clean architecture.</p>
            </div>
            <div className="pillar">
              <h4>Scalability</h4>
              <p>We create foundations that grow with your brand and product.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--process">
      <SectionHeader
        eyebrow="Process"
        title="A Clear, Four-Step Framework."
        subtitle="From discovery to deployment, the path is transparent and accountable."
      />
      <ol className="timeline">
        <li className="timeline__item">
          <span className="timeline__step">01</span>
          <h3>Discover</h3>
          <p>We dig into your brand, users, and goals to define a sharp problem statement.</p>
        </li>
        <li className="timeline__item">
          <span className="timeline__step">02</span>
          <h3>Design</h3>
          <p>We architect flows, craft UI systems, and iterate through prototypes.</p>
        </li>
        <li className="timeline__item">
          <span className="timeline__step">03</span>
          <h3>Develop</h3>
          <p>We ship clean, tested code optimized for speed, accessibility, and SEO.</p>
        </li>
        <li className="timeline__item">
          <span className="timeline__step">04</span>
          <h3>Deploy</h3>
          <p>We launch, monitor, and refine — ensuring performance in the real world.</p>
        </li>
      </ol>
    </section>

    <section className="section section--projects">
      <div className="section__header-row">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects That Live in Black & White."
          subtitle="A small sample of the interfaces, brands, and systems we have brought to life."
        />
        <Link to="/projects" className="link-underlined">View all projects</Link>
      </div>
      <ProjectGrid />
    </section>

    <section className="section section--testimonials">
      <div className="testimonial-strip">
        <p>“Creative Space rebuilt our digital presence with clarity and attitude.”</p>
        <p>“The most detail-obsessed team we’ve worked with.”</p>
        <p>“They think like strategists and build like engineers.”</p>
      </div>
    </section>
  </div>
);

export default Home;
