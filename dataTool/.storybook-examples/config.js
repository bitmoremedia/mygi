import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories/examples');
}

configure(loadStories, module);
