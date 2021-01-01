
import {
  AmpStory,
  AmpStoryPage,
  AmpStoryGridLayer,
  AmpImg,
  AmpHeader,
  AmpParagraph,
} from 'react-google-stories'

import './App.css'

function App() {
  return (
    // Cover page
    <AmpStory standalone
        title="Joy of Pets"
        publisher="react-google-stories tutorial"
        publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        poster-portrait-src="assets/cover.jpg">
      <AmpStoryPage id="cover">
        <AmpStoryGridLayer template="fill">
          <AmpImg src="assets/cover.jpg"
              width="720" height="1280"
              layout="responsive">
          </AmpImg>
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
          <AmpHeader title="The Joy of Pets" level={1} />
          <AmpParagraph text="By react-google-stories tutorials" />
        </AmpStoryGridLayer>
      </AmpStoryPage>

      </AmpStory>
  );
}

export default App;
