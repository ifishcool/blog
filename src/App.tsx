import { Suspense, lazy, useRef } from 'react';
import '@vy/App.css';
import Hero from '@vy/sections/Hero';
import IntroGate from '@vy/components/layout/IntroGate';
import TopNav from '@vy/components/layout/TopNav';
import { useIntroGate } from '@vy/hooks/useIntroGate';
import { useTopNavMenu } from '@vy/hooks/useTopNavMenu';
import { useSmoothScroll } from '@vy/hooks/useSmoothScroll';

const ProjectsStrip = lazy(() => import('@vy/sections/ProjectsStrip'));
const TextScene = lazy(() => import('@vy/sections/TextScene'));
const OpenSourceShowcase = lazy(
  () => import('@vy/sections/OpenSourceShowcase')
);
const BigFooter = lazy(() => import('@vy/sections/BigFooter'));

function App() {
  const headerRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const { introVisible, introAnimatingOut, handleIntroEnter, introReady } =
    useIntroGate();

  const { menuOpen, menuAnimatingOut, handleToggleMenu } = useTopNavMenu(
    headerRef,
    dropdownRef
  );

  const appRootClassName = introVisible
    ? 'app-root app-root--intro-open'
    : 'app-root';

  useSmoothScroll();

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <div className={appRootClassName}>
          {/* Only start Hero and Projects animations after intro gate is fully gone */}
          <div className='hero-projects-shell' ref={shellRef}>
            <IntroGate
              visible={introVisible}
              animatingOut={introAnimatingOut}
              onEnter={handleIntroEnter}
            />

            <TopNav
              ref={headerRef}
              menuOpen={menuOpen}
              menuAnimatingOut={menuAnimatingOut}
              onToggleMenu={handleToggleMenu}
              dropdownRef={dropdownRef}
            />
            <Hero introReady={introReady} />
            <div id='projects'>
              <Suspense fallback={null}>
                <ProjectsStrip introReady={introReady} shellRef={shellRef} />
              </Suspense>
            </div>
            <div id='about'>
              <Suspense fallback={null}>
                <TextScene />
              </Suspense>
            </div>
            <div id='notes'>
              <Suspense fallback={null}>
                <OpenSourceShowcase />
              </Suspense>
            </div>
            <div id='contact'>
              <Suspense fallback={null}>
                <BigFooter />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
