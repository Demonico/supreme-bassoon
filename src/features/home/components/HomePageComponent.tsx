import DepartmentSection from './DepartmentSection';
import GetStartedSection from './GetStartedSection';
import HomeHero from './HomeHero';

export default function HomePageComponent() {
  return (
    <>
      <HomeHero />
      <DepartmentSection />
      <GetStartedSection />
    </>
  );
}
